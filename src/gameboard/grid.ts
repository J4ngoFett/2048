'use strict'
import { Cell } from "./cell";

const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid {
    [x: string]: any;
    constructor(gridElement: HTMLElement) {
        this.cells = [];
        for (let i = 0; i < CELLS_COUNT; i++) {
            this.cells.push(
                new Cell(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))
            );
        }

        this.cellsGroupedByColumn = this.groupCellsByColumn();
        this.cellsGroupedByReversedColumn = this.cellsGroupedByColumn.map((column: any) => [...column].reverse());
        this.cellsGroupedByRow = this.groupCellsByRow();
        this.cellsGroupedByReversedRow = this.cellsGroupedByRow.map((raw: any) => [...raw].reverse());
    }

    getRandomEmptyCell() {
        const emptyCells = this.cells.filter((cell: { isEmpty: () => any; }) => cell.isEmpty());
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        return emptyCells[randomIndex];
    }

    groupCellsByColumn() {
        return this.cells.reduce((groupedCells: { [x: string]: { [x: string]: any; }; }, cell: { x: string | number; y: string | number; }) => {
            groupedCells[cell.x] = groupedCells[cell.x] || [];
            groupedCells[cell.x][cell.y] = cell;
            return groupedCells;
        }, []);
    }

    groupCellsByRow() {
        return this.cells.reduce((groupedCells: { [x: string]: { [x: string]: any; }; }, cell: { y: string | number; x: string | number; }) => {
            groupedCells[cell.y] = groupedCells[cell.y] || [];
            groupedCells[cell.y][cell.x] = cell;
            return groupedCells;
        }, []);
    }
}