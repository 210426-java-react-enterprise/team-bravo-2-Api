package com.revature.pojo;

import jdk.nashorn.internal.objects.annotations.Getter;
import jdk.nashorn.internal.objects.annotations.Setter;

import javax.persistence.Entity;
import java.util.HashSet;

@Entity()
public class AppUser {

    private int id;//can be primitive, or primitive wrapper; including java.util.Date; java.sql.Date;
    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private String age;

    //holds film title and year of release.  Year is the key.
    private HashSet<Movie> filmList;

    private Role role;

    public AppUser() {
        this.id = 0;
    }

    public AppUser(String username, String password, String email, String firstName, String lastName, String age) {
        this.id = 0;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.filmList = null;
    }

    public AppUser(String username, String password, String email, String firstName, String lastName, String age,
                   HashSet<Movie> filmList) {
        this.id = 0;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.filmList = filmList;
    }

    @Getter
    public int getId() {
        return id;
    }

    @Getter
    public String getUsername() {
        return username;
    }

    @Getter
    public String getPassword() {
        return password;
    }

    @Getter
    public String getFirstName() {
        return firstName;
    }

    @Getter
    public String getLastName() {
        return lastName;
    }

    @Getter
    public String getEmail() {
        return email;
    }

    @Getter
    public String getAge() { return age; }

    @Getter
    public HashSet<Movie> getFilmList(){ return filmList; }

    /*
    There's movies in the user's film list that have personal additions, such as a rating, comment, etc.
    Then there's movies in the OMDb that are blank slates, save for title, year, genre, etc.

    What to do when matching Movie objects?
     */


    @Setter
    public int setId(int id) {
        this.id = id;
        return id;
    }

    @Setter
    public void setUsername(String username) {
        this.username = username;
    }

    @Setter
    public void setPassword(String password) {
        this.password = password;
    }

    @Setter
    public void setEmail(String email) {
        this.email = email;
    }

    @Setter
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Setter
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Setter
    public void setAge(String age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "AppUser{" +
                "id='" + id + '\'' +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dob='" + age + '\'' +
                '}';//should filmList be added here?
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public enum Role {
        ADMIN, BASIC_USER;
    }
}
