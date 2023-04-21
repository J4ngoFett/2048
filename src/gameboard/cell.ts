'use strict'
export class Cell {
    x: any;
    y: any;
    linkedTile: any;
    linkedTileForMerge: any;
    static mergeTiles: any;
    recordElement: HTMLElement;
    gameboardElement: HTMLElement;

    constructor(gridElement: HTMLElement, x: number, y: number) {
        this.gameboardElement = document.querySelector('.game-board') as HTMLElement;
        this.gameboardElement = localStorage.game_board || '';
        this.recordElement = document.querySelector('.record') as HTMLElement;
        this.recordElement.textContent = localStorage.best_score_value || '0';

        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridElement.append(cell);
        this.x = x;
        this.y = y;
    }

    linkTile(tile: { setXY: (arg0: any, arg1: any) => void; }) {
        tile.setXY(this.x, this.y);
        this.linkedTile = tile;
    }

    unlinkTile() {
        this.linkedTile = null;
    }

    isEmpty() {
        return !this.linkedTile;
    }

    linkTileForMerge(tile: { setXY: (arg0: any, arg1: any) => void; }) {
        tile.setXY(this.x, this.y);
        this.linkedTileForMerge = tile;
    }

    unlinkTileForMerge() {
        this.linkedTileForMerge = null;
    }

    hasTileForMerge() {
        return !!this.linkedTileForMerge;
    }

    canAccept(newTile: { value: any; }) {
        return (
            this.isEmpty() ||
            (!this.hasTileForMerge() && this.linkedTile.value === newTile.value)
        );
    }

    mergeTiles() {
        const countElement = document.querySelector('.count') as HTMLElement;
        
        let currentCountScore: number = (Number(countElement.textContent) + ((this.linkedTile.value + this.linkedTileForMerge.value)));
        this.linkedTile.setValue(this.linkedTile.value + this.linkedTileForMerge.value);
        this.linkedTileForMerge.removeFromDOM();
        this.unlinkTileForMerge();
        countElement.textContent = currentCountScore.toString();
        if (typeof (Storage) !== "undefined") {
            if (localStorage.best_score_value) {
                if (localStorage.best_score_value < currentCountScore) {
                    localStorage.best_score_value = currentCountScore
                    this.recordElement.textContent = localStorage.best_score_value;
                } else {
                    this.recordElement.textContent = localStorage.best_score_value
                }
            } else {
                localStorage.best_score_value = currentCountScore
                this.recordElement.textContent = localStorage.best_score_value
            }
        }
    }
}

