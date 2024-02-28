import axios from 'axios';
import Swal from 'sweetalert2';


// GET

export const getSculptures = async () => {

    const response = await axios.get("http://localhost:3000/sculptures");
    const data = await response.data;
    return data;
}

//GET una escultura

export const getSculptureById = async (id) => {

    const response = await axios.get(`http://localhost:3000/sculptures/${id}`);
    const data = await response.data;
    return data;
}

// DELETE

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

        const response = await axios.delete(`http://localhost:3000/sculptures/${id}`)
        const data = await response.data

        if (data) {
            Swal.fire(
                '¡Eliminado!',
                `La escultura ha sido eliminada correctamente ${data.title}`,
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

    const response = await axios.post("http://localhost:3000/sculptures", newSculptures)

    return response;
}


// PUT - EN PROCESO 

export const editSculptures = async (id, data) => {

    const response = await axios.put(`http://localhost:3000/sculptures/${id}`, data)

    if (response) {
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
