import { $ } from "bun";
const result = await $`echo -n "Hello Bun !!"`.text();
console.log(result);
