import { SkeletonVariant } from '@/components/skeleton/types';
import { FeedWrapper, SkeletonTextWrapper } from './styles';
import Skeleton from '@/components/skeleton';

export default function Feed() {
	return (
		<>
			<FeedWrapper>
				<SkeletonTextWrapper>
					<Skeleton height={1.7} width={27} />
					<Skeleton height={1.1} width={30} />
					<Skeleton height={1.1} width={19} />
					<Skeleton height={1.1} width={27} />
				</SkeletonTextWrapper>
				<Skeleton height={10} width={15} variant={SkeletonVariant.IMG} />
			</FeedWrapper>
			<FeedWrapper>
				<Skeleton height={10} width={15} variant={SkeletonVariant.IMG} />
				<SkeletonTextWrapper>
					<Skeleton height={1.7} width={27} />
					<Skeleton height={1.1} width={30} />
					<Skeleton height={1.1} width={19} />
					<Skeleton height={1.1} width={27} />
				</SkeletonTextWrapper>
			</FeedWrapper>
			<FeedWrapper>
				<SkeletonTextWrapper>
					<Skeleton height={1.7} width={27} />
					<Skeleton height={1.1} width={30} />
					<Skeleton height={1.1} width={19} />
					<Skeleton height={1.1} width={27} />
				</SkeletonTextWrapper>
				<Skeleton height={10} width={15} variant={SkeletonVariant.IMG} />
			</FeedWrapper>
		</>
	);
}
