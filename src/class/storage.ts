import * as uuid from 'uuid';

import {IStorageOptions, IStorage} from '../interface';

/*
 * Storage implementation
 */
export class Storage implements IStorage {

  /*
   * Local data holder
   */
  data: {[modelName: string]: any} = {};

  /*
   * Storage key holder
   */
  storageKey: string;

  /*
   * Constructor
   *
   * @param options Options for storage
   */
  constructor(options: IStorageOptions = {}) {

    this.storageKey = options.storageKey || 'browser-database';

    this.load();
  }

  /*
   * Get list of records
   *
   * @param modelName Name of model
   */
  getAll(modelName: string): Promise<object> {

    this.ensureModel(modelName);

    const ret = Object.keys(this.data[modelName]).map((id) => Object.assign({id}, this.data[modelName][id]));

    return Promise.resolve(ret);
  }

  /*
   * Get single record by id
   *
   * @param modelName Name of model
   * @param id ID of primary key
   */
  getById(modelName: string, id: number | string): Promise<object> {

    this.ensureModel(modelName);

    const row = this.data[modelName][id];

    if (row === undefined) {
      return Promise.reject(new Error('Item Not Found'));
    }

    const ret = Object.assign({id}, this.data[modelName][id]);

    return Promise.resolve(ret);
  }

  /*
   * Insert new record
   *
   * @param modelName Name of model
   * @param row Row data
   */
  insert(modelName: string, row: object): Promise<object> {

    this.ensureModel(modelName);

    const id = (row as any).id || uuid.v4();

    delete (row as any).id;

    this.data[modelName][id] = row;

    return this.save()
      .then(() => this.getById(modelName, id));
  }

  /*
   * Update existing record
   *
   * @param modelName Name of model
   * @param id ID of primary key
   * @param row Row data
   */
  update(modelName: string, id: number | string, row: object): Promise<object> {

    this.ensureModel(modelName);

    const theRow = this.data[modelName][id];

    if (theRow === undefined) {
      return Promise.reject(new Error('Item Not Found'));
    }

    Object.assign(theRow, row);

    return this.save()
      .then(() => this.getById(modelName, id));
  }

  /*
   * Remove existing record
   *
   * @param modelName Name of model
   * @param id ID of primary key
   */
  remove(modelName: string, id: number | string): Promise<object> {

    this.ensureModel(modelName);

    const theRow = this.data[modelName][id];

    if (theRow === undefined) {
      return Promise.reject(new Error('Item Not Found'));
    }

    delete this.data[modelName][id];

    return this.save()
      .then(() => Promise.resolve(theRow));
  }

  /*
   * Saves data to storage
   */
  save(): Promise<object> {

    return Promise.resolve(this.data);
  }

  /*
   * Loads data from storage
   */
  load(): Promise<object> {

    return Promise.resolve(this.data);
  }

  /*
   * Checks if model exists and creates it if not
   *
   * @param modelName Name of model
   */
  private ensureModel(modelName: string): void {

    if (this.data[modelName] === undefined) {
      this.data[modelName] = {};
    }
  }
}
