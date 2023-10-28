/*Llamo a mis botones de "Imagen" y "Texto" para esconder los asides*/ 
const imgButton = document.getElementById('img-button');
const textButton = document.getElementById('text-button')

const imgAside = document.getElementById('img-aside')
const textAside = document.getElementById('text-aside');

textButton.addEventListener('click', ()=>{
    imgAside.classList.add(`is-hidden`)
    textAside.classList.remove(`is-hidden`);
});
imgButton.addEventListener('click', ()=>{
    textAside.classList.add(`is-hidden`);
    imgAside.classList.remove(`is-hidden`)
});

/*Llamo a mis variables para cambiar de tema*/
const lightButton = document.getElementById('light-button');
const darkButton = document.getElementById('dark-button');
const body = document.body;

const changeTheme = () =>{
    let currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark'){
        newTheme = 'light'
    } else {
        newTheme = 'dark'
    }
    body.setAttribute('data-theme', newTheme);
};

darkButton.addEventListener('click', () =>{
    changeTheme();
    darkButton.classList.add('is-hidden');
    lightButton.classList.remove('is-hidden');
});
lightButton.addEventListener('click', () =>{
    changeTheme();
    lightButton.classList.add('is-hidden');
    darkButton.classList.remove('is-hidden');
});


/*Aside de Texto*/

const topTextInput = document.getElementById('top-text-input');
const bottomTextInput = document.getElementById('bottom-text-input');
const memeTopText = document.getElementById('meme-top-text');
const memeBottomText = document.getElementById('meme-bottom-text')

/*Texto superior*/
topTextInput.addEventListener('input',() =>{
    memeTopText.innerHTML = `${topTextInput.value}`
});

/*Texto inferior*/
bottomTextInput.addEventListener('input',() =>{
    memeBottomText.innerHTML = `${bottomTextInput.value}`
});

/*Checkbox para quitar el texto*/
const topCheckbox = document.getElementById('top-checkbox');
const bottomCheckbox = document.getElementById('bottom-checkbox');

topCheckbox.addEventListener('change', ()=>{
    if (topCheckbox.checked){
        memeTopText.classList.add('is-hidden')
    } else{
        memeTopText.classList.remove('is-hidden')
    }
});
bottomCheckbox.addEventListener('change', ()=>{
    if (bottomCheckbox.checked){
        memeBottomText.classList.add('is-hidden')
    } else{
        memeBottomText.classList.remove('is-hidden')
    }
});

/*Cambio de fuente*/
const fontFamily = document.getElementById('font-family')

fontFamily.addEventListener('change', ()=>{
    memeTopText.style.fontFamily = `${fontFamily.value}`;
    memeBottomText.style.fontFamily = `${fontFamily.value}`;
});

/*Tamaño de letra */
const fontSizeInput = document.getElementById('font-size-input');

fontSizeInput.addEventListener('input', ()=>{
    memeTopText.style.fontSize = `${fontSizeInput.value}rem`;
    memeBottomText.style.fontSize = `${fontSizeInput.value}rem`;
});

/*Alineación*/
const leftAlignBtn = document.getElementById('left-align-btn');
const centerAlignBtn = document.getElementById('center-align-btn');
const rightAlignBtn = document.getElementById('right-align-btn');

leftAlignBtn.addEventListener('click', ()=>{
    memeTopText.style.textAlign = 'left';
    memeBottomText.style.textAlign = 'left';
});

centerAlignBtn.addEventListener('click', ()=>{
    memeTopText.style.textAlign = 'center';
    memeBottomText.style.textAlign = 'center';
});

rightAlignBtn.addEventListener('click', ()=>{
    memeTopText.style.textAlign = 'right';
    memeBottomText.style.textAlign = 'right';
});

/*Color del texto*/
const textColorPicker = document.getElementById('input-color-text')
const textColorName = document.getElementById('text-color-name')

textColorPicker.addEventListener('input', ()=>{
    memeTopText.style.color = `${textColorPicker.value}`;
    memeBottomText.style.color = `${textColorPicker.value}`;

    textColorName.innerHTML = `${textColorPicker.value}`;
});

/*Color del fondo del texto*/
const textBkgColorPicker = document.getElementById('input-color-bkg-text')
const textBkgColorName = document.getElementById('text-bkg-color-name')

textBkgColorPicker.addEventListener('input', ()=>{
    memeTopText.style.backgroundColor = `${textBkgColorPicker.value}`;
    memeBottomText.style.backgroundColor = `${textBkgColorPicker.value}`;

    textBkgColorName.innerHTML = `${textBkgColorPicker.value}`;
});

