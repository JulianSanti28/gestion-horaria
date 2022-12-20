package com.pragma.api.repository;

import com.pragma.api.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository de Spring para las operaciones CRUD sobre la tabla COURSE.
 */
@Repository
public interface ICourseRepository extends JpaRepository<Course, Integer> {
}
