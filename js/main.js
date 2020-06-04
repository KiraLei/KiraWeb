$(document).ready(function () {

	//slider
	 $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });

	 //post
	 var posts=[
	 { 
	 	title: 'Prueba de titulo 1',
	 	date: 'Publicado el dia '+moment().date()+' de ' +moment().format("MMMM")+ ' de ' + moment().format("YYYY"),
	 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula arcu, posuere sed tellus vel, scelerisque convallis dolor. Curabitur non rhoncus sem. Integer eu turpis a purus interdum ultrices eget nec neque. Curabitur nec lectus volutpat, mattis urna nec, cursus risus. Nulla ante purus, blandit ut nibh ut, consectetur rutrum mi. Donec scelerisque et tortor quis efficitur. Praesent imperdiet turpis eros, eu vestibulum magna ullamcorper nec. Nullam risus est, tincidunt eu metus auctor, eleifend interdum tellus. Pellentesque gravida urna at neque pretium, vitae consequat odio efficitur. In nec facilisis leo. Sed rutrum pulvinar tristique. In suscipit consequat est in posuere. Aliquam in enim eu enim fringilla euismod sed eu justo. In blandit porta nunc.'
	  },
	   { 
	 	title: 'Prueba de titulo 2',
	 	date: 'Publicado el dia '+moment().format("LL"),
	 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula arcu, posuere sed tellus vel, scelerisque convallis dolor. Curabitur non rhoncus sem. Integer eu turpis a purus interdum ultrices eget nec neque. Curabitur nec lectus volutpat, mattis urna nec, cursus risus. Nulla ante purus, blandit ut nibh ut, consectetur rutrum mi. Donec scelerisque et tortor quis efficitur. Praesent imperdiet turpis eros, eu vestibulum magna ullamcorper nec. Nullam risus est, tincidunt eu metus auctor, eleifend interdum tellus. Pellentesque gravida urna at neque pretium, vitae consequat odio efficitur. In nec facilisis leo. Sed rutrum pulvinar tristique. In suscipit consequat est in posuere. Aliquam in enim eu enim fringilla euismod sed eu justo. In blandit porta nunc.'
	  },
	   { 
	 	title: 'Prueba de titulo 3',
	 	date: 'Publicado el dia '+moment().format("LL"),
	 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula arcu, posuere sed tellus vel, scelerisque convallis dolor. Curabitur non rhoncus sem. Integer eu turpis a purus interdum ultrices eget nec neque. Curabitur nec lectus volutpat, mattis urna nec, cursus risus. Nulla ante purus, blandit ut nibh ut, consectetur rutrum mi. Donec scelerisque et tortor quis efficitur. Praesent imperdiet turpis eros, eu vestibulum magna ullamcorper nec. Nullam risus est, tincidunt eu metus auctor, eleifend interdum tellus. Pellentesque gravida urna at neque pretium, vitae consequat odio efficitur. In nec facilisis leo. Sed rutrum pulvinar tristique. In suscipit consequat est in posuere. Aliquam in enim eu enim fringilla euismod sed eu justo. In blandit porta nunc.'
	  },
	   { 
	 	title: 'Prueba de titulo 4',
	 	date: 'Publicado el dia '+moment().format("LL"),
	 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula arcu, posuere sed tellus vel, scelerisque convallis dolor. Curabitur non rhoncus sem. Integer eu turpis a purus interdum ultrices eget nec neque. Curabitur nec lectus volutpat, mattis urna nec, cursus risus. Nulla ante purus, blandit ut nibh ut, consectetur rutrum mi. Donec scelerisque et tortor quis efficitur. Praesent imperdiet turpis eros, eu vestibulum magna ullamcorper nec. Nullam risus est, tincidunt eu metus auctor, eleifend interdum tellus. Pellentesque gravida urna at neque pretium, vitae consequat odio efficitur. In nec facilisis leo. Sed rutrum pulvinar tristique. In suscipit consequat est in posuere. Aliquam in enim eu enim fringilla euismod sed eu justo. In blandit porta nunc.'
	  },
	   { 
	 	title: 'Prueba de titulo 5',
	 	date: 'Publicado el dia '+moment().format("LL"),
	 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula arcu, posuere sed tellus vel, scelerisque convallis dolor. Curabitur non rhoncus sem. Integer eu turpis a purus interdum ultrices eget nec neque. Curabitur nec lectus volutpat, mattis urna nec, cursus risus. Nulla ante purus, blandit ut nibh ut, consectetur rutrum mi. Donec scelerisque et tortor quis efficitur. Praesent imperdiet turpis eros, eu vestibulum magna ullamcorper nec. Nullam risus est, tincidunt eu metus auctor, eleifend interdum tellus. Pellentesque gravida urna at neque pretium, vitae consequat odio efficitur. In nec facilisis leo. Sed rutrum pulvinar tristique. In suscipit consequat est in posuere. Aliquam in enim eu enim fringilla euismod sed eu justo. In blandit porta nunc.'
	  },
	   { 
	 	title: 'Prueba de titulo 6',
	 	date: 'Publicado el dia '+moment().format("LL"),
	 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula arcu, posuere sed tellus vel, scelerisque convallis dolor. Curabitur non rhoncus sem. Integer eu turpis a purus interdum ultrices eget nec neque. Curabitur nec lectus volutpat, mattis urna nec, cursus risus. Nulla ante purus, blandit ut nibh ut, consectetur rutrum mi. Donec scelerisque et tortor quis efficitur. Praesent imperdiet turpis eros, eu vestibulum magna ullamcorper nec. Nullam risus est, tincidunt eu metus auctor, eleifend interdum tellus. Pellentesque gravida urna at neque pretium, vitae consequat odio efficitur. In nec facilisis leo. Sed rutrum pulvinar tristique. In suscipit consequat est in posuere. Aliquam in enim eu enim fringilla euismod sed eu justo. In blandit porta nunc.'
	  },

	 ];
	 //console.log(posts);
	 posts.forEach((item, index) => {
	 	var post = `
	 		<article class="post">
				<h2>${item.title}</h2>
				<span class="date">${item.date}</span>
				<p>
					${item.content}
				</p>
				<a href="#" class="button-more">Leer mas</a>

			</article>

	 	`;
	 	$("#posts").append(post);

	 });



});