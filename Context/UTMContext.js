import { createContext, useState } from "react";

export const UTMContext = createContext({
    UTMSource : null,
    UTMMedium: null,
    UTMCampaign : null,
    setUTMSource : (source) => null,
    setUTMMedium : (medium) => null,
    setUTMCampaign : (campaign) => null,
})

export const UTMProvider = ({children}) =>{
    const [UTMSource, setUTMSource] = useState(null);
    const [UTMMedium, setUTMMedium] = useState(null);
    const [UTMCampaign, setUTMCampaign] = useState(null);
    const value = { UTMSource, UTMMedium, UTMCampaign, setUTMSource, setUTMMedium, setUTMCampaign };

    return(<UTMContext.Provider value={value}>{children}</UTMContext.Provider>)
}
