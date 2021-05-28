import portfolio from './portfolio.json';

export default class PortfolioService {
    constructor() {}
    getPortfolio(url = null) {
        if(url) {

        } else {
            return portfolio;
        }
    }
}