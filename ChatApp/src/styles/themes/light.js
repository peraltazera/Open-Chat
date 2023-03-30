import Background from "../../assets/LightLogin.png"

export default {
    title: "light",

    colors: {
        icon: "#999999",
        iconHover: "#2176FF",
        load: {
            background: "#FFFFFF",
            text: "#282932",
        },
        login: {
            background: "#FFFFFF",
            backgroundImage: Background,
            firstTitle: "#2176FF",
            endTitle: "#282932",
            input: {
                background: "#282932",
                text: "#FFFFFF",
            },
        },
        aside: {
            background: "#FCFCFC",
            border: "#F6F6F6",
            header: {
                text: "#1E1F25",
                icon: "#282932",
                iconHover: "#2176FF",
            },
            body: {
                text: "#8E8E8E",
                input: {
                    background: "#E7E7E7",
                    text: "#1E1F25",
                    placeholder: "#8E8E8E",
                    icon: "#8E8E8E",
                },
                card: {
                    backgroundCard: "#FFFFFF",
                    backgroundHover: "rgb(33, 118, 255,0.06)",
                    backgroundSelect: "rgb(33, 118, 255,0.1)",
                    name: "#1E1F25",
                    message: "#8E8E8E",
                    date: "#8E8E8E",
                    iconEnabled: "#2176FF",
                    iconDisabled: "#999999",
                    backgroundNumber: "#BE4C50",
                    number: "#FFFFFF",
                },
            },
            setting: {
                text: "#1E1F25",
                icon: "#282932",
                iconHover: "#2176FF",
                language: {
                    background: "#E7E7E7",
                    text: "#1E1F25",
                },
                logout: {
                    text: "#1E1F25",
                    hover: "#BE4C50",
                },
            }
        },
        chat: {
            initial: {
                background: "#FFFFFF",
                title: "#1E1F25",
                text: "#8E8E8E",
            },
            header: {
                background: "#FCFCFC",
                sideBorder: "#FCFCFC",
                bottomBorder: "#F6F6F6",
                text: "#1E1F25",
                icon: "#282932",
            },
            body: {
                background: "#FFFFFF",
                button: "#8E8E8E",
                myMessage: {
                    background: "#2176FF",
                    name: "#1E1F25",
                    message: "#FFFFFF",
                    date: "#8E8E8E",
                },
                otherMessage: {
                    background: "#1E1F25",
                    name: "#1E1F25",
                    message: "#FFFFFF",
                    date: "#8E8E8E",
                },
                date: {
                    line: "#E7E7E7",
                    text: "#8E8E8E",
                },
            },
            footer: {
                background: "#FFFFFF",
                input: {
                    background: "#F6F6F6",
                    text: "#1E1F25",
                    placeholder: "#8E8E8E",
                    icon: "#282932",
                    iconHover: "#2176FF",
                },
            },
            info: {
                background: "#FCFCFC",
                border: "#F6F6F6",
                name: "#1E1F25",
                email: "#8E8E8E",
                title:  "#1E1F25",
                card: {
                    title: "#1E1F25",
                    desc: "#8E8E8E",
                    icon: "#282932",
                },
            }
        }
    }
}