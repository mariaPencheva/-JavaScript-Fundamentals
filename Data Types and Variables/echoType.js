function echoType(numOrStr){
    let type = typeof numOrStr;

    switch (type) {
        case "string":
        case "number":
            console.log(type);
            console.log(numOrStr);
            break;
        default:
            console.log(type);
            console.log('Parameter is not suitable for printing');
    }
    

}

echoType(null);