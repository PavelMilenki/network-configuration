import React from "react";
import s from "../App.module.css";
import {IpSettings} from "./IpSettings";
import {DNSSettings} from "./DNSSettings";

export const EthernetSettings = ({
                                     onChange, ipAddress, subnetMask, defaultGateway, preferredDNS, alternativeDNS,
                                     disabledEthernetIp, setDisabledEthernetIp, valueEthernetIp, setValueEthernetIp,
                                     setting,  setValueEthernetDns, disabledEthernetDns,
                                     setDisabledEthernetDns, valueEthernetDns,setErrors,setFieldValue
                                 }) => {

    return (
        <div className={s.wrapperEthernet}>
            <div className={s.settingTitle}>
                <span>Ethernet Settings</span>
            </div>
            <IpSettings onChange={onChange}
                        ipAddress={ipAddress}
                        subnetMask={subnetMask}
                        defaultGateway={defaultGateway}
                        setting={setting}
                        disabled={disabledEthernetIp}
                        setDisabled={setDisabledEthernetIp}
                        value={valueEthernetIp}
                        setValue={setValueEthernetIp}
                        setErrors={setErrors}
                        setFieldValue={setFieldValue}/>

            <DNSSettings onChange={onChange}
                         preferredDNS={preferredDNS}
                         alternativeDNS={alternativeDNS}
                         setting={setting}
                         disabled={disabledEthernetDns}
                         setDisabled={setDisabledEthernetDns}
                         value={valueEthernetDns}
                         setValue={setValueEthernetDns}
                         setErrors={setErrors}
                         setFieldValue={setFieldValue}/>
        </div>
    )
};
