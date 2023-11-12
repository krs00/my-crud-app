export function findMessageByName(name, data) {
    
    for (let i = 0; i < data.length; i++) {

        if (data[i].name === name) {
            return data[i]
        }
    }
}