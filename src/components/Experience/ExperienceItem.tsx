interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
}: ExperienceItemProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">
        {company} | {period}
      </p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ExperienceItem;
