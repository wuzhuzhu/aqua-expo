## made by Expo
### dev:
`npm run dev`

## 运行web项目
`cd web && npm install`

1. 修改utils/config
2. 环境变量确定process.env !== development
3. showDev 所有 = false
4. 清理TODOs
5. 部署/web 下的vite项目

## API DOC

获取会员信息
/api/v1/getMembers
获取专家视频集合
/api/v1/getLectureVideoInfo
获取论文集合
/api/v1/getPublications
以上都是pageSize 和pageNumber不传为全量，传值为分页

host: https://api.nara4aqua.com/

# 关于自定义build
参考：
https://expo.canny.io/feature-requests/p/react-native-fast-image

由于使用了react-native-fast-image, 需要：
Build the native app:
1. In the cloud with eas build -p all --profile development (expo build does not support custom builds)
2. Or locally with expo run:ios and expo run:android (note: see https://expo.fyi/prebuild-cleanup for information on the generated files)

