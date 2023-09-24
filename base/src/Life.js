import React from "react";
import './Life.css'
function Life() {
    return (
        <section id="Life-wrapper">
            <h1 id="Life-title">
                Life
            </h1>
            <ul id="Life-list-wrapper">
                <li>
                    <p className="Life-list-date">2023/04</p>
                    <div className="Life-list-content">
                        <h3>筑波大学情報学群情報科学類　入学</h3>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Life;