import { VisibilityFilters } from '../const'
import { useState } from "react";

export const useFilterBy = (value = VisibilityFilters.SHOW_ALL ) => {
    const [filterBy, setFilterBy] = useState(value); 
    
    return {
      filterBy,
      changeFilter: (value) => setFilterBy(value)
    }
}