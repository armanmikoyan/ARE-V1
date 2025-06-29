import { HeroWrapper, CTAWrapper, CTAContent, CTAButton, CTAText, CTAImg } from './styles';
import Space from '@/components/space';
import Skeleton from '@/components//skeleton';
import { SkeletonVariant } from '@/components/skeleton/types';

export default function Hero() {
	return (
		<HeroWrapper>
			<Space />
			<CTAWrapper>
				<CTAContent>
					<CTAText>
						<Skeleton width={15} height={1.3} />
						<Skeleton width={20} height={0.9} />
						<Skeleton width={14} height={0.9} />
						<Skeleton width={18} height={0.9} />
					</CTAText>
					<CTAButton>
						<Skeleton width={7} height={2} />
					</CTAButton>
				</CTAContent>
				<CTAImg>
					<Skeleton width={20} height={15} variant={SkeletonVariant.IMG} />
				</CTAImg>
			</CTAWrapper>
		</HeroWrapper>
	);
}
