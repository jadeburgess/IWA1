const MAX_NUMBER = 15
const MIN_NUMBER = -5

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

console.log("123", parseInt(123))

const addHandler = () => {
    const newValue = parseInt(number.value) +1
    number.value = number.value + 1;
    
    if (add.value.disabled === true) {
        add.disabled = false
    }
  
    if (new.value >= MAX_NUMBER){
        add.disabled = true
    } 
}

const subtractHandler = () =< {
    const newValue = parseInt(number.value) -1
    number.value = number.value - 1;

    if (subtract.value.disabled === true) {
        subtract.disabled = false
    }
  
   
    if (new.value >= MIN_NUMBER) {
        subtract.disabled = true
    } 

}


add.addEventListener('click', addHandler)
subtract.addEventListener('click,' subtractHandler)