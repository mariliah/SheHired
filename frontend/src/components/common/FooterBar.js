function FooterBar() {
  const year = new Date().getFullYear();
  return (
    <footer className='fixed bottom-0 w-full bg-crimson text-cream text-center py-2'>
      <div className='text-center flex-grow'>
        <span className='mr-4'>SheHired {year}</span>
        <span>Privacy policy</span>
      </div>
    </footer>
  );
}

export default FooterBar;
