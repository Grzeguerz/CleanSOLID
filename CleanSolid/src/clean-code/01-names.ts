(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    // malos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    //! const ddmmyyyy = new Date();
    const today: Date  = new Date();

    // días transcurridos - elapsed time in days
    //! const d: number = 23;
    const elapsedTimeInDay: number = 23

    // número de archivos en un directorio - number of files in directory
    //! const dir = 33;
    const numberOFFilesInDirectory: number = 33;
    
    // primer nombre - first name
    //! const nombre = 'Fernando';
    const firstName: string = 'Fernando';
    
    // primer apellido - last name
    //! const apellido = 'Herrera';
    const lastName: string = 'Herrera';

    // días desde la última modificación - days since modification
    //! const dsm = 12;
    const daysSinceLastModification: number = 12; 
    
    // cantidad máxima de clases por estudiante - max classes per student
    //! const max = 6;
    const maxClassesPerStudent: number = 6;


})();



