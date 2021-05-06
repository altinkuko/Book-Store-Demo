package com.example.weblibraryapp.mappers;

import com.example.weblibraryapp.dto.BookDTO;
import com.example.weblibraryapp.entities.BookEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {CategoryMapper.class})
public interface BookMapper extends EntityMapper<BookEntity, BookDTO>{

    @Mapping(source = "categories", target = "categories")
    BookDTO toDTO(BookEntity bookEntity);

    @Mapping(source = "categories", target = "categories")
    BookEntity toEntity(BookDTO bookDTO);

}
