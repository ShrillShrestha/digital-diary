import * as BS from "react-bootstrap";
import Category from "./Components/Categories/category";
import Entry from "./Components/Entries/entry";
import colorDictionary from "./JS/colorPalette";
import React ,{Component} from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      theme: "Gameboy",
      currentView: <Category 
                      theme = "Gameboy"
                      changeEntry = {this.changeToEntry}
                    />
    };
  }

  changeToEntry = () =>{
    this.setState({currentView:<Entry category = "Video Game"/>, theme: "Book Haven"});
  }

  render(){
    return (
      <div>
        {this.state.currentView}
      </div>
    );
  }
}

export default App;
