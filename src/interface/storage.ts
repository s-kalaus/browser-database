/*
 * Interface for BrowserDatabaseOptions
 */
export interface IStorage {

  /*
   * Local data holder
   */
  data: any;

  /*
   * Storage key holder
   */
  storageKey: string;

  /*
   * Get list of records
   *
   * @param modelName Name of model
   */
  getAll(modelName: string): Promise<object>;

  /*
   * Get single record by id
   *
   * @param modelName Name of model
   * @param id ID of primary key
   */
  getById(modelName: string, id: number | string): Promise<object>;

  /*
   * Insert new record
   *
   * @param modelName Name of model
   * @param row Row data
   */
  insert(modelName: string, row: object): Promise<object>;

  /*
   * Update existing record
   *
   * @param modelName Name of model
   * @param id ID of primary key
   * @param row Row data
   */
  update(modelName: string, id: number | string, row: object): Promise<object>;

  /*
   * Remove existing record
   *
   * @param modelName Name of model
   * @param id ID of primary key
   */
  remove(modelName: string, id: number | string): Promise<object>;

  /*
   * Saves data to storage
   */
  save(): Promise<object>;

  /*
   * Loads data from storage
   */
  load(): Promise<object>;
}
