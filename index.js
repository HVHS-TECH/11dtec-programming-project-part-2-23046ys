/****************************
 Index
  Yuv Singh
  29/04/2025
The purpose of this is to make the website more interactive and functional
 ***************************/



//Variables
    var size= "Not";
    var purpose= "Not";
    var priceRange= "Not";
    var recommended= 0;
    var choice= 0;
      let propertiesArray = ["Cabin","Small House","Small Vintage House","Medium Modern House","Theater","Lakeside Cabin"];
      let weeklyArray = [450.00, 455.70, 479.98, 590.58, 620.00, 783.30];
    var decorationPrice= 0;
    var timeFrame
    var timeFor
    var age
    var confirm
    var price
    var purchased= "Not";
    var userName
/****************************
Main Code:

 ***************************/
while(userName == null){
userName=prompt("What is your name?");
if(userName== "" || userName== " " || !isNaN(userName) || userName == null){
  while(userName== "" || userName== " " || !isNaN(userName) || userName == null){
    userName=prompt("Enter a valid name.");
  }
}
}

/****************************
Functions
 ***************************/
function setTimeFrameYear(){
  timeFrame= "Yearly";
  timeFor= prompt("How many years?")
  if(timeFor== 0 || timeFor =="" || timeFor == " " || isNaN(timeFor) || timeFor == null){
    while(timeFor== 0 || timeFor =="" || timeFor == " " || isNaN(timeFor) || timeFor == null){
      timeFor= prompt("Enter a valid number.")
    }
  }
  console.log(timeFrame, timeFor)
  calculatePrice()
}
function setTimeFrameMonth(){
  timeFrame= "Monthly";
  timeFor= prompt("How many months?")
  if(timeFor== 0 || timeFor =="" || timeFor == " " || isNaN(timeFor) || timeFor == null){
    while(timeFor== 0 || timeFor =="" || timeFor == " " || isNaN(timeFor) || timeFor == null){
      timeFor= prompt("Enter a valid number.")
    }
  }
  console.log(timeFrame, timeFor)
  calculatePrice()
}
function setTimeFrameWeek(){
  timeFrame= "Weekly";
  timeFor= prompt("How many weeks?")
  if(timeFor== 0 || timeFor =="" || timeFor == " " || isNaN(timeFor) || timeFor == null){
    while(timeFor== 0 || timeFor =="" || timeFor == " " || isNaN(timeFor) || timeFor == null){
      timeFor= prompt("Enter a valid number.")
    }
  }
  console.log(timeFrame, timeFor)
  calculatePrice()
}
function setTimeFrameDay(){
  timeFrame= "Daily";
  timeFor= prompt("How many days?")
  if(timeFor== 0 || timeFor =="" || timeFor == " " || isNaN(timeFor) || timeFor == null){
    while(timeFor== 0 || timeFor =="" || timeFor == " " || isNaN(timeFor) || timeFor == null){
      timeFor= prompt("Enter a valid number.")
    }
  }
  console.log(timeFrame, timeFor)
  calculatePrice()
}

function setHouse1() {
  choice= 1;
  calculatePrice()
  console.log("Choice=", choice)
}
function setHouse2() {
  choice= 2;
  calculatePrice()
  console.log("Choice=", choice)
}
function setHouse3() {
  choice= 3;
  calculatePrice()
  console.log("Choice=", choice)
}
function setHouse4() {
  choice= 4;
  calculatePrice()
  console.log("Choice=", choice)
}
function setHouse5() {
  choice= 5;
  calculatePrice()
  console.log("Choice=", choice)
}
function setHouse6() {
  choice= 6;
  calculatePrice()
  console.log("Choice=", choice)
}
function setHouseRecommended() {
  if(recommended > 0){
    choice= recommended;
    calculatePrice()
  }else{
    alert("You have not done the survey, we cannot recommend anything " + userName + ".")
  }
}

function addDecor(){
  decorationPrice= 7.77;
  calculatePrice()
}
function removeDecor(){
  decorationPrice= 0;
  calculatePrice()
}

function calculatePrice() {

  if(choice > 0){

if(timeFrame== "Yearly"){
price = ((weeklyArray[choice] + decorationPrice) * 52) * timeFor;
  console.log("$", price)
}
else if(timeFrame== "Monthly"){
price = ((weeklyArray[choice] + decorationPrice) /12 ) * timeFor;
  console.log("$", price)
}
else if(timeFrame== "Weekly"){
price = (weeklyArray[choice] + decorationPrice) * timeFor;
  console.log("$", price)
}
else if(timeFrame== "Daily"){
  price = ((weeklyArray[choice] + decorationPrice) / 7) * timeFor;
  console.log("$", price)
}
}
document.getElementById("selectedPurchase").innerHTML= propertiesArray[choice];
if(price>0){
document.getElementById("selectedPurchasePrice").innerHTML= "$" + price;
}
}


function setSizeSmall() {
  size= 1;
  calculateRecommendation()
}


function setSizeMedium() {
  size= 2;
  calculateRecommendation()
}


function setSizeLarge() {
  size= 3;
  calculateRecommendation()
}


function setPurposeTempHome() {
  purpose= 1;
  calculateRecommendation()
}


function setPurposeParty() {
  purpose= 2;
  calculateRecommendation()
}


function setPurposeWedding() {
  purpose= 3;
  calculateRecommendation()
}


function setPriceRangeCheap() {
  priceRange= 1;
  calculateRecommendation()
}


function setPriceRangeNotCheap() {
  priceRange= 0;
  calculateRecommendation()
}


function calculateRecommendation() {
  if(size == "Not" || purpose == "Not" || priceRange == "Not"){

  }else{
    recommended= size + purpose - priceRange;
  }
  
}

function confirmationOfThePurchaseToAnnoyPeople(){
  if(choice == 0){
    alert("You haven't selected a property " + userName + ".")
  }else{
    age= Number(prompt("Enter your age."))
if(age < 18 || isNaN(age) || age == null || age == ""){
    alert("You have not entered a valid age or you are too young.")
  }else{

    confirm= prompt("Type your selected property into the prompt to confirm your purchase.");
    if(confirm == propertiesArray[choice]){
      purchased= "Not not"
      document.getElementById("selectedPurchase").innerHTML= propertiesArray[choice] + " -Purchased";
    }else{
      alert("Your purchase has been cancelled, " + userName + ".")
    }

  }
  }
}