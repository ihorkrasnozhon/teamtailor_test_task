import axios from 'axios';
import type {CandidateToFrontEnd} from "../Types/candidateToFrontEnd.interface.js";
import type {CandidateFromResponse} from "../Types/candidateFromResponse.interface.js";
import {config} from "./Configs/api.config.js";
import {requestConfig} from "./Configs/request.config.js";
import {mapCandidate} from "./Functions/mapCandidates.js";

const api = axios.create(config);

export const fetchFlatCandidates = async ():Promise<CandidateToFrontEnd[]> => {
    const response = await api.get('/candidates', requestConfig);
    const candidates : CandidateFromResponse[] = response.data.data;
    const included = response.data.included || [];

    return candidates.flatMap((candidate: any) => {
        const rels = candidate.relationships?.['job-applications']?.data || [];
        const appIds = Array.isArray(rels) ? rels.map((r: any) => r.id) : [rels.id].filter(Boolean);

        return included.filter((item: any) => item.type === 'job-applications' && appIds.includes(item.id))
            .map((app: any) => mapCandidate(candidate, app));
    });
};
