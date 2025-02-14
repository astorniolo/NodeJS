import { LogDatasource } from "../../domain/datasources/log-datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";



export class LogRepositoryImplementation implements LogRepository {

    constructor (
        private readonly logDatasouce : LogDatasource,    //inyecto la dependencia   y llamo sus metodos
    ){}

    saveLog(log: LogEntity): Promise<void> {
        return this.logDatasouce.saveLog(log);
    }
    getlogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
       return this.logDatasouce.getlogs (severityLevel)
    }
    
}