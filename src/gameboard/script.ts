'use strict'
import { Grid } from "./grid";
import { Tile } from "./tile";

export function createGameBoard() {


    const gameBoard = document.getElementById('game-board') as HTMLElement;
    const grid = new Grid(gameBoard);
    grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
    grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
    setupInputOnce();


    function setupInputOnce() {
        window.addEventListener("keydown", handleInput, { once: true });
        window.addEventListener("touchstart", handleTouchStart, false);
        window.addEventListener("touchmove", handleTouchMove, false);
    }

    let xDown: number | null = null;
    let yDown: number | null = null;

    function getTouches(evt: TouchEvent) {
        return evt.touches;
    }

    function handleTouchStart(evt: TouchEvent) {
        evt.stopPropagation();
        evt.preventDefault();
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt: TouchEvent) {
        evt.preventDefault();
        if (!xDown || !yDown) {
            return;
        }

        const xUp = evt.changedTouches[0].clientX;
        const yUp = evt.changedTouches[0].clientY;

        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                if (!canMoveLeft()) {
                    setupInputOnce();
                    return;
                }
                moveLeft();
            } else {
                if (!canMoveRight()) {
                    setupInputOnce();
                    return;
                }
                moveRight();
            }
        } else {
            if (yDiff > 0) {
                if (!canMoveUp()) {
                    setupInputOnce();
                    return;
                }
                moveUp();
            } else {
                if (!canMoveDown()) {
                    setupInputOnce();
                    return;
                }
                moveDown();

            }
        }
        xDown = null;
        yDown = null;

        const newTile = new Tile(gameBoard);
        grid.getRandomEmptyCell().linkTile(newTile);

        if (!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()) {
            setTimeout(() => document.getElementById('game-over')!
                .style.display = 'flex', 200)
            newTile.waitForAnimationEnd()
            return;
        }

        setupInputOnce();
    };




    async function handleInput(event: { key: any; }) {
        switch (event.key) {
            case "ArrowUp":
                if (!canMoveUp()) {
                    setupInputOnce();
                    return;
                }
                await moveUp();
                break;
            case "ArrowDown":
                if (!canMoveDown()) {
                    setupInputOnce();
                    return;
                }
                await moveDown();
                break;
            case "ArrowLeft":
                if (!canMoveLeft()) {
                    setupInputOnce();
                    return;
                }
                await moveLeft();
                break;
            case "ArrowRight":
                if (!canMoveRight()) {
                    setupInputOnce();
                    return;
                }
                await moveRight();
                break;
            default:
                setupInputOnce();
                return;
        }

        const newTile = new Tile(gameBoard);
        grid.getRandomEmptyCell().linkTile(newTile);

        if (!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()) {
            setTimeout(() => document.getElementById('game-over')!
                .style.display = 'flex', 200)
            await newTile.waitForAnimationEnd()
            return;
        }

        setupInputOnce();
    }

    async function moveUp() {
        await slideTiles(grid.cellsGroupedByColumn);
    }

    async function moveDown() {
        await slideTiles(grid.cellsGroupedByReversedColumn);
    }

    async function moveLeft() {
        await slideTiles(grid.cellsGroupedByRow);
    }

    async function moveRight() {
        await slideTiles(grid.cellsGroupedByReversedRow);
    }

    async function slideTiles(groupedCells: any[]) {
        const promises: any[] = [];

        groupedCells.forEach((group: any) => slideTilesInGroup(group, promises));

        await Promise.all(promises);
        grid.cells.forEach((cell: { hasTileForMerge: () => any; mergeTiles: () => any; }) => {
            cell.hasTileForMerge() && cell.mergeTiles()
        });
    }

    function slideTilesInGroup(group: string | any[], promises: any[]) {
        for (let i = 1; i < group.length; i++) {
            if (group[i].isEmpty()) {
                continue;
            }

            const cellWithTile = group[i];

            let targetCell;
            let j = i - 1;
            while (j >= 0 && group[j].canAccept(cellWithTile.linkedTile)) {
                targetCell = group[j];
                j--;
            }

            if (!targetCell) {
                continue;
            }

            promises.push(cellWithTile.linkedTile.waitForTransitionEnd());

            if (targetCell.isEmpty()) {
                targetCell.linkTile(cellWithTile.linkedTile);
            } else {
                targetCell.linkTileForMerge(cellWithTile.linkedTile);
            }

            cellWithTile.unlinkTile();
        }
    }

    function canMoveUp() {
        return canMove(grid.cellsGroupedByColumn)
    }

    function canMoveDown() {
        return canMove(grid.cellsGroupedByReversedColumn);
    }

    function canMoveLeft() {
        return canMove(grid.cellsGroupedByRow);
    }

    function canMoveRight() {
        return canMove(grid.cellsGroupedByReversedRow);
    }

    function canMove(groupedCells: any[]) {
        return groupedCells.some((group: any) => canMoveInGroup(group));
    }

    function canMoveInGroup(group: any[]) {
        return group.some((cell: { isEmpty: () => any; linkedTile: any; }, index: number) => {
            if (index === 0) {
                return false;
            }

            if (cell.isEmpty()) {
                return false;
            }

            const targetCell = group[index - 1];
            return targetCell.canAccept(cell.linkedTile);
        });
    }


}