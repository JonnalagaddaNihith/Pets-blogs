export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
    {children}
  </div>
); 