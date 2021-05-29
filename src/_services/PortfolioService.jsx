import portfolio from './portfolio.json';
import config from 'config';

export default class PortfolioService {
    // constructor() {}
    getPortfolio(url = null) {
        if(url) {

        } else {
            return portfolio;
        }
    }
    getAsyncPortfolio(url = null) {
        if(url) 
            return fetch(url);
        return fetch(config.portfolioJson);
    }
}