import jwt from 'jsonwebtoken';
import util from 'util';

export const authentication = async (req, res, next) => {

    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: "You have to login first" });

    try {

        let decoded = await util.promisify(jwt.verify)(authorization, process.env.SECRET);
        req.id = decoded.id;        //add userId to each request
        req.role = decoded.role;    //add role to each request
        next();

    } catch (err) {
        return res.status(401).json({ message: "You are not Authenticated, try again!" })
    }

}


export const restrictTo = (...roles) => {
    return (req, res, next) => {
        console.log(req.role, 'role');

        if (!roles.includes(req.role)) return res.status(403).json({ message: "You dont have permission to do this action!" })
        next();
    }
}