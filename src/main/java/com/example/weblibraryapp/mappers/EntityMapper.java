package com.example.weblibraryapp.mappers;

import java.util.List;

public interface EntityMapper<E, DTO> {
    DTO toDTO(E entity);
    List<DTO> toDTO(List<E> entities);

    E toEntity(DTO dto);
    List<E> toEntity(List<DTO> dtos);
}
