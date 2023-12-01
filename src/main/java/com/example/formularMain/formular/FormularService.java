package com.example.formularMain.formular;

import org.springframework.stereotype.Service;



/**
 * Service class
 */
@Service
public class FormularService {

  /**
   * Analyzes the provided data
   *
   * @return String response
   * @throws IllegalArgumentException if the typeOfLetter is neither "vowels" nor "consonants"
   */
  public String analyze() throws IllegalArgumentException {
    //service actions
    return "This is response from backend";
  }


}

