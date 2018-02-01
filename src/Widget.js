import React from 'react'

export const Widget = ({currency}) => (
    <div className="coinmarketcap-currency-widget"
        data-currency={currency}
        data-base="ETH"
        data-secondary="USD"
        data-ticker="true"
        data-rank="true"
        data-marketcap="true"
        data-volume="true"
        data-stats="ETH"
        data-statsticker="false">
    </div>
)
