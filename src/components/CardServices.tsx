import { EffectRipple } from "@/components/Effects";
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface CardServicesProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
}

function CardServices({ className, ...rest }: CardServicesProps) {
  return (
    <div
      className={clsx(
        "p-10 border border-Grey-15 flex flex-col justify-between max-md:col-span-3 min-h-[510px]",
        className
      )}
      {...rest}
    >
      <div className="border p-5 border-Grey-15 w-[70px] h-[70px] rounded-2xl flex justify-center items-center card-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.315 1.625C21.9083 1.625 21.5108 1.74537 21.1724 1.97095L15.6702 5.63911C14.2596 6.57945 12.9775 7.68921 11.8504 8.9395C14.1408 10.0076 15.9923 11.8591 17.0603 14.1494C18.3106 13.0223 19.4204 11.7402 20.3607 10.3297L24.0289 4.82743C24.2545 4.48906 24.3748 4.0915 24.3748 3.68484C24.3748 2.54722 23.4526 1.625 22.315 1.625ZM13.3243 16.8186C14.0616 16.409 14.7707 15.955 15.4478 15.46C14.5598 13.2235 12.7763 11.44 10.5399 10.552C10.0448 11.2292 9.59081 11.9382 9.18119 12.6755L8.87946 13.2186C10.7607 13.7567 12.2431 15.2392 12.7812 17.1204L13.3243 16.8186ZM7.31233 14.625C5.06865 14.625 3.24983 16.4438 3.24983 18.6875C3.24983 19.585 2.5223 20.3125 1.62483 20.3125C1.58803 20.3125 1.55141 20.3113 1.51503 20.3089C1.21586 20.2891 0.930116 20.4357 0.771664 20.6902C0.613212 20.9447 0.607808 21.2658 0.757605 21.5255C1.73889 23.2269 3.57853 24.375 5.68733 24.375C8.82846 24.375 11.3748 21.8286 11.3748 18.6875C11.3748 16.4438 9.55601 14.625 7.31233 14.625Z"
            fill="#9EFF00"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-3.5">
        <h3 className="font-semibold text-2xl">Design</h3>

        <p className="text-left">
          At Squareup, our design team is passionate about creating stunning,
          user-centric designs that captivate your audience and elevate your
          brand. We believe that great design is not just about aesthetics; it s
          about creating seamless and intuitive user experiences.
        </p>
      </div>
      <EffectRipple>
        <button className="w-full py-3.5 font-medium text-sm bg-Grey-15 rounded-md">
          Learn More
        </button>
      </EffectRipple>
    </div>
  );
}

export { CardServices };
