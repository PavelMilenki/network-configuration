import React from "react";
import s from "../App.module.css";
import {EnableWirelessSettings} from "./EnableWirelessSettings";
import {IpSettings} from "./IpSettings";
import {DNSSettings} from "./DNSSettings";


export const WirelessSettings = (
    {
        onChange, wirelessNetworkName, securityKey, ipAddress,
        subnetMask, defaultGateway, preferredDNS, alternativeDNS, setting, disabledKey, setDisabledKey,
        disabledWireless, changeDisabled, disabledWirelessIp, setDisabledWirelessIp, valueWirelessIp, setValueWirelessIp,
        valueWirelessDns, setValueWirelessDns, disabledWirelessDns, setDisabledWirelessDns, setFieldValue, setFieldError
    }) => {


    return (
        <div className={s.wrapperWireless}>
            <div className={s.settingTitle}>
                <span>Wireless Settings</span>
            </div>
            <EnableWirelessSettings onChange={onChange}
                                    wirelessNetworkName={wirelessNetworkName}
                                    securityKey={securityKey}
                                    setting={setting}
                                    disabled={disabledWireless}
                                    changeDisabled={changeDisabled}
                                    disabledKey={disabledKey}
                                    setDisabledKey={setDisabledKey}
                                    setFieldError={setFieldError}
                                    setFieldValue={setFieldValue}
                                    setDisabledWirelessIp={setDisabledWirelessIp}
                                    setDisabledWirelessDns={setDisabledWirelessDns}
                                    setValueWirelessDns={setValueWirelessDns}
                                    setValueWirelessIp={setValueWirelessIp}/>

            <IpSettings onChange={onChange}
                        ipAddress={ipAddress}
                        subnetMask={subnetMask}
                        defaultGateway={defaultGateway}
                        setting={setting}
                        disabledWireless={disabledWireless}
                        disabled={disabledWirelessIp}
                        setDisabled={setDisabledWirelessIp}
                        value={valueWirelessIp}
                        setValue={setValueWirelessIp}
                        setFieldError={setFieldError}
                        setFieldValue={setFieldValue}/>
            <DNSSettings onChange={onChange}
                         preferredDNS={preferredDNS}
                         alternativeDNS={alternativeDNS}
                         setting={setting}
                         disabledWireless={disabledWireless}
                         disabled={disabledWirelessDns}
                         setDisabled={setDisabledWirelessDns}
                         value={valueWirelessDns}
                         setValue={setValueWirelessDns}
                         setFieldError={setFieldError}
                         setFieldValue={setFieldValue}/>
        </div>
    )
};
