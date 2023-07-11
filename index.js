const display = document.getElementById('display')
        const buttons = [...document.getElementsByClassName('btn')]

        buttons.map( button => {
            button.addEventListener('click', e => {
                switch (e.target.textContent) {
                    case 'C':
                        display.textContent = ''
                        break;

                    case '=':
                        try {
                            display.textContent = eval(display.textContent)
                        } catch (error) {
                            display.textContent = 'Error'
                        }
                        break;
                    
                    case '←':
                        display.textContent
                            ? display.textContent = display.textContent.slice(0, -1)
                            : display.textContent
                        break;
                
                    default:
                        display.textContent += e.target.textContent;
                        break;
                }
            });
        });;