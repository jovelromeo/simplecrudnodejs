
let tableGenerator = () => {
    let table = [undefined];
    return {
        get: (id) => {
            return table[id];
        },
        create: (record) => {
            table.push({ id: table.length, ...record });
            return { id: table.length, ...record };
        },
        list: () => {
            return table.filter(Boolean);
        },
        update: (id, record) => {
            table[id] = record;
            return record;
        },
        delete: (id) => {
            let deletedRecord = table[id];
            table[id] = undefined;
            return deletedRecord;
        },
    }
}

module.exports = {
    tableGenerator,
}