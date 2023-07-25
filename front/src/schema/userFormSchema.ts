import * as yup from "yup";

export const userFormSchema = yup.object().shape({
    name: yup.string().required("Обязательное поле"),
    email: yup.string().email("Введите емайл").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Не верный формат").required("Обязательное поле")
});