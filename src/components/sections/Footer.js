import React from "react";
import {LinkIcon, Separator} from "@components";

const Footer = () => {
    return <div className="mt-5 text-center">
        <Separator/>
        <div className="flex justify-center gap-7 mb-10 mt-5">
            <LinkIcon href="https://github.com/HugoRaak" name="github" height={40}/>
            <LinkIcon href="https://www.linkedin.com/in/hugo-rathle" name="linkedin" height={40}/>
            <LinkIcon href="https://discord.com/users/424588936233484288" name="discord" height={40}/>
        </div>
        <p className="opacity-50">© 2023 Designed & built by Hugo Rathle</p>
    </div>;
};

export default Footer;