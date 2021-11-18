import { useContext } from 'react';
import { ContractContext } from '../contexts/ContractContext';

export const useContract = () => useContext(ContractContext);
