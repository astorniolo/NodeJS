// patron adapter del paquete cron

import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTick = () => void;   //es el callback que voy a llanmar cada vez que se ejecute el cron

export class CronService {

    static createJob(cronTime :CronTime,onTick:OnTick): CronJob {    //EN CLEAN CODE MAS DE 3 ARGUMENTO OCUPA UN OBJETO
        const job = new CronJob(cronTime, onTick);            
            
        job.start() // is optional here because of the fourth parameter set to true.

        return job;
    }
    
   
}	