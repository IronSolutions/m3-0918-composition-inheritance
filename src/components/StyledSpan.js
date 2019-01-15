import styled from '@emotion/styled'
import { Colores } from '../lib/paleta';

export const StyledSpan = styled.span`
    border-radius: ${ ({rounded}) => rounded ? '50%':'5px' };
    padding: 5px;
    margin: 10px;

    &.normal{
        background: ${Colores.normal};
    }

    &.warning{
        background: ${Colores.warning};
        color:black;
    }

    &.error{
        background: ${Colores.error};
    }

    .infobt{
        border-radius: 5px;
        padding: 3px;
        height: 100%;
        margin-left: 10px;
        background: lightblue;
    }
`;
