import './src/styles/global.css';

export function onClientEntry() {
    const preferenceTheme = localStorage.getItem("preference-theme");
    if (preferenceTheme === null || preferenceTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}