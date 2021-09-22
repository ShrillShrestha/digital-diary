import { button } from "@aws-amplify/ui";
import React, {Component} from "react";
import * as BS from "react-bootstrap";
import colorDictionary from "../../JS/colorPalette";

class Entry extends React.Component{

    //.i
    return = () => {
        /*
            This function will the the user back to the login / register page.
        */
        
    }

    //.i
    createEntry = () =>{
        /*
            This function will take the user to the form that will allow them to create a new category.
        */
    }


    render(){

        let colorPalette = colorDictionary[this.props.theme];

        let outterContainerStyle  = {
            width: "100vw",
            height: "104vh",
            padding: "2% 0 0 0",
            marginTop: "-2%",
            overflow: "hidden",
            overflowY: "hidden",
            overflowX: "hidden",
            textAlign: "center",
            justifyItems: "center",
            alignItems: "center",
            fontWeight: "bolder",
            backgroundColor: colorPalette.backgroundDark,
            color: colorPalette.textColor
        };

        let innerContainerStyle  = {
            fontWeight: "bolder",
            width: "80%",
            height: "70vh",
            overflowY: "scroll",

            backgroundColor: colorPalette.backgroundLight,
            color: colorPalette.textColor
        };

        let buttonStyle = {
            background: 'linear-gradient(to bottom, ' + colorPalette.uiElementDark + ' 80%,' + colorPalette.uiElementLight + '   )',
            color: colorPalette.textColor,
            fontSize: "1em",
            width: "20vw",
            fontWeight:"bolder"
        }
        

        return(
            <BS.Container fluid style = {outterContainerStyle} >

                <BS.Row>

                    <BS.Row>
                        <BS.Col>
                            <div align = "center">
                                <h1>
                                   <b> {this.props.category} </b>
                                </h1>
                            </div>
                        </BS.Col>
                    </BS.Row>

                    <BS.Col>
                        <div align = "center">
                        <BS.Container fluid style = {innerContainerStyle}>
                        
                        </BS.Container>
                        </div>
                    </BS.Col>
                </BS.Row>
                <br/>
                <BS.Row>

                    <BS.Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6} xxl = {6}>

                        <BS.Button style = {buttonStyle}>
                            Return
                        </BS.Button>

                    </BS.Col>

                    <BS.Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6} xxl = {6} >

                        <BS.Button style = {buttonStyle}>
                            Create a new Entry
                        </BS.Button>

                    </BS.Col>

                </BS.Row>
            </BS.Container>
        )
    }
}

export default Entry;