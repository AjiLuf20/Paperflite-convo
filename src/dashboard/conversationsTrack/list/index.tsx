import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import { getDateDifference } from "../../../generics";
import { RootState } from "../../../redux/store";
import { updateUserInfoSaga } from "../../../redux/actions";
import { updateBackBtnShown } from "../../../redux/reducer/user";

const List = () => {
  const navigate = useNavigate();

  const params = useParams();

  const { users, userInfo } = useSelector((state: RootState) => state.users);
  const { id, title } = userInfo || {};

  const dispatch = useDispatch();

  useEffect(() => {
    if (params?.id) {
      const userInfo = users.find((user) => user.title === params?.id);
      if (userInfo) {
        dispatch(
          updateUserInfoSaga({
            id: userInfo.id,
          })
        );
      } else {
        navigate(`/${title}`);
      }
    } else {
      navigate(`/${title}`);
    }
  }, [params?.id]);

  const userInfoHandler = (key: string, title: string) => {
    dispatch(
      updateUserInfoSaga({
        id: key,
      })
    );
    dispatch(updateBackBtnShown(true));
    navigate(`/${title}`);
  };

  return (
    <div className="mt-8 flex flex-col gap-4">
      {users.map((user) => (
        <div
          key={user.title}
          className="group cursor-pointer flex gap-3"
          onClick={() => userInfoHandler(user.id, user.title)}
        >
          <img
            src={user.image}
            alt={user.title}
            width={80}
            height={90}
            className="rounded-lg"
          />
          <div className="flex flex-col h-full">
            <p
              className={twMerge(
                "group-hover:text-secondaryColor font-medium",
                user.id === id && "text-secondaryColor"
              )}
            >
              {user.title}
            </p>
            <span className="text-xs text-lightGrayColor">{`Shared on ${getDateDifference(
              user.createdDate
            )}`}</span>
            <span className="mt-auto pb-2 text-sm text-[#cecece]">
              {user.members?.length > 1
                ? `${user.members[0].name} +${user.members.length - 1} more`
                : `${user.members[0].name}`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
