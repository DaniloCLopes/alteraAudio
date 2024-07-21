document.addEventListener('DOMContentLoaded', () => {
    const waveformContainer = document.getElementById('waveform');
    const playPauseButton = document.getElementById('playPause');
    const radioButtons = document.querySelectorAll('input[name="audioToggle"]');

    // Cria uma instância do WaveSurfer
    const wavesurfer = WaveSurfer.create({
        container: waveformContainer,
        waveColor: 'violet',
        progressColor: 'purple'
    });

    // Carrega a faixa original inicialmente
    wavesurfer.load('beatv30 mini ep.mp3');

    // Função para carregar a faixa selecionada
    const loadTrack = (track) => {
        wavesurfer.load(`audio/${track}.mp3`);
    };

    // Event listeners para os botões de alternância
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            loadTrack(selectedValue);
        });
    });

    // Play/Pause button event listener
    playPauseButton.addEventListener('click', () => {
        wavesurfer.playPause();
    });
});