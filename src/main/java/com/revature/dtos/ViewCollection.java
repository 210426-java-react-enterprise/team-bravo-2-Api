package com.revature.dtos;

import com.revature.pojo.AppUser;
import com.revature.pojo.Movie;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;

/*
Returns List or collections rendered to client view (list of movies)
View button for James and Thomas
needs Authentication
-JWT’s
handle if empty
-display no collections message
 */

@RestController
@RequestMapping(value = "/movies", method = RequestMethod.GET)
public class ViewCollection {

    /*
    Example:
    http://www.omdbapi.com/?apikey=[your_api_key]&t=[movie-title]&y=[movie-year]
    replace [movie-title] with the name of a movie, '+' between each word
    replace [movie-year] with year of film's release; this might be optional

    movie-title = Blade Runner
    movie-year = 1982

    necessary info from query (not using IMDB-id, will be generating our own serials):
    {
        "Title": "Blade Runner",
        "Year": "1982",
        "Rated": "R",
        "Runtime": "117 min",
        "Genre": "Action, Sci-Fi, Thriller",
        "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
        "Production": "Blade Runner Partnership, Ladd Company"
    }
     */

    @Value("${api-key}") //checks application.properties?
    private String apiKey;

    private String movieTitle;

    private int movieYear;//restrict to 4 integers

    AppUser appUser;

    public ViewCollection(AppUser appUser){
        this.appUser = appUser;
    }

    //@RequestMapping("{}")
    public Movie searchUserMovieList(String title, int year){
        movieYear = year;
        movieTitle = formatTitle(title);

        Movie searchedMovie = new Movie(title, year);

        StringBuilder query = new StringBuilder();
        query.append("http://www.omdbapi.com/?apikey=");
        query.append(apiKey).append("&t=");
        query.append(movieTitle).append("&y=").append(movieYear);

        //execute query, map certain results to a new Movie(), then compare title/year to what's in user's movieList.

        HashSet<Movie> movieList = appUser.getFilmList();

        if(movieList.contains(searchedMovie)){

        }


        return searchedMovie;//temp
    }

    /**
     *
     * @param title String
     * @return a string that adds '+' between the words in the title
     */
    private String formatTitle(String title){

        title = title.trim();
        title = title.replaceAll(" ", "+");

        return title;
    }

}
