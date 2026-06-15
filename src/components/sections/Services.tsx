import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useInView } from '../../hooks/useAnimation';
import { useTable } from '../../hooks/useContent';
import { FALLBACK_SERVICES } from '../../data/fallbackContent';
import { ICON_MAP, DEFAULT_ICON } from '../../lib/iconMap';

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card hover className="h-full group">
        <div className="w-12 h-12 mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold text-heading mb-3">{title}</h3>
        <p className="text-muted mb-4 leading-relaxed">{description}</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-auto group-hover:bg-transparent group-hover:text-primary"
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
        >
          Learn More
        </Button>
      </Card>
    </div>
  );
}

export function Services() {
  const { data: services } = useTable('services', FALLBACK_SERVICES);

  return (
    <Section id="services">
      <SectionHeader
        title="Our Services"
        subtitle="Comprehensive healthcare services designed to meet all your medical needs under one roof."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            icon={ICON_MAP[service.icon] ?? DEFAULT_ICON}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
