import { PrismaClient, Post, User, Comment } from '@prisma/client';
const prisma = new PrismaClient();

const postData: Post[] = [
  {
    id: 1,
    userId: 1,
    title: 'タイトル1',
    content: '内容1',
    publishAt: new Date(),
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 2,
    userId: 1,
    title: 'タイトル2',
    content: '内容2',
    publishAt: new Date(),
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 3,
    userId: 1,
    title: 'タイトル3',
    content: '内容3',
    publishAt: new Date(),
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
];

const userData: User[] = [
  {
    id: 1,
    name: 'ジョン',
  },
  {
    id: 2,
    name: 'マイケル',
  },
  {
    id: 3,
    name: 'ジョージ',
  },
];

const commentData: Comment[] = [
  {
    id: 1,
    postId: 1,
    userId: 1,
    content: 'コメント1',
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 2,
    postId: 1,
    userId: 2,
    content: 'コメント2',
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 3,
    postId: 1,
    userId: 3,
    content: 'コメント3',
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
  },
];

const doSeed = async () => {
  const result = [];
  for (const post of postData) {
    const createPosts = prisma.post.create({
      data: post,
    });
    result.push(createPosts);
  }
  for (const user of userData) {
    const createUsers = prisma.user.create({
      data: user,
    });
    result.push(createUsers);
  }
  for (const comment of commentData) {
    const createComments = prisma.comment.create({
      data: comment,
    });
    result.push(createComments);
  }
  return await prisma.$transaction(result);
};

const main = async () => {
  console.log(`Start seeding ...`);

  await doSeed();

  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
