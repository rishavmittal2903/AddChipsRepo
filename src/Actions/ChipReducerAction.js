
export function addChipInList(value) {
  return {
    type: "addChipInList",
    payload: value
  };
}
export function RemoveChip(value) {
  return {
    type: "RemoveChip",
    payload: value
  };
}
export function HighlightChip() {
  return {
    type: "HighLightChip"
  };
}
