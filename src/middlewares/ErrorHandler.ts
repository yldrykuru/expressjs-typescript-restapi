import { Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ErrorHandler = (err: any, req: Request, res: Response) => {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    //res.json({
    //    success: false,
    //    status: errStatus,
    //    message: errMsg,
    //    stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    //});
};

export default ErrorHandler;