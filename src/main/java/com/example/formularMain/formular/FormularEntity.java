package com.example.formularMain.formular;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class FormularEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int userId;

    String name;

    String lastName;

    String email;

    String phone;

    String loremIpsum;

    public FormularEntity() {

    }

    public FormularEntity(int userId, String name, String lastName, String email, String phone, String loremIpsum) {
        this.userId = userId;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.loremIpsum = loremIpsum;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLoremIpsum() {
        return loremIpsum;
    }

    public void setLoremIpsum(String loremIpsum) {
        this.loremIpsum = loremIpsum;
    }
}
