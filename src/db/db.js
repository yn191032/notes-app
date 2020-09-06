import Dexie from 'dexie';

import initFolders from '../data/folders';
import initNotes from '../data/notes';

export const firstNote = { content: 'Create a new note or use this one.' };
export const defaultFolder = { title: 'default' };

class DB extends Dexie {
  constructor(dbName) {
    super(dbName);
    
    this.version(1).stores({
      notes: '++id, content, folder, date',
      folders: '++id, title',
    });

    this.notes = this.table('notes');
    this.folders = this.table('folders');

    this.on('populate', () => {
      this.notes.add(firstNote);
      this.notes.bulkAdd(initNotes);

      this.folders.add(defaultFolder);
      this.folders.bulkAdd(initFolders);
    });
  }
}

export const db = new DB('notes_database');