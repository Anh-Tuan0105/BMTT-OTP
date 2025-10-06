import express, { json, urlencoded } from "express"
import session from "express-session"
import passport from "passport"
import dotenv from "dotenv"
import cors from "cors"
import { dbConnect } from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import "./config/passportConfig.js"

dotenv.config();
dbConnect();

const app = express();

// Middlewares
const optionCors = {
    origin: ["http://localhost:3001"],
    credentials: true // cho phép cookie/token
};
// Cors cơ chế cho phép chia sẻ tài nguyên giữa các url khác nhau
app.use(cors(optionCors));
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
            maxAge: 60000 * 60, // Sau 1 giờ, cookie và session sẽ hết hạn (người dùng phải đăng nhập lại).
        }
    })
);

// Passport.js là middleware giúp Express quản lý quá trình xác thực người dùng.
app.use(passport.initialize());
app.use(passport.session());
// Routes
app.use("/api/auth", authRoutes);
// Listen app

const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
    console.log(`Server dang chay o port ${PORT}`);
})
