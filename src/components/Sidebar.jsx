import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categories = useSelector(state => state.category)

  return (
    <ul className={'sidebar'}>
      {categories.map((category) => {
          let oldCategory = searchParams.get('category')
          let oldBrand = searchParams.get('brand')
          let isActive = ''

          if (category === oldCategory) isActive = ' active'

          return (<li
            key={category}
            onClick={() => {
              setSearchParams(
                oldBrand
                  ? category === oldCategory
                    ? {brand: oldBrand}
                    : {category: category, brand: oldBrand}
                  : category === oldCategory
                    ? {}
                    : {category: category}
              )
            }}
            className={'sidebar__list' + isActive}>
            {category}
          </li>)
        }
      )}
    </ul>
  );
};

export default Sidebar;