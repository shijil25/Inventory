export interface ILoggerService {
    logInformation: (info : string) => void;
    logDebug: (message : string) => void;
    logError: (errorMessage : string) => void;
}