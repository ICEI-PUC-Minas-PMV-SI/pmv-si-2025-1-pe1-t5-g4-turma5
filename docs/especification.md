# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.


## Personas

**Persona 1: Cliente (Usuário que precisa do frete).**
**Nome:** Carlos Ferreira
**Idade:** 35 anos
**Profissão:** Pequeno empreendedor de e-commerce
**Necessidades:** Transportar mercadorias de forma confiável e acessível.
**Desafios:** Dificuldade em encontrar transportadoras confiáveis e comparar preços de fretes.
**Objetivo:** Encontrar um serviço de transporte seguro, rápido e com bom custo-benefício.


**Persona 2: Motorista Autônomo**
**Nome:** Rodrigo Lima
**Idade:** 40 anos
**Profissão:** Motorista de carga leve
**Necessidades:** Captar mais clientes para serviços de frete.
**Desafios:** Encontrar oportunidades de transporte de forma eficiente.
**Objetivo:** Aumentar a quantidade de serviços prestados e consequentemente sua renda mensal.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO...| QUERO/PRECISO...  |PARA ...                  |
|--------------------|------------------------------------|----------------------------------------|
|Cliente  | Cadastrar um pedido de transporte           | Motoristas possam visualizar e aceitar minha demanda.               |
|Motorista       | Visualizar uma lista de fretes disponíveis                 | Eu possa escolher o mais adequado para minha localização e capacidade do veículo. |
|Cliente/Motorista       | Avaliar a experiência do serviço                | Outros usuários possam tomar decisões informadas |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-01| O sistema deve permitir que os clientes cadastrem pedidos de transporte com detalhes como peso, volume, origem e destino. | ALTA |  
|RF-02| O sistema deve listar os fretes disponíveis para os motoristas, incluindo preço sugerido e informações da carga.  | ALTA | 
|RF-03| O sistema deve permitir que os motoristas aceitem um frete e entrem em contato com o cliente.  | ALTA | 
|RF-04| O sistema deve ter um sistema de avaliação e feedback para clientes e motoristas.  | MÉDIA |
|RF-05| O sistema deve permitir login e gerenciamento de perfil para clientes e motoristas.  | ALTA |
|RF-06| O sistema deve ter um sistema de notificação para alertar clientes e motoristas sobre atualizações em seus fretes.  | BAIXA |
|RF-07| Em aberto.  | MÉDIA |
|RF-08| Em aberto.  | MÉDIA |
|RF-09| Em aberto.  | MÉDIA |
|RF-10| Em aberto.  | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema deve ser responsivo para uso em dispositivos móveis e desktop. | ALTA |  
|RNF-02| O tempo de resposta do sistema deve ser inferior a 3 segundos por ação.  | MÉDIA | 
|RNF-03| O sistema deve garantir a segurança dos dados dos usuários com criptografia e autenticação segura.  | ALTA | 
|RNF-04| A interface do usuário deve ser intuitiva e de fácil navegação.  | MÉDIA |
|RNF-05| O sistema deve suportar um grande número de usuários simultaneamente sem perda de desempenho.  | ALTA |
|RNF-06| Em aberto.  | MÉDIA |
|RNF-07| Em aberto.  | MÉDIA |
|RNF-08| Em aberto.  | MÉDIA |
|RNF-09| Em aberto.  | MÉDIA |
|RNF-10| Em aberto.  | MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
