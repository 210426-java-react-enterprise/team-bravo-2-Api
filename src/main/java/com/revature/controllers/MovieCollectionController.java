package com.revature.controllers;

import com.revature.daos.MovieCollectionDAO;
import com.revature.pojo.Movie;
import com.revature.pojo.MovieCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.*;

//https://www.geeksforgeeks.org/how-to-create-a-rest-api-using-java-spring-boot/

/**
 * This class should be deprecated, as it's utilized in the API.
 */
@RestController
@RequestMapping(path = "/movie")
public class MovieCollectionController {

    private final MovieCollectionDAO movieCollectionDAO;

    private Logger logger = LoggerFactory.getLogger(MovieCollectionController.class);

    @Autowired
    public MovieCollectionController(MovieCollectionDAO movieCollectionDAO){
        this.movieCollectionDAO = movieCollectionDAO;
    }

    // Implementing a GET method, to get the user's movie collection
    @GetMapping(produces = APPLICATION_JSON_VALUE, value = "/getAll")
    public MovieCollection getMovieCollection(){
        return movieCollectionDAO.getAllMovies();
    }


    // Implementing a GET method, to get a movie from user's collection
    @GetMapping(produces = APPLICATION_JSON_VALUE)
    //@GetMapping("/getMovie_id/{id}")
    public ResponseEntity<Movie> getMovieByID(@PathVariable int id){
        return new ResponseEntity<>(movieCollectionDAO.getMovieByID(id), HttpStatus.OK);
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    //@GetMapping("/getMovie_title/{title}")
    public ResponseEntity<Movie> getMovieByTitle(@PathVariable String title){
        return new ResponseEntity<>(movieCollectionDAO.getMovieByTitle(title), HttpStatus.OK);
    }


    //implementing a POST method, to add a movie to user's collection
    @PostMapping(produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
    public /*ResponseEntity<Object>*/ MovieCollection addMovie(@RequestBody Movie movie){

        int id = movieCollectionDAO.getAllMovies().getMovieCollection().size() + 1;

        movie.setId(id);
        movieCollectionDAO.addMovieToCollection(movie);

        /*URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(movie.getId())
                .toUri();

        return ResponseEntity.created(location).build();*/

        return movieCollectionDAO.getAllMovies();
    }


    //implement a DELETE method, to remove a movie from user's collection
    @DeleteMapping(consumes = APPLICATION_JSON_VALUE)
    public MovieCollection removeMovie(@RequestBody Movie movie){
        movieCollectionDAO.deleteMovieFromCollection(movie);
        return movieCollectionDAO.getAllMovies();
    }




}
