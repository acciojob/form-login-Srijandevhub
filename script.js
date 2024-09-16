function getFormvalue(e) {
    //Write your code here
	e.preventDefult();
	var firstName = this.elements['fname'].value;
    var lastName = this.elements['lname'].value;
    
    // Display the values in an alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
	return false;
}
