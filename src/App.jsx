import './App.css'
import { DrinkView } from './features/drink/DrinkView'
import { ChaserView } from './features/chaser/ChaserView'
import { UserView } from './features/user/UserView'

function App() {
  return (
    <div className="App">
      <DrinkView/>
      <ChaserView/>
      <UserView/>
    </div>
  )
}

export default App
