// Função para navegar para a tela de login
function navigateToLogin() {
    const initialScreen = document.getElementById('initial-screen');
    if (initialScreen) {
        initialScreen.style.display = 'none';
    }
    
    // Remove qualquer tela de login existente
    const existingLogin = document.getElementById('login-screen');
    if (existingLogin) {
        existingLogin.remove();
    }
    
    const loginScreen = document.createElement('div');
    loginScreen.id = 'login-screen';
    loginScreen.innerHTML = `
        <div class="container">
            <h2>Login</h2>
            <form id="login-form" onsubmit="handleLogin(event)">
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Senha" required>
                <button type="submit">Entrar</button>
            </form>
            <p style="margin-top: 1rem;">
                Não possui cadastro? 
                <a href="#" onclick="navigateToRegistrationChoice()">Cadastrar</a>
            </p>
        </div>
    `;
    document.body.appendChild(loginScreen);
}

// Função para lidar com o login
function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;
    
    console.log('Tentando login com:', { email, password });
    
    // Verifica se é um motorista
    const driverData = JSON.parse(localStorage.getItem('driverData') || 'null');
    console.log('Dados do motorista em localStorage:', driverData);
      // Verifica se é um cliente
    const clientData = JSON.parse(localStorage.getItem('clientData') || 'null');
    console.log('Dados do cliente em localStorage:', clientData);
      if (driverData && driverData.email === email && driverData.password === password) {
        // É um motorista - copia os dados de registro para a sessão atual
        console.log('Login de motorista bem-sucedido');
        const sessionData = {...driverData}; // Cria uma cópia dos dados de registro
        localStorage.setItem('currentDriver', JSON.stringify(sessionData));
        window.location.href = 'driver-area.html';
    } else if (clientData && clientData.email === email && clientData.password === password) {
        // É um cliente
        console.log('Login de cliente bem-sucedido');
        localStorage.setItem('userEmail', email);
        window.location.href = 'client-area.html';
    } else {
        console.log('Login falhou - credenciais não correspondem');
        alert('Email ou senha incorretos. Por favor, verifique suas credenciais.');
    }
}

// Função para navegar para a escolha de tipo de cadastro
function navigateToRegistrationChoice() {
    const loginScreen = document.getElementById('login-screen');
    if (loginScreen) {
        loginScreen.remove();
    }
    
    const registrationChoice = document.createElement('div');
    registrationChoice.id = 'registration-choice';
    registrationChoice.innerHTML = `
        <div class="container">
            <h2>Escolha seu tipo de cadastro</h2>
            <div class="registration-options">
                <button onclick="navigateToClientRegistration()">Cliente</button>
                <button onclick="navigateToDriverRegistration()">Motorista</button>
            </div>
        </div>
    `;
    document.body.appendChild(registrationChoice);
}

// Função para navegar para o cadastro de cliente
function navigateToClientRegistration() {
    const registrationChoice = document.getElementById('registration-choice');
    if (registrationChoice) {
        registrationChoice.remove();
    }
    
    const clientRegistration = document.createElement('div');
    clientRegistration.id = 'client-registration';
    clientRegistration.innerHTML = `
        <div class="container">
            <h2>Cadastro de Cliente</h2>
            <form id="client-form" onsubmit="handleClientRegistration(event)">
                <input type="text" name="name" placeholder="Nome completo" required>
                <input type="password" name="password" placeholder="Senha" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="tel" name="phone" placeholder="Celular" required>
                <input type="text" name="cep" placeholder="CEP" required onblur="fetchAddressFromCEP(this.value, 'client-form')">
                <input type="text" name="street" placeholder="Rua" required>
                <input type="text" name="neighborhood" placeholder="Bairro" required>
                <input type="text" name="city" placeholder="Cidade" required>
                <input type="text" name="state" placeholder="Estado" required>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    `;
    document.body.appendChild(clientRegistration);
}

