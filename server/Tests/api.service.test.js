"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock('axios', () => {
    const mAxiosInstance = {
        get: jest.fn()
    };
    return {
        create: jest.fn(() => mAxiosInstance),
        mAxiosInstance
    };
});
const mockedAxios = require('axios').mAxiosInstance;
const api_service_1 = require("../src/Services/api.service");
describe('Teamtailor Service', () => {
    it('should correctly flatten candidate data', async () => {
        const mockResponse = {
            data: {
                data: [{
                        id: '1',
                        attributes: { 'first-name': 'Ihor', 'last-name': 'Krasn', email: 'test@test.com' },
                        relationships: { 'job-applications': { data: [{ id: 'app1' }] } }
                    }],
                included: [{
                        type: 'job-applications',
                        id: 'app1',
                        attributes: { 'created-at': '2026-01-01' }
                    }]
            }
        };
        mockedAxios.get.mockResolvedValue(mockResponse);
        const result = await (0, api_service_1.fetchFlatCandidates)();
        expect(result).toHaveLength(1);
        expect(result[0].first_name).toBe('Ihor');
        expect(result[0].last_name).toBe('Krasn');
        expect(result[0].applicationId).toBe('app1');
        console.log('name and application arrived successfully');
    });
});
//# sourceMappingURL=api.service.test.js.map