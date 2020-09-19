export class TopLosers {
    constructor(
        public id: number,
        public companyName: string,
        public stockDate: string,
        public stockOpen: number,
        public stockHigh: number,
        public stockLow: number,
        public stockClose: number,
        public stockAdjClose: number,
        public stockVolume: number,
        public balance: number
    ) {

    }
}
