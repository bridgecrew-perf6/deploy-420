# 进入项目目录
cd ../
# 执行指令
npm run setup
npm run lint
npm run dist
cp -r dist/* /www/wwwroot/yukita.xiaolang.fun
