let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("save-el")

let count = 0
let total = totalEl.textContent + " "

function increment() {
  count += 1
  countEl.textContent = count
} 

function save() {
  total += count + " - "
  count = 0
  countEl.innerText = count
  totalEl.textContent = total
}
