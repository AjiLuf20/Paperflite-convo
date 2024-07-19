import { IDatabase } from "../types";

import Avatar2 from "../assets/images/avatar-2.png";
import Avatar3 from "../assets/images/avatar-3.png";
import Avatar4 from "../assets/images/avatar-4.png";
import Avatar5 from "../assets/images/avatar-5.png";
import Avatar6 from "../assets/images/avatar-6.png";
import Avatar7 from "../assets/images/avatar-6.png";

const db: IDatabase = {
  users: [
    {
      id: "1",
      name: "John Doe",
      title: "Meet New Paperflite",
      image: Avatar2,
      lastActivity: 1721386457321,
      timeSpent: 1721386455321,
      createdDate: 1721347347119,
      members: [
        { name: "Kevin", lastViewed: "02 Jan 2024", image: Avatar3 },
        { name: "Rhonald", lastViewed: "02 Jan 2024", image: Avatar4 },
        { name: "James", lastViewed: "02 Jan 2024", image: Avatar5 },
        { name: "John", lastViewed: "02 Jan 2024", image: Avatar6 },
        { name: "Elizabeth", lastViewed: "02 Jan 2024", image: Avatar7 },
      ],
      information: {
        title: "Meet New Paperflite",
        assets: "2",
        recipients: "4",
        emailOpenRate: "50%",
        contentClickRate: "100%",
        totalTimeSpent: "22:53",
        dealValue: "$ 367",
      },
    },
    {
      id: "2",
      name: "Ajith",
      title: "Paperflite Originals",
      createdDate: 1721347347119,
      lastActivity: 1726386457321,
      timeSpent: 1621386455321,
      image: Avatar3,
      members: [
        { name: "James", lastViewed: "10 Feb 2024", image: Avatar4 },
        { name: "John", lastViewed: "10 Feb 2024", image: Avatar2 },
        { name: "Rhonald", lastViewed: "10 Feb 2024", image: Avatar7 },
        { name: "Elizabeth", lastViewed: "10 Feb 2024", image: Avatar5 },
        { name: "Kevin", lastViewed: "10 Feb 2024", image: Avatar6 },
      ],
      information: {
        title: "Paperflite Originals",
        assets: "4",
        recipients: "8",
        emailOpenRate: "70%",
        contentClickRate: "98%",
        totalTimeSpent: "23:10",
        dealValue: "$ 571",
      },
    },
    {
      id: "3",
      name: "Kevin",
      title: "Collection of Paperflite",
      createdDate: 1721347347119,
      lastActivity: 1726388457321,
      timeSpent: 1621386465321,
      image: Avatar3,
      members: [
        { name: "John", lastViewed: "28 Feb 2024", image: Avatar4 },
        { name: "James", lastViewed: "28 Feb 2024", image: Avatar2 },
        { name: "Elizabeth", lastViewed: "28 Feb 2024", image: Avatar6 },
        { name: "Kevin", lastViewed: "28 Feb 2024", image: Avatar7 },
        { name: "Rhonald", lastViewed: "28 Feb 2024", image: Avatar5 },
      ],
      information: {
        title: "Collection of Paperflite",
        assets: "2",
        recipients: "6",
        emailOpenRate: "98%",
        contentClickRate: "70%",
        totalTimeSpent: "22:10",
        dealValue: "$ 71",
      },
    },
    {
      id: "4",
      name: "Ellen",
      title: "Paperflite - Ellen",
      createdDate: 1721347347119,
      lastActivity: 1726386450321,
      timeSpent: 1621386455021,
      image: Avatar4,
      members: [
        { name: "Elizabeth", lastViewed: "14 Mar 2024", image: Avatar5 },
        { name: "James", lastViewed: "14 Mar 2024", image: Avatar2 },
        { name: "John", lastViewed: "14 Mar 2024", image: Avatar3 },
        { name: "Kevin", lastViewed: "14 Mar 2024", image: Avatar5 },
        { name: "Rhonald", lastViewed: "14 Mar 2024", image: Avatar6 },
      ],
      information: {
        title: "Paperflite Originals",
        assets: "4",
        recipients: "8",
        emailOpenRate: "70%",
        contentClickRate: "90%",
        totalTimeSpent: "18:10",
        dealValue: "$ 645",
      },
    },
    {
      id: "5",
      name: "Messi",
      title: "Paperflite - Messages",
      createdDate: 1721347347119,
      lastActivity: 1726386459321,
      timeSpent: 1621386955321,
      image: Avatar5,
      members: [
        { name: "Maa", lastViewed: "12 Apr 2024", image: Avatar7 },
        { name: "John", lastViewed: "12 Apr 2024", image: Avatar5 },
        { name: "Elizabeth", lastViewed: "12 Apr 2024", image: Avatar6 },
        { name: "Kevin", lastViewed: "12 Apr 2024", image: Avatar3 },
        { name: "Rhonald", lastViewed: "12 Apr 2024", image: Avatar2 },
        { name: "Ellen", lastViewed: "12 Apr 2024", image: Avatar4 },
      ],
      information: {
        title: "Paperflite - Messages",
        assets: "4",
        recipients: "8",
        emailOpenRate: "50%",
        contentClickRate: "67%",
        totalTimeSpent: "10:10",
        dealValue: "$ 100",
      },
    },
  ],
};

export default db;
