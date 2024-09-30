import {
  AcademicCapIcon,
  BanknotesIcon,
  BoltIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export interface GridListProps {
  list: Array<{ title: string; text: string; href: string; icon: string }>;
}

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ list }: GridListProps) {
  return (
    <div className="bg-white pb-24">
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 max-w-7xl mx-auto">
        {list.map((item, actionIdx) => (
          <div
            key={item.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === list.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === list.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-rs-blue",
            )}
          >
            <div>
              <span className="inline-flex rounded-lg p-3 ring-4 ring-white bg-rs-blue/20 text-rs-blue">
                {/* <action.icon aria-hidden="true" className="h-6 w-6" /> */}
                <BoltIcon aria-hidden="true" className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                <a href={item.href} className="focus:outline-none">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {item.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">{item.text}</p>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
