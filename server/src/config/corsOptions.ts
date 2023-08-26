import allowedOrigins from "./allowedOrigins.js";

export const corsOptions = {
  origin: (
    origin: string,
    callback: (arg0: Error | null, arg1?: boolean | undefined) => void
  ) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by Cors"));
    }
  },
  credentials: true,
  optionsSucessStatus: 200,
};
