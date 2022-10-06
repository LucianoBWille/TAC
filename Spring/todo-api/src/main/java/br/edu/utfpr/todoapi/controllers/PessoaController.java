package br.edu.utfpr.todoapi.controllers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.apache.logging.log4j.util.Strings;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.todoapi.dto.PessoaDTO;
import br.edu.utfpr.todoapi.model.Pessoa;
import br.edu.utfpr.todoapi.repositories.PessoaRepository;

@RestController
@RequestMapping("pessoa")
public class PessoaController {

    @Autowired // Injeção de dependência
    private PessoaRepository pessoaRepository;

    @GetMapping(produces = "application/json")
    public List<Pessoa> getAll(@RequestParam(required = false) String nome) {
        if (Strings.isNotEmpty(nome)) {
            return pessoaRepository.findByNome('%' + nome + '%');
        } else {
            return pessoaRepository.findAll();
        }
    }

    // @GetMapping("{id}")
    // public Optional<Pessoa> getById(@PathVariable String id) {
    // return pessoaRepository.findById(UUID.fromString(id));
    // }

    @GetMapping("{id}")
    public ResponseEntity<Object> getById(@PathVariable String id) {
        UUID uuid;
        try {
            uuid = UUID.fromString(id);
        } catch (Exception ex) {
            return ResponseEntity.badRequest().body("formato de ID inválido");
        }

        Optional<Pessoa> res = pessoaRepository.findById(uuid);

        if (res.isPresent()) {
            return ResponseEntity.ok(res.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa não existe");
            // return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Pessoa save(@RequestBody PessoaDTO pessoaDTO) {
        System.out.println(pessoaDTO);

        Pessoa p = new Pessoa();
        BeanUtils.copyProperties(pessoaDTO, p);

        LocalDateTime now = LocalDateTime.now(ZoneId.of("UTC"));

        p.setCreatedAt(now);
        p.setUpdatedAt(now);

        return pessoaRepository.save(p);
    }

    @PutMapping("{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @RequestBody PessoaDTO pessoaDTO) {
        UUID uuid;
        try {
            uuid = UUID.fromString(id);
        } catch (Exception ex) {
            return ResponseEntity.badRequest().body("formato de ID inválido");
        }

        Optional<Pessoa> res = pessoaRepository.findById(uuid);

        if (res.isPresent()) {
            Pessoa p = res.get();
            BeanUtils.copyProperties(pessoaDTO, p);

            LocalDateTime now = LocalDateTime.now(ZoneId.of("UTC"));
            p.setUpdatedAt(now);

            System.out.println(pessoaDTO);
            System.out.println(p);

            // return ResponseEntity.ok(res.get());
            return ResponseEntity.ok(pessoaRepository.save(p));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa não existe");
            // return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        UUID uuid;
        try {
            uuid = UUID.fromString(id);
        } catch (Exception ex) {
            return ResponseEntity.badRequest().body("formato de ID inválido");
        }

        Optional<Pessoa> res = pessoaRepository.findById(uuid);

        if (res.isPresent()) {
            pessoaRepository.deleteById(uuid);
            return ResponseEntity.ok(res.get());
            // return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa não existe");
            // return ResponseEntity.notFound().build();
        }
    }

}
