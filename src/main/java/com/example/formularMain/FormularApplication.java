package com.example.formularMain;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Import;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@Import(CorsConfiguration.class)
public class FormularApplication {

	public static void main(String[] args) {
		SpringApplication.run(FormularApplication.class, args);
	}

}
