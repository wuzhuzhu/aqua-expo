import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useBreakpointValue } from "native-base";
import { Box, Column, ScrollView } from "native-base";
import { MasonaryLayout } from "../components/MasonLayout/MasonaryLayout";
import MasonaryItem from "../components/MasonLayout/masonary-item";

export default function MembersScreen({
  navigation,
}: {
  navigation: NativeStackScreenProps<any>;
}) {
  return (
    <Box>
      <ScrollView
        contentContainerStyle={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <MasonaryLayout
          column={useBreakpointValue({
            base: [1, 1],
            sm: [1, 1],
            md: [1, 1, 1],
            // lg: [1, 1, 1, 1],
            // xl: [1, 1, 1, 1, 1],
          })}
          _hStack={{
            space: 4,
            mb: 4,
            pt: "70px",
          }}
          _vStack={{ space: 4 }}
        >
          <MasonaryItem
            navigation={navigation}
            name="Actionsheet"
            minH={32}
            _box={{
              lightGrad: ["cyan.400", "teal.200"],
              darkGrad: ["cyan.600", "teal.300"],
            }}
            _heading={{
              color: "amber.100",
            }}
          />
          <MasonaryItem
            navigation={navigation}
            name="Alert"
            minH={40}
            _box={{
              lightGrad: ["orange.400", "amber.200"],
              darkGrad: ["orange.600", "amber.300"],
            }}
            _heading={{
              color: "amber.100",
            }}
          />

          <MasonaryItem
            navigation={navigation}
            name="AlertDialog"
            minH={48}
            _box={{
              lightGrad: ["blue.800", "lightBlue.300"],
              darkGrad: ["blue.900", "lightBlue.500"],
            }}
            _heading={{
              color: "amber.100",
            }}
          />
          <MasonaryItem
            navigation={navigation}
            name="Avatar"
            minH={48}
            _box={{
              lightGrad: ["violet.800", "lightBlue.300"],
              darkGrad: ["violet.900", "lightBlue.500"],
            }}
            _heading={{
              color: "lightBlue.100",
            }}
          />
          <MasonaryItem
            navigation={navigation}
            name="Badge"
            minH={32}
            _box={{
              lightGrad: ["emerald.400", "lime.200"],
              darkGrad: ["emerald.600", "lime.300"],
            }}
            _heading={{
              color: "lime.100",
            }}
          />
          <MasonaryItem
            navigation={navigation}
            name="Box"
            minH={40}
            _box={{
              lightGrad: ["fuchsia.800", "pink.300"],
              darkGrad: ["fuchsia.900", "pink.500"],
            }}
            _heading={{
              color: "pink.100",
            }}
          />

          <MasonaryItem
            navigation={navigation}
            name="Button"
            minH={40}
            _box={{
              lightGrad: ["lightBlue.400", "cyan.200"],
              darkGrad: ["lightBlue.600", "cyan.300"],
            }}
            _heading={{
              color: "cyan.100",
            }}
          />

          <MasonaryItem
            navigation={navigation}
            name="Center"
            minH={40}
            _box={{
              lightGrad: ["cyan.300", "yellow.200"],
              darkGrad: ["cyan.400", "yellow.300"],
            }}
            _heading={{
              color: "yellow.100",
            }}
          />

          <MasonaryItem
            navigation={navigation}
            name="CheckBox"
            minH={32}
            _box={{
              lightGrad: ["rose.400", "red.200"],
              darkGrad: ["rose.600", "red.300"],
            }}
            _heading={{
              color: "red.100",
            }}
          />

          <MasonaryItem
            navigation={navigation}
            name="Column"
            minH={32}
            _box={{
              lightGrad: ["orange.400", "yellow.200"],
              darkGrad: ["orange.600", "yellow.300"],
            }}
            _heading={{
              color: "red.100",
            }}
          />
          <MasonaryItem
            navigation={navigation}
            name="Divider"
            minH={40}
            _box={{
              lightGrad: ["fuchsia.400", "violet.200"],
              darkGrad: ["fuchsia.600", "violet.300"],
            }}
            _heading={{
              color: "violet.100",
            }}
          />
          <MasonaryItem
            navigation={navigation}
            name="Fab"
            minH={40}
            _box={{
              lightGrad: ["green.400", "lime.200"],
              darkGrad: ["green.600", "lime.300"],
            }}
            _heading={{
              color: "lime.100",
            }}
          />
          <MasonaryItem
            navigation={navigation}
            name="FlatList"
            minH={24}
            _box={{
              lightGrad: ["darkBlue.400", "indigo.200"],
              darkGrad: ["darkBlue.600", "indigo.300"],
            }}
            _heading={{
              color: "teal.100",
            }}
          />
          <MasonaryItem
            navigation={navigation}
            name="Flex"
            minH={32}
            _box={{
              lightGrad: ["cyan.400", "teal.200"],
              darkGrad: ["cyan.600", "teal.300"],
            }}
            _heading={{
              color: "teal.100",
            }}
          />
          <MasonaryItem
            navigation={navigation}
            name="FormControl"
            minH={56}
            _box={{
              lightGrad: ["lightBlue.400", "cyan.200"],
              darkGrad: ["lightBlue.600", "cyan.300"],
            }}
            _heading={{
              color: "cyan.100",
            }}
          />
          <MasonaryItem
            navigation={navigation}
            name="Heading"
            minH={32}
            _box={{
              lightGrad: ["teal.400", "violet.200"],
              darkGrad: ["teal.600", "violet.300"],
            }}
            _heading={{
              color: "violet.100",
            }}
          />
        </MasonaryLayout>
      </ScrollView>
    </Box>
  );
}
