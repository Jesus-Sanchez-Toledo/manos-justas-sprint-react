import React from 'react';

// Datos de ejemplo para el Product Backlog
const productBacklog = [
  { id: 'HU-01', enunciado: 'Como usuario, quiero registrarme en la plataforma para acceder a los servicios disponibles.', alias: 'Registro', estado: 'Pendiente', esfuerzo: '3', sprint: 'Sprint 1', prioridad: 'Alta', comentarios: 'Validación de correo y confirmación.' },
  { id: 'HU-02', enunciado: 'Como usuario, quiero iniciar sesión de manera segura para acceder a mi cuenta.', alias: 'Login', estado: 'Pendiente', esfuerzo: '3', sprint: 'Sprint 1', prioridad: 'Alta', comentarios: 'Implementar OAuth en el futuro.' },
  { id: 'HU-03', enunciado: 'Como usuario, quiero buscar servicios en mi área para encontrar rápidamente lo que necesito.', alias: 'Búsqueda', estado: 'Pendiente', esfuerzo: '5', sprint: 'Sprint 1', prioridad: 'Media', comentarios: 'Filtros por categoría y geolocalización.' },
  { id: 'HU-04', enunciado: 'Como usuario, quiero contratar un servicio de forma segura para garantizar la confianza en el proceso.', alias: 'Contratación', estado: 'Pendiente', esfuerzo: '5', sprint: 'Sprint 2', prioridad: 'Media', comentarios: 'Integrar sistema de pago seguro.' },
  { id: 'HU-05', enunciado: 'Como usuario, quiero calificar y dejar reseñas para mejorar la calidad del servicio.', alias: 'Reseñas', estado: 'Pendiente', esfuerzo: '3', sprint: 'Sprint 2', prioridad: 'Baja', comentarios: 'Recoger retroalimentación de los usuarios.' },
  { id: 'HU-06', enunciado: 'Como usuario, quiero chatear con el prestador de servicios para coordinar detalles y resolver dudas en tiempo real.', alias: 'Chat', estado: 'Pendiente', esfuerzo: '4', sprint: 'Sprint 2', prioridad: 'Media', comentarios: 'Implementar chat interno.' },
  { id: 'HU-07', enunciado: 'Como usuario, quiero ver mi ubicación en un mapa para conocer la cercanía de los prestadores de servicios.', alias: 'Geolocalización', estado: 'Pendiente', esfuerzo: '4', sprint: 'Sprint 1', prioridad: 'Media', comentarios: 'Integrar API de mapas.' },
  { id: 'HU-08', enunciado: 'Como administrador, quiero gestionar usuarios, servicios y pagos desde un panel administrativo.', alias: 'Panel Admin', estado: 'Pendiente', esfuerzo: '5', sprint: 'Sprint 3', prioridad: 'Alta', comentarios: 'Interfaz intuitiva y reportes.' },
  { id: 'HU-09', enunciado: 'Como usuario, quiero ver el historial de servicios contratados para hacer seguimiento de mis transacciones.', alias: 'Historial', estado: 'Pendiente', esfuerzo: '3', sprint: 'Sprint 2', prioridad: 'Baja', comentarios: 'Filtrado por fechas.' },
  { id: 'HU-10', enunciado: 'Como usuario, quiero guardar a mis prestadores favoritos para poder contratarlos fácilmente en el futuro.', alias: 'Favoritos', estado: 'Pendiente', esfuerzo: '2', sprint: 'Sprint 2', prioridad: 'Baja', comentarios: 'Agregar opción de favorito.' },
  { id: 'HU-11', enunciado: 'Como usuario, quiero recibir notificaciones push para estar informado de actualizaciones y ofertas.', alias: 'Notificaciones', estado: 'Pendiente', esfuerzo: '3', sprint: 'Sprint 3', prioridad: 'Media', comentarios: 'Integrar sistema de notificaciones.' },
  { id: 'HU-12', enunciado: 'Como usuario, quiero programar pagos recurrentes para servicios regulares y facilitar mi experiencia.', alias: 'Pagos Recurrentes', estado: 'Pendiente', esfuerzo: '4', sprint: 'Sprint 3', prioridad: 'Media', comentarios: 'Automatizar pagos mensuales.' },
  { id: 'HU-13', enunciado: 'Como usuario, quiero editar mi perfil para mantener mi información actualizada y personalizada.', alias: 'Edición Perfil', estado: 'Pendiente', esfuerzo: '2', sprint: 'Sprint 1', prioridad: 'Media', comentarios: 'Cambios en foto, dirección, etc.' },
  { id: 'HU-14', enunciado: 'Como administrador, quiero gestionar promociones y descuentos para incentivar el uso de la plataforma.', alias: 'Promociones', estado: 'Pendiente', esfuerzo: '3', sprint: 'Sprint 3', prioridad: 'Baja', comentarios: 'Aplicar códigos de descuento.' }
];

// Datos de ejemplo para la Calendarización de Sprints
const sprintCalendar = [
  { sprint: 'Sprint 1', fechaInicio: '2025-02-10', fechaFin: '2025-02-24' },
  { sprint: 'Sprint 2', fechaInicio: '2025-02-25', fechaFin: '2025-03-11' },
  { sprint: 'Sprint 3', fechaInicio: '2025-03-12', fechaFin: '2025-03-26' }
];

// Componente para mostrar el Product Backlog en forma de tabla
function ProductBacklog() {
  return (
    <div>
      <h2>Product Backlog</h2>
      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Enunciado</th>
            <th>Alias</th>
            <th>Estado</th>
            <th>Esfuerzo</th>
            <th>Sprint</th>
            <th>Prioridad</th>
            <th>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          {productBacklog.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.enunciado}</td>
              <td>{item.alias}</td>
              <td>{item.estado}</td>
              <td>{item.esfuerzo}</td>
              <td>{item.sprint}</td>
              <td>{item.prioridad}</td>
              <td>{item.comentarios}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Componente para mostrar las Backlog Cards (fichas) en forma de tarjetas
function BacklogCards() {
  return (
    <div>
      <h2>Backlog Cards</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productBacklog.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '15px', margin: '10px', width: '300px' }}>
            <h3>{item.alias} ({item.id})</h3>
            <p>{item.enunciado}</p>
            <p><strong>Prioridad:</strong> {item.prioridad}</p>
            <p><strong>Esfuerzo:</strong> {item.esfuerzo} puntos</p>
            <p><strong>Sprint:</strong> {item.sprint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente para mostrar la Calendarización de Sprints
function SprintCalendar() {
  return (
    <div>
      <h2>Calendarización de Sprints</h2>
      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '50%' }}>
        <thead>
          <tr>
            <th>Sprint</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
          </tr>
        </thead>
        <tbody>
          {sprintCalendar.map(sprint => (
            <tr key={sprint.sprint}>
              <td>{sprint.sprint}</td>
              <td>{sprint.fechaInicio}</td>
              <td>{sprint.fechaFin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Componente principal de la aplicación
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Planificación del Sprint para "Manos Justas"</h1>
      <ProductBacklog />
      <hr />
      <BacklogCards />
      <hr />
      <SprintCalendar />
    </div>
  );
}

export default App;
