/*
var arr=[10,20,30,40];
var sum=0;
for(var i=0;i<=3;i++){
    document.write(  arr[i] + " ");
    sum=sum+arr[i];
}
document.write("<br>" + "Sum is " + sum);

document.write("<ul>");
for(var i=0;i<=3;i++){
     document.write("<li>" + arr[i] + "</li>");
}
 document.write("</ul>");

 document.write("<br>");

 var ar=[10,"array",56.90];
 for(var j=0; j<=2;j++){
 document.write(" " + ar[j]);
 }
 */
/*var arr= new Array();
arr[0]=10;
arr[1]="array";
arr[2]=10.20;
for(var x=0; x<3;x++){
    document.write(arr[x]);
} 
document.write("<br>");
var ar=new Array(3);
ar[0]=10;
ar[1]="array";
ar[2]=10.20;
for(var x=0;x<3;x++){
    document.write(arr[x]);
}



document.write("<br>");
var ar=new Array(3);
for(var x=0;x<3;x++){
    ar[x]=prompt("Enter the values:");
}
for(var x=0;x<3;x++){
    document.write(arr[x]);
}
*/
var arr=[
    ["Harry",10,"CS"],
    ["Suman",20,"ME"],
    ["Tina",23,"CE"]
]
document.write(arr[0][1]);
document.write("<table border='1px' cellspacing='0px'>");
for(var i=0;i<arr.length;i++){
    document.write("<tr>");
    for(var j=0;j<arr[i].length;j++){
        document.write("<td>"+arr[i][j]+ "</td>");
    }
    document.write("<br>");
    // document.write(arr[i]);
    document.write("</tr>");


}
document.write("</table>");

