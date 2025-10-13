    const imgZ = document.getElementById('.img-zoom');
    const sliderZ = document.getElementById('.zoom-slider');

    sliderZ.addEventListener("input", () => {
      const scale = sliderZ.value;
      imgZ.style.transform = `scale(${scale})`;
    });