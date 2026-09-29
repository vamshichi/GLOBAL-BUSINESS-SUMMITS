import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
 theme:{extend:{colors:{navy:"#0B2347",deep:"#06162F",blue:"#123B73",teal:"#0A9BA8",cyan:"#2EC4D6",ice:"#EAF7FA"},
 fontFamily:{sans:["var(--font-manrope)","system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
