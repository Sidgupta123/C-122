x = 0
y = 0

draw_circle = "";
draw_rectangle = "";


var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start()
{
    document.getElementById("status").innerHTML = "All systems are functional. You may proceed with your commands.";
    recognition.start();
}

recognition.onresult = function(event)
{
        console.log(event);

     var content = event.results[0][0].transcript;
     document.getElementById("status").innerHTML = "Your command has been heard. It has been confirmed as a " + content;
     
     if(content =="circle")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "Drawing Circle ...";
            draw_circle = "set";
        }

        if(content =="rectangle")
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "Drawing Rectangle ...";
            draw_rectangle = "set";
        }
       
}

function setup()
    {
        canvas = createCanvas(900, 600);
    }

function draw() 
    {
        if(draw_circle == "set")
            {
           radius = Math.floor(Math.random() * 100);
           circle(x,y,radius);
           document.getElementById("status").innerHTML = "A circle has been drawn. ";
            }

        if(draw_rectangle == "set")
            {
           rectangle(x,y,70,50);  
           document.getElementById("status").innerHTML = "A rectangle has been drawn. ";
           draw_rectangle = "";
            }
    }