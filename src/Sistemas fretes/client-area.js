// Carrega o email do usuário logado
const userEmail = localStorage.getItem('userEmail');
if (!userEmail) {
    // Se não houver usuário logado, redireciona para a página inicial
    window.location.href = 'index.html';
}

// Função para mostrar/esconder seções
function showSection(sectionId) {
    // Esconde todas as seções
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Remove classe active de todos os links do menu
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Mostra a seção selecionada
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Adiciona classe active ao link clicado
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Função para enviar solicitação de frete
function submitFreight(event) {
    event.preventDefault();
    
    // Pega os valores do formulário
    const description = document.getElementById('description').value;
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    
    // Cria objeto do frete
    const freight = {
        id: Date.now(),
        description,
        origin,
        destination,
        date: new Date().toISOString(),
        status: 'pending',
        userEmail
    };
    
    // Pega fretes existentes do localStorage ou cria array vazio
    const freights = JSON.parse(localStorage.getItem('freights') || '[]');
    
    // Adiciona novo frete
    freights.push(freight);
    
    // Salva no localStorage
    localStorage.setItem('freights', JSON.stringify(freights));
    
    // Limpa o formulário
    document.getElementById('freight-form').reset();
    
    // Atualiza a lista de fretes
    loadFreights();
    
    // Mostra mensagem de sucesso
    alert('Frete solicitado com sucesso!');
    
    // Muda para a seção de Meus Fretes
    showSection('my-freights');
}

// Função para carregar fretes do localStorage
function loadFreights() {
    const freights = JSON.parse(localStorage.getItem('freights') || '[]');
    const freightsList = document.getElementById('freights-list');
    
    // Filtra apenas os fretes do usuário logado
    const userFreights = freights.filter(freight => freight.userEmail === userEmail);
    
    // Limpa a lista atual
    freightsList.innerHTML = '';
    
    if (userFreights.length === 0) {
        freightsList.innerHTML = '<p>Nenhum frete solicitado ainda.</p>';
        return;
    }
    
    // Ordena fretes por data (mais recentes primeiro)
    userFreights.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Cria cards para cada frete
    userFreights.forEach(freight => {
        const date = new Date(freight.date).toLocaleDateString('pt-BR');
        const statusClass = freight.status === 'pending' ? 'status-pending' : 'status-accepted';
        const statusText = freight.status === 'pending' ? 'Pendente' : 'Aceito';
        
        const card = document.createElement('div');
        card.className = 'freight-card';
        card.innerHTML = `
            <h3>Frete #${freight.id}</h3>
            <div class="freight-info"><strong>Descrição:</strong> ${freight.description}</div>
            <div class="freight-info"><strong>Origem:</strong> ${freight.origin}</div>
            <div class="freight-info"><strong>Destino:</strong> ${freight.destination}</div>
            <div class="freight-info"><strong>Data:</strong> ${date}</div>
            <span class="freight-status ${statusClass}">${statusText}</span>
        `;
        
        freightsList.appendChild(card);
    });
}

// Função de logout
function logout() {
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}

// Carrega os fretes ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    loadFreights();
});