import { useState } from "react";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { RootState } from "../../../redux/store";
import MailSvg from "../../../assets/icons/Mail";
import UserSvg from "../../../assets/icons/User";
import ShareSvg from "../../../assets/icons/Share";
import LocationSvg from "../../../assets/icons/Location";

const topics = ["recipients", "sections"];

const RecipientsList = () => {
  const members = useSelector(
    (state: RootState) => state.users.userInfo.members
  );

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div className="mt-14">
      <div className="flex gap-8">
        {topics.map((topic) => (
          <span
            key={topic}
            className={twMerge(
              "hover:text-secondaryColor cursor-pointer capitalize font-medium",
              selectedTopic === topic && "text-secondaryColor"
            )}
            onClick={() => setSelectedTopic(topic)}
          >{`${topic} - ${topic === "recipients" ? members.length : 0}`}</span>
        ))}
      </div>
      <div className="relative mt-5">
        {selectedTopic === "recipients" ? (
          <div className="flex flex-col gap-5">
            {members.map((member) => (
              <div className="flex justify-between gap-5" key={member.name}>
                <div className="flex gap-4 items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={40}
                    height={40}
                  />
                  <p className="text-sm font-medium">{member.name}</p>
                  <span className="hidden lg:block text-[#ededed]">|</span>
                  <span className="hidden lg:block text-xs text-grayColor">{`Last viewed on ${member.lastViewed}`}</span>
                </div>
                <div className="flex gap-4 sm:gap-6 items-center">
                  <span className="text-xs text-grayColor">`85m</span>
                  <MailSvg fill="#e51058" className="cursor-auto" />
                  <UserSvg className="cursor-auto" />
                  <ShareSvg fill="#e51058" className="cursor-auto" />
                  <span className="text-[#ededed]">|</span>
                  <LocationSvg />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 text-grayColor">Oops! Sorry no data</div>
        )}
      </div>
    </div>
  );
};

export default RecipientsList;
