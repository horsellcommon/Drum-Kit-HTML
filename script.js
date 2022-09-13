const percussion = document.getElementsByTagName("audio")
console.log(percussion)
document.addEventListener("keypress", () =>{
    if (event.which == "114"){
        percussion[0].play() //Boom
    } else if (event.which == "113"){
        percussion[1].play() //Hihat
    } else if (event.which == "101"){
        percussion[2].play() //Ride
    } else if (event.which == "119"){
        percussion[3].play() //Open hat
    } else if (event.which == "118"){
        percussion[4].play() //Kick
    } else if (event.which == "102"){
        percussion[5].play() //Clap
    } else if (event.which == "97"){
        percussion[6].play() //Tink
    } else if (event.which == "115"){
        percussion[7].play() //Snare
    } else if (event.which == "100"){
        percussion[8].play() //Tom
    }
})