import {AxiosRequestConfig} from "axios";

export const requestConfig: AxiosRequestConfig = {
    params: {
        'fields[candidates]': 'id,first-name,last-name,email,job-applications',
        'include': 'job-applications',
        'fields[job-applications]': 'id,created-at'
    }
};
