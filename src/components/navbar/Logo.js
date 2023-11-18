import * as React from 'react';
import { IconLogo, IconRaak } from '@components/icons';

const Logo = () => {
    return (
        <div className="flex justify-center items-center space-x-2 xs:space-x-0 mobile:space-x-2">
            <IconLogo className="max-w-xl xs:max-w-2xl" />
            <IconRaak className="h-4 xs:h-7 w-auto hidden 2xs:block" classNameG="transition-fill" />
        </div>
    );
};

export default Logo;
