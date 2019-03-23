// grab info from text input (textarea)
// send it to the api 
// parse response from api
// output it into the textarea (translated box)

//add class active and remove all other class active (it's a jquery function)

// updates the UI based on the language selected.
var activeLanguage;
function changeLanguage (active){
    console.log(active);
    if (active !== undefined) {
        toggleDisplay();
        activeLanguage = active;  
        translateButtonClicked();
    }
    
    switch (active) {
            
        case 'quenya':
            console.log(activeLanguage);
            //document.body.style.background="#1c3226";
            document.getElementById("translate-button").style.background="#d3d3d3";
            document.getElementById("clear-button").style.background="#d3d3d3";
            document.getElementById('content').innerHTML = "<h1>Elvish</h1><p>The elvish languages were the first thing Tolkien created for his mythos, starting with what he originally called 'Qenya', the first primitive form of Elvish. This was later called Quenya (High-elven) and is one of the two most complete of Tolkien's languages. The phonology and grammar of Quenya are strongly influenced by Finnish, Latin, Greek and elements of ancient Germanic languages, and Sindarin is strongly influenced by Welsh.</p>"
            document.getElementById('logo').innerHTML = "<img src='./assets/images/elvishtransparent.png' width='330'>"
            break;
        case 'valyrian':
            console.log(activeLanguage);
            //document.body.style.background="#611e1e";
            document.getElementById("translate-button").style.background="#d3d3d3";
            document.getElementById("clear-button").style.background="#d3d3d3";
            document.getElementById('content').innerHTML = "<h1>Valyrian</h1><p>High Valyrian is the language of the old Valyrian Freehold which was located on the eastern continent of Essos. Much of Essos was once dominated by the Valyrians for thousands of years, stretching from the Free Cities in the west, to Slaver's Bay in the east. The Valyrians forced the peoples they subjugated to speak in (or at least be able to converse in) their language.</p>"
            document.getElementById('logo').innerHTML = "<img src='./assets/images/targtransparent.png' width='330'>"
            break;
        case 'minion':
            console.log(activeLanguage);
            //document.body.style.background="#0072d5";
            document.getElementById("translate-button").style.background="#d3d3d3";
            document.getElementById("clear-button").style.background="#d3d3d3";
            document.getElementById('content').innerHTML = "<h1>Minion</h1><p>The minions' language includes French, Spanish, and food references. For example, 'poulet tiki masala' is French for the Indian chicken dish. Demi-onomatopoeias (the use of words that emulate the sound of the things or events they represent) and intentionally mispronounced English words are also incorporated in the Minions language.</p>"
            document.getElementById('logo').innerHTML = "<img src='./assets/images/miniontransparent.png'width='330'>"
            break;
        case 'dothraki':
            //document.body.style.background="#a23b00";
            document.getElementById("translate-button").style.background="#d3d3d3";
            document.getElementById("clear-button").style.background="#d3d3d3";
            document.getElementById('content').innerHTML = "<h1>Dothraki</h1><p>The Dothraki language is a constructed fictional language in George R. R. Martin's fantasy novel series A Song of Ice and Fire and its television adaptation Game of Thrones. It is spoken by the Dothraki, a nomadic people in the series's fictional world.</p>";
            document.getElementById('logo').innerHTML = "<img src='./assets/images/dothtransparent.png' width='330'>"
        default:
            break;
    }
}

// displays active language page and hides splash page once a language is selected from the splash page.
function toggleDisplay() {
    document.getElementById("languageDiv").style.display="block";
    document.styleSheets[0].disabled = false;
    document.getElementsByClassName("menu")[0].style.display="none";
    document.getElementById("splash-title").style.display="none";

}

// updates CSS for translate and clear buttons
$(".bottombuttons").hover(function() {
    $(this).css({opacity: 0.91});
},
function() {
    $(this).css({opacity: 1});
});

// grabs the text-input to send to the api once the translate button is clicked
function translateButtonClicked() {
    var userInput = $('#text-input').val();
    console.log(userInput);
    translateInput(userInput);
}

// Calls the correct translation based on the selected/active language
function translateInput(userInput) {
console.log(activeLanguage);
    $.ajax({
            url: 'https://api.funtranslations.com/translate/' + activeLanguage + '.json?text= ' + userInput,
            type: 'GET',
        })
        .done(function(response) {
            displayTranslation(response);
            console.log(response);
            //displayTranslation(response);
        })
}

// Translation appears in translation (text-output) box
function displayTranslation(response) {
    $('#text-output').empty();
    document.getElementById("text-output").innerHTML = response.contents.translated;
    console.log(response.contents.translated);

};
// When clear button is clicked the text is cleared and placeholders return
function clearButtonClicked() {
  document.getElementById("translation-form").reset();
  document.getElementById("text-output").innerHTML= "";
  console.log(clearButtonClicked);
}

function updateActiveLanguage(languageChoice) {
    activeLanguage = languageChoice;
    console.log(activeLanguage);
}

// JS for splashpage
$(document).ready(function () {
    document.styleSheets[0].disabled = true;
    $(".trigger").click(function () {
        $(".menu").toggleClass("active");
    });
});

//grab id/ content
//$('#id').html
//$("body") background color
//grab button ids 
