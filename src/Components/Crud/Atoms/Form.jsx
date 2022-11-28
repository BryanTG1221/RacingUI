import { useState, useEffect } from 'react';
import { CiSaveDown1 } from "react-icons/ci";
import { TbFileUpload } from 'react-icons/tb';
import { DriverCard } from '../../Home/drivers/Atoms/CardDrivers';
import { uploadDriver,uploadHelmet } from '../../../JS/firebase.js';
import toast, { Toaster } from 'react-hot-toast';

export function Form () {

    const [values, setValues] = useState(
        {
            name: '',
            lastName: '',
            nacionality: '',
            number: '',
            championship: '',
            wins: '',
            podiums: '',
            driverPhoto: '',
            helmetPhoto: '',
            gradientColor: '',
        }
    );


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleImageDriver = (e) => {
        const file = e.target.files[0];
        const URLimg = uploadDriver(file);
        URLimg.then((url) => {
            setValues({
                ...values,
                driverPhoto: url
            });
        });
    }
    
    const handleImageHelmet = (e) => {
        const file = e.target.files[0];
        const URLimg = uploadHelmet(file);
        URLimg.then((url) => {
            setValues({
                ...values,
                helmetPhoto: url
            });
        });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        const responseSend = await fetch('http://localhost:3001/api/drivers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const data = await responseSend.json();
    }

    const notify = (event) => {
        toast.promise(
            handleSubmit(event),
            {
                loading: 'Adding...',
                success: <b>Added!</b>,
                error: <b>Something went wrong</b>,
            } 
        );
        setValues({
            name: '',
            lastName: '',
            nacionality: '',
            number: '',
            championship: '',
            wins: '',
            podiums: '',
            driverPhoto: '',
            helmetPhoto: '',
            gradientColor: '',
        });
    }
        
    
    return (
        <>
            <Toaster />
            <form className="__Form-Content" onSubmit={handleSubmit}>
                <div className="__Form-Content-Controls">
                    <label>Name</label>
                    <input name='name' id="inputName" className="input" onChange={handleInputChange} value={values.name}/>
                </div>
                <div className="__Form-Content-Controls">
                    <label>Last Name</label>
                    <input name='lastName' id="inputLastName" className="input" onChange={handleInputChange} value={values.lastName}/>
                </div>
                <div className="__Form-Content-Controls">
                    <label>Nacionality</label>
                    <input name='nacionality' id="inputNacionalidad" className="input" onChange={handleInputChange} value={values.nacionality}/>
                </div>
                <div className="__Form-Content-Controls">
                    <label>Number</label>
                    <input name='number' id="inputNumero" className="input" onChange={handleInputChange} value={values.number}/>
                </div>
                <div className="__Form-Content-Controls">
                    <label>Championships</label>
                    <input name='championship' id="inputMundiales" className="input" onChange={handleInputChange} value={values.championship}/>
                </div>
                <div className="__Form-Content-Controls">
                    <label>Wins</label>
                    <input name='wins' id="inputVictorias" className="input" onChange={handleInputChange} value={values.wins}/>
                </div>
                <div className="__Form-Content-Controls">
                    <label>Podiums</label>
                    <input name='podiums' id="inputPodios" className="input" onChange={handleInputChange} value={values.podiums}/>
                </div>
                <div className="__Form-Content-Controls">
                    <input name='driverPhoto' id="inputPiloto" type="file" className="fileInput" accept="image/png" onChange={ handleImageDriver }/>
                    <label htmlFor="inputPiloto" className="labelFile">Upload Driver</label>
                </div>
                <div className="__Form-Content-Controls">
                    <input name='helmetPhoto' id="inputCasco" type="file" className="fileInput" accept="image/png" onChange={handleImageHelmet}/>
                    <label htmlFor="inputCasco" className="labelFile">Upload Helmet</label>
                </div>
                <div className="__Form-Content-Controls">
                    <input name='gradientColor' id="inputDegradado" className="inputColor" type='color' onChange={handleInputChange} value={values.gradientColor}/>
                </div>
                <button type="submit" className='btnSubmit' onClick={notify}>Guardar</button>
            </form>
            <DriverCard name={values.name} lastName={values.lastName} driverImage={values.driverPhoto} worldChampionships={values.championship} podiums={values.podiums} wins={values.wins} gradientColor={values.gradientColor} countryFlag={values.nacionality} number={values.number} helmetImg={values.helmetPhoto}/>
        </>
    )
}