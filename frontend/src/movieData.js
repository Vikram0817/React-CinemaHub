import { atom, selector } from "recoil";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTdiOGE0NzRiOGQ0N2M2ZDc1YzBhNzBjNzk0Y2ExNSIsInN1YiI6IjY1YWJhYTBhNzJkODU1MDBiZTQ0MWRmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XRe24GMRv80ysTAe7bGczyfkQVMutCV4JGY3zbw46Jg";

export const nowPlaying = atom({
  key: "nowPlaying",
  default: selector({
    key: "nowPlaying/default",
    get: async () => {
      const url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });
        return response.data.results;
      } catch (error) {
        console.error(error);
        return { error: 'Internal Server Error' };
      }
    },
  }),
});
