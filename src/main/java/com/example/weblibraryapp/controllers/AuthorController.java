package com.example.weblibraryapp.controllers;

import com.example.weblibraryapp.dto.AuthorDTO;
import com.example.weblibraryapp.services.AuthorService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin")
public class AuthorController {

    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }
    @GetMapping("/authors")
    public ResponseEntity<Page<AuthorDTO>> getAllAuthors(@PageableDefault(page = 0, size = 5,
            sort = "name", direction = Sort.Direction.DESC) Pageable pageable){
        return ResponseEntity.ok(this.authorService.getAllAuthors(pageable));
    }
    @GetMapping("/author/{id}")
    public ResponseEntity<AuthorDTO> getAuthorById(@PathVariable("id") final long id){
        return ResponseEntity.ok(this.authorService.getAuthorById(id));
    }

    @PostMapping("/author")
    public ResponseEntity<AuthorDTO> createAuthor(@RequestBody final AuthorDTO authorDTO){
        return ResponseEntity.ok(this.authorService.create(authorDTO));
    }

    @PutMapping("/author")
    public ResponseEntity<AuthorDTO> updateAuthor(@RequestBody final AuthorDTO authorDTO){
        return ResponseEntity.ok(this.authorService.update(authorDTO));
    }

    @DeleteMapping("/author/{id}")
    public ResponseEntity<Void> deleteAuthor(@PathVariable("id") final long id){
        this.authorService.delete(id);
        return ResponseEntity.ok().build();
    }

}
