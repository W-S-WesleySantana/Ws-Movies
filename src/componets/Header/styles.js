import styled  from "styled-components";



export const Container = styled.div`
z-index: 99;
position: fixed;
width: 100vw;
height: 12vh;
top: 0;
display: flex;
padding:10px 50px;
justify-content: space-between;
align-items: center;
background-color: ${props => props.$changeBackground ? "rgba(0, 0, 0, 0.8)" : "transparent"};
transition: background-color 0.6s ease-in-out;
min-height: 100px;

img{
    width:25%;

}

`
export const Menu = styled.ul`
display: flex;
list-style: none;
gap:80px;

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
        box-shadow: 2px -4px 62px 35px rgba(255, 0, 0, 0.55);
        -webkit-box-shadow: 2px -4px 62px 35px rgba(255, 0, 0, 0.55);
        border-radius: 10px;
        font-weight: 900;


    }
}
&::after{
    content: "";
    height: 3px;
    width: ${props => props.isActive ? "100%" : 0};
    background-color: #b6b2b2;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
}

&:hover::after{
    width: 100%;
}
`