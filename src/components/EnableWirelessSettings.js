import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import s from "../App.module.css";
import RefreshIcon from "@material-ui/icons/Refresh";
import {ErrorMessage, Field} from "formik";
import {validateKey, validateNetworkName} from "../assets/validates";
import {dnsAddressAutoString, ipAddressAutoString} from "./NetworkSettings";

export const EnableWirelessSettings = ({
                                           onChange, wirelessNetworkName, securityKey, setting, disabled, changeDisabled,
                                           disabledKey, setDisabledKey, setFieldValue, setDisabledWirelessIp,
                                           setDisabledWirelessDns, setValueWirelessIp, setValueWirelessDns, setFieldError
                                       }) => {

       const changeDisabledKey = () => {
        if (disabledKey) {
            setDisabledKey(false)
        } else {
            setDisabledKey(true);
        }
    };
    return (
        <>
            <div>
                <Checkbox color="primary"
                          inputProps={{'aria-label': 'secondary checkbox'}}
                          id={'enableWifi'}
                          onClick={() => {
                              changeDisabled();

                              setDisabledKey(true);
                              setDisabledWirelessIp(true);
                              setDisabledWirelessDns(true);
                              setValueWirelessIp(ipAddressAutoString);
                              setValueWirelessDns(dnsAddressAutoString);

                              setFieldError(`${setting}.securityKey`, '');
                              setFieldError(`${setting}.wirelessNetworkName`, '');
                              setFieldError(`${setting}.ipAddress`, '');
                              setFieldError(`${setting}.subnetMask`, '');
                              setFieldError(`${setting}.defaultGateway`, '');
                              setFieldError(`${setting}.preferredDNS`, '');
                              setFieldError(`${setting}.alternativeDNS`, '');

                              setFieldValue(`${setting}.securityKey`, '');
                              setFieldValue(`${setting}.wirelessNetworkName`, '');
                              setFieldValue(`${setting}.ipAddress`, '');
                              setFieldValue(`${setting}.subnetMask`, '');
                              setFieldValue(`${setting}.defaultGateway`, '');
                              setFieldValue(`${setting}.preferredDNS`, '');
                              setFieldValue(`${setting}.alternativeDNS`, '');
                          }} checked={!disabled}/>
                <label htmlFor={'enableWifi'}>Enable wifi:</label>
            </div>
            <ErrorMessage component="div" name={`${setting}.wirelessNetworkName`} className={s.error}/>
            <div className={s.wirelessNetworkName}>
                <div>
                    <label className={`${s.labelForInputs} ${disabled === true ? s.disabled : ''}`}>
                        Wireless Network Name: <span className={s.star}>*</span>
                    </label>
                </div>
                <div>
                    <Field as="select" name={`${setting}.wirelessNetworkName`}
                           onChange={onChange}
                           value={wirelessNetworkName}
                           disabled={disabled}
                           validate={!disabled ? validateNetworkName : null}>
                        <option value={''}>Please select</option>
                        <option value={'name one'}>name one</option>
                        <option value={'name two'} name='name two'>name two</option>
                        <option value={'name three'} name='name three'>name three</option>
                    </Field>
                </div>
                <div>
                    <button className={`${s.btnRefresh}  ${disabled === true ? s.btnDisabled : ''}`} type="button"
                            disabled={disabled}
                            onClick={() => {
                                console.log('search')
                            }}>
                        <RefreshIcon color="primary" variant="outlined" size="small"/>
                    </button>
                </div>
            </div>
            <div>
                <Checkbox color="primary"
                          inputProps={{'aria-label': 'secondary checkbox'}}
                          id={'security'}
                          disabled={disabled}
                          checked={!disabledKey}
                          onClick={() => {
                              changeDisabledKey();
                              setFieldError(`${setting}.securityKey`, '');
                              setFieldValue(`${setting}.securityKey`, '');
                          }}/>
                <label htmlFor={'security'} className={`${disabled === true ? s.disabled : ''}`}>
                    Enable Wireless Security:</label>
            </div>
            <div className={s.securityKey}>
                <ErrorMessage component="span" name={`${setting}.securityKey`} className={s.error}/>
                <label className={`${s.labelForInputs} ${disabledKey === true ? s.disabled : ''}`}
                       htmlFor={`${setting}.securityKey`}>
                    Security key:<span className={s.star}>*</span>
                </label>
                <Field type="text"
                       id={`${setting}.securityKey`}
                       name={`${setting}.securityKey`}
                       onChange={onChange}
                       value={securityKey}
                       validate={!disabledKey ? validateKey : null}
                       disabled={disabledKey}/>
            </div>
        </>
    )
};
