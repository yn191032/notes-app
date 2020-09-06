import { db } from '../db';

export const get = async (noteId) => {
  if (!noteId) {
    throw new Error("Invalid note id");
  }
  
  return await db.notes.get(noteId);
};

export const create = async (note) => {
  if (!note.content) {
    return null;
  }

  const id = await db.notes.add({ 
    folder: 1,
    private: false,
    date: Date.now(),
    ...note,
  });

  return await db.notes.get(id);
};

export const list = async () => {
  return await db.notes
    .reverse()
    .toArray();
};

export const listOneFolder = async (folder) => {
  return await db.notes
    .where('folder')
    .equals(folder)
    .toArray();
};

export const remove = async (noteId) => {
  if (!noteId) {
    throw new Error("Invalid note id");
  }

  return await db.notes.delete(noteId);
};

export const update = async (noteId, note) => {
  if (!noteId) {
    throw new Error("Invalid note id");
  }

  await db.notes.update(noteId, {
    ...note,
    date: Date.now(),
  });

  return await db.notes.get(noteId);
};

export const count = async () => {
  return await db.notes.count();
};