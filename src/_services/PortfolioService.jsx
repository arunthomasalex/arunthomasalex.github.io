import portfolio from './portfolio.json';
import config from 'config';

export default class PortfolioService {
    constructor() {}
    async getPortfolio(url = null) {
        await fetch(config.portfolioJson);
        if(url) {

        } else {
            return portfolio;
        }
    }
}