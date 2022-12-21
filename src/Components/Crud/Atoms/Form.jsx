import { useState, useEffect, useMemo } from 'react';
import { CiSaveDown1 } from "react-icons/ci";
import { TbFileUpload } from 'react-icons/tb';
import { DriverCard } from '../../Home/drivers/Atoms/CardDrivers';
import { SearchBar } from '../../Nav/Atoms/searchBar';
import { uploadDriver,uploadHelmet } from '../../../JS/firebase.js';
import { GetDriver } from '../../../JS/getDataAPI.js';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { controlsBy } from '../../../JS/controlsCrud.js';

export function Form () {

    const { name } = useParams();

    const [values, setValues] = useState(
        {
            nameDriver: '',
            lastnameDriver: '',
            countryDriver: '',
            numberDriver: '',
            worldChampionships: '',
            winsDriver: '',
            podiumsDriver: '',
            driverImage: '',
            helmetImage: '',
            gradientColor: '#ffffff',
        }
    );

    if (name) {
        useEffect(() => {
            GetDriver(name).then((response) => {
                setValues(response[0]);
            });
            controlsBy(name);
        }, [name]);
    }
    else {
        useEffect(() => {
            setValues({
                nameDriver: '',
                lastnameDriver: '',
                countryDriver: '',
                numberDriver: '',
                worldChampionships: '',
                winsDriver: '',
                podiumsDriver: '',
                driverImage: '',
                helmetImage: '',
                gradientColor: '#ffffff',
            })
            controlsBy(name);
        }, [name]);
    }
    
        

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

    const handlePatch = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(values));
        const responseSend = await fetch('http://localhost:3001/api/drivers', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const data = await responseSend.json();
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        console.log(values);
        const responseSend = await fetch('http://localhost:3001/api/drivers', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values.driverImage)
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
            nameDriver: '',
            lastNameDriver: '',
            countryDriver: '',
            numberDriver: '',
            worldChampionships: '',
            winsDriver: '',
            podiumsDriver: '',
            driverImage: '',
            helmetImage: '',
            gradientColor: '#ffffff',
        });
    }
    const notifyPatch = (event) => {
        toast.promise(
            handlePatch(event),
            {
                loading: 'Patching...',
                success: <b>Patched!</b>,
                error: <b>Something went wrong</b>,
            } 
        );
        setValues({
            nameDriver: '',
            lastNameDriver: '',
            countryDriver: '',
            numberDriver: '',
            worldChampionships: '',
            winsDriver: '',
            podiumsDriver: '',
            driverImage: '',
            helmetImage: '',
            gradientColor: '#ffffff',
        });
    }
    const notifyDelete = (event) => {
        toast.promise(
            handleDelete(event),
            {
                loading: 'Deleting...',
                success: <b>Deleted!</b>,
                error: <b>Something went wrong</b>,
            } 
        );
        setValues({
            nameDriver: '',
            lastNameDriver: '',
            countryDriver: '',
            numberDriver: '',
            worldChampionships: '',
            winsDriver: '',
            podiumsDriver: '',
            driverImage: '',
            helmetImage: '',
            gradientColor: '#ffffff',
        });
    }
        
    return (
        <>
            <Toaster />
            <div className='leftSideDiv'>
                <SearchBar />
                <form className="__Form-Content" onSubmit={handleSubmit}>
                    <div className="__Form-Content-Controls">
                        <label>Name</label>
                        <input name='nameDriver' id="inputName" className="input" onChange={handleInputChange} value={values.nameDriver}/>
                    </div>
                    <div className="__Form-Content-Controls">
                        <label>Last Name</label>
                        <input name='lastNameDriver' id="inputLastName" className="input" onChange={handleInputChange} value={values.lastnameDriver}/>
                    </div>
                    <div className="__Form-Content-Controls">
                        <label>Nacionality</label>
                        <input name='countryDriver' id="inputNacionalidad" className="input" onChange={handleInputChange} value={values.countryDriver}/>
                    </div>
                    <div className="__Form-Content-Controls">
                        <label>Number</label>
                        <input name='numberDriver' id="inputNumero" className="input" onChange={handleInputChange} value={values.numberDriver}/>
                    </div>
                    <div className="__Form-Content-Controls">
                        <label>Championships</label>
                        <input name='worldChampionships' id="inputMundiales" className="input" onChange={handleInputChange} value={values.worldChampionships}/>
                    </div>
                    <div className="__Form-Content-Controls">
                        <label>Wins</label>
                        <input name='winsDriver' id="inputVictorias" className="input" onChange={handleInputChange} value={values.winsDriver}/>
                    </div>
                    <div className="__Form-Content-Controls">
                        <label>Podiums</label>
                        <input name='podiumsDriver' id="inputPodios" className="input" onChange={handleInputChange} value={values.podiumsDriver}/>
                    </div>
                    <div className="__Form-Content-Controls">
                        <input name='driverImage' id="inputPiloto" type="file" className="fileInput" accept="image/png" onChange={ handleImageDriver }/>
                        <label htmlFor="inputPiloto" className="labelFile">Upload Driver</label>
                    </div>
                    <div className="__Form-Content-Controls">
                        <input name='helmetImage' id="inputCasco" type="file" className="fileInput" accept="image/png" onChange={handleImageHelmet}/>
                        <label htmlFor="inputCasco" className="labelFile">Upload Helmet</label>
                    </div>
                    <div className="__Form-Content-Controls">
                        <input name='gradientColor' id="inputDegradado" className="inputColor" type='color' onChange={handleInputChange} value={values.gradientColor}/>
                    </div>
                    <button type="submit" className='btnSubmit' onClick={notify} id='btnSave'>Save</button>
                    <button type="button" className='btnPatch' onClick={notifyPatch} id='btnPatch'>Patch</button>
                    <button type="button" className='btnDelete' onClick={notifyDelete} id='btnDelete'>Delete</button>
                </form>
            </div>
            <DriverCard name={values.nameDriver} lastName={values.lastnameDriver} driverImage={values.driverImage} worldChampionships={values.worldChampionships} podiums={values.podiumsDriver} wins={values.winsDriver} gradientColor={values.gradientColor} countryFlag={values.countyDriver} number={values.numberDriver} helmetImg={values.helmetImage}/>
        </>
    )
}