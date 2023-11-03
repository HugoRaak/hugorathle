import * as React from "react";
import {IconLogo} from "@components/icons";

const Logo = () => {
    return <div className="flex justify-items-center items-center gap-2">
        <IconLogo className="max-w-xl xsm:max-w-2xl"/>
        <h1 className="font-audiowide text-xl xsm:text-4xl hidden 2xsm:block">Raak</h1>
    </div>
}

export default Logo;