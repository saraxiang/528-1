import { useState, useEffect } from 'react';

const DashboardPage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('/api/characters');
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const handleCharacterSelect = (e) => {
    const characterId = e.target.value;
    console.log('Selected Character ID:', characterId);
    const character = characters.find((char) => char.id === parseInt(characterId));
    console.log('Selected Character:', character);
    setSelectedCharacter(character);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Character Dashboard</h1>
      <div className="mb-4">
        <label htmlFor="character-select" className="block text-sm font-medium text-gray-700">
          Select a Character
        </label>
        <select
          id="character-select"
          onChange={handleCharacterSelect}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">-- Select a Character --</option>
          {characters.map((character) => (
            <option key={character.id} value={character.id}>
              {character.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCharacter && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{selectedCharacter.name}</h2>
          <p><strong>Race:</strong> {selectedCharacter.race}</p>
          <p><strong>Class:</strong> {selectedCharacter.class}</p>
          <p><strong>Abilities:</strong> {selectedCharacter.abilities}</p>
          <p><strong>Description:</strong> {selectedCharacter.description}</p>
          <p><strong>Equipment:</strong> {selectedCharacter.equipment}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
