import swaggerJsdoc from "swagger-jsdoc";
import config from "../config/config.js";

const port = config.port;
const liveUrl = config.liveUrl;

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Inventory Management API",
            version: "1.0.0",
            description: "Inventory Management System API Documentation",
        },
        servers: [
            {
                url: `${liveUrl}`
            },
            {
                url: `http://localhost:${port}`
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },

    apis: [
        "./src/swagger/paths/*.yaml",
        "./src/swagger/schemas/*.yaml",
    ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;