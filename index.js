// btnSignUp signUpEmail signUpName signUpPass failMessage successMessage
// signInPass signInEmail btnLogin failMess IncorrectMessage
//userName logoutBtn
// variables
var signUpName = document.getElementById('signUpName');
var signUpEmail = document.getElementById('signUpEmail');
var signUpPass = document.getElementById('signUpPass');
var btnSignUp = document.getElementById('btnSignUp');
var failMessage = document.getElementById('failMessage');
var successMessage= document.getElementById('successMessage');
var personArr=[];
var signInEmail =document.getElementById("signInEmail");
var signInPass =document.getElementById("signInPass");
var btnLogin= document.getElementById("btnLogin");
var failMess= document.getElementById("failMess");
var incorrectMessage = document.getElementById("incorrectMessage");
var userName = document.getElementById("userName");
let logoutBtn = document.getElementById("logoutBtn");





 /*sign up*/////////////////////////////////////////////////////////////////////////////
// validation

if(localStorage.getItem('persons')==null)
{
    personArr=[];
}
else
{
    personArr=JSON.parse(localStorage.getItem('persons'))
}
//addEventListener sign up page
if(btnSignUp!=null)
{
    btnSignUp.addEventListener('click', function () {
        addPerson()
    })
}
function addPerson() 
{

    if (signUpName.value == "" || signUpEmail.value == "" || signUpPass.value == "") 
    {
        failMessage.classList.replace("d-none", "d-block")

    }
    else if (signUpName.value != "" && signUpEmail.value != "" && signUpPass.value != "")
    {

       var person = 
        {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPass.value,
         }
        failMessage.classList.replace('d-block', 'd-none');
        personArr.push(person);
        localStorage.setItem('persons', JSON.stringify(personArr))
        successMessage.classList.replace('d-none','d-block');
        clear();
        location.href="sign-in.html";

    }
}
// addEventListener welcome


/* sign in page*//////////////////////////////////////////////////////////////////////
if(btnLogin!=null)
{
    btnLogin.addEventListener('click', function () {
       checkPerson()
    })
}
//check person
function checkPerson(){
    
    if(signInEmail.value!="" && signInPass.value!="")
    {
           failMess.classList.replace("d-block","d-none");
           if( checkIsCorrect())
          {
            incorrectMessage.classList.replace("d-block","d-none")

           location.href="welcom.html"
          }
          else
          {
            incorrectMessage.classList.replace("d-none","d-block")
          } 
    }
    else
    {
        failMess.classList.replace("d-none","d-block")
    }
}
//checkIsCorrect
function checkIsCorrect(){
   
    for(var i=0; i<personArr.length; i++)
    {
        if(
           personArr[i].email.toLowerCase()==signInEmail.value.toLowerCase()&&
           personArr[i].password.toLowerCase()==signInPass.value.toLowerCase()
          )
        {
          localStorage.setItem("name",JSON.stringify(personArr[i].name))  
          return true;
        }
        else
        {
            console.log('error')
        }
    }
}

/*welcome page *////////////////////////////////////////////////////////////////
$(document).ready(function(){
    addName()
})

function addName(){
    let userName = JSON.parse(localStorage.getItem("name"))
    document.getElementById("userName").innerHTML=`welcome ${userName}`
   
    }

    logoutBtn.addEventListener('click',function(){
        localStorage.removeItem("name")
        document.getElementById("userName").innerHTML=`welcome ...`

    })
function clear() {
    signUpName.value = '';
    signUpEmail.value = '';
    signUpPass.value = '';
}

