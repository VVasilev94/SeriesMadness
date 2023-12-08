import * as request from '../../data/request'

const baseUrl = 'http://localhost:3030/data/series';

const handleSearch = async (value) => {
  try {
      const params = new URLSearchParams({
        'where=': `title LIKE "${value}"`})
    
      const response = await request.get(`${baseUrl}?${params}`);
   
      const result = response;
       // Assuming 'data' contains the actual search results

      return result;
  
  } catch (error) {
      console.error('Error occurred during search:', error);
      throw error;
  }
};

export default handleSearch;
