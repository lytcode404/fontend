import Image from "next/image";

const Overview = () => {
  return (
    <div className="py-11 ">
      <div className="grid grid-cols-2 mt-5 gap-y-5 sm:gap-y-0 lg:mx-auto lg:max-w-6xl">
        <div className="col-span-2 px-3 pb-3 order-3 dark::border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:order-none sm:border-b lg:border-l">
          <h1 className="font-extrabold text-xl text-slate-900">
            Financial Analysis
          </h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Financial dashboards are transforming decision-making for businesses
            by enabling the visualization of key data. Tools consolidate a
            companys Key performance indicators in one place while presenting a
            real-time snapshot of financial position, helping to inform future
            planning. Visuals that dashboards create not only makes it easier
            for everyone in the organization to understand exactly what is going
            on, but also highlights actionable steps that can be taken to boost
            performance.
          </p>
        </div>
        <div className="col-span-2 order-2 sm:col-span-1 sm:order-none">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full bg-gray-50"
            src="/desktop person.png"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full bg-gray-50"
            src="/about.png"
          />
        </div>
        <div className="col-span-2 px-3 pb-3 dark::border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:border-t lg:border-r">
          <h1 className="font-extrabold text-xl text-slate-900">Bookkeeping</h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Our bookkeeping service provides comprehensive financial management
            support for small businesses in the USA. We offer a range of
            bookkeeping services tailored to meet your specific needs. Our team
            of experts will work with you to ensure that your financial records
            are up-to-date with all relevant regulations. We use latest
            technology to consolidate your financial data in a place, providing
            you with a clear snapshot of your financial position. With our
            service, you can stay on top of your financial health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
