import jwt from 'jsonwebtoken'

export const fetchUser = (req, res, next) => {

    if (!req.cookies) {
        return res.status(401).json({ message: "Cookies not found" });
    }
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "NOt Authenticated" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        res.status(400).json({ message: "Invalid Token" })
    }

}