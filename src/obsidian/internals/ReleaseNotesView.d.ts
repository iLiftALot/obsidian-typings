import type { ItemView } from "obsidian";
/** @todo Documentation incomplete */
export interface ReleaseNotesView extends ItemView {
    /**
     * Get the current view type
     * @returns "release-notes"
     */
    getViewType(): string;
    /** @internal */
    fetchReleaseNotes(e: unknown): unknown;
    /** @internal */
    showPatchNotes(e: unknown, t: unknown): unknown;
    /** @internal */
    render(): unknown;
}
