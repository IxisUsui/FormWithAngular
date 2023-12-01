package com.example.formularMain.formular;

import java.util.function.Function;

public class FormularDtoMapper implements Function<FormularEntity, FormularRequest> {

    public FormularRequest apply(FormularEntity user) {
        return new FormularRequest(
                user.getUserId(),
                user.getName(),
                user.getLastName(),
                user.getEmail(),
                user.getPhone(),
                user.getLoremIpsum()
        );
    }

}
