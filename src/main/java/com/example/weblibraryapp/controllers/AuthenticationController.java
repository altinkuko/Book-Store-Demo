package com.example.weblibraryapp.controllers;


import com.example.weblibraryapp.dto.AuthRequest;
import com.example.weblibraryapp.dto.AuthResponse;
import com.example.weblibraryapp.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;


    @PostMapping("/login")
    public ResponseEntity<?> generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
        } catch (Exception ex){
            throw new Exception("invalid username/password");
        }

        final String token = jwtUtil.generateToken(authRequest.getUsername());

        return ResponseEntity.ok(new AuthResponse(token));
    }
}
