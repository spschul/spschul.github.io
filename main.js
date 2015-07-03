/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('#excusebutton').click(function() {
        $('#result').html(generateExcuse());
    });
});

var randomFromList = function(array)
{
    return array[Math.floor(Math.random() * array.length)];
};
var generateExcuse = function()
{
    var beginnings = [
        "I wish I could",
        "I'd love to",
        "That would be great",
        "I would if I could",
        "I might be able to later",
        "On any other occasion I would",
        "I'd be happy to"
    ];
    
    var verbs = [
        "take a walk with", 
        "visit",
        "talk to",
        "train",
        "brush",
        "work on",
        "bribe",
        "program",
        "warn my kids about",
        "redo",
        "catch",
        "get going; I'm meeting with",
        "watch this TV show with",
        "go to a party with",
        "go to a wedding for"
    ];
    
    var nouns = [
        "brother",
        "acne",
        "mom",
        "dad",
        "teacher",
        "professor",
        "car",
        "robot",
        "past self",
        "motorcycle",
        "Roomba",
        "hamster",
        "alter ego",
        "friend, Batman",
        "toaster",
        "wife",
        "husband",
        "favorite actress",
        "home dawg",
        "lawyer",
        "poodle",
        "friend's roommate",
        "sister's boyfriend",
        "imaginary friend",
        "only friend",
        "Segway",
        "dragon",
        "favorite aunt",
        "best friend's pet raccoon",
        "boss",
        "coworker's long-lost twin"
    ];
    return randomFromList(beginnings) + ', but I have to ' + randomFromList(verbs) + ' my ' + randomFromList(nouns) + '.';
}