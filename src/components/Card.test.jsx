import { render } from '@testing-library/react';
import Card from './Card'
import { MemoryRouter } from "react-router";

 test('should receive an image URL through a prop', () => {
    const testData = {
      id: '1',
      imageUrl: 'https://example.com/image.jpg', 
      title: 'Test Sculpture',
      author: 'Test Author',
      material: 'Test Material',
      year: '2024',
      location: 'Test Location',
    };

    render(<MemoryRouter><Card data={testData} /></MemoryRouter>);

 });
