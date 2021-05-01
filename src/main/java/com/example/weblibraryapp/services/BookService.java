package com.example.weblibraryapp.services;

import com.example.weblibraryapp.dto.BookDTO;
import javassist.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BookService {

    Page<BookDTO> getAllBooks(Pageable pageable);

    BookDTO create(BookDTO bookDTO);

    BookDTO update(BookDTO bookDTO);

    void delete(Long id);

    BookDTO getById(Long id);

}
