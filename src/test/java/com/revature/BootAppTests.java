package com.revature;

import com.revature.controllers.MovieCollectionController;
import com.revature.daos.MovieCollectionDAO;
import com.revature.pojo.Movie;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class BootAppTests {

	@Autowired
	private static MovieCollectionController movieCollectionController;

	@Autowired
	private static MovieCollectionDAO movieCollectionDAO;

	public static void setUp(){
		movieCollectionDAO = MovieCollectionDAO.getInstance();
		movieCollectionController = new MovieCollectionController(movieCollectionDAO);
	}

	public void tearDown(){
		movieCollectionDAO = null;
		movieCollectionController = null;
	}

	/*@Test
	void contextLoads() {
	}*/

	@Test
	public void addMovieTest(){
		Movie movie1 = new Movie("Blade Runner", 1982);
		Movie movie2 = new Movie("The Dark Crystal", 1982);
		Movie movie3 = new Movie("The Thing", 1982);
		Movie movie4 = new Movie("The Thing", 1982);

		movieCollectionController.addMovie(movie1);
		movieCollectionController.addMovie(movie2);
		movieCollectionController.addMovie(movie3);
		movieCollectionController.addMovie(movie4);

		assertEquals(3, movieCollectionController.getMovieCollection().getMovieCollection().size());
		assertTrue(movieCollectionController.getMovieCollection().getMovieCollection().contains(movie1));
		assertTrue(movieCollectionController.getMovieCollection().getMovieCollection().contains(movie2));
		assertTrue(movieCollectionController.getMovieCollection().getMovieCollection().contains(movie3));
	}

}
