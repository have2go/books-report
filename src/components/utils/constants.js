import { textFilter } from 'react-bootstrap-table2-filter';
 
 export const columns = [
    {
        dataField: "date",
        text: "Дата пост.",
        filter: textFilter(),
        headerStyle: { width: '7%', }
    },
    {
        dataField: "department",
        text: "Каф.",
        filter: textFilter(),
        headerStyle: { width: '4%' }
    },
    {
        dataField: "author",
        text: "Автор",
        filter: textFilter(),
    },
    {
        dataField: "title",
        text: "Название",
        filter: textFilter()
    },
    {
        dataField: "vi",
        text: "ВИ",
        filter: textFilter(),
        headerStyle: { width: '4%' }
    },
    {
        dataField: "sp",
        text: "СП",
        filter: textFilter(),
        headerStyle: { width: '4%' }
    },
    {
        dataField: "editor",
        text: "Ред.",
        filter: textFilter(),
        headerStyle: { width: '5%' }
    },
    {
        dataField: "layout",
        text: "Верст.",
        filter: textFilter(),
        headerStyle: { width: '5%' }
    },
    {
        dataField: "pages",
        text: "Стр.",
        headerStyle: { width: '5%' }
    },
    {
        dataField: "volume",
        text: "Объем",
        headerStyle: { width: '5%' }
    },
    {
        dataField: "printing",
        text: "Тираж",
        headerStyle: { width: '5%' }
    },
    {
        dataField: "year",
        text: "Год",
        filter: textFilter(),
        headerStyle: { width: '5%' }
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