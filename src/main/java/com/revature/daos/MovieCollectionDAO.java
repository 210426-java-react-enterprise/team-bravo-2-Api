package com.revature.daos;

import com.revature.pojo.Movie;
import com.revature.pojo.MovieCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

/**
 * The Service, to be mocked in testing.
 */
@Repository
@Service
public class MovieCollectionDAO {

    private static MovieCollectionDAO instance;
    private static MovieCollection movieCollection;
    private static Logger logger;

    private MovieCollectionDAO(){
        movieCollection = new MovieCollection();
        logger = LoggerFactory.getLogger(MovieCollectionDAO.class);
    }


    private MovieCollectionDAO(MovieCollection mc){
        movieCollection = mc;
        logger = LoggerFactory.getLogger(MovieCollectionDAO.class);
    }


    public static MovieCollectionDAO getInstance(){
        if(instance == null){
            instance = new MovieCollectionDAO();
        }

        return instance;
    }


    public static MovieCollectionDAO getInstance(MovieCollection mc){
        if(instance == null){
            instance = new MovieCollectionDAO(mc);
        }

        return instance;
    }


    public MovieCollection addMovieToCollection(Movie movie){
        movieCollection.addMovie(movie);
        return movieCollection;
    }


    public MovieCollection deleteMovieFromCollection(Movie movie){
        movieCollection.removeMovie(movie);
        return movieCollection;
    }


    public MovieCollection getAllMovies(){
        return movieCollection;
    }


    public Movie getMovieByID(int id){return movieCollection.getMovieByID(id);}


    public Movie getMovieByTitle(String title){return movieCollection.getMovieByTitle(title);}

}
