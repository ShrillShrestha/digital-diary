import { button } from "@aws-amplify/ui";
import React, {Component} from "react";
import * as BS from "react-bootstrap";
import colorDictionary from "../../JS/colorPalette";
import CategoryInfo from "./categoryInfo";

class Category extends React.Component{

    //.i
    logout = () => {
        /*
            This function will the the user back to the login / register page.
        */
        
    }

    //.i
    createCategory = () =>{
        /*
            This function will take the user to the form that will allow them to create a new category.
        */
    }

    getCategories = () => {
        /*
            This function will load all the categories from the DB and create a CategoryInfo per
            category.
        */
        return <div>
                    <CategoryInfo
                        categoryName = "Video Games"
                        categoryDescription = "Talk about games in this section"
                        imageURL = "https://i.imgur.com/SjXJ5hp.png"
                        theme = {this.props.theme}
                        changeToEntry = {this.props.changeToEntry}

                    />

                    <CategoryInfo
                        categoryName = "Anime"
                        categoryDescription = "Talk about anime in this section"
                        imageURL = "https://w7.pngwing.com/pngs/823/892/png-transparent-blue-haired-female-anime-character-myanimelist-imgur-konosuba-manga-aqua-blue-face-cg-artwork-thumbnail.png"
                        theme = {this.props.theme}
                        changeToEntry = {this.props.changeToEntry}
                    />
                </div>
    }

    render(){
        console.log(this.props.theme)
        console.log(colorDictionary)
        let colorPalette = colorDictionary[this.props.theme];

        console.log(colorPalette);

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
            backgroundColor: colorPalette.backgroundDark,
            color: colorPalette.textColor
        };

        let innerContainerStyle  = {
            width: "80%",
            height: "70vh",
            overflowY: "scroll",

            backgroundColor: colorPalette.backgroundLight,
            color: colorPalette.textColor
        };

        let buttonStyle = {
            background: 'linear-gradient(to bottom, ' + colorPalette.uiElementDark + ' 80%,' + colorPalette.uiElementLight + '   )',
            color: colorPalette.textColor,
            fontSize: "1.5em",
            width: "20vw"
        }
        

        return(
            <BS.Container fluid style = {outterContainerStyle} >

                <BS.Row>
                    <BS.Col>
                        <div align = "center">
                            <h1>
                                Categories
                            </h1>
                        </div>
                    </BS.Col>
                </BS.Row>
                <BS.Row>
                    <BS.Col>
                        <div align = "center">
                        <BS.Container fluid style = {innerContainerStyle}>
                            {this.getCategories()}
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
                            Create a new Category
                        </BS.Button>

                    </BS.Col>

                </BS.Row>
            </BS.Container>
        )
    }
}

export default Category;