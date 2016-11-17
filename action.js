function valid (form) {
	var fail = false;
	var fname = form.fname.value;
	var lname = form.lname.value;
	var email = form.email.value;
	var pass = form.pass.value;
	
	if(fname == "" || fname == " ")
           fail = "Введите ваше имя";
	else if(lname == "" || lname == " ")
           fail = "Введите вашу фамилию";
	else if(email == "" || email == " ")
           fail = "Введите пожалуйста имейл";
	if(pass == "" || pass == " ")
           fail = "Введите пароль";
    if(fail)
           alert(fail);
	else
      	alert("Здравствуйте уважаемый "+fname+" "+lname+". Вами установлен пароль "+pass+". Со времени Вашего рождения прошло дней.");
	}

