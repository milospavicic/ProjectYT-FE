$(document).ready(function(e) {
    showRecentVideos();
    showPopularChannels();

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
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function showRecentVideos(){
    $.ajax({
		url: 'https://jsonplaceholder.typicode.com/photos',
		type: 'GET',
		dataType: 'json',
		success: function(response) {

			for(var i=0; i<6; i++) {
				var slika = response[i];
                var title = capitalizeFirstLetter(slika.title.substring(0,28));
                var views = 'Views: '+Math.floor(Math.random() * 100000);
                var newDate = 'Posted on: '+randomDate(new Date(2010, 0, 1), new Date());
                var newDiv = $('<div class="col-md-4"><a href="videoPage.html?id='+i+'" target="_self"><img id="videoImage" src="'+slika.thumbnailUrl+'" alt="video" style="width:100%"><div class="caption"><p id="titleBar">'+title+'</p></div><p id="videoInfo"><a href="channelPage.html" id="channelName">User</a><br>'+views+'<br>'+newDate+'</p></a></div>');

				$('#recommendedDiv .row').append(newDiv);
			}

		},
		error: function(request, message, error) {
            errorPage();
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
                var newDiv = $('<div class="col-md-2 col-sm-4 col-xs-6"><a href="channelPage.html" target="_self"><img id="profileImage" src="'+slika.thumbnailUrl+'" alt="video" style="width:100%"><div class="caption"><p id="profileName">'+title+'</p></div><p >'+numberOfFollowers+' followers</p></a></div>');

				$('#popularChannels .rowTwo').append(newDiv);
			}

		},
		error: function(request, message, error) {
            errorPage();
		}
	});
    //FROM "FILE"
    function SortByFollowers(x,y) {
      return y.followers - x.followers; 
    }
    users.sort(SortByFollowers);
    
    for(var i=0; i<6; i++) {
        var user = users[i];
        var title = capitalizeFirstLetter(user.title.substring(0, 10));
        var newDiv = $('<div class="col-md-2 col-sm-4 col-xs-6"><a href="channelPage.html" target="_self"><img id="profileImage"    src="'+user.thumbnailUrl+'" alt="video" style="width:100%"><div class="caption"><p id="profileName">'+title+'</p></div><p >'+user.followers+' followers</p></a></div>');

        $('#popularChannels .rowOne').append(newDiv);
    }
}
var users= [
  {
    "id": 1,
    "followers":3126,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952"
  },
  {
    "id": 2,
    "followers":3576,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796"
  },
  {
    "id": 3,
    "followers":9226,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "http://placehold.it/600/24f355",
    "thumbnailUrl": "http://placehold.it/150/24f355"
  },
  {
    "id": 4,
    "followers":7155,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "http://placehold.it/600/d32776",
    "thumbnailUrl": "http://placehold.it/150/d32776"
  },
  {
    "id": 5,
    "followers":6216,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "http://placehold.it/600/f66b97",
    "thumbnailUrl": "http://placehold.it/150/f66b97"
  },
  {
    "id": 6,
    "followers":8676,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "http://placehold.it/600/56a8c2",
    "thumbnailUrl": "http://placehold.it/150/56a8c2"
  },
  {
    "id": 7,
    "followers":3544,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "http://placehold.it/600/b0f7cc",
    "thumbnailUrl": "http://placehold.it/150/b0f7cc"
  },
  {
    "id": 8,
    "followers":7346,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "http://placehold.it/600/54176f",
    "thumbnailUrl": "http://placehold.it/150/54176f"
  },
  {
    "id": 9,
    "followers":5623,
    "title": "qui eius qui autem sed",
    "url": "http://placehold.it/600/51aa97",
    "thumbnailUrl": "http://placehold.it/150/51aa97"
  },
  {
    "id": 10,
    "followers":4122,
    "title": "beatae et provident et ut vel",
    "url": "http://placehold.it/600/810b14",
    "thumbnailUrl": "http://placehold.it/150/810b14"
  }
]
