var express = require('express'),
    swagger = require('node-swagger-ui');

process.env.NODE_ENV = process.env.NODE_ENV || "DEV";

swagger(express()).configure({
    ip: undefined,
    port: process.env.PORT || 8003,
    headers: {
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization,	If-Modified-Since, Cache-Control, Pragma",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
		"Access-Control-Allow-Credentials": "true"
    },
    models: [
        '/docs/models/**/*.js'
    ],
    apis: [
        '/docs/apis/**/*.js'
    ],
    swagger: {
        title: "Desafio",
        description: "Mocks de APIs para o desafio",
        termsOfServiceUrl: "",
        contact: "paula.a.fernandes@accenture.com",
        swaggerDoc: "api-docs",
        url: "/docs",
        version: "1.0.0"
    }
}).start();
