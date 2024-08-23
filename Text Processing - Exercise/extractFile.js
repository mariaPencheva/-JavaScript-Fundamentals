function extractFile(path) {
    let fileInfo = path.split('\\').pop();
    // console.log(fileInfo);

    // let [fileName, extension] = fileInfo.split('.');
    let lastDotIndex = fileInfo.lastIndexOf('.');
    //console.log(lastDotIndex);

    let fileName = fileInfo.slice(0, lastDotIndex);
    let extension = fileInfo.slice(lastDotIndex + 1);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

// extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');