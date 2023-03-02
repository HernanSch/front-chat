
import './App.css';
import Chat from './Components/Chat/Chat';
// import RoomsChat from './Components/RoomsChat/RoomsChat';

import FormularioRegistro from './Components/FormularioRegistro/FormularioRegistro';

function App() {
  return (
    <div className="App">
      <FormularioRegistro />
      <Chat />
      {/* <RoomsChat></RoomsChat> */}
    </div>
  );
}

export default App;
