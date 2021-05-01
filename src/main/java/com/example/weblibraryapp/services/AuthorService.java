package com.example.weblibraryapp.services;

import com.example.weblibraryapp.dto.AuthorDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface AuthorService {
    Page<AuthorDTO> getAllAuthors(Pageable pageable);

    AuthorDTO create (AuthorDTO authorDTO);

    AuthorDTO update (AuthorDTO authorDTO);

    void delete (Long id);

    AuthorDTO getAuthorById(long id);
}
