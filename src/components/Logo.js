import * as React from "react";
import {IconLogo} from "@components/icons";

const Logo = () => {
    return <div className="flex justify-items-center items-center gap-2">
        <IconLogo/>
        <h1 className="font-audiowide text-4xl">Raak</h1>
    </div>
}

export default Logo;