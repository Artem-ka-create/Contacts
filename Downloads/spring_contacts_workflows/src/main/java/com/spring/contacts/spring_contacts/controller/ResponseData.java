package com.spring.contacts.spring_contacts.controller;

public class ResponseData {

    private int status;
    private String message;

    public ResponseData() {
    }

    public ResponseData(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
