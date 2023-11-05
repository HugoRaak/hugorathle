import * as React from "react";
import {IconLogo} from "@components/icons";

const Logo = () => {
    return <div className="flex justify-items-center items-center gap-2">
        <IconLogo className="max-w-xl xsm:max-w-2xl"/>
        <p className="font-audiowide text-xl xsm:text-4xl hidden 2xsm:block">Raak</p>
    </div>
}

export default Logo;