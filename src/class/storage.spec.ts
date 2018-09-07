import {Storage} from './storage';

describe('Storage', () => {
  let inst: any;

  beforeEach(() => {
    inst = new Storage();
  });

  it('should create instance and have defaults', () => {
    expect(inst).toEqual(jasmine.any(Object));
    expect(inst.data).toEqual({});
    expect(inst.storageKey).toBe('browser-database');
  });

  describe('Function: getAll', () => {
    it('should exist', () => {
      expect(inst.getAll).toEqual(jasmine.any(Function));
    });

    it('should call ensureModel', () => {
      spyOn(inst, 'ensureModel').and.callThrough();
      inst.getAll('test');
      expect(inst.ensureModel).toHaveBeenCalledWith('test');
    });

    it('should return proper data', () => {
      inst.data = {test: {id: {field: 'value'}}};
      inst.getAll('test').then((data: any) => {
        expect(data).toEqual([{id: 'id', field: 'value'}]);
      });
    });
  });

  describe('Function: getById', () => {
    it('should exist', () => {
      expect(inst.getById).toEqual(jasmine.any(Function));
    });

    it('should call ensureModel', () => {
      spyOn(inst, 'ensureModel').and.callThrough();
      inst.getById('test', 'id');
      expect(inst.ensureModel).toHaveBeenCalledWith('test');
    });

    it('should return proper data', () => {
      inst.data = {test: {id: {field: 'value'}}};
      inst.getById('test', 'id').then((data: any) => {
        expect(data).toEqual({id: 'id', field: 'value'});
      });
    });

    it('should handle error', () => {
      inst.getById('test', 'id').then((data: any) => {
        expect(data).toEqual(new Error('Item Not Found'));
      });
    });
  });

  describe('Function: insert', () => {
    it('should exist', () => {
      expect(inst.insert).toEqual(jasmine.any(Function));
    });

    it('should call ensureModel', () => {
      spyOn(inst, 'ensureModel').and.callThrough();
      inst.insert('test', {});
      expect(inst.ensureModel).toHaveBeenCalledWith('test');
    });

    it('should return proper data (id set)', () => {
      inst.insert('test', {id: 'id', field: 'value'}).then((data: any) => {
        expect(data).toEqual({id: 'id', field: 'value'});
      });
    });

    it('should return proper data', () => {
      inst.insert('test', {field: 'value'}).then((data: any) => {
        expect(data).toEqual({id: jasmine.any(String), field: 'value'});
      });
    });

    it('should handle error', () => {
      spyOn(inst, 'save').and.callFake(() => Promise.reject(new Error('test')));
      inst.insert('test', {}).then((data: any) => {
        expect(data).toEqual(new Error('test'));
      });
    });
  });

  describe('Function: update', () => {
    it('should exist', () => {
      expect(inst.update).toEqual(jasmine.any(Function));
    });

    it('should call ensureModel', () => {
      spyOn(inst, 'ensureModel').and.callThrough();
      inst.update('test', 'id', {});
      expect(inst.ensureModel).toHaveBeenCalledWith('test');
    });

    it('should return proper data', () => {
      inst.data = {test: {id: {field: 'value'}}};
      inst.update('test', 'id', {field: 'value'}).then((data: any) => {
        expect(data).toEqual({id: 'id', field: 'value'});
      });
    });

    it('should return proper data (not found)', () => {
      inst.update('test', 'id', {field: 'value'}).then((data: any) => {
        expect(data).toEqual({id: 'id', field: 'value'});
      });
    });

    it('should handle error', () => {
      spyOn(inst, 'save').and.callFake(() => Promise.reject(new Error('test')));
      inst.update('test', 'id', {field: 'value'}).then((data: any) => {
        expect(data).toEqual(new Error('test'));
      });
    });
  });

  describe('Function: remove', () => {
    it('should exist', () => {
      expect(inst.remove).toEqual(jasmine.any(Function));
    });

    it('should call ensureModel', () => {
      spyOn(inst, 'ensureModel').and.callThrough();
      inst.remove('test', 'id');
      expect(inst.ensureModel).toHaveBeenCalledWith('test');
    });

    it('should return proper data', () => {
      inst.data = {test: {id: {field: 'value'}}};
      inst.remove('test', 'id').then((data: any) => {
        expect(data).toEqual({field: 'value'});
      });
    });

    it('should return proper data (not found)', () => {
      inst.remove('test', 'id').then((data: any) => {
        expect(data).toEqual({field: 'value'});
      });
    });

    it('should handle error', () => {
      spyOn(inst, 'save').and.callFake(() => Promise.reject(new Error('test')));
      inst.remove('test', 'id').then((data: any) => {
        expect(data).toEqual(new Error('test'));
      });
    });
  });

  describe('Function: ensureModel', () => {
    it('should exist', () => {
      expect(inst.ensureModel).toEqual(jasmine.any(Function));
    });

    it('should fix model', () => {
      inst.ensureModel('test');
      expect(inst.data).toEqual({test: {}});
    });

    it('should not touch model if exists', () => {
      inst.data = {test: 1};
      inst.ensureModel('test');
      expect(inst.data).toEqual({test: 1});
    });
  });

  describe('Function: save', () => {
    it('should exist', () => {
      expect(inst.save).toEqual(jasmine.any(Function));
    });

    it('should return proper data', () => {
      inst.save().then((data: any) => {
        expect(data).toEqual({});
      });
    });
  });

  describe('Function: load', () => {
    it('should exist', () => {
      expect(inst.load).toEqual(jasmine.any(Function));
    });

    it('should return proper data', () => {
      inst.load().then((data: any) => {
        expect(data).toEqual({});
      });
    });
  });
});
