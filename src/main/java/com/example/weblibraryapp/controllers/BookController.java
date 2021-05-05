package com.example.weblibraryapp.controllers;

import com.example.weblibraryapp.dto.BookDTO;
import com.example.weblibraryapp.services.BookService;
import javassist.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin")
public class BookController {

    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books")
    public ResponseEntity<Page<BookDTO>> getAllBooks(Pageable pageable){
        return ResponseEntity.ok(bookService.getAllBooks(pageable));
    }

    @PostMapping("/book")
    public ResponseEntity<BookDTO> createABook(@RequestBody BookDTO bookDTO){
        return ResponseEntity.ok(bookService.create(bookDTO));
    }

    @PutMapping("/book")
    public ResponseEntity<BookDTO> updateBook(@RequestBody BookDTO bookDTO){
        return ResponseEntity.ok(bookService.update(bookDTO));
    }

    @DeleteMapping("/book/{id}")
    public ResponseEntity<Void> deleteBookById(@PathVariable("id") final long id) {
        this.bookService.delete(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/book/{id}")
    public ResponseEntity<BookDTO> getBookByID(@PathVariable("id") long id) {
        return ResponseEntity.ok(bookService.getById(id));
    }
}
