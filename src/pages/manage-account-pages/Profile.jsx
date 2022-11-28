import React from 'react'
import styled from 'styled-components'
import {Edit} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

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
    width: 100%;
    flex-direction: column;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`

const Header = styled.p`
    font-weight: 600;
    font-size: 25px;
    color: rgba(0,0,0,.85);
`

const SubHeader = styled.p`
    font-weight: 400;
    font-size: 15px;
    color: #8c8c8c;
`

const Body = styled.div`
    display: flex;
    justify-content: left;
    border: 1px solid #e6e3e3;
    flex-direction: column;
    padding: 15px;
    border-radius:5px;
    margin-top: 20px;
` 

const BodyHeader = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: rgba(0,0,0,.85);
`

const BodySubHeader = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #8c8c8c;
`

const BodyContent = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding:20px;
    cursor:pointer;
    :hover{
      background-color: #e2e8ec;
    }
`

const Label = styled.p`
    flex: .5;
    font-size: 12px;
    color: #8c8c8c;
`

const Value = styled.p`
    flex: 2;
    font-size: 13px;
    color: rgba(0,0,0,.85);
`

const Icons = styled(Edit)`
    flex: .1;
    color: #8c8c8c;
`


function Profile() {

  const navigate = useNavigate();
  return (
    <>
      <Container>
       <Content>
         <HeaderContainer>
            <Header>Profile Information</Header>
            <SubHeader>You can make some changes of this info, like name, contact details, etc.</SubHeader>
         </HeaderContainer>

         <Body>
            <BodyHeader>
             Basic Information
            </BodyHeader>
                <BodySubHeader>
                     Some info may be visible to other people.
                </BodySubHeader>
                    <BodyContent onClick={()=>{navigate("/manage-account/profile/update/name")}}>
                        <Label>Name</Label>
                        <Value>Geo Xyruz Ranas</Value>
                        <Icons fontSize='small'/>
                    </BodyContent>
                    <BodyContent onClick={()=>{navigate("/manage-account/profile/update/birthday")}}>
                        <Label>Birthday</Label>
                        <Value>11/21/1996</Value>
                        <Icons fontSize='small'/>
                    </BodyContent>
                    <BodyContent onClick={()=>{navigate("/manage-account/profile/update/gender")}}>
                        <Label>Gender</Label>
                        <Value>Male</Value>
                        <Icons fontSize='small'/>
                    </BodyContent>
         </Body>
        
        <Body>
            <BodyHeader>Contact Information</BodyHeader>
            <BodySubHeader>This information will help to contact you.</BodySubHeader>
            <BodyContent onClick={()=>{navigate("/manage-account/profile/update/email")}}>
                    <Label>Email</Label>
                    <Value>g.x.ranas@gmail.com</Value>
                    <Icons fontSize='small'/>
            </BodyContent>
            <BodyContent onClick={()=>{navigate("/manage-account/profile/update/phone")}}>
                    <Label>Phone</Label>
                    <Value>Male</Value>
                    <Icons fontSize='small'/>
            </BodyContent>
        </Body>

        <Body>
            <BodyHeader>Address</BodyHeader>
            <BodySubHeader>This address is use for shipping address.</BodySubHeader>
            <BodyContent onClick={()=>{navigate("/manage-account/profile/addresses")}}>
                    <Label>Address (Default)</Label>
                    <Value>Geo Xyruz Ranas - Ph 3 Pkg 2 Blk 32 Lot 8 Bagong Silang Metro Manila~Caloocan - Caloocan City - Barangay 176 ~ (+63) 09459830404 </Value>
                    <Icons fontSize='small'/>
            </BodyContent>
        </Body>

        <Body>
            <BodyHeader>Password</BodyHeader>
            <BodySubHeader>A secured password can protect your account.</BodySubHeader>
            <BodyContent onClick={()=>{navigate("/manage-account/profile/update/password")}}>
                    <Label>Password</Label>
                    <Value>***********</Value>
                    <Icons fontSize='small'/>
            </BodyContent>
        </Body>
       </Content>
      </Container>
    </>
  )
}

export default Profile
