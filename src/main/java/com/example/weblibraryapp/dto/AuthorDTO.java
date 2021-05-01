package com.example.weblibraryapp.dto;

import com.example.weblibraryapp.entities.BookEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthorDTO {

    private Long authorId;
    private String name;
    private String bio;
    private List<BookEntity> bookEntities;
}
