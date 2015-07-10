/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('#excuse-button').click(function() {
        $('#result').html(generateExcuse());
    });

    $('#activity-button').click(function() {
    	$('#idea').html(generateActivity());
    });
});

var personesques = [ //0 = nothing, 1 = requires "my", 2 = recurses
    ["Bill Gates", 0],
    ["Batman", 0],
    ["Spaceman Jones, the first space president of the United Space of America", 0],
    ["middle-school social studies teacher", 1],
    ["IBM's Watson", 0],
    ["Captain Jack Sparrow", 0],
    ["Michael Phelps", 0],
    ["Gandalf", 0],
    ["true love", 1],
    ["brother", 1],
    ["mom", 1],
    ["dad", 1],
    ["professor", 1],
    ["talking robot", 1],
    ["past self", 1],
    ["sentient motorcycle", 1],
    ["Roomba", 1],
    ["alter ego", 1],
    ["wife", 1],
    ["husband", 1],
    ["favorite actress", 1],
    ["home dawg", 1],
    ["lawyer", 1],
    ["poodle, Floofykins,", 1],
    ["friend's roommate", 1],
    ["sister's boyfriend", 1],
    ["imaginary friend", 1],
    ["dragon", 1],
    ["favorite aunt", 1],
    ["boss", 1],
    ["coworker's long-lost twin", 1],
    ["the only person who I truly believe cares about me", 2],
    ["my archnemesis", 2]
        ];
        
var outsides = [ //0 = period, 1 = ?
    ["Does anyone else want to", 1],
    ["Wouldn't it be fun to", 1],
    ["Why don't we", 1],
    ["We should", 0],
    ["Would you guys care to", 1]
];

//0 = in, 1 = at, 2 = on, 3 = under
var places = [
    ["the Batcave", 0],
    ["Narnia", 0],
    ["the Louvre", 1],
    ["a place outside of time itself", 0],
    ["the top of Mt. Everest", 2],
    ["my backyard", 0],
    ["the fires of Mt. Doom", 0],
    ["the White House", 0],
    ["my neighbor's back porch", 3],
    ["a local farm", 1],
    ["the library", 1],
    ["a silent auction", 1],
    ["the ISS", 0],
    ["the surface of the sun", 2],
    ["a field of beautiful flowers", 0]
];

var thingsToDo = [ //0 = that's all, 1 = then have a noun (person-esque), 2 = 2 personesques
    ["play ping-pong against", 1],
    ["bake cookies", 0],
    ["have a LAN party", 0],
    ["binge-watch Lord of the Rings", 0],
    ["have a duel of epic proportions with", 1],
    ["trade Pokémon with", 1],
    ["yell at", 1],
    ["frolic with", 1],
    ["ignore Alex's advice", 0],
    ["wrestle with", 1],
    ["play polo with", 1],
    ["play Jeopardy! against", 2]
];


var randomFromList = function(array)
{
    return array[Math.floor(Math.random() * array.length)];
};

function generatePersonesques(howMany) //really complex code to cover an edge scenario of getting the same personesque twice; I mean, that'd be lame
{
    var out = [];
    var takenPeople = [];
    var i = 0;
    while(i < howMany)
    {
        var person = randomFromList(personesques);
        if(takenPeople.indexOf(person) < 0) {
            if(person[1] === 2)
            {
                var noRecursion = true;
                while(noRecursion)
                {
                    var properPersonesque = randomFromList(personesques);
                    if(properPersonesque[1] !== 2 && takenPeople.indexOf(properPersonesque) < 0)
                    {
                        noRecursion = false;
                        takenPeople.push(properPersonesque);
                    }
                }
                takenPeople.push(person);
                if(properPersonesque[1] === 1)
                {
                    out[i] = person[0] + ", my " + properPersonesque[0] + ",";
                }
                else
                {
                    out[i] = person[0] + ", " + properPersonesque[0] + ",";
                }
            }
            else
            {
                takenPeople.push(person);
                if(person[1] === 1)
                {
                    out[i] = "my " + person[0];
                }
                else
                {
                    out[i] = person[0];
                }
            }
        }
        i++;
    }
    return out;
}

function genActivityOutside() 
{
    var outside = randomFromList(outsides);
    var punc = ".";
    if(outside[1] === 1) {
        punc = "?";
    }
    return outside[0] + " " + genActivityMiddle() + " " + appendPlace() + punc;
}

function genActivityMiddle()
{
    var activity = randomFromList(thingsToDo);
    var toReturn = activity[0] + " ";
    var personList = generatePersonesques(activity[1]);
    for(var i = personList.length - 1; i >= 0; i--)
    {
        if(i >= 2)
        {
            toReturn += personList[i] + ", ";
        }
        else if(i === 1)
        {
            toReturn += personList[i] + " and ";
        }
        else
        {
            toReturn += personList[i];
        }
    }
    return toReturn;
}

function appendPlace()
{
    var place = randomFromList(places);
    if(place[1] === 0)
    {
        return "in " + place[0];
    }
    else if(place[1] === 1)
    {
        return "at " + place[0];
    }
    else if(place[1] === 2)
    {
        return "on " + place[0];
    }
    else if(place[1] === 3)
    {
        return "under " + place[0];
    }
}

function generateActivity()
{
    return genActivityOutside();
}


function generateExcuse()
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
    
    return randomFromList(beginnings) + ', but I have to ' + randomFromList(verbs) + ' my ' + randomFromList(personesques)[0] + '.';
}