import Dexie from 'dexie';
import initNotes from 'data/notes';

class DB extends Dexie {
  constructor(dbName) {
    super(dbName);
    
    this.version(1).stores({
      notes: '++id, content, folder, date',
    });

    this.notes = this.table('notes');

    this.on('populate', () => {
      if (process.env.NODE_ENV === 'development') {
        this.notes.bulkAdd(initNotes);
      }
    });
  }
}

export const db = new DB('notes_database');