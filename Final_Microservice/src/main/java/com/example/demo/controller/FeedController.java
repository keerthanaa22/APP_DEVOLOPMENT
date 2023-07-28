package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.FeedBack;

import com.example.demo.service.FeedService;

@RestController
@CrossOrigin("*")
//@RequestMapping("/Feedback")
public class FeedController {
	@Autowired
	private FeedService stuservice;

	@GetMapping("/getfed")
	public List<FeedBack> getDetails(){
		return stuservice.getAllDetails();
		
	}
	@PostMapping("/addfed")
	public FeedBack postDetails(@RequestBody FeedBack f) {
		return stuservice.saveDetails(f);
	}
	@DeleteMapping("/deletefeed/{feed_id_id}")
	public String delete(@PathVariable int feed_id) {
		 stuservice.deleteDepartmentById(feed_id);
		 return "Deleted";
	}
	@PutMapping("/updatefeed/{feed_id}")
	public FeedBack update(@PathVariable int feed_id,@RequestBody FeedBack f) {
	return stuservice.update(feed_id,f);
	}
}
