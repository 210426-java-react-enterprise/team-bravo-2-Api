package com.revature.controllers;

import java.util.List;
import java.util.Optional;

import com.revature.models.CollectionItem;
import com.revature.repos.CollectionItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CollectionItemController {

    @Autowired
    CollectionItemRepository collectionItemRepository;

    @PostMapping(value = "/createItem")
    public ResponseEntity<String> createItem(@RequestBody CollectionItem collectionItem){
        collectionItemRepository.save(collectionItem);
        return new ResponseEntity<String>("Item has been added successfully", HttpStatus.OK);
    }

    @GetMapping(value= "/retrieveCollection")
    public ResponseEntity<List<CollectionItem>> retrieveCollectionItems(){
        List<CollectionItem> CollectionItems = collectionItemRepository.findAll();
        return new ResponseEntity<CollectionItem>(collectionItem.get(), HttpStatus.OK);
    }



}
