import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import { updateUsersSaga } from "../../redux/actions";
import FilterSvg from "../../assets/icons/Filter";
import { Input } from "../../library/input";
import SearchSvg from "../../assets/icons/Search";
import { RootState } from "../../redux/store";
import List from "./list";

export enum SortByEnum {
  createdDate = "createdDate",
  lastActivity = "lastActivity",
  timeSpent = "timeSpent",
}

const sortByList = [
  {
    id: SortByEnum.createdDate,
    name: "Created Date",
  },
  { id: SortByEnum.lastActivity, name: "Last Activity" },
  { id: SortByEnum.timeSpent, name: "Time Spent" },
];

const ConversationsTrack = () => {
  const dispatch = useDispatch();

  const isBackBtnShown = useSelector(
    (state: RootState) => state.users.isBackBtnShown
  );

  const [sortValue, setSortValue] = useState(SortByEnum.createdDate);

  const sortHandler = (type: SortByEnum) => {
    dispatch(
      updateUsersSaga({
        sortValue: type,
      })
    );
    setSortValue(type);
  };

  return (
    <div
      className={twMerge(
        "flex-col p-[8px_12px_12px] sm:p-[0px_24px] max-w-[400px] h-full overflow-auto w-full order-2 border-r-0 sm:border-r",
        !isBackBtnShown ? "flex" : "hidden sm:flex"
      )}
    >
      <div className="pt-0 sm:pt-10 flex gap-3 justify-between items-center">
        <div>
          <h2 className="font-bold text-[26px] sm:text-[32px] leading-10">
            Conversations
          </h2>
          <p className="text-xs">track user engagement</p>
        </div>
        <FilterSvg />
      </div>
      <div className="relative mt-8">
        <Input
          className="pr-10 text-xs"
          placeholder="Search by conversations and contacts"
        />
        <SearchSvg className="absolute top-1/2 right-2 -translate-y-1/2" />
      </div>
      <div className="flex justify-between gap-3 text-xs mt-3 text-gray-500">
        <label className="font-semibold text-primaryColor">Sort by :</label>
        {sortByList.map((data) => (
          <span
            key={data.id}
            className={twMerge(
              "hover:text-secondaryColor cursor-pointer",
              sortValue === data.id && "text-secondaryColor font-medium"
            )}
            onClick={() => sortHandler(data.id)}
          >
            {data.name}
          </span>
        ))}
      </div>
      <List />
    </div>
  );
};

export default ConversationsTrack;
