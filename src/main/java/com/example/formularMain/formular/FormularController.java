package com.example.formularMain.formular;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/**
 * Controller class for handling requests.
 */
@RestController
public class FormularController {

    private final FormularService formularService;

    /**
     * Constructor for FormularController.
     *
     * @param formularService an instance of the FormularService service.
     */
    public FormularController(FormularService formularService) {
        this.formularService = formularService;
    }

    /**
     * Handles POST requests for analyzing the provided data and returns a ResponseEntity containing
     * text response
     *
     * @return a ResponseEntity containing a text.
     */
    @PostMapping(value = "/api/analyze")
    public ResponseEntity<String> analyze () {

        String value = formularService.analyze();
        return ResponseEntity.ok(value);
    }

}
