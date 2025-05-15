# Backend

## Gestionar reservas desde el backend 
Las reservas, una vez que coge los campos del formulario, se gestiona el CRUD desde el backend sin mostrarlos en la página web.
    - Mostrarlo en Prisma Studio

Gestionar:
- C: Nueva reserva: mostrar un módal confirmando la reserva al usuario.
- Backend:
    - R: Leer reserva
    - U: Actualizar reserva
    - D: Eliminar reserva

Gestionar las horas del formulario!

## Gestionar productos del menú
Gestionar desde el backend y mostrar en la página `/menu` los nuevos cambios.
- CRUD:
    - C: Crear nuevos productos
    - R: Mostrar en `/menu` (componente CardProduct con lógica)
    - U: Actualizar datos de los productos
    - D: Eliminar productos

## Componentes con lógica
- CardProduct --> mostrar info según el tipo de producto
- Menu: al clicar botón, mostrar cada producto según si son (botón con filtro):
    - Entrantes
    - Principales
    - Bebidas
- Formulario --> mismo formulario en `/contact` y en `/resevation`
    - Mostrar inputs concretos según la página (children)

### FALTA: Página con slug