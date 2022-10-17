let data;
accessData();
function accessData()
{
    const request = new XMLHttpRequest();
    request.open("GET","https://ghibliapi.herokuapp.com/films", true);

    request.onload = function() {
        data = JSON.parse(this.response);

        if (request.status == 200)
        {
            console.log("Response OK.")
            // console.log(data[4].title);
            data.forEach(
                movie =>
                {
                    // console.log(`Movie: ${movie.title}`);
                    let newElt = document.createElement("option");
                    let textNode = document.createTextNode(movie.title);
                    newElt.appendChild(textNode);
                    document.querySelector("#movieOption").appendChild(newElt);
                }
            )
            
        }
        else
        {
            console.log(`Error occurred: Status: ${request.status}`);
        }
    };
    request.send();
    console.log("Hello there!");
}

function displayMovie()
{
    //console.log("test");
    data.forEach(
    movie =>
    {
        if (document.querySelector("#movieOption").value == movie.title) {
            console.log(movie.title);
            let newElt = document.createElement("p");
            let textNode = document.createTextNode(`${movie.description}`);
            newElt.appendChild(textNode);
            document.querySelector("#placeHolder").innerHTML="";
            document.querySelector("#placeHolder").appendChild(newElt);
        }
    }
 )
}

//const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);


// let names = ['Fred', 'Pete', 'Sally', 'Jane'];
// names.push('Joe');
// for (let i=0; i < names.length; i++)
// {
//     console.log(`Hi there ${names[i]}`);
// }

// names.forEach( name=>
//     {
//         console.log(`Hi there ${name}`);
//     }

// );

// console.log('Hello there!');

// sayHello("Fred");
// printOut("State College");


// function sayHello(yourName)
// {
//     let name = document.querySelector("#nameBox").value;
//     console.log(`Hello there, ${name}!`);

//     let outputField = document.querySelector("#outputField");
//     outputField.innerHTML = `Hello there, ${name}!`

//     //console.log('Hello there ' + yourName);
    
// }

// function printOut()
// {
//     let Address = document.querySelector("#AddressBox").value;
//     console.log(`The address is, ${Address}!`);

//     let outputField = document.querySelector("#outputField");
//     outputField.innerHTML = `The address is, ${Address}!`

//     let PhoneNumber = document.querySelector("#PhoneNumberBox").value;
//     console.log(`The address is, ${PhoneNumber}!`);

//     let outputField2 = document.querySelector("#outputField2");
//     outputField2.innerHTML = `The PhoneNumber is, ${PhoneNumber}!`

    
// }

// function addGreeting()
// {
//     let newElt = document.createElement("p");
//     let textNode = document.createTextNode("Hello there!");
//     newElt.appendChild(textNode);

//     document.querySelector("#main").appendChild(newElt);
// }

// function getItemSelected()
// {
//     let selectedItem = document.querySelector("#options").selectedIndex;
//     console.log(`You picked: ${selectedItem}`);
// }

// function clearGreetings()
// {
//     document.querySelector("#main").innerHTML = "";
// }

// function submit()
// {
//     let songTitle = document.querySelector("#songTitleBox").value;
//     let bandName = document.querySelector("#bandNameBox").value;
//     let newElt = document.createElement("li");
//     let textNode = document.createTextNode(songTitle + bandName);
//     newElt.appendChild(textNode);

//     document.querySelector("#main").appendChild(newElt);

// }

// function printOut2()
// {
//     let name = document.querySelector("#nameBox").value;
//     console.log(`The Phone number is, ${Phonenumber}`);

//     let outputField = document.querySelector("#outputField");
//     outputField.innerHTML = `The Phone number is, ${Phonenumber}`
// }