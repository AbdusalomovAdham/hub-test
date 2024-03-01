// const changeHeading = () =>{
//     const heading = document.getElementById('heading')
//     heading.textContent = 'Etiborli boling'
// }

// const changeText = () =>{
//     const text = document.getElementById('text')
//     text.textContent = 'Yangi tekst'
// }
// const btn = document.getElementById('btn')
// btn.addEventListener('dblclick',changeHeading)
// btn.addEventListener('click', changeText)

// document.addEventListener('keydown', event =>
//     heading.textContent = 'salom'
// )

// const p = document.getElementById('text');
// const button = document.getElementById('btn');

// const changeText = () => {
// 	p.textContent = "Will I change?";
// }

// const alertText = () => {
// 	alert('Will I alert?');
// }

// // Events can be overwritten
// button.onclick = alertText;
// button.onclick = changeText;

// const getRendomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// const generator = () => {
//     const minEl = document.getElementById('min')
//     const maxEl = document.getElementById('max')
//     const min = Number(minEl.value)
//     const max = Number(maxEl.value)
//     console.log(min, max)
//     const placeholder = document.querySelector('#placeholder')
//     placeholder.textContent = getRendomNumber(min, max)

//     if(minEl.value === ''  || maxEl.value === ''){
//         alert("Iltimos Min va Max larni kiriting")
//         placeholder.textContent = '#'
//     }
// }

// const btnEl = document.getElementById('generator')
// btnEl.addEventListener('click',generator)

// const imgChange = (option , img) => {
//   if(let option === 1 ){

//   }
// };

// const btn = document.getElementById("btn");
// btn.addEventListener("click", imgChange);

// function siz() {
//   const img = document.getElementById("img1");
//   img.style.border - radius == "10px";
//   img.style.width = "500px";
// }

// const btn = document.getElementById("btn");
// btn.addEventListener("click", siz);
// let changeIcon = function (icon) {
//   icon.classList.toggle('fa-xmark');
// };

// const moonChange = () => {
//   document.getElementById("fa-moon").classList.remove("fa-regular");
//   document.getElementById("fa-moon").classList.add("fa-solid");
//   document.getElementById("container").classList.remove("container");
//   document.getElementById("container").classList.add("container-sun");
// };

// const moon = document.getElementById("fa-moon");
// moon.addEventListener("click", moonChange);

// function sunChange() {
//   document.getElementById("fa-moon").classList.remove("fa-solid");
//   document.getElementById("fa-moon").classList.add("fa-regular");
//   document.getElementById("container").classList.remove("container-sun");
//   document.getElementById("container").classList.add("container");
// }

// const sun = document.getElementById("fa-moon");
// sun.addEventListener("dblclick", sunChange);


// const newElAdd = () =>{
//     let newEl
//     newEl.innerHTML = '<div class="new-element"></div>'
// }

// const li = document.getElementsByClassName("navbar-item");
// li.addEventListener("mouseenter", newElAdd);

// const inputBox = document.getElementById('input-box')
// const listContainer = document.getElementById('list-container')
// function addTask(){
//     if( inputBox.value === ""){
//         alert("You mast write something!")
//     }else{
//         let li = document.createElement('li')
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)
//         let span = document.createElement("span")
//         span.innerHTML = "\u00d7"
//         li.appendChild(span)
//     }
//     inputBox.value = ''
//     saveData()
// }

// listContainer.addEventListener('click' , function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("chacked")
//         saveData()
//     }else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove()
//         saveData()
//     }
// } , false)

// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML)
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data")
// }
// showTask()

// function addTask(){

//     let ism = prompt('Ismimgizni kiriting:')
//     let birinchiHarf = ism.charAt().toUpperCase()
//     let qolgani = ism.slice(1).toLowerCase()
//     let result = birinchiHarf + qolgani
// console.log(result)
// }

// let yosh = prompt('Yoshingizni kiriting: ')
// console.log(yosh)
// yosh = Number(yosh)
// const yil = 2023 - yosh;
// console.log("Siz " + yil + " yilda tug'ilgansiz")

// const kun = yosh * 365
// console.log("Siz " + kun + " kundan beri yashaypsiz")

let yosh = prompt('Kim kerak: ')
let royxat = ['Akmal' ,'Qosim' , 'Sarvar']
for(let i = 0; i < royxat.length; i++){
    if(royxat[i] == yosh){
        console.log("Siz qidirga odam ro'yxatda bor")
    }else{
        console.log("Siz qidirga odam ro'yxatda yo'q")
    }
}

        






