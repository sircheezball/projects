//global variables here: word, word array(s), guesses, guessedLetters
var word = "";
var easy = ['Pool', 'Mama', 'Egg', 'Fire', 'Arm', 'Sun', 'Dinner', 'Free', 'Horse', 'Book', 'Ice', 'Sea', 'Home', 'Cross', 'Funny', 'House', 'Bed', 'Door', 'Hair', 'Good', 'Rain', 'Drink', 'Eye', 'Blood', 'Dog'];
var medium = ['Guitar', 'Jungle', 'Falcon', 'Plaza', 'Quartz', 'Lyric', 'Chisel', 'Pixel', 'Hurdle', 'Wombat', 'Chaos', 'Mosaic', 'Fumble', 'Zephyr', 'Plunge', 'Twisty', 'Vortex', 'Bamboo', 'Waffle', 'Crumble', 'Symphony', 'Whistle', 'Blossom', 'Sphinx'];
var hard = ['Xylophone', 'Quizzical', 'Mnemonic', 'Pizzazz', 'Juxtapose', 'Belligerent', 'Quagmire', 'Exquisite', 'Ubiquitous', 'Zephyr', 'Xenophobia', 'Galvanize', 'Labyrinth', 'Xenon', 'Quixotic', 'Kaleidoscope', 'Peregrinate', 'Sycophant', 'Quintessential', 'Ineffable', 'Sesquipedalian', 'Vorfreude', 'Paradox', 'Ephemeral'];
var guesses = 0;
var guessedLetters = [];
var message = "";

//event listeners for startGame and guessLetter
document.getElementById("start").addEventListener("click", startGame);
//once at start of the game
function startGame() {

    var difficulty = document.getElementById("difficulty").value;

    if(difficulty == 1){    
        word = easy[Math.floor(Math.random() * easy.length)];
    } else if(difficulty == 2) {
        word = medium[Math.floor(Math.random() * medium.length)];
    } else if(difficulty = 3) {
        word = hard[Math.floor(Math.random() * hard.length)];
    }
    guessedLetters = [];
    guesses = 10;
    printWord();
    document.getElementById("output2").innerHTML = "";
    document.getElementById("numGuesses").innerHTML = guesses;

/*
- Reset the board, empty guessedLetters 
- Set a word from words array into word - this line will grab  a random element from your words array for you:
word = words[Math.floor(Math.random() * words.length)];
*/
    enableButtons();
    document.getElementById("guessedLetters").innerHTML = guessedLetters;

}

//at start and every time the user enters a guess
function printWord() {
  var displayWord = "";

  for (var i=0; i < word.length; i++){

    if(guessedLetters.indexOf(word[i].toLowerCase()) > -1){
        displayWord += word[i];
    }else{
        displayWord += "_ ";
    }
    }
    if (word == displayWord){
        winSkeels();
    }
    if (guesses == 0 && word != displayWord){
        berkelium();
    }
  
  document.getElementById("word").innerHTML = displayWord;
  document.getElementById("numGuesses").innerHTML = guesses;
/*
Compare each letter in answer word to the letters in guessedLetters using guessedLetters.indexOf(letter).  Use this to build the “_” word with the correctly guessed letters filled in.
there is a help video for this on classroom 
*/


}
function winSkeels(){
   document.getElementById("output2").innerHTML = "WINNER WINNER CHICKEN DINNER";
    
}

function berkelium(){
    document.getElementById("output2").innerHTML = "you lost, try again sometime :/ the word was " + word;

}
//every time the user enters a guess
function guessLetter(letter) {
    if (guesses >= 0){
    guessedLetters.push(letter);
    printWord();
    guesses = guesses-1;
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("fart").src = "images/" + guesses + ".png";
    /*
Manage the game: Add letters to guessedLetters, call printWord, deduct from guesses, check for a win or loss.
*/
    }else{
        document.getElementById("output2").innerHTML = "hey farthead, you lost why are you trying to guess?! ";
    }
}
var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function addButtons() {

    //set up some vars (neater this way than to create fresh vars on each loop)
    var btn;
    var div = document.getElementById("buttonContainer");

    for(var i=0; i<a.length;i++) {

        //create and save a "button" html element
        btn = document.createElement("button");

        //add the three necessary attributes to my button element
        btn.setAttribute("class","ltrBtn");
        btn.setAttribute("value",a[i]);
        btn.setAttribute("onclick","btnClickHandler(this)");

        //set the display value of the button
        btn.innerHTML = a[i];

        //append the button element to the page
        div.appendChild(btn);

        //final html output is:
        // <button class="ltrBtn" value="a" onclick="btnClickHandler(this)">a</button>


    }



}

function enableButtons() {
    var btns = document.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++){
        btns[i].disabled = false;
    }
    console.log(btns)
}

function btnClickHandler(button) {
    //the "this" parameter returns the button itself
    //write the button value to the page
    document.getElementById("output").innerHTML = button.value;
    guessLetter(button.value);
    button.disabled=true;
    
}
