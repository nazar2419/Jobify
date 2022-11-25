<<<<<<< HEAD
import React from 'react'
import { FormRow, FormRowSelect } from './';
import { useAppContext} from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
=======
import React, { useState, useMemo } from 'react';
import { FormRow, FormRowSelect } from './';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
>>>>>>> added debounce function for search
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
  } = useAppContext();

  const handleSearch = (e) => {
<<<<<<< HEAD
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  }

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        {/* search position */}
        <div className='form-center'>
          <FormRow 
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormRowSelect 
            labelText='job status'
            name='searchStatus'
=======
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        handleChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow type="text" name="search" value={localSearch} handleChange={optimizedDebounce} />
          {/* search by status */}
          <FormRowSelect
            labelText="job status"
            name="searchStatus"
>>>>>>> added debounce function for search
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          {/* search by type */}
<<<<<<< HEAD
          <FormRowSelect 
            labelText='job type'
            name='searchType'
=======
          <FormRowSelect
            labelText="job type"
            name="searchType"
>>>>>>> added debounce function for search
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
<<<<<<< HEAD
           {/* sort */}
           <FormRowSelect 
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
=======
          {/* sort */}
          <FormRowSelect name="sort" value={sort} handleChange={handleSearch} list={sortOptions} />
          <button className="btn btn-block btn-danger" disabled={isLoading} onClick={handleSubmit}>
>>>>>>> added debounce function for search
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
<<<<<<< HEAD
  )
}

export default SearchContainer
=======
  );
};

export default SearchContainer;
>>>>>>> added debounce function for search
