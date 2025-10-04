import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BankIcon,
  CreditCardIcon,
  DeviceMobileIcon,
  WalletIcon,
  GlobeHemisphereWestIcon,
} from "@phosphor-icons/react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
// import { AnimationTitle } from "./ui/animation-title";

export default function Features() {
  type DonationKey =
    | "afrimoney"
    | "orange-money"
    | "safulpay"
    | "cards"
    | "bank";

  type DonationOption = {
    id: DonationKey;
    title: string;
    short: string;
    content: string;
    Icon: React.ElementType;
    alt: string;
    logo: string;
    bankDetails?: {
      accountNumber: string;
      bankName: string;
      accountName: string;
    };
    placeholder?: boolean;
  };

  const donationOptions: DonationOption[] = [
    {
      id: "bank",
      title: "Bank Transfer",
      short: "Direct transfers to our account",
      content:
        "Prefer direct giving? Bank transfers provide reliable support for program continuity and long-term impact.",
      Icon: BankIcon,
      alt: "Donate via bank transfer",
      logo: "/logo/Ecobank-logo.svg",
      bankDetails: {
        accountNumber: "6340043066",
        bankName: "ECOBANK",
        accountName: "Goderich Community Gospel Choir",
      },
      placeholder: false,
    },
    {
      id: "afrimoney",
      title: "Afrimoney",
      short: "Fast mobile transfer in Sierra Leone",
      content:
        "Support our programs instantly via Afrimoney. It's quick, secure, and helps us reach more youth with training, mentorship, and opportunities.",
      Icon: DeviceMobileIcon,
      alt: "Donate with Afrimoney",
      logo: "/logo/afrimoney-logo.webp",
      placeholder: true,
    },
    {
      id: "orange-money",
      title: "Orange Money",
      short: "Convenient mobile money donations",
      content:
        "Donate through Orange Money to fund education support, digital skills training, and community initiatives across Sierra Leone.",
      Icon: WalletIcon,
      alt: "Donate with Orange Money",
      logo: "/logo/Orange_Money-logo.png",
      placeholder: true,
    },
    {
      id: "safulpay",
      title: "SafulPay",
      short: "Local online payments",
      content:
        "Use SafulPay for seamless local online payments. Your contribution accelerates entrepreneurship support and leadership development.",
      Icon: GlobeHemisphereWestIcon,
      alt: "Donate with SafulPay",
      logo: "/logo/safulpay-logo.png",
      placeholder: true,
    },
    {
      id: "cards",
      title: "Debit/Credit Cards",
      short: "Donate in any currency",
      content:
        "Give using Visa, Mastercard, or other cards in your preferred currency. Every gift fuels practical training and real opportunities.",
      Icon: CreditCardIcon,
      alt: "Donate with debit or credit cards",
      logo: "/logo/logo-words.png",
      placeholder: true,
    },
  ];

  const [activeItem, setActiveItem] = useState<DonationKey>("bank");
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      toast.success(`${type} copied to clipboard!`);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <section className="py-8">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as DonationKey)}
            className="w-full"
          >
            {donationOptions.map((opt) => (
              <AccordionItem key={opt.id} value={opt.id}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-base">
                    <opt.Icon className="size-4" />
                    {opt.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-muted-foreground mb-2">{opt.short}</p>
                      <p>{opt.content}</p>
                    </div>

                    {opt.placeholder ? (
                      <div className="bg-muted/50 rounded-lg p-4 border border-dashed">
                        <p className="text-sm text-muted-foreground text-center">
                          Payment details will be available soon.
                          <br />
                          Please contact us for immediate assistance.
                        </p>
                      </div>
                    ) : (
                      opt.bankDetails && (
                        <div className="bg-primary/5 rounded-lg p-4 border">
                          <h4 className="font-semibold mb-3 text-primary">
                            Bank Transfer Details
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">
                                Account Name:
                              </span>
                              <span className="font-medium">
                                {opt.bankDetails.accountName}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">
                                Account Number:
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-medium">
                                  {opt.bankDetails.accountNumber}
                                </span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 w-6 p-0"
                                  onClick={() =>
                                    copyToClipboard(
                                      opt.bankDetails!.accountNumber,
                                      "Account Number"
                                    )
                                  }
                                >
                                  {copied === "Account Number" ? (
                                    <Check className="h-3 w-3" />
                                  ) : (
                                    <Copy className="h-3 w-3" />
                                  )}
                                </Button>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">
                                Bank:
                              </span>
                              <span className="font-medium">
                                {opt.bankDetails.bankName}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]" />
            <div className="aspect-square bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-content`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md relative"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: 'url("/images/donation-bg.webp")',
                    }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Content Overlay */}
                  <div className="relative z-10 p-6 h-full flex-center space-y-6">
                    {/* Bank Details or Placeholder */}
                    {donationOptions.find((d) => d.id === activeItem)
                      ?.placeholder ? (
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xs">
                        <p className="text-white text-sm text-center">
                          Payment details will be available soon.
                          <br />
                          Please contact us for assistance.
                        </p>
                      </div>
                    ) : (
                      donationOptions.find((d) => d.id === activeItem)
                        ?.bankDetails && (
                        <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 space-y-6 max-w-xs">
                          <h4 className="text-white font-semibold text-center text-sm">
                            Bank Transfer Details
                          </h4>
                          <div className="space-y-3 text-xs">
                            <div className="text-center">
                              <div className="text-white/80 mb-1">
                                Account Name
                              </div>
                              <div className="text-white font-medium">
                                {
                                  donationOptions.find(
                                    (d) => d.id === activeItem
                                  )!.bankDetails!.accountName
                                }
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-white/80 mb-1">
                                Account Number
                              </div>
                              <div className="flex items-center justify-center gap-2">
                                <span className="text-white card-title">
                                  {
                                    donationOptions.find(
                                      (d) => d.id === activeItem
                                    )!.bankDetails!.accountNumber
                                  }
                                </span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-5 w-5 p-0 text-white hover:bg-white/20"
                                  onClick={() =>
                                    copyToClipboard(
                                      donationOptions.find(
                                        (d) => d.id === activeItem
                                      )!.bankDetails!.accountNumber,
                                      "Account Number"
                                    )
                                  }
                                >
                                  {copied === "Account Number" ? (
                                    <Check className="h-3 w-3" />
                                  ) : (
                                    <Copy className="h-3 w-3" />
                                  )}
                                </Button>
                              </div>
                            </div>
                            <div className="text-center text-white font-medium">
                              {
                                donationOptions.find(
                                  (d) => d.id === activeItem
                                )!.bankDetails!.bankName
                              }
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
