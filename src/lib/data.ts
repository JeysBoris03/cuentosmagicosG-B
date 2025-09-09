
export type Story = {
  id: string;
  title: string;
  synopsis: string;
  coverImage: string;
  content: string;
  dataAiHint: string;
};

export const stories: Story[] = [
  {
    id: 'el-dragon-valiente',
    title: 'El Dragón Valiente',
    synopsis: 'Un pequeño dragón supera sus miedos para salvar a su aldea de un invierno helado.',
    coverImage: 'https://picsum.photos/400/500?random=1',
    dataAiHint: 'dragon fantasy',
    content: `Había una vez, en un reino lejano anidado entre montañas nevadas, un pequeño dragón llamado Flami. A diferencia de otros dragones, Flami le tenía miedo al fuego. Cada vez que intentaba soltar una bocanada, solo salía una pequeña nube de humo.\nUn invierno, el frío fue tan intenso que amenazó con congelar toda la aldea. Flami, viendo a sus amigos temblar, supo que debía hacer algo. Con el corazón latiendo con fuerza, se concentró más que nunca. Pensó en el calor del sol, en la calidez de un abrazo y ¡ZAS! una hermosa y cálida llama salió de su boca, derritiendo la nieve y devolviendo la alegría a la aldea. Desde ese día, Flami fue conocido como el Dragón Valiente.`,
  },
  {
    id: 'la-princesa-astronoma',
    title: 'La Princesa Astrónoma',
    synopsis: 'La princesa Luna no soñaba con príncipes, sino con estrellas y galaxias lejanas.',
    coverImage: 'https://picsum.photos/400/500?random=2',
    dataAiHint: 'princess stars',
    content: `La princesa Luna vivía en un castillo con un telescopio gigante en la torre más alta. Cada noche, en lugar de leer cuentos de hadas, exploraba el cosmos. Conocía cada constelación y soñaba con viajar a Marte.\nSus padres, el rey y la reina, querían que se casara con un príncipe, pero Luna solo quería descubrir un nuevo cometa. Una noche, mientras observaba el cielo, vio una luz parpadeante que no estaba en sus mapas. ¡Era un nuevo cometa! Lo llamó "Esperanza" y su descubrimiento inspiró a todo el reino a mirar hacia las estrellas. Luna demostró que las princesas también pueden ser grandes científicas.`,
  },
  {
    id: 'el-bosque-de-caramelo',
    title: 'El Bosque de Caramelo',
    synopsis: 'Dos hermanos descubren un bosque mágico donde los árboles son de piruleta y los ríos de chocolate.',
    coverImage: 'https://picsum.photos/400/500?random=3',
    dataAiHint: 'candy forest',
    content: `Leo y Mía eran dos hermanos muy curiosos. Un día, persiguiendo a una mariposa con alas de arcoíris, encontraron un sendero secreto que los llevó al Bosque de Caramelo. ¡Fue increíble! Los árboles tenían troncos de bastón de caramelo y hojas de algodón de azúcar. Los ríos fluían con chocolate tibio y las flores eran gominolas de colores.\nPasaron el día saltando sobre nubes de malvavisco y comiendo frutas de chicle. Aprendieron que la magia se puede encontrar en los lugares más inesperados y que compartir una aventura con tu hermano es el dulce más grande de todos.`,
  },
    {
    id: 'el-robot-con-corazon',
    title: 'El Robot con Corazón',
    synopsis: 'Un robot de fábrica descubre el significado de la amistad y los sentimientos.',
    coverImage: 'https://picsum.photos/400/500?random=4',
    dataAiHint: 'robot friend',
    content: `En una bulliciosa ciudad del futuro, vivía un robot llamado Bip. Bip trabajaba en una fábrica, ensamblando juguetes todo el día. Su vida era monótona y programada.\nUn día, un pajarito herido cayó en su ventana. Bip, en contra de su programación, lo cuidó. Le construyó un nido con cables suaves y compartió su energía. Cuando el pajarito sanó y se fue volando, Bip sintió un extraño cortocircuito en su pecho. No era un error; era la primera vez que sentía tristeza y alegría al mismo tiempo. Bip entendió que tener un corazón no se trata de engranajes, sino de cuidar a los demás.`,
  },
  {
    id: 'el-fantasma-del-atico',
    title: 'El Fantasma del Ático',
    synopsis: 'Dos amigos exploran el ático prohibido de una vieja casa, sin saber qué les espera.',
    coverImage: 'https://picsum.photos/400/500?random=5',
    dataAiHint: 'ghost attic',
    content: 'Carlos y Ana siempre tuvieron curiosidad por el ático de la casa abandonada. Una noche de tormenta, decidieron entrar. La puerta crujió y una corriente de aire helado los recibió. En el centro, una mecedora se movía sola. De repente, una risa fría resonó y una sombra se alargó en la pared. Salieron corriendo y nunca más volvieron.'
  },
  {
    id: 'el-jardin-secreto',
    title: 'El Jardín Secreto',
    synopsis: 'El amor florece entre dos jóvenes que cuidan juntos un jardín olvidado.',
    coverImage: 'https://picsum.photos/400/500?random=6',
    dataAiHint: 'secret garden',
    content: 'Elena amaba las flores. Un día, conoció a Marco, quien le mostró un jardín abandonado tras un muro de hiedra. Juntos, decidieron devolverle la vida. Entre risas y conversaciones, plantaron semillas que florecieron junto a su amor. El jardín se convirtió en su refugio, un lugar donde su cariño crecía con cada nueva flor.'
  },
  {
    id: 'el-principe-poeta',
    title: 'El Príncipe Poeta',
    synopsis: 'Un príncipe apasionado por la poesía lucha por el amor de una doncella que inspira sus versos.',
    coverImage: 'https://picsum.photos/400/500?random=7',
    dataAiHint: 'prince poet',
    content: 'El príncipe Adrián prefería la pluma a la espada. Pasaba sus días escribiendo poemas en la torre del castillo. Un día, vio a Isabella en el mercado, y su belleza lo inspiró como nunca antes. Le escribió versos anónimos que llegaban a ella con el viento. Isabella se enamoró de las palabras sin conocer al autor. En un baile de máscaras, Adrián recitó su último poema y, al reconocer la voz, Isabella supo que había encontrado al dueño de su corazón.'
  },
  {
    id: 'caperucita-roja',
    title: 'Caperucita Roja',
    synopsis: 'Una niña se encuentra con un lobo feroz en su camino a casa de su abuela.',
    coverImage: 'https://picsum.photos/400/500?random=8',
    dataAiHint: 'wolf forest',
    content: 'Había una vez una niña llamada Caperucita Roja. Un día, su madre le pidió que llevara una cesta a su abuela enferma. "No te desvíes del camino", le advirtió. En el bosque, se encontró con un lobo astuto que la engañó para que tomara el camino más largo.\nEl lobo llegó primero a casa de la abuela, se la comió y se disfrazó con su ropa. Cuando Caperucita llegó, notó algo extraño. "¿Qué orejas tan grandes tienes?", preguntó. "¡Para oírte mejor!", dijo el lobo. Al final, el lobo saltó y se la comió también. Pero un cazador que pasaba por allí escuchó los gritos, abrió la panza del lobo y salvó a Caperucita y a su abuela.'
  },
  {
    id: 'los-tres-cerditos',
    title: 'Los Tres Cerditos',
    synopsis: 'Tres hermanos cerditos construyen casas de diferentes materiales para protegerse de un lobo hambriento.',
    coverImage: 'https://picsum.photos/400/500?random=9',
    dataAiHint: 'three pigs',
    content: 'Había una vez tres cerditos que decidieron construir sus propias casas. El primero, perezoso, la hizo de paja. El segundo la hizo de madera. El tercero, muy trabajador, la construyó con ladrillos.\nLlegó el lobo y, soplando, derribó la casa de paja y la de madera, comiéndose a los dos primeros cerditos. Pero cuando intentó derribar la casa de ladrillos, sopló y sopló sin éxito. El cerdito trabajador vivió feliz y seguro, demostrando que el esfuerzo tiene su recompensa.'
  },
  {
    id: 'hansel-y-gretel',
    title: 'Hansel y Gretel',
    synopsis: 'Dos hermanos abandonados en el bosque encuentran una casa de jengibre que esconde un oscuro secreto.',
    coverImage: 'https://picsum.photos/400/500?random=10',
    dataAiHint: 'gingerbread house',
    content: 'Hansel y Gretel eran hijos de un leñador muy pobre. Su madrastra los abandonó en el bosque. Para encontrar el camino de vuelta, dejaron un rastro de migas de pan, pero los pájaros se las comieron.\nPerdidos, encontraron una casa hecha de pan de jengibre y dulces. Una anciana los invitó a entrar, pero era una bruja que quería comérselos. Encerró a Hansel en una jaula. Cuando la bruja se preparaba para cocinarlo, Gretel la empujó dentro del horno. Los niños escaparon con sus tesoros y encontraron el camino a casa.'
  }
];

export const tongueTwisters: string[] = [
  'Tres tristes tigres tragaban trigo en un trigal.',
  'Pablito clavó un clavito, ¿qué clavito clavó Pablito?',
  'El perro de San Roque no tiene rabo porque Ramón Ramírez se lo ha cortado.',
  'Cuando cuentes cuentos, cuenta cuántos cuentos cuentas, porque si no cuentas cuántos cuentos cuentas, nunca sabrás cuántos cuentos sabes contar.',
  'Me han dicho que has dicho un dicho que he dicho yo. El que lo ha dicho, mintió.',
  'Pepe Pecas pica papas con un pico. Con un pico pica papas Pepe Pecas.'
];
