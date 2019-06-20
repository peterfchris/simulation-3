import React from 'react';
import './App.css';
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Post from './Components/Post/Post'
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div>
      <Dashboard />
      <Auth />
      <Form />
      <Post />
      <Nav />
    </div>
  );
}

export default App;
