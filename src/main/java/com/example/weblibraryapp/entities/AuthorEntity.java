package com.example.weblibraryapp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuthorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long authorId;

    @Column(nullable = false)
    private String name;

    private String bio;

    @OneToMany(mappedBy = "authorEntity", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<BookEntity> bookEntities;
}
