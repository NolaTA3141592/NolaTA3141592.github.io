import React from "react";
import './Skills.css'
function Skills() {
    return (
        <section id="Skills-wrapper">
            <h1 id="Skills-title">
                Skills
            </h1>
            <div id="Skills-list-wrapper">
                <div className="Skills-skill">
                    <img src="/images/atcoder_logo.svg" alt="AtCoder" className="Skills-skill-img"
                        height={100} width={100} />
                    <div className="Skills-skill-content">
                        <p>競技プログラミング</p>
                        <p>2020/4~</p>
                        <div className="Skills-skill-content-Sentences">
                            <p>高校入学時から競技プログラミングを始めました。</p>
                            <p>AtCoder以外のコンテストサイトはあまりやっていません。</p>
                        </div>
                    </div>
                </div>
                <div className="Skills-skill">
                    <img src="/images/Python_logo.svg" alt="Python" className="Skills-skill-img"
                        height={100} width={100} />
                    <div className="Skills-skill-content">
                        <p>機械学習</p>
                        <p>2023/4~</p>
                        <div className="Skills-skill-content-Sentences">
                            <p>大学入学からちょっとやっています。たのしい。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;