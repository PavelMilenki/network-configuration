import React, {useState} from "react";
import s from "../App.module.css";
import Button from "@material-ui/core/Button";
import _ from "lodash";
import {dnsAddressAutoString, ipAddressAutoString} from "../App";

export const Buttons = ({
                            errors, handleReset, touched, setDisabledEthernetIp, setValueEthernetIp,
                            setValueEthernetDns, setDisabledEthernetDns, setDisabledKey,
                            setDisabledWireless, setDisabledWirelessIp, setValueWirelessIp,
                            setValueWirelessDns, setDisabledWirelessDns
                        }) => {
    const [message, setMessage] = useState('');

    return (
        <div className={s.buttons}>
            <Button type='submit'
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => {
                        setMessage('your settings are saved')
                    }}
                    disabled={!_.isEmpty(errors) && !_.isEmpty(touched)}>
                Save
            </Button>
            <Button type='button'
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={() => {
                        setValueEthernetIp(ipAddressAutoString);
                        setDisabledEthernetIp(true);
                        setValueEthernetDns(dnsAddressAutoString);
                        setDisabledEthernetDns(true);
                        setDisabledKey(true);
                        setDisabledWireless(true);
                        setDisabledWirelessIp(true);
                        setValueWirelessIp(ipAddressAutoString);
                        setValueWirelessDns(dnsAddressAutoString);
                        setDisabledWirelessDns(true);
                        handleReset();
                        setMessage('your settings are reset(or redirect)')
                    }}>
                Cancel
            </Button>
            <span className={s.message}>{message}</span>
        </div>
    )
};

