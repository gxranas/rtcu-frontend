import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavigatorMenu from './NavigatorMenu'

const Container = styled.div`
    flex: 1;
    display:flex;
    height: calc(100vh - 80px);
    background-color: #fff;
    position: sticky;
    z-index: 999;
    top: 80px;
`
const Wrapper = styled.div`

    padding: 20px;
    color: #555;
`
const NavLinks = styled(Link)`
    text-decoration: none;
    margin-left: 5px;
    font-weight: 400;
    color: rgba(0,0,0,.85);
    font-size: 13px;
`
const Menu = styled.div`
    width:230px;    
`
const Title = styled.h3`
    font-size: 14px;
    color: #8c8c8c;
`
const List = styled.ul`
    list-style: none;
    padding: 5px;
`
const ListItem = styled.li`
    padding: 5px;
    cursor:pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;

    :active , :hover{
      background-color: #e2e8ec;
    }
 
`

function Navigator() {
  return (
    <>
    <Container>
        <Wrapper>
        {NavigatorMenu.map((val)=>{
            return(
                    <Menu>
                        <Title>{val.menu}</Title>
                        <List>
                            {val.submenu.map((val)=>{
                            return (
                             <ListItem><NavLinks to={val.url}>{val.menu}</NavLinks></ListItem>
                            )
                            })}
                        </List>
                    </Menu>
                  )
                })
        }
        </Wrapper>
    </Container>
    </>
  )
}

export default Navigator
