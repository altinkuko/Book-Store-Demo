package com.example.weblibraryapp.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;

    @Column(nullable = false)
    private String title;

    private String description;

    private String imgUrl;


    @ManyToOne
    @JoinColumn(name = "authorId")
    private AuthorEntity authorEntity;

    @ManyToMany
    @JsonIgnore
    @JoinTable(name = "book_categories", joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private List<CategoryEntity> categories;

}
