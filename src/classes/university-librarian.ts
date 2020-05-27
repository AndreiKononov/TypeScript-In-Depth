import * as Interfaces from './../interfaces';
import { logger, logMethod, sealed, writable, logParameter, format } from '../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
    @format() name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter customName: string): void {
        console.log(`${this.name} is assisting ${customName}`);
    };

    @writable(true)
    assistFaculty(): void {
        console.log(`Assisting Faculty`);
    }

    @writable(false)
    teachCommunity(): void {
        console.log(`Teaching Community`);
    }
}
