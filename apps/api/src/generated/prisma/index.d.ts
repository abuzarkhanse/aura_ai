
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Memory
 * 
 */
export type Memory = $Result.DefaultSelection<Prisma.$MemoryPayload>
/**
 * Model MemoryEmbedding
 * 
 */
export type MemoryEmbedding = $Result.DefaultSelection<Prisma.$MemoryEmbeddingPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model ModelRun
 * 
 */
export type ModelRun = $Result.DefaultSelection<Prisma.$ModelRunPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MessageRole: {
  SYSTEM: 'SYSTEM',
  USER: 'USER',
  ASSISTANT: 'ASSISTANT',
  TOOL: 'TOOL'
};

export type MessageRole = (typeof MessageRole)[keyof typeof MessageRole]


export const MemoryType: {
  SEMANTIC: 'SEMANTIC',
  EPISODIC: 'EPISODIC',
  PROCEDURAL: 'PROCEDURAL',
  PREFERENCE: 'PREFERENCE',
  PROJECT: 'PROJECT'
};

export type MemoryType = (typeof MemoryType)[keyof typeof MemoryType]


export const MemoryStatus: {
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED',
  DELETED: 'DELETED'
};

export type MemoryStatus = (typeof MemoryStatus)[keyof typeof MemoryStatus]


export const FeedbackRating: {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE'
};

export type FeedbackRating = (typeof FeedbackRating)[keyof typeof FeedbackRating]

}

export type MessageRole = $Enums.MessageRole

export const MessageRole: typeof $Enums.MessageRole

export type MemoryType = $Enums.MemoryType

export const MemoryType: typeof $Enums.MemoryType

export type MemoryStatus = $Enums.MemoryStatus

export const MemoryStatus: typeof $Enums.MemoryStatus

export type FeedbackRating = $Enums.FeedbackRating

