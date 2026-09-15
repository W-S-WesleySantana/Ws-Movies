import styled  from "styled-components";
import { toRem } from "../../utils/toRem";


export const Container = styled.div`
display: flex;
margin-top:  ${toRem(30)};
gap:  ${toRem(10)};

span{
    padding: ${toRem(8,18)};
    border:  ${toRem(2)} solid #fff;
    border-radius: ${toRem(30)};
    font-size:  ${toRem(12)};
    font-weight: 600;
    background-color: #0f0f0f;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
`


