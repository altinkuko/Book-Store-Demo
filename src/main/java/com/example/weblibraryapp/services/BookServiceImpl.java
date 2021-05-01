package com.example.weblibraryapp.services;

import com.example.weblibraryapp.dto.BookDTO;
import com.example.weblibraryapp.entities.BookEntity;
import com.example.weblibraryapp.errors.ErrorMessages;
import com.example.weblibraryapp.errors.NotFound;
import com.example.weblibraryapp.mappers.BookMapper;
import com.example.weblibraryapp.repositories.AuthorRepository;
import com.example.weblibraryapp.repositories.BookRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final BookMapper bookMapper;
    private final AuthorRepository authorRepository;


    public BookServiceImpl(BookRepository bookRepository, BookMapper bookMapper, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.bookMapper = bookMapper;
        this.authorRepository = authorRepository;
    }

    @Override
    public Page<BookDTO> getAllBooks(Pageable pageable) {
        return this.bookRepository.findAll(pageable)
                .map(bookMapper::toDTO);
    }

    @Override
    public BookDTO create(BookDTO bookDTO) {
        BookEntity bookEntity = BookEntity.builder()
                .authorEntity(bookDTO.getAuthorEntity())
                .title(bookDTO.getTitle())
                .description(bookDTO.getDescription())
                .imgUrl(bookDTO.getImgUrl())
                .categories(bookDTO.getCategories())
                .build();
        bookRepository.save(bookEntity);
        return bookMapper.toDTO(bookEntity);
    }

    @Override
    public BookDTO update(BookDTO bookDTO) {
        BookEntity bookEntity = this.bookRepository.findById(bookDTO.getBookId()).orElseThrow(
                () -> new NotFound(ErrorMessages.ID_NOT_FOUND_EXCEPTION)
        );
        bookEntity.setTitle(bookDTO.getTitle());
        bookEntity.setDescription(bookDTO.getDescription());
        bookEntity.setImgUrl(bookDTO.getImgUrl());
        bookEntity.setAuthorEntity(bookDTO.getAuthorEntity());
        bookEntity.setCategories(bookDTO.getCategories());
        this.bookRepository.save(bookEntity);
        return bookMapper.toDTO(bookEntity);
    }

    @Override
    public void delete(Long id) {
        BookEntity bookEntity = bookRepository.findById(id)
                .orElseThrow(() -> new NotFound(ErrorMessages.ID_NOT_FOUND_EXCEPTION));
        this.bookRepository.delete(bookEntity);
    }

    @Override
    public BookDTO getById(Long id) {
        return bookMapper.toDTO(this.bookRepository.findById(id)
                .orElseThrow(() -> new NotFound(ErrorMessages.ID_NOT_FOUND_EXCEPTION))
        );
    }
}
