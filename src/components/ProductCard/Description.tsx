interface CartDescriptionProps {
  name: string;
  description: string;
}

export function Description({ name, description }: CartDescriptionProps) {
  return (
    <section>
      <h4 className="flex justify-center font-sans font-bold text-base-title text-lg pt-4 pb-2">
        {name}
      </h4>

      <p className="flex font-sans text-base-label text-xs text-center">
        {description}
      </p>
    </section>
  );
}
