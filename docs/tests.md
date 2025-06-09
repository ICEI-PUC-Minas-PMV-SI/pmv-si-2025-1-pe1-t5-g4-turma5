<span style="color:red">
  Pré-requisitos: 
  <a href="especification.md">Especificação do Projeto</a>, 
  <a href="interface.md">Projeto de Interface</a>
</span>

Os requisitos para realização dos testes de software são:
<ul>
  <li>Site publicado na internet;</li>
  <li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-01: Verificar cadastro de pedidos de transporte</td>
    <td>
      <ul>
        <li>RF-01: O sistema deve permitir que os clientes cadastrem pedidos de transporte com detalhes como peso, volume, origem e destino.</li>
      </ul>
    </td>
    <td>Garantir que o cliente pode cadastrar pedidos de transporte corretamente.</td>
    <td>
      <ol>
        <li>Acessar o navegador.</li>
        <li>Informar o endereço do site.</li>
        <li>Realizar login como cliente.</li>
        <li>Acessar a página de cadastro de pedidos.</li>
        <li>Inserir os detalhes do pedido de transporte.</li>
        <li>Clicar em "Cadastrar".</li>
      </ol>
    </td>
    <td>O pedido de transporte deve ser registrado e exibido na lista de pedidos disponíveis.</td>
    <td>Silvia</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-02: Verificar lista de fretes disponíveis para motoristas</td>
    <td>
      <ul>
        <li>RF-02: O sistema deve listar os fretes disponíveis para os motoristas, incluindo preço sugerido e informações de carga.</li>
      </ul>
    </td>
    <td>Garantir que os motoristas podem visualizar a lista de fretes disponíveis.</td>
    <td>
      <ol>
        <li>Acessar o navegador.</li>
        <li>Informar o endereço do site.</li>
        <li>Realizar login como motorista.</li>
        <li>Acessar a página de lista de fretes.</li>
      </ol>
    </td>
    <td>A lista de fretes deve ser exibida com informações detalhadas.</td>
    <td>Rodrigo</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-03: Verificar sistema de avaliação</td>
    <td>
      <ul>
        <li>RF-04: O sistema deve ter um sistema de avaliação e feedback para clientes e motoristas.</li>
      </ul>
    </td>
    <td>Garantir que clientes e motoristas podem avaliar o serviço com feedback.</td>
    <td>
      <ol>
        <li>Acessar o navegador.</li>
        <li>Informar o endereço do site.</li>
        <li>Realizar login como cliente ou motorista.</li>
        <li>Acessar a página de avaliação.</li>
        <li>Inserir feedback e clicar em "Enviar".</li>
      </ol>
    </td>
    <td>O feedback deve ser registrado e exibido no histórico de avaliações.</td>
    <td>Carlos</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-04: Verificar sistema de login</td>
    <td>
      <ul>
        <li>RF-05: O sistema deve permitir login e gerenciamento de perfil para clientes e motoristas.</li>
      </ul>
    </td>
    <td>Garantir que o login está funcionando corretamente.</td>
    <td>
      <ol>
        <li>Acessar o navegador.</li>
        <li>Informar o endereço do site.</li>
        <li>Visualizar a página de login.</li>
        <li>Inserir as credenciais e clicar em "Entrar".</li>
      </ol>
    </td>
    <td>O usuário deve ser autenticado e redirecionado para a sua página de perfil.</td>
    <td>Maria</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-05: Verificar responsividade do sistema</td>
    <td>
      <ul>
        <li>RNF-01: O sistema deve ser responsivo para uso em dispositivos móveis e desktop.</li>
      </ul>
    </td>
    <td>Garantir que o sistema funciona corretamente em diferentes dispositivos.</td>
    <td>
      <ol>
        <li>Acessar o navegador em dispositivos móveis e desktop.</li>
        <li>Informar o endereço do site.</li>
        <li>Realizar interações com diferentes páginas.</li>
      </ol>
    </td>
    <td>O sistema deve ajustar a interface conforme o dispositivo utilizado.</td>
    <td>Beatriz</td>
  </tr>
</table>