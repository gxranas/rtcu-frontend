import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Google } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    background-color: #eff0f5;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    width:350px;
    height: 500px;
    padding: 10px;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

const FormTitle = styled.p`
    color: #8c8c8c;
    font-size: 20px;
    font-weight: 600;
`

const Socials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    font-size: 12px;
    font-weight: 600;
`

const SocialButton = styled.div`
    width:250px;
    color:#fff;
    background-color: ${props => props.bgColor};
    cursor:pointer;
    padding: 10px;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

const SocialLabel = styled.p`
    margin-left: 10px;
`

const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Label = styled.p`
    font-size: 12px;
    color: #8c8c8c;
    display: flex;
    align-items: center;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    margin-right: ${props => props.marginRight};
`

const TextBox = styled.input`
    height: 40px;
    width: 250px;
    line-height: 28px;
    margin-bottom: 10px;
    padding: 0 1rem;
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
    background-color: #fff;
    color: rgba(0,0,0,0.7);
    transition: .3s ease;
    border-color: #e2e8ec;

    ::placeholder{
      color: #9e9ea7;
    }

    :focus {
    outline: none;
    border-color: #344D67;
    background-color: #fff;
    }
`

const Button = styled.button`
    padding: 10px;
    margin-top: 10px;
    width: 175px;
    height: 40px;
    background-color: #344D67;
    border: none;
    cursor: pointer;
    color: #fff;

    
`

const PageLinks = styled(Link)`
    color: #344D67;
    text-decoration: none;
    font-size: 12px;
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};

    :hover{
      color: #F49D1A;
    }
`


function Login() {
  return (
    <>
      <Container>
        <Content>
          <Header>
            <FormTitle>LOGIN</FormTitle>
          </Header>
          <Socials>
            <SocialButton bgColor="#344D67">
              <Facebook/>
              <SocialLabel>Facebook</SocialLabel>
            </SocialButton>
            <SocialButton bgColor="#BB001B">
              <Google/>
              <SocialLabel>Google</SocialLabel>
            </SocialButton>
          </Socials>

          <Label marginBottom="20px" marginRight="140px" marginTop="20px">Or, login with credentials</Label>

          <FormContent>
            <TextBox type="text" placeholder='Enter your email' autoComplete='false'/>
            <TextBox type="password" placeholder='Enter your password' autoComplete='false'/>
            <Button>Login</Button>
          </FormContent>
        
          <PageLinks marginRight="170px" marginTop="20px" to="/reset">Forget password?</PageLinks>
          <Label marginTop="20px">New member? <PageLinks marginLeft="5px" to="/signup">Sign up</PageLinks></Label>
        </Content>
      </Container>
    </>
  )
}

export default Login
