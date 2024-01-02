import { Button } from "@/components/ui/button";
import AppData from "@/infrastructure/AppData";
import { NavPageType } from "@/types/infrastructure/NavPage";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className="flex content-center align-middle">
        <Image src={'/mainpage/recipeFirstParagraph.jpg'} width={200} height={200} alt="recipe" className="float-left mr-2" />
        <p className="font-serif text-lg">Welcome to our culinary haven,
          where the journey to delicious and healthy eating begins! Our website is a vibrant community hub designed for food enthusiasts and health-conscious individuals alike.
          Dive into a treasure trove of mouthwatering recipes that not only tantalize your taste buds but also prioritize your well-being. From wholesome breakfast ideas to satisfying dinner options, our collection spans a diverse array of dishes to suit every palate.</p>
      </div>
      <div className="mt-8">
        <Image src={'/mainpage/recipeSecondParagraph.jpg'} width={200} height={200} alt="recipe" className="float-right mr-2" />
        <p className="font-serif text-lg">What sets us apart is the interactive platform we provide for our users.
          You're not just a visitor; you're a valued contributor to our culinary tapestry.
          Share your favorite healthy recipes with the community, whether it's a nutrient-packed salad, a hearty soup, or a guilt-free dessert. Our user-friendly interface allows you to seamlessly add your creations, complete with ingredients, step-by-step instructions, and vibrant images to showcase your culinary prowess.
          And that's not all – the interactive element extends to our rating system, empowering users to express their opinions and help others discover the most beloved recipes on our platform.</p>
      </div>
      <div className="mt-8 flex content-center align-middle">
        <Image src={'/mainpage/recipeThirdParagraph.jpg'} width={200} height={200} alt="recipe" className="float-left mr-2" />
        <div>
          <p className="font-serif text-lg">
            At the heart of our website is the belief that eating well should be a joyous experience shared with a community of like-minded individuals.
            Join us on this gastronomic adventure, where flavor meets nutrition, and where every recipe tells a story of health, happiness, and culinary creativity. Together, let's savor the journey to a healthier lifestyle, one delicious recipe at a time!</p>
          <Link className="mt-8 float-right" href={NavPageType[NavPageType.TrendRecipe]}>
            <Button>Go to Trend Recipes <ArrowRightCircle className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </div >
  )
}
