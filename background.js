var blocked = 2;


const defaultFilters = [
    "*://*.0001-cab8-4c8c-43de.reporo.net/*",
     "*://*.002-slq-470.mktoresp.com/*",
     "*://*.004-btr-463.mktoresp.com/*",
     "*://*.005.free-counters.co.uk/*",
     "*://*.006.free-counters.co.uk/*",
     "*://*.0075-7112-e7eb-f9b9.reporo.net/*",
     "*://*.007.free-counters.co.uk/*",
     "*://*.008.free-counters.co.uk/*",
     "*://*.009.bapi.adsafeprotected.com/*",
     "*://*.009-yli-241.mktoresp.com/*",
     "*://*.00b5-d72d-8252-a96c.reporo.net/*",
     "*://*.00f9-d59a-b75d-8898.reporo.net/*",
     "*://*.00v07c3k7o.kameleoon.eu/*",
     "*://*.010-knz-501.mktoresp.com/*",
     "*://*.011-ubx-120.mktoresp.com/*",
     "*://*.012.2o7.net/*",
     "*://*.014-clr-420.mktoresp.com/*",
     "*://*.023-ezk-120.mktoresp.com/*",
     "*://*.024f-c409-1d64-9c88.reporo.net/*",
     "*://*.026-yoz-259.mktoresp.com/*",
     "*://*.0271-842d-5a8b-d2c9.reporo.net/*",
     "*://*.028-mbr-250.mktoresp.com/*",
     "*://*.029-bnh-970.mktoresp.com/*",
     "*://*.02y7m1at09.mentalist.kameleoon.com/*",
     "*://*.035-lyw-022.mktoresp.com/*",
     "*://*.037-iqy-141.mktoresp.com/*",
     "*://*.037-mcx-531.mktoresp.com/*",
     "*://*.038-azf-323.mktoresp.com/*",
     "*://*.040-sms-890.mktoresp.com/*",
     "*://*.048-acr-930.mktoresp.com/*",
     "*://*.048c-ec4c-aad9-392a.reporo.net/*",
     "*://*.048-hld-130.mktoresp.com/*",
     "*://*.049-nhe-370.mktoresp.com/*",
     "*://*.049-oxj-466.mktoresp.com/*",
     "*://*.04fd-74b3-b2f6-c645.reporo.net/*",
     "*://*.053-mxj-131.mktoresp.com/*",
     "*://*.053-ztn-590.mktoresp.com/*",
     "*://*.054-znu-730.mktoresp.com/*",
     "*://*.056-jrw-730.mktoresp.com/*",
     "*://*.0596-e69c-b4e1-7284.reporo.net/*",
     "*://*.061-bgc-590.mktoresp.com/*",
     "*://*.064-crn-960.mktoresp.com/*",
     "*://*.065-dee-570.mktoresp.com/*",
     "*://*.065-hus-080.mktoresp.com/*",
     "*://*.069-alb-339.mktoresp.com/*",
     "*://*.06uy.tlnk.io/*",
     "*://*.0702-713a-a4ab-194b.reporo.net/*",
     "*://*.073d-ec44-52e9-dab2.reporo.net/*",
     "*://*.073-sfq-201.mktoresp.com/*",
     "*://*.074-hbw-141.mktoresp.com/*",
     "*://*.doubleclick.net/*",
	 "*://partner.googleadservices.com/*",
	 "*://*.googlesyndication.com/*",
	 "*://*.google-analytics.com/*",
 	 "*://creative.ak.fbcdn.net/*",
	 "*://*.adbrite.com/*",
	 "*://*.exponential.com/*",
	 "*://*.quantserve.com/*",
     "*://*.scorecardresearch.com/*",
     "*://*.074-uqx-410.mktoresp.com/*",
     "*://*.075-bck-310.mktoresp.com/*",
     "*://*.075-ksk-811.mktoresp.com/*",
     "*://*.076-wlp-880.mktoresp.com/*",
     "*://*.079-wyc-990.mktoresp.com/*",
     "*://*.07bvbumtw9.kameleoon.eu/*",
     "*://*.07da-c5ab-7697-fc0d.reporo.net/*",
     "*://*.07fc-7515-764e-d492.reporo.net/*",
     "*://*.081a-edc3-25e6-288e.reporo.net/*",
     "*://*.081-xbs-820.mktoresp.com/*",
     "*://*.083-gls-023.mktoresp.com/*",
     "*://*.083-hbs-820.mktoresp.com/*",
     "*://*.083-yje-211.mktoresp.com/*",
     "*://*.085-svr-790.mktoresp.com/*",
     "*://*.088-ivk-130.mktoresp.com/*",
     "*://*.0896-c1b9-ed40-acad.reporo.net/*",
     "*://*.089-igw-950.mktoresp.com/*",
     "*://*.090-hho-309.mktoresp.com/*",
     "*://*.092-ols-020.mktoresp.com/*",
     "*://*.0935-5457-9a1d-ce06.reporo.net/*",
     "*://*.093-mxc-460.mktoresp.com/*",
     "*://*.093-tqy-221.mktoresp.com/*",
     "*://*.094-dcs-290.mktoresp.com/*",
     "*://*.098-frb-840.mktoresp.com/*",
     "*://*.098-jtp-403.mktoresp.com/*",
     "*://*.09f6-ed22-122f-0caa.reporo.net/*",
     "*://*.0ab8-98d1-e900-9391.reporo.net/*",
     "*://*.0ad3-6ce3-f6a2-b295.reporo.net/*",
     "*://*.0bfn6.voluumtrk.com/*",
     "*://*.0blbku3esh.kameleoon.eu/*",
     "*://*.0c74-fb9d-12c1-051d.reporo.net/*",
     "*://*.0c79-5807-03c2-4ecd.reporo.net/*",
     "*://*.0cde-4e24-dcfb-ebd6.reporo.net/*",
     "*://*.0cfe-e814-fd2a-7ffc.reporo.net/*",
     "*://*.0d32-4c73-2e50-510d.reporo.net/*",
     "*://*.0e89-0316-2324-3228.reporo.net/*",
     "*://*.0f55-fb73-3513-2f82.reporo.net/*",
     "*://*.0f5d-15fb-d62d-8026.reporo.net/*",
     "*://*.0fc3-6b21-9cc2-d77f.reporo.net/*",
     "*://*.0fdc-5af4-6c2d-1d8a.reporo.net/*",
     "*://*.0.fls.doubleclick.net./*",
     "*://*.0md5e.voluumtrk.com/*",
     "*://*.0o4vyd7cqp.mentalist.kameleoon.com/*",
     "*://*.0qkt6um309.mentalist.kameleoon.com/*",
     "*://*.0sfzz.ouasflpydty21tf.bapb.gdn/*",
     "*://*.0tht.tlnk.io/*",
     "*://*.0zb6y.voluumtrk.com/*",
     "*://*.0ztnj.voluumtrk.com/*",
     "*://*.10034.engine.mobileapptracking.com/*",
     "*://*.10112.engine.mobileapptracking.com/*",
     "*://*.10148.engine.mobileapptracking.com/*",
     "*://*.10148.tlnk.io/*",
     "*://*.1016557.fls.doubleclick.net/*",
     "*://*.101-vix-260.mktoresp.com/*",
     "*://*.102284.measurementapi.com/*",
     "*://*.10284.engine.mobileapptracking.com/*",
     "*://*.10306.engine.mobileapptracking.com/*",
     "*://*.10310.engine.mobileapptracking.com/*",
     "*://*.10372.bapi.adsafeprotected.com/*",
     "*://*.103-ile-130.mktoresp.com/*",
     "*://*.103-qcf-311.mktoresp.com/*",
     "*://*.1044889.fls.doubleclick.net/*",
     "*://*.105-ign-300.mktoresp.com/*",
     "*://*.105-lyu-731.mktoresp.com/*",
     "*://*.1061.engine.mobileapptracking.com/*",
     "*://*.10624.engine.mobileapptracking.com/*",
     "*://*.106310.measurementapi.com/*",
     "*://*.10646.bapi.adsafeprotected.com/*",
     "*://*.10680.engine.mobileapptracking.com/*",
     "*://*.10684.engine.mobileapptracking.com/*",
     "*://*.10706.engine.mobileapptracking.com/*",
     "*://*.10712.engine.mobileapptracking.com/*",
     "*://*.10728.tlnk.io/*",
     "*://*.10744.engine.mobileapptracking.com/*",
     "*://*.1075.engine.mobileapptracking.com/*",
     "*://*.10764.engine.mobileapptracking.com/*",
     "*://*.10776.engine.mobileapptracking.com/*",
     "*://*.107-fms-070.mktoresp.com/*",
     "*://*.107-mxt-108.mktoresp.com/*",
     "*://*.*",
     "*://*.107-xel-280.mktoresp.com/*",
     "*://*.10806.engine.mobileapptracking.com/*",
     "*://*.10811.bapi.adsafeprotected.com  109184.112.2o7.net/*",
     "*://*.10930.engine.mobileapptracking.com/*",
     "*://*.10944.engine.mobileapptracking.com/*",
     "*://*.109-ovd-240.mktoresp.com/*",
     "*://*.11030.engine.mobileapptracking.com/*",
     "*://*.1104996.fls.doubleclick.net/*",
     "*://*.1111.admitad.com/*",
     "*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*"
    
    
    

]








chrome.webRequest.onBeforeRequest.addListener(

    function(details){

       
        return {cancel:true}
    
    },
    {  urls: defaultFilters },
    ["blocking"],
    
   
    onload = function (){

        var lengthOfBlocked = blocked;

            
      window.onclick = function (){
          blocked += 1;
      }

    
            
        
    
    
    document.getElementById('test1').innerHTML = lengthOfBlocked;
    }
    

)
