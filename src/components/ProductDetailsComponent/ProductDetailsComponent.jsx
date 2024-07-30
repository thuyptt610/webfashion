import { Col, Row, Image } from 'antd'
import React from 'react'
import ImgPro from '../../assets/images/logo2.png'
import ImgProSmall from '../../assets/images/logo3.png'
import {StylePriceProduct, StylePriceTextProduct, WrapperStyleColImg, WrapperStyleImgSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import  { StarFilled } from '@ant-design/icons';

const ProductDetailsComponent = () => {
  return (
    <div>
    <Row style={{ padding: '16px'}}>
      <Col span={8}>
            <Image src={ImgPro} alt="image product" preview="false"/>
            <Row style={{padding: '10px'}}>
                <WrapperStyleColImg span={4}>
                     <WrapperStyleImgSmall src={ImgProSmall} alt=" image small" preview="false"/>
                </WrapperStyleColImg>
                <WrapperStyleColImg span={4}>
                     <WrapperStyleImgSmall src={ImgProSmall} alt=" image small" preview="false"/>
                </WrapperStyleColImg>
                <WrapperStyleColImg span={4}>
                     <WrapperStyleImgSmall src={ImgProSmall} alt=" image small" preview="false"/>
                </WrapperStyleColImg>
                <WrapperStyleColImg span={4}>
                     <WrapperStyleImgSmall src={ImgProSmall} alt=" image small" preview="false"/>
                </WrapperStyleColImg>
                <WrapperStyleColImg span={4}>
                     <WrapperStyleImgSmall src={ImgProSmall} alt=" image small" preview="false"/>
                </WrapperStyleColImg>
                <WrapperStyleColImg span={4}>
                     <WrapperStyleImgSmall src={ImgProSmall} alt=" image small" preview="false"/>
                </WrapperStyleColImg>
            </Row>
      </Col>
      <Col span={14}>
          <WrapperStyleNameProduct>Phạm thị thanh thúy xinh đẹp tuyệt trần, người người ngưỡng mộ không ngừng tung hô nha bà con</WrapperStyleNameProduct>
          <div>
          <StarFilled  style={{fontsize: '15px',color: "yellow"}}/>
          <StarFilled  style={{fontsize: '15px',color: "yellow"}}/>
          <StarFilled  style={{fontsize: '15px',color: "yellow"}}/>
          <WrapperStyleTextSell> | Đã bán 10+</WrapperStyleTextSell>
          </div>
          <StylePriceProduct>
              <StylePriceTextProduct> 200.000đ</StylePriceTextProduct>
          </StylePriceProduct>
      </Col>
      
    </Row>
    </div>
  )
}

export default ProductDetailsComponent