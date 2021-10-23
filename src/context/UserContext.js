import React, { createContext, useEffect, useState } from "react";
import UserLinks from "../data/UserLinks.json";
import UserData from "../data/UserData.json";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({});
    const [userLinks, setUserLinks] = useState({
        featuredLinks: [],
        allLinks: [],
    });

    useEffect(() => {
        handleSetUserLinks();
        handleSetUserDetails();
    }, []);

    const handleSetUserLinks = () => {
        const linksToSet = {
            featuredLinks: UserLinks.featuredLinks,
            allLinks: UserLinks.allLinks,
        };
        setUserLinks(linksToSet);
    };

    const handleLinks = ({ key, list }) => {
        setUserLinks((userLinksCopy) => {
            return {
                ...userLinksCopy,
                [key]: list,
            };
        });
    };

    const handleSetUserDetails = () => {
        setUserDetails(UserData);
    };

    return (
        <UserContext.Provider
            value={{
                userDetails,
                userLinks,

                handleLinks,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
