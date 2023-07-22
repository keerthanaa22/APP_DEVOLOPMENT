package com.example.ocda.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ocda.entity.LoginSignup;


@Repository
public interface LoginSignuprepo extends JpaRepository<LoginSignup, Long> {

	LoginSignup findByEmailAndPassword(String email, String password);

}
