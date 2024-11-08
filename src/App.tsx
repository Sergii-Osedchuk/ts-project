import Input from './components/input';
import Button from './components/Button';
import Container from './components/Container';
import { useRef } from 'react';

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" ref={input} />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href='https://google.com'>A Link</Button>
      </p>
      <Container as={Button} onClick={() => { }}>Click me</Container>
    </main>
  );
}

export default App;
