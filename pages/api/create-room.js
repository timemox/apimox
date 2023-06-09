// pages/api/rooms/create-room.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, coordinates } = req.body;

    // Aquí puedes agregar la lógica para guardar la nueva sala en tu base de datos
    // Por ahora, solo devolveremos la nueva sala como una respuesta

    res.status(200).json({
      title,
      description,
      coordinates,
    });
  } else {
    res.status(405).send('Method not allowed');
  }
}
