import {BrowserDatabase} from './browser-database';
import {LocalStorage} from './local-storage';

describe('BrowserDatabase', () => {
    let inst: any;

    beforeEach(() => {
        inst = new BrowserDatabase();
    });

    it('should create instance and have defaults', () => {
        expect(inst).toEqual(jasmine.any(Object));
        expect(inst.storages).toEqual({localStorage: jasmine.any(Function)});
        expect(inst.storage).toEqual(jasmine.any(Object));
    });

    it('should assign storage (default)', () => {
        expect(inst.storage instanceof LocalStorage).toBe(true);
    });

    it('should assign storage (custom)', () => {
        inst = new BrowserDatabase({storageType: 'localStorage'});
        expect(inst.storage instanceof LocalStorage).toBe(true);
    });

    describe('Function: getAll', () => {
        it('should exist', () => {
            expect(inst.getAll).toEqual(jasmine.any(Function));
        });

        it('should call storage.getAll', () => {
            spyOn(inst.storage, 'getAll');
            inst.getAll('test');
            expect(inst.storage.getAll).toHaveBeenCalledWith('test');
        });
    });

    describe('Function: getById', () => {
        it('should exist', () => {
            expect(inst.getById).toEqual(jasmine.any(Function));
        });

        it('should call storage.getById', () => {
            spyOn(inst.storage, 'getById');
            inst.getById('test', 1);
            expect(inst.storage.getById).toHaveBeenCalledWith('test', 1);
        });
    });

    describe('Function: insert', () => {
        it('should exist', () => {
            expect(inst.insert).toEqual(jasmine.any(Function));
        });

        it('should call storage.insert', () => {
            spyOn(inst.storage, 'insert');
            inst.insert('test', {test: 1});
            expect(inst.storage.insert).toHaveBeenCalledWith('test', {test: 1});
        });
    });

    describe('Function: update', () => {
        it('should exist', () => {
            expect(inst.update).toEqual(jasmine.any(Function));
        });

        it('should call storage.update', () => {
            spyOn(inst.storage, 'update');
            inst.update('test', 1, {test: 1});
            expect(inst.storage.update).toHaveBeenCalledWith('test', 1, {test: 1});
        });
    });

    describe('Function: remove', () => {
        it('should exist', () => {
            expect(inst.remove).toEqual(jasmine.any(Function));
        });

        it('should call storage.remove', () => {
            spyOn(inst.storage, 'remove');
            inst.remove('test', 1);
            expect(inst.storage.remove).toHaveBeenCalledWith('test', 1);
        });
    });
});
