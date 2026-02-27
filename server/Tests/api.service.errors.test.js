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
describe('Teamtailor Service - Error Handling', () => {
    it('should throw an error if Teamtailor API returns 500', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Internal Server Error'));
        await expect((0, api_service_1.fetchFlatCandidates)()).rejects.toThrow('Internal Server Error');
        console.log('error 500 correctly catched');
    });
    it('should handle missing job-applications relationship gracefully', async () => {
        const mockResponse = {
            data: {
                data: [{
                        id: '1',
                        attributes: { 'first-name': 'No', 'last-name': 'Apps', email: 'no@apps.com' },
                        relationships: {}
                    }],
                included: []
            }
        };
        mockedAxios.get.mockResolvedValue(mockResponse);
        const result = await (0, api_service_1.fetchFlatCandidates)();
        expect(result).toEqual([]);
        expect(result).toHaveLength(0);
        console.log('mt array returned as expected');
    });
    it('should handle 401 Unauthorized error', async () => {
        mockedAxios.get.mockRejectedValue({
            response: { status: 401, data: { errors: [{ title: 'Unauthorized' }] } }
        });
        try {
            await (0, api_service_1.fetchFlatCandidates)();
        }
        catch (error) {
            expect(error.response.status).toBe(401);
            console.log('error 401 correctly catched');
        }
    });
});
//# sourceMappingURL=api.service.errors.test.js.map