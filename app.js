const calculate = () => {
    // getting all values
    let BillPayment = document.getElementById("BillPayment").value;
    let TipPer = document.getElementById("TipPer").value;
    let TotalTip = document.getElementById("TotalTip");
    let TotalBill = document.getElementById("TotalBill");


    // putting formulae of Percentage
    let TipPercentage =  TipPer / 100;
    let multiple = BillPayment * TipPercentage;
    TotalTip.value = multiple;

    // convert values into numbers
    let myInt = parseInt(multiple);
    let myInts = parseInt(BillPayment);
    
    TotalBill.value =  myInts + myInt;
}