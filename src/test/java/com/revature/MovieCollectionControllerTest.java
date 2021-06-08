package com.revature;

import com.revature.controllers.MovieCollectionController;
import com.revature.daos.MovieCollectionDAO;
import com.revature.pojo.Movie;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MovieCollectionController.class)
public class MovieCollectionControllerTest {

    @Autowired
    MovieCollectionController movieCollectionController;

    @Autowired
    MockMvc mockMvc;

    @MockBean
    MovieCollectionDAO movieCollectionDAO;

    @BeforeAll
    static void setUp(){

    }


    @AfterAll
    static void tearDown(){

    }


    @Test
    public void getMovieByID_test() throws Exception {

        Movie movie1 = new Movie(1, "Blade Runner", 1982);
        Movie movie2 = new Movie(2 ,"The Dark Crystal", 1982);
        Movie movie3 = new Movie(3, "The Thing", 1982);
        Movie movie4 = new Movie(4, "Whiplash", 2014);

        //movieCollectionController.addMovie(movie1);
        /*movieCollectionController.addMovie(movie2);
        movieCollectionController.addMovie(movie3);
        movieCollectionController.addMovie(movie4);*/

        when(movieCollectionDAO.getMovieByID(1)).thenReturn(movie1);
        when(movieCollectionDAO.getMovieByID(2)).thenReturn(movie2);
        when(movieCollectionDAO.getMovieByID(3)).thenReturn(movie3);
        when(movieCollectionDAO.getMovieByID(4)).thenReturn(movie4);

        //assertEquals(3, movieCollectionController.getMovieCollection().getMovieCollection().size());
        //assertEquals(1, movieCollectionController.getMovieCollection().);

        mockMvc.perform(MockMvcRequestBuilders.get("/getMovie_id/1"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("Blade Runner"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.year").value(1982))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders.get("/getMovie_id/2"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("The Dark Crystal"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.year").value(1982))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders.get("/getMovie_id/3"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("The Thing"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.year").value(1982))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders.get("/getMovie_id/4"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("Whiplash"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.year").value(2014))
                .andExpect(status().isOk());

        /*assertTrue(movieCollectionController.getMovieCollection().getMovieCollection().contains(movie1));
        assertTrue(movieCollectionController.getMovieCollection().getMovieCollection().contains(movie2));
        assertTrue(movieCollectionController.getMovieCollection().getMovieCollection().contains(movie3));*/
    }


    @Test
    public void getMovieByTitle_test() throws Exception {
        Movie movie1 = new Movie(1, "Blade Runner", 1982);
        Movie movie2 = new Movie(4, "Whiplash", 2014);

        when(movieCollectionDAO.getMovieByTitle("Blade+Runner")).thenReturn(movie1);
        when(movieCollectionDAO.getMovieByTitle("Whiplash")).thenReturn(movie2);

        mockMvc.perform(MockMvcRequestBuilders.get("/getMovie_title/Blade+Runner"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("Blade Runner"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.year").value(1982))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders.get("/getMovie_title/Whiplash"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("Whiplash"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.year").value(2014))
                .andExpect(status().isOk());

    }

}
