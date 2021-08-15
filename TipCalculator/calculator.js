"use strict";

var bill = document.getElementById('bill');
var nPeople = document.getElementById("nPeople");

var customTip = document.getElementById("customTip")

var tipAmount = document.getElementById("tipAmount");
var total = document.getElementById("total");

var b5 = document.getElementById("5");
var b10 = document.getElementById("10");
var b15 = document.getElementById("15");
var b25 = document.getElementById("25");
var b50 = document.getElementById("50");

bill.addEventListener('change', check);
nPeople.addEventListener('change', check);
customTip.addEventListener('change', tipSelector);


function tipSelector(tip){
    resetButton();
    if (typeof(tip) == "object") {
        if (isNaN(parseInt(customTip.value)) == false)
        {
            selectTip = parseInt(customTip.value);
        }else{
            customTip.value = null;
        }
    }else{
        customTip.value = null;
        selectTip = tip;

        switch (tip) {
            case 5: 
                b5.classList.add("active");
                break;
            case 10: 
                b10.classList.add("active");
                break;
            case 15: 
                b15.classList.add("active");
                break;
            case 25: 
                b25.classList.add("active");
                break;
            case 50: 
                b50.classList.add("active");
                break;
        }
    }
    check();
}

function resetButton() {
    b5.classList.remove("active")
    b10.classList.remove("active")
    b15.classList.remove("active")
    b25.classList.remove("active")
    b50.classList.remove("active")
}


function check() {
    let billB = false;
    let peopleB = false;
    let tipB = false;

    if (bill.value != "") {
        if (isNaN(parseInt(bill.value)))
        {
            bill.parentElement.classList.add("badInput")
            bill.parentElement.classList.remove("activeInput")
        }else{
            bill.parentElement.classList.add("activeInput")
            bill.parentElement.classList.remove("badInput")
            billB = true;
        }
    }else
    {
        bill.parentElement.classList.remove("activeInput")
        bill.parentElement.classList.remove("badInput")
    }

    if (nPeople.value != "") {
        if (isNaN(parseInt(nPeople.value)))
        {
            nPeople.parentElement.classList.add("badInput")
            nPeople.parentElement.classList.remove("activeInput")
        }else{
            nPeople.parentElement.classList.add("activeInput")
            nPeople.parentElement.classList.remove("badInput")
            peopleB = true;
        }
    }else
    {
        nPeople.parentElement.classList.remove("activeInput")
        nPeople.parentElement.classList.remove("badInput")
    }

    if (customTip.value != "") {
        if (isNaN(parseInt(customTip.value)))
        {
            customTip.parentElement.classList.add("badInput")
            customTip.parentElement.classList.remove("activeInput")
        }else{
            customTip.parentElement.classList.add("activeInput")
            customTip.parentElement.classList.remove("badInput")
        }
    }else
    {
        customTip.parentElement.classList.remove("activeInput")
        customTip.parentElement.classList.remove("badInput")
    }

    if (typeof(selectTip) == "number"){
        tipB = true;
    }

    console.log(billB);
    console.log(peopleB);
    console.log(tipB);

    if (billB && peopleB && tipB){
        console.log("input ok");
        printRes();
    }
}

function printRes() {
    console.log("work");
    let totalInt;
    let totalOfTip;
    let totalWithBill;

    totalInt = parseInt(bill.value);
    totalOfTip = totalInt * (selectTip/100);
    totalWithBill = totalInt + totalOfTip;

    tipAmount.textContent = "$".concat(totalOfTip / parseInt(nPeople.value));
    total.textContent = "$".concat(totalWithBill / parseInt(nPeople.value));
}