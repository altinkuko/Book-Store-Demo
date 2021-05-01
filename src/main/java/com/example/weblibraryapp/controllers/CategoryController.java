package com.example.weblibraryapp.controllers;

import com.example.weblibraryapp.dto.CategoryDTO;
import com.example.weblibraryapp.services.CategoryService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/admin")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/categories")
    public ResponseEntity<Page<CategoryDTO>> listAllCategories(@PageableDefault(page = 0, size = 5,
            sort = "name", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok(this.categoryService.getAllCategories(pageable));
    }

    @PostMapping("/category")
    public ResponseEntity<CategoryDTO> createCategory(@RequestBody final CategoryDTO categoryDTO) {
        return ResponseEntity.ok(this.categoryService.create(categoryDTO));
    }

    @PutMapping("/category")
    public ResponseEntity<CategoryDTO> updateCategory(@RequestBody final CategoryDTO categoryDTO) {
        return ResponseEntity.ok(this.categoryService.update(categoryDTO));
    }

    @DeleteMapping("/category/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable("id") final long id) {
        this.categoryService.delete(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<CategoryDTO> findById(@PathVariable("id") final Long categoryId){
        return ResponseEntity.ok(categoryService.findById(categoryId));
    }
}
