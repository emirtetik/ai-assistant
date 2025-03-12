// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ChartPage = () => {
//   const [data, setData] = useState({
//     labels: ["January", "February", "March", "April", "May"],
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [65, 59, 100, 81, 56],
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.3,
//       },
//     ],
//   });

//   const updateData = () => {
//     setData({
//       labels: ["January", "February", "March", "April", "May"],
//       datasets: [
//         {
//           label: "My First Dataset",
//           data: [75, 69, 85, 91, 65], // Yeni veri seti
//           fill: false,
//           borderColor: "rgb(75, 192, 192)",
//           tension: 0.3,
//         },
//       ],
//     });
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "Monthly Data Overview",
//         font: { size: 18 },
//       },
//       tooltip: {
//         mode: "index",
//         intersect: false,
//       },
//       legend: { position: "top" },
//     },
//     scales: {
//       x: {
//         title: { display: true, text: "Months" },
//       },
//       y: {
//         title: { display: true, text: "Value" },
//         ticks: { stepSize: 10 },
//       },
//     },
//   };

//   return (
//     <div className="bg-white">
//       <button onClick={updateData}>Update Data</button>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default ChartPage;
