import React from "react";
import './MapImage.css';


function MapImage() {
  const images = [
    { id: 1, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/CUleBEV4_96d0df84e84a460d8192b654d7d0a965.jpg" },
    { id: 2, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/0vVlcdBZ_c531a17a1fe64b1ab9415b2da2a90c6b.jpg" },
    { id: 3, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/JRLWIQLJ_5fbf405096af4aff87a5470de664c7c9.jpg" },
    { id: 4, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/Y1lxtvc0_29a084cf69d145b5bd970c215ad28750.jpg" },
    { id: 5, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/W5Veo2A3_765ddc438aa7434e928345c33ee07d9e.jpg" },
    { id: 6, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/fZgAOjSC_c9943b2413ab4f09bdc4c90ee4a845b3.jpg" },
    { id: 7, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/yJRUkSaL_6f03893b2793458eaa98a24053e4c43a.jpg" },
    { id: 8, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/HtJ5KJpn_9c0eb421812e470bb1fcab311e7c43b7.jpg" },
    { id: 9, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/n7JC3haK_6e4d1fb3bb46470ba3579aac244c6d5d.jpg" },
    { id: 10, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/BA2vPNiN_66ec7f1dfd6a4e488dec3679f5de9299.jpg" },
    { id: 11, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/3xWX2Ee2_d2fae131a4624e08913b6d101478b214.jpg" },
    { id: 12, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/WO81bf99_dad3c22e0f21443399b17551fa4e2ab0.jpg" },
    { id: 13, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/yRMLTaPB_47ce85bd2e8c4b7c8e85c57c0e006b10.jpg" },
    { id: 14, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/TtQjVWmV_c1ddea5bc8ef41139e904f40747f6bb3.jpg" },
    { id: 15, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/U9iLwuyu_d151a1801d854b29b2c0014285dfbb75.jpg" },
    { id: 16, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/78FfQYIC_919fcb5e0853428f91d82ff22abb0330.jpg" },
    { id: 17, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/5aHZB2wh_6161ac8548f541d9b90ab9344850274c.jpg" },
    { id: 18, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/seCe3V8V_eaea950e652841b79a85143dec4d45d6.jpg" },
    { id: 19, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/PcbGFVAl_c7cd44f5298c40b8a82858bf8fca8b39.jpg" },
    { id: 20, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/U2MwkBtF_0e77a85b9e3b42d2a78c6c476fd7b64e.jpg" },
    { id: 21, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/hzaFiQqp_caddd8261dae4ffbbbfdbd813c21c096.jpg" },
    { id: 22, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/pthvTXAF_4625344710f6482daf30cee28141f5c6.jpg" },
    { id: 23, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/2UQsls10_352ccbb9546f4b2381e0bffb6b1ed71f.jpg" },
    { id: 24, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/4GbMcp21_52ae87e26e5e40ed9357a5f73aa33d92.jpg" },
    { id: 25, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/a4NIkjWG_bb5e0f87a8c14fa28cd724b1273deb12.jpg" },
    { id: 26, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/XivYBaza_360b24e891ac4d8495c7187b09403087.jpg" },
    { id: 27, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/bfL2w4IW_265f455dcee84222ab715d4dc6aab644.jpg" },
    { id: 28, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/vE8kOjRa_18df9b4bfda34a7c89f49f68bb0ee7dc.jpg" },
    { id: 29, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/5Mv69GGv_e205e359362d40c79b92f33592b994a2.jpg" },
    { id: 30, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/XoAdw0cX_1cb144a7b3084578b85f2fa1c0f2fb0b.jpg" },
    
  ];
  const LastImages=[
    { id: 31, url: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/0tnBZllk_db9fa88203844f83ae24cfd705412251.jpg" },
    { id: 32, url: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/YWTVbHce_0b89a582cb454356ae9836c787eb03d5.jpg" },
    { id: 33, url: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/bNyCy8hz_d295b9e9a78f44d783dc599b5dc2c54f.jpg" }

    ]
  
  return (
    <div>
      <img style={{ width: "100%" }} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/10/1wqvRprC_0e225219af774106b60f6caebf52cc13.jpg" />




      <div className="container">

        {images.map((img) => (
          <img key={img} src={img.url} alt={`img-${img.id}`} className="img" />
        ))}
      </div>

      <div className="last-container">
        {LastImages.map((img)=>(
          <img key={img} src={img.url} alt={`img-${img.id}`} className="last"/>
        ))}
      </div>
      
    </div>

  );
}

export default MapImage;
