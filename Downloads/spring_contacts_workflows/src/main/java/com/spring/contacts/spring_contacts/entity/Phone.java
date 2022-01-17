package com.spring.contacts.spring_contacts.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "phones")
@Data
public class Phone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;



    @Column(name = "phone")
    private String phone;

    @Column(name = "country_by_code")
    private String country_by_code;

    @JsonBackReference
    @ManyToOne(cascade =CascadeType.ALL,optional = false)
    private Contact contact;


}
