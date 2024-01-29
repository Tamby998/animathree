import styled from 'styled-components'
import Map from './Map'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Title = styled.h1`
  font-size: 200;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

`

const Input = styled.input`
  padding: 20px;
  background-color: #e8e8e6;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
 padding: 20px;
 border: none;
 border-radius: 5px;
`


const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  font-size: bold;
  border-radius: 5px;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;
` 

const Contact = () => {

  const ref = useRef()
  const [success, setSuccess] = useState(null)

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_zn53cpu', 'template_inhu175', ref.current, 'szPRRhOCzSjvDkl08')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
  }

    return (
        <Section>
          <Container>
            <Left>
              <Form ref={ref} onSubmit={handleSubmit}>
                <Title>Contact Us</Title>
                <Input placeholder='Name' name='name' />
                <Input placeholder='Email' name='email' />
                <TextArea placeholder='Write your message' name='message' rows={10} />
                <Button type='submit'>Send</Button>
                { success && "Your message was sent. We'll get back to you soon :) " }
              </Form>
            </Left>
            <Right>
              <Map />
            </Right>
          </Container>
        </Section>
    )
}

export default Contact