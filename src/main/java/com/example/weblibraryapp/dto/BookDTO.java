package com.example.weblibraryapp.dto;

import com.example.weblibraryapp.entities.AuthorEntity;
import com.example.weblibraryapp.entities.CategoryEntity;
import lombok.*;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {

    private Long bookId;
    private String title;
    private String description;
    private String imgUrl;
    private AuthorEntity authorEntity;
    private List<CategoryEntity> categories;


}
