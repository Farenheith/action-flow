import { FlaNextActions } from "./fla-next-actions";
import { FlaType } from "./fla-type";

export class FlaAction {
    description: string;
    name: string;
    title: string;
    next: Array<FlaNextActions>;
    type: FlaType;
}