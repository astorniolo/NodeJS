
interface CheckServiceUseCase {
    execute(url:string):Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase{
    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback,
    ){}

  public async execute(url:string):Promise<boolean>{
    try {
        const req = await fetch(url); 
        if (!req.ok) {
            throw new Error(`Error checking service ${url}`);   //
        }
        this.successCallback();
        return true;

    } catch (error) {
        this.errorCallback(`Error checking service: ${error}`);
        console.log(`Error checking service: ${error}`);
        return false;
    }
    
  }
}