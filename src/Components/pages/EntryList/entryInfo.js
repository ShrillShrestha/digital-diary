import React, {Component} from "react";
import * as BS from "react-bootstrap";
import colorDictionary from "../../../JS/colorPalette";

class EntryInfo extends React.Component{

    render(){
        let entryName = this.props.entryName;
        let entryPreview = this.props.entryPreview;

        let colorPalette = colorDictionary[this.props.theme];

        let cardStyle = {
            border: "0.5em inset " + colorPalette.backgroundDark,
            marginTop: "1em",
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "40vh",
            maxHeight: "40vh",
            background: 'linear-gradient(to bottom, ' + colorPalette.uiElementLight + ',' + colorPalette.uiElementDark + ' 70%,' + colorPalette.uiElementLight + '   )',
            borderRadius: "5vw",
            overflow: "auto"
        }


        let cardBodyStyle = {
            textAlign: "center",
            alignItems: "center",
            justifyItems: "center",
            width: "100%",
            overflow: "auto",
            maxHeight: "40vh"
        }

        let cardTextStyle = {
            padding: "0 0 10vh 0"
        }

        
        return(

            <BS.Card style = {cardStyle}>
                <BS.Card.Body style = {cardBodyStyle}>
                    <BS.Card.Title> <h1 style = {{fontWeight: "bolder"}}> {entryName} </h1> </BS.Card.Title>
                    <br/>
                    <BS.Card.Text style = {cardTextStyle}>
                    {entryPreview}
                    </BS.Card.Text>
                </BS.Card.Body>
            </BS.Card>

        );
    }

}

export default EntryInfo;