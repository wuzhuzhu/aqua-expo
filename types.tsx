/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Tab: NavigatorScreenParams<RootTabParamList> | undefined;
  Home: {
    screen?: string
  } | undefined;
  Members: undefined;
  Lectures: undefined;
  Lecture: {
    lecture: LectureType
  }
  WebModal: {
    url?: string
    name?: string
  };
  Modal2: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Members: undefined;
  Lectures: undefined;
  Publications: undefined;
  Database: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type MemberType = {
  id: string;
  name: string;
  logo?: string;
  url?: string;
}

export type LectureType = {
  id: string;
  title: string;
  imgUrl?: string;
  updatedAt: number;
  videos: VideoType[];
}

export type VideoType = {
  id: string;
  lectureId: string;
  createdAt: number;
  title: string;
  videoUrl: string;
  isYoutube: boolean;
}

export type PublicationType = {
  id: string;
  title: string;
  author: string;
  createdAt: number;
  imgUrl: string;
  pdfUrl: string
  chapters: ChapterType[]
}

export type ChapterType = {
  id: string;
  title: string;
  page: number;
}

export type NutrientType = {
  id: string;
  name: string;
}

export type paginationType = {
  pageSize?: number;
  pageNumber?: number;
}

export type IFetchFunParamType = {
  pageParams: paginationType
}

export type IListResponseType = {
  data: {
    list: any[]
    pagination?: {
      pageSize?: number;
      page
    }
  }
}
