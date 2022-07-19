function populateStorage(param) {
    localStorage.setItem('familyJar', param);
}

function extractStorage() {
    return localStorage.getItem('familyJar')
}