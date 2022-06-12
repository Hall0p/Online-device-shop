import React, {useState} from 'react';
import MyModal from "./UI/MyModal/MyModal";
import {useDispatch, useSelector} from "react-redux";
import {addDeviceAction} from "../app/deviceReducer";
import {addFeatureAction} from "../app/featureReducer";
import DeviceMain from "./device/DeviceMain";
import DeviceFeature from "./device/DeviceFeature";

const AddDevice = ({modalDevice, setModalDevice}) => {
  const dispatch = useDispatch()

  const devices = useSelector(state => state.devices)

  const [options, setOptions] = useState([{feature: '', value: ''}])
  const [device, setDevice] = useState(
    {id: devices.length + 1, category: '', brand: '', name: '', price: '', rating: '', image: ''},
  )
  const [image, setImage] = useState('')

  const setNewDevice = (event) => {
    event.preventDefault()
    const features = {id: devices.length + 1, options}

    dispatch(addFeatureAction(features))
    dispatch(addDeviceAction(device))

    setOptions([{feature: '', value: ''}])
    setDevice({id: devices.length + 1, category: '', brand: '', name: '', price: '', rating: '', image: ''})
    setImage('')
    setModalDevice(false)
  }

  return (
    <MyModal
      visible={modalDevice}
      setVisible={setModalDevice}
    >
      <form
        className={'modal-device'}
        onSubmit={setNewDevice}
        action="#"
      >
        <DeviceMain options={options} setOptions={setOptions} />
        <DeviceFeature device={device} setDevice={setDevice} image={image} setImage={setImage} />
      </form>
    </MyModal>
  );
};

export default AddDevice;