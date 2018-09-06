import {IBrowserDatabaseOptions, IStorage} from '../interface';
import {LocalStorage} from './index';

/*
 * Main library class
 */
export class BrowserDatabase {

  /*
   * Storage types
   */
  storages: {[key: string]: any} = {
    localStorage: LocalStorage
  };

  /*
   * Storage reference
   */
  storage: IStorage;

  /*
   * Constructor
   *
   * @param options Options for storage
   */
  constructor(options: IBrowserDatabaseOptions = {}) {

    this.storage = new this.storages[options.storageType || 'localStorage']({
      storageKey: options.storageKey || 'browser-database'
    });
  }

  /*
   * Get list of records
   *
   * @param modelName Name of model
   */
  getAll(modelName: string): Promise<object> {

    return this.storage.getAll(modelName);
  }

  /*
   * Get single record by id
   *
   * @param modelName Name of model
   * @param id ID of primary key
   */
  getById(modelName: string, id: number | string): Promise<object> {

    return this.storage.getById(modelName, id);
  }

  /*
   * Insert new record
   *
   * @param modelName Name of model
   * @param row Row data
   */
  insert(modelName: string, row: object): Promise<object> {

    return this.storage.insert(modelName, row);
  }

  /*
   * Update existing record
   *
   * @param modelName Name of model
   * @param id ID of primary key
   * @param row Row data
   */
  update(modelName: string, id: number | string, row: object): Promise<object> {

    return this.storage.update(modelName, id, row);
  }

  /*
   * Remove existing record
   *
   * @param modelName Name of model
   * @param id ID of primary key
   */
  remove(modelName: string, id: number | string): Promise<object> {

    return this.storage.remove(modelName, id);
  }
}
