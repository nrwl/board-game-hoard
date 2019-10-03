import { Game } from '@bghoard/api-interfaces';
import { useEffect, useState } from 'react';

export function useGames() {
  const [games, setGame] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then(r => r.json())
      .then(setGame);
  }, []);

  return games;
}
