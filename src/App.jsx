import styled from 'styled-components'
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Test from './components/Test'

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow: auto;
  scrollbar-width: none;
  color: white;
  background: url('./img/bg.jpeg');
  &::-webkit-scrollbar{
    display:none;
  }
` 

function App() {

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Test />
    </Container>
  )
}

export default App
