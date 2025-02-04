import { useState } from 'react';

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);

  const generateImage = async (e) => {
    e.preventDefault();
    
    try {
      setIsError(false);
      setStatus('Generating image...');
      
      const response = await fetch('http://localhost:5000/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setImage(data.image);
      setStatus('');
      
    } catch (error) {
      setIsError(true);
      setStatus('Error generating image');
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI Image Generator
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter a prompt to generate an AI image
          </p>
        </div>

        {/* Form */}
        <form onSubmit={generateImage} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your image prompt"
              required
              className="flex-1 min-w-0 rounded-lg border-gray-300 shadow-sm 
                focus:border-indigo-500 focus:ring-indigo-500 
                px-4 py-2 text-gray-900"
            />
            <button
              type="submit"
              className="inline-flex justify-center rounded-lg bg-indigo-600 
                px-4 py-2 text-sm font-semibold text-white shadow-sm 
                hover:bg-indigo-500 focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600 transition-colors
                sm:w-auto w-full"
            >
              Generate Image
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status && (
          <div className={`text-center mb-8 text-sm ${
            isError ? 'text-red-600' : 'text-gray-600'
          }`}>
            {status}
          </div>
        )}

        {/* Image Display */}
        {image && (
          <div className="rounded-lg overflow-hidden bg-white shadow-lg">
            <img 
              src={image} 
              alt="AI Generated" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageGenerator; 