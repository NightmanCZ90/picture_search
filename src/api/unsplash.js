import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID K9Y1ubd8CRzV_ousW3oSRA6qFiLh36T4AzZelkDnKGQ'
  } 
});