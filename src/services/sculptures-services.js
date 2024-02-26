import Swal from 'sweetalert2';

// GET
export const getSculptures = async () => {
    const response = await fetch('http://localhost:3000/sculptures');
    const data = await response.json();
    return data;
}

//GET una escultura
export const getSculptureById = async (id) => {
    const response = await fetch(`http://localhost:3000/sculptures/${id}`);
    const data = await response.json();
    return data;
}

// DELETE
/* export const deleteSculptures = async (id) => {
    if (confirm("¿Estás seguro que quieres eliminar?") === true) {
        const response = await fetch(`http://localhost:3000/sculptures/${id}`, {
            method: 'DELETE'
        });
    }
}; */

export const deleteSculptures = async (id) => {
    const result = await Swal.fire({
        title: '¿Estás seguro que quieres eliminar?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
        const response = await fetch(`http://localhost:3000/sculptures/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            Swal.fire(
                '¡Eliminado!',
                'La escultura ha sido eliminada correctamente.',
                'success'
            ).then(() => {
                // Recargar la página después de eliminar la escultura
                window.location.reload();
            });
        } else {
            Swal.fire(
                'Error',
                'Hubo un problema al intentar eliminar la escultura.',
                'error'
            );
        }
    }
};

// POST
export const createSculptures = async (newSculptures) => {
    Swal.fire("Obra creada con éxito!");
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

export const editSculptures = async (id, data) => {
    const response = await fetch(`http://localhost:3000/sculptures/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        Swal.fire(
            '¡Editado!',
            'Tu escultura ha sido editada con éxito.',
            'success'
        );
    } else {
        Swal.fire(
            'Error',
            'Hubo un problema al intentar editar la escultura.',
            'error'
        );
    }

    return response;
};
