export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Business = {
  __typename?: 'Business';
  businessService?: Maybe<Array<Maybe<BusinessService>>>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type BusinessService = {
  __typename?: 'BusinessService';
  descriptionOfService?: Maybe<Scalars['String']>;
  nameOfService?: Maybe<Scalars['String']>;
  priceOfService?: Maybe<Scalars['Float']>;
  timeOfService?: Maybe<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getBusinesses?: Maybe<Array<Maybe<Business>>>;
};
