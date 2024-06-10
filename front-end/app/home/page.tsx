"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { FakeCollectionData, FakeClassData } from "../../API/FakeData";
import CollectionCard from "@/components/Collection/CollectionCard";
import ClassCard from "@/components/Class/ClassCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Button } from "@/components/ui/button";
import api, { api_collections } from "@/config/axios.config";

export interface ICollection {
  id: number;
  name: string;
  description?: string;
  summary?: number;
  user: {
    id: number;
    name: string;
    password: string;
    email: string;
    phoneNumber: string | null;
  } | null;
  flashcards: {
    id: number;
    front_text: string;
    front_img: string | null;
    back_text: string;
    back_img: string | null;
    collectionId: number;
  }[];
}

const Page = () => {
  useEffect(() => {
    // window.localStorage.setItem("user", "1");
  }, []);

  const settings = {
    dots: true, // Hiển thị dấu chấm
    infinite: true, // Lặp lại vô hạn
    speed: 500, // Tốc độ chuyển đổi (ms)
    slidesToShow: 3, // Số lượng slide hiển thị cùng lúc
    slidesToScroll: 1, // Số lượng slide cuộn khi sử dụng next/prev buttons
    swipeToSlide: true,
  };

  const [collections, setCollections] = useState<ICollection[]>();

  useEffect(() => {
    api_collections.get("/view-collection").then((response) => {
      setCollections(response.data.data);
      console.log(response.data);
    });
  }, []);
  const router = useRouter();
  return (
    <div className="px-16 py-12 flex flex-col gap-12">
      <div className="">
        <h1 className="text-2xl font-bold mb-10">Collections</h1>
        <Slider {...settings}>
          {collections?.map((collection, index) => (
            <CollectionCard key={index} collection={collection} />
          ))}
        </Slider>
      </div>

      <div className="">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-10">Classes</h1>

          <Button
            className="font-bold text-[20px] text-blue-500 "
            variant="link"
            onClick={() => router.push("/home/class-list")}
          >
            See more...
          </Button>
        </div>

        <div className="flex gap-10">
          {FakeClassData.map((c, i) => (
            <ClassCard key={i} classes={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

/**/
