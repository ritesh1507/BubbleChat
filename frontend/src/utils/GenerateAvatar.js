// const generateDiceBearAvataaars = (seed) =>
//   `https://avatars.dicebear.com/api/avataaars/${seed}.svg`;

// const generateDiceBearBottts = (seed) =>
//   `https://avatars.dicebear.com/api/bottts/${seed}.svg`;

// const generateDiceBearGridy = (seed) =>
//   `https://avatars.dicebear.com/api/gridy/${seed}.svg`;

const generateDiceBearMicah = (seed)=>
  `https://api.dicebear.com/9.x/micah/svg?seed=${seed}`;

const generateDiceBearAvataaars = (seed)=>
  `https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}`;

const generateDiceBearDylan = (seed)=>
  `https://api.dicebear.com/9.x/dylan/svg?seed=${seed}`;

export const generateAvatar = () => {
  const data = [];

  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearMicah(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearMicah(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAvataaars(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearDylan(Math.random());
    data.push(res);
  }
  return data;
};
