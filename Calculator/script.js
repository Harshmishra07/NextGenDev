let inputBox=document.getElementById('inputBox')
let buttons=document.querySelectorAll('button')

let string=''

buttons.forEach(element =>{
    element.addEventListener('click',(b)=>{
      if(b.target.innerText=='='){
        let val=eval(string)                             //storing value in val
            if(val ==Math.floor(val)){                   //checking that the val is decimal value or not
                string =String(val)
                inputBox.value =string
            }
            else{
                string =String(val.toFixed(3)) //toFixed(3) is used for printing floating values upto 3 points
                inputBox.value =string
            }
    }
      else if(b.target.innerText=='AC'){         //giving condition for All Clear button
        string=''
        inputBox.value=string
      }
      else if(b.target.innerText=='DEL'){                 //giving condition for DEL button
        string = string.substring(0,string.length-1)
        inputBox.value=string
      }
      else if(b.target.id=='plusMinus'){                   //giving condition for plusminus button
        string=String(-eval(string))
        inputBox.value=string
      }
      else if(b.target.id=='x2'){
        string= String(eval(string*string))               //for square of given no.
        inputBox.value=string
      }
      else if(b.target.id=='x3'){                           //for cube of given No.
        string= String(eval(string*string*string))
        inputBox.value=string
      }
      else{
        string+=b.target.innerText
        inputBox.value=string
      }
    })
})