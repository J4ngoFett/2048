'use strict'
import Component from "../../templates/components";
import { PageIds } from "../../../pages/app";

const Buttons = [
    {
        id: PageIds.MainPage,
        text: 'Главная',
    },
    {
        id: PageIds.RulesPage,
        text: 'Правила',
    },
    // {
    //     id: PageIds.RecordsPage,
    //     text: 'Рекорды',
    // },
];

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div');
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.className = 'button';
            buttonHTML.innerText = button.text;
            pageButtons.append(buttonHTML);
            const buttonSpan1 = document.createElement('span');
            const buttonSpan2 = document.createElement('span');
            const buttonSpan3 = document.createElement('span');
            const buttonSpan4 = document.createElement('span');
            buttonSpan1.className = 'button__line button__line--top';
            buttonSpan2.className = 'button__line button__line--right';
            buttonSpan3.className = 'button__line button__line--bottom';
            buttonSpan4.className = 'button__line button__line--left';
            buttonHTML.append(buttonSpan1, buttonSpan2, buttonSpan3, buttonSpan4);
        });
        this.container.append(pageButtons);
    }

    render(): HTMLElement {
        this.renderPageButtons();
        return this.container;
    }
}

export default Header;