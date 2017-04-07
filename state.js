
var currentState =
  availableGreetings: [
                        
                        // {name:"Bob",
                        // image: "./bob.jpg"},
                        // {name:"Mary",
                        // image: "./mary.png"},
                        // {name:"Carson",
                        // image: "./carson.jpg"},
                        ]
  greetingIndex: 0



var element = document.getElementById("greeting");
element.innerHTML = "Hello " + currentState.availableGreetings[currentState.greetingIndex];


function greetNext(){
  currentState.greetingIndex += 1;

if(currentState.greetingIndex == currentState.availableGreetings.length){
  currentState.greetingIndex = 0;
}

  var element = document.getElementById("greeting");
  element.innerHTML = "Hello " + currentState.availableGreetings [currentState.greetingIndex];
}
