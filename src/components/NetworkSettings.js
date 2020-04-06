import React, {useState} from "react";
import s from "../App.module.css";
import {Form, Formik} from "formik";
import {EthernetSettings} from "./EthernetSettings";
import {WirelessSettings} from "./WirelessSettings";
import {Buttons} from "./Buttons";

export const ipAddressAutoString = "Obtain an IP address automatically (DHCP/BootP)";
export const ipAddressUseString = "Use the following IP address:";
export const dnsAddressAutoString = "Obtain DNS server address automatically";
export const dnsAddressUseString = "Use the following DS server address:";
const ethernetSettings = 'ethernetSettings';
const wirelessSettings = 'wirelessSettings';

export const NetworkSettings = () => {

    const [disabledEthernetIp, setDisabledEthernetIp] = useState(true);
    const [valueEthernetIp, setValueEthernetIp] = useState(ipAddressAutoString);
    const [valueEthernetDns, setValueEthernetDns] = useState(dnsAddressAutoString);
    const [disabledEthernetDns, setDisabledEthernetDns] = useState(true);

    const [disabledKey, setDisabledKey] = useState(true);
    const [disabledWireless, setDisabledWireless] = useState(true);
    const [disabledWirelessIp, setDisabledWirelessIp] = useState(true);
    const [valueWirelessIp, setValueWirelessIp] = useState(ipAddressAutoString);
    const [valueWirelessDns, setValueWirelessDns] = useState(dnsAddressAutoString);
    const [disabledWirelessDns, setDisabledWirelessDns] = useState(true);

    const changeDisabled = () => {
        if (disabledWireless) {
            setDisabledWireless(false)
        } else {
            setDisabledWireless(true)

        }
    };
    const initialValues = {
        ethernetSettings: {
            ipAddress: '',
            subnetMask: '',
            defaultGateway: '',
            preferredDNS: '',
            alternativeDNS: ''
        },
        wirelessSettings: {
            wirelessNetworkName: '',
            securityKey: '',
            ipAddress: '',
            subnetMask: '',
            defaultGateway: '',
            preferredDNS: '',
            alternativeDNS: ''
        }
    };

    return (
        <div className={s.wrapper}>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    console.log('SETTINGS:', JSON.stringify([values], null, 2))
                }}
                validateOnChange={false}
                validateOnBlur={false}>
                {({handleSubmit, handleChange, values, handleReset, setFieldValue, setFieldError}) => (
                    <Form onSubmit={handleSubmit} className={s.form}>
                        <div className={s.settingsContainer}>
                            <EthernetSettings onChange={handleChange}
                                              ipAddress={values.ethernetSettings.ipAddress}
                                              subnetMask={values.ethernetSettings.subnetMask}
                                              defaultGateway={values.ethernetSettings.defaultGateway}
                                              preferredDNS={values.ethernetSettings.preferredDNS}
                                              alternativeDNS={values.ethernetSettings.alternativeDNS}
                                              disabledEthernetIp={disabledEthernetIp}
                                              setDisabledEthernetIp={setDisabledEthernetIp}
                                              valueEthernetIp={valueEthernetIp}
                                              setValueEthernetIp={setValueEthernetIp}
                                              setting={ethernetSettings}
                                              valueEthernetDns={valueEthernetDns}
                                              setValueEthernetDns={setValueEthernetDns}
                                              disabledEthernetDns={disabledEthernetDns}
                                              setDisabledEthernetDns={setDisabledEthernetDns}
                                              setFieldValue={setFieldValue}
                                              setFieldError={setFieldError}/>

                            <WirelessSettings onChange={handleChange}
                                              wirelessNetworkName={values.wirelessSettings.wirelessNetworkName}
                                              securityKey={values.wirelessSettings.securityKey}
                                              ipAddress={values.wirelessSettings.ipAddress}
                                              subnetMask={values.wirelessSettings.subnetMask}
                                              defaultGateway={values.wirelessSettings.defaultGateway}
                                              preferredDNS={values.wirelessSettings.preferredDNS}
                                              alternativeDNS={values.wirelessSettings.alternativeDNS}
                                              setting={wirelessSettings}
                                              disabledKey={disabledKey}
                                              setDisabledKey={setDisabledKey}
                                              disabledWireless={disabledWireless}
                                              changeDisabled={changeDisabled}
                                              disabledWirelessIp={disabledWirelessIp}
                                              setDisabledWirelessIp={setDisabledWirelessIp}
                                              valueWirelessIp={valueWirelessIp}
                                              setValueWirelessIp={setValueWirelessIp}
                                              valueWirelessDns={valueWirelessDns}
                                              setValueWirelessDns={setValueWirelessDns}
                                              disabledWirelessDns={disabledWirelessDns}
                                              setDisabledWirelessDns={setDisabledWirelessDns}
                                              setFieldError={setFieldError}
                                              setFieldValue={setFieldValue}/>

                        </div>
                        <Buttons handleReset={handleReset}
                                 setDisabledEthernetIp={setDisabledEthernetIp}
                                 setValueEthernetIp={setValueEthernetIp}
                                 setValueEthernetDns={setValueEthernetDns}
                                 setDisabledEthernetDns={setDisabledEthernetDns}
                                 setDisabledKey={setDisabledKey}
                                 setDisabledWireless={setDisabledWireless}
                                 setDisabledWirelessIp={setDisabledWirelessIp}
                                 setValueWirelessIp={setValueWirelessIp}
                                 setValueWirelessDns={setValueWirelessDns}
                                 setDisabledWirelessDns={setDisabledWirelessDns}/>
                    </Form>
                )}
            </Formik>
        </div>
    )
};
