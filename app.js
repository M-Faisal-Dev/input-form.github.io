let form = document.getElementById("form")
let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let address = document.getElementById("address")
let country = document.getElementById("country")
let cnic = document.getElementById("cnic")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let postcode = document.getElementById("postcode")
let parentNumber = document.getElementsByClassName("phoneNumber")

// let last;
// for(let pa of parentNumber){
//   last = pa.lastElementChild;
// }
// console.log(last)
let setData = (str,count,firstName,lastName)=>{
if(str === count){
 swal(`THANK YOU ${firstName.toUpperCase()} ${lastName.toUpperCase()} for Submit the From Successfully!`);

}
}

const setSuccess = (firstName,lastName)=>{
let select = document.getElementsByClassName("select");
let count = select.length -1;
console.log(count)
for(let i = 0; i < select.length; i++){
  let errorHandling = select[i].className.includes("success");
  if(errorHandling){
    let str = 0 + i;
    setData(count,str,firstName,lastName)
    console.log(str)
  
}else{
  return false;
}
}
}



form.addEventListener("submit",(e)=>{
  e.preventDefault()
  validation();

})

let isEmail = (emaIl)=>{
  var symble = emaIl.indexOf("@");

  if(symble < 1 ) return false;
  var dot = emaIl.lastIndexOf(".");
  if(dot <= symble + 2) return false;
  if(dot === emaIl.length - 1) return false;
  return true
}





let validation = ()=>{
const firstName = firstname.value.trim();
let lastName = lastname.value.trim();
let addRess = address.value.trim();
let counTry = country.value.trim();
let cnIc = cnic.value.trim();
let phoNe = phone.value.trim();
let emaIl = email.value.trim();
let postCode = postcode.value.trim();
 
// firstname validation
if(firstName === ""){
  setErrormsg(firstname, "First Name can't be blank")
}else if(firstName.length <= 3){
setErrormsg(firstname, "First Name minmun 3 character")
}else{
  SuccessMsg(firstname)
}

// lastname validation
if(lastName === ""){
  setErrormsg(lastname, "Last Name can't be blank")
}else if(lastName.length <= 2){
setErrormsg(lastname, "Last Name minmun 2 character")
}else{
  SuccessMsg(lastname)
}


// validate email
if(emaIl === ""){
  setErrormsg(email, "Email can't be blank")
}else if(!isEmail(emaIl)){
  setErrormsg(email, "Not a valid Email")
}else{
  SuccessMsg(email)
}

// phone number validation
// let isValid = window.intlTelInput;
// console.log(isValid.input)

let regex = /^\d{9,11}$/;

if(phoNe === ''){
  showError(parentNumber, "Phone Number can't be blank")
} else if (!regex.test(phoNe)) {
  showError(parentNumber, "Not a valid Phone Number")
}else{
  showSuccess(parentNumber)
}

// cnic number validation
const cnicRegex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;

if(cnIc === ""){
  setErrormsg(cnic, "CNIC number can't be blank")
}else if(cnIc.indexOf("-") === -1){
  setErrormsg(cnic, "Not a valid CNIC")
}else if(cnIc.indexOf("-") !== 5 && cnIc.lastIndexOf("-") !== 13){
setErrormsg(cnic, "Not a valid CNIC")
}else if(!cnicRegex.test(cnIc)){
setErrormsg(cnic, "Your CNIC number is invalid")
}else{
  SuccessMsg(cnic)
}

// country name validation
if(counTry === ""){
  setErrormsg(country, "Country/State Name can't be blank")
}else{
  SuccessMsg(country)
}

// Address validation
if(addRess === ""){
  setErrormsg(address, "Address can't be blank")
}else{
  SuccessMsg(address)
}

// zipcode validation 
if(postCode === ""){
  setErrormsg(postcode, "Postcode can't be blank")
}else{
  SuccessMsg(postcode)
}

setSuccess(firstName,lastName)

}



function setErrormsg(input,errormsgs){
  let faisal = input.parentElement;
  const small = faisal.querySelector('small');

  faisal.classList.add("error")
  small.innerText= errormsgs;
  faisal.classList.remove("success")

}


window.intlTelInput(phone,{})

function showError(phoneParent,errorText){
  let last;
  let last_1;
for(let phonePar of phoneParent){
  last = phonePar.lastElementChild;
  last_1 = phonePar
}
last_1.classList.add("error")
last_1.classList.remove("success")

// pare.classList.add("error")
last.innerHTML = errorText;
}

function showSuccess(phoneParent){
  let last;
  let last_1;
for(let phonePar of phoneParent){
  last = phonePar.lastElementChild;
  last_1 = phonePar
}
last_1.classList.remove("error")
last_1.classList.add("success")

// pare.classList.add("error")
last.innerHTML = "";
}


function SuccessMsg(input){
  let successMsg = input.parentElement;
  const hideMsg = successMsg.querySelector('small');

  successMsg.classList.add("success")
  successMsg.classList.remove("error")

  hideMsg.innerHTML = "";

}