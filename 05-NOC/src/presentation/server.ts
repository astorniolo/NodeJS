import { error } from "console";
import { CheckService } from "../domain/use-cases/checks/checkService";
import { CronService } from "./cron/cron-service";
import { LogRepository } from "../domain/repository/log.repository";
import { LogRepositoryImplementation } from "../infraestructure/repositories/log.repository.implementation ";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";

// import { ChildProcess } from "child_process"; esto tb lo tenemos seria como multi hilos pero vamos a usar el paquete

const fileSystemLogRepository = new LogRepositoryImplementation(
    new FileSystemDataSource()
);

export class Server{
    
    public static start(){                  //public esta de mas ya que es el valor por defecto es publico a menos que ponga privado
                                            // static me ayuda a no tener que instanciar la clase para poder llamar a la funcion
                                           // luego solo se llama con Server.start()    

        console.log('Server started...');
       
        CronService.createJob(
            '*/5 * * * * *', 
            () => {
                //new CheckService().execute('http://localhost:3000/posts');  //esto es una llamada a un servicio que no existe
                const url= 'http://localhost:3000/posts'//'http://google.com'
                new CheckService(
                    () => console.log(`${url} is ok...`),
                    (error) => console.log('error...: ',error),
                    fileSystemLogRepository
                ).execute(url);  //esto es una llamada a un servicio que no existe
                
            }
            
        );          //CronJob es una clase que tiene un metodo estatico createJob
        
        CronService.createJob(
            '*/3 * * * * *', 
            () => {
                const date = new Date();
                console.log('Cron job se ejecuta cada 3 segundos : ', date);
            }
            
        ); 

        CronService.createJob(
            '*/2 * * * * *', 
            () => {
                const date = new Date();
                console.log('Cron job se ejecuta cada 2 segundos : ', date);
            }
            
        ); 

    }
}