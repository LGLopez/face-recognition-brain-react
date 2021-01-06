import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


const app = new Clarifai.App({
  apiKey: '834c6c97999a446281c27fb5711ad8d0'
})

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        console.log( "response: ", response);
        var regions = response['outputs'][0]['data']['regions'];
        console.log(regions);
      })
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageURL={this.state.imageURL}/>
      </div>
    );
  }
}


export default App;
