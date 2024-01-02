import { Button } from "@/components/Button";
import { CardQuestion } from "@/components/CardQuestion";
import { CardServices } from "@/components/CardServices";
import { Section } from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-[100px] bg-Grey-10 h-full scroll-smooth">
      <Section className="h-[600px]" id="Home">
        <div className="bg-[url('/hero.svg')] absolute w-full h-full z-10" />
        <div className="bg-[url('/abstract.svg')] absolute w-full h-[400px] bottom-0 bg-no-repeat left-0 bg-center z-10" />
        <div className="flex flex-col gap-4 items-center z-30 w-full px-9">
          <h1 className="font-bold text-5xl text-center max-sm:text-3xl max-w-[570px] max-sm:w-full">
            A Digital Product Studio that will Work
          </h1>

          <div className="flex py-4 px-4 border border-Grey-15 rounded-lg mt-4 bg-[#242424] bg-opacity-60">
            <div className="flex items-center max-sm:hidden">
              <p className="text-lg text-Grey-60 px-2">For</p>
              <p className="px-3 py-2 bg-Grey-15 rounded-lg text-lg font-light">
                Startups
              </p>
              <p className="px-2">,</p>
              <p className="px-3 py-2 bg-Grey-15 rounded-lg text-lg font-light">
                Enterprise leaders
              </p>
              <p className="px-2">,</p>
              <p className="px-3 py-2 bg-Grey-15 rounded-lg text-lg font-light">
                Media & Publishers
              </p>
              <p className="text-lg text-Grey-60 px-2">and</p>
              <p className="px-3 py-2 bg-Grey-15 rounded-lg text-lg font-light">
                Social Good
              </p>
            </div>

            <p className="text-Grey-60 text-center hidden max-sm:flex leading-relaxed">
              For startups, enterprise leaders, media & publishers, and social
              good.
            </p>
          </div>

          <div className="flex w-full justify-center gap-4 mt-5">
            <Button variants="secondary"> Our Works</Button>

            <Button variants="primary">Contact Us</Button>
          </div>
        </div>
      </Section>

      <Section id="Companies">
        <div className="bg-Grey-10 border border-Grey-15 px-6 py-3.5 absolute rounded-3xl -top-7 z-30">
          <p>Trusted By 250+ Companies</p>
        </div>

        <ul className="grid grid-cols-6 items-center place-items-center py-8 gap-8 max-sm:gap-0 w-full max-sm:p-0">
          {[
            "/brands/zapier.svg",
            "/brands/spotify.svg",
            "/brands/zoom.svg",
            "/brands/slack.svg",
            "/brands/amazon.svg",
            "/brands/adobe.svg",
          ].map((item, index) => {
            return (
              <li
                key={index}
                className="max-sm:col-span-3 w-full flex justify-center p-8 max-sm:border max-sm:border-Grey-15 max-sm:border-t-0 h-full"
              >
                <Image src={item} alt="" width={150} height={50} />
              </li>
            );
          })}
        </ul>
      </Section>

      <Section id="Services" className="h-full">
        <div className="h-[280px] w-full bg-[#ACFF24] bg-opacity-20 relative">
          <div className="flex flex-col gap-4 justify-center items-center h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <h1 className="font-semibold text-4xl text-center">Our Services</h1>
            <p className="text-center">
              Transform your brand with our innovative digital solutions that
              captivate and engage your audience.
            </p>
          </div>
          <Image
            src="/bg-service.svg"
            alt=""
            width={1200}
            height={280}
            className="w-full absolute h-full blend-mode-multiply z-10 top-0 object-cover"
          />
          <div className="bg-[url('/hero.svg')] absolute w-full h-full" />
        </div>
        <div className="w-full flex-col flex h-full">
          <div className="grid grid-cols-3 h-full w-full">
            <CardServices />
            <CardServices />
            <CardServices />
          </div>
        </div>
      </Section>

      <Section id="Services" className="h-full">
        <div className="h-[280px] w-full bg-[#ACFF24] bg-opacity-20 relative">
          <div className="flex flex-col gap-4 justify-center items-center h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <h1 className="font-semibold text-4xl text-center">
              Why Choose SquareUp?
            </h1>
            <p className="text-center">
              Transform your brand with our innovative digital solutions that
              captivate and engage your audience.
            </p>
          </div>
          <Image
            src="/bg-service.svg"
            alt=""
            width={1200}
            height={280}
            className="w-full absolute h-full blend-mode-multiply z-10 top-0 object-cover"
          />
          <div className="bg-[url('/hero.svg')] absolute w-full h-full" />
        </div>
        <div className="w-full flex-col flex h-full">
          <div className="grid grid-cols-2 h-full w-full">
            <CardServices />
            <CardServices />
            <CardServices />
            <CardServices />
          </div>
        </div>
      </Section>

      <Section id="Question" className="h-full">
        <div className="h-[280px] w-full bg-[#ACFF24] bg-opacity-20 relative">
          <div className="flex flex-col gap-4 justify-center items-center h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <h1 className="font-semibold text-4xl text-center">
              Why Choose SquareUp?
            </h1>
            <p className="text-center">
              Transform your brand with our innovative digital solutions that
              captivate and engage your audience.
            </p>
          </div>
          <Image
            src="/bg-service.svg"
            alt=""
            width={1200}
            height={280}
            className="w-full absolute h-full blend-mode-multiply z-10 top-0 object-cover"
          />
          <div className="bg-[url('/hero.svg')] absolute w-full h-full" />
        </div>
        <div className="w-full flex-col flex h-full">
          <div className="grid grid-cols-2 h-full w-full">
            <CardServices />
            <CardServices />
            <CardServices />
            <CardServices />
          </div>
        </div>
      </Section>

      <Section id="Services" className="h-full">
        <div className="h-[280px] w-full bg-[#ACFF24] bg-opacity-20 relative">
          <div className="flex flex-col gap-4 justify-center items-center h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <h1 className="font-semibold text-4xl text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-center">
              Still you have any questions? Contact our Team via
              hello@squareup.com
            </p>
          </div>
          <Image
            src="/bg-service.svg"
            alt=""
            width={1200}
            height={280}
            className="w-full absolute h-full blend-mode-multiply z-10 top-0 object-cover"
          />
          <div className="bg-[url('/hero.svg')] absolute w-full h-full" />
        </div>

        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-full h-full">
            <CardQuestion
              question="What services does SquareUp provide?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="01"
            />
            <CardQuestion
              question="What services does SquareUp provide?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="02"
            />
            <CardQuestion
              question="What services does SquareUp provide?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="03"
            />
            <CardQuestion
              question="What services does SquareUp provide?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="04"
            />
            <CardQuestion
              question="Do you offer ongoing support and maintenance after the project is completed?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="05"
            />
          </div>
          <div className="flex flex-col w-full h-full">
            <CardQuestion
              question="Do you offer ongoing support and maintenance after the project is completed?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="06"
            />
            <CardQuestion
              question="Do you offer ongoing support and maintenance after the project is completed?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="07"
            />
            <CardQuestion
              question="Do you offer ongoing support and maintenance after the project is completed?"
              reply="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
              count="08"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
