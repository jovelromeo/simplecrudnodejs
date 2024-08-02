
let tableGen = () => {
    let table = [undefined];
    return {
        create: (record) => {
            table.push({ id: table.length, ...record });
            return record;
        },
        list: () => {
            return table.filter(Boolean);
        },
        update: (id, record) => {
            table[id] = record;
            return record;
        },
        delete: (id) => {
            table[id] = undefined;
            return id;
        },
    }
}

module.exports = {
    tableGen,
}