import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import SingleTransfer from '../components/user/SingleTransfer';
import BatchTransfer from '../components/user/BatchTransfer';

import {
    useContract,
    useContractRead,
    usePrepareContractWrite,
    useContractWrite,
    useSigner,
    useWaitForTransaction,
    chain,
} from "wagmi";

import { getContractData } from '../utils';

const [contractAddress, contractABI] = getContractData();

const buttonSingleTextDefault = "Transferir"

export default function ApplicationSite() {

    const { data: signerData } = useSigner();
    const Contract = useContract({
        address: contractAddress,
        abi: contractABI,
        signerOrProvider: signerData
    });

    const [buttonSingleText, setButtonSingleText] = useState(buttonSingleTextDefault);
    const [valueSingle, setValueSingle] = useState();
    const [areaSingle, setAreaSingle] = useState(0);
    const [addressSingle, setAddressSingle] = useState("");
    const [batchAddress, setBatchAddress] = useState();
    const [batchValue1, setBacthValue1] = useState();
    const [batchArea1, setBatchArea1] = useState();
    const [batchValue2, setBacthValue2] = useState();
    const [batchArea2, setBatchArea2] = useState();
    const [batchValue3, setBacthValue3] = useState();
    const [batchArea3, setBatchArea3] = useState();
    const [areaView, setAreaView] = useState();
    const [addressNew, setAddressNew] = useState();
    const [areaNew, setAreaNew] = useState();

    
    const transferSingle = async () =>{
        if(!signerData) {
            alert("Conecte a carteira para transferir")
            return
        }
        if(buttonSingleText !== buttonSingleTextDefault){
            return
        }
        let txReceipt
    }


      function handleAreaViewChange(e) {
        setAreaView(e.target.value);
      }
    
      function handleAddressNewChange(e) {
        setAddressNew(e.target.value);
      }
    
      function handleAreaNewChange(e) {
        setAreaNew(e.targer.value);
      }

    return (
        <>
            <Head>
                <title>App Orçamento da União 2023</title>
                <meta name="description" content="Created by FGV-ECMI" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/fgv.ico" />
            </Head>
            <ConnectButton />
            <main className={styles.main}>
                <div className={styles.center}>
                    <h2>Repasses</h2>
                </div>
                <div>
                    <p>Transferência simples</p>
                    <SingleTransfer 
                        valueSingle={valueSingle}
                        areaSingle={areaSingle}
                        setValueSingle={setValueSingle}
                        setAreaSingle={setAreaSingle}
                        setAddressSingle={setAddressSingle}
                    />
                </div>
                <div>
                    <p>Transferência em lote</p>
                    <BatchTransfer
                        setBatchAddress={setBatchAddress}
                        setBacthValue1={setBacthValue1}
                        setBacthValue2={setBacthValue2}
                        setBacthValue3={setBacthValue3}
                        setBatchArea1={setBatchArea1}
                        setBatchArea2={setBatchArea2}
                        setBatchArea3={setBatchArea3}
                    />
                </div>
                <div className={styles.center}>
                    <h2>Consulta</h2>
                </div>
                <div>
                    <p>Consulta de Areas</p>
                    <input
                        placeholder = "endereço"
                        value = {areaView}
                        onChange = {handleAreaViewChange}
                    />
                    <button>Consultar</button>
                </div> 
                
            </main>
            
        </>      
    )

}