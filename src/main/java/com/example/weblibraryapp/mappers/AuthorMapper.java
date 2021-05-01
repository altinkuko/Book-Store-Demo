package com.example.weblibraryapp.mappers;

import com.example.weblibraryapp.dto.AuthorDTO;
import com.example.weblibraryapp.entities.AuthorEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {BookMapper.class})
public interface AuthorMapper extends EntityMapper<AuthorEntity, AuthorDTO> {

    @Mapping(source = "bookEntities", target = "bookEntities", ignore = true)
    AuthorDTO toDTO(AuthorEntity authorEntity);

    @Mapping(source = "bookEntities", target = "bookEntities", ignore = true)
    AuthorEntity toEntity(AuthorDTO authorDTO);

}
