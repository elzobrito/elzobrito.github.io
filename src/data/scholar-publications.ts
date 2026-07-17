export interface ScholarPublication {
  title: string;
  url: string;
  authors: string;
  venue: string;
  citations: number;
  year: string;
}

const scholar = 'https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=hSP8J9EAAAAJ&citation_for_view=';

export const scholarProfile = 'https://scholar.google.com/citations?user=hSP8J9EAAAAJ&hl=pt-BR';

export const scholarPublications: ScholarPublication[] = [
  { title: 'Inteligência artificial na educação', url: `${scholar}hSP8J9EAAAAJ:8k81kl-MbHgC`, authors: 'S Santos, CD Guimarães, EB dos Santos Filho, LF Gomes, LP de Castilho, ...', venue: 'Revista Contemporânea 4 (1), 1850–1870', citations: 32, year: '2024' },
  { title: 'Combating school dropout with Artificial Intelligence in Brazilian higher education', url: `${scholar}hSP8J9EAAAAJ:Se3iqnhoufwC`, authors: 'MBN Meroto, AS Franqueira, CLC de Queiróz, EB dos Santos Filho, ...', venue: 'Contribuciones a las ciencias sociales 17 (2), e5182', citations: 8, year: '2024' },
  { title: 'Integração da inteligência artificial na educação a distância: desafios e potenciais', url: `${scholar}hSP8J9EAAAAJ:hqOjcs7Dif8C`, authors: 'GB de Sá, AL Pereira, ACP Pinto, EB dos Santos Filho, JKV Oliveira', venue: 'RCMOS — Revista Científica Multidisciplinar O Saber 1 (1)', citations: 6, year: '2024' },
  { title: 'Ciclo PDCA aplicado à educação: uma revisão de literatura', url: `${scholar}hSP8J9EAAAAJ:u-x6o8ySG0sC`, authors: 'SMAV Santos, CS de Araujo, CE do Nascimento, EB dos Santos Filho, ...', venue: 'Revista Amor Mundi 4 (4), 15–21', citations: 6, year: '2023' },
  { title: 'Design Thinking e metodologias ativas na educação do século XXI', url: `${scholar}hSP8J9EAAAAJ:LkGwnXOMwfcC`, authors: 'EB dos Santos Filho, EG Lira, F Gonçalves, LCB Santos, S da Silva', venue: 'Revista Ilustração 5 (1), 217–223', citations: 4, year: '2024' },
  { title: 'ESAA: Event sourcing for autonomous agents in LLM-based software engineering', url: `${scholar}hSP8J9EAAAAJ:3fE2CSJIrl8C`, authors: 'EB dos Santos Filho', venue: 'arXiv preprint arXiv:2602.23193', citations: 3, year: '2026' },
  { title: 'As contribuições das Tecnologias Digitais da Informação e Comunicação (TDICs) para a psicopedagogia no processo de ensino-aprendizagem', url: `${scholar}hSP8J9EAAAAJ:Y0pCki6q_DkC`, authors: 'SMAV Santos, EB dos Santos Filho, FF Rodrigues, JM Medeiros, ...', venue: 'Revista Foco 16 (11), e3777', citations: 3, year: '2023' },
  { title: 'Liderança e estratégias na era digital: um novo cenário', url: `${scholar}hSP8J9EAAAAJ:YsMSGLbcyi4C`, authors: 'CS de Araujo, CE do Nascimento, EB dos Santos Filho, ...', venue: 'Revista Amor Mundi 4 (11), 53–58', citations: 2, year: '2023' },
  { title: 'ESAA-Security: An Event-Sourced, Verifiable Architecture for Agent-Assisted Security Audits of AI-Generated Code', url: `${scholar}hSP8J9EAAAAJ:KlAtU1dfN6UC`, authors: 'EB dos Santos Filho', venue: 'arXiv preprint arXiv:2603.06365', citations: 1, year: '2026' },
  { title: 'PARCER as an Operational Contract to Reduce Variance, Cost, and Risk in LLM Systems', url: `${scholar}hSP8J9EAAAAJ:kNdYIx-mwKoC`, authors: 'EB dos Santos Filho', venue: 'arXiv preprint arXiv:2603.00856', citations: 1, year: '2026' },
  { title: 'ESAA: Event Sourcing for Autonomous Agents in LLM-Based Software Engineering', url: `${scholar}hSP8J9EAAAAJ:ULOm3_A8WrAC`, authors: 'E Brito dos Santos Filho', venue: 'arXiv e-prints, arXiv:2602.23193', citations: 1, year: '2026' },
  { title: 'As implicações da inteligência artificial dentro da educação online', url: `${scholar}hSP8J9EAAAAJ:roLk4NBRz8UC`, authors: 'F Gonçalves, EG Lira, EB dos Santos Filho, LCB Santos, S da Silva', venue: 'Revista Amor Mundi 5 (2), 99–105', citations: 1, year: '2024' },
  { title: 'ESAA-Conversational: An Event-Sourced Memory Layer for Continuity, Handoff, and Curation Across Heterogeneous LLM Coding Agents', url: `${scholar}hSP8J9EAAAAJ:4TOpqqG69KYC`, authors: 'EB dos Santos Filho', venue: 'arXiv preprint arXiv:2606.23752', citations: 0, year: '2026' },
  { title: 'ESAA-Security: An Event-Sourced, Verifiable Architecture for Agent-Assisted Security Audits of AI-Generated Code', url: `${scholar}hSP8J9EAAAAJ:_kc_bZDykSQC`, authors: 'E Brito dos Santos Filho', venue: 'arXiv e-prints, arXiv:2603.06365', citations: 0, year: '2026' },
  { title: 'PARCER as an Operational Contract to Reduce Variance, Cost, and Risk in LLM Systems', url: `${scholar}hSP8J9EAAAAJ:YOwf2qJgpHMC`, authors: 'E Brito dos Santos Filho', venue: 'arXiv e-prints, arXiv:2603.00856', citations: 0, year: '2026' },
  { title: 'Engenharia de prompt: “Prompts que Funcionam: Maximizando a Inteligência Artificial com Engenharia de Prompt”', url: `${scholar}hSP8J9EAAAAJ:WF5omc3nYNoC`, authors: 'EB dos Santos Filho', venue: 'Amazon, 1, 50', citations: 0, year: '2024' },
  { title: 'Tecnologia ao toque: desvendando o impacto dos smartphones e tablets na revolução do aprendizado contemporâneo', url: `${scholar}hSP8J9EAAAAJ:_FxGoFyzp5QC`, authors: 'A Caetano, S Moreira, CD Guimarães, EC de Paula, EB dos Santos Filho, ...', venue: 'Revista Foco 17 (1), e4117', citations: 0, year: '2024' },
  { title: 'Tecnologia ao toque: desvendando o impacto dos smartphones e tablets na revolução do aprendizado contemporâneo', url: `${scholar}hSP8J9EAAAAJ:UebtZRa9Y70C`, authors: 'AC Silva Moreira, C Diniz Guimarães, E Cassiano de Paula, ...', venue: 'Revista Foco (Interdisciplinary Studies Journal) 17 (1)', citations: 0, year: '2024' },
  { title: 'O designer instrucional no contexto da aprendizagem autodirigida: experiência de aprendizagem autodirigida', url: `${scholar}hSP8J9EAAAAJ:eQOLeE2rZwMC`, authors: 'S da Silva, EG Lira, EB dos Santos Filho, F Gonçalves, LCB Santos', venue: 'Revista Amor Mundi 4 (10), 61–68', citations: 0, year: '2023' },
  { title: 'As contribuições das Tecnologias Digitais da Informação e Comunicação (TDICs) para a psicopedagogia no processo de ensino-aprendizagem', url: `${scholar}hSP8J9EAAAAJ:W7OEmFMy1HYC`, authors: 'SM Aparecida Viana Santos, EB dos Santos Filho, F Feitosa Rodrigues, ...', venue: 'Revista Foco (Interdisciplinary Studies Journal) 16 (11)', citations: 0, year: '2023' },
  { title: 'A escola contemporânea: desafios e oportunidades na educação do século XXI', url: `${scholar}hSP8J9EAAAAJ:Tyk-4Ss8FVUC`, authors: 'SM Aparecida Viana Santos, R Narciso, AB Fernandes, ...', venue: 'Revista Foco (Interdisciplinary Studies Journal) 16 (10)', citations: 0, year: '2023' },
  { title: 'Novas tecnologias e diversidade: desafios para a gestão escolar', url: `${scholar}hSP8J9EAAAAJ:IjCSPb-OGe4C`, authors: 'LCB Santos, EG Lira, EB dos Santos Filho, F Gonçalves, S da Silva', venue: 'Revista Ilustração 4 (6), 135–149', citations: 0, year: '2023' },
  { title: 'Uso das ferramentas do programa Google for Education aliadas ao ensino e aprendizagem escolar', url: `${scholar}hSP8J9EAAAAJ:zYLM7Y9cAGgC`, authors: 'CS de Araujo, CE do Nascimento, EB dos Santos Filho, ...', venue: 'Revista Ilustração 4 (5), 91–99', citations: 0, year: '2023' },
  { title: 'Integração, taxonomia e implementação tecnológica: quando e como essas práticas se conectam', url: `${scholar}hSP8J9EAAAAJ:UeHWp8X0CEIC`, authors: 'LC da SO Timoteo, CS de Araujo, CE do Nascimento, ...', venue: 'Revista Amor Mundi 4 (7), 95–103', citations: 0, year: '2023' },
  { title: 'A geração screenagers e os desafios para a educação: reflexões sobre a era digital nas instituições escolares', url: `${scholar}hSP8J9EAAAAJ:2osOgNQ5qMEC`, authors: 'EG Lira, EB dos Santos Filho, F Gonçalves, LCB Santos, S da Silva', venue: 'Revista Amor Mundi 4 (6), 125–133', citations: 0, year: '2023' },
  { title: 'Inteligência artificial: suas vantagens e limites', url: `${scholar}hSP8J9EAAAAJ:0EnyYjriUFMC`, authors: 'LMP Elzo Brito dos Santos Filho, Silvana Sousa Jacó, Erika Martins Beleza, ...', venue: '10.5281/zenodo.10096180 27 (128)', citations: 0, year: '2023' },
  { title: 'A era da inteligência artificial', url: `${scholar}hSP8J9EAAAAJ:d1gkVwhDpl0C`, authors: 'EB dos Santos Filho', venue: 'Amazon', citations: 0, year: '2023' },
  { title: 'Geração de screenagers e educação: possibilidades, impactos e desafios', url: `${scholar}hSP8J9EAAAAJ:5nxA0vEk-isC`, authors: 'RMO Elzo Brito dos Santos Filho, Luiz Marcelo Passos, José Ricardo de, ...', venue: 'Integração de tecnologias na educação 1 (1), 157', citations: 0, year: '2023' },
  { title: 'Algoritmos bioinspirados na otimização de parâmetros em gestão de estoques', url: `${scholar}hSP8J9EAAAAJ:u5HHmVD_uO8C`, authors: 'AC da Silva, BF Moreira, EB dos Santos Filho, SA de Araújo', venue: 'Registro no Google Acadêmico', citations: 0, year: '' }
];
