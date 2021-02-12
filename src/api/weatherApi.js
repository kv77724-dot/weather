// Mumbai 204842
// Delhi 202396
// Api fest63ZOnrG8B8l9KQ5IwmBtSoStIy5w
import axios from 'axios';

export default axios.create({
  baseURL: 'http://dataservice.accuweather.com/',
  headers: {
    Host: 'dataservice.accuweather.com',
  },
});
