import axios from 'axios';
import Swal from 'sweetalert2';

const url = "http://localhost:5000/api"
// GET

export const getSculptures = async () => {

    const response = await axios.get(`${url}`);
    const data = await response.data;
    return data;
}

//GET una escultura

export const getSculptureById = async (id) => {

    const response = await axios.get(`${url}/${id}`);
    const data = await response.data;
    return data;
}

// DELETE

export const deleteSculptures = async (id) => {
    const result = await Swal.fire({
        title: '¿Estás seguro que quieres eliminar?',
        text: "No podrás revertir este cambio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {

        const response = await axios.delete(`${url}/${id}`)
        const data = await response.data

        if (data) {
            Swal.fire(
                `La escultura ${data.title} ha sido eliminada correctamente`
            ).then(() => {
                // Recargar la página después de eliminar la escultura
                window.location.reload();
            });
        } else {
            Swal.fire(
                'Hubo un problema al intentar eliminar la escultura.'
            );
        }
    }
};

// POST

export const createSculptures = async (newSculptures) => {
    Swal.fire("Obra creada con éxito!");

    const response = await axios.post(`${url}`, newSculptures)

    return response;
}


// PUT - EN PROCESO 

export const editSculptures = async (id, data) => {

    const response = await axios.put(`${url}/${id}`, data)

    if (response) {
        Swal.fire(
            'Tu escultura ha sido editada con éxito.',
        );
    } else {
        Swal.fire(
            'Hubo un problema al intentar editar la escultura.',
        );
    }

    return response;
};
