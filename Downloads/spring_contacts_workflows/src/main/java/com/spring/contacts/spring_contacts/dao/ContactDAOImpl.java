package com.spring.contacts.spring_contacts.dao;

import com.spring.contacts.spring_contacts.entity.Contact;
import com.spring.contacts.spring_contacts.entity.Tag;
import com.spring.contacts.spring_contacts.models.User;
import com.spring.contacts.spring_contacts.security.MyUserDeatils;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;


@Repository
public class ContactDAOImpl implements ContactDAO {

    @Autowired
    private EntityManager entityManager;
    private MyUserDeatils myUserDeatils;

    @Override
    public List<Contact> getAllContacts(String username) {
        Session session=entityManager.unwrap(Session.class);
       // Query query=entityManager.createQuery(" from Contact ",Contact.class);
//        System.out.println(username);

        Query query= session.createQuery("select contact from Contact contact where contact.user.userName=:userName");
        query.setParameter("userName",username );
        List<Contact> contacts = query.getResultList();
        // System.out.println(contacts.size());

       // List<Contact> allcontacts = session.createQuery("from Contact ",Contact.class).getResultList();

        return contacts;
    }



    @Override
    public Contact getContact(int id,String userNamee) {
        //Contact contact = entityManager.find(Contact.class,id);
        Session session=entityManager.unwrap(Session.class);
        // Query query=entityManager.createQuery(" from Contact ",Contact.class);
        Query  query = session.createQuery("select contact from Contact contact"
                                                + " WHERE contact.id =:contactid"
                                                + " and contact.user.userName=:userNAME " );
        query.setParameter("contactid", id);
        query.setParameter("userNAME", userNamee);
        List<Contact> contacts = query.getResultList();

        if(contacts!=null){
            return contacts.get(0);
        }

        return null ;
    }

    @Override
    public void saveContact(Contact contact,String userName ) {

        Session session =entityManager.unwrap(Session.class);


        contact.setUser(returnUserByUserName(userName,session));
        System.out.println(contact);

        session.saveOrUpdate(contact);

    }

    @Override
    public void deleteContact(int id,String username) {
        //System.out.println(id);
        Session session =entityManager.unwrap(Session.class);



            Query querycont = entityManager.createQuery("delete from Contact  " + " WHERE id =:contactid");
            //Query querycont=entityManager.createQuery("select id from Contact " + " WHERE id =:contactid ");
            querycont.setParameter("contactid", id);
            // querycont.setParameter("userName",username);
            // List<Contact> contacts = querycont.getResultList();


            querycont.executeUpdate();

    }


    private User returnUserByUserName(String userName,Session session){

        Query query = session.createQuery("select  user from User user where user.userName=:userName");
        query.setParameter("userName",userName);
        List<User> user = query.getResultList();
        return user.get(0);

    }

    private boolean returnUseridExistance(String userName,Session session,int id){

        Query query= session.createQuery("select contact from Contact contact where contact.user.userName=:userName");
        query.setParameter("userName",userName );
        List<Contact> contacts = query.getResultList();
        Contact cont=contacts.get(0);

        if (cont.getId()==id){
            return true;
        }

        return false;
    }

}
