// Carrega os dados do motorista do localStorage
const driverData = JSON.parse(localStorage.getItem('driverData'));
const currentDriver = JSON.parse(localStorage.getItem('currentDriver'));

// Log para debug
console.log('Dados do motorista carregados:', { driverData, currentDriver });

// Usa os dados do currentDriver se disponíveis, senão usa driverData
const userData = currentDriver || driverData;

// Verifica se há dados do motorista
if (!userData || !userData.email) {
    console.log('Dados do motorista não encontrados');
    alert('Por favor, faça login novamente.');
    window.location.href = 'index.html';
}

// Atualiza as informações do motorista na página
document.getElementById('driver-greeting').textContent = `Olá, ${userData.name}!`;
document.getElementById('vehicle-info').textContent = 
    `Veículo: ${userData.vehicleModel}, ${userData.vehicleYear}`;

// Função para trocar entre as abas
function switchTab(tabId) {
    // Remove classe active de todas as abas e conteúdos
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Adiciona classe active na aba selecionada
    document.querySelector(`[onclick="switchTab('${tabId}')"]`).classList.add('active');
    document.getElementById(`${tabId}-freights`).classList.add('active');
    
    // Carrega os fretes apropriados
    loadFreights(tabId);
}

// Função para carregar fretes
function loadFreights(type) {
    const freights = JSON.parse(localStorage.getItem('freights') || '[]');
    const container = document.getElementById(`${type}-freights`).querySelector('.freights-list');
    container.innerHTML = '';
    
    let filteredFreights = freights;
    if (type === 'available') {
        filteredFreights = freights.filter(freight => !freight.driverId && freight.status === 'pending');
    } else {
        filteredFreights = freights.filter(freight => freight.driverId === driverData.email);
    }
    
    if (filteredFreights.length === 0) {
        container.innerHTML = `<p>Nenhum frete ${type === 'available' ? 'disponível' : 'aceito'} no momento.</p>`;
        return;
    }
    
    filteredFreights.forEach(freight => {
        const date = new Date(freight.date).toLocaleDateString('pt-BR');
        const card = document.createElement('div');
        card.className = 'freight-card';
        
        let acceptedDateHtml = '';
        if (freight.acceptedDate) {
            const acceptedDate = new Date(freight.acceptedDate).toLocaleDateString('pt-BR');
            acceptedDateHtml = `<div class="accepted-date">Aceito em: ${acceptedDate}</div>`;
        }
        
        card.innerHTML = `
            <h3>${freight.description}</h3>
            <div class="freight-info">
                <i class="fas fa-map-marker-alt"></i> <strong>Origem:</strong> ${freight.origin}
            </div>
            <div class="freight-info">
                <i class="fas fa-map-marker"></i> <strong>Destino:</strong> ${freight.destination}
            </div>
            <div class="freight-dates">
                <div>Solicitado em: ${date}</div>
                ${acceptedDateHtml}
            </div>
            ${type === 'available' ? 
                `<button onclick="acceptFreight('${freight.id}')" class="accept-btn">
                    <i class="fas fa-check"></i> Aceitar Frete
                </button>` :
                `<button class="accept-btn" disabled>
                    <i class="fas fa-check"></i> Aceito
                </button>`
            }
        `;
        
        container.appendChild(card);
    });
}

// Função para aceitar um frete
function acceptFreight(freightId) {
    const freights = JSON.parse(localStorage.getItem('freights') || '[]');
    const freightIndex = freights.findIndex(f => f.id.toString() === freightId);
    
    if (freightIndex !== -1) {
        freights[freightIndex].status = 'accepted';
        freights[freightIndex].driverId = driverData.email;
        freights[freightIndex].acceptedDate = new Date().toISOString();
        
        localStorage.setItem('freights', JSON.stringify(freights));
        
        alert('Frete aceito com sucesso!');
        switchTab('accepted');
    }
}

// Função de logout
function logout() {
    // Remove apenas os dados da sessão atual, mantendo o registro do motorista
    localStorage.removeItem('currentDriver');
    window.location.href = 'index.html';
}

// Carrega os fretes disponíveis ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    loadFreights('available');
});