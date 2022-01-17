package com.spring.contacts.spring_contacts.service;

import com.spring.contacts.spring_contacts.dao.UserDAO;
import com.spring.contacts.spring_contacts.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {



    @Autowired
    UserDAO userDAO;

    @Override
    @Transactional
    public User findByEmailIdIgnoreCase(String emailId) {
        return userDAO.findByEmailIdIgnoreCase(emailId);
    }
}
