import { useState, useEffect } from 'react';
import { repo } from '../db';

export const useFolders = () => {
  const [folders, setFolders] = useState(null);

  useEffect(() => {
    const refresh = async () => {
      setFolders(await repo.folders.list());
    };
    refresh();
  }, []);
  
  return {
    folders,
  };
};