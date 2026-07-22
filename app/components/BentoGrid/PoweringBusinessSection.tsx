import OrderDetailsItem from "./OrderDetailsItem";

export default function PoweringBusinessSection() {
  return (
    <div className="max-w-[780px] w-[58%] h-[600px] flex flex-col justify-between p-8 rounded-[20px] bg-white">
      <div>
        <h2 className="text-[#0B111E] font-bold text-[32px]">
          Powering business deliveries at scale
        </h2>
        <p className="mt-5 text-[#5A687C]">
          Streamline and manage multiple customer deliveries from one place with
          structured workflows, real-time tracking, and secure handovers.
        </p>
      </div>
      <div className="bg-[#F7FFE0] w-full h-[410px] rounded-[20px] flex items-end justify-center">
        {/* ORDER DETAILS DIV */}
        <div
          className="w-[76.4%] max-w-[546.8px] h-[365.3px] pt-7 px-6 pb-[10px] 
          bg-linear-to-b from-[#0B111E] to-[#131D34] rounded-t-[20px]"
        >
          <h2 className="text-[#BDEE2B] font-inter tracking-[1.2px] text-xs font-semibold">
            ORDER DETAILS
          </h2>
          <p className="text-[#C4F042] mb-5 font-plus-jarkata-sans font-bold text-lg">
            5 stops
          </p>

          <div className="w-full flex items-center justify-between text-white">
            <h2 className="text-sm font-semibold">2 of 5 completed</h2>
            <p className="font-medium text-xs">40%</p>
          </div>
          <div className="w-full grid grid-cols-5 mt-2 gap-x-1">
            <div className="h-2 rounded-full bg-[#6C7F33]" />
            <div className="h-2 rounded-full bg-[#6C7F33]" />
            <div className="h-2 rounded-full bg-[#DEFE7F]" />
            <div className="h-2 rounded-full bg-[#DEFE7F]" />
            <div className="h-2 rounded-full bg-[#DEFE7F]" />
          </div>
          {/* The Stops */}
          <div className="mt-5 flex flex-col gap-y-[10px]">
            <OrderDetailsItem
              deliveryId="QM-1042"
              status="DELIVERED"
              origin="Yaba"
              destination="Lekki"
            />
            <OrderDetailsItem
              deliveryId="QM-1043"
              status="IN PROGRESS"
              origin="Ikeja"
              destination="VI"
            />
            <OrderDetailsItem
              deliveryId="QM-1044"
              status="NOT STARTED"
              origin="Surulere"
              destination="Ajah"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
