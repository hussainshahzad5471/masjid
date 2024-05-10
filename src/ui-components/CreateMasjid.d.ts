/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateMasjidInputValues = {
    name?: string;
    background?: string;
    generalpolicy?: string;
    management?: string;
    latitude?: number;
    longitude?: number;
    address?: string;
    phone?: string;
    fax?: string;
    nikah?: string;
    counselling?: string;
    janazah?: string;
    ruqya?: string;
    url1?: string;
    url2?: string;
};
export declare type CreateMasjidValidationValues = {
    name?: ValidationFunction<string>;
    background?: ValidationFunction<string>;
    generalpolicy?: ValidationFunction<string>;
    management?: ValidationFunction<string>;
    latitude?: ValidationFunction<number>;
    longitude?: ValidationFunction<number>;
    address?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    fax?: ValidationFunction<string>;
    nikah?: ValidationFunction<string>;
    counselling?: ValidationFunction<string>;
    janazah?: ValidationFunction<string>;
    ruqya?: ValidationFunction<string>;
    url1?: ValidationFunction<string>;
    url2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateMasjidOverridesProps = {
    CreateMasjidGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    background?: PrimitiveOverrideProps<TextFieldProps>;
    generalpolicy?: PrimitiveOverrideProps<TextFieldProps>;
    management?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    longitude?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    fax?: PrimitiveOverrideProps<TextFieldProps>;
    nikah?: PrimitiveOverrideProps<TextFieldProps>;
    counselling?: PrimitiveOverrideProps<TextFieldProps>;
    janazah?: PrimitiveOverrideProps<TextFieldProps>;
    ruqya?: PrimitiveOverrideProps<TextFieldProps>;
    url1?: PrimitiveOverrideProps<TextFieldProps>;
    url2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateMasjidProps = React.PropsWithChildren<{
    overrides?: CreateMasjidOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateMasjidInputValues) => CreateMasjidInputValues;
    onSuccess?: (fields: CreateMasjidInputValues) => void;
    onError?: (fields: CreateMasjidInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateMasjidInputValues) => CreateMasjidInputValues;
    onValidate?: CreateMasjidValidationValues;
} & React.CSSProperties>;
export default function CreateMasjid(props: CreateMasjidProps): React.ReactElement;
