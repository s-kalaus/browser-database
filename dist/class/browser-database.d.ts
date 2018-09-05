import { IBrowserDatabaseOptions, IStorage } from '../interface';
export declare class BrowserDatabase {
    storages: {
        [key: string]: any;
    };
    storage: IStorage;
    constructor(options?: IBrowserDatabaseOptions);
    getAll(modelName: string): Promise<object>;
    getById(modelName: string, id: number | string): Promise<object>;
    insert(modelName: string, row: object): Promise<object>;
    update(modelName: string, id: number | string, row: object): Promise<object>;
    remove(modelName: string, id: number | string): Promise<object>;
}
