package List.Job.Controller;


import List.Job.DTO.EmpregoDto;
import List.Job.Entities.Emprego;
import List.Job.Service.EmpregoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping(value="/emprego")
public class EmpregoController {

    
    @Autowired
    private EmpregoService service;


    @PostMapping(value="/save")
    public ResponseEntity<Emprego> salvarEmprego(@RequestBody EmpregoDto emprego){
        Emprego emp = service.saveEmprego(emprego);
        return ResponseEntity.ok().body(emp);
    }


    @GetMapping(value = "/getAll")
    public ResponseEntity<List<Emprego>> getAllEmpregos(){
        List<Emprego> empregos = service.findAllEmprego();
        return  ResponseEntity.ok().body(empregos);
    }


    @GetMapping(value = "/{id}")
    public ResponseEntity<Emprego> getEmprego(@PathVariable Integer id){
        Emprego emprego = service.findIdEmprego(id);
        return ResponseEntity.ok().body(emprego);
    }

}
