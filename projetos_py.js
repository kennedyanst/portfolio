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
      p1.textContent = 'Um exemplo de projeto que desenvolvi para a área da estatística, é o SIADE (Sistema de Análise de Dados Estatísticos).';
      p2.textContent = 'É uma ferramenta que facilita a análise de dados estatísticos, permitindo que usuários realizem análises complexas de forma intuitiva e rápida.';
      p3.textContent = 'Cada página deste projeto é dedicada a um aspecto específico do SIADE, como a análise de dados, visualização de resultados e geração de relatórios.';
    }
    else if (card.classList.contains('card-ml')) {
      mainImg.src    = './imagens/python_r/ml-capa.png';
      mainImg.alt    = 'Machine Learning com Python/R';
      p1.textContent = 'Modelos de Machine Learning para classificação e regressão, usando scikit-learn, h2o, caret entre outros bibliotecas/libs.';
      p2.textContent = 'No exemplo ao lado, é apresentado um script python que salva os melhores parametros dos modelos mais precisos na base, ';
      p3.textContent = 'Antes de criar os modelos, foi feito uma análise exploratória dos dados, limpeza e preparação, além de seleção de variáveis e comparações de resultados.';
    }
    else if (card.classList.contains('card-auto')) {
      mainImg.src    = './imagens/python_r/auto-capa.png';
      mainImg.alt    = 'Automação com Python/R';
      p1.textContent = 'Automatizamos tarefas repetitivas, desde raspagem web até geração de relatórios e envio de e-mail.';
      p2.textContent = 'Utilizando as bibliotecas Selenium, BeautifulSoup e Requests, conseguimos extrair dados de sites, processar informações e gerar relatórios automatizados.';
      p3.textContent = 'Agendamento de execuções, envio de e-mails e integração com outras ferramentas são algumas das funcionalidades que implementei.';
    }
  });
});
