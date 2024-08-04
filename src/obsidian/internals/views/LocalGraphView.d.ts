import type { InfoFileView } from "../../types.js";
import type { TFile } from "obsidian";
/** @todo Documentation incomplete */
export interface LocalGraphView extends InfoFileView {
    /**
     * Get the current view type
     */
    getViewType(): "localgraph";
    /**
     * Requests a update if the changed file is the opened file
     * @param file The changed file
     */
    onFileChanged(file: TFile): void;
    /**
     * Renders the graph
     */
    update(): void;
    /**
     * Updates the options from the plugin when changed in view
     */
    onOptionsChange(): void;
}
