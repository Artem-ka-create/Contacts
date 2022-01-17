package com.spring.contacts.spring_contacts.controller;


import com.spring.contacts.spring_contacts.entity.Contact;
import com.spring.contacts.spring_contacts.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MyRestController {

    @Autowired
    public ContactService contactService;


    @GetMapping("/contacts")
    public List<Contact> getAllContacts(Authentication authentication){

        UserDetails userDetails =(UserDetails)authentication.getPrincipal();

        List<Contact> contacts=contactService.getAllContacts(userDetails.getUsername());
        //System.out.println("getall");
        return contacts;
    }

    @GetMapping("/contacts/{id}")
    private Contact getContact(@PathVariable int id,Authentication authentication){
        UserDetails userDetails =(UserDetails)authentication.getPrincipal();
        Contact cont=contactService.getContact(id,userDetails.getUsername());
        return cont;
    }

    @PostMapping(value = "/contacts" )
    public Contact addNewemployee(@RequestBody Contact contact,Authentication authentication){

        UserDetails userDetails =(UserDetails)authentication.getPrincipal();
        //System.out.println("ds");
        contactService.saveContact(contact,userDetails.getUsername());
        return contact;
    }

    @PutMapping("/contacts")
    public void updateContact(@RequestBody Contact contact,Authentication authentication){
        UserDetails userDetails =(UserDetails)authentication.getPrincipal();
        contactService.saveContact(contact,userDetails.getUsername());
    }


    @DeleteMapping("/contacts/{id}")
    @ResponseBody
    public ResponseData delete_Contact(@PathVariable int id,Authentication authentication){
        //System.out.println("delete "+id);
        UserDetails userDetails =(UserDetails)authentication.getPrincipal();
        contactService.deleteContact(id,userDetails.getUsername());

        return new ResponseData(200,"deleted contact with id: "+id) ;
    }












}
