import styled, {css}  from "styled-components";
import { toRem } from "../../utils/toRem";

const ButtonStyled = css`
border: 3px solid #fff;
background: transparent;
border-radius:30px;
color:#fff;
border-radius: 30px;
padding: 10px 20px;
cursor: pointer;
font-size: ${toRem(20)};
font-weight: 500;

&:hover {

background: #fff;
color: #ff0000;
}`

export const ButtonWhite = styled.button`
${ButtonStyled}
`



export const ButtonRed = styled.button`
${ButtonStyled}

background: #ff0000;
border: ${toRem(4)} solid transparent;
box-shadow:  ${toRem(0, 0, 7, 8)} rgb(255 0 0 / 30%);

&:hover {
box-shadow:${toRem(0, 0, 7, 15)} rgb(255 0 0 / 30%);
background:  #ff0000;
color: #fff;
}
`