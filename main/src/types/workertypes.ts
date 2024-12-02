import { ContentStruct } from "./zustandtypes";

// Define an enum for Worker Messages
export enum WorkerMessages {
    initDB = "initDB",
    readDataFromDB = "readDataFromDB",
    computeAndSaveChanges = "computeAndSaveChanges",
}

// Define the shape for each instruction type
interface InitDBInput {
    instruction: WorkerMessages.initDB;
    // params: {}; // Empty object for initDB
}

interface ReadDataInput {
    instruction: WorkerMessages.readDataFromDB;
    params: {
        pageName: string; // Page URL to read
    };
}

interface ComputeChangesInput {
    instruction: WorkerMessages.computeChanges;
    params: {
        latestChanges: ContentStruct[]; // The content changes to compute
    };
}

// Define the union type for all possible worker inputs
export type WorkerInputStruct = InitDBInput | ReadDataInput | ComputeChangesInput;
