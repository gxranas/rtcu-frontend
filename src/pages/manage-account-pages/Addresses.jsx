import React from 'react'
import styled from 'styled-components'
import { Table, TableHead, TableBody,TableRow, TableCell } from '@mui/material'
import AddressesData from './AddressesData'

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
    width: 100%;
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

const TableContainer = styled.div`
  display: flex;
  margin-top: 10px;
 
  border: 1px solid #e6e3e3;
  border-radius: 5px;
  padding: 10px;
`
const TableHeadStyle = styled(TableHead)`
  background-color: #344D67;
`

const TableRowStyle = styled(TableRow)`
  cursor: pointer;

  :hover{
      background-color: #e2e8ec;
    }
`

const Value = styled.p`
  font-size: ${props => props.fontSize};
  color: ${props => props.fontColor};
  font-weight: ${props => props.fontWeight};
`
function Addresses() {
  return (
    <>
      <Container>
        <Content>
            <Header>
                Addresses
            </Header>
            <SubHeader>
              You can add/update your shipping address in this page.
            </SubHeader>
            <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHeadStyle>
                        <TableRow>
                          <TableCell align="center"><Value fontSize="13px" fontColor="#fff" fontWeight="600">Id</Value></TableCell>
                          <TableCell align="center"><Value fontSize="13px" fontColor="#fff" fontWeight="600">Full name</Value></TableCell>
                          <TableCell align="center"><Value fontSize="13px" fontColor="#fff" fontWeight="600">Address</Value></TableCell>
                          <TableCell align="center"><Value fontSize="13px" fontColor="#fff" fontWeight="600">Postcode</Value></TableCell>
                          <TableCell align="center"><Value fontSize="13px" fontColor="#fff" fontWeight="600">Phone Number</Value></TableCell>
                        </TableRow>
                      </TableHeadStyle>
                      <TableBody>
                        {AddressesData.map((value,key) => (
                          <TableRowStyle
                            key={key}
                          >
                            <TableCell align="left"><Value fontSize="12px" fontColor="#8c8c8c" fontWeight="600">{value.id}</Value></TableCell>
                            <TableCell align="left"><Value fontSize="12px" fontColor="rgba(0,0,0,.85)" fontWeight="400">{value.fullname}</Value></TableCell>
                            <TableCell align="left"><Value fontSize="12px" fontColor="rgba(0,0,0,.85)" fontWeight="400">{value.address}</Value></TableCell>
                            <TableCell align="left"><Value fontSize="12px" fontColor="rgba(0,0,0,.85)" fontWeight="400">{value.postcode}</Value></TableCell>
                            <TableCell align="left"><Value fontSize="12px" fontColor="#8c8c8c" fontWeight="600">{value.status}</Value></TableCell>
                          </TableRowStyle>
                        ))}
                      </TableBody>
                    </Table>
            </TableContainer>
        </Content>
      </Container>
    </>
  )
}

export default Addresses
