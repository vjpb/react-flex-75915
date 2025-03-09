import { productos } from "./Productos";

  export const fetchData = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });