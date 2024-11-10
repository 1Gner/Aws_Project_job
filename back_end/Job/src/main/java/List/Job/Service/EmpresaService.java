package List.Job.Service;


import List.Job.DTO.EmpregoDto;
import List.Job.DTO.EmpresaDto;
import List.Job.Entities.Emprego;
import List.Job.Entities.Empresa;
import List.Job.Repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class EmpresaService {


    @Autowired
    private EmpresaRepository repository;



    public Empresa ConvertDto(EmpresaDto empresa) throws IOException {
        Empresa emp = new Empresa();
        emp.setLogo(empresa.getLogo());
        emp.setVagas(empresa.getVagas());
        emp.setFoto(empresa.getFoto().getBytes());

        return emp;
    }

    public List<Empresa> findAllEmpresa(){
        return repository.findAll();
    }

    public  Empresa findIdEmpresa(Integer id){
        return repository.findById(id).orElse(null);
    }


    public Empresa saveEmpresa(EmpresaDto empresa) throws IOException {
        Empresa emp = new Empresa();
        emp = ConvertDto(empresa);
        return repository.save(emp);
    }

    public boolean RemoveEmpresa(Integer id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
