package com.revature.dtos;

import com.revature.pojo.AppUser;
import com.revature.pojo.Movie;

import java.util.HashSet;

public class AddMovie {




    public boolean addFilm(AppUser appUser, Movie film){

        HashSet<Movie> movieList = appUser.getFilmList();
        if(!movieList.contains(film)){
            movieList.add(film);
            return true;
        }

        return false;//if not added
    }

}
