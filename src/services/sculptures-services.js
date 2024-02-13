// GET

export const getSculptures = async () => {
    const response = await fetch('http://localhost:3000/sculptures');
    const data = await response.json();
    return data;
}

// DELETE

// POST

// CREATE

