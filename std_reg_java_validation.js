// JavaScript Document
function checkvalidation(){
	if(document.std_reg_form.name.value=="")
	{
		alert("Please Type Your Name:");
		return false;
	}
	
	if(document.std_reg_form.email.value=="")
	{
		alert("Please Type Your Email:");
		return false;
	}
	
	if(document.std_reg_form.password.value=="")
	{
		alert("Please Type Your Password:");
		return false;	
	}
	
	if(document.std_reg_form.repassword.value=="")
	{
		alert("Please Type Your Repassword:");
		return false;
	}
	
	if(document.std_reg_form.password.value!=document.std_reg_form.repassword.value)
	{
		alert("Password Doesn't Match");
		return false;		
	}
	
	if(document.std_reg_form.mobile_no.value=="")
	{
		alert("Please Type Your MobileNo.");
		return false;	
	}
	
	if(document.std_reg_form.address.value=="")
	{
		alert("Please Type Your Address:");
		return false;
	}
	
	if(document.std_reg_form.gender.value=="")
	{
		alert("Please Type Your Gender:");
		return false;
	}
	
	if(document.std_reg_form.city.value=="0")
	{
		alert("Please Select Your City:");
		return false;
	}
	
	else
	{
		return true;
	}
	}