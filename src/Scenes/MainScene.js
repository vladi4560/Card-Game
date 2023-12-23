"use strict";
// You can write more code here
// / <reference path="../../node_modules/phaser/types/phaser.d.ts"/>
/* START OF COMPILED CODE */
Object.defineProperty(exports, "__esModule", { value: true });
class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
        this.timeLimit = 60; // Time limit in seconds
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    editorCreate() {
        // bg
        const bg = this.add.image(408, 368, "bg");
        bg.scaleX = 0.6;
        bg.scaleY = 0.6;
        // symbols_layer
        const symbols_layer = this.add.layer();
        // symbol11
        const symbol11 = this.add.sprite(215.0637664794922, 521.4500732421875, "symbols", "symbol_0.png");
        symbol11.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol11.scaleX = 0.5;
        symbol11.scaleY = 0.5;
        symbols_layer.add(symbol11);
        // symbol10
        const symbol10 = this.add.sprite(405.06378173828125, 521.4500732421875, "symbols", "symbol_0.png");
        symbol10.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol10.scaleX = 0.5;
        symbol10.scaleY = 0.5;
        symbols_layer.add(symbol10);
        // symbol9
        const symbol9 = this.add.sprite(595.0637817382812, 521.4500732421875, "symbols", "symbol_0.png");
        symbol9.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol9.scaleX = 0.5;
        symbol9.scaleY = 0.5;
        symbols_layer.add(symbol9);
        // symbol8
        const symbol8 = this.add.sprite(595, 392, "symbols", "symbol_0.png");
        symbol8.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol8.scaleX = 0.5;
        symbol8.scaleY = 0.5;
        symbols_layer.add(symbol8);
        // symbol7
        const symbol7 = this.add.sprite(405, 392, "symbols", "symbol_0.png");
        symbol7.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol7.scaleX = 0.5;
        symbol7.scaleY = 0.5;
        symbols_layer.add(symbol7);
        // symbol6
        const symbol6 = this.add.sprite(215, 392, "symbols", "symbol_0.png");
        symbol6.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol6.scaleX = 0.5;
        symbol6.scaleY = 0.5;
        symbols_layer.add(symbol6);
        // symbol5
        const symbol5 = this.add.sprite(595, 263, "symbols", "symbol_0.png");
        symbol5.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol5.scaleX = 0.5;
        symbol5.scaleY = 0.5;
        symbols_layer.add(symbol5);
        // symbol4
        const symbol4 = this.add.sprite(405, 263, "symbols", "symbol_0.png");
        symbol4.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol4.scaleX = 0.5;
        symbol4.scaleY = 0.5;
        symbols_layer.add(symbol4);
        // symbol3
        const symbol3 = this.add.sprite(215, 263, "symbols", "symbol_0.png");
        symbol3.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol3.scaleX = 0.5;
        symbol3.scaleY = 0.5;
        symbols_layer.add(symbol3);
        // symbol2
        const symbol2 = this.add.sprite(595, 135, "symbols", "symbol_0.png");
        symbol2.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol2.scaleX = 0.5;
        symbol2.scaleY = 0.5;
        symbols_layer.add(symbol2);
        // symbol1
        const symbol1 = this.add.sprite(405, 135, "symbols", "symbol_0.png");
        symbol1.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol1.scaleX = 0.5;
        symbol1.scaleY = 0.5;
        symbols_layer.add(symbol1);
        // symbol0
        const symbol0 = this.add.sprite(215, 135, "symbols", "symbol_0.png");
        symbol0.setInteractive(new Phaser.Geom.Circle(116, 116, 116), Phaser.Geom.Circle.Contains);
        symbol0.scaleX = 0.5;
        symbol0.scaleY = 0.5;
        symbols_layer.add(symbol0);
        // resetBtn
        const resetBtn = this.add.sprite(1093, 53, "reset");
        resetBtn.setInteractive(new Phaser.Geom.Rectangle(0, 0, 920, 395), Phaser.Geom.Rectangle.Contains);
        resetBtn.scaleX = 0.16;
        resetBtn.scaleY = 0.16;
        symbols_layer.add(resetBtn);
        // turn_txt
        const turn_txt = this.add.text(794, 117, "", {});
        turn_txt.scaleX = 1;
        turn_txt.scaleY = 1;
        turn_txt.text = "Turns Left:6\n";
        turn_txt.setStyle({ "fontStyle": "italic" });
        // time_txt
        const time_txt = this.add.text(794, 164, "", {});
        time_txt.scaleX = 1;
        time_txt.scaleY = 1;
        time_txt.text = "Time Left:\n";
        time_txt.setStyle({ "fontSize": "20px", "fontStyle": "italic" });
        // Leaderboard_layer
        const leaderboard_layer = this.add.layer();
        // Leaderboard
        const leaderboard = this.add.image(961, 388, "Leaderboard");
        leaderboard.scaleX = 0.3;
        leaderboard.scaleY = 0.3;
        leaderboard_layer.add(leaderboard);
        // Leaderboard First Place Text
        const leaderboardFirst = this.add.text(882, 325, "", {});
        leaderboardFirst.scaleX = 1;
        leaderboardFirst.scaleY = 1;
        leaderboardFirst.setStyle({ "fontSize": "24px", "color": "black" });
        leaderboard_layer.add(leaderboardFirst);
        // Leaderboard Second Place Text
        const leaderboardSecond = this.add.text(882, 368, "", {});
        leaderboardSecond.scaleX = 1;
        leaderboardSecond.scaleY = 1;
        leaderboardSecond.setStyle({ "fontSize": "24px", "color": "black" });
        leaderboard_layer.add(leaderboardSecond);
        // Leaderboard Third Place Text
        const leaderboardThird = this.add.text(882, 417, "", {});
        leaderboardThird.scaleX = 1;
        leaderboardThird.scaleY = 1;
        leaderboardThird.setStyle({ "fontSize": "24px", "color": "black" });
        leaderboard_layer.add(leaderboardThird);
        // Leaderboard Fourth Place Text
        const leaderboardFourth = this.add.text(882, 460, "", {});
        leaderboardFourth.scaleX = 1;
        leaderboardFourth.scaleY = 1;
        leaderboardFourth.setStyle({ "fontSize": "24px", "color": "black" });
        leaderboard_layer.add(leaderboardFourth);
        // Leaderboard Fifth Place Text
        const leaderboardFifth = this.add.text(882, 506, "", {});
        leaderboardFifth.scaleX = 1;
        leaderboardFifth.scaleY = 1;
        leaderboardFifth.setStyle({ "fontSize": "24px", "color": "black" });
        leaderboard_layer.add(leaderboardFifth);
        // startGameTxt
        const startGameTxt = this.add.text(140, 70, "", {});
        startGameTxt.scaleX = 11;
        startGameTxt.scaleY = 17;
        startGameTxt.text = "Start\nGame";
        startGameTxt.setStyle({ "align": "center", "backgroundColor": "#020202ff" });
        // feedBackTxt
        const feedBackTxt = this.add.text(283, -5, "", {});
        feedBackTxt.scaleX = 3;
        feedBackTxt.scaleY = 3.5;
        feedBackTxt.visible = false;
        feedBackTxt.setStyle({ "align": "center" });
        this.gameSound = this.sound.add('gameSound');
        this.gameSound.play();
        this.bg = bg;
        this.symbol11 = symbol11;
        this.symbol10 = symbol10;
        this.symbol9 = symbol9;
        this.symbol8 = symbol8;
        this.symbol7 = symbol7;
        this.symbol6 = symbol6;
        this.symbol5 = symbol5;
        this.symbol4 = symbol4;
        this.symbol3 = symbol3;
        this.symbol2 = symbol2;
        this.symbol1 = symbol1;
        this.symbol0 = symbol0;
        this.turn_txt = turn_txt;
        this.time_txt = time_txt;
        this.mainGameTxt = startGameTxt;
        this.feedBackTxt = feedBackTxt;
        this.resetBtn = resetBtn;
        this.leaderboardFifth = leaderboardFifth;
        this.leaderboardFourth = leaderboardFourth;
        this.leaderboardThird = leaderboardThird;
        this.leaderboardSecond = leaderboardSecond;
        this.leaderboardFirst = leaderboardFirst;
        this.events.emit("scene-awake");
    }
    /* START-USER-CODE */
    // Write your code here
    symbolsArr() {
        return [this.symbol0, this.symbol1, this.symbol2, this.symbol3, this.symbol4, this.symbol5, this.symbol6, this.symbol7, this.symbol8, this.symbol9, this.symbol10, this.symbol11];
    }
    getleaderBoardArr() {
        return [this.leaderboardFirst, this.leaderboardSecond, this.leaderboardThird, this.leaderboardFourth, this.leaderboardFifth];
    }
    preload() {
        this.load.pack("pack", './Assets/game_pack_sd.json');
        this.load.audio('gameSound', 'Assets/sounds/crashBandicoot.mp3');
        //this.load.pack("leaderboard", './Assets/image/Leaderboard.png');
        //this.load.pack("reset", './Assets/image/reset.png');
    }
    create() {
        this.editorCreate();
        this.game.events.emit("GameCreated");
        // Start Game Text
        this.time.delayedCall(1000, () => {
            if (this.mainGameTxt) {
                this.mainGameTxt.setVisible(false);
            }
        }, [], this);
        // Start Game Counterdown
        this.timeLimit = 60;
        if (this.countdownTimer) {
            this.countdownTimer.remove();
        }
        this.countdownTimer = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });
    }
    /* END-USER-CODE */
    // Countdown timer for the game
    updateTimer() {
        if (this.timeLimit > 0) {
            this.timeLimit--;
            if (this.time_txt) {
                this.time_txt.setText(`Time left: ${this.timeLimit}`);
            }
        }
        else {
            // Gameover
            const gameLose = "You \n Lose";
            this.gameOverMessage(gameLose.toString());
        }
    }
    getFeedBackText() {
        return this.feedBackTxt;
    }
    getGameText() {
        return this.mainGameTxt;
    }
    getTimer() {
        return this.timeLimit;
    }
    setFeedBackTextVisible(value) {
        this.feedBackTxt.visible = value;
    }
    setTurnText(turnNum) {
        this.turn_txt.setText("Turns Left:" + turnNum);
    }
    gameOverMessage(gameResult) {
        this.mainGameTxt.setText(gameResult);
        this.mainGameTxt.visible = true;
    }
    getResetButton() {
        return this.resetBtn;
    }
}
exports.default = MainScene;
/* END OF COMPILED CODE */
// You can write more code here
