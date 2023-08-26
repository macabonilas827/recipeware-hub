import allowedOrigins from "./allowedOrigins.js";
export const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by Cors"));
        }
    },
    credentials: true,
    optionsSucessStatus: 200,
};
//# sourceMappingURL=corsOptions.js.map