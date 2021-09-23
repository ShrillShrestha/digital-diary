import React, {Component} from "react";
import * as BS from "react-bootstrap";
import colorDictionary from "../../../JS/colorPalette";

class CategoryInfo extends React.Component{

    constructor(){
        super();
        this.state = {
            number: 4
        }
    }

    changeToEntry = () =>{
        /*
            This function will update the current view to entry view.
        */
       this.setState({number: 10})
       console.log("not implemented yet")
       console.log(this.state.number);
       
    }

    render(){
        console.log(this.state.number);
        let categoryName = this.props.categoryName;
        let categoryDescription = this.props.categoryDescription;
        let imageURL = this.props.imageURL;
        let colorPalette = colorDictionary[this.props.theme];

        let cardStyle = {
            display: "flex",
            flexDirection: "row",
            border: "0.5em inset " + colorPalette.backgroundDark,
            marginTop: "1em",
            minWidth: "100%",
            maxWidth: "100%",
            maxHeight: "40vh",
            minHeight: "40vh",
            background: 'linear-gradient(to bottom, ' + colorPalette.uiElementLight + ',' + colorPalette.uiElementDark + ' 70%,' + colorPalette.uiElementLight + '   )'
        }

        let cardImageStyle = {
            minWidth: "20vw",
            maxWidth: "40vw",
            minHeight: "20vh",
            maxHeight: "40vh"
        };

        let cardBodyStyle = {
            textAlign: "center",
            alignItems: "center",
            justifyItems: "center",
            width: "100%",
            overflow: "auto",
            maxHeight: "40vh"
        }

        
        return(

            <BS.Card style = {cardStyle} onClick = {this.props.changeToEntry}>
                <BS.Card.Img style = {cardImageStyle} src = {imageURL}/>
                <BS.Card.Body style = {cardBodyStyle}>
                    <BS.Card.Title> <h1> {categoryName} </h1> </BS.Card.Title>
                    <br/>
                    <BS.Card.Text>
                    {categoryDescription}
                    </BS.Card.Text>
                </BS.Card.Body>
            </BS.Card>

        );
    }

}

export default CategoryInfo;