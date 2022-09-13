const percussion = document.getElementsByTagName("audio")
const percussionbox = document.getElementsByClassName("percussion-box")
console.log(percussion)
console.log(percussionbox)
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


//I know below might come as a shock to the system but my brain stopped working

const clicker = () => {
        percussion[0].play()
}
const clicker1 = () => {
    percussion[1].play()
}
const clicker2 = () =>{
    percussion[2].play()
}
const clicker3 = () =>{
    percussion[3].play()
}
const clicker4 = () =>{
    percussion[4].play()
}
const clicker5 = () =>{
    percussion[5].play()
}
const clicker6 = () =>{
    percussion[6].play()
}
const clicker7 = () =>{
    percussion[7].play()
}
const clicker8 = () =>{
    percussion[8].play()
}