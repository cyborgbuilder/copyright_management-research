import React from 'react'
import styled from 'styled-components'
import UserProfileForm from '../UserProfileForm'

function ImageContainer() {
  return (
    <Container>
     <Wrap>
        <UserProfileForm />
     </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;


`

const Wrap = styled.div`
    width: 90%;

`
export default ImageContainer
