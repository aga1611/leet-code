function removeSubfolders(folder: string[]): string[] {
    // sort alphabetically 
    folder.sort();
    // non-subfolders
    const ans: string[] = [folder[0]];

    for (let i = 1; i < folder.length; i++) {
        // Check if it begins with the last folder in the result list plus a /.
        // If not, add it to the result list; otherwise, it is a subfolder and can be skipped.
        if (!folder[i].startsWith(ans[ans.length - 1] + "/")) {
            ans.push(folder[i]);
        }
    }
    return ans;
}