package br.edu.utfpr.todoapi.controllers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.edu.utfpr.todoapi.model.Pessoa;

@RestController
@RequestMapping("pessoa")
public class PessoaController {
    @GetMapping
    // .produces = "application/json";
    public List<Pessoa> getAll(){
        List<Pessoa> pessoas = new ArrayList<>();
        pessoas.add(new Pessoa(1L, "Fulano", "asd@email.blah", "123456", LocalDate.now(), LocalDateTime.now(), LocalDateTime.now()));
        pessoas.add(new Pessoa(2L, "Beltrano", "asd@email.blah", "123456", LocalDate.now(), LocalDateTime.now(), LocalDateTime.now()));
        pessoas.add(new Pessoa(3L, "Ciclano", "asd@email.blah", "123456", LocalDate.now(), LocalDateTime.now(), LocalDateTime.now()));
        pessoas.add(new Pessoa(4L, "Fulano", "asd@email.blah", "123456", LocalDate.now(), LocalDateTime.now(), LocalDateTime.now()));
        pessoas.add(new Pessoa(5L, "Beltrano", "asd@email.blah", "123456", LocalDate.now(), LocalDateTime.now(), LocalDateTime.now()));
        pessoas.add(new Pessoa(6L, "Ciclano", "asd@email.blah", "123456", LocalDate.now(), LocalDateTime.now(), LocalDateTime.now()));

        return pessoas;
        // return "Obter todos";
    }

    @GetMapping("{id}")
    public String getById(@PathVariable String id) {
        return "Obter a pessoa " + id;
    }

    @PostMapping
    public String save() {
        return "Salvar";
    }

    @PutMapping("{id}")
    public String update(@PathVariable String id) {
        return "Atualizar";
    }

    @DeleteMapping("{id}")
    public String delete(@PathVariable String id) {
        return "Deletar";
    }
}
