import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import s from "../App.module.css";
import {ErrorMessage, Field} from "formik";
import {validateDNSAlternative, validateDNSPreferred} from "../assets/validates";
import {dnsAddressAutoString, dnsAddressUseString} from "../App";


export const DNSSettings = ({
                                onChange, preferredDNS, alternativeDNS, setting, disabledWireless, disabled,
                                setDisabled, value, setValue, setErrors, setFieldValue
                            }) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <div className={s.radioGroup}>
                <RadioGroup value={value} onChange={handleChange}>
                    <FormControlLabel value={dnsAddressAutoString}
                                      control={<Radio color="primary" size='small'/>}
                                      label={dnsAddressAutoString}
                                      onClick={() => {
                                          setDisabled(true);
                                          setFieldValue(`${setting}.preferredDNS`, '');
                                          setFieldValue(`${setting}.alternativeDNS`, '');
                                          setTimeout(() => {
                                              setErrors({})
                                          }, 0);
                                      }}
                                      disabled={disabledWireless}/>
                    <FormControlLabel value={dnsAddressUseString}
                                      control={<Radio color="primary" size='small'/>}
                                      label={dnsAddressUseString}
                                      onClick={() => {
                                          setDisabled(false)
                                      }}
                                      disabled={disabledWireless}/>
                </RadioGroup>
            </div>
            <div className={s.inputs}>
                <div>
                    <ErrorMessage component="span" name={`${setting}.preferredDNS`} className={s.error}/>
                    <label className={`${s.labelForInputs} ${disabled === true ? s.disabled : ''}`}
                           htmlFor={`${setting}.preferredDNS`}>
                        Preferred DNS server:<span className={s.star}>*</span>
                    </label>
                    <Field type="text"
                           id={`${setting}.preferredDNS`}
                           name={`${setting}.preferredDNS`}
                           onChange={onChange}
                           value={preferredDNS}
                           validate={!disabled ? validateDNSPreferred : null}
                           disabled={disabled}/>
                </div>
                <div>
                    <ErrorMessage component="span" name={`${setting}.alternativeDNS`} className={s.error}/>
                    <label className={`${s.labelForInputs} ${disabled === true ? s.disabled : ''}`}
                           htmlFor={`${setting}.alternativeDNS`}>Alternative DNS
                        server:</label>
                    <Field type="text"
                           id={`${setting}.alternativeDNS`}
                           name={`${setting}.alternativeDNS`}
                           onChange={onChange}
                           value={alternativeDNS}
                           validate={!disabled ? validateDNSAlternative : null}
                           disabled={disabled}/>
                </div>
            </div>
        </>
    )
};
