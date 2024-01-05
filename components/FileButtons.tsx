// FilterButtons.tsx
interface FilterButtonsProps {
    handleFilter: (filter: string) => void;
  }
  
  const FilterButtons: React.FC<FilterButtonsProps> = ({ handleFilter }) => {
    return (
      <div className="flex justify-center space-x-4 py-4">
        <button className="btn active" onClick={() => handleFilter('all')}>
          Show all
        </button>
        <button className="btn" onClick={() => handleFilter('nature')}>
          Nature
        </button>
        <button className="btn" onClick={() => handleFilter('cars')}>
          Cars
        </button>
        <button className="btn" onClick={() => handleFilter('people')}>
          People
        </button>
      </div>
    );
  };
  
  export default FilterButtons;
  