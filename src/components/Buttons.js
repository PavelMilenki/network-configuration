import React from "react";
import s from "../App.module.css";
import Button from "@material-ui/core/Button";
import {dnsAddressAutoString, ipAddressAutoString} from "./NetworkSettings";

export const Buttons = ({
                            handleReset, setDisabledEthernetIp, setValueEthernetIp,
                            setValueEthernetDns, setDisabledEthernetDns, setDisabledKey,
                            setDisabledWireless, setDisabledWirelessIp, setValueWirelessIp,
                            setValueWirelessDns, setDisabledWirelessDns,
                        }) => {

    return (
        <div className={s.buttons}>
            <Button type='submit'
                    variant="contained"
                    size="small"
                    color="primary">
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
                    }}>
                Cancel
            </Button>

        </div>
    )
};

