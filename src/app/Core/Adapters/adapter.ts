//All models should have an adapter that conforms to this interface
export interface Adapter<T> {
    adapt(item: any): T;
}
