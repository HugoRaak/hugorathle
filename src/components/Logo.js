import * as React from "react";
import {IconLogo} from "@components/icons";

const Logo = () => {
    return <div className="flex justify-items-center items-center gap-2">
        <IconLogo className="max-w-xl xs:max-w-2xl"/>
        <p className="font-audiowide text-xl xs:text-4xl hidden 2xs:block">Raak</p>
    </div>
}

export default Logo;