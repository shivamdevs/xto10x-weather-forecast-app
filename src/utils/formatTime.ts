import moment from "moment";

function formatTime(inputDate: number): string {
    return moment(inputDate * 1000).format('hh:MM A');
}

export default formatTime;