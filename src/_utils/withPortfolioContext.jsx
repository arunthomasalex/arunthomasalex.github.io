import React from 'react';
import PortfolioContext from './PortfolioContext.jsx';

export const withPortfolioContext = (Component) => {
    return (props) => {
        return(
            <PortfolioContext.Consumer>
                {(context) => <Component  {...props} {...context}/>}
            </PortfolioContext.Consumer>
        );
    }
}
