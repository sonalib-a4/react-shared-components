import logo from './logo.svg';
import './App.css';
import DialogBox from './dialog/DialogBox';
import Button from '@material-ui/core/Button';
import { useState }  from 'react'

function App() {
  const [open, setOpen] = useState(true)
  const checkOpen = () => {
    setOpen(true)
  }
  return (
    <div className="App">
      <Button type="button" onClick={checkOpen} >Click Me</Button>

      <DialogBox open={open} name={"sonali"}/>
    </div>
  );
}

export default App;
