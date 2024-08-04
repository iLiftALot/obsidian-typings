import type { ItemView } from "obsidian";
/** @todo Documentation incomplete */
export interface GraphView extends ItemView {
    dataEngine: unknown;
    /**
     * Get the current view type
     */
    getViewType(): "graph";
    /**
     * Renders the graph
     */
    update(): void;
    /**
     * Updates the options from the plugin when changed in view
     */
    onOptionsChange(): void;
}
