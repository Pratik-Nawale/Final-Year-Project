import React, { useState, useEffect } from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import GoogleMapReact from 'google-map-react';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import LocationOnIcon from '@mui/icons-material/LocationOn';

let gymData = [
  {
    id: "1",
    name: "TK MMA",
    latitude: 25.089779597788468,
    longitude: 55.15274596790836
  },
  {
    id: "2",
    name: "Muscle Fitness Club",
    latitude: 18.6767891586867,
    longitude: 73.7117627200836
  },
  {
    id: "3",
    name: "Sk-fitness",
    latitude: 18.680489884870767,
    longitude: 73.71262103358538,
  },
  {
    id: "4",
    name: "Ashok Birangal's Gym",
    latitude: 18.68252259953992,
    longitude: 73.71429473206184,
  },
  {
    id: "5",
    name: "Pro fitness",
    latitude: 18.677766008867188,
    longitude: 73.72257739341056
  },
  {
    id: "6",
    name: "UNITY FIT CLUB",
    latitude: 18.675651925769994,
    longitude: 73.72562438294466
  },
  {
    id: "7",
    name: "Swapnil's Intra Fitness",
    latitude: 18.671996124051482,
    longitude: 73.72542250098186
  },
  {
    id: "8",
    name: "Fit In Fitness Club",
    latitude: 18.67097970664382,
    longitude: 73.72949945880917
  },
  {
    id: "9",
    name: "My Coach Gymnasium",
    latitude: 18.67276859720611,
    longitude: 73.7311302419401
  },
  {
    id: "10",
    name: "Rakesh gym",
    latitude: 18.673215816897468,
    longitude: 73.73143064935894
  },
  {
    id: "11",
    name: "RB FITNESS",
    latitude: 18.673378441947293,
    longitude: 73.73276102507101
  },
  {
    id: "12",
    name: "Metallic Gym",
    latitude: 18.682874311785078, 
    longitude: 73.83663205225925
  },
  {
    id: "13",
    name: "EnerGym - A High Energy Workout Zone",
    latitude: 18.663196785312294, 
    longitude: 73.80739082835603
  },
];

const Map = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [gyms, setGyms] = useState(gymData);
  const [selectedGym, setSelectedGym] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [distance, setDistance] = useState(40);

  useEffect(() => {
    const successCallback = (position) => {
      console.log(position.coords);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

    const errorCallback = (error) => {
      console.log("Error Getting Location:" + error.message);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []); // Empty dependency array to mimic componentDidMount behavior
  
  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const deg2rad = (deg) => { return deg * (Math.PI / 180) }

    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  } 

  const handleSearch = () => {
    // Filter gyms based on search query and distance
    const filteredGyms = gymData.filter(gym =>
      gym.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      getDistanceFromLatLonInKm(latitude, longitude, gym.latitude, gym.longitude) < distance
    );
    // Update gyms state with filtered gyms
    setGyms(filteredGyms);
  };

  const LocationMarker = () => (
    <LocationSearchingIcon color="primary" style={{ position: 'absolute', transform: 'translate(-50%, -50%)',fontSize: 40 }} />
  );

  const valuetext = (value) => `${value}km`;

  return (
    <div>
      <div style={{ backgroundColor: "#E0C350" }}>
        <Typography variant='h4' style={{ textAlign: "center" }}>
          G Y M F I N D E R
        </Typography>
        <TextField
          label="Search for academy.."
          variant='outlined'
          style={{ width: "100%" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Typography>
            Distance:
          </Typography>
          <Slider
            style={{ width: "75%" }}
            value={distance}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={5}
            min={0}
            max={50}
            onChange={(event, value) => setDistance(value)}
          />
        </div>

        <div>
          
          <Button variant='contained' style={{ width: "50%" ,alignItems: "center"}} onClick={handleSearch}>
            <SearchIcon />
            Search
          </Button>
        </div>
      </div>

      <div style={{ backgroundColor: "cyan", height: '80vh', position: 'relative' }}>
        <GoogleMapReact
          onClick={() => { setSelectedGym(null) }}
          bootstrapURLKeys={{ key: "AIzaSyDOiKYcfB-ayCqi3aIGR7DF4v2IFR0dpd4" }}
          defaultCenter={{
            lat: latitude || 0,
            lng: longitude || 0
          }}
          defaultZoom={14}
          center={{ lat: latitude || 0, lng: longitude || 0 }}
        >
          {gyms.map((gym) => (
            <LocationOnIcon
              key={gym.id}
              color="secondary"
              lat={gym.latitude}
              lng={gym.longitude}
              text={gym.name}
              onClick={() => setSelectedGym(gym)}
              style={{ fontSize: 50 }}
            />
          ))}
          {selectedGym && (
            <div style={{ position: 'absolute', top: selectedGym.latitude, left: selectedGym.longitude, backgroundColor: "blue", padding: 5, zIndex: 100 }}>
              <Typography>{selectedGym.name}</Typography>
            </div>
          )}
          <LocationMarker lat={latitude || 0} lng={longitude || 0} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
