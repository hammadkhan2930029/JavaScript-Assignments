var days = ["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"]
var currentDate = new Date().getTime();

var eidDay1_Time = new Date("july 10,2022").getTime();
var eidDay1_Day = new Date("july 10,2022").getDay();
var eidDay1_Date = new Date("july 10,2022").getDate();

var eidDay2_Time = new Date("july 11,2022").getTime();
var eidDay2_Day = new Date("july 11,2022").getDay();
var eidDay2_Date = new Date("july 11,2022").getDate();

var eidDay3_Time = new Date("july 12,2022").getTime();
var eidDay3_Day = new Date("july 12,2022").getDay();
var eidDay3_Date = new Date("july 20,2022").getDate();

console.log(days[eidDay1_Day] + " " + eidDay1_Date);
console.log(days[eidDay2_Day] + " " + eidDay2_Date);
console.log(days[eidDay3_Day] + " " + eidDay3_Date);



// Calculate currentDate and eid date diff 

var difference1 = eidDay1_Time - currentDate;
var difference2 = eidDay2_Time - currentDate;
var difference3 = eidDay3_Time - currentDate;

var firstEid = Math.ceil(difference1/(1000*60*60*24));
var secondEid = Math.ceil(difference2/(1000*60*60*24));
var thirdEid = Math.ceil(difference3/(1000*60*60*24));



// -----hours-----


var firstEid_hours = Math.ceil(difference1/(1000*60*60));
var secondEid_hours = Math.ceil(difference2/(1000*60*60));
var thirdEid_hours = Math.ceil(difference3/(1000*60*60));

// ------Minuts--------


var firstEid_mints = Math.ceil(difference1/(1000*60));
var secondEid_mints = Math.ceil(difference2/(1000*60));
var thirdEid_mints = Math.ceil(difference3/(1000*60));

var first = document.getElementById("first");
first.innerHTML =`<h2>پہلی عید</h2>پہلی عید${firstEid} دن بعد ہے اور ابھی ${firstEid_hours}  گھنٹے اور ${firstEid_mints}  منٹ باقی ہیں`;

var second = document.getElementById("second");
second.innerHTML = `<h2>دوسری عید</h2>دوسری عید دن ${secondEid} بعد ہے اور ابھی ${secondEid_hours} گھنٹے اور ${secondEid_mints} منٹ باقی ہیں`;

var third = document.getElementById("third");
third.innerHTML = `<h2>تیسری عید</h2>تیسری عید ${thirdEid} دن بعد ہے اور ابھی ${thirdEid_hours} گھنٹے اور ${thirdEid_mints} منٹ باقی ہیں`;