// Função para buscar endereço pelo CEP usando a API ViaCEP
async function fetchAddressFromCEP(cep, formId) {
    if (cep && cep.replace(/\D/g, '').length === 8) { // Remove não dígitos e verifica se o CEP tem 8 dígitos
        const cleanCep = cep.replace(/\D/g, '');
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
            if (!response.ok) {
                throw new Error('CEP não encontrado');
            }
            const data = await response.json();
            if (data.erro) {
                alert('CEP não encontrado. Verifique o CEP digitado.');
                return;
            }

            // Preenche os campos do formulário especificado
            const form = document.getElementById(formId);
            if (form) {
                form.querySelector('input[name="street"]').value = data.logradouro || '';
                form.querySelector('input[name="neighborhood"]').value = data.bairro || '';
                form.querySelector('input[name="city"]').value = data.localidade || '';
                form.querySelector('input[name="state"]').value = data.uf || '';
            }
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            alert('Erro ao buscar CEP. Tente novamente.');
        }
    }
}

// Função para navegar para o cadastro de motorista
function navigateToDriverRegistration() {
    const registrationChoice = document.getElementById('registration-choice');
    if (registrationChoice) {
        registrationChoice.remove();
    }
    
    const driverRegistration = document.createElement('div');
    driverRegistration.id = 'driver-registration';
    driverRegistration.innerHTML = `
        <div class="container">
            <h2>Cadastro de Motorista</h2>
            <form id="driver-form" onsubmit="handleDriverRegistration(event)">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Nome completo" pattern="[A-Za-zÀ-ÿ ]{3,}" title="Digite seu nome completo (mínimo 3 caracteres)" required>
                </div>
                <div class="form-group">
                    <input type="password" name="password" placeholder="Senha" pattern=".{6,}" title="A senha deve ter no mínimo 6 caracteres" required>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <input type="tel" name="phone" placeholder="Celular" pattern="[0-9]{11}" title="Digite seu número com DDD (11 dígitos)" required>
                </div>
                <div class="form-group">
                    <input type="text" name="cep" placeholder="CEP" required onblur="fetchAddressFromCEP(this.value, 'driver-form')">
                </div>
                <div class="form-group">
                    <input type="text" name="street" placeholder="Rua" required>
                </div>
                <div class="form-group">
                    <input type="text" name="neighborhood" placeholder="Bairro" required>
                </div>
                <div class="form-group">
                    <input type="text" name="city" placeholder="Cidade" required>
                </div>
                <div class="form-group">
                    <input type="text" name="state" placeholder="Estado" required>
                </div>
                <div class="form-group">
                    <input type="text" name="vehicleModel" placeholder="Modelo do veículo" required>
                </div>
                <div class="form-group">
                    <input type="text" name="licensePlate" placeholder="Número da placa" pattern="[A-Z0-9]{7}" title="Digite a placa no formato MERCOSUL (Ex: ABC1D23)" required>
                </div>
                <div class="form-group">
                    <input type="number" name="vehicleYear" placeholder="Ano do veículo" min="1990" max="2025" required>
                </div>
                <div class="form-group">
                    <label>Documentos do veículo:</label>
                    <input type="file" name="vehicleDocs" accept=".pdf,.jpg,.jpeg,.png" onchange="previewFile(this, 'vehicleDocsPreview')" required>
                    <div id="vehicleDocsPreview" class="file-preview"></div>
                </div>
                <div class="form-group">
                    <label>CNH:</label>
                    <input type="file" name="driverLicense" accept=".pdf,.jpg,.jpeg,.png" onchange="previewFile(this, 'driverLicensePreview')" required>
                    <div id="driverLicensePreview" class="file-preview"></div>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    `;
    document.body.appendChild(driverRegistration);
}

// Função para pré-visualizar arquivos
function previewFile(input, previewId) {
    const preview = document.getElementById(previewId);
    const file = input.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            if (file.type.startsWith('image/')) {
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; margin-top: 10px;">`;
            } else {
                preview.innerHTML = `<p style="margin-top: 10px;">Arquivo selecionado: ${file.name}</p>`;
            }
        }
        
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '';
    }
}

