package com.spring.contacts.spring_contacts.service;

import com.spring.contacts.spring_contacts.entity.Contact;

import java.util.List;

public interface ContactService {



    public List<Contact> getAllContacts(String username);

    public Contact getContact(int id,String userNamee);

    public void saveContact(Contact contact,String username);

    public void deleteContact(int id,String username);

}
