import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slide1 from '../../assets/images/slide1.webp'
import slide2 from '../../assets/images/slide2.webp'
import slide3 from '../../assets/images/slide3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import { StyleNameProduct } from '../../components/CardComponent/style'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const HomePage = () => {
  const arr = ['TV', 'Laptop', 'Tủ lạnh']
  return (
    <div style={{ padding: '0 120px' }}>
      <WrapperTypeProduct>
        {arr.map((item) => (
          <TypeProduct name={item} key={item} />
        ))}
      </WrapperTypeProduct>
      <div id="container" style={{background: '#e0ffff', padding: '0 120px', height:'1100px'}}>
      <SliderComponent arrImage={[slide1, slide2, slide3]} />
        
          <WrapperProduct>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
          </WrapperProduct>
      
      
      </div>
     <div style={{ width:'100%', display: 'flex', marginTop: '10px', justifyContent: 'center'}}>
        <WrapperButtonMore textButton="Xem thêm" type="outline" style={{border: '1px solid rgb(11,116,229)', color: 'rgb(11,116,229)', width: '240px', height: '38px', bordeRadius: '4px'}}  styleTextButton={{fontWeight: 500}}></WrapperButtonMore>
        
     </div>
    </div>
  )
}

export default HomePage
