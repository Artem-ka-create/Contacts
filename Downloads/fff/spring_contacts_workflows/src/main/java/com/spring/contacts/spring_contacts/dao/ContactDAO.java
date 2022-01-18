package com.spring.contacts.spring_contacts.dao;



import com.spring.contacts.spring_contacts.entity.Contact;

import java.util.List;

public interface ContactDAO {

    public List<Contact> getAllContacts(String username);

    public Contact getContact(int id,String userNamee);

    public void saveContact(Contact contact,String username);

    public void deleteContact(int id,String username);



}
