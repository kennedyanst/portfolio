const databricksSlides = [
  {
    image: 'imagens/databricks/apresentacao.png',
    alt: 'Print da apresentação do projeto Databricks',
    title: 'Apresentação',
    description: [
      'Este projeto contém a implementação completa de uma Arquitetura Lakehouse voltada para uma operação varejista de bicicletas.',
      'O projeto integra os domínios de Vendas (Sales) e Produção (Production), transformando dados brutos em insights estratégicos através de uma esteira automatizada de dados.',
      'Mais projetos em databricks, você pode acessar no meu github, última pagina deste portfólio.'
    ]
  },

  {
    image: 'imagens/databricks/recursos_azure.png',
    alt: 'Print dos recursos azure',
    title: 'Recursos Azure',
    description: [
      'ADLS Gen2 com HNS: A Storage Account foi configurada com Namespace Hierárquico (HNS) habilitado, permitindo que o Spark realize operações de diretório com alta performance.',
      'Identidade Gerenciada: Utilização do Access Connector for Azure Databricks com a função de Storage Blob Data Contributor.',
      'Gerenciamento Físico: Uso do Azure Storage Explorer para validação da hierarquia de pastas e permissões de ACL.'
    ]
  },

  {
    image: 'imagens/databricks/Conta de armazenamento.png',
    alt: 'Print conta de armazenamento',
    title: 'Conta de Armazenamento',
    description: [
      'No container principal, o uc-ext-azure, implementei a segregação física das camadas da Arquitetura Medalhão (resource, bronze, silver e gold), garantindo rastreabilidade e integridade dos dados.',
      'A segurança e a governança foram priorizadas através do uso de Identidades Gerenciadas via Access Connector e permissões granulares de RBAC (Storage Blob Data Contributor), eliminando a exposição de chaves de acesso nos notebooks de processamento.'
    ]
  },

  {
    image: 'imagens/databricks/data_lake.png',
    alt: 'Print da arquitetura do Data Lake',
    title: 'Camada Medalhão e LZ',
    description: [
      'Dentro do container principal, o uc-ext-azure, implementei a segregação física das camadas da Arquitetura Medalhão e Landing Zone (resource, bronze, silver e gold), garantindo rastreabilidade e integridade dos dados.',
      'Na Landing Zone, os dados brutos são ingeridos e armazenados na camada resource, mantendo a fidelidade dos dados originais. A partir daí, os dados passam por processos de limpeza e transformação para as camadas bronze, silver e gold.'
    ]
  },

  {
    image: 'imagens/databricks/landing_stage.png',
    alt: 'Print do landing stage',
    title: 'Landing Zone',
    description: [
      'Na Landing Zone, foram inseridos 9 tabelas em csv e uma imagem do schema dos dados, totalizando 10 arquivos. As tabelas em questão são: brands, categories, customers, order_items, orders, products, staffs, stocks e stores.',
      'A alimentação dessa pasta foi feita manualmente mas poderia ter sido orquestrada pelo Azure Data Factory, por exemplo, para ingestão de dados em batch ou streaming a partir de fontes externas, como bancos de dados relacionais, APIs ou sistemas legados.'
    ]
  },

  {
    image: 'imagens/databricks/camada_bronze.png',
    alt: 'Print da camada bronze',
    title: 'Camada Bronze',
    description: [
      'O processo percorre dinamicamente o volume de origem, captura todos os arquivos .csv e os persiste em Delta Lake. Cada registro é enriquecido com colunas de auditoria: _data_ingestao, _arquivo_origem e _camada.',

    ],
    links: [
      { label: '📓 Preparação do Ambiente',        href: 'imagens/databricks/scripts/01.Preparando Ambiente.html' },
      { label: '📓 Carregamento da Camada Bronze', href: 'imagens/databricks/scripts/bronze/Automatização do Carregamento da Pasta Bronze.html' }
    ]
  },

  {
    image: 'imagens/databricks/camada_silver.png',
    alt: 'Print da camada silver',
    title: 'Camada Prata',
    description: [
      'União de produtos com marcas, categorias e estoques agregados. Cálculo de total_sale em pedidos e mapeamento textual de status (ex: 1 = "Pending"). Filtragem de clientes com dados de contato (e-mail/telefone) válidos'
    ],
    links: [
      { label: '📓 Silver – Products (Produção)',  href: 'imagens/databricks/scripts/silver/01.Silver_Products-Producao.html' },
      { label: '📓 Silver – Orders (Produção)',    href: 'imagens/databricks/scripts/silver/02.Silver_Orders-Producao.html' },
      { label: '📓 Silver – Customers (Produção)', href: 'imagens/databricks/scripts/silver/03.Silver_Custumers-Producao.html' }
    ]
  },

  {
    image: 'imagens/databricks/camada_gold.png',
    alt: 'Print da camada gold',
    title: 'Camada Ouro',
    description: [
      'Criação de tabelas finalísticas, como sales_ny (vendas entregues em New York) e orders_pending (pedidos operacionais para ação imediata).',
    ],
    links: [
      { label: '📓 Gold – Sales NY',         href: 'imagens/databricks/scripts/gold/01.Gold_Sales_NY.html' },
      { label: '📓 Gold – Ordens Pendentes', href: 'imagens/databricks/scripts/gold/02.Gold_Ordens_Pending.html' }
    ]
  },

  {
    image: 'imagens/databricks/delta_lake.png',
    alt: 'Print do Delta Lake',
    title: 'Delta Lake',
    description: [
      'Camada transacional que adiciona transações ACID e histórico (Time Travel) sobre arquivos Parquet.',
      'No projeto, as tabelas de todas as camadas são persistidas como Delta, garantindo confiabilidade e performance através do log transacional (_delta_log).',
      'Essa tecnologia permite a evolução de esquema controlada e o reprocessamento eficiente dos dados.'
    ]
  },

  {
    image: 'imagens/databricks/Workspace.png',
    alt: 'Print do Workspace',
    title: 'Workspace',
    description: [
      'Ambiente foi denominado "projeto-databricks", que centralizará o desenvolvimento Spark do projeto.',
      'Integra notebooks organizados por camadas medalhão com o GitHub via Databricks Repos, facilitando o versionamento e a colaboração técnica.',
      'É o centro de comando onde são gerenciados clusters, catálogos de dados e a orquestração dos fluxos de trabalho.'
    ]
  },

  {
    image: 'imagens/databricks/Unity Catalog.png',
    alt: 'Print do Unity Catalog',
    title: 'Unity Catalog',
    description: [
      'Provê governança avançada através da hierarquia catálogo (bikestore) e schema (logistics).',
      'Utiliza Volumes Externos (bikestore_resource) para gerenciar arquivos não tabulares de forma governada, abstraindo URLs complexas por caminhos lógicos legíveis.',
      'Centraliza o controle de acesso, metadados e auditoria de todos os ativos de dados da arquitetura.'
    ]
  },

  {
    image: 'imagens/databricks/Cluster.png',
    alt: 'Print do Cluster',
    title: 'Cluster',
    description: [
      'Computador virtual configurado no modo Single Node para processamento Spark de alta eficiência com custo reduzido.',
      'Utiliza versões LTS (Long Term Support) para garantir estabilidade, segurança e suporte prolongado.',
      'A infraestrutura prioriza a economia operacional através da terminação automática após inatividade, permitindo o pagamento proporcional ao uso de recursos computacionais na nuvem.'
    ]
  },

  {
    image: 'imagens/databricks/jobs-pipeline.png',
    alt: 'Print dos Jobs e Pipeline',
    title: 'Jobs & Pipeline',
    description: [
      'Orquestração via Databricks Workflows, encadeando tarefas com dependências entre as camadas Bronze, Silver e Gold.',
      'O pipeline inclui validações intermediárias, configuração de triggers e schedule de execução paralela de notebooks e notificações automáticas de status.',
      'Esse desenho garante que as transformações sigam a ordem lógica, assegurando a integridade dos dados até o consumo final.'
    ]
  },

  {
    image: 'imagens/databricks/power-bi-integracao.png',
    alt: 'Print da integração com Power BI',
    title: 'Power BI Integration',
    description: [
      'O Power BI consome preferencialmente a camada Gold, acessando tabelas já modeladas com regras de negócio e joins complexos aplicados.',
      'Isso garante consistência métrica e alta performance nos dashboards. Além disso, o Azure Data Factory pode ser configurado para triggar o refresh do conjunto de dados após o processamento no Databricks'
    ]
  }
];

