import Calendar from "../../../assets/images/icon-calendar.svg";
import Planning from "../../../assets/images/icon-planning.svg";
import Reminders from "../../../assets/images/icon-reminders.svg";
import Todo from "../../../assets/images/icon-todo.svg";
import Arrow from "../../../assets/images/icon-arrow-down.svg";

export const menuList = [
    {
        title: "Features",
        icon: Arrow,

        subMenu: [
            {
                icon: Todo,
                title: "Todo List",
            },

            {
                icon: Calendar,
                title: "Calendar",
            },

            {
                icon: Reminders,
                title: "Reminders",
            },

            {
                icon: Planning,
                title: "Planning",
            },
        ],
    },

    {
        title: "Company",
        icon: Arrow,

        subMenu: [
            { title: "History" },
            { title: "Our Team" },
            { title: "Blog" },
        ],
    },

    {
        title: "Careers",
    },

    {
        title: "About",
    },
];
