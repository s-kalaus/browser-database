import {LocalStorage} from './local-storage';

declare var window: any;

describe('LocalStorage', () => {
  let inst: any;

  beforeEach(() => {
    inst = new LocalStorage();
  });

  it('should create instance', () => {
    expect(inst).toEqual(jasmine.any(Object));
  });

  describe('Function: save', () => {
    it('should exist', () => {
      expect(inst.save).toEqual(jasmine.any(Function));
    });

    it('should call window.localStorage.setItem', () => {
      spyOn(window.localStorage, 'setItem');
      inst.data = {test: 1};
      inst.save();
      expect(window.localStorage.setItem).toHaveBeenCalledWith('browser-database', '{"test":1}');
    });

    it('should return proper data', () => {
      inst.data = {test: 1};
      inst.save().then((data: any) => {
        expect(data).toEqual({test: 1});
      });
    });

    it('should return error', () => {
      spyOn(window.localStorage, 'setItem').and.callFake(() => { throw new Error(); });
      inst.save().then((err: any) => {
        expect(err).toEqual(new Error('Error saving to localStorage'));
      });
    });
  });

  describe('Function: load', () => {
    it('should exist', () => {
      expect(inst.load).toEqual(jasmine.any(Function));
    });

    it('should call window.localStorage.getItem', () => {
      spyOn(window.localStorage, 'getItem');
      inst.load();
      expect(window.localStorage.getItem).toHaveBeenCalledWith('browser-database');
    });

    it('should return proper data', () => {
      window.localStorage.setItem('browser-database', '{"test":1}');
      inst.load().then((data: any) => {
        expect(data).toEqual({test: 1});
      });
    });

    it('should return error', () => {
      spyOn(window.localStorage, 'getItem').and.callFake(() => { throw new Error(); });
      inst.load().then((err: any) => {
        expect(err).toEqual(new Error('Error reading from localStorage'));
      });
    });
  });
});
