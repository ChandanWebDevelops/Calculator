document.getElementsByTagName("body")[0].style.height = `${window.innerHeight - 55}px`

let btn = document.querySelectorAll(".btn");
let screen = document.getElementById("inp");
let screenValue = ''

for (item of btn) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    if (buttonText == 'X') {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    }
    else if (buttonText == 'C') {
      screenValue = "";
      screen.value = screenValue;
    }
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }

  })

}

let equalTo = document.getElementById("equal");
equalTo.addEventListener("click", function(){
  screen.value = eval(screenValue);
})
