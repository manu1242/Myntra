

const Images = [
    { id: 1, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/qYO6lYY5_76cad06d8aa6417488ae806c0bf34cf6.jpg" },
    { id: 2, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/2WazKlEX_bcacd6d354ec483ab92c974af9b043d7.jpg" },
    { id: 3, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/H5U2UpBA_4091d85c93b843d3beeaf815aab68ca1.jpg" },
    { id: 4, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/8OwbWpMH_345b9c279a0541d8adb85604cb4a2ef5.jpg" },
    { id: 5, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/DyIpLAHD_a07ccde7f02a48e9ac2d2c35017ce01d.jpg" },
    { id: 6, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/jrYHJuiN_ff32e29e39a34a3faf67f62683908f3c.jpg" },
    { id: 7, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/GQXOltY1_ea4ccb5d3e3945cba4bfea4167d8433c.jpg" },
    { id: 8, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/W7wBugSI_96a0802fb8614274b2b1c1d0de38bd61.jpg" },
    { id: 9, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/dRzLqvkN_c803ab7fa5fe42d5a0e9f1e55827173c.jpg" },
    { id: 10, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/6QBmETey_5dd1c702760c407aaedc59a2d83f4506.jpg" },
    { id: 11, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/bascHSb0_4d8bb4cd13674c75a4f6fd764c2fd01d.jpg" },
    { id: 12, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/ziRMJzca_6764af044d8449768ed2c0a260703ec2.jpg" },
    { id: 13, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/XTJ4aU5d_8048fefc74f64e5b9eef0102a7b21cfa.jpg" },
    { id: 14, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/kBM102rv_cba26f65ea694db7ab7e3068d75242ab.jpg" },
    { id: 15, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/PVQ5Uabf_a3fc980bee224708be4f44fda5e743bf.jpg" },
    { id: 16, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/PiE0jJnj_4eaee0bd13d445b2b3297946b410b868.jpg" },
    { id: 17, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/Rsmk85KD_b196d0405c804a5586b81390b36fa3d9.jpg" },
    { id: 18, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/BS9frywJ_6117e982847c42fdb8e8a01620f17f31.jpg" },
    { id: 19, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/eiM0KoPM_4ddb340d50c2473388af65fd9c6381d5.jpg" },
    { id: 20, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/FSgB10By_d69049fefdab495d836bb1f940c35db0.jpg" },
    { id: 21, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/T0xqKgwq_58992031ed3645e1beba88d7956dca07.jpg" },
    { id: 22, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/3AbyR7k0_60a3e13e82204309a583af0e9d968d9b.jpg" },
    { id: 23, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/ImUw0wQe_ebf7f86cbb7f4543af15dcebaf3ba81a.jpg" },
    { id: 24, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/FECpaEFQ_01f6b7598009432db408124d3bf2fa38.jpg" },
    { id: 25, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/71Bfh7GN_7b16eeada9304e0498a636ee34b7b892.jpg" },
    { id: 26, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/m5wRVknk_f55e897ba6084f7398d5fd75a9d8d771.jpg" },
    { id: 27, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/5PWZLjrG_ddb36ed9f29a4f709c2a2e0fce06bec8.jpg" },
    { id: 28, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/HwlCF5xv_9682b7e9a8124a2f862607647251f619.jpg" },
    { id: 29, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/DS6vAmeH_c39a0bd6ef4e453a86d887bf5ce8bb4e.jpg" },
    { id: 30, url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/kvLuI2AI_fbac0681beb44fcaaacb9ac1e3795e1e.jpg" },

];


export default Images;


