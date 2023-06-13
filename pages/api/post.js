fetch('/api/rooms/create-room', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Nueva Sala',
    description: 'Esta es una nueva sala.',
    coordinates: { x: 7, y: 8, z: 9 },
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
