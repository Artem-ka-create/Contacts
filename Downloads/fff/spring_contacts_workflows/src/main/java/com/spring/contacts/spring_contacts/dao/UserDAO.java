package com.spring.contacts.spring_contacts.dao;

import com.spring.contacts.spring_contacts.models.User;
import org.springframework.data.repository.CrudRepository;


public interface UserDAO  {
    public User findByEmailIdIgnoreCase(String emailId);

}
