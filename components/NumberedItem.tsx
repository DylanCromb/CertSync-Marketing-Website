interface NumberedItemProps {
  number: string;
  title: string;
  description: string;
}

export default function NumberedItem({ number, title, description }: NumberedItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          {title}
        </h3>
        <p className="text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}