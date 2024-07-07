import { Injectable } from "@nestjs/common";

@Injectable()
export class ReadmeService {
  constructor() {}
  async AddInstallationInstructions(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
