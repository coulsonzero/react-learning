import React, { Component } from 'react'
import './App.css'
import Swiper2 from './components/Swiper2'

export class App extends Component {
  render() {
    return (
			<div style={{height: '100vh'}}>
				<div>App</div>
        <Swiper2 />
			</div>
		)
  }
}

export default App