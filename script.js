let input = document.querySelector("#input");
let spans = document.querySelectorAll("span");

let bar = document.querySelector(".bar");

let para = document.querySelector("#para");
let btn = document.querySelector("#btn")

let random = 0;


spans.forEach(span=>{
    span.addEventListener("click",(e)=>{
      let number = e.target.textContent;
      if(number == "✖"){
        input.value = input.value.slice(0,-1)
      }
      else if(number == "✓"){
        showResult();
      }
      else{
        input.value += number;
      }
    })
});


function showResult(){
    if(!input.value) return
    let accuracy = 100-Math.abs(input.value - random);
    if(input.value == random){
        para.innerHTML = "Congratulations you Guessed it Right🎉🎉🎉 \nYour Accuracy is " + accuracy +"%"
        alert("Congratulations you Guessed it Right🎉🎉🎉 \nYour Accuracy is " + accuracy +"%.")
        fillAquarium();
    }
    else{
        para.innerHTML = `Your Accuracy is ${accuracy}%.\n You have Entered ${input.value}%, but Actual value is ${random}%.`;
        alert(`Your Accuracy is ${accuracy}%\n You have Entered ${input.value}%, but Actual value is ${random}%.`);
        fillAquarium();
    }
  
}


function fillAquarium(){
    input.value = null;
    random = Math.floor(Math.random()*100);
    console.log(random)

    bar.style.height = `${random}%`
}

fillAquarium();

