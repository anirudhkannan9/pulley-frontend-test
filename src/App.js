import React from 'react'
import { useSelector } from 'react-redux'
import LogInPageContainer from './components/LogInPage/LogInPage.container'
import SignUpPageContainer from './components/SignUpPage/SignUpPage.container'

const App = () => {
  const counter = useSelector( state => state.counter )
  let toRender = null

  switch (counter) {
    case 0:
      toRender = <SignUpPageContainer/>
      break
    case 1:
      toRender = <LogInPageContainer/>
      break
    default:
      toRender = <SignUpPageContainer/>
  }

  return (
    <div className="App">
      { toRender }
    </div>
  );
}

export default App;
