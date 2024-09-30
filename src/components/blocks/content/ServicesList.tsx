import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
export interface ServicesListProps {
  title: string;
  text: string;
  services: Array<{
    name: string;
    description: string;
    href: string;
    icon: string;
  }>;
}

export default function ServicesList({
  title,
  text,
  services,
}: ServicesListProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-rs-gray sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-rs-gray/90">{text}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-rs-gray">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-rs-blue">
                    {/* <service.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    /> */}
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a
                      href={service.href}
                      className="text-sm font-semibold leading-6 text-rs-blue"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
