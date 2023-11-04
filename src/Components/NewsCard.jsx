import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const NewsCard = ({ article }) => {
  return (
    <>
      <Card
        isFooterBlurred
        className="w-full md:w-[20rem] h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white uppercase font-bold">
            {article.title}
          </p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={article.urlToImage}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
           
            <div className="flex flex-col">
              <p className="text-tiny text-white">{article.description}</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            <a href={article.url}>More</a>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default NewsCard;
