function generateOptions(data) {
    const options = data.map(item => `
        <option value='${item}'>${item}</option>
    `).join('');
    return options;
}


function generateImage(data) {
    const html = `
        <img src='${data}' alt>
    `;
    return html;
}