$(document).ready(function(e) {
    loadComments();
    
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
});
function randomDate(start, end) {
    var newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return newDate.getDate()+"."+(newDate.getMonth()+1)+"."+newDate.getFullYear()+".";
}
function loadComments(){
    $('.commentRow').empty();
    var numberOfComments = document.getElementById("commSelect");
    var maxComments = numberOfComments.options[numberOfComments.selectedIndex].value;
     $.ajax({
		url: 'https://jsonplaceholder.typicode.com/comments',
		type: 'GET',
		dataType: 'json',
		success: function(response) {

			for(var i=0; i<maxComments; i++) {
				var comment = response[i];
                var newLikes = Math.floor(Math.random() * 999);
                var newName = comment.name.substring(0, 7);
                var newDate = 'Posted on: '+randomDate(new Date(2010, 0, 1), new Date());
                var newDiv = $('<div class="col-md-12 col-sm-12"><div class="thumbnail" id="comment"><p id="commentOwner">'+newName+'</p><p id="commentDate">'+newDate+'</p><div class="commentText"><p>'+comment.body+'</p></div><button type="button" class="btn btn-default">Reply</button><p id="likes">'+newLikes+'</p><div class="btn-group" id="commLDBtnGroup"><button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-thumbs-up"></span></button><button type="button" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-down"></span> </button></div></div></div>')

				$('.commentRow').append(newDiv);
			}

		},
		error: function(request, message, error) {
			alert('GRESKA: ' + error);
		}
	});
}
function refreshComments() {
    loadComments();
}

