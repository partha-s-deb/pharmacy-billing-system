package com.pharmacy.controller;

import com.pharmacy.entity.Medicine;
import com.pharmacy.service.MedicineService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "http://localhost:5173")
public class MedicineController {

    private final MedicineService medicineService;

    public MedicineController(MedicineService medicineService) {
        this.medicineService = medicineService;
    }

    @GetMapping
    public List<Medicine> getAll() {
        return medicineService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medicine> getById(@PathVariable Long id) {
        return ResponseEntity.ok(medicineService.getById(id));
    }

    @PostMapping
    public ResponseEntity<Medicine> create(@Valid @RequestBody Medicine medicine) {
        return ResponseEntity.ok(medicineService.create(medicine));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medicine> update(@PathVariable Long id, @Valid @RequestBody Medicine medicine) {
        return ResponseEntity.ok(medicineService.update(id, medicine));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        medicineService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/expiry-alerts")
    public List<Medicine> getExpiryAlerts() {
        return medicineService.getExpiryAlerts();
    }
}