import { isContext } from "vm";
import MainScene from "../Scenes/MainScene";
import { forEach } from "typescript-collections/dist/lib/arrays";



/**
 * Use this class for main implementation.
 *
 */
let sceneManager: MainScene;
let symbols_array!: Phaser.GameObjects.Sprite[];// symbols object array
let resetBtn!:Phaser.GameObjects.Sprite;// reset button
let board!: Card[];// game board
let totalTurnsCompleted!: number;// total amount of turns
let turnsLeft!: number;// The number of turns left to the player only if he made a mistake
let lastCardIndex!: number;
var isGamePaused!: boolean;// is game paused
var isOneCardOpen!: boolean;


const GREEN = 0x008000;
const RED = 0xff0000;
const CLEAR = 0xffffff;
const invisibleSymbol = "symbol_0.png";
const swapSymbol = "swapSymbol.png";
const winMessage = "You \n  Win";
const loseMessage = "You \n  Lose";

const goodFeedBackTxt = ["Great Job", "Well done!","Excellent"];
const badFeedBackTxt = ["Try again", "Oops Wrong","Try harder"];


export class GameManager {

  constructor(i_Scene: MainScene) {
    sceneManager = i_Scene;
    // initialize the game
    startGame();
    // initialize the reset button 
    resetAction();
    // initialize and set the game actions
    gameActions();
  }
}


function gameActions() {
  symbols_array.forEach((sprite:Phaser.GameObjects.Sprite, index) => {
    sprite.on("pointerdown", () => {
      const currentCard: Card = board[index];
      // Check if player has turns left
      if(!checkTurn()){
        gameOverLose();
      }
      // if game is paused ,cant touch anything
      if(isGamePaused) return;
      // Cannot touch or do something with Already matched card
      if(currentCard.isMatch) return;

      // if one card is selected we need to check the second card
      if (isOneCardOpen) {
        sprite.setTexture("symbols",currentCard.imgName.toString());
        // second card is selected and matches
        if (currentCard.imgName === board[lastCardIndex].imgName) {
         
          sprite.tint = GREEN; // change tint to green in match
          symbols_array[lastCardIndex].tint = GREEN; // change tint to green in match
          currentCard.isMatch = true;// card match
          board[lastCardIndex].isMatch = true;// card match
          isGamePaused = true;// game is paused when their was a match
          popUpFeedBackText(true);
          swapNonMatchingCards();
          if(checkGameWin()){
            GameStatsHelper.Instance.currentGameStats.timeCompleted = sceneManager.getTimer();
            gameOverWin();
          }
          sceneManager.time.delayedCall(2000, (currentSprite: Phaser.GameObjects.Sprite, lastSprite: Phaser.GameObjects.Sprite) => {
              currentSprite.tint = CLEAR;
              lastSprite.tint = CLEAR;
              isGamePaused = false;
          } ,[symbols_array[index], symbols_array[lastCardIndex]],sceneManager);
        }
         else {
          // second card is selected and doesn't matche
          GameStatsHelper.Instance.currentGameStats.failedTurnsCompleted++;
           
          sprite.tint = RED;// change tint to green in match
          symbols_array[lastCardIndex].tint = RED;// change tint to green in match
          isGamePaused = true;
          popUpFeedBackText(false);
          updateTurn();
          sceneManager.time.delayedCall(2000,  (currentSprite: Phaser.GameObjects.Sprite, lastSprite: Phaser.GameObjects.Sprite) => {
              currentSprite.tint = CLEAR;
              lastSprite.tint = CLEAR;
              currentSprite.setTexture("symbols", invisibleSymbol);
              lastSprite.setTexture(  "symbols", invisibleSymbol);
              isGamePaused = false;
          } ,[symbols_array[index], symbols_array[lastCardIndex]],sceneManager);
        }
        // after second card pick ,end of turn 
        lastCardIndex = -1;
        isOneCardOpen = false;
        GameStatsHelper.Instance.currentGameStats.totalTurnsCompleted++;
      } 
      else {
        // First card selected ,flip and show
        if(lastCardIndex == index) return;
        sprite.setTexture("symbols", board[index].imgName.toString());
        lastCardIndex = index;
        isOneCardOpen = true;
      }
    });
  });
}

// All game attributes initialization
function startGame() {
  totalTurnsCompleted = 0;
  turnsLeft = 6;
  lastCardIndex = -1;
  symbols_array = sceneManager.symbolsArr();
  resetBtn = sceneManager.getResetButton();

  GameStatsHelper.Instance.currentGameStats = new SingleGameStats(0, 0, 0);
  GameStatsHelper.Instance.printBoardStats();
  
  
  isGamePaused = false;
  isOneCardOpen = false;
  board = createBoard(4,3);
  printArray(board);

  updateLeaderboard();
}

// create the game board
function createBoard(rowSize: number, colSize: number): Card[] {
  let boardSize = rowSize * colSize;
  let newboard: Card[] = [];
  if(boardSize%2 != 0) return newboard;
  
  let j = boardSize / 2;
  for (let i = 0; i < boardSize - 1; i += 2) {
    let newCard1: Card = {imgName:"symbol_" + j + ".png",isMatch: false}
    let newCard2: Card = {imgName:"symbol_" + j + ".png",isMatch: false}
    newboard[i]= newCard1;
    newboard[i+1]= newCard2;
    j--;
  }
  newboard = suffleBoard(newboard);
  return newboard;
}

