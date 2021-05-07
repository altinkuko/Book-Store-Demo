package com.example.weblibraryapp.controllers;

import com.example.weblibraryapp.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @Autowired
    private BookService bookService;

    @GetMapping("/")
    String homePage(Model model) {
        model.addAttribute("books", this.bookService.getAllBooks(Pageable.unpaged()));
        return "index"; }
}
