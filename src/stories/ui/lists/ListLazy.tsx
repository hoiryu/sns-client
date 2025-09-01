import { List, ListProps } from 'react-window';

interface IProps<T extends object> extends ListProps<T> {}

/**
 * Windowing 기법
 * 전체 리스트에서 현재 뷰포트(윈도우)에 보이는 작은 창 부분만 렌더링
 * Virtualization 의 한 응용으로, 스크롤이 내려갈 때 필요한 데이터만 추가 fetch & 렌더링
 */
const ListLazy = <T extends object>({ ...props }: IProps<T>) => <List {...props} />;

export default ListLazy;
