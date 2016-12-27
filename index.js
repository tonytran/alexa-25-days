'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.cd3d7ce4-2185-4791-91b3-0861f72961f3"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = '25 Facts of Christmas';

/**
 * Array containing 25 facts about Christmas.
 */
var FACTS_OF_CHRISTMAS = [
    "The word Christmas originates from the words Christ's Mass.",
    "Anglo-Saxons referred to the holiday as midwinter or nativity.",
    "Christmas lights were invented in 1882 by Edward Johnson.",
    "The first evidence of a Christmas tree is from a pamphlet that dates back to 1570.",
    "In order for Santa to visit all the homes on Christmas Eve he would have to visit 822 homes each second.",
    "The tradition of Christmas caroling began as an old English custom. It was originally called wassailing and was a toast to long life.",
    "The letter X in Xmas is a Greek abbreviation for Christ.",
    "The traditional Christmas meal in England before turkey, was mustard and a pig's head.",
    "In Germany they call Santa, Kriss Kringle.",
    "In Italy they call Santa, Le Befana.",
    "In France they call Santa, Pere Noel.",
    "The best-selling Christmas song ever is White Christmas by Bing Crosby. It has sold more than 50 million copies around the world.",
    "There are approximately 60 million trees grown in Europe each year.",
    "St. Francis of Assisi began the custom of singing Christmas carols in church in the 13th century.",
    "The three wise men who visited Mary and Joseph when Jesus was born brought gold, frankincense and myrrh as gifts. ",
    "Other popular Christmas figures include Christkind, Saint Nicholas, and Father Christmas.",
    "The word Noel entered the English language in the late 1300s. It originated from the Latin word 'natalis' which means 'day of birth'.",
    "The world's biggest snowman was 113 feet tall and was built in Maine.",
    "Jingle Bells was originally written by James Pierpont in 1857, for Thanksgiving not Christmas. It was originally called One Horse Open Sleigh.",
    "In 1950 the world's largest Christmas tree was placed in a Washington Mall. It was 221 feet high.",
    "Christmas is one of the most profitable times of year for many businesses.",
    "Some believe that Jesus was born in a cave and not a stable.",
    "The tradition of hanging stockings comes from a Dutch custom. They would leave shoes full of food for St. Nicolas' donkeys and St. Nicholas would then leave small gifts in return.",
    "Christmas decorations that are popular today include Christmas trees, Christmas lights, wreaths, garland, holly, mistletoe, and nativity scenes.",
    "In old English (first recorded in 1038) Christmas was referred to as Cristesmæsse, which literally means 'Christian Mass'."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS_OF_CHRISTMAS.length);
        var randomFact = FACTS_OF_CHRISTMAS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
