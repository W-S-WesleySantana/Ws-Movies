import styled  from "styled-components";
import { toRem } from "../../utils/toRem";



export const Container = styled.div`
z-index: 99;
position: fixed;
width: 100vw;
height: 12vh;
top: 0;
display: flex;
padding:${toRem(10,50)};
justify-content: space-between;
align-items: center;
background-color: ${props => props.$changeBackground ? "rgba(0, 0, 0, 0.8)" : "transparent"};
transition: background-color 0.6s ease-in-out;
min-height: ${toRem(100)};


img{
    width:25%;

  
}



`
export const Menu = styled.ul`
display: flex;
list-style: none;
gap:${toRem(80)};

`
export const Li = styled.li`
font-weight: 600;
cursor: pointer;
font-size: 1.2rem;
position: relative;

a{
    text-decoration: none;
    color: #fff;


    &:hover{
        color: #f00;
        box-shadow:  ${toRem(2,-4,62,35)} rgba(255, 0, 0, 0.55);
        -webkit-box-shadow: 2px -4px 62px 35px rgba(255, 0, 0, 0.55);
        border-radius:  ${toRem(10)};
        font-weight: 900;


    }
}
&::after{
    content: "";
    height: 3px;
    width: ${props => props.isActive ? "100%" : 0};
    background-color: #b6b2b2;
    position: absolute;
    bottom: ${toRem(-10)};
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
}

&:hover::after{
    width: 100%;
}




`