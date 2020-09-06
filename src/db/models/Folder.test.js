import 'fake-indexeddb/auto';
import { defaultFolder } from '../db';
import { repo } from '../index';

const folders = repo.folders;

describe('folders init', () => {
  it('should init with the default folder', async () => {
    const list = await folders.list();
    const firstFromList = list[list.length-1];

    expect(firstFromList.title).toBe(defaultFolder.title);
  });
});

describe('folders repository', () => {
  const testFolder = { title: 'test' };

  it('should create a new folder', async () => {
    const count = await folders.count();
    const newFolder = await folders.create(testFolder);
    const newCount = await folders.count();

    expect(count).not.toEqual(newCount);
    expect(newFolder).toMatchObject(testFolder);
  });

  it('should remove a folder', async () => {
    const count = await folders.count();
    const newFolder = await folders.create(testFolder);
    const addedCount = await folders.count();
    
    expect(count).not.toEqual(addedCount);
    expect(newFolder).toMatchObject(testFolder);
    
    await folders.remove(newFolder.id);
    const removedCount = await folders.count();

    expect(count).toEqual(removedCount);
  });

  it('should get a folder title by id', async () => {
    const newFolder = await folders.create(testFolder);
    expect((await folders.get(newFolder.id)).title).toBe(testFolder.title);
  });
});