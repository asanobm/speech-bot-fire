import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
    </BrowserRouter>
  )
}

export default App
