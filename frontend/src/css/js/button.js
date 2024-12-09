import styled from "styled-components";
import rem from "../../components/func/change_rem";

const MainBtn = styled.button`
background-color: ${({ bgcolor }) => bgcolor};
padding: ${rem(20)+"px"} ${rem(20)+"px"};
font-size: ${rem(14)+"px"};
color: ${({ textcolor }) => textcolor};
display: flex;
gap: ${rem(20)+"px"} ;
align-items: center;

.icon-box{
    width: ${rem(32)+"px"};
}
.icon-box img{
    width: 100%;
}
`
export {MainBtn};