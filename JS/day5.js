// prompt,function

/*var a;
a=prompt("Enter your percentage");
        if(a>90 && a<=100)
        alert("Distinction");
        else if (a>80 && a<=90)
        alert("First division");
        else if(a>=50 && a<=80)
        alert("second division");
        else
        alert("you failed");


//functions
function hello(){
    document.write("hI EVERYONE");
}
hello();
document.write("<br>");
hello();
document.write("<br>");
hello();
document.write("<br>");
hello();
document.write("<br>");
hello();


function hi(fname= "I am ", lname= "Default  " ){
    document.write( "hello " + fname + " " + lname );
}
hi();
hi("Ram", "Singh");
hi("Salman");
hi("khan");
document.write("<br>");

*/
/*
function sum(a,b){
    var c= a+b;
    return c;
}
var t =sum(2,3);
document.write(t);
document.write("<br>");

function calcu(maths,sst,sci){
      return maths+sst+sci;
}
var total=calcu(70,70,70);
document.write("Your total score is:"+ total);

function per(total){
    var t=total/3;
    return t;
}
var perc=per(total);
document.write("your percentage is:"+ perc);
        
function hello(){
    var a="I am local";
    document.write(a);
}
hello();
document.write(a);
*/

// function events(){
//     alert("i am an event");

// }

var a= 1;
document.write("<ul>");
while(a <=10){
    document.write("<li> " + a   + "  "+  "I am increasing" + "</li>");
    
    a=a+1;
}
document.write("</ul>");

var b=10;
do {
    document.write("<li>" + b + "  "+  "I am do-while body" + "</li>");
    b--;

}while(b>0)
document.write("<br>");


for(var c=1; c<=10;c++)
document.write("<li> "  + "I am body of for loop <br>" + "</li>");
document.write("<br>");

for(var c=1; c<=10;c++){
    if(c==5){
    document.write("Hey you are in continue block" );
    continue;
    }
    document.write("<li> "  + "I am after continue body <br>" + "</li>");
}
document.write("<br>");

for(var c=1; c<=10;c++){
    if(c==5){
    document.write("Hey you are in break block" );
    break;
    }
    document.write("<li> "  + "I am  before break <br>" + "</li>");
}



for (var a=1; a<=10;a++){
    if(a%2==0)
    document.write(a + "  I am even<br>");

    else 
    document.write(a + "  I am odd<br>");
}

