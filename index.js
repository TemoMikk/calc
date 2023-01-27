const addBtn = document.getElementById('addBtn')
const subBtn = document.getElementById('subBtn')
const valueEl = document.getElementById('value')
const multiply = document.getElementById('multiply')
const inputValue = document.getElementById('input-value')
const inputValue1 = document.getElementById('input-value1')
const divide = document.getElementById('divide')

let currentValue = 0

addBtn.addEventListener('click', function () {
  currentValue += 1
  valueEl.innerHTML = currentValue
  localStorage.setItem('currentValue', valueEl.innerHTML)
})

subBtn.addEventListener('click', function () {
  currentValue -= 1
  valueEl.innerHTML = currentValue
  localStorage.setItem('currentValue', valueEl.innerHTML)
})

multiply.addEventListener('click', function () {
  currentValue = currentValue * Number(inputValue.value)
  valueEl.innerHTML = currentValue
  localStorage.setItem('currentValue', valueEl.innerHTML)
})

divide.addEventListener('click', function () {
  currentValue = currentValue / Number(inputValue1.value)
  valueEl.innerHTML = currentValue
  localStorage.setItem('currentValue', valueEl.innerHTML)
})

let savedValue = localStorage.getItem('currentValue')
if (savedValue) {
  valueEl.innerHTML = savedValue
}
