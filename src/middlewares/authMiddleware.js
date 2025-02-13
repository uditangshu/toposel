const jwt = require('jsonwebtoken');

const verifyToken = (...roles) => (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // console.log( authHeader);

    if (!authHeader) {
        return res.status(403).json({ message: 'No token provided' });
    }
    const token = authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : authHeader;
    
    // console.log("Token received:", token);
    if (!token) {
        return res.status(200).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(200).json({ message: 'Unauthorized' });
        }

        req.user = decoded;
        // console.log("User:", req.user);
        console.log("Decoded user:", req.user);

        console.log("Required roles:", roles);
        console.log("User role:", req.user.role);
        
        if (roles.length > 0 && !roles.includes(req.user.role)) {
            
            return res.status(403).json({ message: 'Forbidden' });
        }

        next();
    });
};

module.exports = verifyToken;
