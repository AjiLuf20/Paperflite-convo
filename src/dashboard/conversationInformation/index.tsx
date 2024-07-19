import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import { RootState } from "../../redux/store";
import EyeSvg from "../../assets/icons/Eye";
import RedoSvg from "../../assets/icons/Redo";
import TrashSvg from "../../assets/icons/Trash";
import MailSvg from "../../assets/icons/Mail";
import UserSvg from "../../assets/icons/User";
import ClockSvg from "../../assets/icons/Clock";
import MoneySvg from "../../assets/icons/Money";
import Banner from "../../assets/images/banner.png";
import { getDateDifference } from "../../generics";
import RecipientsList from "./list";
import BackBtnSvg from "../../assets/icons/Back";
import { updateBackBtnShown } from "../../redux/reducer/user";

export default function ConversationInformation() {
  const dispatch = useDispatch();

  const isBackBtnShown = useSelector(
    (state: RootState) => state.users.isBackBtnShown
  );

  const { createdDate, information } = useSelector(
    (state: RootState) => state.users.userInfo
  );
  const {
    assets,
    contentClickRate,
    dealValue,
    emailOpenRate,
    recipients,
    title,
    totalTimeSpent,
  } = information;

  const activitylist = useMemo(
    () => [
      {
        text: "email open rate",
        value: emailOpenRate,
        icon: <MailSvg />,
      },
      {
        text: "content click rate",
        value: contentClickRate,
        icon: <UserSvg />,
      },
      {
        text: "total time spent",
        value: totalTimeSpent,
        icon: <ClockSvg />,
      },
      {
        text: "deal value",
        value: dealValue,
        icon: <MoneySvg />,
      },
    ],
    [emailOpenRate, dealValue, totalTimeSpent]
  );

  return (
    <div
      className={twMerge(
        "order-1 sm:order-3 w-full h-full overflow-auto pb-2",
        isBackBtnShown ? "block" : "hidden sm:block"
      )}
    >
      {isBackBtnShown && (
        <BackBtnSvg
          onClick={() => dispatch(updateBackBtnShown(false))}
          className="fixed sm:hidden top-2 left-2 rounded-lg z-[100] cursor-pointer fill-secondaryColor"
        />
      )}

      <div className="w-full h-[20vh] max-h-200px relative">
        <img
          src={Banner}
          alt="banner"
          className="object-fill w-full h-full absolute"
        />
        <span className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-1"></span>
      </div>
      <div className="px-4 sm:px-8">
        <div className="-mt-5 relative z-10">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="flex justify-between items-center gap-3">
              <EyeSvg />
              <RedoSvg />
              <TrashSvg />
            </div>
          </div>
          <p className="mt-2 text-xs font-medium">{`You shared ${assets} with ${recipients} recipients`}</p>
          <span className="block mt-0.5 text-lightGrayColor text-xs">{`${getDateDifference(
            createdDate
          )} via Quicksend`}</span>
        </div>
        <div className="flex gap-5 flex-wrap mt-5">
          {activitylist.map((activity) => (
            <div
              key={activity.text}
              className="flex w-[130px] sm:w-[160px] h-[66px] sm:h-[76px] px-3 py-2 justify-between cursor-pointer border rounded-lg activity-box"
            >
              <div className="flex flex-col justify-between">
                <span className="font-semibold text-sm">{activity.value}</span>
                <span className="text-xs text-grayColor">{activity.text}</span>
              </div>
              {activity.icon}
            </div>
          ))}
        </div>
        <RecipientsList />
      </div>
    </div>
  );
}
