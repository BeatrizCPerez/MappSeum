// GET
export const getSculptures = async () => {
    const response = await fetch('http://localhost:3000/sculptures');
    const data = await response.json();
    return data;
}

// DELETE
export const deleteSculptures = async (id) => {
    if (confirm("¿Estás seguro que quieres eliminar?") === true) {
        const response = await fetch(`http://localhost:3000/sculptures/${id}`, {
            method: 'DELETE'
        });
    }
};

// POST
export const createSculptures = async (newSculptures) => {
    alert("Obra creada con éxito!")
    const response = await fetch('http://localhost:3000/sculptures', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(newSculptures)}); se puede hacer de las dos formas 
        body: `{ 
        "imageUrl": "${newSculptures.imageUrl}",
        "title": "${newSculptures.title}", 
        "author": "${newSculptures.author}",
        "material": "${newSculptures.material}",
        "year": "${newSculptures.year}",
        "location": "${newSculptures.location}"
    }`});
    return response;
}


// PUT

export const putSculptures = async (id, data) => {
    const response = await fetch(`http://localhost:3000/sculptures/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

