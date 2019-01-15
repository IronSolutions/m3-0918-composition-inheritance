import React from 'react';
import cx from 'classnames';
import { StyledSpan } from './StyledSpan';


const InternalLabel = ({type, children}) => (
    <StyledSpan className={cx(type)}>
        {children} 
        <span className="infobt">+info</span>
    </StyledSpan>
)

export const Label = ({children, status="normal"}) => {
    if(!["normal","error","warning"].includes(status)){
        return (
        <InternalLabel>
            Invalid label - {children} 
        </InternalLabel>
        )
    }
    return(
        <InternalLabel type={status || ''}>
            {children} 
        </InternalLabel>
    )
}