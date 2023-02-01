import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const getSources = document.querySelector('.sources') as HTMLElement;

        getSources.addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => {
                return this.view.drawNews(data);
            })
        );

        this.controller.getSources((data) => {
            return this.view.drawSources(data);
        });
    }
}
export default App;
