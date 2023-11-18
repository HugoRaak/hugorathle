import { LinkButton } from '@components';
import React from 'react';

export const Resume = () => {
    return (
        <div className="text-center mt-[10%]">
            <LinkButton
                href="/resume_Hugo_Rathle.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
            >
                <div className="flex space-x-[1vw]">
                    <p>Resume</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="30"
                        viewBox="0 0 25 30"
                        fill="none"
                        className="fill-orange group-hover:fill-black group-focus:fill-black pl-1 w-auto h-3 2xs:h-4 xs:h-5 tablet-xs:h-6 sm:h-7 md:h-8 lg:h-9"
                    >
                        <title>File Icon</title>
                        <path d="M23.372 6.362c.29.312.539.736.746 1.272.207.536.31 1.027.31 1.473v19.286c0 .446-.144.826-.434 1.138-.29.313-.643.469-1.057.469H2.052c-.415 0-.767-.156-1.057-.469a1.612 1.612 0 0 1-.435-1.138V1.607C.56 1.161.705.781.995.47 1.285.156 1.637 0 2.052 0h13.923c.415 0 .87.112 1.368.335.497.223.89.49 1.18.803l4.85 5.224Zm-6.9-4.085V8.57h5.843c-.103-.323-.217-.552-.341-.686l-4.864-5.24c-.125-.134-.337-.257-.637-.368Zm5.968 25.58V10.714h-6.465c-.414 0-.766-.156-1.056-.469a1.612 1.612 0 0 1-.436-1.138V2.143H2.55v25.714h19.89Z" />
                    </svg>
                </div>
            </LinkButton>
        </div>
    );
};
