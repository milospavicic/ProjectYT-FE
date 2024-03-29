$(document).ready(function(e) {
    loadComments(1);
    showPopularChannels();   
    
    $('#btnFollow').click(function() {
        var tempName = $(this).text();
        if(tempName == "Follow"){
            $(this).text("Unfollow");
            $("#btnFollow").attr('class', 'btn btn-default');
        }else{
            $(this).text("Follow");
            $("#btnFollow").attr('class', 'btn btn-danger');
        }
    });
    $('#likeButton').click(function() {
        if($('#dislikeButton').prop('disabled')==true){
            var likes ='<span class="glyphicon glyphicon-thumbs-up"></span> '+(parseInt($('#likeButton').text())+1);
            var dislikes ='<span class="glyphicon glyphicon-thumbs-down"></span> '+(parseInt($('#dislikeButton').text())-1);
            $('#dislikeButton').html(dislikes);
            $(this).html(likes); 
            $('#dislikeButton').prop('disabled',false);
        }else{
            var likes ='<span class="glyphicon glyphicon-thumbs-up"></span> '+(parseInt($('#likeButton').text())+1);
            $(this).html(likes);
        }
        $(this).prop('disabled',true);
    });
    $('#dislikeButton').click(function() {
        if($('#likeButton').prop('disabled')==true){
            var likes ='<span class="glyphicon glyphicon-thumbs-up"></span> '+(parseInt($('#likeButton').text())-1);
            var dislikes ='<span class="glyphicon glyphicon-thumbs-down"></span> '+(parseInt($('#dislikeButton').text())+1);
            $(this).html(dislikes);
            $('#likeButton').html(likes);
            $('#likeButton').prop('disabled',false);
        }else{
            $(this).html(dislikes);
            var dislikes ='<span class="glyphicon glyphicon-thumbs-down"></span> '+(parseInt($('#dislikeButton').text())+1);
        }
        $(this).prop('disabled',true);
    });
    $('#paginationItem a').click(function(){
        $('.active').removeClass('active');
        $(this).parent("li").addClass('active');
        loadComments($(this).text());
    })
});
function errorPage(){
    var errorDiv = $('<div class="row"><div class="col-md-12 col-sm-12"><div class="videoAndControl thumbnail"><img id="videoPlayer" style="width=100%; height=430" src="pictures/errorPic.jpg"></img></div></div></div>')
    $('.mainDiv').empty();
    $('.mainDiv').append(errorDiv);
    $('.mainDiv').css("width", "95%");
}

function randomDate(start, end) {
    var newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return newDate.getDate()+"."+(newDate.getMonth()+1)+"."+newDate.getFullYear()+".";
}
function loadComments(n){
    console.log("n" +n)
    $('.commentRow').empty();
    var numberOfComments = document.getElementById("commSelect");
    var maxComments = numberOfComments.options[numberOfComments.selectedIndex].value;
     $.ajax({
		url: 'https://jsonplaceholder.typicode.com/comments',
		type: 'GET',
		dataType: 'json',
		success: function(response) {
            var max = maxComments*n;
            var min = max-maxComments;
            console.log("max: "+max+"min: "+min)
			for(var i=0; i<maxComments; i++) {
				var comment = response[i];
                var newLikes = Math.floor(Math.random() * 999);
                var newName = comment.name.substring(0, 7);
                var newDate = 'Posted on: '+randomDate(new Date(2010, 0, 1), new Date());
                var newDiv = $('<div class="col-md-12 col-sm-12"><div class="thumbnail" id="comment"><a href="channelPage.html" id="commentOwner">'+newName+'</a><p id="commentDate">'+newDate+'</p><div class="commentText"><p>'+comment.body+'</p></div><button type="button" class="btn btn-default">Reply</button><p id="likes">'+newLikes+'</p><div class="btn-group" id="commLDBtnGroup"><button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-thumbs-up"></span></button><button type="button" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-down"></span> </button></div></div></div>')

				$('.commentRow').append(newDiv);
			}

		},
		error: function(request, message, error) {
            errorPage();
		}
	});
}
function refreshComments() {
    loadComments(1);
    $('.active').removeClass('active');
    $('.firstPage').addClass('active');
}
function randomDate(start, end) {
    var newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return newDate.getDate()+"."+(newDate.getMonth()+1)+"."+newDate.getFullYear()+".";
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function showPopularChannels(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
		type: 'GET',
		dataType: 'json',
		success: function(response) {

			// Uzimamo samo prvih 50 slika
			for(var i=0; i<6; i++) {
				var slika = response[i];
                var title = capitalizeFirstLetter(slika.title.substring(0, 25));
                var views = 'Views: '+Math.floor(Math.random() * 100000);
                var newDate = 'Posted on: '+randomDate(new Date(2010, 0, 1), new Date());
                var newDiv = $('<div class="col-md-2 col-sm-4 col-xs-6" id="test"><a href="videoPage.html?id='+i+'" target="_self"><img id="imgFormat" src="'+slika.thumbnailUrl+'" alt="video" style="width:100%"><div class="caption"><p id="titleBar">'+title+'</p></div><p id="stats">User<br>'+views+'<br>'+newDate+'</p></a></div>');


				$('#recommendedVideos .row').append(newDiv);
			}
		},
		error: function(request, message, error) {
            errorPage();
		}
	});
}


