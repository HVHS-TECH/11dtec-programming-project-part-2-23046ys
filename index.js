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
    var timeFrame
    var timeFor
    var age
    var confirm
    var price
    var purchased= "Not";
/****************************
Main Code:

 ***************************/


/****************************
Functions
 ***************************/
function setHouse1() {
  choice= 1;
  calculatePrice()
}
function setHouse2() {
  choice= 2;
  calculatePrice()
}
function setHouse3() {
  choice= 3;
  calculatePrice()
}
function setHouse4() {
  choice= 4;
  calculatePrice()
}
function setHouse5() {
  choice= 5;
  calculatePrice()
}
function setHouse6() {
  choice= 6;
  calculatePrice()
}
function setHouseRecommended() {
  if(recommended > 0){
    choice= recommended;
    calculatePrice()
  }else{
    alert("You have not done the survey, we cannot recommend anything.")
  }
}


function calculatePrice() {

  if(choice > 0){

if(timeFrame== "Yearly"){
price = (weeklyArray[choice] * 52) * timeFor;
}
else if(timeFrame== "Monthly"){
price = ((weeklyArray[choice] * 52 ) /12 ) * timeFor;
}
else if(timeFrame== "Weekly"){
price = weeklyArray[choice] * timeFor;
}
else if(timeFrame== "Daily"){
  price = (weeklyArray[choice] / 7) * timeFor;
}
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


function setPriceRangeCheap () {
  priceRange= 1;
  calculateRecommendation()
}


function setPriceRangeNotCheap () {
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
    alert("You haven't selected a property.")
  }else{
if(age < 18 || isNaN(age) || age == null || age == ""){
    alert("You are too young to rent a property.")
  }else{

    confirm= prompt("Type your selected property into the prompt to confirm your purchase.");
    if(confirm == propertiesArray[choice]){
      purchased= "Not not"
    }else{
      alert("Purchase cancelled.")
    }

  }
  }
}