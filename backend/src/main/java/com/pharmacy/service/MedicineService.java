package com.pharmacy.service;

import com.pharmacy.entity.Medicine;
import com.pharmacy.repository.MedicineRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class MedicineService {

    private final MedicineRepository medicineRepository;

    public MedicineService(MedicineRepository medicineRepository) {
        this.medicineRepository = medicineRepository;
    }

    public List<Medicine> getAll() {
        return medicineRepository.findAll();
    }

    public Medicine getById(Long id) {
        return medicineRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Medicine not found with id: " + id));
    }

    public Medicine create(Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    public Medicine update(Long id, Medicine updated) {
        Medicine existing = getById(id);
        existing.setName(updated.getName());
        existing.setBrand(updated.getBrand());
        existing.setCategory(updated.getCategory());
        existing.setPrice(updated.getPrice());
        existing.setQuantity(updated.getQuantity());
        existing.setExpiryDate(updated.getExpiryDate());
        return medicineRepository.save(existing);
    }

    public void delete(Long id) {
        medicineRepository.deleteById(id);
    }

    public List<Medicine> getExpiryAlerts() {
        LocalDate today = LocalDate.now();
        LocalDate thirtyDaysLater = today.plusDays(30);

        List<Medicine> result = new ArrayList<>();
        result.addAll(medicineRepository.findByExpiryDateLessThanEqual(today));
        result.addAll(medicineRepository.findByExpiryDateBetween(today, thirtyDaysLater));
        return result;
    }

    public String resolveExpiryStatus(LocalDate expiryDate) {
        LocalDate today = LocalDate.now();
        if (expiryDate.isBefore(today)) return "EXPIRED";
        if (expiryDate.isBefore(today.plusDays(30))) return "EXPIRING_SOON";
        return "VALID";
    }
}