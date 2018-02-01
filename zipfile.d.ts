/// <reference types="node" />
/**
 * Created by user on 2018/2/1/001.
 */
export declare let ZipFile: IZipFile;
export interface IZipFile {
    names: string[];
    count: number;
    constructor(filename: string): any;
    readFile(name: string, cb: (error, buffer: Buffer) => void): void;
}
export default ZipFile;
