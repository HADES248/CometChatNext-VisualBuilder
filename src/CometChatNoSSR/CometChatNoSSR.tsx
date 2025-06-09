import React, { useEffect, useState } from "react";
import {
  CometChatUIKit,
  UIKitSettingsBuilder,
} from "@cometchat/chat-uikit-react";
import CometChatApp from "../CometChat/CometChatApp";
import { CometChatProvider } from "../CometChat/context/CometChatContext";
import { setupLocalization } from "../CometChat/utils/utils";

export const COMETCHAT_CONSTANTS = {
  APP_ID: "", // Replace with your App ID
  REGION: "", // Replace with your App Region
  AUTH_KEY: "", // Replace with your Auth Key or leave blank if you are authenticating using Auth Token
};

const CometChatNoSSR: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initCometChat = async () => {
      try {
        const UIKitSettings = new UIKitSettingsBuilder()
          .setAppId(COMETCHAT_CONSTANTS.APP_ID)
          .setRegion(COMETCHAT_CONSTANTS.REGION)
          .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
          .subscribePresenceForAllUsers()
          .build();

        await CometChatUIKit.init(UIKitSettings);

        setupLocalization();
        console.log("Initialization completed successfully");

        const UID = "cometchat-uid-3"; // Replace with your actual UID

        const loggedInUser = await CometChatUIKit.getLoggedinUser();
        if (!loggedInUser) {
          const user = await CometChatUIKit.login(UID);
          console.log("Login Successful:", user);
        } else {
          console.log("User already logged in:", loggedInUser);
        }

        setIsInitialized(true);
      } catch (error) {
        console.error("Initialization failed", error);
      }
    };

    initCometChat();
  }, []);

  if (!isInitialized) return <div>Loading Chat...</div>;

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CometChatProvider>
        <CometChatApp />
      </CometChatProvider>
    </div>
  );
};

export default CometChatNoSSR;
