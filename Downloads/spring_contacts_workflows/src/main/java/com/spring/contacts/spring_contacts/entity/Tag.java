package com.spring.contacts.spring_contacts.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tag")
@Data
public class Tag {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "label")
    private String label;

    @Column(name = "colour")
    private String colour;


    @JsonBackReference
    @ManyToOne(cascade =CascadeType.ALL,optional = false)
    private Contact contact;



}
