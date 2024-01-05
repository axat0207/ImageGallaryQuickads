// PortfolioPage.tsx
import { useState } from 'react';
import Header from '../components/Navbar';
import FilterButtons from '../components/FileButtons';
import PortfolioItem from '../components/PortfolioItem';
interface PortfolioItem {
    category: string;
    imageSrc: string;
    title: string;
    description: string;
  }
const PortfolioPage: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const items: PortfolioItem[]  = [
    {
      category: 'nature',
      imageSrc: '/w3images/mountains.jpg',
      title: 'Mountains',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'nature',
      imageSrc: '/w3images/lights.jpg',
      title: 'Lights',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'nature',
      imageSrc: '/w3images/nature.jpg',
      title: 'Forest',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'cars',
      imageSrc: '/w3images/cars1.jpg',
      title: 'Retro',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'cars',
      imageSrc: '/w3images/cars2.jpg',
      title: 'Fast',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'cars',
      imageSrc: '/w3images/cars3.jpg',
      title: 'Classic',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'people',
      imageSrc: '/w3images/people1.jpg',
      title: 'Girl',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'people',
      imageSrc: '/w3images/people2.jpg',
      title: 'Man',
      description: 'Lorem ipsum dolor..',
    },
    {
      category: 'people',
      imageSrc: '/w3images/people3.jpg',
      title: 'Woman',
      description: 'Lorem ipsum dolor..',
    },
  ];
  
  const filteredItems =
    filters.length === 0
      ? items
      : items.filter((item) => filters.some((filter) => item.category === filter));

  return (
    <div className="main">
      <Header />
      <FilterButtons handleFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <PortfolioItem
            key={index}
            category={item.category}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
