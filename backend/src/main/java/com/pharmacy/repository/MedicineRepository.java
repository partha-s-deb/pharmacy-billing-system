package com.pharmacy.repository;

import com.pharmacy.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
    List<Medicine> findByExpiryDateLessThanEqual(LocalDate date);
    List<Medicine> findByExpiryDateBetween(LocalDate from, LocalDate to);
}