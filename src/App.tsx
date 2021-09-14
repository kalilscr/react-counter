/* conceitos react -- componentes, propriedades, estado  */

import { Button } from './components/Button'


function App() {
  return (
   

   <div>
     <h1>Counter using React concept of state</h1> 
     <p>press to increase the count</p>

     <Button color="tomato" >B1</Button>
     <Button color="lightblue">B2</Button>
     <Button color="green">B3</Button>
   </div>
  );
}

export default App;
