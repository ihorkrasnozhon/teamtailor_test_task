import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
    constructor(public statusCode: number, message: string) {
        super(message);
    }
}

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    const message = err.message || 'Internal Server Error';

    console.error(`[ERROR] ${statusCode}: ${message}`);

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    });
};
