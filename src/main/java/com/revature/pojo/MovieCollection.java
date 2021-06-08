package com.revature.pojo;

import javax.persistence.Entity;
import java.util.HashSet;

//should this be an entity?
@Entity
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

        int id = 0;
        for(Movie m : movieCollection){
            if(m.getId() > id)
                id = m.getId();//must have value higher than all other movie ids in collection

            //make sure movie isn't already in user's collection
            if(m.getTitle().equals(movie.getTitle()) && m.getYear() == movie.getYear())
                return;
        }
        id++;//sets to highest id value
        movie.setId(id);

        int initSize = movieCollection.size();
        movieCollection.add(movie);

        if(initSize < movieCollection.size()){
            //TODO: add to database
        }
    }

    //should only be called from MovieCollectionDAO
    public void removeMovie(Movie movie){
        int initSize = movieCollection.size();

        for(Movie m : movieCollection){
            if(m.getTitle().equals(movie.getTitle()) && m.getYear() == movie.getYear()){
                movie.setId(m.getId());
            }
        }

        movieCollection.remove(movie);//id must match if movie is to be removed from collection

        if(initSize > movieCollection.size()){
            //TODO:remove from database
        }
    }

    //should only be called from MovieCollectionDAO
    public HashSet<Movie> getMovieCollection(){
        return movieCollection;
    }


    public Movie getMovieByID(int id){
        for(Movie m : movieCollection){
            if(m.getId() == id){
                return m;
            }
        }
        return null;
    }


    public Movie getMovieByTitle(String title){
        for(Movie m : movieCollection){
            if(m.getTitle().equals(title)){
                return m;
            }
        }
        return null;
    }



}
