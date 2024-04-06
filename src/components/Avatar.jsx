import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";

const Index = ({size}) => {
  return (
    <div >
      <Avatar className=" h-10 w-10">
        <AvatarImage src="https://github.com/shadcn.png"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Index;
