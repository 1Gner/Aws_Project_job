package List.Job.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Entity
@Table(name="emprego")
public class Emprego {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emprego_id")
    private Long id;
    private LocalDateTime criada;
    private String localizacao;
    private String Tipo;
    private String Funcao;


    @ElementCollection
    @CollectionTable(name = "emprego_skills", joinColumns = @JoinColumn(name = "emprego_id"))
    @Column(name = "skill")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<String> skills = new ArrayList<>();

    @ManyToOne()
    @JoinColumn(name = "empresa_id" ,nullable = false)
    @JsonIgnore()
    private Empresa empresa;


    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getCriada() {
        return criada;
    }

    public void setCriada(LocalDateTime criada) {
        this.criada = criada;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public String getTipo() {
        return Tipo;
    }

    public void setTipo(String tipo) {
        Tipo = tipo;
    }

    public String getFuncao() {
        return Funcao;
    }

    public void setFuncao(String funcao) {
        Funcao = funcao;
    }
}
