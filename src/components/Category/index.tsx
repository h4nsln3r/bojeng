import classNames from 'classnames';
import './category.scss'

interface Props {
    children: React.ReactNode;
    category: any;
    targetCategory: string;
    setTargetCategory: (category: string) => void;
}

const Category = ({ category, targetCategory, setTargetCategory }: Props) => {

    const openCategoryPage = (category: string) =>
        targetCategory === category ?
            "category--open" :
            targetCategory !== "" && targetCategory !== category &&
            "category--closed"

    const onCategoryClick = (category: string) => setTargetCategory(category);

    console.log("targetCategory", targetCategory)

    return (
        <div className={
            classNames('category', `category__${category}`, openCategoryPage(category))}
            onClick={() => onCategoryClick(category)}>
            {category}
        </div>
    )
}

export default Category;