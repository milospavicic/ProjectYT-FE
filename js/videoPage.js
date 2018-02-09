$(document).ready(function(e) {
    loadComments();
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

			// Uzimamo samo prvih 50 slika
			for(var i=0; i<maxComments; i++) {
				var comment = response[i];
                var newLikes = Math.floor(Math.random() * 999);
                var newName = comment.name.substring(0, 7);
                var newDate = 'Posted on: '+randomDate(new Date(2010, 0, 1), new Date());
                var newDiv = $('<div class="col-md-12 col-sm-12"><div class="thumbnail" id="comment"><p id="commentOwner">'+newName+'</p><p id="commentDate">'+newDate+'</p><div class="commentText"><p>'+comment.body+'</p></div><button type="button" class="btn btn-default">Reply</button><p>'+newLikes+'</p><div class="btn-group" id="commLDBtnGroup"><button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-thumbs-up"></span></button><button type="button" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-down"></span> </button></div></div></div>')
                /*
				 	Da bi kasnije prikazali veliku verziju slike i njen naslov bez slanja zahteva na server, u data atribute 'largeImg' i 'title'
					cemo smestiti ove vrednosti. Da atributi nam omogucavaju definisanje proizvoljnih atributa u HTML elementima i kreiraju se i
					citaju uz pomoc 'data' funkcije (za razliku od standardnih HTML atributa za koje koristimo funkciju 'attr').
				*/
				//newDiv.data('largeImg', slika.url);
				//newDiv.data('title', slika.title);

				// Nakon sto smo postavili sve sto nam treba u vezi novokreiranog diva, dodajemo ga u postojecu HTML strukuru.
				// Kokrentno, ovde nove divove dodajemo na kraj elementa sa id-em 'content'
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