// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 

/*global $*/
	
$(document).ready(function() {
    console.log("page is loaded")
   $("button").click(function() {
     var userInput = $("input").val();
     console.log("user input is "+ userInput);
     var pigLatin = splitSentence(userInput); 
      console.log("piglatin is "+ pigLatin);
      $("#answer").html(pigLatin);
     
   });
});
  function pigLatinizer(word) {
    var vowels =["a","e","i","o","u"];
    var firstLetter = word[0];
    var indexOf = vowels.indexOf(firstLetter);
    console.log("index of "+ indexOf);
    var beginsWithVowel = indexOf > -1;
     if(beginsWithVowel){ 
       return word + "yay";  
     } else { 
       return word.slice(1) + word.slice(0,1) + "ay";  
     }            
}



function splitSentence(userInput){
    var split = userInput.split(" ");
    var output = [];
    for (var i = 0; i < split.length; i++){
    var word = pigLatinizer(split[i]);
        // push word into output
        output.push(word);
    }
    return output.join(" ");
}

// functions you'll need are .split and .slice 

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


