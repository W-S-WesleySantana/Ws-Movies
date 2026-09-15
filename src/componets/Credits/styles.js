import styled  from "styled-components";
import { toRem } from "../../utils/toRem";


export const Title = styled.h4`
color: #fff;
font-size: ${toRem(28)};
font-weight: 700;

`

export const Container = styled.div`
display: flex;
margin-top: ${toRem(30)};
gap: ${toRem(10)};

div{
display: flex;
flex-direction: column;
}

p{
color: #fff;
}

img{
height: ${toRem(200)};
}
`
