import axios from 'axios';

const url = 'https://csv-drukteinis.herokuapp.com/';

export const fetchData = () => axios.get(url);
export const importData = (newData) => axios.post(url, newData);
export const updateData = (id, updatedData) => axios.patch(`${url}/${id}`, updatedData);
export const deleteData = (id) => axios.delete(`${url}/${id}`);