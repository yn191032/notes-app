import 'fake-indexeddb/auto';
import { firstNote } from '../db';
import { repo } from '../index';

const notes = repo.notes;

describe('notes init', () => {
  it('should init with the first note', async () => {
    const list = await notes.list();
    const firstFromList = list[list.length-1];

    expect(firstFromList.content).toBe(firstNote.content);
  });
});

describe('notes repository', () => {
  const testNote = { content: 'test' };
  
  it('should create a new note', async () => {
    const count = await notes.count();
    const newNote = await notes.create(testNote);
    const newCount = await notes.count();

    expect(count).not.toEqual(newCount);
    expect(newNote).toMatchObject(testNote);
  });

  it('should return null and ignore without {content}', async () => {
    const count = await notes.count();
    const newNote = await notes.create({ content: '' });
    const newCount = await notes.count();

    expect(newNote).toBeNull();
    expect(count).toEqual(newCount);
  });

  it('should create defaults', async () => {
    const newNote = await notes.create(testNote);

    expect(newNote.id).toBeDefined();
    expect(newNote.content).toBeDefined();
    expect(newNote.folder).toBeDefined();
    expect(newNote.date).toBeDefined();
  });

  it('should get note by id', async () => {
    const newNote = await notes.create(testNote);
    expect((await notes.get(newNote.id)).content).toBe(newNote.content);
  });

  it('should delete note', async () => {
    const count = await notes.count();
    const newNote = await notes.create(testNote);
    const addedCount = await notes.count();
    
    expect(count).not.toEqual(addedCount);
    expect(newNote).toMatchObject(testNote);
    
    await notes.remove(newNote.id);
    const removedCount = await notes.count();

    expect(count).toEqual(removedCount);
  });
  
  it('should update note', async () => {
    const folderIdToUpdate = 2;
    const contentToUpdate = 'updated';
    const newNote = await notes.create(testNote);

    // await notes.update(newNote.id, { folder: folderIdToUpdate });
    // expect((await notes.get(newNote.id)).folder).toBe(folderIdToUpdate);

    await notes.update(newNote.id, { content: contentToUpdate });
    expect((await notes.get(newNote.id)).content).toBe(contentToUpdate);

    expect((await notes.get(newNote.id)).date).not.toBe(newNote.date);
  });

  it('should list folder', async () => {
    await notes.create({ content: 'test', folder: 10 });
    await notes.create({ content: 'test', folder: 10 });
    await notes.create({ content: 'test', folder: 10 });
    await notes.create({ content: 'test', folder: 10 });

    const list = await notes.listOneFolder(10);
    expect(list).toHaveLength(4);
  });
});
