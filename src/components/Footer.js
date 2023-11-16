import React from 'react';
import { LinkIcon, Separator } from '@components';

const Footer = () => {
    return (
        <footer className="mt-5 text-center">
            <Separator />
            <div className="flex justify-center space-x-2 2xs:space-x-5 xs:space-x-7 mb-10 mt-5">
                <LinkIcon href="https://github.com/HugoRaak" name="github" className="icon-sm" />
                <LinkIcon
                    href="https://www.linkedin.com/in/hugo-rathle"
                    name="linkedin"
                    className="icon-sm"
                />
                <LinkIcon
                    href="https://discord.com/users/424588936233484288"
                    name="discord"
                    className="icon-sm"
                />
            </div>
            <p className="text-sm sm:text-base opacity-50 px-5">
                © 2023 Designed & built by Hugo Rathle
            </p>
        </footer>
    );
};

export default Footer;
