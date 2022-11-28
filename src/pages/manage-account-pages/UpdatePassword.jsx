import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 4;
    display: flex;
    justify-content: left;
    padding: 20px;
`

const Content = styled.div`
    padding: 30px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 50%;
`

const Header = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: rgba(0,0,0,.85);
`

const SubHeader = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #8c8c8c;
`

const Form = styled.form`
    display: flex;
    padding: 10px;
    flex-direction: column;
`

const FormContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 20px;
`

const Label = styled.p`
    flex: .4;
    font-size: 12px;
    color: #8c8c8c;
`

const TextBox = styled.input`
    flex: 1;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #fff;
    color: rgba(0,0,0,0.7);
    transition: .3s ease;
    border-color: #e2e8ec;

    ::placeholder{
      color: #9e9ea7;
    }

    :focus , :hover {
    outline: none;
    border-color: #344D67;
    background-color: #fff;
    }
`

const Button = styled.button`
    padding: 10px;
    width: 100px;
    height: 40px;
    background-color: #344D67;
    border: none;
    cursor: pointer;
    color: #fff;
    margin-left: ${props => props.marginLeft};
`

function UpdatePassword() {
  return (
    <>
      <Container>
        <Content>
            <Header>Password</Header>
            <SubHeader>You can update your password in this page.</SubHeader>
            <Form>
                <FormContent>
                <Label>Current Password</Label>
                <TextBox type="password" placeholder='Enter your current password' autoComplete='false'/>
                </FormContent>
                <FormContent>
                <Label>New Password</Label>
                <TextBox type="password" placeholder='Enter your new password' autoComplete='false'/>
                </FormContent>
                <FormContent>
                <Label>Confirm Password</Label>
                <TextBox type="password" placeholder='Re-type your new password' autoComplete='false'/>
                </FormContent>
                <FormContent>
                <Button marginLeft="300px">Cancel</Button>
                <Button marginLeft="10px">Save</Button>
                </FormContent>
            </Form>
        </Content>
      </Container>
    </>
  )
}

export default UpdatePassword
