//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('Reset');

    function resetGridColors() {
      gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
      });
    }

    changeButton.addEventListener('click', function() {
      const blockId = document.getElementById('block_id').value;
      const color = document.getElementById('colour_id').value.trim();

      resetGridColors();
      // Only proceed if block ID is valid (1 to 9)
      if (blockId >= 1 && blockId <= 9 && color) {
        const target = document.getElementById(blockId);
        if (target) {
          target.style.backgroundColor = color;
        }
      }
    });

    resetButton.addEventListener('click', resetGridColors);