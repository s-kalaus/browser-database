import { Storage } from './storage';
export declare class LocalStorage extends Storage {
    save(): Promise<object>;
    load(): Promise<object>;
}
