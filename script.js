let formElement=document.getElementsByClassName('mainform')
function convert(){
     let num=document.getElementById('inputnumber')
     const unitselect=document.getElementById('unit')
     let button1=document.getElementById('btn')
     const res=document.getElementById('result')
     let inputdata=num.value;
     const unit=unitselect.value
     if (isNaN(inputdata)){
          res.innerHTML="Please enter a valid temperature"
     }
     if (unit=='celsius'){
     let fahernheit=(inputdata*9/5)+32
   res.innerHTML=`${inputdata} degree C is ${fahernheit} F `
     }
     else{
          const celsius=(inputdata-32)*5/9;
          res.innerHTML=`${inputdata} fahenheit is ${celsius} celsius`
     }

 }



// formElement.addEventListener(
//      'submit',(event)=>{
//           event.preventDefault()
//           convert()
//      }
//  )

//  button1.addEventListener(
//      "click",
//  ()=>{
//  convert()
//  })
 
