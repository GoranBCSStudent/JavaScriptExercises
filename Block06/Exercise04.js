function addToList (arrIn) {
	var i = 0
	arrIn.forEach(function(ele) {
		obj = {}
		obj['title'] = ele
		obj['id'] = i
		movieList.push(obj)
		i++
	})
}
movieList = []
var movies = ['matrix','the dark knight','a beautiful mind','american pie']
addToList(movies)
console.log(movieList)
