package com.example.formular.formularApplicationTests;


import com.example.formularMain.formular.FormularEntity;
import com.example.formularMain.formular.FormularService;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class FormularClassApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void givenCorrectInputWhenCorrectInputThenReturn200() throws Exception {
        mockMvc.perform(get("/api/analyze")).andExpect(status().isOk());
    }

    @Test
    public void simpleTest() throws IllegalArgumentException{
        FormularService formular = new FormularService();

        String value = formular.analyze();
        Assertions.assertEquals("This is response from backend", value);
    }
}

