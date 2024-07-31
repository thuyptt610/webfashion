import React, {useState} from 'react'
import { Image } from 'antd'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import register from '../../assets/images/register.png'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const SignUpPage = () => {
  const [isShowPassword1, setIsShowPassword1] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height:'1000px'}}>
    <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
    <WrapperContainerLeft>
      <h1>Xin chào</h1>
      <p>Đăng Ký để mua sản phẩm</p>
      <InputFormComponent style={{marginBottom: '10px'}} placeholder="abc@gmail"/>

      <div style={{ position:'relative'}}>
          <span
           onClick={()=>setIsShowPassword1(!isShowPassword1)} 
          style={{
            zIndex:10,
            position: 'absolute',
            top: '10px',
            right: '8px',
            cursor: 'pointer'
          }}>{
            isShowPassword1 ?(<EyeFilled/>):(<EyeInvisibleFilled/>)
          }
          </span>
            <InputFormComponent placeholder="password" type={isShowPassword1? "text": "password"}/>
        </div>
  
        <div style={{ position:'relative'}}>
          <span
           onClick={()=>setIsShowPassword2(!isShowPassword2)} 
          style={{
            zIndex:10,
            position: 'absolute',
            top: '10px',
            right: '8px',
            cursor: 'pointer'
          }}>{
            isShowPassword2 ?(<EyeFilled/>):(<EyeInvisibleFilled/>)
          }
          </span>
            <InputFormComponent placeholder="password" type={isShowPassword2? "text": "password"}/>
        </div>
   
      <ButtonComponent
             size="large"
             border={false}
             style={{
                  background:'rgb(255,57,69)',
                  height: '48px',
                  width: '100%',
                  border: 'none',
                  borderRadius: '4px',
                  margin: '26px 0 10px'
             }}
             textButton="Đăng Ký"
             styleTextButton={{ color: '#fff', fontsize:'15px', fontweight: '700' }}
             />
             <WrapperTextLight>Quay lại trang Đăng nhập ?</WrapperTextLight>
             
    </WrapperContainerLeft>
    <WrapperContainerRight>
      <Image src={register} preview={false} alt="image-logo" height="203px" width="203px"/>
      <h4>Fashion Store</h4>
    </WrapperContainerRight>
  </div>
  </div>
  )
}

export default SignUpPage