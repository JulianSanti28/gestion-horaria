package com.pragma.api.repository;

import com.pragma.api.model.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IResourceRepository extends JpaRepository<Resource, Integer> {
}
