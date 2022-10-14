
/**
 * TODO:
 * transiciones mas suaves
 * el doble click no rompa el orden
 */
(() => {
    const all_carrusel_slider = document.getElementsByClassName("carrusel-slider")
    for (const carrusel_slider of all_carrusel_slider) {

        //  Select chidrem items and width
        const slider = carrusel_slider.getElementsByClassName("slider")[0]

        let current = 0


        /* ReRenders */

        // current count 
        const renderCurretn = () => {
            const cont_container = carrusel_slider.getElementsByClassName("render-cont")[0]
            if (cont_container) {
                cont_container.textContent = current + 1
            }
        }

        // dot style
        function setDoct() {
            for (let dot of dot_control_cont.children) {
                dot.className = ""
            }
            dot_control_cont.children[current].classList.add("active")
            renderCurretn()
        }



        // arrow_controls
        function arrowControler(bol) {
            const widthSlider = slider.children[0].offsetWidth
            const cols = slider.offsetWidth / widthSlider
            setTimeout(() => {
                
                if (bol == true) {
                    current++
                    if (current >= slider.children.length / cols) {
                        slider.scrollLeft = 0
                        current = 0
                    } else {
                        slider.scrollLeft += widthSlider * cols
                    }
                } else {
                    if (current < 1) {
                        slider.scrollLeft = slider.children.length * widthSlider * cols
                        current = slider.children.length - 1
                    } else {
                        slider.scrollLeft -= widthSlider * cols
                        current = current - 1
                    }
                }
            }, 500);
            setDoct()
            renderCurretn()

        }
        const right_control = carrusel_slider.getElementsByClassName("right-control")[0]
        const left_control = carrusel_slider.getElementsByClassName("left-control")[0]

        if (right_control) {
            right_control.onclick = () => arrowControler(true)
        }
        if (left_control) {
            left_control.onclick = () => arrowControler(false)
        }


        // Dot Control
        const dot_control_cont = carrusel_slider.getElementsByClassName("dot-control")[0]
        function indexControler(e, i) {
            const widthSlider = slider.children[0].offsetWidth
            const cols = slider.offsetWidth / widthSlider

            slider.scrollLeft = widthSlider * i * cols
          
            current = i
            setDoct()
        }

        let widthSlider = slider.children[0].offsetWidth

        let cols = slider.offsetWidth / widthSlider

        let items_number = slider.children.length / cols
        for (let index = 0; index < items_number; index++) {
            // const element = slider.children[index];
            const dot_control = document.createElement("div")
            dot_control.onclick = (e) => indexControler(e, index)
            dot_control_cont.appendChild(dot_control)
            console.log(dot_control_cont, dot_control);
        }
        dot_control_cont.children[0].classList.add("active")
        renderCurretn()
    }
})();