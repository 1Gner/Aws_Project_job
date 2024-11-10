package List.Job.Service;

import List.Job.DTO.EmpregoDto;
import List.Job.Entities.Emprego;
import List.Job.Repository.EmpregoRepository;
import List.Job.Repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class EmpregoService {

    @Autowired
    private EmpregoRepository repository;

    @Autowired
    private EmpresaService empresaService;


    public Emprego ConvertDto(EmpregoDto emprego){
        Emprego emp = new Emprego();
        emp.setEmpresa(empresaService.findIdEmpresa(emprego.getId_empresa()));
        emp.setFuncao(emprego.getFuncao());
        emp.setTipo(emprego.getTipo());
        emp.setLocalizacao(emprego.getLocalizacao());
        emp.setCriada(LocalDateTime.now());
        emp.setSkills(emprego.getSkills());
        return emp;
    }

    public List<Emprego> findAllEmprego(){
        return repository.findAll();
    }

    public  Emprego findIdEmprego(Integer id){
        return repository.findById(id).orElse(null);
    }


    public Emprego  saveEmprego(EmpregoDto Emprego){
        Emprego emp = ConvertDto(Emprego);
        return repository.save(emp);
    }

    public boolean RemoveEmprego(Integer id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
