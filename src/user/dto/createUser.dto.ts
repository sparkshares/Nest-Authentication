import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto{

    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly password: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
}