/*
 * Interface for BrowserDatabaseOptions
 */
export interface IBrowserDatabaseOptions {

  /*
   * Type of storage
   */
  storageType?: 'localStorage' | 'sessionStorage';

  /*
   * Key of storage
   */
  storageKey?: string;
}
