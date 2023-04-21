'use strict'
import Page from '../../core/templates/page';
import MainPage from '../main';
import Header from '../../core/components/header';
import ErrorPage, { ErrorTypes } from '../error';
import { createGameBoard } from '../../gameboard/script';
import RulesPage from '../rules';
// import RecordsPage from '../records';


export const enum PageIds {
    MainPage = 'main-page',
    RulesPage = 'rules-page',
    // RecordsPage = 'records-page',
}


class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private header: Header;

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;

        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage === PageIds.RulesPage) {
            page = new RulesPage(idPage);
        // } else if (idPage === PageIds.RecordsPage) {
        //     page = new RecordsPage(idPage);
        } else {
            page = new ErrorPage(idPage, ErrorTypes.Error_404);
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
            createGameBoard();

        });
    }

    constructor() {
        this.header = new Header('div', 'header-container');
    }

    run() {
        App.container.append(this.header.render());
        App.renderNewPage('main-page');
        this.enableRouteChange();
        createGameBoard();

    }
    
}


export default App;