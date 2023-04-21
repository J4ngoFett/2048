export function getState() {
    const savedState = JSON.parse(localStorage.getItem('stateElement') ?? '{}');
    return savedState;
}
export function saveState(state: unknown) {
localStorage.setItem('stateElement', JSON.stringify(state))
}





// mergeTiles() {
//     const countElement = document.querySelector('.count') as HTMLElement;
    
//     let currentCountScore: number = (Number(countElement.textContent) + ((this.linkedTile.value + this.linkedTileForMerge.value)));
//     this.linkedTile.setValue(this.linkedTile.value + this.linkedTileForMerge.value);
//     this.linkedTileForMerge.removeFromDOM();
//     this.unlinkTileForMerge();
//     countElement.textContent = currentCountScore.toString();
//     if (typeof (Storage) !== "undefined") {
//         if (localStorage.best_score_value) {
//             if (localStorage.best_score_value < currentCountScore) {
//                 localStorage.best_score_value = currentCountScore
//                 this.recordElement.textContent = localStorage.best_score_value;
//             } else {
//                 this.recordElement.textContent = localStorage.best_score_value
//             }
//         } else {
//             localStorage.best_score_value = currentCountScore
//             this.recordElement.textContent = localStorage.best_score_value
//         }
//     }
// }