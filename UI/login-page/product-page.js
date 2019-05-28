
/*Array of Objects holding Users details*/

const users = [
    { firstname: "Ken", lasttname: "Green", password: "password1", username: "Test1" },
    { firstname: "Ben", lasttname: "John", password: "password2", username: "Test2" },
    { firstname: "John", lasttname: "Brown", password: "password3", username: "Test3" },
    { firstname: "Dan", lasttname: "Adebayo", password: "password4", username: "Test4" },
    { firstname: "Peter", lasttname: "Ezeobi", password: "password5", username: "Test5" },
    { firstname: "Desmond", lasttname: "Uzoh", password: "password6", username: "Test6" },
    { firstname: "Bayo", lasttname: "Mark", password: "password7", username: "Test7" },
    { firstname: "Dele", lasttname: "Austin", password: "password8", username: "Test8" },
    { firstname: "Ike", lasttname: "George", password:  "password9", username: "Test9" },
    { firstname: "Mayor", lasttname: "Godson", password: "password10", username: "Test10" },
    { firstname: "Joy", lasttname: "Briggs", password: "password11", username: "Test11" },
    { firstname: "Jane", lasttname: "Jane", password: "password12", username: "Test12" }
    
];

/*Login Validation */

document.getElementById("login-button").addEventListener("click", checkUser);

function checkUser() {
    let user_name = document.getElementById("login-username").value;
    let user_password = document.getElementById("login-password").value;
    users.forEach(function(u_name){

        if (u_name.username === user_name && u_name.password === user_password){
            window.location.href = "product-display.html";
 
        }
        else {
            let loginError = document.getElementById("loginErrorMessage"); 
            let username_input = document.getElementById("login-username");
            let password_input = document.getElementById("login-password");
            loginError.innerText = "Incorrect Username or Password";
            username_input.classList.add("loginHighlight");
            password_input.classList.add("loginHighlight");
        }
        
    }); 
    
    
}













