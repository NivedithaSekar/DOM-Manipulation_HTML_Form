function displayData(){
    var fname = document.getElementById('first-name').value;
    var lname= document.getElementById('last-name').value;
    var choices= document.getElementsByName('choice');
    var gender= document.querySelector('input[name="gender"]:checked').value;
    const foodChoice = [];
    for(let i=0; i<choices.length; i++){
        if(choices[i].checked){
            foodChoice.push(choices[i].value);
        }
    }
    var address= document.getElementById('address').value;
    var state= document.getElementById('state').value;
    var pincode= document.getElementById('pincode').value;
    var country= document.getElementById('country').value;
    var tbody= document.getElementById('tbody');
    tbody.innerHTML = tbody.innerHTML + `<tr>
    <td>${fname} ${lname}</td>
    <td>${gender}</td>
    <td>${foodChoice}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${state}</td>
    <td>${country}</td>
    </tr>`
}

function validateForm(){
    console.log("VALIDAING FORM...")
    const form = document.getElementById('form');
    var fname = document.getElementById('first-name').value;
    var lname= document.getElementById('last-name').value;
    var gender= document.querySelector('input[name="gender"]:checked');
    var choices= document.getElementsByName('choice');
    const foodChoice = [];
    for(let i=0; i<choices.length; i++){
        if(choices[i].checked){
            foodChoice.push(choices[i].value);
        }
    }
    var address= document.getElementById('address').value;
    var state= document.getElementById('state').value;
    var pincode= document.getElementById('pincode').value;
    var country= document.getElementById('country').value;

    firstName = new Promise(function(resolve, reject) {
        if(fname.length == 0){
            document.getElementById('fname_invalidity').style.display = 'block';
            reject(new Error('Please Enter your first name'));
        }else{
            document.getElementById('fname_invalidity').style.display = 'none';
            resolve();
        }
    });
    
    lastName = new Promise(function(resolve, reject) {
        if(lname.length == 0){
            document.getElementById('lname_invalidity').style.display = 'block';
            reject(new Error('Please Enter your last name'));
        }else{
            document.getElementById('lname_invalidity').style.display = 'none';
            resolve();
        }
    })

    foodchoiceValidation = new Promise(function(resolve, reject) {
        if(foodChoice.length < 2){
            reject(new Error('Please Select atleast 2 choices of Food'));
            document.getElementById('foodChoice_invalidity').style.display = 'block';
        }else{
            document.getElementById('foodChoice_invalidity').style.display = 'none';
            resolve();
        }
    })

    pincodeValidation = new Promise(function(resolve, reject) {
        //console.log(pincode, pincode.length, pincode.length < 7)
        if(pincode.length == 0){
            document.getElementById('pincode_invalidity').style.display = 'block';
            document.getElementById('pincode_invalidity').innerHTML = "Please Enter a pincode";
            reject(new Error('Please Enter valid pincode'));
        }
        else if(pincode.length < 6){
            document.getElementById('pincode_invalidity').style.display = 'block';
            document.getElementById('pincode_invalidity').innerHTML = "Please Enter valid pincode";
            reject(new Error('Please Enter valid pincode'));
        }else{
            document.getElementById('pincode_invalidity').style.display = 'none';
            resolve();
        }
    })

    stateValidation = new Promise(function(resolve, reject) {
        if(state.length < 1){
            document.getElementById('state_invalidity').style.display = 'block';
            reject(new Error('Please enter your state'));
        }else{
            document.getElementById('state_invalidity').style.display = 'none';
            resolve();
        }
    })

    countryValidation = new Promise(function(resolve, reject) {
        if(country.length < 1){
            document.getElementById('country_invalidity').style.display = 'block';
            reject(new Error('Please Enter your country'));
        }else{
            document.getElementById('country_invalidity').style.display = 'none';
            resolve();
        }
    })
    
    genderValidation = new Promise(function(resolve, reject) {
        if(gender == null){
            document.getElementById('gender_invalidity').style.display = 'block';
            reject(new Error('Please select your gender'));
        }else{
            document.getElementById('gender_invalidity').style.display = 'none';
            resolve();
        }
    })

    addressValidation = new Promise(function(resolve, reject){
        if(address.length < 10){
            document.getElementById('address_invalidity').style.display = 'block';
            reject(new Error('Please Enter your complete address'));
        }else{
            document.getElementById('address_invalidity').style.display = 'none';
            resolve();
        }
    })
    
    Promise.all([firstName,lastName,foodchoiceValidation,pincodeValidation,addressValidation,stateValidation,countryValidation,genderValidation])
    .then(()=> {
        displayData();
        console.log("USER Added");
        form.reset();})
    .catch((err) => {
        console.error(err); 
    });
}