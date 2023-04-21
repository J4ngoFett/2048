'use strict'
import Page from "../../core/templates/page";

class MainPage extends Page {

    static TextObject = {
        MainTitle: '2048',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
        title.className = 'title';
        const container = document.createElement('div');
        container.className = 'header';
        const gameDiv = document.createElement('div');
        gameDiv.id = 'game-board';
        const gameOverDiv = document.createElement('div');
        gameOverDiv.id = 'game-over';
        const gameOverP = document.createElement('p');
        gameOverP.innerText = 'Game Over!';
        const tryAgainButton = document.createElement('a');
        tryAgainButton.href = "./"; 
        tryAgainButton.className = 'button';
        tryAgainButton.innerText = 'Try again';
        const buttonSpan1 = document.createElement('span');
        const buttonSpan2 = document.createElement('span');
        const buttonSpan3 = document.createElement('span');
        const buttonSpan4 = document.createElement('span');
        buttonSpan1.className = 'button__line button__line--top';
        buttonSpan2.className = 'button__line button__line--right';
        buttonSpan3.className = 'button__line button__line--bottom';
        buttonSpan4.className = 'button__line button__line--left';
        tryAgainButton.append(buttonSpan1, buttonSpan2, buttonSpan3, buttonSpan4);
        gameOverDiv.append(gameOverP, tryAgainButton);
        gameDiv.append(gameOverDiv);
        const countDiv = document.createElement('div');
        countDiv.className = 'count';
        countDiv.innerText = '0';
        const recordDiv = document.createElement('div');
        recordDiv.className = 'record';
        recordDiv.innerText = '0';
        container.append(title, countDiv, recordDiv);
        const mainPage = document.createElement('div');
        mainPage.append(container, gameDiv);
        mainPage.className = 'container';
        this.container.append(mainPage);
        return this.container;
    }
}

export default MainPage;

