import styled  from "styled-components";
import { toRem } from "../../utils/toRem";


export const Container = styled.div`

background-color: #000;
padding: ${toRem(0,20)};

h2{
    color: #fff;
    font-size:  ${toRem(24)};
    margin:  ${toRem(50, 0,20,20)};
}

.swiper-wrapper{
    display: flex;
}



`