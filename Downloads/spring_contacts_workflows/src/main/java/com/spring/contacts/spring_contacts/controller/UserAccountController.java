package com.spring.contacts.spring_contacts.controller;

import com.spring.contacts.spring_contacts.dao.UserDAO;
import com.spring.contacts.spring_contacts.dao.UserDAOImpl;
import com.spring.contacts.spring_contacts.models.*;
import com.spring.contacts.spring_contacts.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserAccountController {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	UserService userService;


	
	@Autowired
	private ConfirmationTokenRepository confirmationTokenRepository;
	
	@Autowired
	private EmailSenderService emailSenderService;

	@RequestMapping(value="/register", method=RequestMethod.POST)
	public ResponseData registerUser(@RequestBody User user)
	{



		
		User existingUser = userService.findByEmailIdIgnoreCase(user.getEmailId());
		if(existingUser != null)
		{
			return  new ResponseData(-404,"Ne vishlo");
		}
		else {
			try {
				userRepository.save(user);

				ConfirmationToken confirmationToken = new ConfirmationToken(user);

				confirmationTokenRepository.save(confirmationToken);

				SimpleMailMessage mailMessage = new SimpleMailMessage();
				mailMessage.setTo(user.getEmailId());
				mailMessage.setSubject("Complete Registration!");
				mailMessage.setFrom("x@gmail.com");
				mailMessage.setText(confirmationToken.getConfirmationToken());

				emailSenderService.sendEmail(mailMessage);
			}
			catch (Exception e){
				System.out.println(e);
			}

		}
		
		return new ResponseData(200,"OK");
	}
	
	
	
	@RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
	public ResponseData confirmUserAccount( @RequestParam("token")String confirmationToken)
	{
		ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);
		
		if(token != null)
		{

			User user = userService.findByEmailIdIgnoreCase(token.getUser().getEmailId());
			user.setEnabled(true);
			userRepository.save(user);
			return  new ResponseData(200,"OK");
		}
		else
		{
			return  new ResponseData(-401,"NE OK");
		}

	}

	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public ConfirmationTokenRepository getConfirmationTokenRepository() {
		return confirmationTokenRepository;
	}

	public void setConfirmationTokenRepository(ConfirmationTokenRepository confirmationTokenRepository) {
		this.confirmationTokenRepository = confirmationTokenRepository;
	}

	public EmailSenderService getEmailSenderService() {
		return emailSenderService;
	}

	public void setEmailSenderService(EmailSenderService emailSenderService) {
		this.emailSenderService = emailSenderService;
	}
	
}
