package com.spring.contacts.spring_contacts.dao;

import com.spring.contacts.spring_contacts.models.User;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;
import java.util.Optional;

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    private EntityManager entityManager;


    public User findByEmailIdIgnoreCase(String emailId) {
        Session session=entityManager.unwrap(Session.class);
        Query query=session.createQuery("select user from User user where user.emailId=:email");
        query.setParameter("email",emailId);
        List<User> userList=query.getResultList();

        if (userList.size()==0){
            return null;
        } else {
            return userList.get(0);
        }


    }


}
