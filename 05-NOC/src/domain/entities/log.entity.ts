
export enum LogSeverityLevel{
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export class LogEntity{
    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;

    constructor(message: string, level: LogSeverityLevel ){
        this.level = level;
        this.message = message;
        this.createdAt = new Date();
    }

    static  fromJson = (json:string) : LogEntity => {//static no quiero crearmne una instancia para llamarlo.. es mas bien un FACTORY CONSTRUCTOR
        const { level,message,createdAt } = JSON.parse(json);
        const log=new LogEntity(message,level);
        log.createdAt=new Date(createdAt);
        return log;
    }
}