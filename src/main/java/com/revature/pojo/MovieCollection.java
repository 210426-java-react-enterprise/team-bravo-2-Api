package com.revature.pojo;

import java.util.ArrayList;
import java.util.HashSet;

public class MovieCollection {

    //HashSet ensures only unique entries will be in it
    private HashSet<Movie> movieCollection;


    /**
     * Create a new movie collection that is currently empty.
     */
    public MovieCollection(){
        super();
    }

    /**
     * Create a new movie collection based on a current collection.
     * @param movieCollection ArrayList<Movie>
     */
    public MovieCollection(HashSet<Movie> movieCollection){
        this.movieCollection = movieCollection;
    }

    //if size of list increases, then add to database, otherwise don't
    //should only be called from MovieCollectionDAO
    public void addMovie(Movie movie){
        int initSize = movieCollection.size();
        movieCollection.add(movie);

        if(initSize < movieCollection.size()){
            //add to database
        }
    }

    //should only be called from MovieCollectionDAO
    public void removeMovie(Movie movie){
        int initSize = movieCollection.size();
        movieCollection.remove(movie);

        if(initSize > movieCollection.size()){
            //remove from database
        }
    }

    //should only be called from MovieCollectionDAO
    public HashSet<Movie> getMovieCollection(){
        return movieCollection;
    }



}
