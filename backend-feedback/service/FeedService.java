package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.database.FeedRepo;
import com.example.demo.model.FeedBack;

@Service
public class FeedService {
	@Autowired
	   private FeedRepo rev;
	public FeedBack saveDetails(FeedBack f) {

		return rev.save(f);
			
	}
	public List<FeedBack> getAllDetails()
	{
		return rev.findAll();
	}
	public void deleteDepartmentById(long feed_id)
	{
		rev.deleteById(feed_id);
	}
	public FeedBack update(long  feed_id,FeedBack f) {
	return rev.save(f);	
	}
}
