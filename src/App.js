import logo from './logo.svg';
import './App.css';
import Welcome from './Pages/Welcome';
import SignUp from './Pages/SignUp';
import AddNewGame from './Components/AddNewGame';
import SignIn from './Pages/Signin';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';

function App() {
  const [active, setActive] = useState("1");
  const [addNewGame, setAddNewGame] = useState(false);

  const handleAddNewGameCloseBtn = () => {
    setAddNewGame(false);
  }
  const handleAddNewGameOpenBtn = () => {
    setAddNewGame(true);
  }

  return (
    <div className="App overflow-hidden">
      <Routes>
        <Route index element={<Welcome />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        
        <Route path='/dashboard' element={
          <Sidebar active={active} setActive={setActive}>
            <div className="pl-[70px] pr-[70px]  bg-[#141627] ">
              <Header active={active} open={handleAddNewGameOpenBtn} />
            </div>
            <Dashboard addNewGame={addNewGame} close={handleAddNewGameCloseBtn} />
          </Sidebar>
        } />
      </Routes>
      {/* <AddNewGame /> */}
    </div>
  );
}

export default App;
