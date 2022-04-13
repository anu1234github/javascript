var x=90;
console.log(x);
console.time("test");
console.error("Something went wrong");
console.warn("BE ALERT");
console.warn("BE ALERT");
console.warn("BE ALERT");
console.warn("BE ALERT");
console.timeEnd("Test");
console.clear();


var a=10;
var b=40;

console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(null == undefined);

var x=10;
var b=4;
var c=8;
var z;
(x>b)?((x>c)? z="x is greater":z="c is greater"): z="b is greater";
console.log(z);

var day=8;
switch(day)
{
    case 1:case 7:case 8:
        document.write("Sunday");
        break;
     case 2:
            document.write("Monday");
            break;
    case 3:
        document.write("Tuesday");
         break;
    case 4:
         document.write("WEDNESday");
         break;
    case 5:
        document.write("THURSday");
        break;
    case 6:
        document.write("FRIDAYday");
        break;

}
document.write("<br>");

var day=8;
switch(true)
{
    case (day==8 || day== 7):
        document.write("Sunday");
        break;
     case  (day==6 || day== 5):
            document.write("Monday");
            break;
    case  (day==4 || day== 3):
        document.write("Tuesday");
         break;
    case  (day==2 || day== 1):
         document.write("WEDNESday");
         break;
    default:
        document.write("Input valid day");
}

/*var a=10;
var b=30;
if(a>b)
alert("A is greater  "+a);
else
alert("B is greater  "+b);*/

 var a=confirm("Do you like javascript??");
if (a){
    alert("Thanks");
}
else
alert("Sorry");






