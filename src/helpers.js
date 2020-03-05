function choice(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function remove(items, item) {
    return items.filter((fruitItem) => fruitItem !== item);
}

export {choice, remove};
