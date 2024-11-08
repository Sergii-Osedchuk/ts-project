import Input from './components/input';
import Button from './components/Button';
import { useRef } from 'react';
import Form from './components/Form';

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Form>
        <Input id="name" label="Your name" type="text" />
        <Input id="age" label="Your age" type="number" ref={input} />
        <Button>Save</Button>
      </Form>
      {/* <p> */}
      {/* </p>
      <p>
        <Button href='https://google.com'>A Link</Button>
      </p>
      <Container as={Button} onClick={() => { }}>Click me</Container> */}
    </main>
  );
}

export default App;
