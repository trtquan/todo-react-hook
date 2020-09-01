import React from "react";
import PropTypes from "prop-types";
import { VisibilityFilters } from "../const";
const Filter = ({ onChangeFilter }) => (
  <select 
    name="todos"
    className="filter-todo"
    onChange={(e) => onChangeFilter(e.target.value)}
  >
    <option value={VisibilityFilters.SHOW_ALL}>All</option>
    <option value={VisibilityFilters.SHOW_COMPLETED}>Completed</option>
    <option value={VisibilityFilters.SHOW_UNCOMPLETED}>Uncompleted</option>
  </select>
);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
