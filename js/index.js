$(document).ready(function(e) {
    showRecentVideos();
    showPopularChannels();
});

function randomDate(start, end) {
    var newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return newDate.getDate()+"."+(newDate.getMonth()+1)+"."+newDate.getFullYear()+".";
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function showRecentVideos(){
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
                var newDiv = $('<div class="col-md-4"><a href="videoPage.html?id=1" target="_self"><img id="imgFormat" src="'+slika.thumbnailUrl+'" alt="video" style="width:100%"><div class="caption"><p id="titleBar">'+title+'</p></div><p id="stats">User<br>'+views+'<br>'+newDate+'</p></a></div>');

                /*
				 	Da bi kasnije prikazali veliku verziju slike i njen naslov bez slanja zahteva na server, u data atribute 'largeImg' i 'title'
					cemo smestiti ove vrednosti. Da atributi nam omogucavaju definisanje proizvoljnih atributa u HTML elementima i kreiraju se i
					citaju uz pomoc 'data' funkcije (za razliku od standardnih HTML atributa za koje koristimo funkciju 'attr').
				*/
				//newDiv.data('largeImg', slika.url);
				//newDiv.data('title', slika.title);

				// Nakon sto smo postavili sve sto nam treba u vezi novokreiranog diva, dodajemo ga u postojecu HTML strukuru.
				// Kokrentno, ovde nove divove dodajemo na kraj elementa sa id-em 'content'
				$('#recommendedDiv .row').append(newDiv);
			}

		},
		error: function(request, message, error) {
			alert('GRESKA: ' + error);
		}
	});
}
function showPopularChannels(){
    $.ajax({
		url: 'https://jsonplaceholder.typicode.com/photos',
		type: 'GET',
		dataType: 'json',
		success: function(response) {
            var numberOfFollowers =999;
			for(var i=10; i<16; i++) {
				var slika = response[i];
                var title = capitalizeFirstLetter(slika.title.substring(0, 10));

                numberOfFollowers = numberOfFollowers -Math.floor(Math.random() * 150);
                var newDiv = $('<div class="col-md-2 col-sm-4 col-xs-6"><a href="#" target="_self"><img id="profileImgFormat" src="'+slika.thumbnailUrl+'" alt="video" style="width:100%"><div class="caption"><p id="profileName">'+title+'</p></div><p id="stats">'+numberOfFollowers+'k followers</p></a></div>');

				$('#popularChannels .row').append(newDiv);
			}

		},
		error: function(request, message, error) {
			alert('GRESKA: ' + error);
		}
	});
}


