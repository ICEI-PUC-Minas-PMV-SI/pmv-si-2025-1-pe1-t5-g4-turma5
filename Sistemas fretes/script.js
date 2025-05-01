// Função para navegar para a tela de login
// Remove a tela inicial e cria dinamicamente a tela de login
function navigateToLogin() {
    // Oculta a tela inicial
    document.getElementById('initial-screen').style.display = 'none';
    
    // Cria o elemento div para a tela de login
    const loginScreen = document.createElement('div');
    loginScreen.id = 'login-screen';
    
    // Define o conteúdo HTML da tela de login usando template string
    loginScreen.innerHTML = `
        <div class="container">
            <h2>Login</h2>
            <!-- Formulário de login com campos de email e senha -->
            <form id="login-form">
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Senha" required>
                <button type="submit">Entrar</button>
            </form>
            <!-- Link para navegação até a tela de escolha de cadastro -->
            <p style="margin-top: 1rem;">
                Não possui cadastro? 
                <a href="#" onclick="navigateToRegistrationChoice()">Cadastrar</a>
            </p>
        </div>
    `;
    // Adiciona a tela de login ao corpo do documento
    document.body.appendChild(loginScreen);
}

// Função para navegar para a escolha de tipo de cadastro
// Remove a tela de login e cria a tela de escolha de tipo de cadastro
function navigateToRegistrationChoice() {
    // Remove a tela de login
    document.getElementById('login-screen').remove();
    
    // Cria o elemento div para a tela de escolha de cadastro
    const registrationChoice = document.createElement('div');
    registrationChoice.id = 'registration-choice';
    
    // Define o conteúdo HTML da tela de escolha usando template string
    registrationChoice.innerHTML = `
        <div class="container">
            <h2>Escolha seu tipo de cadastro</h2>
            <!-- Botões para escolha entre cadastro de cliente ou motorista -->
            <div class="registration-options">
                <button onclick="navigateToClientRegistration()">Cliente</button>
                <button onclick="navigateToDriverRegistration()">Motorista</button>
            </div>
        </div>
    `;
    // Adiciona a tela de escolha ao corpo do documento
    document.body.appendChild(registrationChoice);
}

// Função para navegar para o cadastro de cliente
// Remove a tela de escolha e cria o formulário de cadastro de cliente
function navigateToClientRegistration() {
    // Remove a tela de escolha de cadastro
    document.getElementById('registration-choice').remove();
    
    // Cria o elemento div para o formulário de cadastro de cliente
    const clientRegistration = document.createElement('div');
    clientRegistration.id = 'client-registration';
    
    // Define o conteúdo HTML do formulário de cliente usando template string
    clientRegistration.innerHTML = `
        <div class="container">
            <h2>Cadastro de Cliente</h2>
            <!-- Formulário com campos específicos para cliente -->
            <form id="client-form">
                <input type="text" placeholder="Nome completo" required>
                <input type="password" placeholder="Senha" required>
                <input type="email" placeholder="Email" required>
                <input type="tel" placeholder="Celular" required>
                <input type="text" placeholder="CEP" required>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    `;
    // Adiciona o formulário de cliente ao corpo do documento
    document.body.appendChild(clientRegistration);
}

// Função para navegar para o cadastro de motorista
// Remove a tela de escolha e cria o formulário de cadastro de motorista
function navigateToDriverRegistration() {
    // Remove a tela de escolha de cadastro
    document.getElementById('registration-choice').remove();
    
    // Cria o elemento div para o formulário de cadastro de motorista
    const driverRegistration = document.createElement('div');
    driverRegistration.id = 'driver-registration';
    
    // Define o conteúdo HTML do formulário de motorista usando template string
    driverRegistration.innerHTML = `
        <div class="container">
            <h2>Cadastro de Motorista</h2>
            <!-- Formulário com campos específicos para motorista -->
            <form id="driver-form">
                <input type="text" placeholder="Nome completo" required>
                <input type="password" placeholder="Senha" required>
                <input type="email" placeholder="Email" required>
                <input type="tel" placeholder="Celular" required>
                <input type="text" placeholder="Modelo do veículo" required>
                <input type="text" placeholder="Número da placa" required>
                <input type="number" placeholder="Ano do veículo" required>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    `;
    // Adiciona o formulário de motorista ao corpo do documento
    document.body.appendChild(driverRegistration);
}