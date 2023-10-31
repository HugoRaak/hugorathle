import {LinkButton} from "../LinkButton";
import React from "react";

export const Resume = () => {
    return <div className="text-center mt-[10%]">
        <LinkButton location="/resume.pdf">
            <div className="flex gap-2">
                Resume
                <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="fill-orange group-hover:fill-black pl-1">
                    <path d="M23.3721 6.36161C23.6622 6.67411 23.9108 7.09821 24.118 7.63393C24.3252 8.16964 24.4288 8.66071 24.4288 9.10714V28.3929C24.4288 28.8393 24.2838 29.2188 23.9937 29.5312C23.7036 29.8438 23.3514 30 22.937 30H2.05186C1.63747 30 1.28524 29.8438 0.995166 29.5312C0.705095 29.2188 0.560059 28.8393 0.560059 28.3929V1.60714C0.560059 1.16071 0.705095 0.78125 0.995166 0.46875C1.28524 0.15625 1.63747 0 2.05186 0H15.9753C16.3897 0 16.8455 0.111607 17.3428 0.334821C17.84 0.558036 18.2337 0.825893 18.5238 1.13839L23.3721 6.36161ZM16.4726 2.27679V8.57143H22.3154C22.2118 8.24777 22.0979 8.01897 21.9736 7.88504L17.1097 2.64509C16.9854 2.51116 16.773 2.38839 16.4726 2.27679ZM22.4398 27.8571V10.7143H15.9753C15.5609 10.7143 15.2087 10.558 14.9186 10.2455C14.6285 9.93304 14.4835 9.55357 14.4835 9.10714V2.14286H2.54912V27.8571H22.4398Z"/>
                </svg>
            </div>
        </LinkButton>
    </div>;
}