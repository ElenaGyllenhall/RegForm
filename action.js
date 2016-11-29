var sex, month, day, year, yearvalue, monthvalue, dayvalue, term;

function SetSex() {
    sex = document.getElementById("sex");
    sexvalue = sex.options[sex.selectedIndex].value;
	
  	if (sexvalue == 1) {
		people = 'Уважаемая ';
  	} else if (sexvalue == 2) {
  		people = 'Уважаемый ';
  	}
      
  	return people;
    }

function SetMonth() {
    month = document.getElementById("month");
    monthvalue = month.options[month.selectedIndex].value;
    
	return monthvalue;
}
function SetDay() {
    day = document.getElementById("day");
    dayvalue = day.options[day.selectedIndex].value;
    
    return dayvalue;
}

function SetYear() {
    year = document.getElementById("year");
    yearvalue = year.options[year.selectedIndex].value;
    
    return yearvalue;
}

function FillForm(form) {
	d0 = new Date(yearvalue, monthvalue, dayvalue);
	d1 = new Date();
	dt = ( d1.getTime() - d0.getTime() ) / (1000*60*60*24);
	term = Math.round(dt);
	
	var fail = false;
	var fname = form.fname.value;
	var lname = form.lname.value;
	var email = form.email.value;
	var pass = form.pass.value;
	
	if (fname == "" || fname == " ")
      fail = "Введите ваше имя";
	else if (lname == "" || lname == " ")
      fail = "Введите вашу фамилию";
	else if (email == "" || email == " ")
      fail = "Введите пожалуйста имейл";
	if (pass == "" || pass == " ")
      fail = "Введите пароль";
    if (fail)
      alert(fail);
	else
      alert("Здравствуйте "+people+""+fname+" "+lname+". \nВами установлен пароль "+pass+". \nСо времени Вашего рождения прошло "+term+" дней.");
}
