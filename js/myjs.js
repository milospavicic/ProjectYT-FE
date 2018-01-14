function applyDark() {
    var x = document.getElementById("darkTheme");
    if(x.style.display==="none"){
        x.style.display = "block";
        var y = document.getElementById("lightTheme");
        y.style.display = "none";
    }else{
        x.style.display = "none";
        var y = document.getElementById("lightTheme");
        y.style.display = "block";
    }
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('darker')
    var $nav = $("body");
    $nav.toggleClass('darker')
    var $nav = $(".active");
    $nav.toggleClass('darker')
    var $nav = $("hr");
    $nav.toggleClass('darker')
    var $nav = $(".form-control");
    $nav.toggleClass('darker')
    var $nav = $(".col-md-4");
    $nav.toggleClass('darker')
    var $nav = $(".dropdown-menu");
    $nav.toggleClass('darker')    
}

