import { Row, Col, Switch, Checkbox, Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../../context/UserDataContext";
import { sessionOptions } from "../../../data/data";
import { fetchCurrency } from "../../../api/apiService";
import useFetch from "../../../hooks/useFetch";
import { CountryContext } from "../../../context/CountryContext";

export default function OrderCheckout() {
    const userDataContext = useContext(UserDataContext);
    const [activePlan, setActivePlan] = useState("");



    useEffect(() => {
        setActivePlan(userDataContext.formState.sessionType);
    }, [userDataContext]);



    const { country } = useContext(CountryContext); // Destructure `country` from the context

    useEffect(() => {
        const fetchCurrencyData = async () => {
            if (!country || !country.name) return; // Ensure `country` has a valid name

            try {
                const currency = await fetchCurrency(country.name); // Pass country name
                console.log("Fetched currency data:", currency);
            } catch (error) {
                console.error("Error fetching currency:", error.message);
            }
        };

        fetchCurrencyData();
    }, [country]); // Watch only `country` for changes



    return (
        <div className="px-4">
            <h4 className="font-bold text-1xl mb-4">Order Overview</h4>
            <Row>
                {sessionOptions.map((option) => (
                    <Col span={8} key={option.value}>
                        <div className={`border text-gray-500 p-4 
                                ${activePlan && activePlan == option.value && 'border-order_review'}`}>{option.label}</div>
                    </Col>
                ))}
            </Row>
            <div className="mt-4 mb-10">
                <Switch size="small" />
                <span className="font-bold ms-2">pay in advance - EXTRA 5% DISCOUNT</span>
            </div>
            <div className="flex justify-between mb-4 text-xs">
                <div className="text-label uppercase">number of sessions p.m</div>
                <div className="font-bold">8</div>
            </div>
            <div className="flex justify-between mb-4 text-xs">
                <div className="text-label uppercase">regular price</div>
                <div className="font-bold"><del>29.60 $</del></div>
            </div>
            <div className="flex justify-between mb-4 text-xs">
                <div className="text-label uppercase">your price</div>
                <div className="font-bold">28.40 $</div>
            </div>
            <div className="flex justify-between mb-4 text-xs text-discount">
                <div className="text-label uppercase">discount 4 %</div>
                <div className="font-bold text-xl">-9.60 $</div>
            </div>
            <hr className="bg-white h-[3px]" />
            <div className="flex justify-between my-4 text-total">
                <div className="text-label uppercase">setup fee</div>
                <div className="font-bold text-xl">00 $</div>
            </div>
            <div className="flex justify-between my-4 text-total">
                <div className="text-label uppercase">total p.m</div>
                <div className="font-bold text-xl">{activePlan * 28} $</div>
            </div>
            <div className="flex items-start gap-3">
                <Checkbox></Checkbox>
                <span className="t">
                    I accept all the <a href="#" className="text-link">terms & Conditions </a>
                    and understand my <a href="#" className="text-link">right of withdrawal</a>
                    as well the  circumstances that to repeal of the same
                </span>
            </div>
            <Button className="bg-gradient-to-r from-linear_btn1 to-linear_btn2 p-5 font-semibold text-white border-[#CCC] border-2 my-4 capitalize text-sm" block>
                order now
            </Button>
        </div>
    );
}
