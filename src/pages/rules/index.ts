'use strict'
import Page from "../../core/templates/page";

class RulesPage extends Page {
    static TextObject = {
        MainTitle: 'Как играть:',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(RulesPage.TextObject.MainTitle);
        this.container.append(title);
        title.className = 'title-rules';
        const container = document.createElement('div');
        container.className = 'header';
        const rulesText = document.createElement('div');
        rulesText.className = 'rules';
        rulesText.innerText = 'При игре на клавиатуре используйте стрелки, чтобы перемещать плитки. Когда две плитки с одинаковыми цифрами соприкасаются, они сливаются в одну. Игра закончится когда все ячейки заполнятся и не будет возможности соединения плиток.';
        container.append(title);
        const rulesPage = document.createElement('div');
        rulesPage.append(container,rulesText);
        rulesPage.className = 'container';
        this.container.append(rulesPage);
        return this.container;
    }

};

export default RulesPage;