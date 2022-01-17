package com.spring.contacts.spring_contacts.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.spring.contacts.spring_contacts.models.User;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "contacts")
@Data
public class Contact {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "city")
    private String city;

    @Column(name = "job")
    private String job;

    @Column(name = "company")
    private String company;

    @Column(name = "adress")
    private String adress;

    @Column(name = "date_of_birth")
    private String date_of_birth;




    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    private User user;


    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "contact",fetch = FetchType.LAZY,orphanRemoval = true)
    private List<SocialPage> social_page_link;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "contact",fetch = FetchType.LAZY,orphanRemoval = true)
    private List<Email> email = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "contact",fetch = FetchType.LAZY,orphanRemoval = true)
    private List<Phone> phone_number = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "contact",fetch = FetchType.LAZY,orphanRemoval = true)
    private List<Tag> tags = new ArrayList<>();




    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", city='" + city + '\'' +
                ", job='" + job + '\'' +
                ", company='" + company + '\'' +
                ", adress='" + adress + '\'' +
                ", date_of_birth='" + date_of_birth + '\'' +
                '}';
    }
}
