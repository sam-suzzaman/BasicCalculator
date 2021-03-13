let display = document.querySelector('.display-box')
let allButtons = document.querySelectorAll('.button')
let equal = document.querySelector('.equal')
let clear = document.querySelector('.clear')

// traverse to all butons
allButtons.forEach(function (value) {
    // adding event to all buttons
    value.addEventListener('click', function (e) {
        // access the value of clicked button
        let clickedValue = e.target.dataset.values
        // asign the button value into display section
        display.value += clickedValue
    })

})

// addign event on the equal button
equal.addEventListener('click', function (e) {
    if (display.value === '') {
        display.value = 'please enter a value'
    } else {
        //calculate the input
        let result = eval(display.value)
        // showing the result
        display.value = result
    }
})

// add event on the clear button
clear.addEventListener('click', function (e) {
    // clear the input value
    display.value = ''
})