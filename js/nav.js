$('document').ready(function(e){
    loginStatus();
    $('#logInSubmit').on('click',function(event){
        var uname = document.getElementById("userNameInput").value;
        var pasw = document.getElementById("passwordInput").value;
        if (typeof(Storage) !== "undefined") {
            if(uname == "admin" && pasw == "admin" || uname == "user" && pasw == "user"){
                localStorage.setItem("user", "loggedIn");
                localStorage.setItem("uname", uname);
                localStorage.setItem("pass", pasw);
                window.location.href = 'index.html';
            }else{
                $("#badLoginModal").modal();
            }
        } else {
         alert("error");
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
    var user = localStorage.getItem("user")
    if(user=="loggedIn"){
        var y = document.getElementById("navbarNotLoggedIn");
        y.style.display = "none";
        
        var storedName = localStorage.getItem("uname");
        var storedPass = localStorage.getItem("pass");
        
        var navbarLoggedIn = document.getElementById("navbarLoggedIn");
        navbarLoggedIn.style.display = "block";
        var temp = '<span class="glyphicon glyphicon-user"></span>'+" "+storedName+" "+'<span class="caret"></span>';
        console.log(temp);
        $("#userNameTab").html(temp);
        
        if(storedName == "user" && storedPass == "user"){
            var usersTabInDropdown = document.getElementById("users");
            usersTabInDropdown.style.display = "none";
        }
    }
}
function loginWindow(){
    var x = $(".loginWindow");
    x.toggleClass('visible');
}
function logout(){
    localStorage.setItem("user", "false");
    var y = document.getElementById("navbarNotLoggedIn");
    y.style.display = "block";
    var y = document.getElementById("navbarLoggedIn");
    y.style.display = "none";
}