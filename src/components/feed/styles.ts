import styled from '@emotion/styled';
import sx from '@/packages/styler';

export const FeedWrapper = styled.section(
	sx({
		margin: '2rem',
		padding: '2rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '1rem',
		flexDirection: {
			_: 'row',
			'<md': 'column',
		},
	}),
);

export const SkeletonTextWrapper = styled.div(
	sx({
		display: 'flex',
		flexDirection: 'column',
	}),
);
