import {fetchCandidates} from "./Functions/fetchCandidates.js";
import {createCsv} from "./Functions/createCsv.js";

export const getCandidates = fetchCandidates;
export const exportCsv = createCsv;
