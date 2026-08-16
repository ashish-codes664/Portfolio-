alert("welcome to my portfolio website");

let name = "ashish";
console.log(name);

function hireMe(){
    alert("thanks for visit my portfolio!");
}

function askName(){
    let name = prompt("enter your name:");

    if(name == "" || name == null){
        alert("you didn't enter your name!");
    }else{
        alert("welcome " + name + "!");
    }
}

function changeTitle(){
    let name = prompt("Enter your name:");

    if(name != "" && name != null){
        document.getElementById("title").innerHTML = "Hi, I'm " + name;
    }
}

function changebackground(){
    document.body.style.background="lightblue";
}

function toggledarkmode(){
    document.body.classList.toggle("dark-mode");
}

function changeimage(){
    document.getElementById("profileimage").src="newimage.png";
}

function sendmessage(event){
    event.preventDefault();

    let name =
    document.getElementById("name").value;

    document.getElementById("result").innerText =
    "thank you " + name + "! your message has been received.";
}
