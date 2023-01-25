import { textFilter } from 'react-bootstrap-table2-filter';
 
 export const columns = [
    {
        dataField: "id",
        text: "№",
    },
    {
        dataField: "date",
        text: "Дата постановки",
        filter: textFilter()
    },
    {
        dataField: "department",
        text: "Кафедра",
        filter: textFilter()
    },
    {
        dataField: "title",
        text: "Название",
        filter: textFilter()
    },
    {
        dataField: "vi",
        text: "ВИ",
        filter: textFilter()
    },
    {
        dataField: "sp",
        text: "СП",
        filter: textFilter()
    },
    {
        dataField: "editor",
        text: "Редактор",
        filter: textFilter()
    },
    {
        dataField: "layout",
        text: "Верстальщик",
        filter: textFilter()
    },
    {
        dataField: "pages",
        text: "Страниц",
    },
    {
        dataField: "volume",
        text: "Объем",
    },
    {
        dataField: "printing",
        text: "Тираж",
    },
    {
        dataField: "year",
        text: "Год",
    },
];

// export let books = [
//     {
//         id: 1,
//         date: "00.00.0000",
//         department: "Е1",
//         title: "Книга",
//         vi: "У",
//         sp: "Т",
//         editor: "З",
//         layout: "СВ",
//         pages: "45",
//         volume: "5500",
//         printing: "100",
//         year: "2005",
//     },
//     {
//         id: 2,
//         date: "00.00.0000",
//         department: "Е1",
//         title: "Книга",
//         vi: "У",
//         sp: "Т",
//         editor: "З",
//         layout: "СВ",
//         pages: "45",
//         volume: "5500",
//         printing: "100",
//         year: "2005",
//     },
//     {
//         id: 3,
//         date: "00.00.0000",
//         department: "Е1",
//         title: "Книга",
//         vi: "У",
//         sp: "Т",
//         editor: "З",
//         layout: "СВ",
//         pages: "45",
//         volume: "5500",
//         printing: "100",
//         year: "2005",
//     },
// ];