import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Brands = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const brands = useSelector(state => state.brand)

  return (
      <ul className="content-brands">
        {brands.map(brand => {
            let oldBrand = searchParams.get('brand')
            let oldCategory = searchParams.get('category')
            let isActive = ''

            if (brand === oldBrand) isActive = ' active'

            return (<li
              key={brand}
              onClick={() => {
                setSearchParams(
                  oldCategory
                    ? brand === oldBrand
                      ? {category: oldCategory}
                      : {category: oldCategory, brand: brand}
                    : brand === oldBrand
                      ? {}
                      : {brand: brand}
                )
              }}
              className={"content-brands__brand" + isActive}
            >{brand}</li>)
          }
        )}
      </ul>
  );
};

export default Brands;