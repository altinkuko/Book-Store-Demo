package com.example.weblibraryapp.services;

import com.example.weblibraryapp.dto.AuthorDTO;
import com.example.weblibraryapp.entities.AuthorEntity;
import com.example.weblibraryapp.errors.ErrorMessages;
import com.example.weblibraryapp.errors.NotFound;
import com.example.weblibraryapp.mappers.AuthorMapper;
import com.example.weblibraryapp.repositories.AuthorRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AuthorServiceImpl implements AuthorService {
    private final AuthorRepository authorRepository;
    private final AuthorMapper authorMapper;

    public AuthorServiceImpl(AuthorRepository authorRepository, AuthorMapper authorMapper) {
        this.authorRepository = authorRepository;
        this.authorMapper = authorMapper;
    }

    @Override
    public Page<AuthorDTO> getAllAuthors(Pageable pageable) {
        return this.authorRepository.findAll(pageable)
                .map(authorMapper::toDTO);
    }

    @Override
    public AuthorDTO create(AuthorDTO authorDTO) {
        return authorMapper.toDTO(authorRepository.save(authorMapper.toEntity(authorDTO)));
    }

    @Override
    public AuthorDTO update(AuthorDTO authorDTO) {
        AuthorEntity authorEntity = authorRepository.findById(authorDTO.getAuthorId()).
                orElseThrow(() -> new NotFound(ErrorMessages.ID_NOT_FOUND_EXCEPTION));
        authorEntity.setName(authorDTO.getName());
        authorEntity.setBio(authorDTO.getBio());
        authorEntity.setBookEntities(authorDTO.getBookEntities());
        authorRepository.save(authorEntity);
        return authorMapper.toDTO(authorEntity);
    }

    @Override
    public void delete(Long id) {
        AuthorEntity authorEntity = this.authorRepository.findById(id)
                .orElseThrow(()-> new NotFound(ErrorMessages.ID_NOT_FOUND_EXCEPTION));
        authorRepository.delete(authorEntity);
    }

    @Override
    public AuthorDTO getAuthorById(long id) {
        return authorMapper.toDTO(this.authorRepository.findById(id)
                .orElseThrow(()-> new NotFound(ErrorMessages.ID_NOT_FOUND_EXCEPTION)));
    }
}
