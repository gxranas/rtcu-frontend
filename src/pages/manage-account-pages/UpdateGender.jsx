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
    flex: .2;
    font-size: 12px;
    font-size: ${props => props.fontSize};
    color: ${props => props.textColor};
    margin-left: ${props => props.marginLeft};
`

const Selection = styled.input`
    margin-left: 10px;
    font-size: 12px;
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

function UpdateGender() {

  return (
    <>
      <Container>
        <Content>
            <Header>Gender</Header>
            <SubHeader>You can update your gender in this page.</SubHeader>
            <Form>
                <FormContent>
                <Label fontSize="12px" textColor="#8c8c8c">Gender</Label>
                <Selection type="radio" name="gender" value="male"/> <Label fontSize="15px" marginLeft="5px">Male</Label>
                <Selection type="radio" name="gender" value="female"/> <Label fontSize="15px" marginLeft="5px">Female</Label>
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

export default UpdateGender
