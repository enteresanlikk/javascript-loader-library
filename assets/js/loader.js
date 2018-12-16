let interval;
let allWriteText;

class Loader {
    constructor(DOM= {}, texts= [], options= { deletedDOM: true, bodyClass: 'loading' }) {
        this.texts = texts;
        this.DOM = DOM;
        this.options = options;
    }

    start(index = 0) {
        if(!document.body.classList.contains(this.options.bodyClass)) {
            document.body.classList.add(this.options.bodyClass);
        }
        allWriteText = index;
        if(index <= this.texts.length-1) {
            document.querySelector(this.DOM.loaderText).textContent = '';
            var loaderText = this.texts[index];
            var text = loaderText.text ? loaderText.text+'' : '' ;
            var delay = loaderText.delay ? loaderText.delay : 0.05;
            var duration = loaderText.duration ? loaderText.duration : 0.05;
        
            let splittedText = text.split('');
            let writeTextIndex = 0;
            interval = setInterval(()=>{
                if(splittedText.length-1 < writeTextIndex) {
                    clearInterval(interval);
                    setTimeout(()=> {
                        this.start(++allWriteText);
                    }, delay*1000);
                } else {
                    document.querySelector(this.DOM.loaderText).textContent += splittedText[writeTextIndex];
                }
                writeTextIndex++;
            },duration*1000);
        }else {
            if(this.options.deletedDOM)
                this.finish();
        }
    }

    stop() {
        clearInterval(interval);
    }

    finish() {
        document.body.classList.remove(this.options.bodyClass);
        document.querySelector(this.DOM.loaderContainer).remove();
    }
}