import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import styles from '../styles/Home.module.css'




export default function ApplicationSite() {

    const [valueSimple, setValueSimple] = useState();
    const [areaSimple, setAreaSimple] = useState();
    const [addressSimple, setAddressSimple] = useState();
    const [areaView, setAreaView] = useState();
    const [addressNew, setAddressNew] = useState();
    const [areaNew, setAreaNew] = useState();

    function handleValueSimpleChange(e) {
        setValueSimple(e.target.value);
      }
    
      function handleAreaSimpleChange(e) {
        setAreaSimple(e.target.value);
      }
    
      function handleAddressSimpleChange(e) {
        setAddressSimple(e.target.value);
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
                    <h2>Área de Repasses</h2>
                </div>
                <div>
                    <p>Transferência simples</p>
                    <input 
                        placeholder = "montante"
                        value = {valueSimple}
                        onChange = {handleValueSimpleChange}
                    />
                    <input 
                        placeholder = "area"
                        value = {areaSimple}
                        onChange = {handleAreaSimpleChange}
                    />
                    <input 
                        placeholder = "endereço"
                        value = {addressSimple}
                        onChange = {handleAddressSimpleChange}
                    />
                    <button>
                        Transferir
                    </button>
                </div>
                <div>
                    <p>Transferência em lote</p>
                    <div>
                    <input
                        placeholder = "endereço"
                    />
                    </div>
                    <div>
                        <input 
                            placeholder='montante 1'
                        />    
                        <input
                            placeholder = "area 1"
                        />
                    </div>
                    <div>
                        <input
                            placeholder = "montante 2"
                        />
                        <input
                            placeholder = "area 2"
                        />
                    </div>
                    <button>adicionar linha</button>                  
                </div>
                <div className={styles.center}>
                    <h2>Área de Consulta</h2>
                </div>
                <div>
                    <p>Consulta de Areas</p>
                    <input
                        placeholder = "endereço"
                        value = {areaView}
                        onChange = {handleAreaViewChange}
                    />
                    <button>Consulta</button>
                </div>
                
            </main>
            
        </>      
    )

}