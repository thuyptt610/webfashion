import React from 'react';
import { Badge, Col, Row } from 'antd';
import { WrapperHeader, WrapperHeaderAccout, WrapperHeaderIcon, WrapperHeaderSmall, WrapperTextHeader } from './style';
import Search from 'antd/es/transfer/search';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <WrapperHeader gutter={50}>
      <Col span={6}><WrapperTextHeader>PhamThiThanhThuy</WrapperTextHeader></Col>
      <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonInputSearch size="large" textButton="Tìm Kiếm" placeholder="Input search text" />
      </Col>
      <Col span={6}>
        <WrapperHeaderAccout>
         <WrapperHeaderIcon> <UserOutlined /></WrapperHeaderIcon>
          <div>
            <WrapperHeaderSmall>Login/ Logout</WrapperHeaderSmall>
            <div>
              <WrapperHeaderSmall>Tài khoản</WrapperHeaderSmall> <CaretDownOutlined />
            </div>
          </div>
          <div>
            <Badge count={4} size="small">
                <WrapperHeaderIcon><ShoppingCartOutlined/></WrapperHeaderIcon>
            </Badge>
            <WrapperHeaderSmall>Giỏ hàng</WrapperHeaderSmall>
          </div>
        </WrapperHeaderAccout>
      </Col>
    </WrapperHeader>
  );
}

export default HeaderComponent;