let currentSlide = 0;

const imageElement       = document.getElementById('projectImage');
const titleElement       = document.getElementById('projectImageTitle');
const descriptionElement = document.getElementById('projectImageDescription');
const previousButton     = document.getElementById('previousProject');
const nextButton         = document.getElementById('nextProject');

function createDescriptionParagraphs(paragraphs, links) {
  descriptionElement.innerHTML = '';

  // Parágrafos de texto
  paragraphs.forEach((paragraph) => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    descriptionElement.appendChild(p);
  });

  // Links para notebooks (apenas quando existirem no slide)
  if (links && links.length > 0) {
    const linksWrapper = document.createElement('div');
    linksWrapper.className = 'notebook-links';

    links.forEach(({ label, href }) => {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = label;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      linksWrapper.appendChild(a);
    });

    descriptionElement.appendChild(linksWrapper);
  }
}

function renderSlide(index) {
  const slide = databricksSlides[index];

  imageElement.classList.remove('fade-change');
  titleElement.classList.remove('fade-change');
  descriptionElement.classList.remove('fade-change');

  // Força o reflow para reiniciar a animação CSS corretamente
  void imageElement.offsetWidth;

  imageElement.src = slide.image;
  imageElement.alt = slide.alt;
  titleElement.textContent = slide.title;
  createDescriptionParagraphs(slide.description, slide.links);

  requestAnimationFrame(() => {
    imageElement.classList.add('fade-change');
    titleElement.classList.add('fade-change');
    descriptionElement.classList.add('fade-change');
  });
}

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + databricksSlides.length) % databricksSlides.length;
  renderSlide(currentSlide);
}

previousButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

renderSlide(currentSlide);