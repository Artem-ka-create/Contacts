package com.spring.contacts.spring_contacts.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "emails")
@Data
public class Email {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;


    @Column(name = "email")
    private String email;

    @JsonBackReference
    @ManyToOne(cascade =CascadeType.ALL,optional = false)
    private Contact contact;


}
