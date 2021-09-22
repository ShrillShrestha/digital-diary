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

let gameboyPalette = new ColorPalette("#1F1F1F","#4D533C","#FFFFFF","#8B956D","#C4CFA1");

let colorDictionary = {
    "brown": brownPalette,
    "cyberpunk":cyberpunkPalette,
    "crimson": crimsonPalette,
    "pastel": pastelPalette,
    "gameboy": gameboyPalette
};

export default colorDictionary;