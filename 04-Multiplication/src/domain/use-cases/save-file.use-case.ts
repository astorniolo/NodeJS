import fs  from "fs";

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    fileDestination: string;
    fileName?  : string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(
            /** repository:StorageRepository    DATASOURCE */
    ){}

    execute ({
        fileContent ,
        fileDestination = `outputs `,
        fileName = `table`
    }:SaveFileOptions) : boolean {
        /** llamar al repo */
        try {
            const outputPath = `outoputs`;
        
            fs.mkdirSync(fileDestination,{recursive:true});

            fs.writeFileSync(`${fileDestination}/${ fileName }.txt`,fileContent);
            
            //console.log("File created");
            return true
        }
        catch (error) {
           console.log(error);
           return false; 
        }
    }
}