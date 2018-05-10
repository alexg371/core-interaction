// GLOBAL JS
// JS from here should be applied to all pages
// Delete this file if you don't need it

// for navigation arrows

function slideDown(){
  $('html, body').animate({
      scrollTop:$('.theme-title').offset().top
  }, 550)
}


// for the post-specific galleries

var bodyHeight = document.documentElement.offsetHeight
var items = document.querySelectorAll('.item')

window.addEventListener( 'scroll', function() {
  var scrollProgress = window.scrollY / ( bodyHeight - window.innerHeight )

    	for (var i = 0; i < items.length; i++) {

			 var minPercentage = i * (1 / items.length)
			 var maxPercentage = (i + 1) * (1 / items.length)

       if (scrollProgress > minPercentage && scrollProgress < maxPercentage) {

				var scaleValue = scrollProgress.map(minPercentage, maxPercentage, 0, 1)

				items[i].style.transform = 'scale(' + scaleValue + ')'

				if (!items[i].classList.contains('is-visible')) {
				      items[i].classList.add('is-visible')
        }

  			} else if (scrollProgress < minPercentage + 0.1) {
				      items[i].style.transform = 'scale(0)'
				if (items[i].classList.contains('is-visible')) {
					    items[i].classList.remove('is-visible')
				}

        } else if (scrollProgress > maxPercentage - 0.1) {
              items[i].style.transform = 'scale(1)'
        if (items[i].classList.contains('is-visible')) {
              items[i].classList.remove('is-visible')
        }
      }
    }
  })

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}




// UNSPLASHED API

var dropdown = document.querySelector('.dropdown');
var submit = document.querySelector('.submit');
var container = document.querySelector('.container');

submit.addEventListener('click', function() {
	var searchTerm = dropdown.value;
	fetch('https://api.unsplash.com/search/photos?client_id=20f1f623621e51903772ab3a2163d8331f1f3bd845d694f09dd74281b8d15d4f&page=1&query=' + searchTerm)
		.then(function(response) {
			return response.json();
		})
		.then(function(jsonData) {
			// console.log(jsonData);
			render(jsonData);
		})
})

function render(data) {
	data.results.forEach(function(result) {
		console.log(result);
		var img = document.createElement('img');
		img.src = result.urls.thumb;
		container.appendChild(img);
	})
}
