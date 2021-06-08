package com.revature.pojo;

import jdk.nashorn.internal.objects.annotations.Getter;
import jdk.nashorn.internal.objects.annotations.Setter;
import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int id;//serial, primary key; not the same as IMDB key

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private int year;

    @Column(nullable = true)//can this be null?
    private String rated;//Not Rated, G, PG, PG-13, R, NC-17, X

    @Column(nullable = false)
    private int runtime;//in minutes

    @Column(nullable = true)
    private String genre;//could be more than 1 genre

    @Column(nullable = true)
    private String plot;

    @Column(nullable = true)
    private String production;

    private boolean forSale;
    private boolean owned;
    private boolean wanted;
    private String userComment;

    public Movie(String title){
        this.title = title;
    }

    public Movie(String title, int year){
        this.title = title;
        this.year = year;
    }

    public Movie(int id, String title, int year){
        this.id = id;
        this.title = title;
        this.year = year;
    }


    @Getter
    public String getUserComment() {
        return userComment;
    }

    @Setter
    public void setUserComment(String userComment) {
        this.userComment = userComment;
    }

    @Getter
    public int getId() {
        return id;
    }

    @Setter
    public void setId(int id) {
        this.id = id;
    }

    @Getter
    public String getTitle() {
        return title;
    }

    @Setter
    public void setTitle(String title) {
        this.title = title;
    }

    @Getter
    public int getYear() {
        return year;
    }

    @Setter
    public void setYear(int year) {
        this.year = year;
    }

    @Getter
    public String getRated() {
        return rated;
    }

    @Setter
    public void setRated(String rated) {
        this.rated = rated;
    }

    @Getter
    public String getGenre() {
        return genre;
    }

    @Setter
    public void setGenre(String genre) {
        this.genre = genre;
    }

    @Getter
    public String getPlot() {
        return plot;
    }

    @Setter
    public void setPlot(String plot) {
        this.plot = plot;
    }

    @Getter
    public String getProduction() {
        return production;
    }

    @Setter
    public void setProduction(String production) {
        this.production = production;
    }

    @Getter
    public boolean getForSale() {
        return forSale;
    }

    @Setter
    public void setForSale(boolean forSale) {
        this.forSale = forSale;
    }

    @Getter
    public boolean getOwned() {
        return owned;
    }

    @Setter
    public void setOwned(boolean owned) {
        this.owned = owned;
    }

    @Getter
    public boolean getWanted() {
        return wanted;
    }

    @Setter
    public void setWanted(boolean wanted) {
        this.wanted = wanted;
    }
}
