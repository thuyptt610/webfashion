import { Card, Image } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { StyleDiscountProduct, StyleNameProduct, StylePriceProduct, StyleReportText, WrapperCardStyle, WrapperStyleTextSell } from './style'
import  { StarOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo1.png';

const CardComponent = () => {
  return (
    <WrapperCardStyle
    headStyle={{width:'200px', height: '200px'}}
    style={{ width: 200 }}
    bodyStyle={{padding: '10px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <img src={logo} style={{ width: '68px', height: '14px', position: 'absolute', top: 0, left: 0}}/>
     <StyleNameProduct>Laptop Nitro 5</StyleNameProduct>
     <StyleReportText>
      <span style={{ marginRight: '4px'}}>
        <span>4.9</span><StarOutlined  style={{fontsize: '10px',color: "yellow"}}/>
      </span>
      <WrapperStyleTextSell> | Đã bán 160</WrapperStyleTextSell>
      </StyleReportText>
      <StylePriceProduct>
        160.000đ
      <StyleDiscountProduct> -10%</StyleDiscountProduct>
      </StylePriceProduct>
  </WrapperCardStyle>
  )
}

export default CardComponent