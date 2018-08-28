const button = document.querySelectorAll(".showContent");
const content = document.querySelectorAll(".content")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", ()=>{
        for (let i = 0; i < content.length; i++) {
            content[i].style.display = "none";
            button[i].style.backgroundColor = "rgb(222, 222, 222)";
        }
        if (content[i].style.display == "none") {
            content[i].style.display = "block";
            button[i].style.backgroundColor = "white";
        } 
    });
}