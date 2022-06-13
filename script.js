var gamelevel=2;
var level=document.querySelector('.level');
level.innerHTML= "LEVEL:"+gamelevel;
var buttons = document.querySelectorAll("button")
var clicked=[];
var blinkedindex=[];
var buttonsclassName=[];
var blinked=[];
click(buttons,clicked);

console.log(buttons);

buttons.forEach(function(button){buttonsclassName.push(button.className)})
for(let i=0;i<16;i++)
{var s=Math.floor(Math.random()*16);
blinkedindex.push(s);
blinked.push(buttons[s].className)}
var k=0;

clear=setInterval(blinkoneafteranother,1000,buttons,gamelevel,blinkedindex,buttonsclassName);


setTimeout(result,10000,blinked,clicked,gamelevel);






function blinkoneafteranother(buttons,gamelevel,blinkedindex,buttonsclassName)
{  console.log(k);     
    var s=blinkedindex[k];
    buttons[s].className="blink";
    setTimeout(stopblink,900,buttons,buttonsclassName);
   k++;
   if(k>=gamelevel)
   {clearInterval(clear);}
}






function stopblink(arr,k)
{ for(i=0;i<16;i++)
{arr[i].className=k[i];
}}

 function blink(button)
{button.className.add("blink");}



function result(blinked,clicked,i)

{console.log(blinked);
 console.log(clicked);
    for(var j=0;j<gamelevel;j++)
    {if(blinked[j] != clicked[j])
    {alert("You lost");
    
    location.reload();
     }}
     alert("you won");
     }
 
function click(buttons,clicked)
{buttons.forEach(function(button){button.addEventListener('click',function(){clicked.push(button.className);console.log(button.className);})});}
