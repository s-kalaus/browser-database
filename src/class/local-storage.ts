import {Storage} from './storage';

declare var window: any;

/*
 * Local Storage implementation
 */
export class LocalStorage extends Storage {

  /*
   * Saves data to storage
   */
  save(): Promise<object> {

    try {

      window.localStorage.setItem(this.storageKey, JSON.stringify(this.data));

      return Promise.resolve(this.data);
    } catch (e) {

      return Promise.reject(new Error('Error saving to localStorage'));
    }
  }

  /*
   * Loads data from storage
   */
  load(): Promise<object> {

    try {

      this.data = JSON.parse(window.localStorage.getItem(this.storageKey) || '{}');

      return Promise.resolve(this.data);
    } catch (e) {

      return Promise.reject('Error reading from localStorage');
    }
  }
}
