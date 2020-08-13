import post from "../../modules/post";


const PostItem = ({ post }) => {
import PostList from './../../components/posts/PostList';
import loading from './../../modules/loading';
    const { publishedDate, user, tags, title, body, _id } = post;
    return (
        <PostItemBlock>
            <h2>
                <Link to={`/@${user.username}/${_id}`}>{title}</Link>
            </h2>
            <SubInfo
                username={user.username}
                publishedDate={new Date(publishedDate)}
            />
            <Tags tags={tags} />
            <p>{body}</p>
        </PostItemBlock>
    );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
    //에러 발생 시
    if (error) {
        return <PostListBlock>에러가 발생했습니다. </PostListBlock>;
    }
    return (
        <PostListBlock>
            <WritePostButtonWrapper>
                {showWriteButton && (
                    <Button cyan to="/write">
                        새 글 작성하기
                        </Button>
                )}
            </WritePostButtonWrapper>
            {/* 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
            {!loading && posts && (
                <div>
                    {posts.map(post => (
                        <PostItem post={post} key={post._id} />
                    ))}
                    </div>
            )}
            </PostListBlock>
    );
};

export default PostList;
    
