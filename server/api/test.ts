let count = 0;
export default defineEventHandler((req) => {
  count = count + 1;
  return count;
});
