package com.revature.controllers;


import com.revature.dtos.Credentials;
import com.revature.models.User;
import com.revature.repos.UserRepository;
import com.revature.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/user")
public class UserController {

    UserRepository userRepository;

//    @Autowired
//    UserService userService;

    @Autowired
    public UserController(UserRepository userRepository)
    {
        this.userRepository= userRepository;
    }

    @RequestMapping(value = Constants.SAVE_USER ,method = RequestMethod.POST)
        public void saveUser(@RequestBody Credentials credentials){
            userService.saveUser(credentials);
        }





    @GetMapping("/user/{userId}")
    public ResponseEntity<User> getUserByUsername(@RequestParam(required = true) String username) {
		User user = userRepository.findByUsername(username);
		return new ResponseEntity<User>(User, HttpStatus.OK);
    }

    @GetMapping("/tutorials/{id}")
    public ResponseEntity<User> getTutorialById(@PathVariable("id") long id) {
		//...
        return null;
    }

    @PostMapping("")
    public ResponseEntity<User> createTutorial(@RequestBody User tutorial) {
		//...
        return null;
    }

    @PutMapping("/tutorials/{id}")
    public ResponseEntity<User> updateTutorial(@PathVariable("id") long id, @RequestBody User tutorial) {
		//...
        return null;
    }

    @DeleteMapping("/tutorials/{id}")
    public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		//...
        return null;
    }

    @DeleteMapping("/tutorials")
    public ResponseEntity<HttpStatus> deleteAllTutorials() {
		//...
        return null;
    }

    @GetMapping("/tutorials/published")
    public ResponseEntity<List<User>> findByPublished() {
		//...
        return null;
    }
}