import React from 'react';
import {NetworkSettings} from "./components/NetworkSettings";

export const ipAddressAutoString = "Obtain an IP address automatically (DHCP/BootP)";
export const ipAddressUseString = "Use the following IP address:";
export const dnsAddressAutoString = "Obtain DNS server address automatically";
export const dnsAddressUseString = "Use the following DS server address:";

export const App = () => {

    return <NetworkSettings/>
};




