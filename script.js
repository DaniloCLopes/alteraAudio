document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    const radioButtons = document.querySelectorAll('input[name="audioToggle"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            if (selectedValue === 'original') {
                audioSource.src = 'audio/original.mp3';
            } else if (selectedValue === 'mixada') {
                audioSource.src = 'audio/mixada.mp3';
            }
            audioPlayer.load();
        });
    });
});