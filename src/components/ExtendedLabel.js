import React from 'react';
import cx from 'classnames';
import { StyledSpan } from './StyledSpan';

export class ExtendedLabel extends React.Component {

    static defaultProps = {
        type:'normal'
    }

    render(){
        const {type, children} = this.props;
        return (
            <StyledSpan className={cx(type)}>
            {children} 
                <span className="infobt">+info</span>
            </StyledSpan>
        )
    }
}

export class ExtendedLabelWarning extends ExtendedLabel {
    static defaultProps = {
        type:'warning'
    }

    render(){
        return (
            <React.Fragment>
                {super.render()} ⚠️
            </React.Fragment>
        )
    }
}