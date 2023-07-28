package com.example.demo.database;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.model.FeedBack;

public interface FeedRepo extends JpaRepository<FeedBack,Long> {

}
