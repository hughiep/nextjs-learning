export default function SsgPath() {}

// export default function Space({ space }) {
//   return (
//     <div>
//       <p>Space with id: {space.id}</p>
//       <p>Name: {space.name}</p>
//     </div>
//   );
// }

// export async function getStaticProps(ctx) {
//   console.log("========", ctx);

//   // const res = await fetch(`http://localhost:3000/api/space/${ctx.params.id}`);
//   const space = [];
//   console.log("====", space);

//   // Pass post data to the page via props
//   return { props: { space } };
// }

// export async function getStaticPaths() {
//   // const res = await fetch("http://localhost:3000/api/spaces");
//   const spaces = [];

//   const paths = spaces.map((space) => `/ssg/ssg-path/space/${space.id}`);

//   return { paths, fallback: false };
// }
