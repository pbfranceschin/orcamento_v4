import Head from 'next/head';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import SingleTransfer from '../components/user/SingleTransfer';
import BatchTransfer from '../components/user/BatchTransfer';
import GetArea from '../components/user/GetArea';
import AddOrg from '../components/owner/AddOrg';
import AddArea from '../components/owner/AddArea';

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

const buttonSingleDefault = "Transferir";
const buttonGetAreaDefault = "Consultar";

const buttonAddOrgDefault = "Cadastrar"

export default function ApplicationSite() {

    const { data: signerData } = useSigner();
    const Contract = useContract({
        address: contractAddress,
        abi: contractABI,
        signerOrProvider: signerData
    });

    const [buttonSingleText, setButtonSingleText] = useState(buttonSingleDefault);
    const [buttonGetAreaText, setButtonGetAreaText] = useState(buttonGetAreaDefault);
    const [buttonAddOrgText, setButtonAddOrgText ] = useState(buttonAddOrgDefault);

    const [valueSingle, setValueSingle] = useState();
    const [areaSingle, setAreaSingle] = useState(0);
    const [addressSingle, setAddressSingle] = useState("");
    // const [batchAddress, setBatchAddress] = useState();
    // const [batchValue1, setBacthValue1] = useState();
    // const [batchArea1, setBatchArea1] = useState();
    // const [batchValue2, setBacthValue2] = useState();
    // const [batchArea2, setBatchArea2] = useState();
    // const [batchValue3, setBacthValue3] = useState();
    // const [batchArea3, setBatchArea3] = useState();
    const [areaGet, setAreaGet] = useState();

    const [address1stAdd, setAddress1stAdd] = useState();
    const [area1stAdd, setArea1stAdd] = useState();
    const [addressAdd, setAddressAdd] = useState();
    const [areaAdd, setAreaAdd] = useState();
    
    const transferSingle = async (
        to,
        area,
        amount,    
        ) =>{
        if(!signerData) {
            alert("Conecte a carteira para transferir")
            return
        }
        if(buttonSingleText !== buttonSingleDefault){
            return
        }
        const signerAddress = await signerData.getAddress()
        let error = null
        let txReceipt
        try {
            setButtonSingleText("Assinando...")
            console.log('singleTransfer from', signerAddress, 'to', to)
            const tx = await Contract.safeTransferFrom(
                signerAddress,
                to,
                area,
                amount,
                '0x00'
            )
            setButtonSingleText("Enviando...")
            txReceipt = await tx.wait()
            // const balanceReceived = await Contract.balanceOf(to, area.toString())
            // console.log(balanceReceived)
            console.log(Contract)
        } catch(err){
            console.log(err)
            error = err
            let msg = "Erro:\n".concat(err)
            alert(msg)
            setButtonSingleText(buttonSingleDefault)
        }
        if(error === null) {
            console.log('success')
            console.log(txReceipt)
            setButtonSingleText(buttonSingleDefault)
        }
    }

    // TODO
    // // // // função async que chama Contract.getAreas // // // //
    // 
    // const getArea = async (
    //     address,        
    // ) => {
    //     if(buttonSingleText !== buttonSingleDefault){
    //         return
    //     }
    //     let error = null
    //     try {
    //         setButtonGetAreaText('Carregando...')
    //         const tx = await Contract.
    //     }
    // }
    // 
    // // // // event handler pra getAreas // // // // 
    // 
    // 
    

    // TODO
    // // // // funcao async que chama Contract.addOrg // // // // 
    // // // // event handler pra addOrg // // // // // // // // /  

    // // // // funcao asyc que chama Contract.addArea // // // //
    // // // // event handler pra addArea // // // // // // // // 

    const handleSingleTransfer = () => {
        if(!valueSingle || !addressSingle){
            alert('Preencha os campos _endereço_ e _montante_')
            return
        }
        transferSingle(addressSingle, areaSingle, valueSingle)
    }

    ///////////////// TESTE ///////////////////////
    //////////////////////////////////////////////
    const [trossoqualquer, setTrossoqualquer] = useState(0);

    const teste = async(xxx) => {
        let error = null
        let txReceipt
        const signerAddress = await signerData.getAddress()
        try {            
            console.log('trossoqualquer', xxx, 'de', signerAddress)
            const tx = await Contract.teste(xxx)
            txReceipt = await tx.wait()
        } catch(err){
            console.log(err)
            error = err
            let msg = "Erro:\n".concat(err)
            alert(msg)
            setButtonSingleText(buttonSingleDefault)
        }
        if(error === null) {
            console.log('success')
            console.log(txReceipt)
        }        
    }

    const handleTrossoqualquer = () => {
        teste(trossoqualquer)
    }

    ///////////////////////////////////////////////



    return (
        <>
            <Head>
                <title>App Orçamento da União 2023</title>
                <meta name="description" content="Created by FGV-ECMI" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/fgv.ico" />
            </Head>
            {/* <Link href={'./control.js'}>
            </Link>            */}
            <ConnectButton />
            <main className={styles.main}>
                <div className={styles.center}>
                    <h2>Repasses</h2>
                </div>
                <div>
                    <p>Transferência simples</p>
                    <SingleTransfer 
                        addressSingle={addressSingle}
                        valueSingle={valueSingle}
                        areaSingle={areaSingle}
                        setValueSingle={setValueSingle}
                        setAreaSingle={setAreaSingle}
                        setAddressSingle={setAddressSingle}
                    />
                    <button
                        onClick={handleSingleTransfer}
                    >
                        {buttonSingleText}
                    </button>
                </div>
                <div>
                    <p>Transferência em lote</p>
                    <BatchTransfer
                        // setBatchAddress={setBatchAddress}
                        // setBacthValue1={setBacthValue1}
                        // setBacthValue2={setBacthValue2}
                        // setBacthValue3={setBacthValue3}
                        // setBatchArea1={setBatchArea1}
                        // setBatchArea2={setBatchArea2}
                        // setBatchArea3={setBatchArea3}
                    />
                </div>
                <div className={styles.center}>
                    <h2>Consultas</h2>
                </div>
                <div>
                    <p>Consulta de Areas</p>
                    <GetArea 
                        areaGet={areaGet}
                        setAreaGet={setAreaGet}
                    />
                    <button>{buttonGetAreaText}</button>
                </div> 
                
                <div className={styles.center}>
                    <h2>Área de Controle</h2>
                    
                </div>
                <div><p>Os métodos abaixo são de uso exclusivo do órgão de controle</p></div>
                <div>
                    <p>Cadastramento de órgão</p>
                    <AddOrg 
                        address1stAdd={address1stAdd}
                        setAddressAdd={setAddress1stAdd}
                        area1stAdd={area1stAdd}
                        setArea1stAdd={setArea1stAdd}
                    />
                    <button>{buttonAddOrgText}</button>
                </div>
                <div>
                    <p>Cadastramento de órgão a nova área</p>
                    <AddArea
                        addressAdd={addressAdd}
                        setAddressAdd={setAddressAdd}
                        areaAdd={areaAdd}
                        setAreaAdd={setAreaAdd}
                    />
                </div>
                {/* TESTE !!!!!!!!!!!!!!! */}
                <div>
                    <p>teste</p>
                    <input 
                        type='number'
                        placeholder='trossoqualquer'
                        value={trossoqualquer}
                        onChange={(e) => setTrossoqualquer(e.target.value)}
                    />
                    <button onClick={handleTrossoqualquer}> trossoqualquer </button>
                </div>
                {/* !!!!!!!!!!!!!!!! TESTE */}
            </main>

        </>      
    )

}