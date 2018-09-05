export interface IStorage {
    data: any;
    storageKey: string;
    getAll(modelName: string): Promise<object>;
    getById(modelName: string, id: number | string): Promise<object>;
    insert(modelName: string, row: object): Promise<object>;
    update(modelName: string, id: number | string, row: object): Promise<object>;
    remove(modelName: string, id: number | string): Promise<object>;
    save(): Promise<object>;
    load(): Promise<object>;
}
