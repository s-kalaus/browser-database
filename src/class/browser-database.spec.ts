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
      spyOn(inst.storage, 'insert').and.callThrough();
      inst.insert('test', {test: 1});
      expect(inst.storage.insert).toHaveBeenCalledWith('test', {test: 1});
    });

    it('should call notify', () => {
      spyOn(inst, 'notify').and.callThrough();
      inst.insert('test', {test: 1}).then(() => {
        expect(inst.notify).toHaveBeenCalledWith('test', 'insert', {id: jasmine.any(String), test: 1});
      });
    });
  });

  describe('Function: update', () => {
    it('should exist', () => {
      expect(inst.update).toEqual(jasmine.any(Function));
    });

    it('should call storage.update', () => {
      spyOn(inst.storage, 'update').and.callThrough();
      inst.update('test', 1, {test: 1});
      expect(inst.storage.update).toHaveBeenCalledWith('test', 1, {test: 1});
    });

    it('should call notify', () => {
      inst.storage.data = {test: {1: {}}};
      spyOn(inst, 'notify').and.callThrough();
      inst.update('test', 1, {test: 1}).then(() => {
        expect(inst.notify).toHaveBeenCalledWith('test', 'update', {id: 1, test: 1});
      });
    });
  });

  describe('Function: remove', () => {
    it('should exist', () => {
      expect(inst.remove).toEqual(jasmine.any(Function));
    });

    it('should call storage.remove', () => {
      spyOn(inst.storage, 'remove').and.callThrough();
      inst.remove('test', 1);
      expect(inst.storage.remove).toHaveBeenCalledWith('test', 1);
    });

    it('should call notify', () => {
      inst.storage.data = {test: {1: {}}};
      spyOn(inst, 'notify').and.callThrough();
      inst.remove('test', 1).then(() => {
        expect(inst.notify).toHaveBeenCalledWith('test', 'remove', {});
      });
    });
  });

  describe('Function: notify', () => {
    it('should exist', () => {
      expect(inst.notify).toEqual(jasmine.any(Function));
    });

    it('should call subscription', () => {
      const spy = jasmine.createSpy('callback');
      inst.subscriptions = [spy];
      inst.notify('test', 'insert', {test: 1});
      expect(spy).toHaveBeenCalledWith('test', 'insert', {test: 1});
    });

    it('should return result', () => {
      inst.subscriptions = [];
      expect(inst.notify('test', 'insert', {test: 1})).toEqual({test: 1});
    });
  });

  describe('Function: subscribe', () => {
    it('should exist', () => {
      expect(inst.subscribe).toEqual(jasmine.any(Function));
    });

    it('should add subscription', () => {
      inst.subscribe(() => jasmine.createSpy('callback'));
      expect(inst.subscriptions).toEqual([jasmine.any(Function)]);
    });

    it('should unsubscribe', () => {
      inst.subscriptions = [];
      inst.subscribe(() => jasmine.createSpy('callback'))();
      expect(inst.subscriptions).toEqual([]);
    });
  });
});
