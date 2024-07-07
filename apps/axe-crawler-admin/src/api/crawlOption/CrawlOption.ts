import { Website } from "../website/Website";

export type CrawlOption = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  optionValue: string | null;
  optionName: string | null;
  website?: Website | null;
};
