export const wa = (subject = 'seguros') => `https://wa.me/5511932039326?text=${encodeURIComponent(`Olá! Gostaria de mais informações sobre ${subject}.`)}`;
export const products = [
 {slug:'seguro-auto', title:'Seguro Auto', short:'Seu carro', icon:'car', image:'auto', description:'Cotações que cabem no seu bolso e se encaixam nas suas necessidades.', label:'Cotar seguro auto'},
 {slug:'seguro-residencial', title:'Seguro Residencial', short:'Sua casa', icon:'home', image:'casa', description:'Proteção para o seu patrimônio e assistência 24h para o dia a dia.', label:'Cotar seguro residencial'},
 {slug:'seguro-de-vida', title:'Seguro de Vida', short:'Sua família', icon:'heart', image:'vida', description:'Conheça as possibilidades de proteção para você e sua família.', label:'Conversar sobre seguro de vida'},
 {slug:'seguro-condominial', title:'Seguro Condominial', short:'Seu condomínio', icon:'building', image:'condominio', description:'Assessoria para as necessidades de proteção do seu condomínio.'},
 {slug:'rc-profissional', title:'RC Profissional', short:'Sua profissão', icon:'shield', image:'casa', description:'Conheça a proteção para a sua atividade profissional.'},
 {slug:'seguro-de-vida-em-grupo', title:'Vida em Grupo', short:'Sua equipe', icon:'heart', image:'vida', description:'Soluções em seguro de vida coletivo para empresas e colaboradores.'}
];
export const pillars = [
 ['Agilidade','Procuramos oferecer contato próximo e objetivo para os nossos clientes. A cada etapa, informamos o nosso prazo de resposta e de nossos parceiros.'],
 ['Avaliação','Analisamos ponto a ponto suas necessidades, as coberturas disponíveis no mercado e sua possibilidade financeira para chegar no melhor produto de seguro possível.'],
 ['Honestidade','Não se preocupe! Na WL não oferecemos coberturas desnecessárias para o seu seguro. Sem letras pequenas… sem enrolação!'],
 ['Proteção','Nosso trabalho é garantir que você, sua família e seu negócio estarão protegidos nos momentos de maior necessidade.']
];
// Conteúdo editorial coletado das páginas públicas da WL em 06/11/2026.
// Ausências de coleta estão documentadas em docs/mapeamento.md.
export const pages = {
 'seguro-auto': {
  title:'Seguro Auto', eyebrow:'PARA SEGUIR SEU CAMINHO', image:'auto', intro:'Sem dúvidas, o produto mais conhecido no mercado de seguros!',
  lead:'Uma grande variedade de coberturas que, combinadas com as suas necessidades, resultam em uma apólice personalizada.',
  sections:[
   ['Um seguro que se encaixa na sua rotina','Buscamos cotações que caibam no seu bolso e se encaixem na sua rotina. É importante que você entenda as partes e coberturas que formam a apólice do seu Seguro Auto. Para simplificar, destacamos abaixo as principais coberturas.'],
   ['Seguro de Casco','É ele que protege o seu veículo! Pode ser parcial ou integral, utilizando a tabela FIPE como referência. Cobertura acionada por ocorrência de colisão, incêndio, roubo, furto e alagamento.'],
   ['Coberturas opcionais','As seguradoras oferecem um grande leque de possibilidades de coberturas adicionais, como proteção de vidros, carro reserva, reparo rápido, entre outras.'],
   ['Motorista de aplicativo','Você sabia que existe uma cobertura que, em caso de sinistro que impossibilite o uso do carro, prevê uma indenização relativa ao período que deixou de trabalhar? Solicite sua cotação e conheça essa proteção para a sua renda.'],
   ['Responsabilidade Civil Facultativa (RCF)','A famosa cobertura para terceiros! Garante indenização para danos materiais, corporais e morais dos valores reclamados por terceiros cujo veículo tenha sido danificado ou que tenham sofrido danos físicos (morte e/ou invalidez) em razão de um acidente envolvendo o seu carro.'],
   ['Acidentes Pessoais de Passageiros (APP)','Cobre danos corporais aos passageiros do veículo segurado em razão de acidente de trânsito, além de despesas médicas e hospitalares.'],
   ['Mas não tive sinistro e meu seguro ficou mais caro?','Quer entender como é calculado o valor do seu seguro? Converse com a WL para conhecer os fatores considerados na sua cotação.']
  ]
 },
 'seguro-residencial': {
  originalLink:true, title:'Seguro Residencial',eyebrow:'CUIDADO QUE COMEÇA EM CASA',image:'casa',intro:'Mais tranquilidade para o lugar que é seu.',
  lead:'Para proprietários e inquilinos de imóveis de moradia ou temporada, como casas de veraneio.',
  sections:[
   ['A proteção básica','Ao contratar a cobertura básica de um seguro residencial, você estará coberto contra incêndio, queda de raio, explosão e fumaça de qualquer causa e natureza.'],
   ['Valor da cobertura básica','Ponto de muita atenção: a definição desse valor garantirá o pagamento de indenização caso ocorra um sinistro. Um valor abaixo do necessário pode prejudicar a cobertura dos seus prejuízos e de sua família. Esse valor deve considerar o custo de reconstrução do imóvel — área construída em m² multiplicada pelo custo unitário do m² de construção da região — e o valor de reposição dos móveis, eletrodomésticos, eletroeletrônicos e outros bens existentes.'],
   ['Danos elétricos','Cobertura adicional para danos a eletroeletrônicos e instalações elétricas em razão de curto-circuito e variação de tensão.'],
   ['Danos de causas naturais','Cobertura adicional para eventos como vendaval, furacão, tornado, queda de granizo e desmoronamento.'],
   ['Subtração de bens','Cobertura adicional para situações com emprego de violência ou mediante arrombamento de um dos acessos da residência.'],
   ['Impacto de veículos e aeronaves','Cobertura adicional para danos causados à residência por impacto de veículos ou queda de qualquer tipo de aeronave.'],
   ['Danos a terceiros: responsabilidade civil','Contempla danos causados involuntariamente pelo segurado, familiares, empregados ou animais domésticos a terceiros. Sua filha derrubou um objeto numa loja de decoração? Seu cachorro mordeu um turista numa viagem? Você machucou alguém durante uma partida de futebol? A cobertura de Responsabilidade Civil pode ser acionada para essas situações, conforme as condições contratadas.'],
   ['Assistência 24h','A conta de água teve um aumento súbito? Pode haver um vazamento. Esqueceu as chaves no trabalho? A assistência pode ajudar. Para muitas necessidades do dia a dia, a assistência do seguro residencial é útil, ágil e sem custo adicional, conforme os serviços contratados. Você aproveita os benefícios do seu seguro e pode economizar quando houver necessidade de manutenção ou conserto.'],
   ['A melhor parte','Todas essas proteções têm um preço acessível. Quer conhecer? Chame a nossa equipe para saber mais. A utilização de um serviço de assistência 24h pode representar uma economia importante em relação ao investimento no seguro.'],
   ['Preço do seguro (prêmio)','Quer saber quais fatores influenciam no preço do seu seguro? Confira as informações publicadas na página original ou solicite sua cotação e tire suas dúvidas com nossa equipe.']
  ]
 },
 'rc-profissional': {
  title:'RC Profissional',eyebrow:'PROTEÇÃO PARA A SUA PROFISSÃO',image:'casa',intro:'Mais segurança para exercer o que você faz.',
  lead:'Também conhecido como Seguro E&O — Errors and Omissions (Erros e Omissões).',
  sections:[
   ['Sua atividade e seu patrimônio','A contratação de seguro de Responsabilidade Civil Profissional resguarda de ações civis por danos causados a terceiros no exercício de suas atividades. O objetivo é proteger o patrimônio e amparar você e sua empresa pelas reclamações relativas a danos decorrentes da prestação de serviços a terceiros.'],
   ['Indenização','É feita por reembolso ou pagamento dos valores de condenação, conforme a apólice.'],
   ['Contratação','Geralmente são contratos anuais. Pode ser contratado por profissional ou por empresa.'],
   ['Quem pode contratar?','Profissionais liberais, como advogados e profissionais da saúde, entre outros, e pessoas jurídicas nas mesmas áreas de atuação.'],
   ['Riscos excluídos','Como todo seguro, é necessário verificar nas condições gerais quais são os riscos que, caso ocorram, não serão cobertos.'],
   ['Dra. Ana — Advogada','Relato publicado pela WL: uma advogada com anos de experiência perdeu um prazo num processo em 2023, em meio ao acúmulo de tarefas e problemas com a equipe. O erro gerou um prejuízo financeiro para o cliente do escritório de R$ 122.839,00, equivalente a 15% do faturamento do escritório. Segundo o relato, o escritório era cliente da WL, havia contratado um seguro de E&O — Advogados e foi indenizado pela seguradora em R$ 120.000,00, o limite de indenização contratado.'],
   ['Otávio — Engenheiro','Relato publicado pela WL: Otávio foi contratado como engenheiro responsável pela construção de um pequeno edifício de apartamentos destinados à locação. Após a entrega, surgiram rachaduras. Uma perícia identificou erro de cálculo estrutural e os proprietários entraram com ação de reparação de danos materiais e morais. O RC Profissional pode cobrir custos de reparação e indenizações, dentro dos limites e condições contratados.'],
   ['Dr. João — Médico Ortopedista','Relato publicado pela WL: um paciente moveu ação alegando erro médico após uma cirurgia de artroscopia de joelho e perda de mobilidade, pedindo R$ 50.000,00 de indenização. O relato informa que um laudo pericial identificou falha cirúrgica relacionada à perda de mobilidade. Um acordo intermediado pelo advogado reduziu a indenização para R$ 13.000,00. Segundo a publicação, o médico tinha Seguro RC e, após autorização da seguradora, realizou o pagamento do acordo por meio da indenização do seguro.'],
   ['Proteção no seu planejamento','Tanto para empresas como para profissionais autônomos, a segurança da sua profissão precisa ser uma prioridade no planejamento financeiro. Converse com a WL e conheça as possibilidades.']
  ],originalLink:true
 },
 'seguro-de-vida-em-grupo': {
  title:'Seguro de Vida em Grupo',eyebrow:'QUEM FAZ SUA EMPRESA CRESCER',image:'vida',intro:'Proteção para empresas e colaboradores.',
  lead:'Uma solução de proteção financeira para os colaboradores da sua empresa.',
  sections:[
   ['Proteção essencial','O seguro de vida coletivo (ou em grupo) oferece proteção financeira aos colaboradores de uma empresa, buscando tranquilidade para o empregador e os funcionários. Cada vez mais presente nas organizações brasileiras, esse tipo de seguro também pode atender exigências de convenções coletivas de trabalho.'],
   ['Individual ou coletivo?','O Seguro de Vida Individual é contratado pela pessoa física, com cobertura personalizada conforme suas necessidades, interesses, perfil e possibilidade de investimento. O coletivo é voltado para grupos, geralmente funcionários de uma empresa ou membros de uma associação. As condições são negociadas em conjunto, com possibilidade de valores mais acessíveis, facilidade de contratação e inclusão dos colaboradores elegíveis.'],
   ['Contratação compulsória','Todos os funcionários elegíveis são incluídos, atendendo às exigências das convenções coletivas aplicáveis. A empresa assume o pagamento total ou parcial do prêmio.'],
   ['Contratação facultativa','A empresa oferece a opção aos colaboradores, que podem aderir voluntariamente ao seguro. O pagamento pode ser integralmente do funcionário ou compartilhado com a empresa.'],
   ['Convenções coletivas','As normas variam conforme setor e região e podem determinar coberturas mínimas (morte, invalidez e assistência funeral, entre outras), valores mínimos de indenização e participação da empresa no pagamento do prêmio. É fundamental conhecer a convenção que representa seus funcionários.'],
   ['Soluções para o seu negócio','A WL oferece soluções personalizadas em seguro de vida coletivo, com atendimento para empresas de diferentes portes e segmentos. Nossa equipe analisa as necessidades do seu negócio e as exigências das convenções coletivas. Fale com a equipe e tire suas dúvidas.']
  ]
 },
 'seguros-de-pessoas': {
  title:'Seguros de Pessoas',eyebrow:'VOCÊ E QUEM IMPORTA',image:'vida',intro:'Proteção para diferentes momentos da vida.',
  lead:'Conheça as coberturas de sobrevivência e de risco, em planos individuais ou coletivos.',
  sections:[
   ['Cobertura de sobrevivência','Garante o pagamento do capital segurado pela sobrevivência do segurado ao período acordado com a seguradora. O pagamento é realizado em parcela única ao término do período. A página original apresenta os planos de Previdência Privada (PGBL ou VGBL) nesta categoria.'],
   ['Coberturas de risco','Visam assegurar o pagamento de uma indenização ao segurado ou aos seus beneficiários, de acordo com as cláusulas contratuais e as coberturas adquiridas. Exemplos apresentados pela WL: Seguro de Vida, Funeral, Acidentes Pessoais, Educacional, Viagem, Prestamista, Diária de Internação Hospitalar, Perda de Renda e Diária de Incapacidade Temporária.'],
   ['Individual ou coletivo','Os planos podem ser contratados de forma individual ou coletiva. Na modalidade coletiva, pode haver contribuição de cada integrante do plano ou não, como no caso de funcionários de uma empresa.'],
   ['E a previdência privada?','A apresentação dos produtos neste site se concentra nas coberturas de risco. Para saber mais sobre planos de previdência privada, fale com a nossa equipe.'],
   ['Seguro de vida vai além','Muitas pessoas associam o Seguro de Vida somente à morte. Conheça as outras possibilidades de apoio em momentos desafiadores da sua vida ou da sua família.']
  ]
 },
 'sobre-nos': {
  title:'Sobre a WL',eyebrow:'PESSOAS CUIDANDO DE PESSOAS',image:'vida',intro:'Uma relação que vai além do seguro.',
  lead:'Desde janeiro de 2023, aproximando as pessoas da proteção que faz sentido para elas.',
  sections:[
   ['Nossa história','A WL nasceu em janeiro de 2023 quando os sócios fundadores, ambos com experiências sólidas no mercado financeiro e securitário, perceberam uma necessidade de personalização no atendimento ao cliente que busca proteger seu patrimônio e sua família.'],
   ['Missão','Oferecer atendimento 100% personalizado de acordo com as necessidades reais de cada cliente. Gerar relação de alta confiança e credibilidade, auxiliando nas principais tomadas de decisão em todo o processo de contratação e utilização de um seguro.'],
   ['Visão','Ser referência no modelo de assessoria de seguros, indo além da venda comercial e criando uma relação próxima e respeitosa, para que os clientes se lembrem da WL diante de uma necessidade de proteção de seus bens, negócios e familiares.'],
   ['Valores','A WL acredita que o mercado securitário tem como principal função a resolução de uma dor ou preocupação na vida das pessoas e na organização das empresas. Nossa atuação aposta no diagnóstico das necessidades, preocupações e objetivos tanto da pessoa física quanto jurídica. Nossos valores são excelência no atendimento, foco no indivíduo, transparência, disponibilidade, dedicação e solidariedade.']
  ]
 },
 'assessoria-de-seguros': {
  title:'Assessoria de Seguros',eyebrow:'ANTES, DURANTE E DEPOIS',image:'auto',intro:'Sua assessoria em cada etapa.',
  lead:'Cada etapa do nosso atendimento foi pensada para garantir a satisfação do nosso cliente.',
  sections:[
   ['Renovações acompanhadas','Sempre esquece as datas de renovação das suas apólices? Na WL suas apólices são monitoradas e faremos contato com você 10 dias antes do vencimento. Praticidade, comodidade e tranquilidade para você. Fale com a equipe para enviar suas apólices atuais.'],
   ['Cotações personalizadas','Recebe várias cotações e fica com dúvidas sobre a melhor opção? Nosso time entrega um material completo e personalizado para suas necessidades, de acordo com as informações fornecidas durante o processo de cotação.'],
   ['Conversa até ficar claro','Ainda restam dúvidas? Estamos disponíveis para conversar por telefone, WhatsApp, reuniões online ou presenciais. Nosso objetivo é que você se sinta confiante na escolha do melhor seguro para suas necessidades.'],
   ['Acompanhamento da contratação','Encontramos o seguro para você! Nosso time acompanha, junto aos parceiros, a avaliação da seguradora, pagamento e emissão da apólice. Assim que emitida, encaminhamos a apólice por e-mail e WhatsApp.'],
   ['Suporte quando precisar','Bateram no seu carro? Roubaram seu carro? Precisa de assistência e não sabe como solicitar? Conte com a WL para ajudar nessa hora também.'],
   ['Hora de renovar','Trabalhamos para que todo esse ciclo se repita por muitos anos. Ao entregar um trabalho de confiança, qualidade e excelência, esperamos recebê-lo novamente em todas as suas necessidades de contratação de seguro. Venha conhecer a WL Negócios & Seguros!']
  ]
 },
 'projeto-condominio-seguro': {
  title:'Projeto Condomínio Seguro',eyebrow:'UM PROJETO DA WL',image:'condominio',intro:'Seu condomínio merece esse cuidado.',
  lead:'Um projeto que vai além da cotação: assessoria para síndicos e corpo diretivo em todas as necessidades de seguros do condomínio.',
  sections:[
   ['Uma apólice que resolve','O Projeto Condomínio Seguro foi pensado para garantir que a apólice do seu condomínio seja a resolução para seus problemas. Envie sua apólice para a equipe da WL avaliar.'],
   ['Visita diagnóstica','Avaliação das características do condomínio e definição das coberturas e limites de indenização.'],
   ['Personalização','Personalização total do produto conforme a necessidade real do condomínio.'],
   ['Valores','Buscamos as melhores condições de mercado.'],
   ['Capacitação','Orientação ao corpo diretivo sobre as necessidades de cobertura do condomínio.'],
   ['Plantão de vendas','Seguro Residencial com condições especiais.'],
   ['Nunca é demais lembrar','O Seguro Condominial é obrigatório por lei. O síndico é responsável pela contratação e renovação do seguro. A página original da WL alerta que a ausência de contratação ou a contratação com coberturas insuficientes pode resultar em multas e comprometimento do patrimônio do responsável. Converse com a equipe para entender as regras aplicáveis ao seu condomínio.'],
   ['O que o seguro condominial protege?','O seguro é destinado ao prédio, áreas comuns, anexos, bens e equipamentos exclusivamente do condomínio e estrutura das unidades autônomas. O conteúdo das unidades autônomas não é coberto por esse seguro, e sim pelo Seguro Residencial.'],
   ['Conte conosco','Sabemos que o dia a dia de um condomínio envolve inúmeras questões mediadas pelo síndico. Nosso objetivo é trazer soluções para as necessidades de proteção e ser um parceiro na condução dos desafios diários.']
  ],originalLink:true
 },
 'parceiros-wl': {
  title:'Parceiros WL',eyebrow:'CONEXÕES QUE SOMAM',image:'condominio',intro:'Boas parcerias. Cuidado completo.',
  lead:'Buscamos empresas que contribuam com a missão de oferecer atendimento personalizado às necessidades da sua família e do seu negócio.',
  sections:[
   ['Soluções completas para nossos clientes','Com o objetivo de levar soluções completas para os nossos clientes, buscamos empresas que possam contribuir com a missão da WL: oferecer atendimento 100% personalizado baseado nas suas necessidades reais, da sua família e do seu negócio.'],
   ['Parcerias com confiança','Todas as empresas indicadas pela WL têm atuação consolidada no mercado, com resultados reconhecidos e histórico de idoneidade nas suas relações.'],
   ['Conheça nossos parceiros','Conheça as empresas parceiras e seus links no diretório da WL ou converse com nossa equipe.']
  ],originalLink:true
 }
};
// As três páginas abaixo foram recuperadas pela busca indexada após falha na abertura direta.
Object.assign(pages, {
 'seguro-de-vida': {
  title:'Seguro de Vida',eyebrow:'PROTEÇÃO PARA VOCÊ E SUA FAMÍLIA',image:'vida',intro:'Para viver o presente e cuidar do futuro.',
  lead:'O Seguro de Vida também pode oferecer apoio em vida. Conheça as coberturas e suas possibilidades.',
  sections:[
   ['Vamos falar sobre esse tabu?','É muito comum que as pessoas sejam resistentes quando o assunto é Seguro de Vida. Isso acontece porque, de forma geral, elas acreditam que ele só indeniza em caso de morte do segurado. Mas existem outras proteções e finalidades para a contratação de um Seguro de Vida.'],
   ['O que é o Seguro de Vida?','É um instrumento de proteção familiar e patrimonial e de planejamento financeiro. Oferece indenização aos beneficiários em caso de morte do segurado e também pode oferecer auxílio em caso de incapacidade funcional, diagnóstico de doença grave, perda de renda, entre outros.'],
   ['Personagens do Seguro de Vida','Segurado: pessoa física que contrata o plano ou adere a um plano coletivo. Beneficiário: pessoa física ou jurídica indicada pelo segurado para receber os valores de indenização contratados. Na ausência de indicação, a página original informa a consideração dos herdeiros legais. Estipulante: pessoa física ou jurídica que representa os demais segurados na contratação de um plano coletivo.'],
   ['Importância segurada','É o valor máximo de indenização que o segurado ou seus beneficiários poderão receber em caso de sinistro. Também é conhecida como capital segurado.'],
   ['Morte natural ou acidental','Pagamento do valor segurado aos beneficiários em caso de morte do segurado principal.'],
   ['Invalidez Funcional Permanente Total por Doença (IFPD)','Pagamento de indenização em caso de invalidez permanente total do segurado, consequente de doença.'],
   ['Invalidez Permanente Total ou Parcial por Acidente (IPA)','Garante ao próprio segurado o pagamento de indenização referente à perda, redução ou impotência funcional definitiva ocasionada por acidente.'],
   ['Despesas Médicas, Hospitalares e Odontológicas (DMHO)','Reembolso, limitado ao capital segurado, das despesas efetuadas pelo segurado para tratamento de acidente coberto.'],
   ['Acidentes pessoais','Garante aos beneficiários ou ao próprio segurado o pagamento de indenização caso venha a falecer ou se tornar inválido em decorrência de acidente.'],
   ['Doenças graves','Pagamento de indenização diante do diagnóstico de doença grave como câncer, AVC, infarto e esclerose múltipla, entre outras. Cada seguradora determina sua lista de doenças graves.'],
   ['Profissional autônomo?','Para quem trabalha por conta própria, ficar temporariamente incapacitado pode gerar problemas financeiros. Para evitar esse quadro, existe o seguro DIT.','<a class="text-link" href="../seguro-diaria-de-incapacidade-temporaria-dit/">Conheça o seguro DIT</a>'],
   ['Você sabia?','A página original destaca que o Seguro de Vida não é considerado herança e que o valor da indenização pode auxiliar os familiares com os custos do inventário. Consulte a equipe sobre as condições do produto e a aplicação ao seu planejamento.']
  ],originalLink:true
 },
 'seguro-condominial': {
  title:'Seguro Condominial',eyebrow:'PROTEÇÃO PARA O PATRIMÔNIO DE TODOS',image:'condominio',intro:'Mais tranquilidade na gestão do seu condomínio.',
  lead:'Conheça as coberturas e conte com uma assessoria próxima do síndico e do corpo diretivo.',
  sections:[
   ['Seguro obrigatório','A página da WL destaca que a cobertura básica é de contratação obrigatória pelo condomínio e informa o prazo de até 120 dias da concessão do Habite-se para o primeiro seguro. Acabou de assumir um condomínio ou participa da implantação de um novo? A WL pode apoiar nesse processo.'],
   ['Atenção, síndico','O síndico é responsável pela contratação e renovação. A página original alerta para multas e comprometimento do patrimônio na ausência de apólice ou com coberturas insuficientes. Conte com nossa equipe para entender as necessidades do condomínio.'],
   ['Projeto Condomínio Seguro','Uma assessoria lado a lado com o síndico e o corpo diretivo, ajudando nas decisões e na contratação dos produtos específicos para seu condomínio.','<a class="text-link" href="../projeto-condominio-seguro/">Conheça o Projeto Condomínio Seguro</a>'],
   ['O que o seguro protege?','O seguro é destinado ao prédio, áreas comuns, anexos, bens e equipamentos exclusivamente do condomínio e estrutura das unidades autônomas.'],
   ['Coberturas básicas','Conheça a comparação apresentada pela WL entre as modalidades Simples e Ampla.','<div class="coverage-table"><table><caption>Modalidades do Seguro Condominial</caption><thead><tr><th scope="col">Simples</th><th scope="col">Ampla</th></tr></thead><tbody><tr><td>Incêndio</td><td>Incêndio</td></tr><tr><td>Queda de raio dentro do terreno</td><td>Queda de raio dentro do terreno</td></tr><tr><td>Explosão por qualquer natureza</td><td>Explosão por qualquer natureza</td></tr><tr><td>Queda de aeronave</td><td>Queda de aeronave</td></tr><tr><td>Coberturas adicionais</td><td>Vendaval, impacto de veículos, danos elétricos, entre outros</td></tr><tr><td>O responsável determina uma verba para cada cobertura.</td><td>Verba única para todas as coberturas.</td></tr></tbody></table></div>'],
   ['Coberturas opcionais','A WL apresenta opções para danos ao patrimônio e danos a terceiros. Nos envie uma mensagem para entender do que se trata cada cobertura e conhecer os detalhes.']
  ],originalLink:true
 },
 'seguros-de-responsabilidade-civil': {
  title:'Responsabilidade Civil',eyebrow:'PROTEÇÃO PESSOAL E EMPRESARIAL',image:'casa',intro:'Cuidado com os outros. Proteção para você.',
  lead:'Conheça os seguros de Responsabilidade Civil, também chamados de RC.',
  sections:[
   ['Definição','Os seguros de RC têm como objetivo proteger o patrimônio da pessoa física ou jurídica condenada a pagar uma indenização a terceiros por danos que venha a causar.'],
   ['Quais danos são considerados?','Qualquer pessoa está sujeita a causar um dano a alguém, na profissão, no negócio ou na vida pessoal. Esses danos podem ser físicos, materiais, morais, entre outros.'],
   ['Ação judicial','A seguradora deve ser comunicada imediatamente no caso de ação judicial envolvendo danos a terceiros. O pagamento de possível indenização após decisão judicial ou acordo entre as partes deve ser realizado somente após anuência da seguradora.'],
   ['Valor da indenização','A seguradora fará o pagamento até o valor máximo contratado, sempre de acordo com as condições gerais contratuais.'],
   ['Danos intencionais são cobertos?','Não. Somente são cobertos atos não intencionais ou involuntários.'],
   ['RC Profissional','Proteção para profissionais e empresas no exercício de suas atividades.','<a class="text-link" href="../rc-profissional/">Conheça o RC Profissional</a>'],
   ['RC Facultativa de veículos','Conheça a cobertura de responsabilidade civil facultativa apresentada no Seguro Auto.','<a class="text-link" href="../seguro-auto/#secao-5">Ver cobertura no Seguro Auto</a>'],
   ['RC Civil Geral','Proteção de empresas, de maneira geral. Cobertura comumente presente no Seguro Empresarial.'],
   ['RC Empregador','Proteção de empresas em ações judiciais provenientes de acidentes de trabalho. Também é encontrada no Seguro Empresarial.'],
   ['RC Riscos Cibernéticos','Proteção para empresas em indenizações judiciais provenientes de ataques hackers e vulnerabilidades de sistemas, conforme o produto contratado.'],
   ['RC Obras','A WL também apresenta a modalidade RC Obras. Fale com a nossa equipe para conhecer os detalhes.'],
   ['Proteção necessária','Com a crescente judicialização de pedidos de indenização por danos materiais, corporais e morais, o RC é apresentado pela WL como uma proteção para a tranquilidade e segurança financeira profissional e empresarial. Também pode proteger pessoas físicas diante de incidentes do dia a dia, como a cobertura de RC familiar do Seguro Residencial.','<a class="text-link" href="../seguro-residencial/#secao-7">Conheça o RC no Seguro Residencial</a>']
  ],originalLink:true
 },
 'seguro-diaria-de-incapacidade-temporaria-dit': {
  title:'Diária de Incapacidade Temporária',eyebrow:'PROTEÇÃO PARA SUA RENDA',image:'auto',intro:'Se precisar parar, tenha com quem contar.',
  lead:'Conheça o seguro DIT e a proteção para o período em que você não pode trabalhar.',
  sections:[
   ['João, motorista de aplicativo','Na situação apresentada pela WL, João saiu para trabalhar como todos os dias, mas teve o carro atingido por um motorista que cruzou o farol vermelho. Foi socorrido e levado ao hospital, onde soube que havia fraturado a perna direita e precisaria de cirurgia.'],
   ['Depois de cinco dias','João recebeu alta do hospital. Em uma consulta posterior, foi informado de que o tempo médio de recuperação seria de quatro meses. Como sustentar a família, pagar as contas e manter o carro financiado nesse período?'],
   ['Quatro meses sem trabalhar?','Para quem trabalha por conta própria, ficar temporariamente incapacitado pode gerar problemas financeiros. Para evitar esse quadro, existe o seguro DIT. A incapacidade temporária de trabalhar pode ser causada por doença ou acidente.'],
   ['Como funciona?','Nesses dois casos, o segurado recebe o pagamento de diárias que ajudam a se manter financeiramente até estar apto a voltar ao trabalho, conforme as condições contratadas.'],
   ['Qual valor contratar?','O valor das diárias depende do seguro contratado. É importante escolher uma cobertura cujo valor das indenizações possa custear o período em que o segurado ficará sem exercer o trabalho.'],
   ['Quer saber mais?','Faça contato com a nossa equipe e solicite uma cotação para conhecer as possibilidades do seguro DIT.']
  ],originalLink:true
 }
});
