import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Members from './components/Members'
import MemberSingle from './components/MemberSingle'
import Login from './components/Login'
import Sign_Up from './components/Signup'
import Chat from './components/Chat'
import Contact from './components/Contact'
import Error from './components/Error'
import {StateProvider} from './components/helper/globalState'

function App() {
  const initialState = {
    user:{
      loggedIn:false,
      username:'Guest'
    }
  }
  const reducer = (state,action) =>{
    switch (action.type) {
      case 'changeUser':
        
        return {
          ...state,
          user:action.newUser
        }
    
      default:
        return state
    }
  }
  
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Sign_Up}/>
        <Route path='/about' component={About}/>
        <Route path='/members/:id' component={MemberSingle}/>
        <Route path='/members' component={Members}/>
        <Route path='/chat' component={Chat}/>
        <Route path='/contact' component={Contact}/>
        <Route component={Error}/>
      </Switch>
    </StateProvider>
  );
}

export default App;
