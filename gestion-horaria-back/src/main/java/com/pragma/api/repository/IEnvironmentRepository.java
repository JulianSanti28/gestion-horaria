package com.pragma.api.repository;

import com.pragma.api.model.Environment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEnvironmentRepository extends JpaRepository<Environment, Integer> {
}
