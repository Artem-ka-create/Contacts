package com.spring.contacts.spring_contacts.security;

import com.spring.contacts.spring_contacts.models.User;
import com.spring.contacts.spring_contacts.models.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {


    @Autowired
    UserRepository userRepository;



    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
       Optional<User> user = userRepository.findByUserName(userName);


       user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + userName));


       return  user.map(MyUserDeatils::new).get();
    }
}
