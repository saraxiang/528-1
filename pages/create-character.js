import { useState } from 'react';
import CharacterForm from '../src/components/CharacterForm';

const CreateCharacterPage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (characterData) => {
    try {
      const response = await fetch('/api/characters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterData),
      });

      if (response.ok) {
        setMessage('Character created successfully!');
      } else {
        setMessage('Failed to create character.');
      }
    } catch (error) {
      console.error('Error creating character:', error);
      setMessage('An error occurred while creating the character.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Character</h1>
      <CharacterForm onSubmit={handleSubmit} />
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default CreateCharacterPage;
