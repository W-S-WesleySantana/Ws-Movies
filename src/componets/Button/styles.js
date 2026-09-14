import styled, {css}  from "styled-components";

const ButtonStyled = css`
border: 3px solid #fff;
background: transparent;
border-radius:30px;
color:#fff;
border-radius: 30px;
padding: 10px 20px;
cursor: pointer;
font-size: 20px;
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
border: 4px solid transparent;
box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

&:hover {
box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
background:  #ff0000;
color: #fff;
}
`