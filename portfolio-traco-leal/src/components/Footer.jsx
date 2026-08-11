import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-info">

                    <h2>ATENDIMENTO</h2>

                    <p>atendimento3@tracoleal.com.br</p>

                    <p>+55 35 3622 3450</p>

                    <br />

                    <h2>NEGÓCIOS</h2>

                    <strong>DIRETORIA DE ATENDIMENTO</strong>

                    <p>andrea@tracoleal.com.br</p>

                    <p>+55 35 98467 4711</p>

                </div>

                <div className="footer-form">

                    <h2>Envie uma mensagem</h2>

                    <input type="text" placeholder="Nome" />

                    <input type="email" placeholder="E-mail" />

                    <input type="text" placeholder="Telefone" />

                    <textarea rows="8" placeholder="Mensagem"></textarea>

                    <button>Enviar mensagem</button>

                </div>

            </div>

        </footer>
    );
}

export default Footer;