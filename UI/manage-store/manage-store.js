

/**  Validate Admin login: Default username and Password is Admin  */
document.getElementById("login-button-admin").addEventListener("click", loginAdmin);

function loginAdmin() {
    let user_name_admin = document.getElementById("login_username").value;
    let user_password_admin = document.getElementById("login_password").value;

    if (user_name_admin === "Admin" && user_password_admin === "Admin") {   
        window.open("manage.html");
    }   
       else {
        login_username.classList.add("loginHighlight");
        login_password.classList.add("loginHighlight");
        }
    } 