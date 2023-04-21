'use strict'
import Page from "../../core/templates/page";

class RecordsPage extends Page {
    static TextObject = {
        MainTitle: 'Таблица рекордов'
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(RecordsPage.TextObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}

export default RecordsPage;