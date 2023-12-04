import moment from "moment";

function formatDate(inputDate: string): string {
    return moment(inputDate).format('D MMM YYYY');
}

export default formatDate;