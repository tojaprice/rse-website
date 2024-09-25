"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  BoltIcon,
  ChatBubbleLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "EV Charger Installation",
    description:
      "Professional installation of electric vehicle chargers, ensuring safe and efficient setup at your home or business.",
    href: "/services/ev-charger-installation",
    icon: BoltIcon,
  },
  {
    name: "Rewiring",
    description:
      "Comprehensive electrical rewiring services to update or replace outdated systems, improving safety and performance.",
    href: "/services/rewiring",
    icon: BoltIcon,
  },
  {
    name: "New Build Electrical",
    description:
      "Full electrical installations for new builds, tailored to meet modern requirements and safety standards.",
    href: "/services/new-build-electrical",
    icon: BoltIcon,
  },
  {
    name: "Fault Finding",
    description:
      "Expert diagnosis and repair of electrical issues to keep your systems running smoothly and safely.",
    href: "/services/fault-finding",
    icon: BoltIcon,
  },
  {
    name: "Electrical Testing",
    description:
      "Thorough testing of electrical systems to ensure they are operating efficiently and in compliance with safety regulations.",
    href: "/services/electrical-testing",
    icon: BoltIcon,
  },
  {
    name: "Certification & Reports",
    description:
      "Accurate certification and detailed reports for electrical inspections, ensuring compliance with all regulations.",
    href: "#",
    icon: BoltIcon,
  },
  {
    name: "CCTV",
    description:
      "Installation of high-quality CCTV systems for enhanced security and peace of mind for your property.",
    href: "#",
    icon: BoltIcon,
  },
  {
    name: "Fire Alarm Installation",
    description:
      "Installation of reliable fire alarm systems to protect your property and meet safety requirements.",
    href: "#",
    icon: BoltIcon,
  },
  {
    name: "Emergency Lighting",
    description:
      "Installation of emergency lighting systems that ensure safe evacuation in case of power failure or emergencies.",
    href: "#",
    icon: BoltIcon,
  },
  {
    name: "Landscape Garden Lighting",
    description:
      "Custom outdoor lighting solutions to enhance the beauty and safety of your garden and landscape.",
    href: "#",
    icon: BoltIcon,
  },
];

const callsToAction = [
  { name: "Get quote", href: "/get-quote", icon: ChatBubbleLeftIcon },
  { name: "Contact us", href: "/contact", icon: PhoneIcon },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-rs-gray relative">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Site logo"
              src="/assets/rse-logo.webp"
              className="w-52 h-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-white"
              />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute left-0 right-0 m-auto top-full z-10 mt-0 w-screen max-w-[98%] overflow-hidden rounded-b-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 grid grid-cols-3">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-rs-blue"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <ArrowRightStartOnRectangleIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-600 group-hover:text-rs-blue"
                    />
                  </div>
                  <div className="flex-auto">
                    <a
                      href="/services"
                      className="block font-semibold text-gray-900"
                    >
                      All services
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">
                      A quick overview of all the services that we offer.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div> */}
            </PopoverPanel>
          </Popover>

          <a
            href="/get-quote"
            className="text-sm font-semibold leading-6 text-white"
          >
            Get a quote
          </a>
          <a
            href="/contact"
            className="text-sm font-semibold leading-6 text-white"
          >
            Contact
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <p className="text-rs-gray">logo here</p>
              {/* <img
                alt="logo"
                src="/assets/rse-logo.webp"
                className="w-42 h-auto"
              /> */}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-rs-gray"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Get quote
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
