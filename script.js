document.addEventListener('DOMContentLoaded', () => {
    const waveformContainer = document.getElementById('waveform');
    const playPauseButton = document.getElementById('playPause');
    const radioButtons = document.querySelectorAll('input[name="audioToggle"]');

    // Cria uma instância do WaveSurfer
    const wavesurfer = WaveSurfer.create({
        container: waveformContainer,
        waveColor: '#2c2a2ac2',
        progressColor: '#000000'
    });

    // Função para carregar a faixa selecionada
    const loadTrack = (track) => {
        let trackPath = '';
        if (track === 'beatv30') {
            trackPath = 'beatv30 mini ep.mp3';
        } else if (track === 'captainhook') {
            trackPath = 'Captain Hook - Time & Space.mp3';
        }
        wavesurfer.load(trackPath);
    };

    // Event listeners para os botões de alternância
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            wavesurfer.empty(); // Limpa o visualizador de waveform antes de carregar uma nova faixa
            loadTrack(selectedValue);
        });
    });

    // Play/Pause button event listener
    playPauseButton.addEventListener('click', () => {
        wavesurfer.playPause();
    });

    // Carrega a faixa Beatv30 Mini EP inicialmente
    loadTrack('beatv30');
});
