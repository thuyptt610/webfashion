import React, {useState} from 'react'
import { Image} from 'antd'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import loginimg from '../../assets/images/login.png'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height:'1000px'}}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
      <WrapperContainerLeft>
        <h1>Xin chào</h1>
        <p>Đăng nhập và tạo tài khoản</p>
        <InputFormComponent style={{marginBottom: '10px'}} placeholder="abc@gmail"/>
        
        <div style={{ position:'relative'}}>
          <span
           onClick={togglePasswordVisibility} 
          style={{
            zIndex:10,
            position: 'absolute',
            top: '10px',
            right: '8px',
            cursor: 'pointer'
          }}>{
            isShowPassword ?(<EyeFilled/>):(<EyeInvisibleFilled/>)
          }
          </span>
            <InputFormComponent placeholder="password" type={isShowPassword? "text": "password"}/>
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
               textButton="Đăng nhập"
               styleTextButton={{ color: '#fff', fontsize:'15px', fontweight: '700' }}
               />
               <WrapperTextLight>Chưa có tài khoản</WrapperTextLight>
               <p>Quên mật khẩu ?<WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
        <Image src={loginimg} preview={false} alt="image-logo" height="203px" width="203px"/>
        <h4>Fashion Store</h4>
      </WrapperContainerRight>
    </div>
    </div>
  )
}

export default SignInPage