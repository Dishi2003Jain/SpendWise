import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {

    const {width, height} = useWindowSize()

    console.log(width, height)

    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        /* background: rgba(0, 0, 128, 0.9); */
        filter: blur(400px);
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb