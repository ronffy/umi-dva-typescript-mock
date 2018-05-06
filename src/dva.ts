export function config() {
  return {
    onError(err: any) {
      err.preventDefault();
      console.log('错误：', err);
    },
  };
}