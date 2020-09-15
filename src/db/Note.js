import { db } from './db';
import moment from 'moment';

const sortByDate = (arr) => {
  return arr.sort((a, b) => {
    return moment(b.date).diff(a.date);
  });
};

class Note {
  log() { console.log(this) }
};

db.notes.mapToClass(Note);

export const createOne = async (folder = 'default', content = '') => {
  const id = await db.notes.add({ 
    content,
    folder,
    date: moment().format(),
  });
  console.log('repository.notes.create', id);
  return await get(Number(id));
};

export const get = async (id) => {
  const note = await db.notes.get(Number(id));
  console.log('repository.notes.get', id);
  return note;
};

export const list = async () => {
  const notes = await db.notes.toArray();
  console.log('repository.notes.list', notes.length);
  return sortByDate(notes);
}

export const listOneFolder = async (folder) => {
  if (!folder) {
    return list();
  }

  const notes = await db.notes
    .where('folder')
    .equals(folder)
    .reverse()
    .toArray();
  
  console.log('repository.notes.listOneFolder', notes.length);
  return sortByDate(notes);
};

export const listFolders = async () => {
  const folders = await db.notes.orderBy('folder').uniqueKeys();
  console.log('repository.notes.listFolders', folders);
  return folders;
};

export const remove = async (id) => {
  console.log('repository.notes.remove', id);
  return await db.notes.delete(Number(id));
};

export const update = async (id, values) => {
  await db.notes.update(Number(id), {
    ...values,
    date: moment().format(),
  });
  
  console.log('repository.notes.update', id, values);
  return await get(Number(id));
};






// const test = async () => {
//   console.log('get', await get(1));
//   console.log('list', await list());
//   console.log('listFolders', await listFolders());
//   // console.log(await createOne());
//   // (await db.notes.toArray()).map(async i => console.log((await i.format())));
// };
// test();
