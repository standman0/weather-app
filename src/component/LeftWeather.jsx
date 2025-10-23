import React from 'react';
import Background from '../assets/images/bg-today-large.svg';

function LeftWeather() {
  const [weather, setWeather] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; // set in .env (Vite uses VITE_ prefix)
    if (!API_KEY) {
      setError('Missing VITE_OPENWEATHER_API_KEY in environment');
      setLoading(false);
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Berlin,de&units=metric&appid=${API_KEY}`;


    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch weather');
        return res.json();
      })
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  
  const formatLocalDate = (dt, tz) => {
    if (!dt && dt !== 0) return '';
    const ms = (dt + (tz || 0)) * 1000;
    return new Date(ms).toLocaleString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className='w-[65%] flex flex-col pl-[100px] bg-[#03012dff] h-full'>
      <div
        className="bg-white p-[20px] w-[80%] rounded-[10px] h-[40vh] bg-cover bg-center flex "
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="p-6 text-white">
          {loading && <p>Loading weather…</p>}
          {error && <p className="text-red-400">{error}</p>}

          {weather && (
            <div className='flex w-full h-full justify-between'>
              <div className='w-[50%] justify-center flex-col mr-[19rem] items-center flex items-center gap-[15px]'>
                <h1 className="text-3xl text-[white] font-bold">Berlin, Germany</h1>
                <p className="text-sm text-[white] ">{formatLocalDate(weather.dt, weather.timezone)}</p>
              </div>
              <div className="mt-4 w-[50%] justify-center items-center flex items-center gap-[40px]">
                {weather?.weather?.[0]?.icon && (
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather?.[0]?.description ?? 'weather icon'}
                  />
                )}
                  <p className="text-[70px] text-[white] font-black font-semibold">
                    {typeof weather?.main?.temp === 'number' ? `${Math.round(weather.main.temp)}°C` : '—'}
                  </p>
                </div>
                
              </div>
            
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftWeather;
