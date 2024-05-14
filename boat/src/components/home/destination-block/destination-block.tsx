'use client';

import { destinations } from 'public/data/destinations';
import { useTimeout } from '@/hooks/use-timeout';
import BlockLoader from '@/components/ui/loader/block-loader';
import Section from '@/components/ui/section';
import DestinationMasonry from './destination-masonry';
import DestinationGrid from './destination-grid';
import DestinationCarousel from './destination-carousel';

export default function DestinationBlock() {
  const { state } = useTimeout();

  return (
    <Section
      title="Top Ocean Safari Destinations"
      description="Unsatiable it considered invitation he traveling insensible."
      className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16"
      headerClassName="mb-4 md:mb-5 xl:mb-6"
    >
      {!state && <BlockLoader />}
      {state && <DestinationCarousel data={destinations} />}
    </Section>
  );
}
