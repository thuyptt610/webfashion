import styled from "styled-components";
import { Image, Col } from "antd";

export const WrapperStyleImgSmall= styled(Image)`
     height: 64;
     width: 64;
`
export const WrapperStyleColImg=styled(Col)`
    flex-basics: unset;
    display: flex;
`
export const WrapperStyleNameProduct=styled.h1`
    color: rgb(36,36,36);
    font-size: 24px;
    font- weight: 300px;
    line-height: 34px;
    word-break: break-word;
    padding: 10px
`
export const WrapperStyleTextSell=styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120,120,120);
`
export const StylePriceProduct=styled.div`
    color: rgb(250,250,250);
    border-radius: 4px;
   
`
export const StylePriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 150%;
  line-weight: 600;
  text-align: left;
  margin: 8px 0;
  padding: 15px;
  color: black;
`;
