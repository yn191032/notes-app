import { db } from '../db';
import moment from 'moment';

const populateNotes = async (notes) => {
  const today = moment();
  const foldersArr = await db.folders.toArray();
  const folders = foldersArr.reduce((res, item) => {
    res[item.id] = item.title;
    return res;
  }, {});

  const newNotes = notes.map(note => ({
    ...note,
    folder: folders[note.folder],
    date: moment(note.date).to(today),
  }));

  return await newNotes;
};
export const get = async (noteId) => {
  if (!noteId) {
    throw new Error("Invalid note id");
  }
  
  const note = await db.notes.get(Number(noteId));

  if (!note) {
    throw new Error("No note was found");
  }
  
  const today = moment();
  const foldersArr = await db.folders.toArray();
  const folders = foldersArr.reduce((res, item) => {
    res[item.id] = item.title;
    return res;
  }, {});

  return ({
    ...note,
    folder: folders[note.folder],
    date: moment(note.date).to(today),
  });
  
};

export const create = async () => {
  const id = await db.notes.add({ 
    folder: 1,
    date: moment().format(),
    content: '',
  });

  console.log('repo.notes.create', id);

  return await get(Number(id));
};

export const list = async () => {
  const notes = await db.notes
    .reverse()
    .toArray();
  
  return populateNotes(notes);
};

export const listOneFolder = async (folder) => {
  const notes = await db.notes
    .where('folder')
    .equals(Number(folder))
    .toArray();
  
  return populateNotes(notes);
};

export const remove = async (noteId) => {
  if (!noteId) {
    throw new Error("Invalid note id");
  }

  console.log('repo.notes.remove', noteId);

  return await db.notes.delete(Number(noteId));
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