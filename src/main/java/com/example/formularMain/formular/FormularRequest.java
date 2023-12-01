package com.example.formularMain.formular;

public record FormularRequest (
    int userId,
    String name,
    String lastName,
    String email,
    String phone,
    String loremIpsum
    ){

}
