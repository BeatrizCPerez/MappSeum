// GET

export const getSculptures = async () => {
    const response = await fetch('http://localhost:3000/sculptures');
    const data = await response.json();
    return data;
}

// DELETE
export const deleteSculptures = async (id) => {
    const response = await fetch(`http://localhost:3000/sculptures/${id}`, {
        method: 'DELETE'
    });
    return response;
};

// POST

// CREATE

