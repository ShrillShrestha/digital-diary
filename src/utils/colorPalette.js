import { Col } from "react-bootstrap";

class ColorPalette{
    constructor(uiElementsDark, uiElementsLight, textColor, backgroundDark, backgroundLight){
        this.uiElementDark = uiElementsDark;
        this.uiElementLight = uiElementsLight;
        this.textColor = textColor;
        this.backgroundDark = backgroundDark;
        this.backgroundLight = backgroundLight;
        
    }
}

let brownPalette = new ColorPalette("#8C6E63","#BDACA4","#D7CCC9","#5D4138","#795546");

let cyberpunkPalette = new ColorPalette("#ea00d9","#711c91","#0abdc6","#091833","#133e7c");

let crimsonPalette = new ColorPalette("#990000", "#cc0000","#660000","#330000","#440000");

let pastelPalette = new ColorPalette("#B8E0D2","#D6EADF","#FF9AA2","#809BCE","#95B8D1");

let gameboyPalette = new ColorPalette("#8B956D","#C4CFA1","#FFFFFF","#1F1F1F","#4D533C");

let steampunkPalette = new ColorPalette("#BC835B","#946656","#64816C","#332722","#8F6050");

let synthwavePalette = new ColorPalette("#ff901f","#ffd319","#ff2975","#8c1eff","#f222ff");

let larenardPalette = new ColorPalette("#907e68","#ccbcad","#a0552b","#383931","#646756");

let bluesPalette = new ColorPalette("#596f7c","#a5a29d","#ead7c6","#000e1b","#012b3b");

let bookHavenPalette = new ColorPalette("#b18653","#d5c5ae","#47596f","#312229","#54101d");

let hitTheRoadJackPalette = new ColorPalette("#daa437","#fccd65","#8a8744","#6b2a24","#cd6e52");

let wildflowerPalette = new ColorPalette("#ffdf7c","#fdefc0","#243127","#a46379","#feb640");

let frostyCocoPalette = new ColorPalette("#49392c","#77625c","#98d2eb","#e1f2fe","#b2b1cf");

let twilightPalette = new ColorPalette("#ee8695","#fbbbad","#292831","#333f58","#4a7a96");

let leopoldDreamPalette = new ColorPalette("#372134","#474476","#8cefb6","#4888b7","#6dbcb9");

let sadnessPalette = new ColorPalette("#7d95de","#ddc8f9","#fbfef9","#2e364d","#425d87");

let colorDictionary = {
    "Brown": brownPalette,
    "Cyberpunk":cyberpunkPalette,
    "Crimson": crimsonPalette,
    "Pastel": pastelPalette,
    "Gameboy": gameboyPalette,
    "Steampunk": steampunkPalette,
    "Synthwave": synthwavePalette,
    "La Renard": larenardPalette,
    "Blues": bluesPalette,
    "Book Haven": bookHavenPalette,
    "Hit The Road Jack": hitTheRoadJackPalette,
    "Wildflower": wildflowerPalette,
    "Frosty Coco": frostyCocoPalette,
    "Twilight": twilightPalette,
    "Leopold's Dream": leopoldDreamPalette,
    "Sadness": sadnessPalette
};

export default colorDictionary;