import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../mockAPI';
import PropertyList from '../components/PropertyList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Sorting from '../components/Sorting';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProperties();
      setProperties(result);
      setFilteredProperties(result);
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filtered = properties.filter((property) =>
      property.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleSort = (sortBy) => {
    const sorted = [...filteredProperties].sort((a, b) => a[sortBy] - b[sortBy]);
    setFilteredProperties(sorted);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Sorting onSort={handleSort} />
      <PropertyList properties={currentProperties} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProperties.length / propertiesPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
