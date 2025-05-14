/* This example requires Tailwind CSS v2.0+ */

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function IframeComponent() {
  return (
    <div className="relative bg-gray-50">
      <main>
        <div style={{ width: '100%', height: '100vh' }}>
          <iframe
            src="https://www.youtube.com/embed/9bZkp7q19f0"
            title="Youtube"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      </main>
    </div>
  );
}
