// JavaScript Document
function checkdigit(e)
{
 	if(e.keyCode>=48&&e.keyCode<=57)
 	{
		return true;
	}
 	else
 	{
		return false;
 	}
}

function checkcharacter(e)
{
	if((e.keyCode>=97 && e.keyCode<=122)||(e.keyCode>=65 && e.keyCode<=90)||e.keyCode==32)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function matchpass()
{ 
	if(document.student_reg_form.password.value!=document.student_reg_form.repassword.value)
		{
		document.getElementById('lblrepassword').innerHTML="Password/Repassword Not Matched";
		document.getElementById('lblrepassword').style.color='white';
		document.getElementById('repassword').value='';
		}
	else
	{
		document.getElementById('lblrepassword').innerHTML="";
	}
}

function checklength()
{
if(document.student_reg_form.password.value.length<1)
{
	document.getElementById('lblstrength').innerHTML="";
}	
else if(document.student_reg_form.password.value.length<4)
{
	document.getElementById('lblstrength').innerHTML="Weak Password";
	document.getElementById('lblstrength').style.color='red';
	}
else if(document.student_reg_form.password.value.length<8)
{
	document.getElementById('lblstrength').innerHTML="Medium Password";
	document.getElementById('lblstrength').style.color='blue';
	}
else
{
	document.getElementById('lblstrength').innerHTML="Strong Password";
	document.getElementById('lblstrength').style.color='green';
	}
}

function checkempty()
{
	if(document.student_reg_form.rollno.value==""||document.student_reg_form.name.value==""||document.student_reg_form.email.value==""
	||document.student_reg_form.password.value==""||document.student_reg_form.repassword.value=="")
	{
		alert("Please Fill All Required Fields");
		return false;
	}
	else
	{
		return true;
	}
	}