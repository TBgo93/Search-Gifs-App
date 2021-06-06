import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(() => import('./index'))

export default function LazyTrendingSearches() {
    const {isNearScreen, fromRef} = useNearScreen('-30px')
    
    return <div ref={fromRef}>
        <Suspense fallback={null}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}