import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import s from "../App.module.css";
import {ErrorMessage, Field} from "formik";
import {validateGateway, validateIP, validateMask} from "../assets/validates";
import {ipAddressAutoString, ipAddressUseString} from "./NetworkSettings";

export const IpSettings = ({
                               onChange, ipAddress, subnetMask, defaultGateway, setting, disabledWireless,
                               disabled, setDisabled, value, setValue, setFieldValue, setFieldError,
                           }) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className={s.radioGroup}>
                <RadioGroup value={value} onChange={handleChange}>
                    <FormControlLabel value={ipAddressAutoString}
                                      control={<Radio color='primary' size='small'/>}
                                      label={ipAddressAutoString}
                                      onClick={() => {
                                          setDisabled(true);

                                          setFieldValue(`${setting}.ipAddress`, '');
                                          setFieldValue(`${setting}.subnetMask`, '');
                                          setFieldValue(`${setting}.defaultGateway`, '');

                                          setFieldError(`${setting}.ipAddress`, '');
                                          setFieldError(`${setting}.subnetMask`, '');
                                          setFieldError(`${setting}.defaultGateway`, '');
                                      }}
                                      disabled={disabledWireless}/>
                    <FormControlLabel value={ipAddressUseString}
                                      control={<Radio color='primary' size='small'/>}
                                      label={ipAddressUseString}
                                      onClick={() => {
                                          setDisabled(false)
                                      }}
                                      disabled={disabledWireless}/>
                </RadioGroup>
            </div>
            <div className={s.inputs}>
                <div>
                    <ErrorMessage component="span" name={`${setting}.ipAddress`} className={s.error}/>
                    <label className={`${s.labelForInputs} ${disabled === true ? s.disabled : ''}`}
                           htmlFor={`${setting}.ipAddress`}>
                        IP address:<span className={s.star}>*</span>
                    </label>
                    <Field type="text"
                           id={`${setting}.ipAddress`}
                           name={`${setting}.ipAddress`}
                           onChange={onChange}
                           value={ipAddress}
                           validate={!disabled ? validateIP : null}
                           disabled={disabled}/>
                </div>
                <div>
                    <ErrorMessage component="span" name={`${setting}.subnetMask`} className={s.error}/>
                    <label className={`${s.labelForInputs} ${disabled === true ? s.disabled : ''}`}
                           htmlFor={`${setting}.subnetMask`}>
                        Subnet Mask:<span className={s.star}>*</span>
                    </label>
                    <Field type="text"
                           id={`${setting}.subnetMask`}
                           name={`${setting}.subnetMask`}
                           onChange={onChange}
                           value={subnetMask}
                           validate={!disabled ? validateMask : null}
                           disabled={disabled}/>
                </div>
                <div>
                    <ErrorMessage component="span" name={`${setting}.defaultGateway`} className={s.error}/>
                    <label className={`${s.labelForInputs} ${disabled === true ? s.disabled : ''}`}
                           htmlFor={`${setting}.defaultGateway`}>Default Gateway:</label>
                    <Field type={'text'}
                           id={`${setting}.defaultGateway`}
                           name={`${setting}.defaultGateway`}
                           onChange={onChange}
                           value={defaultGateway}
                           validate={!disabled ? validateGateway : null}
                           disabled={disabled}/>
                </div>
            </div>
        </>
    )
};
