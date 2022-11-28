import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Navigator from '../../components/manage-account-components/navigator/Navigator'
const Container = styled.div`
  display: flex;
  background-color: #eff0f5;
`
function Dashboard() {
  return (
    <>
      <Container>
        <Navigator/>
        <Outlet/>
      </Container>
    </>
  )
}

export default Dashboard
