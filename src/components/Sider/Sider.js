import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByValue } from "../../store/actions/exporterActions";
import styled from "styled-components";

const Sider = () => {
	const dispatch = useDispatch();
	const categories = useSelector(store => store.categoryReducer);
	const [categoryAct, setcategoryAct] = useState(0);

	const handleClickCategoryAct = id => {
		setcategoryAct(id);
	};

	const callDispatch = e => {
		const payload = { filterType: "category", data: e.target.innerText };
		dispatch(filterByValue(payload));
	};

	return (
		<CategoryList>
			<Title>CATEGORIES</Title>
			<Category
				active={0 === categoryAct}
				onClick={e => {
					handleClickCategoryAct(0);
					callDispatch(e);
				}}
			>
				All
			</Category>
			{categories &&
				categories.map(category => (
					<Category
						key={category.category_id}
						active={category.category_id === categoryAct}
						onClick={e => {
							handleClickCategoryAct(category.category_id);
							callDispatch(e);
						}}
					>
						{category.category_name}
					</Category>
				))}
		</CategoryList>
	);
};

const CategoryList = styled.ul`
	width: 200px;
	height: 450px;
	margin-bottom: 270px;
	line-height: 1.5;
	background-color: #ffffff;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	@media ${({ theme }) => theme.media.mobile} {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
	}
`;

const Title = styled.li`
	padding: 10px;
	color: #999;
`;

const Category = styled.li`
	position: relative;
	padding: 3px 10px;
	background: ${({ active }) => active && "#eee"};
	cursor: pointer;

	&:hover {
		background: #eee;
	}

	&:after {
		content: "";
		display: ${({ active }) => (active ? "block" : "none")};
		width: 13px;
		height: 10px;
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		background: url(/images/category_arrow.png) no-repeat center;
		background-size: 13px 10px;
	}
`;

export default Sider;
