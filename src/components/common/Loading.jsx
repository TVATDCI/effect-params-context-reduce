const Loading = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <span className="ml-3 text-text-muted">Loading...</span>
    </div>
  );
};

export default Loading;
