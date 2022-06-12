
var buttons = document.querySelectorAll("button")
var clicked=[];
var blinkedindex=[];
var buttonsclassName=[];
console.log(buttons);
buttons.forEach(function(button){buttonsclassName.push(button.className)})
for(i=0;i<=16;i++)
{var s=Math.floor(Math.random()*16);
blinkedindex.push(s);}
var level;
for(level=0;level<20;level++)
{for(let i=0;i<level;i++)
{var k=blinkedindex[i];
    blink(buttons[k]);
}
setTimeout(click,3000);
setTimeout(stopblink,3000,buttons);
setTimeout(result,33000);
}


function stopblink(arr,i)
{ arr.forEach(function(item){item.className=blinkedindex[i];
 i++;})}

 function blink(e)
{e.className="blink";}
function click()
{
    buttons.forEach(function(button){button.addEventListener('click',function(){clicked.push(button.className);})})
}

function result(blinked,clicked)

{if(JSON.stringify(blinked) == JSON.stringify(clicked))
    {alert("You Won");
     }
 }

