import type {CandidateFromResponse} from "../../Types/candidateFromResponse.interface.js";
import type {CandidateToFrontEnd} from "../../Types/candidateToFrontEnd.interface.js";

export const mapCandidate = (candidate: CandidateFromResponse, app: any): CandidateToFrontEnd => ({
    id: candidate.id,
    first_name: candidate.attributes['first-name'],
    last_name: candidate.attributes['last-name'],
    email: candidate.attributes.email,
    applicationId: app.id,
    applicationCreatedAt: app.attributes['created-at']
});
