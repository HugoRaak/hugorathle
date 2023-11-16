import React from 'react';

/**
 * @param {number} height
 * @param {String} className
 */
const IconReact = ({ height = 100, className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={height * 1.15}
            height={height}
            viewBox="0 0 115 100"
            fill="none"
            className={className}
        >
            <title>React</title>
            <path
                d="M56.9138 60.4468C62.56 60.4468 67.1372 55.8696 67.1372 50.2234C67.1372 44.5772 62.56 40 56.9138 40C51.2676 40 46.6904 44.5772 46.6904 50.2234C46.6904 55.8696 51.2676 60.4468 56.9138 60.4468Z"
                fill="#53C1DE"
            />
            <path
                d="M21.4943 68.0957C22.4991 68.4291 23.5038 68.7671 24.5323 69.0576C24.199 70.3956 23.9085 71.7146 23.6371 73.0765C21.2944 85.4665 23.1228 95.2851 28.9702 98.6564C34.9985 102.137 45.1315 98.5659 54.9977 89.9282C55.7786 89.2377 56.5596 88.5235 57.3405 87.7616C58.3214 88.7235 59.3499 89.6377 60.3737 90.5281C69.9257 98.7421 79.3681 102.066 85.1965 98.6992C91.2248 95.2184 93.1866 84.6617 90.6438 71.8051C90.4377 70.7965 90.2139 69.7917 89.9725 68.7909C90.6867 68.591 91.3772 68.3672 92.0724 68.1434C104.953 63.8816 114.281 56.9819 114.281 49.906C114.281 43.1444 105.486 36.5828 93.3437 32.4067C92.1452 32.0079 90.9404 31.6238 89.7296 31.2639C89.9296 30.4402 90.1105 29.6116 90.2867 28.7878C93.0342 15.4836 91.2248 4.79837 85.1298 1.26994C79.2586 -2.10135 69.6828 1.40327 59.9975 9.84101C59.0356 10.6648 58.1023 11.5362 57.2071 12.4076C56.6001 11.8235 55.9826 11.2504 55.3548 10.6886C45.1981 1.66992 35.0224 -2.12515 28.9274 1.42708C23.08 4.82218 21.3372 14.8884 23.7943 27.4689C24.0419 28.7212 24.3085 29.9449 24.618 31.1973C23.1895 31.5973 21.7848 32.0449 20.4658 32.5163C8.54726 36.6447 0 43.1634 0 49.906C0 56.8724 9.10438 63.8531 21.4943 68.0957ZM51.8502 86.2807C48.17 89.6543 43.9029 92.3253 39.2603 94.1613C36.7842 95.3422 33.9272 95.4565 31.3796 94.4518C27.8322 92.3995 26.356 84.5189 28.3655 73.9146C28.6131 72.667 28.8798 71.4146 29.1893 70.1861C34.1891 71.2575 39.2317 71.9956 44.3458 72.3717C47.2963 76.5508 50.5173 80.5322 53.9882 84.2903C53.274 84.9808 52.5597 85.6522 51.8455 86.2759L51.8502 86.2807ZM80.1967 44.3682C79.1549 42.3985 78.0753 40.449 76.9587 38.5208C75.8635 36.6256 74.7255 34.7495 73.5446 32.8972C77.1396 33.3448 80.5776 33.9448 83.7918 34.6828C82.7632 37.9718 81.5632 41.2047 80.1967 44.3682ZM80.2395 55.482C81.668 58.7199 82.9204 62.0008 84.0108 65.372C80.549 66.153 77.0492 66.7577 73.5208 67.1577C75.9276 63.3645 78.1693 59.4689 80.2395 55.482ZM77.6587 49.9298C74.6633 56.0926 71.2491 62.0428 67.4401 67.7386C64.1164 67.9862 60.6546 68.0957 57.15 68.0957C53.6454 68.0957 50.2551 67.9862 46.9742 67.7815C43.1002 62.128 39.6604 56.189 36.6842 50.0155H36.6747C39.6266 43.8503 43.0443 37.919 46.8981 32.2734C53.7202 31.7684 60.5703 31.7684 67.3924 32.2734C69.2876 35.0876 71.097 37.9637 72.816 40.9112C74.5302 43.8626 76.1454 46.8705 77.6587 49.9298ZM37.2937 38.5636C36.1985 40.4588 35.1271 42.3968 34.1224 44.3634C32.7744 41.1807 31.5825 37.9341 30.5511 34.6352C33.7653 33.921 37.1794 33.34 40.7269 32.8924C39.5507 34.7447 38.3889 36.6399 37.2937 38.5636ZM34.1272 55.6582C35.1557 57.6247 36.2033 59.5675 37.3175 61.4865C38.4555 63.4293 39.6174 65.372 40.8459 67.2672C37.367 66.8881 33.9101 66.3287 30.4892 65.5911C31.4701 62.3769 32.6986 59.0533 34.1272 55.6582ZM57.3214 80.8524C54.9322 78.2684 52.6754 75.5651 50.5598 72.7527C55.0151 72.935 59.4761 72.927 63.9307 72.7289C61.8787 75.5562 59.6723 78.2682 57.3214 80.8524ZM86.4964 87.5568C86.3918 88.9105 86.0107 90.2284 85.3769 91.429C84.743 92.6297 83.8696 93.6876 82.8108 94.5375C79.2634 96.5898 71.697 93.9137 63.5259 86.9045C62.5646 86.0678 61.62 85.2122 60.6927 84.3379C64.1035 80.572 67.2505 76.5754 70.1114 72.3765C75.2342 71.9519 80.3211 71.169 85.3345 70.0338C85.5583 70.948 85.7583 71.8623 85.9393 72.7575C87.0293 77.6149 87.2181 82.6312 86.4964 87.5568ZM88.4344 35.8637C89.5963 36.1971 90.7105 36.5542 91.7819 36.9113C102.181 40.4826 109.481 45.7967 109.481 49.8584C109.481 54.2344 101.691 59.8818 90.5534 63.5626C89.9296 63.7626 89.3058 63.9626 88.6582 64.1435C87.0847 59.2733 85.1836 54.515 82.968 49.9013C85.1107 45.3491 86.9202 40.6588 88.4344 35.8637ZM63.1402 13.4552C71.4494 6.22688 79.1919 3.39366 82.7204 5.42215C86.4916 7.58873 87.944 16.336 85.5774 27.8307C85.4284 28.5802 85.2569 29.3249 85.0631 30.064C80.1132 28.9438 75.0945 28.1532 70.0399 27.6974C67.1422 23.5346 63.9652 19.5732 60.5308 15.8408C61.4022 15.017 62.2498 14.2361 63.1402 13.4552ZM57.1881 19.2597C59.5309 21.8024 61.7403 24.4785 63.7926 27.2451C59.368 27.0451 54.9367 27.0451 50.5122 27.2451C52.6978 24.369 54.9549 21.6929 57.1881 19.2597ZM31.2939 5.57929C35.0462 3.39366 43.3696 6.51734 52.1407 14.2837C52.6978 14.7741 53.2549 15.3122 53.8359 15.8455C50.3801 19.5738 47.1809 23.5319 44.2601 27.6927C39.2155 28.1437 34.2053 28.9199 29.2607 30.0164C28.9702 28.8783 28.7274 27.7165 28.4798 26.5546C26.3799 15.7503 27.7655 7.60777 31.2939 5.57929ZM22.0324 37.0446C23.3038 36.597 24.599 36.1971 25.8942 35.8161C27.4117 40.6594 29.2376 45.4007 31.3606 50.0108C29.2178 54.6772 27.3655 59.4961 25.8275 64.4054L25.8227 64.4102C24.8928 64.1448 23.9703 63.8543 23.0562 63.5388C18.304 62.0436 12.8995 59.677 8.99486 56.5772C7.88025 55.8062 6.93373 54.817 6.21264 53.6695C5.49155 52.5219 5.0109 51.24 4.7998 49.9013C4.7998 45.8157 11.8519 40.5921 22.0324 37.0446Z"
                fill="#53C1DE"
            />
        </svg>
    );
};

export default IconReact;
