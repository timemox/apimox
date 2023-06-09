// pages/api/rooms/list.js

const rooms = [
  {
    title: "Sala 1",
    description: "Esta es la sala 1.",
    coordinates: { x: 1, y: 2, z: 3 },
  },
  {
    title: "Sala 2",
    description: "Esta es la sala 2.",
    coordinates: { x: 4, y: 5, z: 6 },
  },
];

export default function handler(req, res) {
  res.status(200).json(rooms);
}
