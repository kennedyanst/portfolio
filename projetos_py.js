// apenas após o DOM carregar
window.addEventListener('DOMContentLoaded', ()=>{

  // mapeia cards e elementos principais
  const cards      = document.querySelectorAll('.py-cards .card');
  const mainImage  = document.getElementById('mainImage');
  const para1      = document.getElementById('para1');
  const para2      = document.getElementById('para2');
  const para3      = document.getElementById('para3');

  // dados para cada card
  const data = {
    estatistica: {
      img:    './imagens/python_r/siade-capa.png',
      p1:     'Este projeto de análise estatística usa Python e R para validar hipóteses, gerar gráficos e relatórios de forma automatizada.',
      p2:     'Integra módulos de amostragem, testes de significância e visualização interativa.',
      p3:     'Usuário pode carregar dados em CSV ou Excel e obter saídas prontas em PDF ou HTML.'
    },
    ml: {
      img:    'imgs/py-ml.png',
      p1:     'No módulo de Machine Learning implementamos regressão, classificação e clustering.',
      p2:     'Utilizamos scikit-learn e TensorFlow para treinar e avaliar modelos.',
      p3:     'Resultados são apresentados com gráficos dinâmicos em dashboards interativos.'
    },
    automacao: {
      img:    'imgs/py-automacao.png',
      p1:     'A camada de automação exporta relatórios via e-mail, gera alertas e executa tarefas em lote.',
      p2:     'Usamos cronjobs, Airflow e scripts Python para agendar processos.',
      p3:     'Logs detalhados garantem auditabilidade e fácil manutenção.'
    }
  };

  // função que atualiza tudo quando um card é clicado
  function activate(id){
    // desmarca todos
    cards.forEach(c=>c.classList.remove('active'));
    // marca o escolhido
    const card = document.querySelector(`.card[data-id="${id}"]`);
    card.classList.add('active');

    // atualiza conteúdo
    mainImage.src        = data[id].img;
    para1.textContent    = data[id].p1;
    para2.textContent    = data[id].p2;
    para3.textContent    = data[id].p3;
  }

  // ligar o clique de cada card
  cards.forEach(c=>{
    c.addEventListener('click', ()=> activate(c.dataset.id));
  });

  // inicializa com 'estatistica'
  activate('estatistica');
});
