export default function ellipsis(text, cut = 25) {
    if(text.length > cut) {
        let textArr = text.split('');
        textArr.splice(cut);
        if(textArr[textArr.length - 1] === ' ') {
            textArr.pop();
        }
        textArr.push('...');
        let newText = textArr.join('');
        return newText;
    }
    return text;
}