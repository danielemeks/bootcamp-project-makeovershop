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



document.getElementById("login-button").addEventListener("click", checkUser);

function checkUser() {
    let user_name = document.getElementById("login-username").value;
    let user_password = document.getElementById("login-password").value;
    let loginFname = document.getElementById("fname");
    let loginLname = document.getElementById("lname");
    let newFname = "";
    let newLname = "";

    users.forEach(function(u_name){

        if (u_name.username === user_name && u_name.password === user_password) {
            //console.log(u_name.username);
           // console.log(u_name.password);
            //console.log(u_name.firstname);
            //console.log(u_name.lasttname); 
            newFname = u_name.firstname;
            newLname = u_name.lasttname;
            console.log(newFname);
            console.log(newLnam);
            alert("I am here"); 
            //loginFname.textContent = [u_name.firstname];
            //loginLname.textConten = [u_name.lasttname];
            window.open("product-display.html");
            //loginFname.textContent = [u_name.firstname];
            //loginLname.textConten = [u_name.lasttname];
            //console.log(u_name.lasttname);
            //alert("I am here");   
            
        }
    }); 
     
}





