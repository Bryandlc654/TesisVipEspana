function WspButton(){

    function toggleChat() {
        let chatBox = document.getElementById('chat-box');
        let whatsapp = document.getElementById('whatsapp');
    
        if (chatBox && whatsapp) {
            if (chatBox.style.display === 'none' || chatBox.style.display === '') {
                chatBox.style.display = 'block';
                whatsapp.classList.add('no-animation');
            } else {
                chatBox.style.display = 'none';
                whatsapp.classList.remove('no-animation');
            }
        }
    }

    function sendMessage() {
        let input = document.getElementById('chat-input');
        let message = input.value;
        
        if (message.trim() === '') return;
    
        let messages = document.getElementById('chat-messages');
        let newMessage = document.createElement('div');
        newMessage.innerHTML = '<strong>Tú :</strong> ' + message;
        newMessage.classList.add('message');
        messages.appendChild(newMessage);
    
        input.value = '';
    
        let phoneNumber = '+34910918418';
        let whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
        window.open(whatsappUrl, '_blank');
    }

    return (
        <>
        <div className="toggle-switch" title="WhatsApp de Tesis VIP">
        <div id="whatsapp" className="whatsapp toggle-button" onClick={toggleChat}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
        </div>
    </div>
    <div id="chat-box" className="chat-box">
        <div className="chat-header">
            <button className="chat-header__close-button" onClick={toggleChat} title="Cerrar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
            </button>
            <div className="chat-header__content">
                <div className="chat-header__container-image">
                    <img src="./assets/img/imagen-whatsapp.webp" alt="Foto de perfil de Tesis VIP en WhatsApp" />
                </div>
                <div className="chat-header__texts">
                    <p className="chat-header__title">Asesor en Línea</p>
                    <span className="chat-header__status">Online</span>
                </div>
            </div>
        </div>
        <div id="chat-messages" className="chat-messages">
            <div className="message">
                <span>Hola 👋</span>
                <span className="bold">¿Necesitas ayuda?</span>
            </div>
        </div>
        <div className="chat-input">
            <input id="chat-input" type="text" placeholder="Escribe un mensaje"/>
            <button onClick={sendMessage} title="Enviar mensaje">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path></svg>
            </button>
        </div>
    </div>
    </>
    )
}

export default WspButton;