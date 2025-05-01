// widget.js - Versão otimizada para dispositivos móveis e desktop
(function() {
  // Configurações padrão (responsivas)
  const config = {
    text: "Fragmento da Simceleridade: " + Math.random().toString(36).substring(7),
    bgColor: "#f5f5f5",
    textColor: "#333",
    mobileWidth: "90%", // Largura em dispositivos móveis
    desktopWidth: "300px" // Largura em desktop
  };

  // Detecta se é mobile
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // HTML do widget (com CSS responsivo)
  const widgetHTML = `
    <div id="simceleridade-widget" style="
      background: ${config.bgColor};
      color: ${config.textColor};
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 8px;
      width: ${isMobile ? config.mobileWidth : config.desktopWidth};
      margin: 10px auto;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      font-family: Arial, sans-serif;
    ">
      <p style="margin: 0;">${config.text}</p>
      <button style="
        background: ${config.textColor};
        color: ${config.bgColor};
        border: none;
        padding: 8px 12px;
        margin-top: 10px;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
      ">Atualizar</button>
    </div>
  `;

  // Insere o widget
  document.write(widgetHTML);

  // Adiciona interatividade
  document.querySelector('#simceleridade-widget button').addEventListener('click', function() {
    const newText = "Novo fragmento: " + Math.random().toString(36).substring(7);
    document.querySelector('#simceleridade-widget p').textContent = newText;
  });
})();