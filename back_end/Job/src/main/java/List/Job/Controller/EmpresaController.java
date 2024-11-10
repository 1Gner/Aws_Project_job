package List.Job.Controller;


import List.Job.DTO.EmpresaDto;
import List.Job.Entities.Empresa;
import List.Job.Service.EmpresaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@Controller
@RestController
@RequestMapping(value="/empresa")
public class EmpresaController {

    @Autowired
    private EmpresaService service;


    @PostMapping(value="/save")
    public ResponseEntity<Empresa> salvarEmpresa(@ModelAttribute EmpresaDto empresa) throws IOException {
        Empresa emp = service.saveEmpresa(empresa);
        return ResponseEntity.ok().body(emp);
    }


    @GetMapping(value = "/getAll")
    public ResponseEntity<List<Empresa>> getAllEmpresas(){
        List<Empresa> empresas = service.findAllEmpresa();
        return  ResponseEntity.ok().body(empresas);
    }


    @GetMapping(value = "/{id}")
    public ResponseEntity<Empresa> getEmpresa(@PathVariable Integer id){
        Empresa empresa = service.findIdEmpresa(id);
        return ResponseEntity.ok().body(empresa);
    }
}