/*Checkbox para quitar el fondo*/
const checkboxSinFondo = document.getElementById('checkbox-sin-fondo');

checkboxSinFondo.addEventListener('change', ()=>{
    if (checkboxSinFondo.checked){
        memeTopText.style.backgroundColor = 'transparent'
        memeTopText.style.position = 'absolute'

        memeBottomText.style.backgroundColor = 'transparent'
        memeBottomText.style.position = 'absolute'
    } else{
        memeTopText.style.backgroundColor = `${textBkgColorPicker.value}`
        memeTopText.style.position = 'static'

        memeBottomText.style.backgroundColor = `${textBkgColorPicker.value}`
        memeBottomText.style.position = 'static'
    }
});

/*Contorno*/
const contornTextNone = document.getElementById('contorn-text-none');
const contornTextWhite = document.getElementById('contorn-text-white')
const contornTextBlack = document.getElementById('contorn-text-black')

contornTextNone.addEventListener('click', ()=>{
    memeTopText.style.webkitTextStroke = 'transparent'
    memeBottomText.style.webkitTextStroke = 'transparent'
});
contornTextWhite.addEventListener('click', ()=>{
    memeTopText.style.webkitTextStroke = '2px white'
    memeBottomText.style.webkitTextStroke = '2px white'
});
contornTextBlack.addEventListener('click', ()=>{
    memeTopText.style.webkitTextStroke = '2px black'
    memeBottomText.style.webkitTextStroke = '2px black'
});

/*Espaciado*/
const inputSpacing = document.getElementById('input-spacing')

inputSpacing.addEventListener('input', ()=>{
    memeTopText.style.padding = `${inputSpacing.value}px 0px`
    memeBottomText.style.padding = `${inputSpacing.value}px 0px`
}); 

/*Interlineado*/
const interlineado = document.getElementById('interlineado')

interlineado.addEventListener('change', ()=>{
    memeTopText.style.lineHeight = `${interlineado.value}`
    memeBottomText.style.lineHeight = `${interlineado.value}`
});


/*Aside de imagen*/

/*URL*/
const urlInput = document.getElementById('url-input');
const memeImg = document.getElementById('meme-url');

urlInput.addEventListener('input', ()=>{
    memeImg.style.backgroundImage = `url(${urlInput.value})`;
});


/*Fondo*/
const colorPicker = document.getElementById('input-color-img');
const colorFondoName = document.getElementById('color-fondo-name')

colorPicker.addEventListener('input', ()=>{
    memeImg.style.backgroundColor = `${colorPicker.value}`
    colorFondoName.innerHTML = `${colorPicker.value}`
});


/*Filtros*/

const $ = (selector) => document.querySelector(selector);

const filterMeme = () => {
    $(".meme-img").style.filter =
        `brightness(${$("#brillo-input").value}) opacity(${$("#opacidad-input").value}) contrast(${$("#contraste-input").value}%) blur(${$("#desenfoque-input").value}px) grayscale(${$("#grises-input").value}%) hue-rotate(${$("#hue-input").value}deg) sepia(${$("#sepia-input").value}%) saturate(${$("#saturado-input").value}%) invert(${$("#negativo-input").value})`;
}

$("#brillo-input").addEventListener("input", filterMeme);
$("#opacidad-input").addEventListener("input", filterMeme);
$("#contraste-input").addEventListener("input", filterMeme);
$("#desenfoque-input").addEventListener("input", filterMeme);
$("#grises-input").addEventListener("input", filterMeme);
$("#sepia-input").addEventListener("input", filterMeme);
$("#hue-input").addEventListener("input", filterMeme);
$("#saturado-input").addEventListener("input", filterMeme);
$("#negativo-input").addEventListener("input", filterMeme);


/*Botón para reestablecer filtros*/
const resetBtn = document.getElementById('reset-btn');

const btnResetFilters = () =>{
    brilloInput.value = "100"
    opacidadInput.value = "100"
    contrasteInput.value = "0"
    desenfoqueInput.value = "0"
    grisesInput.value = "0"
    sepiaInput.value = "0"
    hueInput.value = "0"
    saturadoInput.value = "0"
    negativoInput.value = "0"
    filtros()
}

resetBtn.addEventListener ("click", btnResetFilters)

/*Botón de descarga*/

// const $ = (selector) => document.querySelector(selector)

const downloadMeme = () => {
    domtoimage.toBlob($(".meme-box")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}

$("#download-meme-btn").addEventListener("click", downloadMeme)
