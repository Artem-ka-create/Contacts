package com.spring.contacts.spring_contacts.service;

import com.spring.contacts.spring_contacts.models.User;

public interface UserService {

        public User findByEmailIdIgnoreCase(String emailId);
    }


