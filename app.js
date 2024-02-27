const Form = document.getElementById("myform")
const Password = document.getElementById("mypassword")
const ConfirmPassword = document.getElementById("confirmpassword")
const Hesitate = document.getElementById("hesitate")

Form.addEventListener("submit", function (event) {

    event.preventDefault()

    //logic to check whether password and confirm password are matching or not

    isPasswordMatched = false

    if (Password.value == ConfirmPassword.value) {
        //passwords match
        isPasswordMatched = true
        Hesitate.innerText = "PASSWORD MATCH"

        //logic to get all the details 
        // console.log(event)
        const data = {
            fullname: event.target[0].value,
            phonenumber: event.target[1].value,
            email: event.target[2].value,
            url: event.target[3].value,
            password: event.target[4].value,
            confirmpassword: event.target[5].value,
        }
        console.log(data)
    }
    else {
        //password do not match
        isPasswordMatched = false
        Hesitate.innerText = "PASSWORD DONT MATCH"
    }
})
//*******************************************Assignment********************** */
// const fullName = document.getElementById("fullname")
// const phoneNumber = document.getElementById("phonenumber")

function validateFullName(fullName) {
    console.log(fullName)
    if (fullName.length > 10) {
        console.error('Full name should have maximum of 10 characters');
        return false;
    }
   
        return true;
   
}

function validatePhoneNumber(phonenumber) {
    console.log(phonenumber)
    if (phonenumber.length !== 10) {
        console.error('Mobile number should have a length of exactly 10 digits')
        return false;
    }
    
        return true;
    
}

const fullName = 'john DEezxcva';
const phonenumber = '123456789012';

if (!validateFullName(fullName) || !validatePhoneNumber(phonenumber)) {
    console.error('Validation failed. Please correct the errors.');
}
