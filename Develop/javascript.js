function showTime() {
    var time = moment().format('MMMM Do YYYY [at] h:mm:ss a') // add square brackets to create the [at] in the moment date and time
        $("#currentDay").text(time)
    
}
setInterval(showTime, 1000)

var times = {
    nine: document.getElementById('9').innerHTML,
    ten :document.getElementById('10').innerHTML,
    eleven: document.getElementById('11').innerHTML,
    twelve: document.getElementById('12').innerHTML,
    one: document.getElementById('1').innerHTML,
    two: document.getElementById('2').innerHTML,
    three: document.getElementById('3').innerHTML,
    four: document.getElementById('4').innerHTML,
    five: document.getElementById('5').innerHTML

}


var currentHour = moment().format('h')

var timeEl = document.getElementsByClassName('input-group-text') 

$.each(times,function colorSwitcher(key,value) {
   if (currentHour > value) {
        $('input-group-text').classList.add('future');
    }
}); 
var inputs = {
    input9: document.querySelector('#ninetxt').value.trim(),
    input10: document.querySelector('#tentxt').value.trim(),
    input11: document.querySelector('#eleventxt').value.trim(),
    input12: document.querySelector('#twelvetxt').value.trim(),
    input1: document.querySelector('#onetxt').value.trim(),
    input2: document.querySelector('#twotxt').value.trim(),
    input3: document.querySelector('#threetxt').value.trim(),
    input4: document.querySelector('#fourtxt').value.trim(),
    input5: document.querySelector('#fivetxt').value.trim(),
}

function saveData(){
    localStorage.setItem('planner', JSON.stringify(inputs));
}

document.getElementsByTagName('BUTTON').addEventListener('click',function(event) {
    event.preventDefault();
    saveData();
})
