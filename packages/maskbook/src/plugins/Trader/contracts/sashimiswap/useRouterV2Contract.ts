import type { AbiItem } from 'web3-utils'
import RouterV2ABI from '../../../../../abis/RouterV2.json'
import { useContract } from '../../../../web3/hooks/useContract'
import { useConstant } from '../../../../web3/hooks/useConstant'
import { TRADE_CONSTANTS } from '../../constants'
import type { RouterV2 } from '../../../../contracts/RouterV2'

export function useRouterV2Contract() {
    const address = useConstant(TRADE_CONSTANTS, 'SASHIMISWAP_ROUTER_ADDRESS')
    return useContract<RouterV2>(address, RouterV2ABI as AbiItem[])
}
