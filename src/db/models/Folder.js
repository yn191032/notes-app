import { db } from '../db';

export const get = async (folderId) => {
  if (!folderId) {
    throw new Error("Invalid folder id");
  }
  return await db.folders.get(folderId);
};

export const create = async (folder) => {
  if (!folder.title) {
    return null;
  }
  const id = await db.folders.add({ ...folder });
  return await db.folders.get(id);
};

export const list = async () => {
  const notes = await db.notes
    .toArray();
  const folders = await db.folders
    // .reverse()
    .toArray();

  const countNotes = (folderId) => {
    return notes.filter(note => note.folder === folderId).length;
  };

  return folders.map(folder => ({
    ...folder,
    count: countNotes(folder.id)
  }));
};

export const remove = async (folderId) => {
  if (!folderId) {
    throw new Error("Invalid folder id");
  }
  return await db.folders.delete(folderId);
};

export const count = async () => {
  return await db.folders.count();
};