const poema = `
En la profundidad de tu mirada, un misterio se revela,
un fulgor que emula el alba naciente,
ese instante mágico en que el mundo se despereza,
y la esperanza florece, incluso el amar se hace latente.

No sé si es la luz que danza en tu cabellera,
o la gracia de tu sonrisa espontánea y sincera,
pero tu cercanía me hechiza de tal manera,
que el tiempo se suspende, y mi ser renace, cual primavera.

No te ofrezco odas de pasión desenfrenada,
ni juramentos que el futuro no ha deparado,
sino versos que celebran los detalles que me agradan,
aquellos que inspiran mi anhelo de crecer a tu lado.

Hoy, no te entrego un presente material,
sino estas palabras que brotan desde mi alma, cual manantial,
pues el amor no es una meta, sino un sendero celestial,
que ansío recorrer contigo, mi amada, mi ideal.
`;

const carta = document.querySelector('.carta');
const contenido = document.querySelector('.contenido');
const poemaElement = document.querySelector('#poema');
const botonVolver = document.querySelector('#boton-volver');
const musicaFondo = document.querySelector('#musica-fondo');

carta.addEventListener('click', () => {
    carta.classList.toggle('abierta');
    contenido.classList.toggle('mostrar');
    poemaElement.innerText = poema;
    musicaFondo.play();
});

botonVolver.addEventListener('click', () => {
    carta.classList.toggle('abierta');
    contenido.classList.toggle('mostrar');
    poemaElement.innerText = '';
    musicaFondo.pause();
});