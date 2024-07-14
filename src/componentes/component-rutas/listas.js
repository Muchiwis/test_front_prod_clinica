export const lista = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
  },
];

export function getContact(id) {
  return lista.find((contacto) => contacto.id == id);
}
