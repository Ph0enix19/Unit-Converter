/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const numberString = document.getElementById("numInput")
const length = document.getElementById('length')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass') 
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    number = Number(numberString.value)
    length.textContent = `${number} meters = ${(number*3.281).toFixed(3)} feet | ${number} feet = ${(number/3.281).toFixed(3)} meters`
    volume.textContent = `${number} liters = ${(number*0.264).toFixed(3)} gallons | ${number} gallons = ${(number/0.264).toFixed(3)} liters`
    mass.textContent = `${number} kilos = ${(number*2.204).toFixed(3)} pounds | ${number} pounds = ${(number/2.204).toFixed(3)} kilos`
})
