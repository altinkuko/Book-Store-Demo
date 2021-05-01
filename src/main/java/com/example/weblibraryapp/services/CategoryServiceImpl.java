package com.example.weblibraryapp.services;

import com.example.weblibraryapp.dto.CategoryDTO;
import com.example.weblibraryapp.entities.CategoryEntity;
import com.example.weblibraryapp.errors.ErrorMessages;
import com.example.weblibraryapp.errors.NotFound;
import com.example.weblibraryapp.mappers.CategoryMapper;
import com.example.weblibraryapp.repositories.CategoryRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService{
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public CategoryServiceImpl(CategoryRepository categoryRepository, CategoryMapper categoryMapper) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    @Override
    public Page<CategoryDTO> getAllCategories(Pageable pageable) {
        return this.categoryRepository.findAll(pageable)
                .map(categoryMapper::toDTO);
    }

    @Override
    public CategoryDTO create(CategoryDTO categoryDTO) {
        CategoryEntity categoryEntity = categoryMapper.toEntity(categoryDTO);
        this.categoryRepository.save(categoryEntity);
        return categoryMapper.toDTO(categoryEntity);
    }

    @Override
    public CategoryDTO update(CategoryDTO categoryDTO) {
        CategoryEntity categoryEntity = this.categoryRepository.findById(categoryDTO.getCategoryId())
                .orElseThrow(()-> new NotFound(ErrorMessages.ID_NOT_FOUND_EXCEPTION));
        categoryEntity.setName(categoryDTO.getName());
        this.categoryRepository.save(categoryEntity);
        return categoryMapper.toDTO(categoryEntity);
    }

    @Override
    public void delete(Long id) {
        CategoryEntity categoryEntity = this.categoryRepository.findById(id)
                .orElseThrow(()-> new NotFound(ErrorMessages.ID_NOT_FOUND_EXCEPTION));
        this.categoryRepository.delete(categoryEntity);
    }

    @Override
    public CategoryDTO findById(long id) {
        return categoryMapper.toDTO(this.categoryRepository.findById(id)
                .orElseThrow(()-> new NotFound(ErrorMessages.ID_NOT_FOUND_EXCEPTION)));
    }
}
