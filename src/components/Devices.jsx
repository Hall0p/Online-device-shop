import React from 'react';
import {Link, useSearchParams} from "react-router-dom";
import star from "../assets/img/star.svg";
import {useSelector} from "react-redux";

const Devices = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const devices = useSelector(state => state.devices)
  return (
    <div className="devices">
      {devices.filter( device => {
        let category = searchParams.get('category')
        let brand = searchParams.get('brand')
        if (!category && !brand) return true
        return ((category ? category === device.category : true) && (brand ? brand === device.brand : true))
      })
        .map(device =>
          <div key={device.id} className='device'>
            <Link to={'/device/' + device.id} className="device">
            <img src={device.image} alt="device" className="device__img"/>
            <div className="device-info">
              <div className='device-info__wrapper'>
                <span className="device__type">
                  {device.brand}
                </span>
                <div className="device-rating">
                  <span className="device-rating__rating">
                    {device.rating}
                  </span>
                  <img src={star} alt="star" className="device-rating__star"/>
                </div>
              </div>
              <span className="device__name">
                {device.name}
              </span>
            </div>
          </Link></div>
        )}
    </div>
  );
};

export default Devices;