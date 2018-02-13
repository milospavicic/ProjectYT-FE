$('document').ready(function(e){
    loginStatus();
    $('#searchSubmit').click(function(e){
        if($.trim($('#searchParameter').val()) == ''){
            e.preventDefault(); 
        }
    });
    $('#logInSubmit').on('click',function(event){
        var uname = document.getElementById("usernameLogin").value.trim();
        var pasw = document.getElementById("passwordLogin").value.trim();
        var storedName = localStorage.getItem("newUser");
        var storedPass = localStorage.getItem("newPass");
        if(uname != "" && pasw!=""){
            if (typeof(Storage) !== "undefined") {
                if(uname == "admin" && pasw == "admin" || uname == "user" && pasw == "user" || uname == storedName && pasw == storedPass){
                    if(uname=="admin")
                        localStorage.setItem("userMode", "admin");
                    else
                        localStorage.setItem("userMode", "user");
                    localStorage.setItem("uname", uname);
                    localStorage.setItem("pass", pasw);
                    $("#login-modal").modal('toggle');
                    loginStatus();
                }else{
                    $("#loginErrorMessage").text("Wrong username or password!");
                    $("#badLoginModal").modal();
                }
            } else {
             alert("error");
            }
            }else{
                $("#loginErrorMessage").text("All fields must be filled!");
                $("#badLoginModal").modal();
            }
        event.preventDefault();
    });
    $('#registerSubmit').on('click',function(event){
        var uname = document.getElementById("usernameRegister").value.trim();
        var pasw = document.getElementById("passwordRegister").value.trim();
        var email = document.getElementById("emailRegister").value.trim();
        if(uname == "admin" || uname == "user"){
            $("#registerErrorMessage").text("Already used username!");
            $("#badRegisterModal").modal(); 
        }else if(uname == "" || pasw=="" || email==""){
            $("#registerErrorMessage").text("All fields must be filled!");
            $("#badRegisterModal").modal(); 
        }else{
            $("#registerErrorMessage").html($('<div class="alert alert-success"><strong>Successful registration!</strong> You may now procced to login.</div>'));
            localStorage.setItem("newUser", uname);
            localStorage.setItem("newPass", pasw);
            $("#badRegisterModal").modal();
            $("#register-modal").modal('toggle');
        }

        event.preventDefault();
    });
    
    
    //USER DROPDOWN
    $('ul[role="menu"]')
        .on('show.bs.collapse', function (e) {
        $(e.target).prev('a[role="menuitem"]').addClass('active');
    })
        .on('hide.bs.collapse', function (e) {
        $(e.target).prev('a[role="menuitem"]').removeClass('active');
    });

    $('a[data-toggle="collapse"]').click(function (event) {

        event.stopPropagation();
        event.preventDefault();


        var col_id = $(this).attr("href");
        $(col_id).collapse('toggle'); 
    });
    //USER DROPDOWN END 
});
function loginStatus(){
    var userMode = localStorage.getItem("userMode")
    console.log(userMode);
    if(userMode!="false"){
        var y = document.getElementById("navbarNotLoggedIn");
        y.style.display = "none";

        var storedName = localStorage.getItem("uname");
        var storedPass = localStorage.getItem("pass");
        var navbarLoggedIn = document.getElementById("navbarLoggedIn");
        navbarLoggedIn.style.display = "block";
        var temp = '<span class="glyphicon glyphicon-user"></span>'+" "+storedName+" "+'<span class="caret"></span>';
        console.log(temp);
        $("#userNameTab").html(temp);
        if(userMode=="user"){
            var usersTabInDropdown = document.getElementById("users");
            usersTabInDropdown.style.display = "none";
            $('#deleteOptionVideo').hide();
            $('#deleteOptionChannel').hide();
        }
    }
}
function loginWindow(){
    var x = $(".loginWindow");
    x.toggleClass('visible');
}
function logout(){
    console.log("logout")
    localStorage.setItem("userMode", "false");
    var y = document.getElementById("navbarNotLoggedIn");
    y.style.display = "block";
    var y = document.getElementById("navbarLoggedIn");
    y.style.display = "none";
}