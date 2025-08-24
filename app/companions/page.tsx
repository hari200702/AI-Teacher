import CompanionCard from '@/components/CompanionsCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';
  const { userId } = await auth();
  if(!userId) redirect('/sign-in');
  

  const companions = await getAllCompanions({ subject, topic });
  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">Filters</div>
          <SearchInput />
          <SubjectFilter />
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;