# browser-database

Simple client-side database based on localStorage. It creates in localStorage document-oriented database and provides basic data fetch/update methods.

[![travis ci](https://travis-ci.org/s-kalaus/browser-database.svg?branch=master)](https://travis-ci.org/s-kalaus/browser-database) [![npm version](https://badge.fury.io/js/browser-database.svg)](https://badge.fury.io/js/browser-database)

[Coverage Report](https://s-kalaus.github.io/browser-database/coverage/class/index.html)

[Documentation](https://s-kalaus.github.io/browser-database/documentation/index.html)

[Demo](https://s-kalaus.github.io/browser-database/demo/index.html) (Add only)

## Installation
`npm install browser-database` - install package

## Usage
* Include with (plain JavaScript for browser):
```
<script src="node_modules/browser-database/dist/browser-database.js"></script>

<script>
    browserDatabase.insert('modelName', {field: 'value'});
</script>
```

* Include with (ES6):
```
import {BrowserDatabase} from 'browser-database';

const browserDatabase = new BrowserDatabase({
    storageType: 'localStorage',
    storageKey: 'databaseName'
});

browserDatabase.insert('modelName', {field: 'value'})
    .then(row => console.log(row))
    .catch(err => console.error(err));
```
## BrowserDatabase options
* `storageType: string` - type of storage to use: `localStorage`
* `storageKey: string` - database name
## Methods
* `insert(table: string, row: object)` - add new record
* `update(table: string, id: number, row: object)` - update record for specific id
* `remove(table: string, id: number)` - remove record
* `getAll(table: string)` - get all records
* `getById(table: string, id: number)` - get record by id
* `subscribe(callback: Function)` - subscribe to datbase updates. Callback will be called with 3 parameters:
* `table` - name of table
* `action` - performed action: `insert`, `update`, `remove`
* `result` - result of action (new/updated/removed row data)
## Development
* `npm run clear` - clear `/dist` folder
* `npm run build` - build production version
* `npm run watch` - run watcher & build in development mode
* `npm run lint` - run linter
* `npm run test` - run karma unit tests
* `npm run coverage` - run karma unit tests & generate coverage report to `/coverage` folder
* `npm run doc` - gerenate documentation to `/documentation` folder
