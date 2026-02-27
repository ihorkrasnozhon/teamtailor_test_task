import {Request, Response} from "express";
import * as TeamtailorService from "../../Services/api.service.js";
import {Parser} from "json2csv";

export const createCsv = async (_req: Request, res: Response) => {
    try {
        const data = await TeamtailorService.fetchFlatCandidates();

        const csvData = data.map(item => ({
            candidate_id: item.id,
            first_name: item.first_name,
            last_name: item.last_name,
            email: item.email,
            application_id: item.applicationId,
            created_at: item.applicationCreatedAt
        }));

        const parser = new Parser();
        const csv = parser.parse(csvData);

        res.header('Content-Type', 'text/csv');
        res.attachment('teamtailor_candidates.csv');
        res.send(csv);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to export CSV' });
    }
};
