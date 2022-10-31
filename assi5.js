let timeNow= moment();
let day=moment();
let inputEl=$("#9amInp");
let saveEl=$("#9amBtn");
let btnEl=$('.classBtn');
let t9=$('#9');
let t10=$('#10');
let t11=$('#11');
let t12=$('#12');
let t13=$('#13');
let t14=$('#14');
let t15=$('#15');
let t16=$('#16');
let t17=$('#17');
let t18=$('#18');
let t19=$('#19');
let t20=$('#20');
let t21=$('#21');
let t22=$('#22');
let t23=$('#23');
let t24=$('#24');
let t1=$('#1');
let t2=$('#2');
let t3=$('#3');
let t4=$('#4');
let t5=$('#5');
let t6=$('#6');
let t7=$('#7');
let t8=$('#8');
//const blockInput = $(".col-lg-8")

$(".blockInput").css("background-color","grey");

//Display day
$('#timeDay').text(day.format("dddd"));
//Display Date and Time
setInterval(function() {
    let now = moment().format("MMM Do, YYYY h:mm:ss a");
    $('#timeDisplay').text(now);
},1000);


// current hour in time
// this is a string so convert to a number before you compare it
let hourNow=moment().hour(); 
console.log("!!!hourNow: "+hourNow);
// color each timeblocks (grab all the time blocks and loop thru each)

let timeArray=[t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t1,t2,t3,t4,t5,t6,t7,t8]
$('.col-lg-8').each(function (index) {
    //console.log(index, this);
    // what is the time of the timeblock i'm working on
    // i'm going get that from the id attr of the element
    // this is a string so convert to a number before you compare it
    let timeBlockHour =$(this).attr('id');

    console.log("!!! Type is "+typeof (timeBlockHour));

    console.log("timeBlockHour: "+timeBlockHour);                                                         
    // Determine the schedule time is greater, equal or smaller than current time
    for(i=9; i<=24; i++){
        
    //Determine grey color   
    if (timeBlockHour<hourNow){
        console.log("index: "+index);
        console.log('past,grey');
        $('.col-lg-8').addClass(".greyColor");
        console.log(timeBlockHour);
       
    }
    //Determine red color
    else if (timeBlockHour===hourNow){
        console.log("index: "+index);
        console.log('now,red');
        $('.col-lg-8').addClass(".red");
        console.log(timeBlockHour);
       
    }
    //Determine green color
    else if(timeBlockHour>hourNow){
        console.log("index: "+index);
        console.log('future,green');
        $('.col-lg-8').addClass("green");
        console.log(timeBlockHour);
        }
    }}
    ) 
    

    let l1=localStorage.setItem(JSON.stringify('storageT9'),t9);
    console.log("l1: "+l1)


/*console.log(timeDisplay);

btnEl.onclick=function(){
    const key=id.value
    console.log(id)

}*/

/* function handleSave(event){
    event.preventDefault();
    let descrEl = $(inputEl);
    localStorage.setItem("9amStore",inputEl.text)
    console.log("9am saved");
    inputEl.localStorage.getItem("9amStore")
 saveEl.on('submit',handleSave)
 
 */