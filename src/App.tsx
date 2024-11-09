import Input from './components/Input';
import Button from './components/Button';
import { useRef } from 'react';
import Form from './components/Form';
import { type FormHandle } from './components/Form';

function App() {
  const customForm = useRef<FormHandle>(null);

  const input = useRef<HTMLInputElement>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear()
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your name" type="text" />
        <Input id="age" label="Your age" type="number" ref={input} />
        <Button>Save</Button>
      </Form>
    </main>
  );
}

export default App;
