$('document').ready(function(e){
    showChannels();
    
    $('#btnFollow0').click(function() {
        console.log("works?");
        var tempName = $(this).text();
        if(tempName == "Follow"){
            $(this).text("Unfollow");
            $("#btnFollow0").attr('class', 'btn btn-default');
        }else{
            $(this).text("Follow");
            $("#btnFollow0").attr('class', 'btn btn-danger');
        }
    });
    $('#btnFollow0, #btnFollow1').click(function () {
        console.log("adsa");
        if (this.id == 'submit1') {
            alert('Submit 1 clicked');
        }
        else if (this.id == 'submit2') {
            alert('Submit 2 clicked');
        }
    });
});  
function errorPage(){
    var errorDiv = $('<div class="row"><div class="col-md-12 col-sm-12"><div class="videoAndControl thumbnail"><img id="videoPlayer" style="width=100%; height=430" src="pictures/errorPic.jpg"></img></div></div></div>')
    $('.mainDiv').empty();
    $('.mainDiv').append(errorDiv);
    $('.mainDiv').css("width", "95%");
    $('.mainDiv').css("margin-bottom", "30px");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function showChannels(){
    
    $.ajax({
		url: 'https://jsonplaceholder.typicode.com/photos',
		type: 'GET',
		dataType: 'json',
		success: function(response) {
            $('#content').append("<h4>Saved playlists</h4>");
			// Uzimamo samo prvih 50 slika
            var j = 0;
			for(var i=20; i<30; i++) {
                
				var slika = response[i];
                var title = capitalizeFirstLetter(slika.title.substring(0,16));
                var followers = Math.floor(Math.random() * 10000);
                var videos = Math.floor(Math.random() * 1000);
                var newDiv = $('<div class="col-md-12 col-sm-12 col-xs-12"><a href="channelPage.html" id="picDiv"><img src="'+slika.thumbnailUrl+'" alt="Lights" style="width:150px;height: 150px"><ul id="channelInfo"><li><h3>'+title+'</h3></li><li><p>'+followers+' followers - '+videos+' videos</p></li><li><p>'+slika.title+'</p></li></ul></a><div class="btn-group" role="group" id="channelButton"><button type="button" class="btn btn-danger" id="btnFollow'+j+'">Follow</button><button type="button" class="btn btn-default"><span class="glyphicon glyphicon-option-horizontal"></span></button></div>');
                j++;
				$('.row').append(newDiv);
			}

		},
		error: function(request, message, error) {
            errorPage();
		}
	});
}