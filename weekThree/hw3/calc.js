/*
 * Implement all your JavaScript in this file!
 */
 //input numbers
 var numCurrent = 0;
 var temp = 0;
 var reset = "";
 var op="";
 var equalMatters = false;
 var restartAfterEqual = false;
 var newinput = false;
 $('.numbers').click(function(){
   $('#display').prop("disabled", false);
   if(newinput==true){
      console.log("restart enter numbers after equals button");
      numCurrent = 0;
      temp = 0;
      op="";
      equalMatters = false;
      restartAfterEqual = false;
      console.log("after new input, numCurrent is: "+ numCurrent);
      newinput=false;
    }
   if(numCurrent == 0){
     numCurrent = Number($(this).val());
     console.log('current number when the previous is zero: ' + numCurrent);
   }else {
     numCurrent = numCurrent*10 + Number($(this).val());
     console.log('current number when the previous is not zero: ' + numCurrent);
   }
   $('#display').val(numCurrent);
   equalMatters = true;

 });

 //clear button
 function clearButtonHandler(){
   numCurrent = 0;
   temp=0;
   op ="";
   equalMatters = false;
   restartAfterEqual = false;
   $('#display').val(reset);
   console.log('numCurrent after clear is: '+ numCurrent);
   console.log('temp after clear is: '+ temp);
 }
 $('#clearButton').click(clearButtonHandler);
 // $('#clearButton').click(function(){
 //   // var reset = ""
 //   numCurrent = 0;
 //   temp=0;
 //   op ="";
 //   equalMatters = false;
 //   restartAfterEqual = false;
 //   $('#display').val(reset);
 //   console.log('numCurrent after clear is: '+ numCurrent);
 //   console.log('temp after clear is: '+ temp);
 // })

 $('#equalsButton').click(function(){
   if(equalMatters){
     console.log("temp before euqal is: "+temp);
     if (op == "*" || op == "+" || op == "-")
       temp = eval(temp + op +numCurrent);
     else if(op=="")
      temp = numCurrent;
       else {
         temp = eval(temp + '/'+ numCurrent);}
       console.log("after equals button, temp is: " + temp);
     $('#display').val(temp);
     restartAfterEqual = true;
     newinput = true;
     // console.log("after " +"= num"+ numCurrent
   }
 })


//operators
$('.operator').click(function(){
  // console.log(op);
  if(!restartAfterEqual ){
  if (op == ""){
    temp  = numCurrent;
  }
  else if (op == "*" || op == "+" || op == "-")
    temp = eval(temp + op +numCurrent);
  else
    temp = eval(temp + '/'+ numCurrent);
  }
    //restart after euqalButton
  $('#display').val(temp);
  op = $(this).html();
  numCurrent=0;
  console.log("operator is: "+ op);
  console.log("after "+ op + " the temp is: "+temp);
  equalMatters = false;
  newinput = false;
})
