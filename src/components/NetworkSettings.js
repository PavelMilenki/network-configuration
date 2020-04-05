import React, {useState} from "react";
import s from "../App.module.css";
import {Form, Formik} from "formik";
import {EthernetSettings} from "./EthernetSettings";
import {WirelessSettings} from "./WirelessSettings";
import {Buttons} from "./Buttons";
import {dnsAddressAutoString, ipAddressAutoString} from "../App";

export const NetworkSettings = ()=> {

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
                validateOnChange={true}
                validateOnBlur={true}
                validateOnMount={true}>
                {({handleSubmit, handleChange, values, errors, handleReset, touched,setErrors,setFieldValue}) => (
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
                                              setting={'ethernetSettings'}
                                              valueEthernetDns={valueEthernetDns}
                                              setValueEthernetDns={setValueEthernetDns}
                                              disabledEthernetDns={disabledEthernetDns}
                                              setDisabledEthernetDns={setDisabledEthernetDns}
                                              setErrors={setErrors}
                                              setFieldValue={setFieldValue}/>

                            <WirelessSettings onChange={handleChange}
                                              wirelessNetworkName={values.wirelessSettings.wirelessNetworkName}
                                              securityKey={values.wirelessSettings.securityKey}
                                              ipAddress={values.wirelessSettings.ipAddress}
                                              subnetMask={values.wirelessSettings.subnetMask}
                                              defaultGateway={values.wirelessSettings.defaultGateway}
                                              preferredDNS={values.wirelessSettings.preferredDNS}
                                              alternativeDNS={values.wirelessSettings.alternativeDNS}
                                              setting={'wirelessSettings'}
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
                                              setErrors={setErrors}
                                              setFieldValue={setFieldValue}/>

                        </div>
                        <Buttons errors={errors} handleReset={handleReset} touched={touched}
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
