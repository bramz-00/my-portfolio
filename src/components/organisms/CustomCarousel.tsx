import React from "react";
// import Autoplay from "embla-carousel-autoplay"

type CustomCarouselProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
};
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/molecules/carousel";


const CustomCarousel = <T,>({ data, renderItem, className }: CustomCarouselProps<T>) => {
  return (
    <Carousel
     
    className={className || "w-full"}>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">{renderItem(item, index)}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CustomCarousel;
