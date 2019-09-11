import React, { useState, useEffect } from 'react';
import { Game } from '@bghoard/api-interfaces';

export function useGames() {
  const [games, setGame] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then(r => r.json())
      .then(setGame);
  }, []);

  return games;
}
