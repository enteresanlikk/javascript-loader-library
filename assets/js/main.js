var DOMStrings = {
    loaderContainer: '.loader-container',
    loader: '.loader-container .loader',
    loaderText: '.loader-container .loader .text .texts'
};

var loaderTexts = [
    {
        text: 'Yükleniyor...',
        delay: 1
    },
    {
        text: 'Loading...',
        delay: 0.5
    }
];

var options = {
    deletedDOM: true,
    bodyClass: 'loading'
};

(function() {


    const loader = new Loader(DOMStrings, loaderTexts, options);
    loader.start();
    setTimeout(()=>{
        //loader.stop();
    },300);

    setTimeout(()=>{
        //loader.finish();
    },500);


})();