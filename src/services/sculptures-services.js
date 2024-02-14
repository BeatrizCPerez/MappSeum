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


// PUT

