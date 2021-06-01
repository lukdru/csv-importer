import { FETCH_ALL, IMPORT, UPDATE, DELETE} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const importData = (data) => async (dispatch) => {
  try {
    const { tempData } = await api.importData(data);

    dispatch({ type: IMPORT, payload: tempData });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateData = (id, inputData) => async (dispatch) => {
  try {
    const { data } = await api.updateData(id, inputData);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteData = (id) => async (dispatch) => {
  try {
    await api.deleteData(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};