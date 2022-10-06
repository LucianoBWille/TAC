package br.edu.utfpr.todoapi.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
// import lombok.Getter;
import lombok.NoArgsConstructor;
// import lombok.Setter;
// import lombok.ToString;

// @Getter
// @Setter
// @ToString
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pessoa {
    private Long id;
    private String nome;
    private String email;
    private String senha;
    private LocalDate nascimento;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
