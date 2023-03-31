const checkbox = document.getElementById('checkbox');
const input=document.querySelectorAll('#btn');
let str=document.querySelector('.calculator').value;

for(let i=0;i<input.length;i++)
{
  input[i].addEventListener('click',calculate);
}

function calculate(e)
{
  const val=e.target.value;
  if(str.length===0)
  {
    if(val==='0' || val==='1' || val==='2' || val==='3' || val==='4' || val==='5' || val==='6' || val==='7' || val==='8' || val==='9' || val==='00')
    {
       document.querySelector('.calculator').value+=val;
       str=document.querySelector('.calculator').value;
    }
    else if(val==='+/-')
    {
      document.querySelector('.calculator').value+='-';
      str=document.querySelector('.calculator').value;
    }
  }
  else 
  {
    if(val==='0' || val==='1' || val==='2' || val==='3' || val==='4' || val==='5' || val==='6' || val==='7' || val==='8' || val==='9'
      || val==='+' || val==='-' || val==='*' || val==='.' || val==='/' || val==='00')
    {
       document.querySelector('.calculator').value+=val;
       str=document.querySelector('.calculator').value;
    }
    else if(val==='+/-')
    {
      document.querySelector('.calculator').value+='-';
      str=document.querySelector('.calculator').value;
    }
    else if(val==='=')
    {
      let a=str[str.length-1];
      let y;
      if(a==='+' || a==='-' || a==='/' || a==='*')
      {
        alert("Please enter valid expression");
      }
      else{
        y = eval(str);
        document.querySelector('.calculator').value+=val;
        document.querySelector('.calculator').value+=y;
      }
    }
    else if(val==='C')
    {
      document.querySelector('.calculator').value="";
      str="";
    }
    else if(val==='X')
    {
      if(str.length===0)
      {
        alert("Invalid operation")
      }
      else{
        str=str.substring(0, str.length - 1);
        document.querySelector('.calculator').value=str;
      }
    }
  }

}

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})