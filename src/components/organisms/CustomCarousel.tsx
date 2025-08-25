import React from "react";
// import Autoplay from "embla-carousel-autoplay"

type CustomCarouselProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  grid?:string;
};
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/molecules/carousel";


const CustomCarousel = <T,>({ data, renderItem, className,grid }: CustomCarouselProps<T>) => {
  return (
    <Carousel
     
    className={className || "w-full py-0"}>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className={`${grid}`}>
            <div className="">{renderItem(item, index)}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CustomCarousel;
