import { useState } from "react";
import { DriverCard } from '../../Home/drivers/Atoms/CardDrivers';
import { uploadDriver,uploadHelmet } from '../../../JS/firebase.js';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';