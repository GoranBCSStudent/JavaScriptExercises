var moviesDB =[
	{
		genre:'thriller',movies: [        
		{title:'the usual suspects', releaseDate:'1995' } ,
		{title:'the inside man ', releaseDate:'2006' } ,
		{title:'seven', releaseDate:'1995' } ,
		{title:'shutter island', releaseDate:'1995' } ,
		{title:'inception', releaseDate:'2010' }
		]
	},   
	{
		genre:'action',movies: [        
		{title:'the dark knight', releaseDate:'2008' } ,                 
		{title:'the matrix', releaseDate:'1999' } ,                 
		{title:'the bourne identity', releaseDate:'2002' } ,                 
		{title:'mad max fury road', releaseDate:'2015' }
		]
	},
	{
		genre:'comedy',movies: [
		{title:'shaun of the dead', releaseDate:'2004' } ,
		{title:'hot fuzz ', releaseDate:'2007' } ,
		{title:'trading places', releaseDate:'1983' } ,
		]
	}
]
var getMovies = inGenre => {
	var genreOutput = ''
	var moviesCount = 0, maxMoviesGenre = ''

	moviesDB.forEach(function(genreObj) {
		if (genreObj.movies.length > moviesCount) {
			moviesCount = genreObj.movies.length
			maxMoviesGenre = genreObj.genre
		} 
		if (genreObj.genre == inGenre) {
			genreOutput += `There are ${genreObj.movies.length} movies in the category of ${inGenre} and these are:\n`
			genreObj.movies.forEach(function(movie) {				
				genreOutput += `TITLE           : ${movie.title}\n`
				genreOutput += `year of release : ${movie.releaseDate}\n`
			})
		}		
	})	
	console.log(`The genre with the highest number of movie is ${maxMoviesGenre}`)
	console.log(genreOutput)
}

getMovies('action')