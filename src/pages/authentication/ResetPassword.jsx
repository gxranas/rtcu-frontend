import React from 'react'
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
    width:350px;
    height: 300px;
    border-radius: 5px;
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


function ResetPassword() {
  return (
    <>
      <Container>
        <Content>
          <Header>
            <FormTitle>Reset Password</FormTitle>
          </Header>

          <Label marginBottom="20px" marginTop="20px">Please enter email to reset your password.</Label>

          <FormContent>
            <TextBox type="text" placeholder='Enter your email' autoComplete='false'/>
            <Button>Reset</Button>
          </FormContent>
        </Content>
      </Container>
    </>
  )
}

export default ResetPassword
