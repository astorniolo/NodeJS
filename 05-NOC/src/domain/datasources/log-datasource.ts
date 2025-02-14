import { LogEntity, LogSeverityLevel } from "../entities/log.entity";


export abstract class LogDatasource {    //abstract no se puede crear una instancia de una ABS si OBLIGA COMPORTAMIENTO
    abstract saveLog( log: LogEntity ) : Promise<void>;
    abstract getlogs( severityLevel : LogSeverityLevel): Promise<LogEntity[]>;
}