package com.example.weblibraryapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;

@AllArgsConstructor
@Getter
public class AuthResponse implements Serializable {

    private static final long serialVersionUID = 1L;

    private final String token;
}
