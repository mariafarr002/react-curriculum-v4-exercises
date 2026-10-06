//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Maria Arredondo';
  const age = 22;
  const hobbies = ['reading', 'playing guitar', 'painting'];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi! My name is {name}. I'm {age} years old and excited to be learning
        React! I'm a freelance artist and I love to create art in my free time.
      </p>

      <h1>My Hobbies</h1>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
