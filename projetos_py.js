// pega todos os cards e os elementos que vamos atualizar
const cards    = document.querySelectorAll('.tilt-card');
const mainImg  = document.getElementById('mainImage');
const p1       = document.getElementById('para1');
const p2       = document.getElementById('para2');
const p3       = document.getElementById('para3');

cards.forEach(card => {
  // ─── 1) Efeito de tilt ───
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x    = e.clientX - rect.left  - rect.width  / 2;
    const y    = e.clientY - rect.top   - rect.height / 2;
    const rotateY =  ( x / (rect.width  / 2)) * 10;  
    const rotateX = -( y / (rect.height / 2)) * 10; 
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });

  // ─── 2) Seleção via clique ───
  card.addEventListener('click', () => {
    // remove a classe de todos e marca o clicado
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');

    // escolhe qual conteúdo carregar
    if (card.classList.contains('card-stat')) {
      mainImg.src    = './imagens/python_r/siade-capa.png';
      mainImg.alt    = 'Estatística com Python/R';
      p1.textContent = 'Este projeto é um sistema web de análise estatística usando Python para validar hipóteses, gerar gráficos e relatórios de forma automatizada.';
      p2.textContent = 'Integra módulos de amostragem, testes de significância, visualização interativa e outras técnicas estatísticas relevantes.';
      p3.textContent = 'Usuário pode carregar dados em CSV ou Excel e obter saídas prontas em PDF ou HTML.';
    }
    else if (card.classList.contains('card-ml')) {
      mainImg.src    = './imagens/python_r/ml-capa.png';
      mainImg.alt    = 'Machine Learning com Python/R';
      p1.textContent = 'Modelos de Machine Learning para classificação e regressão, usando scikit-learn e TensorFlow.';
      p2.textContent = 'Pipeline de limpeza de dados, seleção de features, validação cruzada e tuning de hiperparâmetros.';
      p3.textContent = 'Gera relatórios comparativos de desempenho e gráficos interativos dos resultados.';
    }
    else if (card.classList.contains('card-auto')) {
      mainImg.src    = './imagens/python_r/auto-capa.png';
      mainImg.alt    = 'Automação com Python/R';
      p1.textContent = 'Automatizamos tarefas repetitivas, desde raspagem web até geração de relatórios e envio de e-mail.';
      p2.textContent = 'Usa Selenium, Requests e Pandas para coleta, API calls e ETL.';
      p3.textContent = 'Agendamento de execuções, notificações e interface simples em Tkinter.';
    }
  });
});
