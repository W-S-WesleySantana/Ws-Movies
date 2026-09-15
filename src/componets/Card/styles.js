import styled from "styled-components";
import {toRem} from "../../utils/toRem";

export const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    border-radius:${toRem(30)};
    width:${toRem(300)};
    height: 100%;
    
}

h3{
    color: #fff;
    margin-top:${toRem(15)};
}

`
