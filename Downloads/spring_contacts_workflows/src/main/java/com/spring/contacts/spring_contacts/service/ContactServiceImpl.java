package com.spring.contacts.spring_contacts.service;

import com.spring.contacts.spring_contacts.dao.ContactDAO;
import com.spring.contacts.spring_contacts.entity.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactDAO contactDAO;



    @Override
    @Transactional
    public List<Contact> getAllContacts(String username) {
        return contactDAO.getAllContacts(username);
    }

    @Override
    @Transactional
    public Contact getContact(int id,String userNamee) {
        return contactDAO.getContact(id,userNamee);
    }

    @Override
    @Transactional
    public void saveContact(Contact contact,String username) {
        contactDAO.saveContact(contact,username);
    }

    @Override
    @Transactional
    public void deleteContact(int id,String username) {
        contactDAO.deleteContact(id,username);
    }


    //SEARCH



}
