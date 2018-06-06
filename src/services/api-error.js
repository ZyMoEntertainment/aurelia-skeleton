export class ApiError extends Error {
    constructor(data) {
        super();

        this.data = data;
    }
}
