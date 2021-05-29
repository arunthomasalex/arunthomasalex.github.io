import config from 'config';

export default class PortfolioService {
    getPortfolio(url = null) {
        if(url) 
            return fetch(url);
        return fetch(config.portfolioJson);
    }
}