import express, { json, urlencoded } from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnect } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import "./config/passportConfig.js";

import next from "next";

dotenv.config();
dbConnect();

const app = express();

const PORT = process.env.PORT || 7002;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: "../frontend" });
const handle = nextApp.getRequestHandler();


// Middlewares
nextApp.prepare().then(() => {
    const optionCors = {
        origin: ["http://localhost:3001"],
        credentials: true // cho phép cookie/token
    };
    // Cors cơ chế cho phép chia sẻ tài nguyên giữa các url khác nhau
    if (process.env.NODE_ENV !== 'production') {
        app.use(cors(optionCors));
    }
    app.use(json({ limit: "100mb" })); // Nhận dữ liệu json
    app.use(urlencoded({ limit: "100mb", extended: true }));
    // Lưu trữ thông tin tạm thời của người dùng (session)
    // Gán cho mỗi người dùng một ID duy nhất (session ID)
    //Giúp server nhớ được ai là ai giữa các request HTTP
    app.use(
        session({
            secret: process.env.SESSION_SECRET || "secret",
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 60000 * 60,
            }
        })
    );

    // Passport.js là middleware giúp Express quản lý quá trình xác thực người dùng.
    app.use(passport.initialize());
    app.use(passport.session());
    // Routes
    app.use("/api/auth", authRoutes);

    // if (process.env.NODE_ENV === 'production') {
    //     app.use(express.static(path.join(__dirname, "../frontend/out")));

    //     app.get(/.*/, (req, res) => {
    //         res.sendFile(path.join(__dirname, "../frontend/out/index.html"));
    //     });
    // }
    app.all(/.*/, (req, res) => handle(req, res));
    // Listen app


    app.listen(PORT, () => {
        console.log(`Server dang chay o port ${PORT}`);
    });
});


