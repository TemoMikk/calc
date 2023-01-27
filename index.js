const addBtn = document.getElementById('addBtn')
const subBtn = document.getElementById('subBtn')
const valueEl = document.getElementById('value')
const multiply = document.getElementById('multiply')
const inputValue = document.getElementById('input-value')
const inputValue1 = document.getElementById('input-value1')
const divide = document.getElementById('divide')

let currentValue = localStorage.getItem('currentValue')
  ? Number(localStorage.getItem('currentValue'))
  : 0

valueEl.innerHTML = currentValue

const handleLocalStorage = (value) => {
  localStorage.setItem('currentValue', value)
}

addBtn.addEventListener('click', function () {
  currentValue += 1
  valueEl.innerHTML = currentValue
  handleLocalStorage(currentValue)
})

subBtn.addEventListener('click', function () {
  currentValue -= 1
  valueEl.innerHTML = currentValue
  handleLocalStorage(currentValue)
})

multiply.addEventListener('click', function () {
  currentValue = currentValue * Number(inputValue.value)
  valueEl.innerHTML = currentValue
  handleLocalStorage(currentValue)
})

divide.addEventListener('click', function () {
  currentValue = currentValue / Number(inputValue1.value)
  valueEl.innerHTML = currentValue
  handleLocalStorage(currentValue)
})
