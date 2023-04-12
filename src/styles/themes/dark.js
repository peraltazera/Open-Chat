import Background from "../../assets/DarkLogin.png"

export default {
    title: "dark",

    colors: {
        icon: "#999999",
        iconHover: "#2176FF",
        load: {
            background: "#131517",
            text: "#FFFFFF",
        },
        login: {
            background: "#131517",
            backgroundImage: Background,
            firstTitle: "#2176FF",
            endTitle: "#FFFFFF",
            input: {
                background: "#FFFFFF",
                text: "#212329",
            },
        },
        aside: {
            background: "#212329",
            border: "#212329",
            header: {
                text: "#FFFFFF",
                icon: "#999999",
                iconHover: "#2176FF",
            },
            body: {
                text: "#8E8E8E",
                input: {
                    background: "#15161A",
                    text: "#FFFFFF",
                    placeholder: "#8E8E8E",
                    icon: "#8E8E8E",
                },
                card: {
                    backgroundCard: "#212329",
                    backgroundHover: "rgb(255, 255, 255,0.06)",
                    backgroundSelect: "rgb(255, 255, 255,0.1)",
                    name: "#FFFFFF",
                    message: "#8E8E8E",
                    date: "#8E8E8E",
                    iconEnabled: "#2176FF",
                    iconDisabled: "#999999",
                    backgroundNumber: "#BE4C50",
                    number: "#FFFFFF",
                },
            },
            setting: {
                text: "#FFFFFF",
                icon: "#999999",
                iconHover: "#2176FF",
                language: {
                    background: "#15161A",
                    text: "#FFFFFF",
                },
                logout: {
                    text: "#FFFFFF",
                    hover: "#BE4C50",
                },
            }
        },
        chat: {
            initial: {
                background: "#15161A",
                title: "#FFFFFF",
                text: "#8E8E8E",
            },
            header: {
                background: "#212329",
                sideBorder: "#1B1C23",
                bottomBorder: "#131517",
                text: "#FFFFFF",
                icon: "#999999",
            },
            body: {
                background: "#131517",
                button: "#8E8E8E",
                myMessage: {
                    background: "#2176FF",
                    name: "#FFFFFF",
                    message: "#FFFFFF",
                    date: "#8E8E8E",
                },
                otherMessage: {
                    background: "#1E1F25",
                    name: "#FFFFFF",
                    message: "#FFFFFF",
                    date: "#8E8E8E",
                },
                date: {
                    line: "#1E1F25",
                    text: "#8E8E8E",
                },
            },
            footer: {
                background: "#131517",
                input: {
                    background: "#1E1F25",
                    text: "#FFFFFF",
                    placeholder: "#8E8E8E",
                    icon: "#999999",
                    iconHover: "#2176FF",
                },
            },
            info: {
                background: "#1E1F25",
                border: "#1E1F25",
                name: "#FFFFFF",
                email: "#8E8E8E",
                title:  "#FFFFFF",
                card: {
                    title: "#FFFFFF",
                    desc: "#8E8E8E",
                    icon: "#999999",
                },
            }
        }
    }
}