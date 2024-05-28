import { useState } from 'react';

const CharacterForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [abilities, setAbilities] = useState('');
  const [description, setDescription] = useState('');
  const [equipment, setEquipment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, race, characterClass, abilities, description, equipment });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Character Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="race" className="block text-sm font-medium text-gray-700">
          Race
        </label>
        <input
          type="text"
          id="race"
          value={race}
          onChange={(e) => setRace(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="class" className="block text-sm font-medium text-gray-700">
          Class
        </label>
        <input
          type="text"
          id="class"
          value={characterClass}
          onChange={(e) => setCharacterClass(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="abilities" className="block text-sm font-medium text-gray-700">
          Abilities
        </label>
        <textarea
          id="abilities"
          value={abilities}
          onChange={(e) => setAbilities(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">
          Equipment
        </label>
        <textarea
          id="equipment"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Character
        </button>
      </div>
    </form>
  );
};

export default CharacterForm;
