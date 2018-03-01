var generateID = makeCounter();

var makeUser = function (name, booksRead,favoriteBooks,booksToRead)
{
	return {
		name: name,
		booksRead: booksRead,
		favoriteBooks: favoriteBooks,
		booksToRead: booksToRead
	};
}


var makeBook = function (title,author,description, genre, releaseYear,coverPage,recommendations)
{
	return {
		id: generateID(),
		title: title,
		author: author,
		description: description,
		genre: genre,
		releaseYear: releaseYear,
		coverPage: coverPage,
		recommendations: recommendations
	};
}



var book1 = makeBook("The 7 Habits of Highly Effective People","Stephen R. Covey","This is one of the rare books that has influenced presidents, CEOs, educators, and individuals all over the world not only to improve their businesses and careers but to live with integrity, service, dignity, and success in all areas of life.","Self-Help", 1989,"The7HabitsofHighlyEffectivePeople.jpg", ["Livia said: Fantastic examples of how the habits can be applied in the workplace as well as at home.", "Shatha said: What a wonderful book! It helps others to focus on specific keys to be successful."]);

var book2 = makeBook("The Autobiography of Benjamin Franklin","Benjamin Franklin","Few men could compare to Benjamin Franklin. Virtually self-taught, he excelled as an athlete, a man of letters, a printer, a scientist, a wit, an inventor, an editor, and a writer, and he was probably the most successful diplomat in American history. David Hume hailed him as the first great philosopher and great man of letters in the New World.","Autobiography",1791,"BenjaminFranklin.jpeg",["Livia said: A brief account of a brilliant man's life, in a brief yet orderly form."]);


var book3 = makeBook("A Hebrew Female in My Heart","Khawlah Hamdy", "In the heart of a neighborhood in the Island of dreams Djerba , Reem, a young  orphan Muslim girl, lives within a Jewish family, but due to certain circumstances, she is forced to leave Tunisia  and moves to south Lebanon to live with a Jewish family as well. There, she becomes a friend with Nada, the Jewish tolerant stubborn girl who is engaged to Ahmad the Muslim mujahid for Allah' sake . Their relation is based on one question, whose religion is the right one ?", "Novel", 2012, "AHebrewFemaleinMyHeart.jpeg",["Shatha said: I highly recommend the book to all people."]);

//var book4 = makeBook("Mornings in Jenin","Susan Abulhawa","touching","novel",2015,"MorningsinJenin.jpeg",[]);
window.allBooks = [book1,book2,book3];

var user1 = makeUser("Shatha",[],[book1,book3],[book2]);

window.newImgSrc="newimg";
function addBook()
{
	var allBooks = JSON.parse(localStorage.getItem("allBooks"));
	//window.allBooks.push("hellooooooo")
	console.log(window.allBooks);
	var title = $("#txtTitle").val();
	var author = $("#txtAuthor").val();
	var description = $("#txtDescription").val();
	var genre = $("#txtGenre").val();
	var releaseYear = $("#txtReleaseYear").val();
	var coverPage = $("#txtCoverPage").val();

	var newBook = makeBook(title,author,description,genre,releaseYear,coverPage,[]);
	window.allBooks.push(newBook);
	localStorage.setItem("allBooks", JSON.stringify(allBooks));

	var newImgSrc = localStorage.getItem("newImgSrc");
	newImgSrc = newBook.coverPage;
	localStorage.setItem("newImgSrc", newImgSrc);

	alert("The Book has been added successfully :)");
	
}

window.recom1;
function addRecommendation()
{
	var imgSrc = localStorage.getItem("imgSrc");
	var recom1 = localStorage.getItem("recom1");

	var bookIndex = findBookIndex(imgSrc);
	var recommendation = $("#txtRecom").val();
	allBooks[bookIndex].recommendations.push(recommendation);

	var $recomPar = $("<p></p>");
    $recomPar.attr("class", "info");
    $recomPar.html("<b>"+recommendation+"</b>");
    $("#recomPar").append($recomPar);
}

function findBookIndex(imgSrc)
{
	var bookIndex;
	for(var i=0; i<allBooks.length; i++)
	{
		if(allBooks[i].coverPage === imgSrc)
		{
			bookIndex = i;
			break;
		}
	}
	return bookIndex;
}

window.imgSrc = "non";

$(".someClass").on("click", function()
	{
		var imgSrc = localStorage.getItem("imgSrc");
		var bookName = $(this).attr('id');
		var bookIndex;
		for(var i=0; i<allBooks.length; i++)
		{
			if(allBooks[i].title === bookName)
			{
				bookIndex = i;
				break;
			}
		}
		imgSrc = allBooks[bookIndex].coverPage;
		localStorage.setItem("imgSrc", imgSrc);
	});



///////////////

function makeCounter() 
{
  var count = 1;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}



