import axios from 'axios';

describe('Contact API endpoint tests', () => {
  beforeAll(() => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: { lat: 59.3251172, lng: 18.0710935 }, status: 200 });
  });

  it('should fetch contact details with coordinates', async () => {
    const response = await axios.get('/contact/123');
    expect(response.status).toBe(200);
    expect(response.data.lat).toBe(59.3251172);
    expect(response.data.lng).toBe(18.0710935);
  });
});
