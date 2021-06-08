
// PLAY WITH MOUSE
const keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener("click", () => playNote(key));
});


function playNote(key) {
    console.log(key);
    const note_audio = document.getElementById(key.dataset.note);
    console.log(key.dataset.note);
    note_audio.currentTime = 0;
    note_audio.play();
    key.classList.add("active");
    note_audio.addEventListener("ended", () => {
        key.classList.remove("active");
    })

};
// PLAY WITH KEYBOARD
window.addEventListener("keyup", (e) => {
    //console.log(e.keyCode);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) {
        return;
    }
    else {
        audio.currentTime = 0;
        audio.play();
        key.classList.add("active");
        audio.addEventListener("ended", () => {
            key.classList.remove("active");
        })
    }

})

// CHANGE THEME
function changeColour() {
    let theme = document.querySelector("#base");
    theme.addEventListener("input", () => {
        let colour = theme.value;
        console.log(theme.value);
        let change = document.querySelectorAll(".black");
        change.forEach(note => {
            note.style.backgroundColor = colour;
            console.log(change);
        })

    });

}
changeColour();