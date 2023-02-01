import Loader from './loader';
import { Options } from '../../types/index';

export class AppLoader extends Loader {
    apiKey!: Options;
    constructor() {
        super('https://newsapi-redirect-production.up.railway.app/', {
            apiKey: 'd1cb53b64c5d4cfe8008988e153db8d3', // получите свой ключ https://newsapi.org/
        });
    }
}