// Função para lidar com o registro do cliente
function handleClientRegistration(event) {
    event.preventDefault();
    const form = event.target;
    
    // Pega os valores diretamente dos campos do formulário
    const clientData = {
        name: form.querySelector('input[name="name"]').value,
        email: form.querySelector('input[name="email"]').value,
        password: form.querySelector('input[name="password"]').value,
        phone: form.querySelector('input[name="phone"]').value,
        cep: form.querySelector('input[name="cep"]').value,
        street: form.querySelector('input[name="street"]').value,
        neighborhood: form.querySelector('input[name="neighborhood"]').value,
        city: form.querySelector('input[name="city"]').value,
        state: form.querySelector('input[name="state"]').value
    };
    
    // Salva os dados do cliente no localStorage
    localStorage.setItem('clientData', JSON.stringify(clientData));
    localStorage.setItem('userEmail', clientData.email);
    
    // Redireciona para a área do cliente
    window.location.href = 'client-area.html';
}

// Função para lidar com o registro do motorista
function handleDriverRegistration(event) {
    event.preventDefault();
    
    try {
        console.log('Iniciando registro de motorista...');
        const form = event.target;
        
        // Primeiro, limpa quaisquer dados antigos
        localStorage.removeItem('currentDriver');
        localStorage.removeItem('driverData');
        
        // Pega os valores diretamente dos campos do formulário
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;
        const phone = form.querySelector('input[name="phone"]').value;
        const cep = form.querySelector('input[name="cep"]').value;
        const street = form.querySelector('input[name="street"]').value;
        const neighborhood = form.querySelector('input[name="neighborhood"]').value;
        const city = form.querySelector('input[name="city"]').value;
        const state = form.querySelector('input[name="state"]').value;
        const vehicleModel = form.querySelector('input[name="vehicleModel"]').value;
        const licensePlate = form.querySelector('input[name="licensePlate"]').value;
        const vehicleYear = form.querySelector('input[name="vehicleYear"]').value;
        
        // Para arquivos, apenas salva o nome do arquivo
        const vehicleDocsInput = form.querySelector('input[name="vehicleDocs"]');
        const driverLicenseInput = form.querySelector('input[name="driverLicense"]');
        
        const vehicleDocsName = vehicleDocsInput.files[0]?.name || '';
        const driverLicenseName = driverLicenseInput.files[0]?.name || '';

        // Cria objeto com os dados do motorista
        const driverData = {
            name,
            email,
            password,
            phone,
            cep,
            street,
            neighborhood,
            city,
            state,
            vehicleModel,
            licensePlate,
            vehicleYear,
            vehicleDocsName,
            driverLicenseName
        };
        
        console.log('Dados do motorista para salvar:', driverData);
        
        // Limpa quaisquer dados anteriores
        localStorage.removeItem('currentDriver');
        localStorage.removeItem('driverData');
          // Salva os novos dados e verifica se foram salvos corretamente
        localStorage.setItem('driverData', JSON.stringify(driverData));
        localStorage.setItem('currentDriver', JSON.stringify(driverData));
        
        console.log('Dados salvos no localStorage, verificando...');
        
        // Verifica se os dados foram salvos corretamente
        const savedData = JSON.parse(localStorage.getItem('driverData'));
        const savedCurrentDriver = JSON.parse(localStorage.getItem('currentDriver'));
        console.log('Dados salvos:', { savedData, savedCurrentDriver });
        
        if (!savedData || !savedData.password || !savedCurrentDriver || !savedCurrentDriver.password) {
            throw new Error('Falha ao salvar os dados do motorista');
        }
        
        console.log('Dados salvos com sucesso:', savedData);
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'driver-area.html';
        
    } catch (error) {
        console.error('Erro ao processar registro:', error);
        alert('Erro ao processar o cadastro. Por favor, tente novamente.');
    }
}
