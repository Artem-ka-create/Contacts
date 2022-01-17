package com.spring.contacts.spring_contacts.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "social_pages")
@Data
public class SocialPage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "social_page_url")
    private String social_page_url;

    @Column(name = "social_apl")
    private String social_apl;



    @JsonBackReference
    @ManyToOne(cascade =CascadeType.ALL,optional = false)
    private Contact contact;



}
