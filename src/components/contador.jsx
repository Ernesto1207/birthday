import React, { useState, useEffect } from "react";
import "../App.css"; // Asegúrate de importar los estilos

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = new Date(targetDate) - new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return null; // Tiempo alcanzado
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) {
        return <h2>¡El tiempo ha llegado!</h2>;
    }

    return (
        <div className="countdown-container">
            <h1 className="title">Cuenta regresiva</h1>
            <div className="countdown-timer">
                {/* Cada bloque representa una unidad de tiempo */}
                <div className="time-block">
                    <div className="time-number">{timeLeft.days}</div>
                    <div className="time-label">Días</div>
                </div>
                <div className="time-block">
                    <div className="time-number">{timeLeft.hours}</div>
                    <div className="time-label">Horas</div>
                </div>
                <div className="time-block">
                    <div className="time-number">{timeLeft.minutes}</div>
                    <div className="time-label">Minutos</div>
                </div>
                <div className="time-block">
                    <div className="time-number">{timeLeft.seconds}</div>
                    <div className="time-label">Segundos</div>
                </div>
            </div>
            {/* Globos animados */}
            <div className="balloons-container">
                <img src="/globo1.png" className="balloons" alt="Globo 1" />
                <img src="./public/globo2.png" className="balloons" alt="Globo 2" />
                <img src="./public/globo3.png" className="balloons" alt="Globo 3" />
                <img src="./public/globo1.png" className="balloons" alt="Globo 4" />
                <img src="./public/globo2.png" className="balloons" alt="Globo 5" />
            </div>
        </div>
    );
};

export default Countdown;
