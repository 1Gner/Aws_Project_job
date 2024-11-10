package List.Job.DTO;

import List.Job.Entities.Emprego;
import jakarta.persistence.CascadeType;
import jakarta.persistence.FetchType;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class EmpresaDto {

    private MultipartFile foto;
    private String Logo;
    private List<Emprego> vagas = new ArrayList<Emprego>();


    public MultipartFile getFoto() {
        return foto;
    }

    public void setFoto(MultipartFile foto) {
        this.foto = foto;
    }

    public String getLogo() {
        return Logo;
    }

    public void setLogo(String logo) {
        Logo = logo;
    }

    public List<Emprego> getVagas() {
        return vagas;
    }

    public void setVagas(List<Emprego> vagas) {
        this.vagas = vagas;
    }
}
