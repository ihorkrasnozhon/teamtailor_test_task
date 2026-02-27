export interface CandidateFromResponse {
    id: string;
    attributes: {
        'first-name': string;
        'last-name': string;
        email: string;
    };
    relationships: {
        'job-applications': {
            data: { id: string; type: string }[] | { id: string; type: string };
        };
    };
}
