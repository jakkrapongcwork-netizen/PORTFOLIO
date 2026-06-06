import { useState, useEffect } from "react";

function WelcomePage() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                    "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
                overflow: "hidden",
            }}
        >
            {showContent && (
                <div
                    style={{
                        textAlign: "center",
                        color: "white",
                        padding: "3rem",
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                        animation: "fadeUp 1s ease forwards",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "4rem",
                            marginBottom: "1rem",
                            fontWeight: "700",
                            letterSpacing: "2px",
                        }}
                    >
                        JAKKRAPONG CONTO
                    </h1>

                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "400",
                            color: "#cbd5e1",
                            marginBottom: "2rem",
                        }}
                    >
                        Full Stack Developer
                    </h2>

                    <p
                        style={{
                            fontSize: "1.1rem",
                            maxWidth: "600px",
                            lineHeight: "1.8",
                            color: "#94a3b8",
                            marginBottom: "2rem",
                        }}
                    >
                        Building modern web applications with
                        React, Node.js, Express.js and MongoDB.
                    </p>

                    <button
                        style={{
                            padding: "12px 32px",
                            background: "#3b82f6",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontSize: "1rem",
                            fontWeight: "600",
                        }}
                    >
                        View Portfolio
                    </button>
                </div>
            )}

            <style>
                {`
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>
        </div>
    );
}

export default WelcomePage;