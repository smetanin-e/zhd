import { UserRole } from '@/generated/prisma/enums';
import { generateSalt, hashPassword } from '@/shared/lib/auth/password-utils';
import { prisma } from '@/shared/lib/prisma';

async function generateData() {
  console.log('Start script');
  const user = {
    login: 'Admin',
    password: 'Mkoks2010',
    surname: 'Макеевкокс',
    firstName: 'Главный',
    lastName: 'Администратор',
    role: UserRole.ADMIN,
  };
  const salt = generateSalt();
  const hashedPassword = await hashPassword(user.password, salt);

  await prisma.user.create({
    data: {
      login: user.login,
      password: hashedPassword,
      surname: user.surname,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role as UserRole,
      salt,
    },
  });

  console.log('seed success');
}

async function clearData() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await clearData();
    await generateData();
  } catch (error) {
    console.error(error);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
