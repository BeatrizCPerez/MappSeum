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


// PUT - EN PROCESO 

export const editSculptures = async () => {
    const data = {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Michelangelo%27s_David_-_right_view_2.jpg/270px-Michelangelo%27s_David_-_right_view_2.jpg",
        "title": "leite",
        "author": "olivia maria",
        "material": "Madera y ladrillo",
        "year": 1520,
        "location": "venezuela, madrid"
    }
    const response = await fetch(`http://localhost:3000/sculptures/3`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

