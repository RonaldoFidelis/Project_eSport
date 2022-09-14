import './AppCss.css';


interface H1Props {
  value: string;
  
};

function CreateH1(props:H1Props) {
  return (
    <h1 className='title'>
      {props.value}
    </h1>
  )
}

function App() {
  return (
    <div>
      <CreateH1 value="Texto"/>
    </div>
  )
}



export default App;
