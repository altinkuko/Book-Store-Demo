package com.example.weblibraryapp.mappers;

import com.example.weblibraryapp.dto.CategoryDTO;
import com.example.weblibraryapp.entities.CategoryEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {BookMapper.class})
public interface CategoryMapper extends EntityMapper<CategoryEntity, CategoryDTO>{

    CategoryDTO toDTO(CategoryEntity categoryEntity);
    CategoryEntity toEntity(CategoryDTO categoryDTO);
}
