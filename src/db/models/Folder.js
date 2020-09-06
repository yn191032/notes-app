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
  return await db.folders
    .reverse()
    .toArray();
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