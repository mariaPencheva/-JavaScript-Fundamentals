function foreignLanguages(country){

    switch (country) {
        case `England`:
        case `USA`:
            console.log(`English`);    
            break;
        case `Spain`:
        case `Argentina`:
        case `Mexico`:
            console.log(`Spanish`);
            break;
        default:
            console.log(`unknown`);
            break;
    }

}

foreignLanguages(`USA`);
foreignLanguages(`England`);
foreignLanguages(`Spain`);
foreignLanguages(`Argentina`);
foreignLanguages(`Mexico`);
foreignLanguages(`unknown`);