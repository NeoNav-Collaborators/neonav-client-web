import executeApi from '@/utilites/executeApi';
import { 
  APIResponse,
  DispatchFunc,
  netcheckAPIResData,
} from "./nnTypes";
import { getCookieToken } from '@/utilites/cookieContext';
import { clearLocalStorage } from '@/utilites/localStorage';
import { storedRecently, getLocalStorage, storeFetched } from '@/utilites/localStorage';

export const fetchContact = (dispatch: DispatchFunc) => async (id:string, verbose:boolean) => {
  const token = getCookieToken();
  const onSuccess = (response:APIResponse) => {
    const { data } = response;
    dispatch({
      type: 'setEntity',
      payload: data,
    });
    return data;
  };
  const onError = (err:netcheckAPIResData) => {
    const { message = 'Factions failure' } = err;
    dispatch({
      type: 'setAlert',
      payload: {severity: 'error', message, show: true},
    })
    return err;
  };
  if (verbose) {
    executeApi('profile', {id, token}, onSuccess, onError);
  } else {
    const requestId = id;
    executeApi('identify', {requestId, token}, onSuccess, onError);
  }
}

export const unfriend = (dispatch: DispatchFunc) => async (id:string) => {
  const token = getCookieToken();
  const onSuccess = (response:APIResponse) => {
    const { data } = response;
    clearLocalStorage('lastFetch_contacts');
    dispatch({
      type: 'setAlert',
      payload: {severity: 'success', message:'Bye, Felicia.', show: true},
    })
    return data;
  };
  const onError = (err:netcheckAPIResData) => {
    const { message = 'Unfriend failure. Maybe try couples therapy?' } = err;
    dispatch({
      type: 'setAlert',
      payload: {severity: 'error', message, show: true},
    })
    return err;
  };
  executeApi('unfriend', {id, token}, onSuccess, onError);
}


export const fetchUserContacts = (dispatch: DispatchFunc) => async () => {
  const token = getCookieToken();
  const onSuccess = (response:APIResponse) => {
    const { data } = response;
    storeFetched('contacts', data);
    dispatch({
      type: 'setUserContacts',
      payload: data,
    })
  };
  const onError = (err:netcheckAPIResData) => {
    const { message = 'Contact failure' } = err;
    dispatch({
      type: 'setAlert',
      payload: {severity: 'error', message, show: true},
    })
  };

  if (storedRecently('contacts')) {
    const data = getLocalStorage('contacts');
    dispatch({
      type: 'setUserContacts',
      payload: data,
    })
  } else {
    executeApi('contacts', {token}, onSuccess, onError);
  }
}