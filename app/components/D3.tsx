// import { useEffect } from "react";
// import * as d3 from "d3";

// const D3Page = () => {
//   useEffect(() => {
//     // Step 1: Veriyi tanımlıyoruz
//     // Burada bar (çubuk) grafik için kullanılacak veriyi tanımlıyoruz.
//     const data = [25, 30, 45, 60, 20];
//     const width = 500;  // Grafik alanının genişliği
//     const height = 300; // Grafik alanının yüksekliği

//     // Step 2: SVG konteynerini oluşturuyoruz
//     // D3.js ile SVG (Scalable Vector Graphics) alanı oluşturuyoruz ve özelliklerini ayarlıyoruz.
//     const svg = d3.select("#chart")
//                   .append("svg")  // Yeni bir SVG elemanı ekliyoruz
//                   .attr("width", width)  // SVG'nin genişliğini ayarlıyoruz
//                   .attr("height", height);  // SVG'nin yüksekliğini ayarlıyoruz

//     // X eksenini oluşturmak için bir ölçek belirliyoruz.
//     // `d3.scaleBand()` fonksiyonu ile band (şerit) tipi bir ölçek oluşturuyoruz.
//     // Burada veri indekslerini kullanarak X eksenini oluşturacağız.
//     const xScale = d3.scaleBand()
//                      .domain(d3.range(data.length).map(String))  // Verinin her bir elemanını string'e çeviriyoruz (d3.scaleBand() string değer bekler)
//                      .range([0, width])  // Ölçeğin aralığı (X ekseni boyunca yerleştirme)
//                      .padding(0.1);  // Barlar arasında boşluk (padding)

//     // Y eksenini oluşturmak için lineer bir ölçek belirliyoruz.
//     // `d3.scaleLinear()` ile sayısal değerler arasında bir ölçek belirliyoruz.
//     const yScale = d3.scaleLinear()
//                      .domain([0, d3.max(data) || 0])  // Verinin maksimum değerine göre Y ekseninin sınırlarını ayarlıyoruz
//                      .range([height, 0]);  // Y eksenini ters çeviriyoruz (yükseklik azaldıkça barlar alçalır)

//     // Step 4: Veriyi, dikdörtgenler (barlar) ile ilişkilendiriyoruz ve her birini oluşturuyoruz.
//     svg.selectAll("rect")  // SVG içinde tüm 'rect' (dikdörtgen) elemanlarını seçiyoruz
//        .data(data)  // Veri ile ilişkilendiriyoruz
//        .enter().append("rect")  // Veriye göre her bir dikdörtgeni ekliyoruz
//        .attr("x", (d, i) => {
//          // X konumunu hesaplıyoruz. Burada `i.toString()` ile veri indeksini string'e çeviriyoruz
//          const xValue = xScale(i.toString());  // xScale ile X koordinatını buluyoruz
//          return xValue !== undefined ? xValue : 0;  // Eğer xValue undefined ise 0 döndürüyoruz
//        })
//        .attr("y", d => {
//          // Y konumunu hesaplıyoruz. Barların yüksekliğine göre yerleşim yapıyoruz
//          const yValue = yScale(d);
//          return yValue !== undefined ? yValue : 0;  // Eğer yValue undefined ise 0 döndürüyoruz
//        })
//        .attr("width", xScale.bandwidth())  // Her bir barın genişliğini belirliyoruz
//        .attr("height", d => height - yScale(d))  // Barların yüksekliğini belirliyoruz. Y eksenindeki değeri kullanarak barın boyutunu ayarlıyoruz
//        .attr("fill", "steelblue");  // Barların rengini belirliyoruz

//     // Step 5: Eksenleri ekliyoruz (isteğe bağlı ancak faydalıdır)
//     // X eksenini ekliyoruz ve konumunu Y ekseninin altına yerleştiriyoruz
//     svg.append("g")
//        .attr("transform", `translate(0,${height})`)  // X eksenini altta göstermek için SVG'yi taşıyoruz
//        .call(d3.axisBottom(xScale));  // d3.axisBottom ile X eksenini ekliyoruz

//     // Y eksenini ekliyoruz
//     svg.append("g")
//        .call(d3.axisLeft(yScale));  // d3.axisLeft ile Y eksenini ekliyoruz
//   }, []);

//   return (
//     <div>
//       <h1>D3.js with Next.js</h1>
//       <div id="chart"></div>  {/* Grafik burada render edilecek */}
//     </div>
//   );
// };

// export default D3Page;