// Suffle the cards in random order
function suffleBoard(array: Card[]): Card[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function printArray(array: Card[]){
  array.forEach((card:Card, index) =>{
    console.log(card.imgName + ": " + card.isMatch+"\n")
  });
}

// Check if has turns left
function checkTurn() : boolean{
  if(turnsLeft > 0){
      return true;
  }
  return false;
}

// Update turn system only if player didnt match
function updateTurn(){
  turnsLeft--;
  sceneManager.setTurnText(turnsLeft);
}
// popUp massage on the screen after good or bad actions
function popUpFeedBackText(hasMatch: boolean){
  let feedBack;
  if(hasMatch){
    feedBack = goodFeedBackTxt[Math.floor(Math.random()*goodFeedBackTxt.length)]
  }
  else{
    feedBack = badFeedBackTxt[Math.floor(Math.random()*badFeedBackTxt.length)]
  }
  setFeedback(feedBack);
}
// Set the popUp feedback in the scene
function setFeedback(feedBackTxt:String){
  sceneManager.getFeedBackText().setText(feedBackTxt.toString());
  sceneManager.getFeedBackText().visible = true;
  sceneManager.time.delayedCall(2000, () => {
    sceneManager.getFeedBackText().visible = false;
  });
}
// Check if player won the game
function checkGameWin(): boolean{

  for (const card of board){
    if (!card.isMatch) return false;
  }
  return true;
}
// GameOver and a massage for that
function gameOverLose(){

  sceneManager.gameOverMessage(loseMessage);
}
// Game win , save to leaderboard and massage
function gameOverWin(){

  const currentGameStats: SingleGameStats = GameStatsHelper.Instance.currentGameStats;
  GameStatsHelper.Instance.addScoretoBorad(currentGameStats);

  sceneManager.gameOverMessage(winMessage);
}
// reset button action 
function resetAction(){
  resetBtn.on("pointerdown",()=>{
      sceneManager.scene.restart();
  })
}
// Swap cards after player had match
function swapNonMatchingCards(){
  let firstCardIndex = -1;
  let secondCardIndex = -1;

  let doTheSwap = checkIfDoSwap();
  if(doTheSwap < 4) return ;

  while (firstCardIndex == -1 || secondCardIndex == -1) {
    const randomIndex = Math.floor(Math.random()*board.length);
    if (!board[randomIndex].isMatch) {
      if (firstCardIndex == -1) {
        firstCardIndex = randomIndex;
        continue;
      }

      if (firstCardIndex != randomIndex) {
        secondCardIndex = randomIndex;
        break;
      }
    }
  }
  [board[firstCardIndex], board[secondCardIndex]] = [board[secondCardIndex], board[firstCardIndex]];


  symbols_array[firstCardIndex].setTexture("swapSymbol",swapSymbol);
  symbols_array[secondCardIndex].setTexture("swapSymbol",swapSymbol);
  sceneManager.time.delayedCall(2000, (currentSprite: Phaser.GameObjects.Sprite, lastSprite: Phaser.GameObjects.Sprite) => {

    currentSprite.setTexture("symbols", invisibleSymbol);
    lastSprite.setTexture("symbols", invisibleSymbol);
  },[symbols_array[firstCardIndex], symbols_array[secondCardIndex]],sceneManager);
  
}
function checkIfDoSwap(){
  let nonMatchCards = 0;
  for (const card of board){
    if (!card.isMatch) nonMatchCards++;
  }
  return nonMatchCards;
}
// Update Leaderboard with players stats
  function updateLeaderboard(){
    if(GameStatsHelper.Instance.gameStats.length == 0) return;

    const statsArray = GameStatsHelper.Instance.gameStats;
    const leaderboardArray:Phaser.GameObjects.Text []  = sceneManager.getleaderBoardArr();

    for (const [index, stat] of statsArray.entries()) {
        leaderboardArray[index].setText((60-stat.timeCompleted)+"sec  "+stat.totalTurnsCompleted+"T'");
		}

  }



// Singleton Class for helping to save and show game scores
class GameStatsHelper {
	private static _instance: GameStatsHelper
  
   currentGameStats: SingleGameStats = new SingleGameStats(0,0,0);
   gameStats: SingleGameStats[] = [];
  
	public static get Instance() {
		return this._instance || (this._instance = new this());
	}
  
	private constructor() {
    this.gameStats.push(new SingleGameStats(3,5,36));
    this.gameStats.push(new SingleGameStats(4,7,14));
    this.gameStats.push(new SingleGameStats(2,8,24));
  }
  
	 addScoretoBorad(currentGameStats: SingleGameStats){
		if(this.gameStats.length<5){
			this.gameStats.push(currentGameStats);
			this.gameStats.sort((a:SingleGameStats, b:SingleGameStats) => a.totalTurnsCompleted - b.totalTurnsCompleted); 
			return;
		}
		if(this.gameStats[4].totalTurnsCompleted < currentGameStats.totalTurnsCompleted) return;
		this.gameStats[4] = currentGameStats;
		this.gameStats.sort((a:SingleGameStats, b:SingleGameStats) => a.totalTurnsCompleted - b.totalTurnsCompleted); 
	}
  
	printBoardStats() {
		for (const [index, stat] of this.gameStats.entries()) {
			console.log(`place: ${index + 1}, turn: ${stat.totalTurnsCompleted}, time: ${stat.timeCompleted}`);
		}
	}
  }
  class SingleGameStats{

	failedTurnsCompleted: number = 0;
	totalTurnsCompleted: number = 0;
	timeCompleted: number = -1;
  
	 constructor(failedTurnsCompleted: number, totalTurnsCompleted: number,timeCompleted: number){
		this.failedTurnsCompleted = failedTurnsCompleted;
		this.totalTurnsCompleted = totalTurnsCompleted;
		this.timeCompleted = timeCompleted;
	}
  }










