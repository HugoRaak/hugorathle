import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
export const Logo = () => {
    return <div className="flex justify-items-center items-center gap-2">
        <StaticImage src="../images/shape_logo.svg"
                     alt="Shape of logo"/>
        <h1 className="font-audiowide text-4xl">Raak</h1>
    </div>
}