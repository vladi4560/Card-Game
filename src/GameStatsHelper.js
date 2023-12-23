"use strict";
// export class SingleGameStats{
//     failedTurnsCompleted: number = 0;
//     totalTurnsCompleted: number = 0;
//     timeCompleted: number = -1;
//      constructor(failedTurnsCompleted: number, totalTurnsCompleted: number,timeCompleted: number){
//         this.failedTurnsCompleted = failedTurnsCompleted;
//         this.totalTurnsCompleted = totalTurnsCompleted;
//         this.timeCompleted = timeCompleted;
//     }
//   }
// class GameStatsHelper {
//     private static _instance: GameStatsHelper
//    currentGameStats: SingleGameStats = new SingleGameStats(0,0,0);
//    gameStats: SingleGameStats[] = [];
//     public static get Instance() {
//         return this._instance || (this._instance = new this());
//     }
//     private constructor() {
//     }
//      addScoretoBorad(currentGameStats: SingleGameStats){
//         if(this.gameStats.length<5){
//             this.gameStats.push(currentGameStats);
//             this.gameStats.sort((a:SingleGameStats, b:SingleGameStats) => b.totalTurnsCompleted - a.totalTurnsCompleted); 
//             return;
//         }
//         if(this.gameStats[4].totalTurnsCompleted < currentGameStats.totalTurnsCompleted) return;
//         this.gameStats[4] = currentGameStats;
//         this.gameStats.sort((a:SingleGameStats, b:SingleGameStats) => b.totalTurnsCompleted - a.totalTurnsCompleted); 
//     }
//     printBoardStats() {
//         for (const [index, stat] of this.gameStats.entries()) {
//             console.log(`place: ${index + 1}, turn: ${stat.totalTurnsCompleted}, time: ${stat.timeCompleted}`);
//         }
//     }
// }
// export default GameStatsHelper;
