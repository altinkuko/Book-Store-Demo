package com.example.weblibraryapp.services;

import com.example.weblibraryapp.dto.CategoryDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CategoryService {
    Page<CategoryDTO> getAllCategories(Pageable pageable);

    CategoryDTO create (CategoryDTO categoryDTO);

    CategoryDTO update (CategoryDTO categoryDTO);

    void delete (Long id);

    CategoryDTO findById(long id);

}
