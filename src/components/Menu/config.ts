import { MenuEntry } from '@pancakeswap-libs/uikit'

export const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '#',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'Exchange',
        href: '#',
      },
      {
        label: 'Liquidity',
        href: '#',
        status: {
          text: 'SOON',
          color: 'warning',
        },
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '#',
  //   status: {
  //     text: 'SOON',
  //     color: 'warning',
  //   },
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '#',
  //   status: {
  //     text: 'SOON',
  //     color: 'warning',
  //   },
  // },
  // {
  //   label: 'Prediction',
  //   icon: 'PredictionsIcon',
  //   href: 'https://pancakeswap.finance/prediction',
  //   status: {
  //     text: 'SOON',
  //     color: 'warning',
  //   },
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://pancakeswap.finance/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Website',
        href: 'https://cumrocket.io',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/cumrocket',
      },
      {
        label: 'Discord',
        href: 'https://discord.com/invite/cummies',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/CumRocketCrypto',
      },
      {
        label: 'Merch',
        href: 'https://shop.cumrocket.io/',
      },
    ],
  },
]

export default config
