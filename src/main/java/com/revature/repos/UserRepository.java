package com.revature.repos;

import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    //@Query("select u from user where u.username = ?1")
    User findByUsername(String username);

}

//provides a lot of CRUD operations by default, and one can use it to create their own query methods as well.