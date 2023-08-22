import axios from "axios";

class ApiUtil {
  static baseUrl = "https://api.themoviedb.org/3/";
  static apiKey = process.env.REACT_APP_API_KEY;
  static async getPopoularSerials() {
    try {
      const response = await axios.get(`${this.baseUrl}tv/popular`, {
        params: {
            api_key: this.apiKey,
        },
      }); 
      return response.data;
    } catch (error) {}
  }
  static async getSerialsDetals(id){
    try {
      const response = await axios.get(`${this.baseUrl}/tv/${id}`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }

  static async getTopSerials(){
    try {
      const response = await axios.get(`${this.baseUrl}tv/top_rated`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }

  static async getOnAirSerials(){
    try {
      const response = await axios.get(`${this.baseUrl}tv/on_the_air`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getOnAirMovie(){
    try {
      const response = await axios.get(`${this.baseUrl}movie/now_playing?`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getpopularMovie(){
    try {
      const response = await axios.get(`${this.baseUrl}movie/popular`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getTopMovie(){
    try {
      const response = await axios.get(`${this.baseUrl}movie/top_rated`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getMovieDetals(id){
    try {
      const response = await axios.get(`${this.baseUrl}movie/${id}`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getPersons(){
    try {
      const response = await axios.get(`${this.baseUrl}/person/popular`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getPersonsDetals(id){
    try {
      const response = await axios.get(`${this.baseUrl}/person/${id}`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getAll(){
    try {
      const response = await axios.get(`${this.baseUrl}trending/all/day`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getTrendingMovie(){
    try {
      const response = await axios.get(`${this.baseUrl}trending/movie/day`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getTrandingPerson(){
    try {
      const response = await axios.get(`${this.baseUrl}/trending/person/day`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getTrendinTv(){
    try {
      const response = await axios.get(`${this.baseUrl}/trending/tv/day`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getSearch(query){
    try {
      const response = await axios.get(`${this.baseUrl}/search/multi`, {
        params: {
            api_key: this.apiKey,
            query: query,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getVideo(id){
    try {
      const response = await axios.get(`${this.baseUrl}/movie/${id}/videos`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
}
static async getSerialVideo(id){
  try {
    const response = await axios.get(`${this.baseUrl}/tv/${id}/videos`, {
      params: {
          api_key: this.apiKey,
      },
    });
    return response.data;
  } catch (error) {}
}
}

export default ApiUtil;
