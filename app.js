const glassEL = document.querySelector(".glass");
const inputArea = document.querySelector("#input")


function main() {
  inputArea.addEventListener("click", function () {
    //remove magnifying glass
    glassEL.classList.add("close");
  

  })

}

main();