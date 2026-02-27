import {NextFunction, Request, Response} from "express";
import * as TeamtailorService from "../../Services/api.service.js";
import {AppError} from "../../Middleware/errorHandler.middleware.js";

export const fetchCandidates = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await TeamtailorService.fetchFlatCandidates();
        if (!data || data.length === 0) {
            return  next(new AppError(404, 'Candidates not found'));
        }
        res.json(data);
    } catch (error) {
        next(error);
    }
};
