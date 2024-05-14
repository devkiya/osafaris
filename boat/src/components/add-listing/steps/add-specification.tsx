'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useAtom, useSetAtom } from 'jotai';
import { zodResolver } from '@hookform/resolvers/zod';
import CreateListingFooter from '@/components/footer/create-listing-footer';
import { storeAtom, stepAtom } from '@/components/add-listing/add-listing';
import Input from '@/components/ui/form-fields/input';
import Text from '@/components/ui/typography/text';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const EquipmentSchema = z
  .object({
    engine: z.string(),
    engineTorque: z.string(),
    fuelSystem: z.string(),
    boreStroke: z.string(),
    infotainmentSystem: z.string(),
    displacement: z.string(),
    fuelCapacity: z.string(),
    compressionRatio: z.string(),
    luggageCapacity: z.string(),
    fuelEconomy: z.string(),
    weight: z.string(),
  })
  .optional();

type EquipmentSchemaType = z.infer<typeof EquipmentSchema>;

export default function AddSpecification() {
  const router = useRouter();
  const setStep = useSetAtom(stepAtom);
  const [store, setStore] = useAtom(storeAtom);
  const [showContract, setShowContract] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    // @ts-ignore
  } = useForm<EquipmentSchemaType>({
    resolver: zodResolver(EquipmentSchema),
  });

  function handleSpecification(data: any) {
    setStore({
      ...store,
      specification: data,
    });
    setShowContract(true);
  }

  const handleContractClose = () => {
    setShowContract(false);
  };

  const handleContractSubmit = () => {
    setStep(7);
  };

  return (
    <div className="w-full md:w-[448px] xl:w-[648px]">
      {!showContract && (
        <form
          noValidate
          onSubmit={handleSubmit((data) => handleSpecification(data))}
        >
          <Text
            tag="h3"
            className="mb-4 text-lg !font-medium md:!text-xl lg:mb-6 2xl:!text-2xl"
          >
            Now, set your boat specifications
          </Text>
          <div className="grid grid-cols-1 gap-4">
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Engine
              </Text>
              <Input
                type="text"
                placeholder="Milwaukee-Eight 107"
                inputClassName="!h-10 lg:!h-12"
                {...register('engine')}
                error={errors?.engine?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Engine Torque
              </Text>
              <Input
                type="text"
                placeholder="111 ft-lb"
                inputClassName="!h-10 lg:!h-12"
                {...register('engineTorque')}
                error={errors?.engineTorque?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Fuel System
              </Text>
              <Input
                type="text"
                placeholder="Milwaukee-Eight 107"
                inputClassName="!h-10 lg:!h-12"
                {...register('fuelSystem')}
                error={errors?.fuelSystem?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Bore x Stroke
              </Text>
              <Input
                type="text"
                placeholder="111 ft-lb"
                inputClassName="!h-10 lg:!h-12"
                {...register('boreStroke')}
                error={errors?.boreStroke?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Infotainment System
              </Text>
              <Input
                type="text"
                placeholder="Milwaukee-Eight 107"
                inputClassName="!h-10 lg:!h-12"
                {...register('infotainmentSystem')}
                error={errors?.infotainmentSystem?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Displacement
              </Text>
              <Input
                type="text"
                placeholder="111 ft-lb"
                inputClassName="!h-10 lg:!h-12"
                {...register('displacement')}
                error={errors?.displacement?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Fuel Capacity
              </Text>
              <Input
                type="text"
                placeholder="Milwaukee-Eight 107"
                inputClassName="!h-10 lg:!h-12"
                {...register('fuelCapacity')}
                error={errors?.fuelCapacity?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Compression Ratio
              </Text>
              <Input
                type="text"
                placeholder="111 ft-lb"
                inputClassName="!h-10 lg:!h-12"
                {...register('compressionRatio')}
                error={errors?.compressionRatio?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Luggage Capacity -Volume
              </Text>
              <Input
                type="text"
                placeholder="Milwaukee-Eight 107"
                inputClassName="!h-10 lg:!h-12"
                {...register('luggageCapacity')}
                error={errors?.luggageCapacity?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Fuel Economy
              </Text>
              <Input
                type="text"
                placeholder="111 ft-lb"
                inputClassName="!h-10 lg:!h-12"
                {...register('fuelEconomy')}
                error={errors?.fuelEconomy?.message}
              />
            </div>
            <div className="gap-2 lg:grid lg:items-center xl:grid-cols-2">
              <Text className="mb-2 font-medium md:font-bold lg:mb-0">
                Weight
              </Text>
              <Input
                type="text"
                placeholder="Milwaukee-Eight 107"
                inputClassName="!h-10 lg:!h-12"
                {...register('weight')}
                error={errors?.weight?.message}
              />
            </div>
          </div>
          <CreateListingFooter onBack={() => setStep(5)} />
        </form>
      )}

      {showContract && (
        <div className="w-full md:w-[448px] xl:w-[648px]">
          <div className="p-4 rounded-lg bg-white shadow-md">
            <h3 className="mb-4 text-lg font-medium">Review & Sign Contract</h3>
            <p className="mb-6">
              Please review the following contract carefully. By clicking
              "Agree", you confirm that you have read and understood the terms of
              the contract and agree to be bound by them.
            </p>
            <div className="border border-gray-300 rounded-lg p-4 mb-4">
              {/* Add your contract content here */}
              {/* You can use a markdown component or a simple pre tag for display */}
              <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4">Boat Owner Agreement</h1>
        <p>
          This Agreement is entered into on [Date], between [Your Marketplace
          Name], a [Your Company Type] registered in [Your Country], hereinafter
          referred to as "Broker", and [Boat Owner Name], residing at [Boat Owner
          Address], hereinafter referred to as "Vessel Owner."
        </p>
        <ol className="list-decimal pl-6">
          <li>
            <strong>Definitions</strong> In this Agreement, the following terms
            shall have the meanings ascribed to them:
            <ol className="list-disc ml-8">
              <li>
                <strong>Broker:</strong> Refers to [Your Marketplace Name],
                acting as an intermediary for sourcing clients interested in water
                sports activities and excursions.
              </li>
              <li>
                <strong>Vessel Owner:</strong> Refers to [Boat Owner Name], the
                registered owner of the vessel(s) described in Schedule A.
              </li>
              <li>
                <strong>Parties:</strong> Refers collectively to the Broker and
                the Vessel Owner, and "Party" refers to either of them as the
                context may require.
              </li>
            </ol>
          </li>
          <li>
            <strong>Cooperation Agreement</strong>
            <ol className="list-disc ml-8">
              <li>
                The Vessel Owner acknowledges that the Broker is an agent
                specializing in sourcing clients for water sports activities and
                excursions.
              </li>
              <li>
                The Vessel Owner agrees to collaborate with the Broker to list and
                arrange water sports activities for clients sourced by the Broker.
              </li>
            </ol>
          </li>
          <li>
            <strong>Independent Contractor</strong>
            <ol className="list-disc ml-8">
              <li>
                Both Parties agree to act as independent contractors. This
                Agreement does not create any employment relationship,
                partnership, or joint venture between the Broker and the Vessel
                Owner.
              </li>
            </ol>
          </li>
          <li>
            <strong>Broker's Obligations</strong>
            <ol className="list-disc ml-8">
              <li>
                The Broker shall:
                <ol className="list-decimal ml-8">
                  <li>Act in good faith towards the Vessel Owner.</li>
                  <li>
                    Use best efforts to procure clients for water sports
                    activities, adhering to the terms and conditions outlined
                    herein and in Schedule B.
                  </li>
                  <li>
                    Provide accurate information to clients regarding the
                    vessels, activities, and safety measures.
                  </li>
                  <li>
                    Comply with sound commercial principles in all client
                    relations.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <strong>Vessel Owner's Obligations</strong>
            <ol className="list-disc ml-8">
              <li>
                Throughout the term of this contract, the Vessel Owner shall:
                <ol className="list-decimal ml-8">
                  <li>
                    Provide the Broker with all relevant information regarding
                    the vessel(s), crew, and prospective activities.
                  </li>
                  <li>
                    Refrain from directly engaging with clients introduced by the
                    Broker during the contract term and for three years following
                    termination or expiration.
                  </li>
                  <li>
                    Ensure the vessels are insured, seaworthy, adequately fueled,
                    and manned with competent crew and safety equipment as per
                    Schedule C.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <strong>Fees and Remuneration</strong>
            <ol className="list-disc ml-8">
              <li>
                Prior to marketing services to clients, the Broker and the Vessel
                Owner shall agree on the activity details, including price per
                client and duration.
              </li>
              <li>
                The Broker shall procure clients at the best possible price,
                remitting a deposit to the Vessel Owner at least seven days before
                the scheduled activity, with the remaining payment made upon
                completion of the activity.
              </li>
              <li>
                The Broker shall deduct a commission of 15% from the total
                booking amount for each confirmed booking made through the
                Platform.
              </li>
            </ol>
          </li>
          <li>
            <strong>Cancellation</strong>
            <ol className="list-disc ml-8">
              <li>
                The Broker may cancel an activity up to seven days before the
                scheduled date. In case of cancellation within seven days, the
                Broker shall compensate the Vessel Owner for incurred expenses
                upon proof of expenditure.
              </li>
            </ol>
          </li>
          <li>
            <strong>Compliance with Laws and Regulations</strong>
            <ol className="list-disc ml-8">
              <li>
                The Vessel Owner shall ensure compliance with all applicable
                laws, regulations, and safety standards governing the operation of
                water sports activities.
              </li>
              <li>
                The Vessel Owner shall maintain all necessary licenses, permits,
                and certifications required for the operation of water sports
                activities and shall provide copies of such documents to the
                Broker upon request.
              </li>
            </ol>
          </li>
          <li>
            <strong>Indemnification</strong>
            <ol className="list-disc ml-8">
              <li>
                The Vessel Owner agrees to indemnify and hold harmless the Broker
                from any claims, liabilities, damages, losses, costs, or expenses
                arising out of or related to the Vessel Owner's breach of this
                Agreement or negligence in the operation of the vessels.
              </li>
            </ol>
          </li>
          <li>
            <strong>Confidentiality</strong>
            <ol className="list-disc ml-8">
              <li>
                Both Parties shall maintain the confidentiality of any
                proprietary or sensitive information disclosed during the course of
                their collaboration under this Agreement.
              </li>
            </ol>
          </li>
          <li>
            <strong>Client Disputes</strong>
            <ol className="list-disc ml-8">
              <li>
                In the event of any dispute arising between a client and Vessel
                Owner regarding a booking made through the Platform, Vessel Owner
                agrees to cooperate fully with the Broker in resolving the dispute
                in a timely and efficient manner.
              </li>
              <li>
                Vessel Owner shall provide all necessary documentation and
                information requested by the Broker to facilitate the resolution of
                the dispute.
              </li>
            </ol>
          </li>
          <li>
            <strong>Marketing and Promotion</strong>
            <ol className="list-disc ml-8">
              <li>
                Vessel Owner grants the Broker the right to use images,
                descriptions, and other promotional materials related to the
                listed vessels and activities for marketing and promotional
                purposes on the Platform and other marketing channels operated by
                the Broker.
              </li>
              <li>
                Vessel Owner shall not engage in any marketing or promotional
                activities that may negatively impact the reputation or image of
                the Broker or the Platform without prior written consent from the
                Broker.
              </li>
            </ol>
          </li>
          <li>
            <strong>Record Keeping and Reporting</strong>
            <ol className="list-disc ml-8">
              <li>
                Vessel Owner shall maintain accurate records of all bookings,
                payments, expenses, and other relevant financial transactions
                related to the provision of water sports activities.
              </li>
              <li>
                Vessel Owner agrees to provide regular reports to the Broker upon
                request, detailing the status of bookings, financial
                transactions, and any other relevant information pertaining to the
                performance of this Agreement.
              </li>
            </ol>
          </li>
          <li>
            <strong>Insurance Coverage</strong>
            <ol className="list-disc ml-8">
              <li>
                Vessel Owner shall obtain and maintain all necessary licenses,
                permits, and comprehensive liability insurance coverage required
                for the operation of water sports activities. Such insurance
                coverage shall include coverage for clients participating in the
                activities and shall name the Broker as an additional insured
                party.
              </li>
            </ol>
          </li>
          <li>
            <strong>Termination</strong>
            <ol className="list-disc ml-8">
              <li>
                Either party may terminate this Agreement upon written notice to
                the other party in the event of a material breach of the terms and
                conditions herein.
              </li>
            </ol>
          </li>
          <li>
            <strong>Governing Law and Jurisdiction</strong>
            <ol className="list-disc ml-8">
              <li>
                This Agreement shall be governed by and construed in accordance
                with the laws of [Your Country]. Any disputes arising under this
                Agreement shall be subject to the exclusive jurisdiction of the
                courts of [Your Country].
              </li>
            </ol>
          </li>
          <li>
            <strong>Entire Agreement</strong>
            <ol className="list-disc ml-8">
              <li>
                This Agreement constitutes the entire agreement between the
                parties regarding the provision of water sports activities and
                supersedes all prior agreements and understandings, whether
                written or oral.
              </li>
            </ol>
          </li>
          <li>
            <strong>Amendment</strong>
            <ol className="list-disc ml-8">
              <li>
                Any amendments or modifications to this Agreement must be made in
                writing and signed by both parties.
              </li>
            </ol>
          </li>
        </ol>
        
      </div>
    </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleContractClose}
                className="px-4 py-2 mr-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleContractSubmit}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}