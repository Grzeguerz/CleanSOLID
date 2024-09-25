(() => {

    // arreglo de temperaturas celsius
    //! const arrayOfNums = [33.6, 12.34];
    const temperaturesCelsius: number[] = [33.6, 12.34];

    // Dirección ip del servidor
    //! const ip = '123.123.123.123';
    const serverIp: string = '123.123.123.123';

    // Listado de usuarios
    //! const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    type User = { id: Number; email: string }
    const users: User[] = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    //! const emails = people.map( u => u.email );
    const userEmails: string[] = users.map( user => user.email );

    // Variables booleanas de un video juego
    // const jump = false;
    // const run = true;
    // const noTieneItems = true;
    // const loading = false;
    
    const canJump: boolean = false;
    const canRun: boolean = true;
    const hasItems: boolean = false;
    const isLoading: boolean = true;

    // Otros ejercicios
    // tiempo inicial
    //! const start = new Date().getTime();
    const startTime: number = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    //! const end = new Date().getTime() - start;
    const endTime: number = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    //! function book() {
    function getBooks(): void {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    //! function BooksUrl( u: string) {
    function getBookBysUrl( url: string): void {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    //! function areaCuadrado( s: number ) {
    function getSquareArea( side: number ): void {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    //! function printJobIfJobIsActive() {
    function printJob(): void {
        throw new Error('Function not implemented.');
    }
    
    




})();




