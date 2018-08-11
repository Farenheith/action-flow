import { FlowAction } from './flow-action';

export class MainAction extends FlowAction {
    getSubAction: (action: string, observer: (x: FlowAction) => void) => void;
}
