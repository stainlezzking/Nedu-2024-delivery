import Bannersection from "@/components/builders/banner.component";
import Footer from "@/components/builders/footer.component";
import banner from "../assets/pages-banner/contact.png";
import FAQ from "@/components/builders/faq.component";
import Section from "@/components/builders/section.component";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const maxWidthConstant = "max-w-[1000px]";
import faq from "../faq.json";
import Tracker, { SkeletonTraker } from "@/components/builders/track.component";
import { useEffect, useState } from "react";
import schemaFormat from "@/components/utilities";
import { Skeleton } from "@/components/ui/skeleton";
import { getOneTracker } from "@/components/firebase";
import { Link, useParams } from "react-router-dom";
import { compareDesc, format, isBefore } from "date-fns";

/*
I WANT TO SHOW A SKELETON LOADING PAGE BEFORE,
4 stages
- your item arrived at our storage pack on
- your item left our post office on ..
- your item arrived at blah blah blah
*/

const desciption = function (index, name, date, location) {
  const choices = {
    1: `Your item was dropped at our office at exactly ${format(date, "H:m aaa")} ${format(
      date,
      "MMM d, yyyy"
    )} in ${location}. to be devlivered to ${name}`,
    2: `Your departed our office at ${format(date, "H:m aaa")} on ${format(date, "MMM d, yyyy")}.`,
    3: `Your item arrived at ${location} on ${format(date, "MMM d, yyyy")} at exactly ${format(date, "H:m aaa")}. `,
    4: `Your item arrived in receiver location at ${location} on ${format(date, "MMM d, yyyy")} at ${format(
      date,
      "H:m aaa"
    )}. waiting for  contact from receiver ${name} to deliver to the individual`,
  };
  return choices[index];
};

export default function Track() {
  const [tracker, setTracker] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [lastupdate, setLastupdate] = useState(null);
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(
    function () {
      getOneTracker(id).then((info) => {
        if (info.success && info.exists) setTracker(schemaFormat(info.data));
        if (info.success && !info.exists) setError("Package does not exists");
        if (!info.success) setError(info.message);
        if (info.success && info.exists) {
          // get and update last updated
          const schemaForm = schemaFormat(info.data);
          schemaForm.sort((t1, t2) => compareDesc(t1.date, t2.date));
          setLastupdate(schemaForm.find((track) => isBefore(track.date, Date.now())));
          console.log(schemaForm.find((track) => isBefore(track.date, Date.now())).date);
        }
        setName(info.name);
      });
    },
    [id]
  );

  const customSubmit = function (data) {
    navigate("/track/" + data.search);
  };
  return (
    <>
      <Bannersection topic="GPS Tracker" subtitle="Track" src={banner} />
      <Section className={"mx-auto " + maxWidthConstant}>
        <div className="max-w-[800px] mx-auto p-10 flex justify-between text-secondary">
          <h1 className="font-bold text-3xl">
            GSE Tracking<sup>®</sup>
          </h1>
          <div className="font-medium flex gap-x-3 items-center">
            <button>Tracking</button> /<button>FAQs</button>
          </div>
        </div>
        <div className="pt-10 font-bold text-secondary">
          <p>Tracking Number:</p>
          <h1 className="text-3xl">{id}</h1>
          <div className="flex justify-between max-w-[600px]">
            <button className="gap-x-2 mt-1 flex items-center">
              <svg className="w-4" viewBox="0 0 24 24" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M20.9983 10C20.9862 7.82497 20.8897 6.64706 20.1213 5.87868C19.2426 5 17.8284 5 15 5H12C9.17157 5 7.75736 5 6.87868 5.87868C6 6.75736 6 8.17157 6 11V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V15"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M3 10V16C3 17.6569 4.34315 19 6 19M18 5C18 3.34315 16.6569 2 15 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3.51839 3.82475 3.22937 4.69989 3.10149 6"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </g>
              </svg>
              <p className="text-sm">Copy</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 py-5 items-start">
          {tracker ? (
            <div className="p-5 space-y-2 col-span-1 max-w-[450px] bg-secondary/20 relative before:w-2 before:h-full before:bg-secondary before:absolute before:top-0 before:left-0">
              <h1 className="text-lg text-secondary font-medium">Latest Update</h1>
              <p className="text-secondary text-sm border-b border-b-secondary pb-5">
                {desciption(lastupdate.stage, name, lastupdate.date, lastupdate.location)}
              </p>
              <div className="mt-5">
                <h1 className="font-medium text-secondary">Get More Out of USPS Tracking:</h1>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <Skeleton className="h-[150px] rounded-md w-full" />
              <Skeleton className="h-4  w-full" />
            </div>
          )}
          {error && (
            <div className="w-screen h-screen fixed flex flex-col items-center justify-center z-30 top-0 left-0 bg-black/70">
              <p className="text-white text-lg font-medium"> An Error Occured </p>
              <h1 className="text-red-500 font-medium text-2xl">{error}</h1>
              <Link to="/" className="text-green-300  underline">
                Go back
              </Link>
            </div>
          )}
          {tracker && !error ? (
            <div className="col-span-1 px-5">
              {tracker.map((track, i) => (
                <Tracker key={i} track={track} />
              ))}
              <div className="ps-5 pb-6 relative text-secondary">
                <div className="absolute top-0 -left-[8px] w-5 h-5 bg-white flex items-center justify-center">
                  <span className="rounded-full bg-secondary block w-[60%] h-[60%]"> </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <h1 className="text-sm hover:text-secondary/70 font-medium cursor-pointer">Hide tracker </h1>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-span-1 px-5">
              {Array(4)
                .fill(1)
                .map((_, i) => (
                  <SkeletonTraker key={i} />
                ))}
              <div className="ps-5 pb-6 relative text-secondary">
                <div className="absolute top-0 -left-[8px] w-5 h-5 bg-white flex items-center justify-center">
                  <span className="rounded-full bg-secondary block w-[60%] h-[60%]"> </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <Skeleton className="h-4 w-[100px]" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>
      <Section>
        <h1 className="text-secondary text-lg">Search another package</h1>
        <form onSubmit={handleSubmit(customSubmit)}>
          <input
            type="text"
            {...register("search")}
            className="flex h-10 w-full rounded-md border bg-white px-3  ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 border-slate-500 text-xl py-7"
          />
        </form>
      </Section>
      <Section className="bg-[#F4F4F4]">
        <FAQ faq={faq} />
      </Section>
      <Footer />
    </>
  );
}
