export class ThfMenuItem {
    action?: () => void;
    label: string;
    subItems?: Array<ThfMenuItem>;
    link?: string;
}