export const FeedbackRating: typeof $Enums.FeedbackRating

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memory`: Exposes CRUD operations for the **Memory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memories
    * const memories = await prisma.memory.findMany()
    * ```
    */
  get memory(): Prisma.MemoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memoryEmbedding`: Exposes CRUD operations for the **MemoryEmbedding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemoryEmbeddings
    * const memoryEmbeddings = await prisma.memoryEmbedding.findMany()
    * ```
    */
  get memoryEmbedding(): Prisma.MemoryEmbeddingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelRun`: Exposes CRUD operations for the **ModelRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelRuns
    * const modelRuns = await prisma.modelRun.findMany()
    * ```
    */
  get modelRun(): Prisma.ModelRunDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Conversation: 'Conversation',
    Message: 'Message',
    Memory: 'Memory',
    MemoryEmbedding: 'MemoryEmbedding',
    Feedback: 'Feedback',
    ModelRun: 'ModelRun'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "conversation" | "message" | "memory" | "memoryEmbedding" | "feedback" | "modelRun"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Memory: {
        payload: Prisma.$MemoryPayload<ExtArgs>
        fields: Prisma.MemoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          findFirst: {
            args: Prisma.MemoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          findMany: {
            args: Prisma.MemoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>[]
          }
          create: {
            args: Prisma.MemoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          createMany: {
            args: Prisma.MemoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>[]
          }
          delete: {
            args: Prisma.MemoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          update: {
            args: Prisma.MemoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          deleteMany: {
            args: Prisma.MemoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>[]
          }
          upsert: {
            args: Prisma.MemoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPayload>
          }
          aggregate: {
            args: Prisma.MemoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemory>
          }
          groupBy: {
            args: Prisma.MemoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemoryCountArgs<ExtArgs>
            result: $Utils.Optional<MemoryCountAggregateOutputType> | number
          }
        }
      }
      MemoryEmbedding: {
        payload: Prisma.$MemoryEmbeddingPayload<ExtArgs>
        fields: Prisma.MemoryEmbeddingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemoryEmbeddingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryEmbeddingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemoryEmbeddingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryEmbeddingPayload>
          }
          findFirst: {
            args: Prisma.MemoryEmbeddingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryEmbeddingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemoryEmbeddingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryEmbeddingPayload>
          }
          findMany: {
            args: Prisma.MemoryEmbeddingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryEmbeddingPayload>[]
          }
          delete: {
            args: Prisma.MemoryEmbeddingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryEmbeddingPayload>
          }
          update: {
            args: Prisma.MemoryEmbeddingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryEmbeddingPayload>
          }
          deleteMany: {
            args: Prisma.MemoryEmbeddingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemoryEmbeddingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemoryEmbeddingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryEmbeddingPayload>[]
          }
          aggregate: {
            args: Prisma.MemoryEmbeddingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemoryEmbedding>
          }
          groupBy: {
            args: Prisma.MemoryEmbeddingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemoryEmbeddingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemoryEmbeddingCountArgs<ExtArgs>
            result: $Utils.Optional<MemoryEmbeddingCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      ModelRun: {
        payload: Prisma.$ModelRunPayload<ExtArgs>
        fields: Prisma.ModelRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload>
          }
          findFirst: {
            args: Prisma.ModelRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload>
          }
          findMany: {
            args: Prisma.ModelRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload>[]
          }
          create: {
            args: Prisma.ModelRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload>
          }
          createMany: {
            args: Prisma.ModelRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload>[]
          }
          delete: {
            args: Prisma.ModelRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload>
          }
          update: {
            args: Prisma.ModelRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload>
          }
          deleteMany: {
            args: Prisma.ModelRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload>[]
          }
          upsert: {
            args: Prisma.ModelRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRunPayload>
          }
          aggregate: {
            args: Prisma.ModelRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelRun>
          }
          groupBy: {
            args: Prisma.ModelRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelRunCountArgs<ExtArgs>
            result: $Utils.Optional<ModelRunCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    memory?: MemoryOmit
    memoryEmbedding?: MemoryEmbeddingOmit
    feedback?: FeedbackOmit
    modelRun?: ModelRunOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    conversations: number
    memories: number
    feedback: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | UserCountOutputTypeCountConversationsArgs
    memories?: boolean | UserCountOutputTypeCountMemoriesArgs
    feedback?: boolean | UserCountOutputTypeCountFeedbackArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    memories: number
    feedback: number
    modelRuns: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memories?: boolean | MessageCountOutputTypeCountMemoriesArgs
    feedback?: boolean | MessageCountOutputTypeCountFeedbackArgs
    modelRuns?: boolean | MessageCountOutputTypeCountModelRunsArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountMemoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountModelRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelRunWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    passwordHash: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    memories?: boolean | User$memoriesArgs<ExtArgs>
    feedback?: boolean | User$feedbackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    memories?: boolean | User$memoriesArgs<ExtArgs>
    feedback?: boolean | User$feedbackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      memories: Prisma.$MemoryPayload<ExtArgs>[]
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      passwordHash: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends User$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memories<T extends User$memoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$memoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedback<T extends User$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.conversations
   */
  export type User$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.memories
   */
  export type User$memoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    where?: MemoryWhereInput
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    cursor?: MemoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoryScalarFieldEnum | MemoryScalarFieldEnum[]
  }

  /**
   * User.feedback
   */
  export type User$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
    archivedAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
    archivedAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    summary: number
    createdAt: number
    updatedAt: number
    archivedAt: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    archivedAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    archivedAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    archivedAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    summary: string | null
    createdAt: Date
    updatedAt: Date
    archivedAt: Date | null
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "summary" | "createdAt" | "updatedAt" | "archivedAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      summary: string | null
      createdAt: Date
      updatedAt: Date
      archivedAt: Date | null
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly userId: FieldRef<"Conversation", 'String'>
    readonly title: FieldRef<"Conversation", 'String'>
    readonly summary: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
    readonly archivedAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    tokenCount: number | null
  }

  export type MessageSumAggregateOutputType = {
    tokenCount: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    role: $Enums.MessageRole | null
    content: string | null
    tokenCount: number | null
    model: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    role: $Enums.MessageRole | null
    content: string | null
    tokenCount: number | null
    model: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversationId: number
    role: number
    content: number
    tokenCount: number
    model: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    tokenCount?: true
  }

  export type MessageSumAggregateInputType = {
    tokenCount?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    tokenCount?: true
    model?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    tokenCount?: true
    model?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    tokenCount?: true
    model?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    tokenCount: number | null
    model: string | null
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    tokenCount?: boolean
    model?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    memories?: boolean | Message$memoriesArgs<ExtArgs>
    feedback?: boolean | Message$feedbackArgs<ExtArgs>
    modelRuns?: boolean | Message$modelRunsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    tokenCount?: boolean
    model?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    tokenCount?: boolean
    model?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    tokenCount?: boolean
    model?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "role" | "content" | "tokenCount" | "model" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    memories?: boolean | Message$memoriesArgs<ExtArgs>
    feedback?: boolean | Message$feedbackArgs<ExtArgs>
    modelRuns?: boolean | Message$modelRunsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
      memories: Prisma.$MemoryPayload<ExtArgs>[]
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
      modelRuns: Prisma.$ModelRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      role: $Enums.MessageRole
      content: string
      tokenCount: number | null
      model: string | null
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    memories<T extends Message$memoriesArgs<ExtArgs> = {}>(args?: Subset<T, Message$memoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedback<T extends Message$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Message$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    modelRuns<T extends Message$modelRunsArgs<ExtArgs> = {}>(args?: Subset<T, Message$modelRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'MessageRole'>
    readonly content: FieldRef<"Message", 'String'>
    readonly tokenCount: FieldRef<"Message", 'Int'>
    readonly model: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.memories
   */
  export type Message$memoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    where?: MemoryWhereInput
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    cursor?: MemoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoryScalarFieldEnum | MemoryScalarFieldEnum[]
  }

  /**
   * Message.feedback
   */
  export type Message$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Message.modelRuns
   */
  export type Message$modelRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
    where?: ModelRunWhereInput
    orderBy?: ModelRunOrderByWithRelationInput | ModelRunOrderByWithRelationInput[]
    cursor?: ModelRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelRunScalarFieldEnum | ModelRunScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Memory
   */

  export type AggregateMemory = {
    _count: MemoryCountAggregateOutputType | null
    _avg: MemoryAvgAggregateOutputType | null
    _sum: MemorySumAggregateOutputType | null
    _min: MemoryMinAggregateOutputType | null
    _max: MemoryMaxAggregateOutputType | null
  }

  export type MemoryAvgAggregateOutputType = {
    confidence: number | null
    importance: number | null
  }

  export type MemorySumAggregateOutputType = {
    confidence: number | null
    importance: number | null
  }

  export type MemoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sourceMessageId: string | null
    type: $Enums.MemoryType | null
    content: string | null
    confidence: number | null
    importance: number | null
    status: $Enums.MemoryStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sourceMessageId: string | null
    type: $Enums.MemoryType | null
    content: string | null
    confidence: number | null
    importance: number | null
    status: $Enums.MemoryStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemoryCountAggregateOutputType = {
    id: number
    userId: number
    sourceMessageId: number
    type: number
    content: number
    confidence: number
    importance: number
    status: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemoryAvgAggregateInputType = {
    confidence?: true
    importance?: true
  }

  export type MemorySumAggregateInputType = {
    confidence?: true
    importance?: true
  }

  export type MemoryMinAggregateInputType = {
    id?: true
    userId?: true
    sourceMessageId?: true
    type?: true
    content?: true
    confidence?: true
    importance?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemoryMaxAggregateInputType = {
    id?: true
    userId?: true
    sourceMessageId?: true
    type?: true
    content?: true
    confidence?: true
    importance?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemoryCountAggregateInputType = {
    id?: true
    userId?: true
    sourceMessageId?: true
    type?: true
    content?: true
    confidence?: true
    importance?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memory to aggregate.
     */
    where?: MemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memories to fetch.
     */
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memories
    **/
    _count?: true | MemoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoryMaxAggregateInputType
  }

  export type GetMemoryAggregateType<T extends MemoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMemory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemory[P]>
      : GetScalarType<T[P], AggregateMemory[P]>
  }




  export type MemoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryWhereInput
    orderBy?: MemoryOrderByWithAggregationInput | MemoryOrderByWithAggregationInput[]
    by: MemoryScalarFieldEnum[] | MemoryScalarFieldEnum
    having?: MemoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoryCountAggregateInputType | true
    _avg?: MemoryAvgAggregateInputType
    _sum?: MemorySumAggregateInputType
    _min?: MemoryMinAggregateInputType
    _max?: MemoryMaxAggregateInputType
  }

  export type MemoryGroupByOutputType = {
    id: string
    userId: string
    sourceMessageId: string | null
    type: $Enums.MemoryType
    content: string
    confidence: number
    importance: number
    status: $Enums.MemoryStatus
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MemoryCountAggregateOutputType | null
    _avg: MemoryAvgAggregateOutputType | null
    _sum: MemorySumAggregateOutputType | null
    _min: MemoryMinAggregateOutputType | null
    _max: MemoryMaxAggregateOutputType | null
  }

  type GetMemoryGroupByPayload<T extends MemoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoryGroupByOutputType[P]>
            : GetScalarType<T[P], MemoryGroupByOutputType[P]>
        }
      >
    >


  export type MemorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sourceMessageId?: boolean
    type?: boolean
    content?: boolean
    confidence?: boolean
    importance?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceMessage?: boolean | Memory$sourceMessageArgs<ExtArgs>
    embedding?: boolean | Memory$embeddingArgs<ExtArgs>
  }, ExtArgs["result"]["memory"]>

  export type MemorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sourceMessageId?: boolean
    type?: boolean
    content?: boolean
    confidence?: boolean
    importance?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceMessage?: boolean | Memory$sourceMessageArgs<ExtArgs>
  }, ExtArgs["result"]["memory"]>

  export type MemorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sourceMessageId?: boolean
    type?: boolean
    content?: boolean
    confidence?: boolean
    importance?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceMessage?: boolean | Memory$sourceMessageArgs<ExtArgs>
  }, ExtArgs["result"]["memory"]>

  export type MemorySelectScalar = {
    id?: boolean
    userId?: boolean
    sourceMessageId?: boolean
    type?: boolean
    content?: boolean
    confidence?: boolean
    importance?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sourceMessageId" | "type" | "content" | "confidence" | "importance" | "status" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["memory"]>
  export type MemoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceMessage?: boolean | Memory$sourceMessageArgs<ExtArgs>
    embedding?: boolean | Memory$embeddingArgs<ExtArgs>
  }
  export type MemoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceMessage?: boolean | Memory$sourceMessageArgs<ExtArgs>
  }
  export type MemoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceMessage?: boolean | Memory$sourceMessageArgs<ExtArgs>
  }

  export type $MemoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Memory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sourceMessage: Prisma.$MessagePayload<ExtArgs> | null
      embedding: Prisma.$MemoryEmbeddingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sourceMessageId: string | null
      type: $Enums.MemoryType
      content: string
      confidence: number
      importance: number
      status: $Enums.MemoryStatus
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["memory"]>
    composites: {}
  }

  type MemoryGetPayload<S extends boolean | null | undefined | MemoryDefaultArgs> = $Result.GetResult<Prisma.$MemoryPayload, S>

  type MemoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemoryCountAggregateInputType | true
    }

  export interface MemoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Memory'], meta: { name: 'Memory' } }
    /**
     * Find zero or one Memory that matches the filter.
     * @param {MemoryFindUniqueArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemoryFindUniqueArgs>(args: SelectSubset<T, MemoryFindUniqueArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Memory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemoryFindUniqueOrThrowArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MemoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryFindFirstArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemoryFindFirstArgs>(args?: SelectSubset<T, MemoryFindFirstArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryFindFirstOrThrowArgs} args - Arguments to find a Memory
     * @example
     * // Get one Memory
     * const memory = await prisma.memory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MemoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memories
     * const memories = await prisma.memory.findMany()
     * 
     * // Get first 10 Memories
     * const memories = await prisma.memory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memoryWithIdOnly = await prisma.memory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemoryFindManyArgs>(args?: SelectSubset<T, MemoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Memory.
     * @param {MemoryCreateArgs} args - Arguments to create a Memory.
     * @example
     * // Create one Memory
     * const Memory = await prisma.memory.create({
     *   data: {
     *     // ... data to create a Memory
     *   }
     * })
     * 
     */
    create<T extends MemoryCreateArgs>(args: SelectSubset<T, MemoryCreateArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memories.
     * @param {MemoryCreateManyArgs} args - Arguments to create many Memories.
     * @example
     * // Create many Memories
     * const memory = await prisma.memory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemoryCreateManyArgs>(args?: SelectSubset<T, MemoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memories and returns the data saved in the database.
     * @param {MemoryCreateManyAndReturnArgs} args - Arguments to create many Memories.
     * @example
     * // Create many Memories
     * const memory = await prisma.memory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memories and only return the `id`
     * const memoryWithIdOnly = await prisma.memory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MemoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Memory.
     * @param {MemoryDeleteArgs} args - Arguments to delete one Memory.
     * @example
     * // Delete one Memory
     * const Memory = await prisma.memory.delete({
     *   where: {
     *     // ... filter to delete one Memory
     *   }
     * })
     * 
     */
    delete<T extends MemoryDeleteArgs>(args: SelectSubset<T, MemoryDeleteArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Memory.
     * @param {MemoryUpdateArgs} args - Arguments to update one Memory.
     * @example
     * // Update one Memory
     * const memory = await prisma.memory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemoryUpdateArgs>(args: SelectSubset<T, MemoryUpdateArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memories.
     * @param {MemoryDeleteManyArgs} args - Arguments to filter Memories to delete.
     * @example
     * // Delete a few Memories
     * const { count } = await prisma.memory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemoryDeleteManyArgs>(args?: SelectSubset<T, MemoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memories
     * const memory = await prisma.memory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemoryUpdateManyArgs>(args: SelectSubset<T, MemoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memories and returns the data updated in the database.
     * @param {MemoryUpdateManyAndReturnArgs} args - Arguments to update many Memories.
     * @example
     * // Update many Memories
     * const memory = await prisma.memory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memories and only return the `id`
     * const memoryWithIdOnly = await prisma.memory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MemoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Memory.
     * @param {MemoryUpsertArgs} args - Arguments to update or create a Memory.
     * @example
     * // Update or create a Memory
     * const memory = await prisma.memory.upsert({
     *   create: {
     *     // ... data to create a Memory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memory we want to update
     *   }
     * })
     */
    upsert<T extends MemoryUpsertArgs>(args: SelectSubset<T, MemoryUpsertArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCountArgs} args - Arguments to filter Memories to count.
     * @example
     * // Count the number of Memories
     * const count = await prisma.memory.count({
     *   where: {
     *     // ... the filter for the Memories we want to count
     *   }
     * })
    **/
    count<T extends MemoryCountArgs>(
      args?: Subset<T, MemoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemoryAggregateArgs>(args: Subset<T, MemoryAggregateArgs>): Prisma.PrismaPromise<GetMemoryAggregateType<T>>

    /**
     * Group by Memory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemoryGroupByArgs['orderBy'] }
        : { orderBy?: MemoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Memory model
   */
  readonly fields: MemoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Memory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sourceMessage<T extends Memory$sourceMessageArgs<ExtArgs> = {}>(args?: Subset<T, Memory$sourceMessageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    embedding<T extends Memory$embeddingArgs<ExtArgs> = {}>(args?: Subset<T, Memory$embeddingArgs<ExtArgs>>): Prisma__MemoryEmbeddingClient<$Result.GetResult<Prisma.$MemoryEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Memory model
   */
  interface MemoryFieldRefs {
    readonly id: FieldRef<"Memory", 'String'>
    readonly userId: FieldRef<"Memory", 'String'>
    readonly sourceMessageId: FieldRef<"Memory", 'String'>
    readonly type: FieldRef<"Memory", 'MemoryType'>
    readonly content: FieldRef<"Memory", 'String'>
    readonly confidence: FieldRef<"Memory", 'Float'>
    readonly importance: FieldRef<"Memory", 'Float'>
    readonly status: FieldRef<"Memory", 'MemoryStatus'>
    readonly expiresAt: FieldRef<"Memory", 'DateTime'>
    readonly createdAt: FieldRef<"Memory", 'DateTime'>
    readonly updatedAt: FieldRef<"Memory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Memory findUnique
   */
  export type MemoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter, which Memory to fetch.
     */
    where: MemoryWhereUniqueInput
  }

  /**
   * Memory findUniqueOrThrow
   */
  export type MemoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter, which Memory to fetch.
     */
    where: MemoryWhereUniqueInput
  }

  /**
   * Memory findFirst
   */
  export type MemoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter, which Memory to fetch.
     */
    where?: MemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memories to fetch.
     */
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memories.
     */
    cursor?: MemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memories.
     */
    distinct?: MemoryScalarFieldEnum | MemoryScalarFieldEnum[]
  }

  /**
   * Memory findFirstOrThrow
   */
  export type MemoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter, which Memory to fetch.
     */
    where?: MemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memories to fetch.
     */
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memories.
     */
    cursor?: MemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memories.
     */
    distinct?: MemoryScalarFieldEnum | MemoryScalarFieldEnum[]
  }

  /**
   * Memory findMany
   */
  export type MemoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter, which Memories to fetch.
     */
    where?: MemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memories to fetch.
     */
    orderBy?: MemoryOrderByWithRelationInput | MemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memories.
     */
    cursor?: MemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memories.
     */
    skip?: number
    distinct?: MemoryScalarFieldEnum | MemoryScalarFieldEnum[]
  }

  /**
   * Memory create
   */
  export type MemoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Memory.
     */
    data: XOR<MemoryCreateInput, MemoryUncheckedCreateInput>
  }

  /**
   * Memory createMany
   */
  export type MemoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memories.
     */
    data: MemoryCreateManyInput | MemoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Memory createManyAndReturn
   */
  export type MemoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * The data used to create many Memories.
     */
    data: MemoryCreateManyInput | MemoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Memory update
   */
  export type MemoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Memory.
     */
    data: XOR<MemoryUpdateInput, MemoryUncheckedUpdateInput>
    /**
     * Choose, which Memory to update.
     */
    where: MemoryWhereUniqueInput
  }

  /**
   * Memory updateMany
   */
  export type MemoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memories.
     */
    data: XOR<MemoryUpdateManyMutationInput, MemoryUncheckedUpdateManyInput>
    /**
     * Filter which Memories to update
     */
    where?: MemoryWhereInput
    /**
     * Limit how many Memories to update.
     */
    limit?: number
  }

  /**
   * Memory updateManyAndReturn
   */
  export type MemoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * The data used to update Memories.
     */
    data: XOR<MemoryUpdateManyMutationInput, MemoryUncheckedUpdateManyInput>
    /**
     * Filter which Memories to update
     */
    where?: MemoryWhereInput
    /**
     * Limit how many Memories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Memory upsert
   */
  export type MemoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Memory to update in case it exists.
     */
    where: MemoryWhereUniqueInput
    /**
     * In case the Memory found by the `where` argument doesn't exist, create a new Memory with this data.
     */
    create: XOR<MemoryCreateInput, MemoryUncheckedCreateInput>
    /**
     * In case the Memory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemoryUpdateInput, MemoryUncheckedUpdateInput>
  }

  /**
   * Memory delete
   */
  export type MemoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
    /**
     * Filter which Memory to delete.
     */
    where: MemoryWhereUniqueInput
  }

  /**
   * Memory deleteMany
   */
  export type MemoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memories to delete
     */
    where?: MemoryWhereInput
    /**
     * Limit how many Memories to delete.
     */
    limit?: number
  }

  /**
   * Memory.sourceMessage
   */
  export type Memory$sourceMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Memory.embedding
   */
  export type Memory$embeddingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryEmbedding
     */
    select?: MemoryEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryEmbedding
     */
    omit?: MemoryEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryEmbeddingInclude<ExtArgs> | null
    where?: MemoryEmbeddingWhereInput
  }

  /**
   * Memory without action
   */
  export type MemoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memory
     */
    select?: MemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memory
     */
    omit?: MemoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryInclude<ExtArgs> | null
  }


  /**
   * Model MemoryEmbedding
   */

  export type AggregateMemoryEmbedding = {
    _count: MemoryEmbeddingCountAggregateOutputType | null
    _avg: MemoryEmbeddingAvgAggregateOutputType | null
    _sum: MemoryEmbeddingSumAggregateOutputType | null
    _min: MemoryEmbeddingMinAggregateOutputType | null
    _max: MemoryEmbeddingMaxAggregateOutputType | null
  }

  export type MemoryEmbeddingAvgAggregateOutputType = {
    dimensions: number | null
  }

  export type MemoryEmbeddingSumAggregateOutputType = {
    dimensions: number | null
  }

  export type MemoryEmbeddingMinAggregateOutputType = {
    id: string | null
    memoryId: string | null
    model: string | null
    dimensions: number | null
    createdAt: Date | null
  }

  export type MemoryEmbeddingMaxAggregateOutputType = {
    id: string | null
    memoryId: string | null
    model: string | null
    dimensions: number | null
    createdAt: Date | null
  }

  export type MemoryEmbeddingCountAggregateOutputType = {
    id: number
    memoryId: number
    model: number
    dimensions: number
    createdAt: number
    _all: number
  }


  export type MemoryEmbeddingAvgAggregateInputType = {
    dimensions?: true
  }

  export type MemoryEmbeddingSumAggregateInputType = {
    dimensions?: true
  }

  export type MemoryEmbeddingMinAggregateInputType = {
    id?: true
    memoryId?: true
    model?: true
    dimensions?: true
    createdAt?: true
  }

  export type MemoryEmbeddingMaxAggregateInputType = {
    id?: true
    memoryId?: true
    model?: true
    dimensions?: true
    createdAt?: true
  }

  export type MemoryEmbeddingCountAggregateInputType = {
    id?: true
    memoryId?: true
    model?: true
    dimensions?: true
    createdAt?: true
    _all?: true
  }

  export type MemoryEmbeddingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryEmbedding to aggregate.
     */
    where?: MemoryEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryEmbeddings to fetch.
     */
    orderBy?: MemoryEmbeddingOrderByWithRelationInput | MemoryEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemoryEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemoryEmbeddings
    **/
    _count?: true | MemoryEmbeddingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemoryEmbeddingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemoryEmbeddingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoryEmbeddingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoryEmbeddingMaxAggregateInputType
  }

  export type GetMemoryEmbeddingAggregateType<T extends MemoryEmbeddingAggregateArgs> = {
        [P in keyof T & keyof AggregateMemoryEmbedding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemoryEmbedding[P]>
      : GetScalarType<T[P], AggregateMemoryEmbedding[P]>
  }




  export type MemoryEmbeddingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryEmbeddingWhereInput
    orderBy?: MemoryEmbeddingOrderByWithAggregationInput | MemoryEmbeddingOrderByWithAggregationInput[]
    by: MemoryEmbeddingScalarFieldEnum[] | MemoryEmbeddingScalarFieldEnum
    having?: MemoryEmbeddingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoryEmbeddingCountAggregateInputType | true
    _avg?: MemoryEmbeddingAvgAggregateInputType
    _sum?: MemoryEmbeddingSumAggregateInputType
    _min?: MemoryEmbeddingMinAggregateInputType
    _max?: MemoryEmbeddingMaxAggregateInputType
  }

  export type MemoryEmbeddingGroupByOutputType = {
    id: string
    memoryId: string
    model: string
    dimensions: number
    createdAt: Date
    _count: MemoryEmbeddingCountAggregateOutputType | null
    _avg: MemoryEmbeddingAvgAggregateOutputType | null
    _sum: MemoryEmbeddingSumAggregateOutputType | null
    _min: MemoryEmbeddingMinAggregateOutputType | null
    _max: MemoryEmbeddingMaxAggregateOutputType | null
  }

  type GetMemoryEmbeddingGroupByPayload<T extends MemoryEmbeddingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemoryEmbeddingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoryEmbeddingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoryEmbeddingGroupByOutputType[P]>
            : GetScalarType<T[P], MemoryEmbeddingGroupByOutputType[P]>
        }
      >
    >


  export type MemoryEmbeddingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memoryId?: boolean
    model?: boolean
    dimensions?: boolean
    createdAt?: boolean
    memory?: boolean | MemoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoryEmbedding"]>


  export type MemoryEmbeddingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memoryId?: boolean
    model?: boolean
    dimensions?: boolean
    createdAt?: boolean
    memory?: boolean | MemoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoryEmbedding"]>

  export type MemoryEmbeddingSelectScalar = {
    id?: boolean
    memoryId?: boolean
    model?: boolean
    dimensions?: boolean
    createdAt?: boolean
  }

  export type MemoryEmbeddingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memoryId" | "model" | "dimensions" | "createdAt", ExtArgs["result"]["memoryEmbedding"]>
  export type MemoryEmbeddingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memory?: boolean | MemoryDefaultArgs<ExtArgs>
  }
  export type MemoryEmbeddingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memory?: boolean | MemoryDefaultArgs<ExtArgs>
  }

  export type $MemoryEmbeddingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemoryEmbedding"
    objects: {
      memory: Prisma.$MemoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memoryId: string
      model: string
      dimensions: number
      createdAt: Date
    }, ExtArgs["result"]["memoryEmbedding"]>
    composites: {}
  }

  type MemoryEmbeddingGetPayload<S extends boolean | null | undefined | MemoryEmbeddingDefaultArgs> = $Result.GetResult<Prisma.$MemoryEmbeddingPayload, S>

  type MemoryEmbeddingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemoryEmbeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemoryEmbeddingCountAggregateInputType | true
    }

  export interface MemoryEmbeddingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemoryEmbedding'], meta: { name: 'MemoryEmbedding' } }
    /**
     * Find zero or one MemoryEmbedding that matches the filter.
     * @param {MemoryEmbeddingFindUniqueArgs} args - Arguments to find a MemoryEmbedding
     * @example
     * // Get one MemoryEmbedding
     * const memoryEmbedding = await prisma.memoryEmbedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemoryEmbeddingFindUniqueArgs>(args: SelectSubset<T, MemoryEmbeddingFindUniqueArgs<ExtArgs>>): Prisma__MemoryEmbeddingClient<$Result.GetResult<Prisma.$MemoryEmbeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemoryEmbedding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemoryEmbeddingFindUniqueOrThrowArgs} args - Arguments to find a MemoryEmbedding
     * @example
     * // Get one MemoryEmbedding
     * const memoryEmbedding = await prisma.memoryEmbedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemoryEmbeddingFindUniqueOrThrowArgs>(args: SelectSubset<T, MemoryEmbeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemoryEmbeddingClient<$Result.GetResult<Prisma.$MemoryEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemoryEmbedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryEmbeddingFindFirstArgs} args - Arguments to find a MemoryEmbedding
     * @example
     * // Get one MemoryEmbedding
     * const memoryEmbedding = await prisma.memoryEmbedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemoryEmbeddingFindFirstArgs>(args?: SelectSubset<T, MemoryEmbeddingFindFirstArgs<ExtArgs>>): Prisma__MemoryEmbeddingClient<$Result.GetResult<Prisma.$MemoryEmbeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemoryEmbedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryEmbeddingFindFirstOrThrowArgs} args - Arguments to find a MemoryEmbedding
     * @example
     * // Get one MemoryEmbedding
     * const memoryEmbedding = await prisma.memoryEmbedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemoryEmbeddingFindFirstOrThrowArgs>(args?: SelectSubset<T, MemoryEmbeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemoryEmbeddingClient<$Result.GetResult<Prisma.$MemoryEmbeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemoryEmbeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryEmbeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemoryEmbeddings
     * const memoryEmbeddings = await prisma.memoryEmbedding.findMany()
     * 
     * // Get first 10 MemoryEmbeddings
     * const memoryEmbeddings = await prisma.memoryEmbedding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memoryEmbeddingWithIdOnly = await prisma.memoryEmbedding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemoryEmbeddingFindManyArgs>(args?: SelectSubset<T, MemoryEmbeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryEmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a MemoryEmbedding.
     * @param {MemoryEmbeddingDeleteArgs} args - Arguments to delete one MemoryEmbedding.
     * @example
     * // Delete one MemoryEmbedding
     * const MemoryEmbedding = await prisma.memoryEmbedding.delete({
     *   where: {
     *     // ... filter to delete one MemoryEmbedding
     *   }
     * })
     * 
     */
    delete<T extends MemoryEmbeddingDeleteArgs>(args: SelectSubset<T, MemoryEmbeddingDeleteArgs<ExtArgs>>): Prisma__MemoryEmbeddingClient<$Result.GetResult<Prisma.$MemoryEmbeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemoryEmbedding.
     * @param {MemoryEmbeddingUpdateArgs} args - Arguments to update one MemoryEmbedding.
     * @example
     * // Update one MemoryEmbedding
     * const memoryEmbedding = await prisma.memoryEmbedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemoryEmbeddingUpdateArgs>(args: SelectSubset<T, MemoryEmbeddingUpdateArgs<ExtArgs>>): Prisma__MemoryEmbeddingClient<$Result.GetResult<Prisma.$MemoryEmbeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemoryEmbeddings.
     * @param {MemoryEmbeddingDeleteManyArgs} args - Arguments to filter MemoryEmbeddings to delete.
     * @example
     * // Delete a few MemoryEmbeddings
     * const { count } = await prisma.memoryEmbedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemoryEmbeddingDeleteManyArgs>(args?: SelectSubset<T, MemoryEmbeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemoryEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryEmbeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemoryEmbeddings
     * const memoryEmbedding = await prisma.memoryEmbedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemoryEmbeddingUpdateManyArgs>(args: SelectSubset<T, MemoryEmbeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemoryEmbeddings and returns the data updated in the database.
     * @param {MemoryEmbeddingUpdateManyAndReturnArgs} args - Arguments to update many MemoryEmbeddings.
     * @example
     * // Update many MemoryEmbeddings
     * const memoryEmbedding = await prisma.memoryEmbedding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemoryEmbeddings and only return the `id`
     * const memoryEmbeddingWithIdOnly = await prisma.memoryEmbedding.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemoryEmbeddingUpdateManyAndReturnArgs>(args: SelectSubset<T, MemoryEmbeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryEmbeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of MemoryEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryEmbeddingCountArgs} args - Arguments to filter MemoryEmbeddings to count.
     * @example
     * // Count the number of MemoryEmbeddings
     * const count = await prisma.memoryEmbedding.count({
     *   where: {
     *     // ... the filter for the MemoryEmbeddings we want to count
     *   }
     * })
    **/
    count<T extends MemoryEmbeddingCountArgs>(
      args?: Subset<T, MemoryEmbeddingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoryEmbeddingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemoryEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryEmbeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemoryEmbeddingAggregateArgs>(args: Subset<T, MemoryEmbeddingAggregateArgs>): Prisma.PrismaPromise<GetMemoryEmbeddingAggregateType<T>>

    /**
     * Group by MemoryEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryEmbeddingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemoryEmbeddingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemoryEmbeddingGroupByArgs['orderBy'] }
        : { orderBy?: MemoryEmbeddingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemoryEmbeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemoryEmbedding model
   */
  readonly fields: MemoryEmbeddingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemoryEmbedding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemoryEmbeddingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memory<T extends MemoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemoryDefaultArgs<ExtArgs>>): Prisma__MemoryClient<$Result.GetResult<Prisma.$MemoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemoryEmbedding model
   */
  interface MemoryEmbeddingFieldRefs {
    readonly id: FieldRef<"MemoryEmbedding", 'String'>
    readonly memoryId: FieldRef<"MemoryEmbedding", 'String'>
    readonly model: FieldRef<"MemoryEmbedding", 'String'>
    readonly dimensions: FieldRef<"MemoryEmbedding", 'Int'>
    readonly createdAt: FieldRef<"MemoryEmbedding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemoryEmbedding findUnique
   */
  export type MemoryEmbeddingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryEmbedding
     */
    select?: MemoryEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryEmbedding
     */
    omit?: MemoryEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which MemoryEmbedding to fetch.
     */
    where: MemoryEmbeddingWhereUniqueInput
  }

  /**
   * MemoryEmbedding findUniqueOrThrow
   */
  export type MemoryEmbeddingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryEmbedding
     */
    select?: MemoryEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryEmbedding
     */
    omit?: MemoryEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which MemoryEmbedding to fetch.
     */
    where: MemoryEmbeddingWhereUniqueInput
  }

  /**
   * MemoryEmbedding findFirst
   */
  export type MemoryEmbeddingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryEmbedding
     */
    select?: MemoryEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryEmbedding
     */
    omit?: MemoryEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which MemoryEmbedding to fetch.
     */
    where?: MemoryEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryEmbeddings to fetch.
     */
    orderBy?: MemoryEmbeddingOrderByWithRelationInput | MemoryEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryEmbeddings.
     */
    cursor?: MemoryEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryEmbeddings.
     */
    distinct?: MemoryEmbeddingScalarFieldEnum | MemoryEmbeddingScalarFieldEnum[]
  }

  /**
   * MemoryEmbedding findFirstOrThrow
   */
  export type MemoryEmbeddingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryEmbedding
     */
    select?: MemoryEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryEmbedding
     */
    omit?: MemoryEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which MemoryEmbedding to fetch.
     */
    where?: MemoryEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryEmbeddings to fetch.
     */
    orderBy?: MemoryEmbeddingOrderByWithRelationInput | MemoryEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryEmbeddings.
     */
    cursor?: MemoryEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryEmbeddings.
     */
    distinct?: MemoryEmbeddingScalarFieldEnum | MemoryEmbeddingScalarFieldEnum[]
  }

  /**
   * MemoryEmbedding findMany
   */
  export type MemoryEmbeddingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryEmbedding
     */
    select?: MemoryEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryEmbedding
     */
    omit?: MemoryEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which MemoryEmbeddings to fetch.
     */
    where?: MemoryEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryEmbeddings to fetch.
     */
    orderBy?: MemoryEmbeddingOrderByWithRelationInput | MemoryEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemoryEmbeddings.
     */
    cursor?: MemoryEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryEmbeddings.
     */
    skip?: number
    distinct?: MemoryEmbeddingScalarFieldEnum | MemoryEmbeddingScalarFieldEnum[]
  }

  /**
   * MemoryEmbedding update
   */
  export type MemoryEmbeddingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryEmbedding
     */
    select?: MemoryEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryEmbedding
     */
    omit?: MemoryEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryEmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to update a MemoryEmbedding.
     */
    data: XOR<MemoryEmbeddingUpdateInput, MemoryEmbeddingUncheckedUpdateInput>
    /**
     * Choose, which MemoryEmbedding to update.
     */
    where: MemoryEmbeddingWhereUniqueInput
  }

  /**
   * MemoryEmbedding updateMany
   */
  export type MemoryEmbeddingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemoryEmbeddings.
     */
    data: XOR<MemoryEmbeddingUpdateManyMutationInput, MemoryEmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which MemoryEmbeddings to update
     */
    where?: MemoryEmbeddingWhereInput
    /**
     * Limit how many MemoryEmbeddings to update.
     */
    limit?: number
  }

  /**
   * MemoryEmbedding updateManyAndReturn
   */
  export type MemoryEmbeddingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryEmbedding
     */
    select?: MemoryEmbeddingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryEmbedding
     */
    omit?: MemoryEmbeddingOmit<ExtArgs> | null
    /**
     * The data used to update MemoryEmbeddings.
     */
    data: XOR<MemoryEmbeddingUpdateManyMutationInput, MemoryEmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which MemoryEmbeddings to update
     */
    where?: MemoryEmbeddingWhereInput
    /**
     * Limit how many MemoryEmbeddings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryEmbeddingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemoryEmbedding delete
   */
  export type MemoryEmbeddingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryEmbedding
     */
    select?: MemoryEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryEmbedding
     */
    omit?: MemoryEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryEmbeddingInclude<ExtArgs> | null
    /**
     * Filter which MemoryEmbedding to delete.
     */
    where: MemoryEmbeddingWhereUniqueInput
  }

  /**
   * MemoryEmbedding deleteMany
   */
  export type MemoryEmbeddingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryEmbeddings to delete
     */
    where?: MemoryEmbeddingWhereInput
    /**
     * Limit how many MemoryEmbeddings to delete.
     */
    limit?: number
  }

  /**
   * MemoryEmbedding without action
   */
  export type MemoryEmbeddingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryEmbedding
     */
    select?: MemoryEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryEmbedding
     */
    omit?: MemoryEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryEmbeddingInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    messageId: string | null
    rating: $Enums.FeedbackRating | null
    reason: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    messageId: string | null
    rating: $Enums.FeedbackRating | null
    reason: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    userId: number
    messageId: number
    rating: number
    reason: number
    comment: number
    createdAt: number
    _all: number
  }


  export type FeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    messageId?: true
    rating?: true
    reason?: true
    comment?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    messageId?: true
    rating?: true
    reason?: true
    comment?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    messageId?: true
    rating?: true
    reason?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    userId: string
    messageId: string
    rating: $Enums.FeedbackRating
    reason: string | null
    comment: string | null
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    messageId?: boolean
    rating?: boolean
    reason?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    messageId?: boolean
    rating?: boolean
    reason?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    messageId?: boolean
    rating?: boolean
    reason?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    messageId?: boolean
    rating?: boolean
    reason?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "messageId" | "rating" | "reason" | "comment" | "createdAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      message: Prisma.$MessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      messageId: string
      rating: $Enums.FeedbackRating
      reason: string | null
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly userId: FieldRef<"Feedback", 'String'>
    readonly messageId: FieldRef<"Feedback", 'String'>
    readonly rating: FieldRef<"Feedback", 'FeedbackRating'>
    readonly reason: FieldRef<"Feedback", 'String'>
    readonly comment: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model ModelRun
   */

  export type AggregateModelRun = {
    _count: ModelRunCountAggregateOutputType | null
    _avg: ModelRunAvgAggregateOutputType | null
    _sum: ModelRunSumAggregateOutputType | null
    _min: ModelRunMinAggregateOutputType | null
    _max: ModelRunMaxAggregateOutputType | null
  }

  export type ModelRunAvgAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    latencyMs: number | null
    retrievalCount: number | null
  }

  export type ModelRunSumAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    latencyMs: number | null
    retrievalCount: number | null
  }

  export type ModelRunMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    provider: string | null
    model: string | null
    promptTokens: number | null
    completionTokens: number | null
    latencyMs: number | null
    retrievalCount: number | null
    createdAt: Date | null
  }

  export type ModelRunMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    provider: string | null
    model: string | null
    promptTokens: number | null
    completionTokens: number | null
    latencyMs: number | null
    retrievalCount: number | null
    createdAt: Date | null
  }

  export type ModelRunCountAggregateOutputType = {
    id: number
    messageId: number
    provider: number
    model: number
    promptTokens: number
    completionTokens: number
    latencyMs: number
    retrievalCount: number
    createdAt: number
    _all: number
  }


  export type ModelRunAvgAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    latencyMs?: true
    retrievalCount?: true
  }

  export type ModelRunSumAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    latencyMs?: true
    retrievalCount?: true
  }

  export type ModelRunMinAggregateInputType = {
    id?: true
    messageId?: true
    provider?: true
    model?: true
    promptTokens?: true
    completionTokens?: true
    latencyMs?: true
    retrievalCount?: true
    createdAt?: true
  }

  export type ModelRunMaxAggregateInputType = {
    id?: true
    messageId?: true
    provider?: true
    model?: true
    promptTokens?: true
    completionTokens?: true
    latencyMs?: true
    retrievalCount?: true
    createdAt?: true
  }

  export type ModelRunCountAggregateInputType = {
    id?: true
    messageId?: true
    provider?: true
    model?: true
    promptTokens?: true
    completionTokens?: true
    latencyMs?: true
    retrievalCount?: true
    createdAt?: true
    _all?: true
  }

  export type ModelRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelRun to aggregate.
     */
    where?: ModelRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRuns to fetch.
     */
    orderBy?: ModelRunOrderByWithRelationInput | ModelRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelRuns
    **/
    _count?: true | ModelRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelRunMaxAggregateInputType
  }

  export type GetModelRunAggregateType<T extends ModelRunAggregateArgs> = {
        [P in keyof T & keyof AggregateModelRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelRun[P]>
      : GetScalarType<T[P], AggregateModelRun[P]>
  }




  export type ModelRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelRunWhereInput
    orderBy?: ModelRunOrderByWithAggregationInput | ModelRunOrderByWithAggregationInput[]
    by: ModelRunScalarFieldEnum[] | ModelRunScalarFieldEnum
    having?: ModelRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelRunCountAggregateInputType | true
    _avg?: ModelRunAvgAggregateInputType
    _sum?: ModelRunSumAggregateInputType
    _min?: ModelRunMinAggregateInputType
    _max?: ModelRunMaxAggregateInputType
  }

  export type ModelRunGroupByOutputType = {
    id: string
    messageId: string
    provider: string
    model: string
    promptTokens: number | null
    completionTokens: number | null
    latencyMs: number | null
    retrievalCount: number | null
    createdAt: Date
    _count: ModelRunCountAggregateOutputType | null
    _avg: ModelRunAvgAggregateOutputType | null
    _sum: ModelRunSumAggregateOutputType | null
    _min: ModelRunMinAggregateOutputType | null
    _max: ModelRunMaxAggregateOutputType | null
  }

  type GetModelRunGroupByPayload<T extends ModelRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelRunGroupByOutputType[P]>
            : GetScalarType<T[P], ModelRunGroupByOutputType[P]>
        }
      >
    >


  export type ModelRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    provider?: boolean
    model?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    latencyMs?: boolean
    retrievalCount?: boolean
    createdAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelRun"]>

  export type ModelRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    provider?: boolean
    model?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    latencyMs?: boolean
    retrievalCount?: boolean
    createdAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelRun"]>

  export type ModelRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    provider?: boolean
    model?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    latencyMs?: boolean
    retrievalCount?: boolean
    createdAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelRun"]>

  export type ModelRunSelectScalar = {
    id?: boolean
    messageId?: boolean
    provider?: boolean
    model?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    latencyMs?: boolean
    retrievalCount?: boolean
    createdAt?: boolean
  }

  export type ModelRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "provider" | "model" | "promptTokens" | "completionTokens" | "latencyMs" | "retrievalCount" | "createdAt", ExtArgs["result"]["modelRun"]>
  export type ModelRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type ModelRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type ModelRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }

  export type $ModelRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelRun"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      provider: string
      model: string
      promptTokens: number | null
      completionTokens: number | null
      latencyMs: number | null
      retrievalCount: number | null
      createdAt: Date
    }, ExtArgs["result"]["modelRun"]>
    composites: {}
  }

  type ModelRunGetPayload<S extends boolean | null | undefined | ModelRunDefaultArgs> = $Result.GetResult<Prisma.$ModelRunPayload, S>

  type ModelRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelRunCountAggregateInputType | true
    }

  export interface ModelRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelRun'], meta: { name: 'ModelRun' } }
    /**
     * Find zero or one ModelRun that matches the filter.
     * @param {ModelRunFindUniqueArgs} args - Arguments to find a ModelRun
     * @example
     * // Get one ModelRun
     * const modelRun = await prisma.modelRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelRunFindUniqueArgs>(args: SelectSubset<T, ModelRunFindUniqueArgs<ExtArgs>>): Prisma__ModelRunClient<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModelRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelRunFindUniqueOrThrowArgs} args - Arguments to find a ModelRun
     * @example
     * // Get one ModelRun
     * const modelRun = await prisma.modelRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelRunFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelRunClient<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunFindFirstArgs} args - Arguments to find a ModelRun
     * @example
     * // Get one ModelRun
     * const modelRun = await prisma.modelRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelRunFindFirstArgs>(args?: SelectSubset<T, ModelRunFindFirstArgs<ExtArgs>>): Prisma__ModelRunClient<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunFindFirstOrThrowArgs} args - Arguments to find a ModelRun
     * @example
     * // Get one ModelRun
     * const modelRun = await prisma.modelRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelRunFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelRunClient<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModelRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelRuns
     * const modelRuns = await prisma.modelRun.findMany()
     * 
     * // Get first 10 ModelRuns
     * const modelRuns = await prisma.modelRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelRunWithIdOnly = await prisma.modelRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelRunFindManyArgs>(args?: SelectSubset<T, ModelRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModelRun.
     * @param {ModelRunCreateArgs} args - Arguments to create a ModelRun.
     * @example
     * // Create one ModelRun
     * const ModelRun = await prisma.modelRun.create({
     *   data: {
     *     // ... data to create a ModelRun
     *   }
     * })
     * 
     */
    create<T extends ModelRunCreateArgs>(args: SelectSubset<T, ModelRunCreateArgs<ExtArgs>>): Prisma__ModelRunClient<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModelRuns.
     * @param {ModelRunCreateManyArgs} args - Arguments to create many ModelRuns.
     * @example
     * // Create many ModelRuns
     * const modelRun = await prisma.modelRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelRunCreateManyArgs>(args?: SelectSubset<T, ModelRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelRuns and returns the data saved in the database.
     * @param {ModelRunCreateManyAndReturnArgs} args - Arguments to create many ModelRuns.
     * @example
     * // Create many ModelRuns
     * const modelRun = await prisma.modelRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelRuns and only return the `id`
     * const modelRunWithIdOnly = await prisma.modelRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelRunCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModelRun.
     * @param {ModelRunDeleteArgs} args - Arguments to delete one ModelRun.
     * @example
     * // Delete one ModelRun
     * const ModelRun = await prisma.modelRun.delete({
     *   where: {
     *     // ... filter to delete one ModelRun
     *   }
     * })
     * 
     */
    delete<T extends ModelRunDeleteArgs>(args: SelectSubset<T, ModelRunDeleteArgs<ExtArgs>>): Prisma__ModelRunClient<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModelRun.
     * @param {ModelRunUpdateArgs} args - Arguments to update one ModelRun.
     * @example
     * // Update one ModelRun
     * const modelRun = await prisma.modelRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelRunUpdateArgs>(args: SelectSubset<T, ModelRunUpdateArgs<ExtArgs>>): Prisma__ModelRunClient<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModelRuns.
     * @param {ModelRunDeleteManyArgs} args - Arguments to filter ModelRuns to delete.
     * @example
     * // Delete a few ModelRuns
     * const { count } = await prisma.modelRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelRunDeleteManyArgs>(args?: SelectSubset<T, ModelRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelRuns
     * const modelRun = await prisma.modelRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelRunUpdateManyArgs>(args: SelectSubset<T, ModelRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelRuns and returns the data updated in the database.
     * @param {ModelRunUpdateManyAndReturnArgs} args - Arguments to update many ModelRuns.
     * @example
     * // Update many ModelRuns
     * const modelRun = await prisma.modelRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModelRuns and only return the `id`
     * const modelRunWithIdOnly = await prisma.modelRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelRunUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModelRun.
     * @param {ModelRunUpsertArgs} args - Arguments to update or create a ModelRun.
     * @example
     * // Update or create a ModelRun
     * const modelRun = await prisma.modelRun.upsert({
     *   create: {
     *     // ... data to create a ModelRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelRun we want to update
     *   }
     * })
     */
    upsert<T extends ModelRunUpsertArgs>(args: SelectSubset<T, ModelRunUpsertArgs<ExtArgs>>): Prisma__ModelRunClient<$Result.GetResult<Prisma.$ModelRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModelRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunCountArgs} args - Arguments to filter ModelRuns to count.
     * @example
     * // Count the number of ModelRuns
     * const count = await prisma.modelRun.count({
     *   where: {
     *     // ... the filter for the ModelRuns we want to count
     *   }
     * })
    **/
    count<T extends ModelRunCountArgs>(
      args?: Subset<T, ModelRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelRunAggregateArgs>(args: Subset<T, ModelRunAggregateArgs>): Prisma.PrismaPromise<GetModelRunAggregateType<T>>

    /**
     * Group by ModelRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelRunGroupByArgs['orderBy'] }
        : { orderBy?: ModelRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelRun model
   */
  readonly fields: ModelRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModelRun model
   */
  interface ModelRunFieldRefs {
    readonly id: FieldRef<"ModelRun", 'String'>
    readonly messageId: FieldRef<"ModelRun", 'String'>
    readonly provider: FieldRef<"ModelRun", 'String'>
    readonly model: FieldRef<"ModelRun", 'String'>
    readonly promptTokens: FieldRef<"ModelRun", 'Int'>
    readonly completionTokens: FieldRef<"ModelRun", 'Int'>
    readonly latencyMs: FieldRef<"ModelRun", 'Int'>
    readonly retrievalCount: FieldRef<"ModelRun", 'Int'>
    readonly createdAt: FieldRef<"ModelRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModelRun findUnique
   */
  export type ModelRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
    /**
     * Filter, which ModelRun to fetch.
     */
    where: ModelRunWhereUniqueInput
  }

  /**
   * ModelRun findUniqueOrThrow
   */
  export type ModelRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
    /**
     * Filter, which ModelRun to fetch.
     */
    where: ModelRunWhereUniqueInput
  }

  /**
   * ModelRun findFirst
   */
  export type ModelRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
    /**
     * Filter, which ModelRun to fetch.
     */
    where?: ModelRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRuns to fetch.
     */
    orderBy?: ModelRunOrderByWithRelationInput | ModelRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelRuns.
     */
    cursor?: ModelRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelRuns.
     */
    distinct?: ModelRunScalarFieldEnum | ModelRunScalarFieldEnum[]
  }

  /**
   * ModelRun findFirstOrThrow
   */
  export type ModelRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
    /**
     * Filter, which ModelRun to fetch.
     */
    where?: ModelRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRuns to fetch.
     */
    orderBy?: ModelRunOrderByWithRelationInput | ModelRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelRuns.
     */
    cursor?: ModelRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelRuns.
     */
    distinct?: ModelRunScalarFieldEnum | ModelRunScalarFieldEnum[]
  }

  /**
   * ModelRun findMany
   */
  export type ModelRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
    /**
     * Filter, which ModelRuns to fetch.
     */
    where?: ModelRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRuns to fetch.
     */
    orderBy?: ModelRunOrderByWithRelationInput | ModelRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelRuns.
     */
    cursor?: ModelRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRuns.
     */
    skip?: number
    distinct?: ModelRunScalarFieldEnum | ModelRunScalarFieldEnum[]
  }

  /**
   * ModelRun create
   */
  export type ModelRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelRun.
     */
    data: XOR<ModelRunCreateInput, ModelRunUncheckedCreateInput>
  }

  /**
   * ModelRun createMany
   */
  export type ModelRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelRuns.
     */
    data: ModelRunCreateManyInput | ModelRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelRun createManyAndReturn
   */
  export type ModelRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * The data used to create many ModelRuns.
     */
    data: ModelRunCreateManyInput | ModelRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelRun update
   */
  export type ModelRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelRun.
     */
    data: XOR<ModelRunUpdateInput, ModelRunUncheckedUpdateInput>
    /**
     * Choose, which ModelRun to update.
     */
    where: ModelRunWhereUniqueInput
  }

  /**
   * ModelRun updateMany
   */
  export type ModelRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelRuns.
     */
    data: XOR<ModelRunUpdateManyMutationInput, ModelRunUncheckedUpdateManyInput>
    /**
     * Filter which ModelRuns to update
     */
    where?: ModelRunWhereInput
    /**
     * Limit how many ModelRuns to update.
     */
    limit?: number
  }

  /**
   * ModelRun updateManyAndReturn
   */
  export type ModelRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * The data used to update ModelRuns.
     */
    data: XOR<ModelRunUpdateManyMutationInput, ModelRunUncheckedUpdateManyInput>
    /**
     * Filter which ModelRuns to update
     */
    where?: ModelRunWhereInput
    /**
     * Limit how many ModelRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelRun upsert
   */
  export type ModelRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelRun to update in case it exists.
     */
    where: ModelRunWhereUniqueInput
    /**
     * In case the ModelRun found by the `where` argument doesn't exist, create a new ModelRun with this data.
     */
    create: XOR<ModelRunCreateInput, ModelRunUncheckedCreateInput>
    /**
     * In case the ModelRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelRunUpdateInput, ModelRunUncheckedUpdateInput>
  }

  /**
   * ModelRun delete
   */
  export type ModelRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
    /**
     * Filter which ModelRun to delete.
     */
    where: ModelRunWhereUniqueInput
  }

  /**
   * ModelRun deleteMany
   */
  export type ModelRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelRuns to delete
     */
    where?: ModelRunWhereInput
    /**
     * Limit how many ModelRuns to delete.
     */
    limit?: number
  }

  /**
   * ModelRun without action
   */
  export type ModelRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRun
     */
    omit?: ModelRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRunInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    archivedAt: 'archivedAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    role: 'role',
    content: 'content',
    tokenCount: 'tokenCount',
    model: 'model',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MemoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sourceMessageId: 'sourceMessageId',
    type: 'type',
    content: 'content',
    confidence: 'confidence',
    importance: 'importance',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemoryScalarFieldEnum = (typeof MemoryScalarFieldEnum)[keyof typeof MemoryScalarFieldEnum]


  export const MemoryEmbeddingScalarFieldEnum: {
    id: 'id',
    memoryId: 'memoryId',
    model: 'model',
    dimensions: 'dimensions',
    createdAt: 'createdAt'
  };

  export type MemoryEmbeddingScalarFieldEnum = (typeof MemoryEmbeddingScalarFieldEnum)[keyof typeof MemoryEmbeddingScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    messageId: 'messageId',
    rating: 'rating',
    reason: 'reason',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const ModelRunScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    provider: 'provider',
    model: 'model',
    promptTokens: 'promptTokens',
    completionTokens: 'completionTokens',
    latencyMs: 'latencyMs',
    retrievalCount: 'retrievalCount',
    createdAt: 'createdAt'
  };

  export type ModelRunScalarFieldEnum = (typeof ModelRunScalarFieldEnum)[keyof typeof ModelRunScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MessageRole'
   */
  export type EnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole'>
    


  /**
   * Reference to a field of type 'MessageRole[]'
   */
  export type ListEnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MemoryType'
   */
  export type EnumMemoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryType'>
    


  /**
   * Reference to a field of type 'MemoryType[]'
   */
  export type ListEnumMemoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'MemoryStatus'
   */
  export type EnumMemoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryStatus'>
    


  /**
   * Reference to a field of type 'MemoryStatus[]'
   */
  export type ListEnumMemoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryStatus[]'>
    


  /**
   * Reference to a field of type 'FeedbackRating'
   */
  export type EnumFeedbackRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackRating'>
    


  /**
   * Reference to a field of type 'FeedbackRating[]'
   */
  export type ListEnumFeedbackRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackRating[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    conversations?: ConversationListRelationFilter
    memories?: MemoryListRelationFilter
    feedback?: FeedbackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversations?: ConversationOrderByRelationAggregateInput
    memories?: MemoryOrderByRelationAggregateInput
    feedback?: FeedbackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    conversations?: ConversationListRelationFilter
    memories?: MemoryListRelationFilter
    feedback?: FeedbackListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    userId?: StringFilter<"Conversation"> | string
    title?: StringNullableFilter<"Conversation"> | string | null
    summary?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    archivedAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    userId?: StringFilter<"Conversation"> | string
    title?: StringNullableFilter<"Conversation"> | string | null
    summary?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    archivedAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrderInput | SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    userId?: StringWithAggregatesFilter<"Conversation"> | string
    title?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    archivedAt?: DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    content?: StringFilter<"Message"> | string
    tokenCount?: IntNullableFilter<"Message"> | number | null
    model?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    memories?: MemoryListRelationFilter
    feedback?: FeedbackListRelationFilter
    modelRuns?: ModelRunListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    tokenCount?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
    memories?: MemoryOrderByRelationAggregateInput
    feedback?: FeedbackOrderByRelationAggregateInput
    modelRuns?: ModelRunOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversationId?: StringFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    content?: StringFilter<"Message"> | string
    tokenCount?: IntNullableFilter<"Message"> | number | null
    model?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    memories?: MemoryListRelationFilter
    feedback?: FeedbackListRelationFilter
    modelRuns?: ModelRunListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    tokenCount?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    conversationId?: StringWithAggregatesFilter<"Message"> | string
    role?: EnumMessageRoleWithAggregatesFilter<"Message"> | $Enums.MessageRole
    content?: StringWithAggregatesFilter<"Message"> | string
    tokenCount?: IntNullableWithAggregatesFilter<"Message"> | number | null
    model?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type MemoryWhereInput = {
    AND?: MemoryWhereInput | MemoryWhereInput[]
    OR?: MemoryWhereInput[]
    NOT?: MemoryWhereInput | MemoryWhereInput[]
    id?: StringFilter<"Memory"> | string
    userId?: StringFilter<"Memory"> | string
    sourceMessageId?: StringNullableFilter<"Memory"> | string | null
    type?: EnumMemoryTypeFilter<"Memory"> | $Enums.MemoryType
    content?: StringFilter<"Memory"> | string
    confidence?: FloatFilter<"Memory"> | number
    importance?: FloatFilter<"Memory"> | number
    status?: EnumMemoryStatusFilter<"Memory"> | $Enums.MemoryStatus
    expiresAt?: DateTimeNullableFilter<"Memory"> | Date | string | null
    createdAt?: DateTimeFilter<"Memory"> | Date | string
    updatedAt?: DateTimeFilter<"Memory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sourceMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    embedding?: XOR<MemoryEmbeddingNullableScalarRelationFilter, MemoryEmbeddingWhereInput> | null
  }

  export type MemoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceMessageId?: SortOrderInput | SortOrder
    type?: SortOrder
    content?: SortOrder
    confidence?: SortOrder
    importance?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sourceMessage?: MessageOrderByWithRelationInput
    embedding?: MemoryEmbeddingOrderByWithRelationInput
  }

  export type MemoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemoryWhereInput | MemoryWhereInput[]
    OR?: MemoryWhereInput[]
    NOT?: MemoryWhereInput | MemoryWhereInput[]
    userId?: StringFilter<"Memory"> | string
    sourceMessageId?: StringNullableFilter<"Memory"> | string | null
    type?: EnumMemoryTypeFilter<"Memory"> | $Enums.MemoryType
    content?: StringFilter<"Memory"> | string
    confidence?: FloatFilter<"Memory"> | number
    importance?: FloatFilter<"Memory"> | number
    status?: EnumMemoryStatusFilter<"Memory"> | $Enums.MemoryStatus
    expiresAt?: DateTimeNullableFilter<"Memory"> | Date | string | null
    createdAt?: DateTimeFilter<"Memory"> | Date | string
    updatedAt?: DateTimeFilter<"Memory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sourceMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    embedding?: XOR<MemoryEmbeddingNullableScalarRelationFilter, MemoryEmbeddingWhereInput> | null
  }, "id">

  export type MemoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceMessageId?: SortOrderInput | SortOrder
    type?: SortOrder
    content?: SortOrder
    confidence?: SortOrder
    importance?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemoryCountOrderByAggregateInput
    _avg?: MemoryAvgOrderByAggregateInput
    _max?: MemoryMaxOrderByAggregateInput
    _min?: MemoryMinOrderByAggregateInput
    _sum?: MemorySumOrderByAggregateInput
  }

  export type MemoryScalarWhereWithAggregatesInput = {
    AND?: MemoryScalarWhereWithAggregatesInput | MemoryScalarWhereWithAggregatesInput[]
    OR?: MemoryScalarWhereWithAggregatesInput[]
    NOT?: MemoryScalarWhereWithAggregatesInput | MemoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Memory"> | string
    userId?: StringWithAggregatesFilter<"Memory"> | string
    sourceMessageId?: StringNullableWithAggregatesFilter<"Memory"> | string | null
    type?: EnumMemoryTypeWithAggregatesFilter<"Memory"> | $Enums.MemoryType
    content?: StringWithAggregatesFilter<"Memory"> | string
    confidence?: FloatWithAggregatesFilter<"Memory"> | number
    importance?: FloatWithAggregatesFilter<"Memory"> | number
    status?: EnumMemoryStatusWithAggregatesFilter<"Memory"> | $Enums.MemoryStatus
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Memory"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Memory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Memory"> | Date | string
  }

  export type MemoryEmbeddingWhereInput = {
    AND?: MemoryEmbeddingWhereInput | MemoryEmbeddingWhereInput[]
    OR?: MemoryEmbeddingWhereInput[]
    NOT?: MemoryEmbeddingWhereInput | MemoryEmbeddingWhereInput[]
    id?: StringFilter<"MemoryEmbedding"> | string
    memoryId?: StringFilter<"MemoryEmbedding"> | string
    model?: StringFilter<"MemoryEmbedding"> | string
    dimensions?: IntFilter<"MemoryEmbedding"> | number
    createdAt?: DateTimeFilter<"MemoryEmbedding"> | Date | string
    memory?: XOR<MemoryScalarRelationFilter, MemoryWhereInput>
  }

  export type MemoryEmbeddingOrderByWithRelationInput = {
    id?: SortOrder
    memoryId?: SortOrder
    model?: SortOrder
    dimensions?: SortOrder
    createdAt?: SortOrder
    memory?: MemoryOrderByWithRelationInput
  }

  export type MemoryEmbeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memoryId?: string
    AND?: MemoryEmbeddingWhereInput | MemoryEmbeddingWhereInput[]
    OR?: MemoryEmbeddingWhereInput[]
    NOT?: MemoryEmbeddingWhereInput | MemoryEmbeddingWhereInput[]
    model?: StringFilter<"MemoryEmbedding"> | string
    dimensions?: IntFilter<"MemoryEmbedding"> | number
    createdAt?: DateTimeFilter<"MemoryEmbedding"> | Date | string
    memory?: XOR<MemoryScalarRelationFilter, MemoryWhereInput>
  }, "id" | "memoryId">

  export type MemoryEmbeddingOrderByWithAggregationInput = {
    id?: SortOrder
    memoryId?: SortOrder
    model?: SortOrder
    dimensions?: SortOrder
    createdAt?: SortOrder
    _count?: MemoryEmbeddingCountOrderByAggregateInput
    _avg?: MemoryEmbeddingAvgOrderByAggregateInput
    _max?: MemoryEmbeddingMaxOrderByAggregateInput
    _min?: MemoryEmbeddingMinOrderByAggregateInput
    _sum?: MemoryEmbeddingSumOrderByAggregateInput
  }

  export type MemoryEmbeddingScalarWhereWithAggregatesInput = {
    AND?: MemoryEmbeddingScalarWhereWithAggregatesInput | MemoryEmbeddingScalarWhereWithAggregatesInput[]
    OR?: MemoryEmbeddingScalarWhereWithAggregatesInput[]
    NOT?: MemoryEmbeddingScalarWhereWithAggregatesInput | MemoryEmbeddingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemoryEmbedding"> | string
    memoryId?: StringWithAggregatesFilter<"MemoryEmbedding"> | string
    model?: StringWithAggregatesFilter<"MemoryEmbedding"> | string
    dimensions?: IntWithAggregatesFilter<"MemoryEmbedding"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MemoryEmbedding"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    userId?: StringFilter<"Feedback"> | string
    messageId?: StringFilter<"Feedback"> | string
    rating?: EnumFeedbackRatingFilter<"Feedback"> | $Enums.FeedbackRating
    reason?: StringNullableFilter<"Feedback"> | string | null
    comment?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    rating?: SortOrder
    reason?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    message?: MessageOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    userId?: StringFilter<"Feedback"> | string
    messageId?: StringFilter<"Feedback"> | string
    rating?: EnumFeedbackRatingFilter<"Feedback"> | $Enums.FeedbackRating
    reason?: StringNullableFilter<"Feedback"> | string | null
    comment?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    rating?: SortOrder
    reason?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    userId?: StringWithAggregatesFilter<"Feedback"> | string
    messageId?: StringWithAggregatesFilter<"Feedback"> | string
    rating?: EnumFeedbackRatingWithAggregatesFilter<"Feedback"> | $Enums.FeedbackRating
    reason?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    comment?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type ModelRunWhereInput = {
    AND?: ModelRunWhereInput | ModelRunWhereInput[]
    OR?: ModelRunWhereInput[]
    NOT?: ModelRunWhereInput | ModelRunWhereInput[]
    id?: StringFilter<"ModelRun"> | string
    messageId?: StringFilter<"ModelRun"> | string
    provider?: StringFilter<"ModelRun"> | string
    model?: StringFilter<"ModelRun"> | string
    promptTokens?: IntNullableFilter<"ModelRun"> | number | null
    completionTokens?: IntNullableFilter<"ModelRun"> | number | null
    latencyMs?: IntNullableFilter<"ModelRun"> | number | null
    retrievalCount?: IntNullableFilter<"ModelRun"> | number | null
    createdAt?: DateTimeFilter<"ModelRun"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }

  export type ModelRunOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    promptTokens?: SortOrderInput | SortOrder
    completionTokens?: SortOrderInput | SortOrder
    latencyMs?: SortOrderInput | SortOrder
    retrievalCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    message?: MessageOrderByWithRelationInput
  }

  export type ModelRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModelRunWhereInput | ModelRunWhereInput[]
    OR?: ModelRunWhereInput[]
    NOT?: ModelRunWhereInput | ModelRunWhereInput[]
    messageId?: StringFilter<"ModelRun"> | string
    provider?: StringFilter<"ModelRun"> | string
    model?: StringFilter<"ModelRun"> | string
    promptTokens?: IntNullableFilter<"ModelRun"> | number | null
    completionTokens?: IntNullableFilter<"ModelRun"> | number | null
    latencyMs?: IntNullableFilter<"ModelRun"> | number | null
    retrievalCount?: IntNullableFilter<"ModelRun"> | number | null
    createdAt?: DateTimeFilter<"ModelRun"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }, "id">

  export type ModelRunOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    promptTokens?: SortOrderInput | SortOrder
    completionTokens?: SortOrderInput | SortOrder
    latencyMs?: SortOrderInput | SortOrder
    retrievalCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ModelRunCountOrderByAggregateInput
    _avg?: ModelRunAvgOrderByAggregateInput
    _max?: ModelRunMaxOrderByAggregateInput
    _min?: ModelRunMinOrderByAggregateInput
    _sum?: ModelRunSumOrderByAggregateInput
  }

  export type ModelRunScalarWhereWithAggregatesInput = {
    AND?: ModelRunScalarWhereWithAggregatesInput | ModelRunScalarWhereWithAggregatesInput[]
    OR?: ModelRunScalarWhereWithAggregatesInput[]
    NOT?: ModelRunScalarWhereWithAggregatesInput | ModelRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModelRun"> | string
    messageId?: StringWithAggregatesFilter<"ModelRun"> | string
    provider?: StringWithAggregatesFilter<"ModelRun"> | string
    model?: StringWithAggregatesFilter<"ModelRun"> | string
    promptTokens?: IntNullableWithAggregatesFilter<"ModelRun"> | number | null
    completionTokens?: IntNullableWithAggregatesFilter<"ModelRun"> | number | null
    latencyMs?: IntNullableWithAggregatesFilter<"ModelRun"> | number | null
    retrievalCount?: IntNullableWithAggregatesFilter<"ModelRun"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ModelRun"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutUserInput
    memories?: MemoryCreateNestedManyWithoutUserInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    memories?: MemoryUncheckedCreateNestedManyWithoutUserInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    memories?: MemoryUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    memories?: MemoryUncheckedUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    id?: string
    title?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    user: UserCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    userId: string
    title?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    memories?: MemoryCreateNestedManyWithoutSourceMessageInput
    feedback?: FeedbackCreateNestedManyWithoutMessageInput
    modelRuns?: ModelRunCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutSourceMessageInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutMessageInput
    modelRuns?: ModelRunUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    memories?: MemoryUpdateManyWithoutSourceMessageNestedInput
    feedback?: FeedbackUpdateManyWithoutMessageNestedInput
    modelRuns?: ModelRunUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutSourceMessageNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutMessageNestedInput
    modelRuns?: ModelRunUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryCreateInput = {
    id?: string
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMemoriesInput
    sourceMessage?: MessageCreateNestedOneWithoutMemoriesInput
    embedding?: MemoryEmbeddingCreateNestedOneWithoutMemoryInput
  }

  export type MemoryUncheckedCreateInput = {
    id?: string
    userId: string
    sourceMessageId?: string | null
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    embedding?: MemoryEmbeddingUncheckedCreateNestedOneWithoutMemoryInput
  }

  export type MemoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMemoriesNestedInput
    sourceMessage?: MessageUpdateOneWithoutMemoriesNestedInput
    embedding?: MemoryEmbeddingUpdateOneWithoutMemoryNestedInput
  }

  export type MemoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: MemoryEmbeddingUncheckedUpdateOneWithoutMemoryNestedInput
  }

  export type MemoryCreateManyInput = {
    id?: string
    userId: string
    sourceMessageId?: string | null
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryEmbeddingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memory?: MemoryUpdateOneRequiredWithoutEmbeddingNestedInput
  }

  export type MemoryEmbeddingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryEmbeddingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryEmbeddingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    rating: $Enums.FeedbackRating
    reason?: string | null
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbackInput
    message: MessageCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    userId: string
    messageId: string
    rating: $Enums.FeedbackRating
    reason?: string | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbackNestedInput
    message?: MessageUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    userId: string
    messageId: string
    rating: $Enums.FeedbackRating
    reason?: string | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelRunCreateInput = {
    id?: string
    provider: string
    model: string
    promptTokens?: number | null
    completionTokens?: number | null
    latencyMs?: number | null
    retrievalCount?: number | null
    createdAt?: Date | string
    message: MessageCreateNestedOneWithoutModelRunsInput
  }

  export type ModelRunUncheckedCreateInput = {
    id?: string
    messageId: string
    provider: string
    model: string
    promptTokens?: number | null
    completionTokens?: number | null
    latencyMs?: number | null
    retrievalCount?: number | null
    createdAt?: Date | string
  }

  export type ModelRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: NullableIntFieldUpdateOperationsInput | number | null
    completionTokens?: NullableIntFieldUpdateOperationsInput | number | null
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retrievalCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutModelRunsNestedInput
  }

  export type ModelRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: NullableIntFieldUpdateOperationsInput | number | null
    completionTokens?: NullableIntFieldUpdateOperationsInput | number | null
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retrievalCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelRunCreateManyInput = {
    id?: string
    messageId: string
    provider: string
    model: string
    promptTokens?: number | null
    completionTokens?: number | null
    latencyMs?: number | null
    retrievalCount?: number | null
    createdAt?: Date | string
  }

  export type ModelRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: NullableIntFieldUpdateOperationsInput | number | null
    completionTokens?: NullableIntFieldUpdateOperationsInput | number | null
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retrievalCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: NullableIntFieldUpdateOperationsInput | number | null
    completionTokens?: NullableIntFieldUpdateOperationsInput | number | null
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retrievalCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type MemoryListRelationFilter = {
    every?: MemoryWhereInput
    some?: MemoryWhereInput
    none?: MemoryWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleFilter<$PrismaModel> | $Enums.MessageRole
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type ModelRunListRelationFilter = {
    every?: ModelRunWhereInput
    some?: ModelRunWhereInput
    none?: ModelRunWhereInput
  }

  export type ModelRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    tokenCount?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    tokenCount?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    tokenCount?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    tokenCount?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    tokenCount?: SortOrder
  }

  export type EnumMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.MessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumMessageRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumMemoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryType | EnumMemoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryTypeFilter<$PrismaModel> | $Enums.MemoryType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumMemoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryStatus | EnumMemoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryStatus[] | ListEnumMemoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryStatus[] | ListEnumMemoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryStatusFilter<$PrismaModel> | $Enums.MemoryStatus
  }

  export type MessageNullableScalarRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type MemoryEmbeddingNullableScalarRelationFilter = {
    is?: MemoryEmbeddingWhereInput | null
    isNot?: MemoryEmbeddingWhereInput | null
  }

  export type MemoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceMessageId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    confidence?: SortOrder
    importance?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemoryAvgOrderByAggregateInput = {
    confidence?: SortOrder
    importance?: SortOrder
  }

  export type MemoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceMessageId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    confidence?: SortOrder
    importance?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceMessageId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    confidence?: SortOrder
    importance?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemorySumOrderByAggregateInput = {
    confidence?: SortOrder
    importance?: SortOrder
  }

  export type EnumMemoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryType | EnumMemoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemoryTypeFilter<$PrismaModel>
    _max?: NestedEnumMemoryTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumMemoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryStatus | EnumMemoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryStatus[] | ListEnumMemoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryStatus[] | ListEnumMemoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemoryStatusFilter<$PrismaModel>
    _max?: NestedEnumMemoryStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MemoryScalarRelationFilter = {
    is?: MemoryWhereInput
    isNot?: MemoryWhereInput
  }

  export type MemoryEmbeddingCountOrderByAggregateInput = {
    id?: SortOrder
    memoryId?: SortOrder
    model?: SortOrder
    dimensions?: SortOrder
    createdAt?: SortOrder
  }

  export type MemoryEmbeddingAvgOrderByAggregateInput = {
    dimensions?: SortOrder
  }

  export type MemoryEmbeddingMaxOrderByAggregateInput = {
    id?: SortOrder
    memoryId?: SortOrder
    model?: SortOrder
    dimensions?: SortOrder
    createdAt?: SortOrder
  }

  export type MemoryEmbeddingMinOrderByAggregateInput = {
    id?: SortOrder
    memoryId?: SortOrder
    model?: SortOrder
    dimensions?: SortOrder
    createdAt?: SortOrder
  }

  export type MemoryEmbeddingSumOrderByAggregateInput = {
    dimensions?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumFeedbackRatingFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackRating | EnumFeedbackRatingFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackRatingFilter<$PrismaModel> | $Enums.FeedbackRating
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    rating?: SortOrder
    reason?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    rating?: SortOrder
    reason?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    rating?: SortOrder
    reason?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFeedbackRatingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackRating | EnumFeedbackRatingFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackRatingWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackRating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackRatingFilter<$PrismaModel>
    _max?: NestedEnumFeedbackRatingFilter<$PrismaModel>
  }

  export type ModelRunCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    latencyMs?: SortOrder
    retrievalCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ModelRunAvgOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    latencyMs?: SortOrder
    retrievalCount?: SortOrder
  }

  export type ModelRunMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    latencyMs?: SortOrder
    retrievalCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ModelRunMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    latencyMs?: SortOrder
    retrievalCount?: SortOrder
    createdAt?: SortOrder
  }

  export type ModelRunSumOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    latencyMs?: SortOrder
    retrievalCount?: SortOrder
  }

  export type ConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MemoryCreateNestedManyWithoutUserInput = {
    create?: XOR<MemoryCreateWithoutUserInput, MemoryUncheckedCreateWithoutUserInput> | MemoryCreateWithoutUserInput[] | MemoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutUserInput | MemoryCreateOrConnectWithoutUserInput[]
    createMany?: MemoryCreateManyUserInputEnvelope
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MemoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MemoryCreateWithoutUserInput, MemoryUncheckedCreateWithoutUserInput> | MemoryCreateWithoutUserInput[] | MemoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutUserInput | MemoryCreateOrConnectWithoutUserInput[]
    createMany?: MemoryCreateManyUserInputEnvelope
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MemoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemoryCreateWithoutUserInput, MemoryUncheckedCreateWithoutUserInput> | MemoryCreateWithoutUserInput[] | MemoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutUserInput | MemoryCreateOrConnectWithoutUserInput[]
    upsert?: MemoryUpsertWithWhereUniqueWithoutUserInput | MemoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemoryCreateManyUserInputEnvelope
    set?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    disconnect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    delete?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    update?: MemoryUpdateWithWhereUniqueWithoutUserInput | MemoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemoryUpdateManyWithWhereWithoutUserInput | MemoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemoryScalarWhereInput | MemoryScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MemoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemoryCreateWithoutUserInput, MemoryUncheckedCreateWithoutUserInput> | MemoryCreateWithoutUserInput[] | MemoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutUserInput | MemoryCreateOrConnectWithoutUserInput[]
    upsert?: MemoryUpsertWithWhereUniqueWithoutUserInput | MemoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemoryCreateManyUserInputEnvelope
    set?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    disconnect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    delete?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    update?: MemoryUpdateWithWhereUniqueWithoutUserInput | MemoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemoryUpdateManyWithWhereWithoutUserInput | MemoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemoryScalarWhereInput | MemoryScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutConversationsInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    upsert?: UserUpsertWithoutConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversationsInput, UserUpdateWithoutConversationsInput>, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type MemoryCreateNestedManyWithoutSourceMessageInput = {
    create?: XOR<MemoryCreateWithoutSourceMessageInput, MemoryUncheckedCreateWithoutSourceMessageInput> | MemoryCreateWithoutSourceMessageInput[] | MemoryUncheckedCreateWithoutSourceMessageInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutSourceMessageInput | MemoryCreateOrConnectWithoutSourceMessageInput[]
    createMany?: MemoryCreateManySourceMessageInputEnvelope
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutMessageInput = {
    create?: XOR<FeedbackCreateWithoutMessageInput, FeedbackUncheckedCreateWithoutMessageInput> | FeedbackCreateWithoutMessageInput[] | FeedbackUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutMessageInput | FeedbackCreateOrConnectWithoutMessageInput[]
    createMany?: FeedbackCreateManyMessageInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type ModelRunCreateNestedManyWithoutMessageInput = {
    create?: XOR<ModelRunCreateWithoutMessageInput, ModelRunUncheckedCreateWithoutMessageInput> | ModelRunCreateWithoutMessageInput[] | ModelRunUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ModelRunCreateOrConnectWithoutMessageInput | ModelRunCreateOrConnectWithoutMessageInput[]
    createMany?: ModelRunCreateManyMessageInputEnvelope
    connect?: ModelRunWhereUniqueInput | ModelRunWhereUniqueInput[]
  }

  export type MemoryUncheckedCreateNestedManyWithoutSourceMessageInput = {
    create?: XOR<MemoryCreateWithoutSourceMessageInput, MemoryUncheckedCreateWithoutSourceMessageInput> | MemoryCreateWithoutSourceMessageInput[] | MemoryUncheckedCreateWithoutSourceMessageInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutSourceMessageInput | MemoryCreateOrConnectWithoutSourceMessageInput[]
    createMany?: MemoryCreateManySourceMessageInputEnvelope
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<FeedbackCreateWithoutMessageInput, FeedbackUncheckedCreateWithoutMessageInput> | FeedbackCreateWithoutMessageInput[] | FeedbackUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutMessageInput | FeedbackCreateOrConnectWithoutMessageInput[]
    createMany?: FeedbackCreateManyMessageInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type ModelRunUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<ModelRunCreateWithoutMessageInput, ModelRunUncheckedCreateWithoutMessageInput> | ModelRunCreateWithoutMessageInput[] | ModelRunUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ModelRunCreateOrConnectWithoutMessageInput | ModelRunCreateOrConnectWithoutMessageInput[]
    createMany?: ModelRunCreateManyMessageInputEnvelope
    connect?: ModelRunWhereUniqueInput | ModelRunWhereUniqueInput[]
  }

  export type EnumMessageRoleFieldUpdateOperationsInput = {
    set?: $Enums.MessageRole
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type MemoryUpdateManyWithoutSourceMessageNestedInput = {
    create?: XOR<MemoryCreateWithoutSourceMessageInput, MemoryUncheckedCreateWithoutSourceMessageInput> | MemoryCreateWithoutSourceMessageInput[] | MemoryUncheckedCreateWithoutSourceMessageInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutSourceMessageInput | MemoryCreateOrConnectWithoutSourceMessageInput[]
    upsert?: MemoryUpsertWithWhereUniqueWithoutSourceMessageInput | MemoryUpsertWithWhereUniqueWithoutSourceMessageInput[]
    createMany?: MemoryCreateManySourceMessageInputEnvelope
    set?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    disconnect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    delete?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    update?: MemoryUpdateWithWhereUniqueWithoutSourceMessageInput | MemoryUpdateWithWhereUniqueWithoutSourceMessageInput[]
    updateMany?: MemoryUpdateManyWithWhereWithoutSourceMessageInput | MemoryUpdateManyWithWhereWithoutSourceMessageInput[]
    deleteMany?: MemoryScalarWhereInput | MemoryScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutMessageNestedInput = {
    create?: XOR<FeedbackCreateWithoutMessageInput, FeedbackUncheckedCreateWithoutMessageInput> | FeedbackCreateWithoutMessageInput[] | FeedbackUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutMessageInput | FeedbackCreateOrConnectWithoutMessageInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutMessageInput | FeedbackUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: FeedbackCreateManyMessageInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutMessageInput | FeedbackUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutMessageInput | FeedbackUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type ModelRunUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ModelRunCreateWithoutMessageInput, ModelRunUncheckedCreateWithoutMessageInput> | ModelRunCreateWithoutMessageInput[] | ModelRunUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ModelRunCreateOrConnectWithoutMessageInput | ModelRunCreateOrConnectWithoutMessageInput[]
    upsert?: ModelRunUpsertWithWhereUniqueWithoutMessageInput | ModelRunUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ModelRunCreateManyMessageInputEnvelope
    set?: ModelRunWhereUniqueInput | ModelRunWhereUniqueInput[]
    disconnect?: ModelRunWhereUniqueInput | ModelRunWhereUniqueInput[]
    delete?: ModelRunWhereUniqueInput | ModelRunWhereUniqueInput[]
    connect?: ModelRunWhereUniqueInput | ModelRunWhereUniqueInput[]
    update?: ModelRunUpdateWithWhereUniqueWithoutMessageInput | ModelRunUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ModelRunUpdateManyWithWhereWithoutMessageInput | ModelRunUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ModelRunScalarWhereInput | ModelRunScalarWhereInput[]
  }

  export type MemoryUncheckedUpdateManyWithoutSourceMessageNestedInput = {
    create?: XOR<MemoryCreateWithoutSourceMessageInput, MemoryUncheckedCreateWithoutSourceMessageInput> | MemoryCreateWithoutSourceMessageInput[] | MemoryUncheckedCreateWithoutSourceMessageInput[]
    connectOrCreate?: MemoryCreateOrConnectWithoutSourceMessageInput | MemoryCreateOrConnectWithoutSourceMessageInput[]
    upsert?: MemoryUpsertWithWhereUniqueWithoutSourceMessageInput | MemoryUpsertWithWhereUniqueWithoutSourceMessageInput[]
    createMany?: MemoryCreateManySourceMessageInputEnvelope
    set?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    disconnect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    delete?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    connect?: MemoryWhereUniqueInput | MemoryWhereUniqueInput[]
    update?: MemoryUpdateWithWhereUniqueWithoutSourceMessageInput | MemoryUpdateWithWhereUniqueWithoutSourceMessageInput[]
    updateMany?: MemoryUpdateManyWithWhereWithoutSourceMessageInput | MemoryUpdateManyWithWhereWithoutSourceMessageInput[]
    deleteMany?: MemoryScalarWhereInput | MemoryScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<FeedbackCreateWithoutMessageInput, FeedbackUncheckedCreateWithoutMessageInput> | FeedbackCreateWithoutMessageInput[] | FeedbackUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutMessageInput | FeedbackCreateOrConnectWithoutMessageInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutMessageInput | FeedbackUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: FeedbackCreateManyMessageInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutMessageInput | FeedbackUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutMessageInput | FeedbackUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type ModelRunUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ModelRunCreateWithoutMessageInput, ModelRunUncheckedCreateWithoutMessageInput> | ModelRunCreateWithoutMessageInput[] | ModelRunUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ModelRunCreateOrConnectWithoutMessageInput | ModelRunCreateOrConnectWithoutMessageInput[]
    upsert?: ModelRunUpsertWithWhereUniqueWithoutMessageInput | ModelRunUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ModelRunCreateManyMessageInputEnvelope
    set?: ModelRunWhereUniqueInput | ModelRunWhereUniqueInput[]
    disconnect?: ModelRunWhereUniqueInput | ModelRunWhereUniqueInput[]
    delete?: ModelRunWhereUniqueInput | ModelRunWhereUniqueInput[]
    connect?: ModelRunWhereUniqueInput | ModelRunWhereUniqueInput[]
    update?: ModelRunUpdateWithWhereUniqueWithoutMessageInput | ModelRunUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ModelRunUpdateManyWithWhereWithoutMessageInput | ModelRunUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ModelRunScalarWhereInput | ModelRunScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMemoriesInput = {
    create?: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemoriesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutMemoriesInput = {
    create?: XOR<MessageCreateWithoutMemoriesInput, MessageUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutMemoriesInput
    connect?: MessageWhereUniqueInput
  }

  export type MemoryEmbeddingCreateNestedOneWithoutMemoryInput = {
    connect?: MemoryEmbeddingWhereUniqueInput
  }

  export type MemoryEmbeddingUncheckedCreateNestedOneWithoutMemoryInput = {
    connect?: MemoryEmbeddingWhereUniqueInput
  }

  export type EnumMemoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.MemoryType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMemoryStatusFieldUpdateOperationsInput = {
    set?: $Enums.MemoryStatus
  }

  export type UserUpdateOneRequiredWithoutMemoriesNestedInput = {
    create?: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemoriesInput
    upsert?: UserUpsertWithoutMemoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemoriesInput, UserUpdateWithoutMemoriesInput>, UserUncheckedUpdateWithoutMemoriesInput>
  }

  export type MessageUpdateOneWithoutMemoriesNestedInput = {
    create?: XOR<MessageCreateWithoutMemoriesInput, MessageUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutMemoriesInput
    upsert?: MessageUpsertWithoutMemoriesInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutMemoriesInput, MessageUpdateWithoutMemoriesInput>, MessageUncheckedUpdateWithoutMemoriesInput>
  }

  export type MemoryEmbeddingUpdateOneWithoutMemoryNestedInput = {
    disconnect?: MemoryEmbeddingWhereInput | boolean
    delete?: MemoryEmbeddingWhereInput | boolean
    connect?: MemoryEmbeddingWhereUniqueInput
    update?: XOR<XOR<MemoryEmbeddingUpdateToOneWithWhereWithoutMemoryInput, MemoryEmbeddingUpdateWithoutMemoryInput>, MemoryEmbeddingUncheckedUpdateWithoutMemoryInput>
  }

  export type MemoryEmbeddingUncheckedUpdateOneWithoutMemoryNestedInput = {
    disconnect?: MemoryEmbeddingWhereInput | boolean
    delete?: MemoryEmbeddingWhereInput | boolean
    connect?: MemoryEmbeddingWhereUniqueInput
    update?: XOR<XOR<MemoryEmbeddingUpdateToOneWithWhereWithoutMemoryInput, MemoryEmbeddingUpdateWithoutMemoryInput>, MemoryEmbeddingUncheckedUpdateWithoutMemoryInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MemoryUpdateOneRequiredWithoutEmbeddingNestedInput = {
    create?: XOR<MemoryCreateWithoutEmbeddingInput, MemoryUncheckedCreateWithoutEmbeddingInput>
    connectOrCreate?: MemoryCreateOrConnectWithoutEmbeddingInput
    upsert?: MemoryUpsertWithoutEmbeddingInput
    connect?: MemoryWhereUniqueInput
    update?: XOR<XOR<MemoryUpdateToOneWithWhereWithoutEmbeddingInput, MemoryUpdateWithoutEmbeddingInput>, MemoryUncheckedUpdateWithoutEmbeddingInput>
  }

  export type UserCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<MessageCreateWithoutFeedbackInput, MessageUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: MessageCreateOrConnectWithoutFeedbackInput
    connect?: MessageWhereUniqueInput
  }

  export type EnumFeedbackRatingFieldUpdateOperationsInput = {
    set?: $Enums.FeedbackRating
  }

  export type UserUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput
    upsert?: UserUpsertWithoutFeedbackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackInput, UserUpdateWithoutFeedbackInput>, UserUncheckedUpdateWithoutFeedbackInput>
  }

  export type MessageUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<MessageCreateWithoutFeedbackInput, MessageUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: MessageCreateOrConnectWithoutFeedbackInput
    upsert?: MessageUpsertWithoutFeedbackInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutFeedbackInput, MessageUpdateWithoutFeedbackInput>, MessageUncheckedUpdateWithoutFeedbackInput>
  }

  export type MessageCreateNestedOneWithoutModelRunsInput = {
    create?: XOR<MessageCreateWithoutModelRunsInput, MessageUncheckedCreateWithoutModelRunsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutModelRunsInput
    connect?: MessageWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutModelRunsNestedInput = {
    create?: XOR<MessageCreateWithoutModelRunsInput, MessageUncheckedCreateWithoutModelRunsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutModelRunsInput
    upsert?: MessageUpsertWithoutModelRunsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutModelRunsInput, MessageUpdateWithoutModelRunsInput>, MessageUncheckedUpdateWithoutModelRunsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleFilter<$PrismaModel> | $Enums.MessageRole
  }

  export type NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.MessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumMessageRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMemoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryType | EnumMemoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryTypeFilter<$PrismaModel> | $Enums.MemoryType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMemoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryStatus | EnumMemoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryStatus[] | ListEnumMemoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryStatus[] | ListEnumMemoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryStatusFilter<$PrismaModel> | $Enums.MemoryStatus
  }

  export type NestedEnumMemoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryType | EnumMemoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryType[] | ListEnumMemoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemoryTypeFilter<$PrismaModel>
    _max?: NestedEnumMemoryTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMemoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryStatus | EnumMemoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemoryStatus[] | ListEnumMemoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemoryStatus[] | ListEnumMemoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemoryStatusFilter<$PrismaModel>
    _max?: NestedEnumMemoryStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumFeedbackRatingFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackRating | EnumFeedbackRatingFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackRatingFilter<$PrismaModel> | $Enums.FeedbackRating
  }

  export type NestedEnumFeedbackRatingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackRating | EnumFeedbackRatingFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackRatingWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackRating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackRatingFilter<$PrismaModel>
    _max?: NestedEnumFeedbackRatingFilter<$PrismaModel>
  }

  export type ConversationCreateWithoutUserInput = {
    id?: string
    title?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUserInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationCreateManyUserInputEnvelope = {
    data: ConversationCreateManyUserInput | ConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MemoryCreateWithoutUserInput = {
    id?: string
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceMessage?: MessageCreateNestedOneWithoutMemoriesInput
    embedding?: MemoryEmbeddingCreateNestedOneWithoutMemoryInput
  }

  export type MemoryUncheckedCreateWithoutUserInput = {
    id?: string
    sourceMessageId?: string | null
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    embedding?: MemoryEmbeddingUncheckedCreateNestedOneWithoutMemoryInput
  }

  export type MemoryCreateOrConnectWithoutUserInput = {
    where: MemoryWhereUniqueInput
    create: XOR<MemoryCreateWithoutUserInput, MemoryUncheckedCreateWithoutUserInput>
  }

  export type MemoryCreateManyUserInputEnvelope = {
    data: MemoryCreateManyUserInput | MemoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutUserInput = {
    id?: string
    rating: $Enums.FeedbackRating
    reason?: string | null
    comment?: string | null
    createdAt?: Date | string
    message: MessageCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutUserInput = {
    id?: string
    messageId: string
    rating: $Enums.FeedbackRating
    reason?: string | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackCreateManyUserInputEnvelope = {
    data: FeedbackCreateManyUserInput | FeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
  }

  export type ConversationUpdateManyWithWhereWithoutUserInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: StringFilter<"Conversation"> | string
    userId?: StringFilter<"Conversation"> | string
    title?: StringNullableFilter<"Conversation"> | string | null
    summary?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    archivedAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
  }

  export type MemoryUpsertWithWhereUniqueWithoutUserInput = {
    where: MemoryWhereUniqueInput
    update: XOR<MemoryUpdateWithoutUserInput, MemoryUncheckedUpdateWithoutUserInput>
    create: XOR<MemoryCreateWithoutUserInput, MemoryUncheckedCreateWithoutUserInput>
  }

  export type MemoryUpdateWithWhereUniqueWithoutUserInput = {
    where: MemoryWhereUniqueInput
    data: XOR<MemoryUpdateWithoutUserInput, MemoryUncheckedUpdateWithoutUserInput>
  }

  export type MemoryUpdateManyWithWhereWithoutUserInput = {
    where: MemoryScalarWhereInput
    data: XOR<MemoryUpdateManyMutationInput, MemoryUncheckedUpdateManyWithoutUserInput>
  }

  export type MemoryScalarWhereInput = {
    AND?: MemoryScalarWhereInput | MemoryScalarWhereInput[]
    OR?: MemoryScalarWhereInput[]
    NOT?: MemoryScalarWhereInput | MemoryScalarWhereInput[]
    id?: StringFilter<"Memory"> | string
    userId?: StringFilter<"Memory"> | string
    sourceMessageId?: StringNullableFilter<"Memory"> | string | null
    type?: EnumMemoryTypeFilter<"Memory"> | $Enums.MemoryType
    content?: StringFilter<"Memory"> | string
    confidence?: FloatFilter<"Memory"> | number
    importance?: FloatFilter<"Memory"> | number
    status?: EnumMemoryStatusFilter<"Memory"> | $Enums.MemoryStatus
    expiresAt?: DateTimeNullableFilter<"Memory"> | Date | string | null
    createdAt?: DateTimeFilter<"Memory"> | Date | string
    updatedAt?: DateTimeFilter<"Memory"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: StringFilter<"Feedback"> | string
    userId?: StringFilter<"Feedback"> | string
    messageId?: StringFilter<"Feedback"> | string
    rating?: EnumFeedbackRatingFilter<"Feedback"> | $Enums.FeedbackRating
    reason?: StringNullableFilter<"Feedback"> | string | null
    comment?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type UserCreateWithoutConversationsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryCreateNestedManyWithoutUserInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversationsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutUserInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
    memories?: MemoryCreateNestedManyWithoutSourceMessageInput
    feedback?: FeedbackCreateNestedManyWithoutMessageInput
    modelRuns?: ModelRunCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutSourceMessageInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutMessageInput
    modelRuns?: ModelRunUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConversationsInput = {
    update: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type UserUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    content?: StringFilter<"Message"> | string
    tokenCount?: IntNullableFilter<"Message"> | number | null
    model?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    title?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    user: UserCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    title?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type MemoryCreateWithoutSourceMessageInput = {
    id?: string
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMemoriesInput
    embedding?: MemoryEmbeddingCreateNestedOneWithoutMemoryInput
  }

  export type MemoryUncheckedCreateWithoutSourceMessageInput = {
    id?: string
    userId: string
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    embedding?: MemoryEmbeddingUncheckedCreateNestedOneWithoutMemoryInput
  }

  export type MemoryCreateOrConnectWithoutSourceMessageInput = {
    where: MemoryWhereUniqueInput
    create: XOR<MemoryCreateWithoutSourceMessageInput, MemoryUncheckedCreateWithoutSourceMessageInput>
  }

  export type MemoryCreateManySourceMessageInputEnvelope = {
    data: MemoryCreateManySourceMessageInput | MemoryCreateManySourceMessageInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutMessageInput = {
    id?: string
    rating: $Enums.FeedbackRating
    reason?: string | null
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutMessageInput = {
    id?: string
    userId: string
    rating: $Enums.FeedbackRating
    reason?: string | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutMessageInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutMessageInput, FeedbackUncheckedCreateWithoutMessageInput>
  }

  export type FeedbackCreateManyMessageInputEnvelope = {
    data: FeedbackCreateManyMessageInput | FeedbackCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type ModelRunCreateWithoutMessageInput = {
    id?: string
    provider: string
    model: string
    promptTokens?: number | null
    completionTokens?: number | null
    latencyMs?: number | null
    retrievalCount?: number | null
    createdAt?: Date | string
  }

  export type ModelRunUncheckedCreateWithoutMessageInput = {
    id?: string
    provider: string
    model: string
    promptTokens?: number | null
    completionTokens?: number | null
    latencyMs?: number | null
    retrievalCount?: number | null
    createdAt?: Date | string
  }

  export type ModelRunCreateOrConnectWithoutMessageInput = {
    where: ModelRunWhereUniqueInput
    create: XOR<ModelRunCreateWithoutMessageInput, ModelRunUncheckedCreateWithoutMessageInput>
  }

  export type ModelRunCreateManyMessageInputEnvelope = {
    data: ModelRunCreateManyMessageInput | ModelRunCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemoryUpsertWithWhereUniqueWithoutSourceMessageInput = {
    where: MemoryWhereUniqueInput
    update: XOR<MemoryUpdateWithoutSourceMessageInput, MemoryUncheckedUpdateWithoutSourceMessageInput>
    create: XOR<MemoryCreateWithoutSourceMessageInput, MemoryUncheckedCreateWithoutSourceMessageInput>
  }

  export type MemoryUpdateWithWhereUniqueWithoutSourceMessageInput = {
    where: MemoryWhereUniqueInput
    data: XOR<MemoryUpdateWithoutSourceMessageInput, MemoryUncheckedUpdateWithoutSourceMessageInput>
  }

  export type MemoryUpdateManyWithWhereWithoutSourceMessageInput = {
    where: MemoryScalarWhereInput
    data: XOR<MemoryUpdateManyMutationInput, MemoryUncheckedUpdateManyWithoutSourceMessageInput>
  }

  export type FeedbackUpsertWithWhereUniqueWithoutMessageInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutMessageInput, FeedbackUncheckedUpdateWithoutMessageInput>
    create: XOR<FeedbackCreateWithoutMessageInput, FeedbackUncheckedCreateWithoutMessageInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutMessageInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutMessageInput, FeedbackUncheckedUpdateWithoutMessageInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutMessageInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutMessageInput>
  }

  export type ModelRunUpsertWithWhereUniqueWithoutMessageInput = {
    where: ModelRunWhereUniqueInput
    update: XOR<ModelRunUpdateWithoutMessageInput, ModelRunUncheckedUpdateWithoutMessageInput>
    create: XOR<ModelRunCreateWithoutMessageInput, ModelRunUncheckedCreateWithoutMessageInput>
  }

  export type ModelRunUpdateWithWhereUniqueWithoutMessageInput = {
    where: ModelRunWhereUniqueInput
    data: XOR<ModelRunUpdateWithoutMessageInput, ModelRunUncheckedUpdateWithoutMessageInput>
  }

  export type ModelRunUpdateManyWithWhereWithoutMessageInput = {
    where: ModelRunScalarWhereInput
    data: XOR<ModelRunUpdateManyMutationInput, ModelRunUncheckedUpdateManyWithoutMessageInput>
  }

  export type ModelRunScalarWhereInput = {
    AND?: ModelRunScalarWhereInput | ModelRunScalarWhereInput[]
    OR?: ModelRunScalarWhereInput[]
    NOT?: ModelRunScalarWhereInput | ModelRunScalarWhereInput[]
    id?: StringFilter<"ModelRun"> | string
    messageId?: StringFilter<"ModelRun"> | string
    provider?: StringFilter<"ModelRun"> | string
    model?: StringFilter<"ModelRun"> | string
    promptTokens?: IntNullableFilter<"ModelRun"> | number | null
    completionTokens?: IntNullableFilter<"ModelRun"> | number | null
    latencyMs?: IntNullableFilter<"ModelRun"> | number | null
    retrievalCount?: IntNullableFilter<"ModelRun"> | number | null
    createdAt?: DateTimeFilter<"ModelRun"> | Date | string
  }

  export type UserCreateWithoutMemoriesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutUserInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMemoriesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMemoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
  }

  export type MessageCreateWithoutMemoriesInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    feedback?: FeedbackCreateNestedManyWithoutMessageInput
    modelRuns?: ModelRunCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutMemoriesInput = {
    id?: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutMessageInput
    modelRuns?: ModelRunUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutMemoriesInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutMemoriesInput, MessageUncheckedCreateWithoutMemoriesInput>
  }

  export type UserUpsertWithoutMemoriesInput = {
    update: XOR<UserUpdateWithoutMemoriesInput, UserUncheckedUpdateWithoutMemoriesInput>
    create: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemoriesInput, UserUncheckedUpdateWithoutMemoriesInput>
  }

  export type UserUpdateWithoutMemoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMemoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithoutMemoriesInput = {
    update: XOR<MessageUpdateWithoutMemoriesInput, MessageUncheckedUpdateWithoutMemoriesInput>
    create: XOR<MessageCreateWithoutMemoriesInput, MessageUncheckedCreateWithoutMemoriesInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutMemoriesInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutMemoriesInput, MessageUncheckedUpdateWithoutMemoriesInput>
  }

  export type MessageUpdateWithoutMemoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    feedback?: FeedbackUpdateManyWithoutMessageNestedInput
    modelRuns?: ModelRunUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutMemoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateManyWithoutMessageNestedInput
    modelRuns?: ModelRunUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MemoryEmbeddingUpdateToOneWithWhereWithoutMemoryInput = {
    where?: MemoryEmbeddingWhereInput
    data: XOR<MemoryEmbeddingUpdateWithoutMemoryInput, MemoryEmbeddingUncheckedUpdateWithoutMemoryInput>
  }

  export type MemoryEmbeddingUpdateWithoutMemoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryEmbeddingUncheckedUpdateWithoutMemoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryCreateWithoutEmbeddingInput = {
    id?: string
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMemoriesInput
    sourceMessage?: MessageCreateNestedOneWithoutMemoriesInput
  }

  export type MemoryUncheckedCreateWithoutEmbeddingInput = {
    id?: string
    userId: string
    sourceMessageId?: string | null
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemoryCreateOrConnectWithoutEmbeddingInput = {
    where: MemoryWhereUniqueInput
    create: XOR<MemoryCreateWithoutEmbeddingInput, MemoryUncheckedCreateWithoutEmbeddingInput>
  }

  export type MemoryUpsertWithoutEmbeddingInput = {
    update: XOR<MemoryUpdateWithoutEmbeddingInput, MemoryUncheckedUpdateWithoutEmbeddingInput>
    create: XOR<MemoryCreateWithoutEmbeddingInput, MemoryUncheckedCreateWithoutEmbeddingInput>
    where?: MemoryWhereInput
  }

  export type MemoryUpdateToOneWithWhereWithoutEmbeddingInput = {
    where?: MemoryWhereInput
    data: XOR<MemoryUpdateWithoutEmbeddingInput, MemoryUncheckedUpdateWithoutEmbeddingInput>
  }

  export type MemoryUpdateWithoutEmbeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMemoriesNestedInput
    sourceMessage?: MessageUpdateOneWithoutMemoriesNestedInput
  }

  export type MemoryUncheckedUpdateWithoutEmbeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutFeedbackInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutUserInput
    memories?: MemoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbackInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    memories?: MemoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
  }

  export type MessageCreateWithoutFeedbackInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    memories?: MemoryCreateNestedManyWithoutSourceMessageInput
    modelRuns?: ModelRunCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutFeedbackInput = {
    id?: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutSourceMessageInput
    modelRuns?: ModelRunUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutFeedbackInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutFeedbackInput, MessageUncheckedCreateWithoutFeedbackInput>
  }

  export type UserUpsertWithoutFeedbackInput = {
    update: XOR<UserUpdateWithoutFeedbackInput, UserUncheckedUpdateWithoutFeedbackInput>
    create: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackInput, UserUncheckedUpdateWithoutFeedbackInput>
  }

  export type UserUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    memories?: MemoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    memories?: MemoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithoutFeedbackInput = {
    update: XOR<MessageUpdateWithoutFeedbackInput, MessageUncheckedUpdateWithoutFeedbackInput>
    create: XOR<MessageCreateWithoutFeedbackInput, MessageUncheckedCreateWithoutFeedbackInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutFeedbackInput, MessageUncheckedUpdateWithoutFeedbackInput>
  }

  export type MessageUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    memories?: MemoryUpdateManyWithoutSourceMessageNestedInput
    modelRuns?: ModelRunUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutSourceMessageNestedInput
    modelRuns?: ModelRunUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateWithoutModelRunsInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    memories?: MemoryCreateNestedManyWithoutSourceMessageInput
    feedback?: FeedbackCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutModelRunsInput = {
    id?: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
    memories?: MemoryUncheckedCreateNestedManyWithoutSourceMessageInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutModelRunsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutModelRunsInput, MessageUncheckedCreateWithoutModelRunsInput>
  }

  export type MessageUpsertWithoutModelRunsInput = {
    update: XOR<MessageUpdateWithoutModelRunsInput, MessageUncheckedUpdateWithoutModelRunsInput>
    create: XOR<MessageCreateWithoutModelRunsInput, MessageUncheckedCreateWithoutModelRunsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutModelRunsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutModelRunsInput, MessageUncheckedUpdateWithoutModelRunsInput>
  }

  export type MessageUpdateWithoutModelRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    memories?: MemoryUpdateManyWithoutSourceMessageNestedInput
    feedback?: FeedbackUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutModelRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutSourceMessageNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ConversationCreateManyUserInput = {
    id?: string
    title?: string | null
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
  }

  export type MemoryCreateManyUserInput = {
    id?: string
    sourceMessageId?: string | null
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackCreateManyUserInput = {
    id?: string
    messageId: string
    rating: $Enums.FeedbackRating
    reason?: string | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type ConversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceMessage?: MessageUpdateOneWithoutMemoriesNestedInput
    embedding?: MemoryEmbeddingUpdateOneWithoutMemoryNestedInput
  }

  export type MemoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: MemoryEmbeddingUncheckedUpdateOneWithoutMemoryNestedInput
  }

  export type MemoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    tokenCount?: number | null
    model?: string | null
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUpdateManyWithoutSourceMessageNestedInput
    feedback?: FeedbackUpdateManyWithoutMessageNestedInput
    modelRuns?: ModelRunUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryUncheckedUpdateManyWithoutSourceMessageNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutMessageNestedInput
    modelRuns?: ModelRunUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: NullableIntFieldUpdateOperationsInput | number | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryCreateManySourceMessageInput = {
    id?: string
    userId: string
    type: $Enums.MemoryType
    content: string
    confidence?: number
    importance?: number
    status?: $Enums.MemoryStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackCreateManyMessageInput = {
    id?: string
    userId: string
    rating: $Enums.FeedbackRating
    reason?: string | null
    comment?: string | null
    createdAt?: Date | string
  }

  export type ModelRunCreateManyMessageInput = {
    id?: string
    provider: string
    model: string
    promptTokens?: number | null
    completionTokens?: number | null
    latencyMs?: number | null
    retrievalCount?: number | null
    createdAt?: Date | string
  }

  export type MemoryUpdateWithoutSourceMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMemoriesNestedInput
    embedding?: MemoryEmbeddingUpdateOneWithoutMemoryNestedInput
  }

  export type MemoryUncheckedUpdateWithoutSourceMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embedding?: MemoryEmbeddingUncheckedUpdateOneWithoutMemoryNestedInput
  }

  export type MemoryUncheckedUpdateManyWithoutSourceMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMemoryTypeFieldUpdateOperationsInput | $Enums.MemoryType
    content?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    importance?: FloatFieldUpdateOperationsInput | number
    status?: EnumMemoryStatusFieldUpdateOperationsInput | $Enums.MemoryStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelRunUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: NullableIntFieldUpdateOperationsInput | number | null
    completionTokens?: NullableIntFieldUpdateOperationsInput | number | null
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retrievalCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelRunUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: NullableIntFieldUpdateOperationsInput | number | null
    completionTokens?: NullableIntFieldUpdateOperationsInput | number | null
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retrievalCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelRunUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: NullableIntFieldUpdateOperationsInput | number | null
    completionTokens?: NullableIntFieldUpdateOperationsInput | number | null
    latencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    retrievalCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}