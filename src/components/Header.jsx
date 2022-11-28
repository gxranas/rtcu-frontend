import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Search} from '@mui/icons-material'

const Container = styled.div`
    display:flex;
    height: 80px;
    background-color: #344D67;
    position: sticky;
    z-index: 999;
    top:0px;
`
const Left = styled.div`
    flex:.5;
    display:flex;
    align-items:center;
    justify-content: center;
`
const Center = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Right = styled.div`
    flex:.5;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled(Link)`
  font-family: 'Titan One';
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize};
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  font-weight: 600;
  display: flex;
  justify-content: left;
  text-decoration: none;
`

const SearchContainer = styled.div`
    display: flex;
    line-height: 28px;
    align-items: center;
    justify-content: right;
    position: relative;
`

const SearchTextBox = styled.input`
    width:500px;
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

    :focus  {
    outline: none;
    border-color: #5fa0e6;
    background-color: #fff;
    }
`

const SearchIcon = styled(Search)`
    position:absolute;
    margin-right: 10px;
    color:#344D67;
    cursor:pointer;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid transparent;

    :hover{
      background-color: #e2e8ec;
    }
`

const PageLinks = styled(Link)`
  text-decoration: none;
  color:#fff;
  font-weight: 600;
  margin-left: ${props => props.marginLeft};

  :hover{
      color: #F49D1A;
    }
  
`


function Header() {
  return (
    <>
      <Container>
        <Left>
        <Logo textColor="#fff" fontSize="40px" to="/">rtc<Logo to="/" textColor="#F49D1A" fontSize="20px" marginTop="25px">&</Logo>u</Logo>
        </Left>
        <Center>
        <SearchContainer>
          <SearchTextBox placeholder='Search'/>
          
          <SearchIcon/>

        </SearchContainer>
        </Center>
        <Right>
          <PageLinks to="/login">Login</PageLinks>

          
          <PageLinks to="/signup" marginLeft="20px">Sign up</PageLinks>

        </Right>
      </Container>

    </>
  )
}

export default Header
