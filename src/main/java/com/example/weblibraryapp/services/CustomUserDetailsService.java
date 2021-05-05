package com.example.weblibraryapp.services;


import com.example.weblibraryapp.entities.UserEntity;
import com.example.weblibraryapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity  = repository.findByUsername(username);
        return new org.springframework.security.core.userdetails.User(
                userEntity.getUsername(),userEntity.getPassword(),new ArrayList<>());
        //this spring security User class validates user info (username, password)
    }
}
