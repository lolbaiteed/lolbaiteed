
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
 * Model attendees
 * 
 */
export type attendees = $Result.DefaultSelection<Prisma.$attendeesPayload>
/**
 * Model channels
 * 
 */
export type channels = $Result.DefaultSelection<Prisma.$channelsPayload>
/**
 * Model event_tickets
 * 
 */
export type event_tickets = $Result.DefaultSelection<Prisma.$event_ticketsPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model organizers
 * 
 */
export type organizers = $Result.DefaultSelection<Prisma.$organizersPayload>
/**
 * Model registrations
 * 
 */
export type registrations = $Result.DefaultSelection<Prisma.$registrationsPayload>
/**
 * Model rooms
 * 
 */
export type rooms = $Result.DefaultSelection<Prisma.$roomsPayload>
/**
 * Model session_registrations
 * 
 */
export type session_registrations = $Result.DefaultSelection<Prisma.$session_registrationsPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const sessions_type: {
  talk: 'talk',
  workshop: 'workshop'
};

export type sessions_type = (typeof sessions_type)[keyof typeof sessions_type]

}

export type sessions_type = $Enums.sessions_type

export const sessions_type: typeof $Enums.sessions_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attendees
 * const attendees = await prisma.attendees.findMany()
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
   * // Fetch zero or more Attendees
   * const attendees = await prisma.attendees.findMany()
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
   * `prisma.attendees`: Exposes CRUD operations for the **attendees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendees
    * const attendees = await prisma.attendees.findMany()
    * ```
    */
  get attendees(): Prisma.attendeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channels`: Exposes CRUD operations for the **channels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channels.findMany()
    * ```
    */
  get channels(): Prisma.channelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event_tickets`: Exposes CRUD operations for the **event_tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_tickets
    * const event_tickets = await prisma.event_tickets.findMany()
    * ```
    */
  get event_tickets(): Prisma.event_ticketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizers`: Exposes CRUD operations for the **organizers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizers
    * const organizers = await prisma.organizers.findMany()
    * ```
    */
  get organizers(): Prisma.organizersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registrations`: Exposes CRUD operations for the **registrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registrations.findMany()
    * ```
    */
  get registrations(): Prisma.registrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rooms`: Exposes CRUD operations for the **rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.rooms.findMany()
    * ```
    */
  get rooms(): Prisma.roomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session_registrations`: Exposes CRUD operations for the **session_registrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Session_registrations
    * const session_registrations = await prisma.session_registrations.findMany()
    * ```
    */
  get session_registrations(): Prisma.session_registrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
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
    attendees: 'attendees',
    channels: 'channels',
    event_tickets: 'event_tickets',
    events: 'events',
    organizers: 'organizers',
    registrations: 'registrations',
    rooms: 'rooms',
    session_registrations: 'session_registrations',
    sessions: 'sessions'
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
      modelProps: "attendees" | "channels" | "event_tickets" | "events" | "organizers" | "registrations" | "rooms" | "session_registrations" | "sessions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      attendees: {
        payload: Prisma.$attendeesPayload<ExtArgs>
        fields: Prisma.attendeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attendeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attendeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          findFirst: {
            args: Prisma.attendeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attendeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          findMany: {
            args: Prisma.attendeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>[]
          }
          create: {
            args: Prisma.attendeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          createMany: {
            args: Prisma.attendeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.attendeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          update: {
            args: Prisma.attendeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          deleteMany: {
            args: Prisma.attendeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attendeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.attendeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendeesPayload>
          }
          aggregate: {
            args: Prisma.AttendeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendees>
          }
          groupBy: {
            args: Prisma.attendeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.attendeesCountArgs<ExtArgs>
            result: $Utils.Optional<AttendeesCountAggregateOutputType> | number
          }
        }
      }
      channels: {
        payload: Prisma.$channelsPayload<ExtArgs>
        fields: Prisma.channelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.channelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.channelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          findFirst: {
            args: Prisma.channelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.channelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          findMany: {
            args: Prisma.channelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>[]
          }
          create: {
            args: Prisma.channelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          createMany: {
            args: Prisma.channelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.channelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          update: {
            args: Prisma.channelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          deleteMany: {
            args: Prisma.channelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.channelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.channelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channelsPayload>
          }
          aggregate: {
            args: Prisma.ChannelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannels>
          }
          groupBy: {
            args: Prisma.channelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.channelsCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelsCountAggregateOutputType> | number
          }
        }
      }
      event_tickets: {
        payload: Prisma.$event_ticketsPayload<ExtArgs>
        fields: Prisma.event_ticketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.event_ticketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_ticketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.event_ticketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_ticketsPayload>
          }
          findFirst: {
            args: Prisma.event_ticketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_ticketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.event_ticketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_ticketsPayload>
          }
          findMany: {
            args: Prisma.event_ticketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_ticketsPayload>[]
          }
          create: {
            args: Prisma.event_ticketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_ticketsPayload>
          }
          createMany: {
            args: Prisma.event_ticketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.event_ticketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_ticketsPayload>
          }
          update: {
            args: Prisma.event_ticketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_ticketsPayload>
          }
          deleteMany: {
            args: Prisma.event_ticketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.event_ticketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.event_ticketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_ticketsPayload>
          }
          aggregate: {
            args: Prisma.Event_ticketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent_tickets>
          }
          groupBy: {
            args: Prisma.event_ticketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Event_ticketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.event_ticketsCountArgs<ExtArgs>
            result: $Utils.Optional<Event_ticketsCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      organizers: {
        payload: Prisma.$organizersPayload<ExtArgs>
        fields: Prisma.organizersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          findFirst: {
            args: Prisma.organizersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          findMany: {
            args: Prisma.organizersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>[]
          }
          create: {
            args: Prisma.organizersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          createMany: {
            args: Prisma.organizersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.organizersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          update: {
            args: Prisma.organizersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          deleteMany: {
            args: Prisma.organizersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.organizersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizersPayload>
          }
          aggregate: {
            args: Prisma.OrganizersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizers>
          }
          groupBy: {
            args: Prisma.organizersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizersGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizersCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizersCountAggregateOutputType> | number
          }
        }
      }
      registrations: {
        payload: Prisma.$registrationsPayload<ExtArgs>
        fields: Prisma.registrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.registrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.registrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          findFirst: {
            args: Prisma.registrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.registrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          findMany: {
            args: Prisma.registrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>[]
          }
          create: {
            args: Prisma.registrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          createMany: {
            args: Prisma.registrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.registrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          update: {
            args: Prisma.registrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          deleteMany: {
            args: Prisma.registrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.registrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.registrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrationsPayload>
          }
          aggregate: {
            args: Prisma.RegistrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrations>
          }
          groupBy: {
            args: Prisma.registrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.registrationsCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationsCountAggregateOutputType> | number
          }
        }
      }
      rooms: {
        payload: Prisma.$roomsPayload<ExtArgs>
        fields: Prisma.roomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          findFirst: {
            args: Prisma.roomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          findMany: {
            args: Prisma.roomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          create: {
            args: Prisma.roomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          createMany: {
            args: Prisma.roomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.roomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          update: {
            args: Prisma.roomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          deleteMany: {
            args: Prisma.roomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.roomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          aggregate: {
            args: Prisma.RoomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRooms>
          }
          groupBy: {
            args: Prisma.roomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.roomsCountArgs<ExtArgs>
            result: $Utils.Optional<RoomsCountAggregateOutputType> | number
          }
        }
      }
      session_registrations: {
        payload: Prisma.$session_registrationsPayload<ExtArgs>
        fields: Prisma.session_registrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.session_registrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_registrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.session_registrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_registrationsPayload>
          }
          findFirst: {
            args: Prisma.session_registrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_registrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.session_registrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_registrationsPayload>
          }
          findMany: {
            args: Prisma.session_registrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_registrationsPayload>[]
          }
          create: {
            args: Prisma.session_registrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_registrationsPayload>
          }
          createMany: {
            args: Prisma.session_registrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.session_registrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_registrationsPayload>
          }
          update: {
            args: Prisma.session_registrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_registrationsPayload>
          }
          deleteMany: {
            args: Prisma.session_registrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.session_registrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.session_registrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_registrationsPayload>
          }
          aggregate: {
            args: Prisma.Session_registrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession_registrations>
          }
          groupBy: {
            args: Prisma.session_registrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Session_registrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.session_registrationsCountArgs<ExtArgs>
            result: $Utils.Optional<Session_registrationsCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
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
    attendees?: attendeesOmit
    channels?: channelsOmit
    event_tickets?: event_ticketsOmit
    events?: eventsOmit
    organizers?: organizersOmit
    registrations?: registrationsOmit
    rooms?: roomsOmit
    session_registrations?: session_registrationsOmit
    sessions?: sessionsOmit
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
   * Count Type AttendeesCountOutputType
   */

  export type AttendeesCountOutputType = {
    registrations: number
  }

  export type AttendeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | AttendeesCountOutputTypeCountRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * AttendeesCountOutputType without action
   */
  export type AttendeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendeesCountOutputType
     */
    select?: AttendeesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttendeesCountOutputType without action
   */
  export type AttendeesCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registrationsWhereInput
  }


  /**
   * Count Type ChannelsCountOutputType
   */

  export type ChannelsCountOutputType = {
    rooms: number
  }

  export type ChannelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | ChannelsCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * ChannelsCountOutputType without action
   */
  export type ChannelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelsCountOutputType
     */
    select?: ChannelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelsCountOutputType without action
   */
  export type ChannelsCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomsWhereInput
  }


  /**
   * Count Type Event_ticketsCountOutputType
   */

  export type Event_ticketsCountOutputType = {
    registrations: number
  }

  export type Event_ticketsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | Event_ticketsCountOutputTypeCountRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * Event_ticketsCountOutputType without action
   */
  export type Event_ticketsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_ticketsCountOutputType
     */
    select?: Event_ticketsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Event_ticketsCountOutputType without action
   */
  export type Event_ticketsCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registrationsWhereInput
  }


  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    channels: number
    event_tickets: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | EventsCountOutputTypeCountChannelsArgs
    event_tickets?: boolean | EventsCountOutputTypeCountEvent_ticketsArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channelsWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountEvent_ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_ticketsWhereInput
  }


  /**
   * Count Type OrganizersCountOutputType
   */

  export type OrganizersCountOutputType = {
    events: number
  }

  export type OrganizersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | OrganizersCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * OrganizersCountOutputType without action
   */
  export type OrganizersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizersCountOutputType
     */
    select?: OrganizersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizersCountOutputType without action
   */
  export type OrganizersCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
  }


  /**
   * Count Type RegistrationsCountOutputType
   */

  export type RegistrationsCountOutputType = {
    session_registrations: number
  }

  export type RegistrationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_registrations?: boolean | RegistrationsCountOutputTypeCountSession_registrationsArgs
  }

  // Custom InputTypes
  /**
   * RegistrationsCountOutputType without action
   */
  export type RegistrationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationsCountOutputType
     */
    select?: RegistrationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegistrationsCountOutputType without action
   */
  export type RegistrationsCountOutputTypeCountSession_registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_registrationsWhereInput
  }


  /**
   * Count Type RoomsCountOutputType
   */

  export type RoomsCountOutputType = {
    sessions: number
  }

  export type RoomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | RoomsCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomsCountOutputType
     */
    select?: RoomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
  }


  /**
   * Count Type SessionsCountOutputType
   */

  export type SessionsCountOutputType = {
    session_registrations: number
  }

  export type SessionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_registrations?: boolean | SessionsCountOutputTypeCountSession_registrationsArgs
  }

  // Custom InputTypes
  /**
   * SessionsCountOutputType without action
   */
  export type SessionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsCountOutputType
     */
    select?: SessionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionsCountOutputType without action
   */
  export type SessionsCountOutputTypeCountSession_registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_registrationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model attendees
   */

  export type AggregateAttendees = {
    _count: AttendeesCountAggregateOutputType | null
    _avg: AttendeesAvgAggregateOutputType | null
    _sum: AttendeesSumAggregateOutputType | null
    _min: AttendeesMinAggregateOutputType | null
    _max: AttendeesMaxAggregateOutputType | null
  }

  export type AttendeesAvgAggregateOutputType = {
    id: number | null
  }

  export type AttendeesSumAggregateOutputType = {
    id: number | null
  }

  export type AttendeesMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    username: string | null
    email: string | null
    registration_code: string | null
    login_token: string | null
  }

  export type AttendeesMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    username: string | null
    email: string | null
    registration_code: string | null
    login_token: string | null
  }

  export type AttendeesCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    username: number
    email: number
    registration_code: number
    login_token: number
    _all: number
  }


  export type AttendeesAvgAggregateInputType = {
    id?: true
  }

  export type AttendeesSumAggregateInputType = {
    id?: true
  }

  export type AttendeesMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    email?: true
    registration_code?: true
    login_token?: true
  }

  export type AttendeesMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    email?: true
    registration_code?: true
    login_token?: true
  }

  export type AttendeesCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    username?: true
    email?: true
    registration_code?: true
    login_token?: true
    _all?: true
  }

  export type AttendeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendees to aggregate.
     */
    where?: attendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendees to fetch.
     */
    orderBy?: attendeesOrderByWithRelationInput | attendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attendees
    **/
    _count?: true | AttendeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendeesMaxAggregateInputType
  }

  export type GetAttendeesAggregateType<T extends AttendeesAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendees[P]>
      : GetScalarType<T[P], AggregateAttendees[P]>
  }




  export type attendeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendeesWhereInput
    orderBy?: attendeesOrderByWithAggregationInput | attendeesOrderByWithAggregationInput[]
    by: AttendeesScalarFieldEnum[] | AttendeesScalarFieldEnum
    having?: attendeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendeesCountAggregateInputType | true
    _avg?: AttendeesAvgAggregateInputType
    _sum?: AttendeesSumAggregateInputType
    _min?: AttendeesMinAggregateInputType
    _max?: AttendeesMaxAggregateInputType
  }

  export type AttendeesGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    username: string
    email: string
    registration_code: string
    login_token: string | null
    _count: AttendeesCountAggregateOutputType | null
    _avg: AttendeesAvgAggregateOutputType | null
    _sum: AttendeesSumAggregateOutputType | null
    _min: AttendeesMinAggregateOutputType | null
    _max: AttendeesMaxAggregateOutputType | null
  }

  type GetAttendeesGroupByPayload<T extends attendeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendeesGroupByOutputType[P]>
            : GetScalarType<T[P], AttendeesGroupByOutputType[P]>
        }
      >
    >


  export type attendeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    email?: boolean
    registration_code?: boolean
    login_token?: boolean
    registrations?: boolean | attendees$registrationsArgs<ExtArgs>
    _count?: boolean | AttendeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendees"]>



  export type attendeesSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    email?: boolean
    registration_code?: boolean
    login_token?: boolean
  }

  export type attendeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "username" | "email" | "registration_code" | "login_token", ExtArgs["result"]["attendees"]>
  export type attendeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | attendees$registrationsArgs<ExtArgs>
    _count?: boolean | AttendeesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $attendeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attendees"
    objects: {
      registrations: Prisma.$registrationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      username: string
      email: string
      registration_code: string
      login_token: string | null
    }, ExtArgs["result"]["attendees"]>
    composites: {}
  }

  type attendeesGetPayload<S extends boolean | null | undefined | attendeesDefaultArgs> = $Result.GetResult<Prisma.$attendeesPayload, S>

  type attendeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attendeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendeesCountAggregateInputType | true
    }

  export interface attendeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendees'], meta: { name: 'attendees' } }
    /**
     * Find zero or one Attendees that matches the filter.
     * @param {attendeesFindUniqueArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attendeesFindUniqueArgs>(args: SelectSubset<T, attendeesFindUniqueArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attendeesFindUniqueOrThrowArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attendeesFindUniqueOrThrowArgs>(args: SelectSubset<T, attendeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesFindFirstArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attendeesFindFirstArgs>(args?: SelectSubset<T, attendeesFindFirstArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesFindFirstOrThrowArgs} args - Arguments to find a Attendees
     * @example
     * // Get one Attendees
     * const attendees = await prisma.attendees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attendeesFindFirstOrThrowArgs>(args?: SelectSubset<T, attendeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendees
     * const attendees = await prisma.attendees.findMany()
     * 
     * // Get first 10 Attendees
     * const attendees = await prisma.attendees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendeesWithIdOnly = await prisma.attendees.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attendeesFindManyArgs>(args?: SelectSubset<T, attendeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendees.
     * @param {attendeesCreateArgs} args - Arguments to create a Attendees.
     * @example
     * // Create one Attendees
     * const Attendees = await prisma.attendees.create({
     *   data: {
     *     // ... data to create a Attendees
     *   }
     * })
     * 
     */
    create<T extends attendeesCreateArgs>(args: SelectSubset<T, attendeesCreateArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendees.
     * @param {attendeesCreateManyArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendees = await prisma.attendees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attendeesCreateManyArgs>(args?: SelectSubset<T, attendeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendees.
     * @param {attendeesDeleteArgs} args - Arguments to delete one Attendees.
     * @example
     * // Delete one Attendees
     * const Attendees = await prisma.attendees.delete({
     *   where: {
     *     // ... filter to delete one Attendees
     *   }
     * })
     * 
     */
    delete<T extends attendeesDeleteArgs>(args: SelectSubset<T, attendeesDeleteArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendees.
     * @param {attendeesUpdateArgs} args - Arguments to update one Attendees.
     * @example
     * // Update one Attendees
     * const attendees = await prisma.attendees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attendeesUpdateArgs>(args: SelectSubset<T, attendeesUpdateArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendees.
     * @param {attendeesDeleteManyArgs} args - Arguments to filter Attendees to delete.
     * @example
     * // Delete a few Attendees
     * const { count } = await prisma.attendees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attendeesDeleteManyArgs>(args?: SelectSubset<T, attendeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendees
     * const attendees = await prisma.attendees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attendeesUpdateManyArgs>(args: SelectSubset<T, attendeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendees.
     * @param {attendeesUpsertArgs} args - Arguments to update or create a Attendees.
     * @example
     * // Update or create a Attendees
     * const attendees = await prisma.attendees.upsert({
     *   create: {
     *     // ... data to create a Attendees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendees we want to update
     *   }
     * })
     */
    upsert<T extends attendeesUpsertArgs>(args: SelectSubset<T, attendeesUpsertArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesCountArgs} args - Arguments to filter Attendees to count.
     * @example
     * // Count the number of Attendees
     * const count = await prisma.attendees.count({
     *   where: {
     *     // ... the filter for the Attendees we want to count
     *   }
     * })
    **/
    count<T extends attendeesCountArgs>(
      args?: Subset<T, attendeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendeesAggregateArgs>(args: Subset<T, AttendeesAggregateArgs>): Prisma.PrismaPromise<GetAttendeesAggregateType<T>>

    /**
     * Group by Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendeesGroupByArgs} args - Group by arguments.
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
      T extends attendeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendeesGroupByArgs['orderBy'] }
        : { orderBy?: attendeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, attendeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attendees model
   */
  readonly fields: attendeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registrations<T extends attendees$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, attendees$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the attendees model
   */
  interface attendeesFieldRefs {
    readonly id: FieldRef<"attendees", 'Int'>
    readonly firstname: FieldRef<"attendees", 'String'>
    readonly lastname: FieldRef<"attendees", 'String'>
    readonly username: FieldRef<"attendees", 'String'>
    readonly email: FieldRef<"attendees", 'String'>
    readonly registration_code: FieldRef<"attendees", 'String'>
    readonly login_token: FieldRef<"attendees", 'String'>
  }
    

  // Custom InputTypes
  /**
   * attendees findUnique
   */
  export type attendeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter, which attendees to fetch.
     */
    where: attendeesWhereUniqueInput
  }

  /**
   * attendees findUniqueOrThrow
   */
  export type attendeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter, which attendees to fetch.
     */
    where: attendeesWhereUniqueInput
  }

  /**
   * attendees findFirst
   */
  export type attendeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter, which attendees to fetch.
     */
    where?: attendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendees to fetch.
     */
    orderBy?: attendeesOrderByWithRelationInput | attendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendees.
     */
    cursor?: attendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendees.
     */
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * attendees findFirstOrThrow
   */
  export type attendeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter, which attendees to fetch.
     */
    where?: attendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendees to fetch.
     */
    orderBy?: attendeesOrderByWithRelationInput | attendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendees.
     */
    cursor?: attendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendees.
     */
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * attendees findMany
   */
  export type attendeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter, which attendees to fetch.
     */
    where?: attendeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendees to fetch.
     */
    orderBy?: attendeesOrderByWithRelationInput | attendeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attendees.
     */
    cursor?: attendeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendees.
     */
    skip?: number
    distinct?: AttendeesScalarFieldEnum | AttendeesScalarFieldEnum[]
  }

  /**
   * attendees create
   */
  export type attendeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * The data needed to create a attendees.
     */
    data: XOR<attendeesCreateInput, attendeesUncheckedCreateInput>
  }

  /**
   * attendees createMany
   */
  export type attendeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendees.
     */
    data: attendeesCreateManyInput | attendeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attendees update
   */
  export type attendeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * The data needed to update a attendees.
     */
    data: XOR<attendeesUpdateInput, attendeesUncheckedUpdateInput>
    /**
     * Choose, which attendees to update.
     */
    where: attendeesWhereUniqueInput
  }

  /**
   * attendees updateMany
   */
  export type attendeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendees.
     */
    data: XOR<attendeesUpdateManyMutationInput, attendeesUncheckedUpdateManyInput>
    /**
     * Filter which attendees to update
     */
    where?: attendeesWhereInput
    /**
     * Limit how many attendees to update.
     */
    limit?: number
  }

  /**
   * attendees upsert
   */
  export type attendeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * The filter to search for the attendees to update in case it exists.
     */
    where: attendeesWhereUniqueInput
    /**
     * In case the attendees found by the `where` argument doesn't exist, create a new attendees with this data.
     */
    create: XOR<attendeesCreateInput, attendeesUncheckedCreateInput>
    /**
     * In case the attendees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendeesUpdateInput, attendeesUncheckedUpdateInput>
  }

  /**
   * attendees delete
   */
  export type attendeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
    /**
     * Filter which attendees to delete.
     */
    where: attendeesWhereUniqueInput
  }

  /**
   * attendees deleteMany
   */
  export type attendeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendees to delete
     */
    where?: attendeesWhereInput
    /**
     * Limit how many attendees to delete.
     */
    limit?: number
  }

  /**
   * attendees.registrations
   */
  export type attendees$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    where?: registrationsWhereInput
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    cursor?: registrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * attendees without action
   */
  export type attendeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendees
     */
    select?: attendeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendees
     */
    omit?: attendeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendeesInclude<ExtArgs> | null
  }


  /**
   * Model channels
   */

  export type AggregateChannels = {
    _count: ChannelsCountAggregateOutputType | null
    _avg: ChannelsAvgAggregateOutputType | null
    _sum: ChannelsSumAggregateOutputType | null
    _min: ChannelsMinAggregateOutputType | null
    _max: ChannelsMaxAggregateOutputType | null
  }

  export type ChannelsAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type ChannelsSumAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type ChannelsMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
  }

  export type ChannelsMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
  }

  export type ChannelsCountAggregateOutputType = {
    id: number
    event_id: number
    name: number
    _all: number
  }


  export type ChannelsAvgAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type ChannelsSumAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type ChannelsMinAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
  }

  export type ChannelsMaxAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
  }

  export type ChannelsCountAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    _all?: true
  }

  export type ChannelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channels to aggregate.
     */
    where?: channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelsOrderByWithRelationInput | channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned channels
    **/
    _count?: true | ChannelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelsMaxAggregateInputType
  }

  export type GetChannelsAggregateType<T extends ChannelsAggregateArgs> = {
        [P in keyof T & keyof AggregateChannels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannels[P]>
      : GetScalarType<T[P], AggregateChannels[P]>
  }




  export type channelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channelsWhereInput
    orderBy?: channelsOrderByWithAggregationInput | channelsOrderByWithAggregationInput[]
    by: ChannelsScalarFieldEnum[] | ChannelsScalarFieldEnum
    having?: channelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelsCountAggregateInputType | true
    _avg?: ChannelsAvgAggregateInputType
    _sum?: ChannelsSumAggregateInputType
    _min?: ChannelsMinAggregateInputType
    _max?: ChannelsMaxAggregateInputType
  }

  export type ChannelsGroupByOutputType = {
    id: number
    event_id: number
    name: string | null
    _count: ChannelsCountAggregateOutputType | null
    _avg: ChannelsAvgAggregateOutputType | null
    _sum: ChannelsSumAggregateOutputType | null
    _min: ChannelsMinAggregateOutputType | null
    _max: ChannelsMaxAggregateOutputType | null
  }

  type GetChannelsGroupByPayload<T extends channelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelsGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelsGroupByOutputType[P]>
        }
      >
    >


  export type channelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
    rooms?: boolean | channels$roomsArgs<ExtArgs>
    _count?: boolean | ChannelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channels"]>



  export type channelsSelectScalar = {
    id?: boolean
    event_id?: boolean
    name?: boolean
  }

  export type channelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "name", ExtArgs["result"]["channels"]>
  export type channelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
    rooms?: boolean | channels$roomsArgs<ExtArgs>
    _count?: boolean | ChannelsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $channelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "channels"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>
      rooms: Prisma.$roomsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number
      name: string | null
    }, ExtArgs["result"]["channels"]>
    composites: {}
  }

  type channelsGetPayload<S extends boolean | null | undefined | channelsDefaultArgs> = $Result.GetResult<Prisma.$channelsPayload, S>

  type channelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<channelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelsCountAggregateInputType | true
    }

  export interface channelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['channels'], meta: { name: 'channels' } }
    /**
     * Find zero or one Channels that matches the filter.
     * @param {channelsFindUniqueArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends channelsFindUniqueArgs>(args: SelectSubset<T, channelsFindUniqueArgs<ExtArgs>>): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {channelsFindUniqueOrThrowArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends channelsFindUniqueOrThrowArgs>(args: SelectSubset<T, channelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsFindFirstArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends channelsFindFirstArgs>(args?: SelectSubset<T, channelsFindFirstArgs<ExtArgs>>): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsFindFirstOrThrowArgs} args - Arguments to find a Channels
     * @example
     * // Get one Channels
     * const channels = await prisma.channels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends channelsFindFirstOrThrowArgs>(args?: SelectSubset<T, channelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channels.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelsWithIdOnly = await prisma.channels.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends channelsFindManyArgs>(args?: SelectSubset<T, channelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channels.
     * @param {channelsCreateArgs} args - Arguments to create a Channels.
     * @example
     * // Create one Channels
     * const Channels = await prisma.channels.create({
     *   data: {
     *     // ... data to create a Channels
     *   }
     * })
     * 
     */
    create<T extends channelsCreateArgs>(args: SelectSubset<T, channelsCreateArgs<ExtArgs>>): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {channelsCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channels = await prisma.channels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends channelsCreateManyArgs>(args?: SelectSubset<T, channelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Channels.
     * @param {channelsDeleteArgs} args - Arguments to delete one Channels.
     * @example
     * // Delete one Channels
     * const Channels = await prisma.channels.delete({
     *   where: {
     *     // ... filter to delete one Channels
     *   }
     * })
     * 
     */
    delete<T extends channelsDeleteArgs>(args: SelectSubset<T, channelsDeleteArgs<ExtArgs>>): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channels.
     * @param {channelsUpdateArgs} args - Arguments to update one Channels.
     * @example
     * // Update one Channels
     * const channels = await prisma.channels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends channelsUpdateArgs>(args: SelectSubset<T, channelsUpdateArgs<ExtArgs>>): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {channelsDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends channelsDeleteManyArgs>(args?: SelectSubset<T, channelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channels = await prisma.channels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends channelsUpdateManyArgs>(args: SelectSubset<T, channelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channels.
     * @param {channelsUpsertArgs} args - Arguments to update or create a Channels.
     * @example
     * // Update or create a Channels
     * const channels = await prisma.channels.upsert({
     *   create: {
     *     // ... data to create a Channels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channels we want to update
     *   }
     * })
     */
    upsert<T extends channelsUpsertArgs>(args: SelectSubset<T, channelsUpsertArgs<ExtArgs>>): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channels.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends channelsCountArgs>(
      args?: Subset<T, channelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelsAggregateArgs>(args: Subset<T, ChannelsAggregateArgs>): Prisma.PrismaPromise<GetChannelsAggregateType<T>>

    /**
     * Group by Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelsGroupByArgs} args - Group by arguments.
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
      T extends channelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: channelsGroupByArgs['orderBy'] }
        : { orderBy?: channelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, channelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the channels model
   */
  readonly fields: channelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for channels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__channelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends channels$roomsArgs<ExtArgs> = {}>(args?: Subset<T, channels$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the channels model
   */
  interface channelsFieldRefs {
    readonly id: FieldRef<"channels", 'Int'>
    readonly event_id: FieldRef<"channels", 'Int'>
    readonly name: FieldRef<"channels", 'String'>
  }
    

  // Custom InputTypes
  /**
   * channels findUnique
   */
  export type channelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where: channelsWhereUniqueInput
  }

  /**
   * channels findUniqueOrThrow
   */
  export type channelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where: channelsWhereUniqueInput
  }

  /**
   * channels findFirst
   */
  export type channelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where?: channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelsOrderByWithRelationInput | channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channels.
     */
    cursor?: channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channels.
     */
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * channels findFirstOrThrow
   */
  export type channelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where?: channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelsOrderByWithRelationInput | channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channels.
     */
    cursor?: channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channels.
     */
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * channels findMany
   */
  export type channelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where?: channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelsOrderByWithRelationInput | channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing channels.
     */
    cursor?: channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * channels create
   */
  export type channelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * The data needed to create a channels.
     */
    data: XOR<channelsCreateInput, channelsUncheckedCreateInput>
  }

  /**
   * channels createMany
   */
  export type channelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many channels.
     */
    data: channelsCreateManyInput | channelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * channels update
   */
  export type channelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * The data needed to update a channels.
     */
    data: XOR<channelsUpdateInput, channelsUncheckedUpdateInput>
    /**
     * Choose, which channels to update.
     */
    where: channelsWhereUniqueInput
  }

  /**
   * channels updateMany
   */
  export type channelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update channels.
     */
    data: XOR<channelsUpdateManyMutationInput, channelsUncheckedUpdateManyInput>
    /**
     * Filter which channels to update
     */
    where?: channelsWhereInput
    /**
     * Limit how many channels to update.
     */
    limit?: number
  }

  /**
   * channels upsert
   */
  export type channelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * The filter to search for the channels to update in case it exists.
     */
    where: channelsWhereUniqueInput
    /**
     * In case the channels found by the `where` argument doesn't exist, create a new channels with this data.
     */
    create: XOR<channelsCreateInput, channelsUncheckedCreateInput>
    /**
     * In case the channels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<channelsUpdateInput, channelsUncheckedUpdateInput>
  }

  /**
   * channels delete
   */
  export type channelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
    /**
     * Filter which channels to delete.
     */
    where: channelsWhereUniqueInput
  }

  /**
   * channels deleteMany
   */
  export type channelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channels to delete
     */
    where?: channelsWhereInput
    /**
     * Limit how many channels to delete.
     */
    limit?: number
  }

  /**
   * channels.rooms
   */
  export type channels$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    where?: roomsWhereInput
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    cursor?: roomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * channels without action
   */
  export type channelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
  }


  /**
   * Model event_tickets
   */

  export type AggregateEvent_tickets = {
    _count: Event_ticketsCountAggregateOutputType | null
    _avg: Event_ticketsAvgAggregateOutputType | null
    _sum: Event_ticketsSumAggregateOutputType | null
    _min: Event_ticketsMinAggregateOutputType | null
    _max: Event_ticketsMaxAggregateOutputType | null
  }

  export type Event_ticketsAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    cost: Decimal | null
  }

  export type Event_ticketsSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    cost: Decimal | null
  }

  export type Event_ticketsMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    cost: Decimal | null
    special_validity: string | null
  }

  export type Event_ticketsMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    cost: Decimal | null
    special_validity: string | null
  }

  export type Event_ticketsCountAggregateOutputType = {
    id: number
    event_id: number
    name: number
    cost: number
    special_validity: number
    _all: number
  }


  export type Event_ticketsAvgAggregateInputType = {
    id?: true
    event_id?: true
    cost?: true
  }

  export type Event_ticketsSumAggregateInputType = {
    id?: true
    event_id?: true
    cost?: true
  }

  export type Event_ticketsMinAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    cost?: true
    special_validity?: true
  }

  export type Event_ticketsMaxAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    cost?: true
    special_validity?: true
  }

  export type Event_ticketsCountAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    cost?: true
    special_validity?: true
    _all?: true
  }

  export type Event_ticketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_tickets to aggregate.
     */
    where?: event_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_tickets to fetch.
     */
    orderBy?: event_ticketsOrderByWithRelationInput | event_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: event_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned event_tickets
    **/
    _count?: true | Event_ticketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event_ticketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event_ticketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_ticketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_ticketsMaxAggregateInputType
  }

  export type GetEvent_ticketsAggregateType<T extends Event_ticketsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_tickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_tickets[P]>
      : GetScalarType<T[P], AggregateEvent_tickets[P]>
  }




  export type event_ticketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_ticketsWhereInput
    orderBy?: event_ticketsOrderByWithAggregationInput | event_ticketsOrderByWithAggregationInput[]
    by: Event_ticketsScalarFieldEnum[] | Event_ticketsScalarFieldEnum
    having?: event_ticketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_ticketsCountAggregateInputType | true
    _avg?: Event_ticketsAvgAggregateInputType
    _sum?: Event_ticketsSumAggregateInputType
    _min?: Event_ticketsMinAggregateInputType
    _max?: Event_ticketsMaxAggregateInputType
  }

  export type Event_ticketsGroupByOutputType = {
    id: number
    event_id: number
    name: string | null
    cost: Decimal | null
    special_validity: string | null
    _count: Event_ticketsCountAggregateOutputType | null
    _avg: Event_ticketsAvgAggregateOutputType | null
    _sum: Event_ticketsSumAggregateOutputType | null
    _min: Event_ticketsMinAggregateOutputType | null
    _max: Event_ticketsMaxAggregateOutputType | null
  }

  type GetEvent_ticketsGroupByPayload<T extends event_ticketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_ticketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_ticketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_ticketsGroupByOutputType[P]>
            : GetScalarType<T[P], Event_ticketsGroupByOutputType[P]>
        }
      >
    >


  export type event_ticketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    cost?: boolean
    special_validity?: boolean
    events?: boolean | eventsDefaultArgs<ExtArgs>
    registrations?: boolean | event_tickets$registrationsArgs<ExtArgs>
    _count?: boolean | Event_ticketsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event_tickets"]>



  export type event_ticketsSelectScalar = {
    id?: boolean
    event_id?: boolean
    name?: boolean
    cost?: boolean
    special_validity?: boolean
  }

  export type event_ticketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "name" | "cost" | "special_validity", ExtArgs["result"]["event_tickets"]>
  export type event_ticketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | eventsDefaultArgs<ExtArgs>
    registrations?: boolean | event_tickets$registrationsArgs<ExtArgs>
    _count?: boolean | Event_ticketsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $event_ticketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "event_tickets"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>
      registrations: Prisma.$registrationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number
      name: string | null
      cost: Prisma.Decimal | null
      special_validity: string | null
    }, ExtArgs["result"]["event_tickets"]>
    composites: {}
  }

  type event_ticketsGetPayload<S extends boolean | null | undefined | event_ticketsDefaultArgs> = $Result.GetResult<Prisma.$event_ticketsPayload, S>

  type event_ticketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<event_ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Event_ticketsCountAggregateInputType | true
    }

  export interface event_ticketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event_tickets'], meta: { name: 'event_tickets' } }
    /**
     * Find zero or one Event_tickets that matches the filter.
     * @param {event_ticketsFindUniqueArgs} args - Arguments to find a Event_tickets
     * @example
     * // Get one Event_tickets
     * const event_tickets = await prisma.event_tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends event_ticketsFindUniqueArgs>(args: SelectSubset<T, event_ticketsFindUniqueArgs<ExtArgs>>): Prisma__event_ticketsClient<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event_tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {event_ticketsFindUniqueOrThrowArgs} args - Arguments to find a Event_tickets
     * @example
     * // Get one Event_tickets
     * const event_tickets = await prisma.event_tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends event_ticketsFindUniqueOrThrowArgs>(args: SelectSubset<T, event_ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__event_ticketsClient<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event_tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_ticketsFindFirstArgs} args - Arguments to find a Event_tickets
     * @example
     * // Get one Event_tickets
     * const event_tickets = await prisma.event_tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends event_ticketsFindFirstArgs>(args?: SelectSubset<T, event_ticketsFindFirstArgs<ExtArgs>>): Prisma__event_ticketsClient<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event_tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_ticketsFindFirstOrThrowArgs} args - Arguments to find a Event_tickets
     * @example
     * // Get one Event_tickets
     * const event_tickets = await prisma.event_tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends event_ticketsFindFirstOrThrowArgs>(args?: SelectSubset<T, event_ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__event_ticketsClient<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Event_tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_ticketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_tickets
     * const event_tickets = await prisma.event_tickets.findMany()
     * 
     * // Get first 10 Event_tickets
     * const event_tickets = await prisma.event_tickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const event_ticketsWithIdOnly = await prisma.event_tickets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends event_ticketsFindManyArgs>(args?: SelectSubset<T, event_ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event_tickets.
     * @param {event_ticketsCreateArgs} args - Arguments to create a Event_tickets.
     * @example
     * // Create one Event_tickets
     * const Event_tickets = await prisma.event_tickets.create({
     *   data: {
     *     // ... data to create a Event_tickets
     *   }
     * })
     * 
     */
    create<T extends event_ticketsCreateArgs>(args: SelectSubset<T, event_ticketsCreateArgs<ExtArgs>>): Prisma__event_ticketsClient<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Event_tickets.
     * @param {event_ticketsCreateManyArgs} args - Arguments to create many Event_tickets.
     * @example
     * // Create many Event_tickets
     * const event_tickets = await prisma.event_tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends event_ticketsCreateManyArgs>(args?: SelectSubset<T, event_ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event_tickets.
     * @param {event_ticketsDeleteArgs} args - Arguments to delete one Event_tickets.
     * @example
     * // Delete one Event_tickets
     * const Event_tickets = await prisma.event_tickets.delete({
     *   where: {
     *     // ... filter to delete one Event_tickets
     *   }
     * })
     * 
     */
    delete<T extends event_ticketsDeleteArgs>(args: SelectSubset<T, event_ticketsDeleteArgs<ExtArgs>>): Prisma__event_ticketsClient<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event_tickets.
     * @param {event_ticketsUpdateArgs} args - Arguments to update one Event_tickets.
     * @example
     * // Update one Event_tickets
     * const event_tickets = await prisma.event_tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends event_ticketsUpdateArgs>(args: SelectSubset<T, event_ticketsUpdateArgs<ExtArgs>>): Prisma__event_ticketsClient<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Event_tickets.
     * @param {event_ticketsDeleteManyArgs} args - Arguments to filter Event_tickets to delete.
     * @example
     * // Delete a few Event_tickets
     * const { count } = await prisma.event_tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends event_ticketsDeleteManyArgs>(args?: SelectSubset<T, event_ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_ticketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_tickets
     * const event_tickets = await prisma.event_tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends event_ticketsUpdateManyArgs>(args: SelectSubset<T, event_ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event_tickets.
     * @param {event_ticketsUpsertArgs} args - Arguments to update or create a Event_tickets.
     * @example
     * // Update or create a Event_tickets
     * const event_tickets = await prisma.event_tickets.upsert({
     *   create: {
     *     // ... data to create a Event_tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_tickets we want to update
     *   }
     * })
     */
    upsert<T extends event_ticketsUpsertArgs>(args: SelectSubset<T, event_ticketsUpsertArgs<ExtArgs>>): Prisma__event_ticketsClient<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Event_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_ticketsCountArgs} args - Arguments to filter Event_tickets to count.
     * @example
     * // Count the number of Event_tickets
     * const count = await prisma.event_tickets.count({
     *   where: {
     *     // ... the filter for the Event_tickets we want to count
     *   }
     * })
    **/
    count<T extends event_ticketsCountArgs>(
      args?: Subset<T, event_ticketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_ticketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_ticketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Event_ticketsAggregateArgs>(args: Subset<T, Event_ticketsAggregateArgs>): Prisma.PrismaPromise<GetEvent_ticketsAggregateType<T>>

    /**
     * Group by Event_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_ticketsGroupByArgs} args - Group by arguments.
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
      T extends event_ticketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: event_ticketsGroupByArgs['orderBy'] }
        : { orderBy?: event_ticketsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, event_ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_ticketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the event_tickets model
   */
  readonly fields: event_ticketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event_tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__event_ticketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrations<T extends event_tickets$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, event_tickets$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the event_tickets model
   */
  interface event_ticketsFieldRefs {
    readonly id: FieldRef<"event_tickets", 'Int'>
    readonly event_id: FieldRef<"event_tickets", 'Int'>
    readonly name: FieldRef<"event_tickets", 'String'>
    readonly cost: FieldRef<"event_tickets", 'Decimal'>
    readonly special_validity: FieldRef<"event_tickets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * event_tickets findUnique
   */
  export type event_ticketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which event_tickets to fetch.
     */
    where: event_ticketsWhereUniqueInput
  }

  /**
   * event_tickets findUniqueOrThrow
   */
  export type event_ticketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which event_tickets to fetch.
     */
    where: event_ticketsWhereUniqueInput
  }

  /**
   * event_tickets findFirst
   */
  export type event_ticketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which event_tickets to fetch.
     */
    where?: event_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_tickets to fetch.
     */
    orderBy?: event_ticketsOrderByWithRelationInput | event_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_tickets.
     */
    cursor?: event_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_tickets.
     */
    distinct?: Event_ticketsScalarFieldEnum | Event_ticketsScalarFieldEnum[]
  }

  /**
   * event_tickets findFirstOrThrow
   */
  export type event_ticketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which event_tickets to fetch.
     */
    where?: event_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_tickets to fetch.
     */
    orderBy?: event_ticketsOrderByWithRelationInput | event_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_tickets.
     */
    cursor?: event_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_tickets.
     */
    distinct?: Event_ticketsScalarFieldEnum | Event_ticketsScalarFieldEnum[]
  }

  /**
   * event_tickets findMany
   */
  export type event_ticketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which event_tickets to fetch.
     */
    where?: event_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_tickets to fetch.
     */
    orderBy?: event_ticketsOrderByWithRelationInput | event_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing event_tickets.
     */
    cursor?: event_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_tickets.
     */
    skip?: number
    distinct?: Event_ticketsScalarFieldEnum | Event_ticketsScalarFieldEnum[]
  }

  /**
   * event_tickets create
   */
  export type event_ticketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
    /**
     * The data needed to create a event_tickets.
     */
    data: XOR<event_ticketsCreateInput, event_ticketsUncheckedCreateInput>
  }

  /**
   * event_tickets createMany
   */
  export type event_ticketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many event_tickets.
     */
    data: event_ticketsCreateManyInput | event_ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_tickets update
   */
  export type event_ticketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
    /**
     * The data needed to update a event_tickets.
     */
    data: XOR<event_ticketsUpdateInput, event_ticketsUncheckedUpdateInput>
    /**
     * Choose, which event_tickets to update.
     */
    where: event_ticketsWhereUniqueInput
  }

  /**
   * event_tickets updateMany
   */
  export type event_ticketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update event_tickets.
     */
    data: XOR<event_ticketsUpdateManyMutationInput, event_ticketsUncheckedUpdateManyInput>
    /**
     * Filter which event_tickets to update
     */
    where?: event_ticketsWhereInput
    /**
     * Limit how many event_tickets to update.
     */
    limit?: number
  }

  /**
   * event_tickets upsert
   */
  export type event_ticketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
    /**
     * The filter to search for the event_tickets to update in case it exists.
     */
    where: event_ticketsWhereUniqueInput
    /**
     * In case the event_tickets found by the `where` argument doesn't exist, create a new event_tickets with this data.
     */
    create: XOR<event_ticketsCreateInput, event_ticketsUncheckedCreateInput>
    /**
     * In case the event_tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<event_ticketsUpdateInput, event_ticketsUncheckedUpdateInput>
  }

  /**
   * event_tickets delete
   */
  export type event_ticketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
    /**
     * Filter which event_tickets to delete.
     */
    where: event_ticketsWhereUniqueInput
  }

  /**
   * event_tickets deleteMany
   */
  export type event_ticketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_tickets to delete
     */
    where?: event_ticketsWhereInput
    /**
     * Limit how many event_tickets to delete.
     */
    limit?: number
  }

  /**
   * event_tickets.registrations
   */
  export type event_tickets$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    where?: registrationsWhereInput
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    cursor?: registrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * event_tickets without action
   */
  export type event_ticketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
  }


  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    organizer_id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    organizer_id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    organizer_id: number | null
    name: string | null
    slug: string | null
    date: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    organizer_id: number | null
    name: string | null
    slug: string | null
    date: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    organizer_id: number
    name: number
    slug: number
    date: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    organizer_id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    organizer_id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    organizer_id?: true
    name?: true
    slug?: true
    date?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    organizer_id?: true
    name?: true
    slug?: true
    date?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    organizer_id?: true
    name?: true
    slug?: true
    date?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    organizer_id: number
    name: string | null
    slug: string | null
    date: Date | null
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizer_id?: boolean
    name?: boolean
    slug?: boolean
    date?: boolean
    channels?: boolean | events$channelsArgs<ExtArgs>
    event_tickets?: boolean | events$event_ticketsArgs<ExtArgs>
    organizers?: boolean | organizersDefaultArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>



  export type eventsSelectScalar = {
    id?: boolean
    organizer_id?: boolean
    name?: boolean
    slug?: boolean
    date?: boolean
  }

  export type eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizer_id" | "name" | "slug" | "date", ExtArgs["result"]["events"]>
  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | events$channelsArgs<ExtArgs>
    event_tickets?: boolean | events$event_ticketsArgs<ExtArgs>
    organizers?: boolean | organizersDefaultArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      channels: Prisma.$channelsPayload<ExtArgs>[]
      event_tickets: Prisma.$event_ticketsPayload<ExtArgs>[]
      organizers: Prisma.$organizersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizer_id: number
      name: string | null
      slug: string | null
      date: Date | null
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
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
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channels<T extends events$channelsArgs<ExtArgs> = {}>(args?: Subset<T, events$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    event_tickets<T extends events$event_ticketsArgs<ExtArgs> = {}>(args?: Subset<T, events$event_ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizers<T extends organizersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizersDefaultArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the events model
   */
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'Int'>
    readonly organizer_id: FieldRef<"events", 'Int'>
    readonly name: FieldRef<"events", 'String'>
    readonly slug: FieldRef<"events", 'String'>
    readonly date: FieldRef<"events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * events.channels
   */
  export type events$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channels
     */
    select?: channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the channels
     */
    omit?: channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelsInclude<ExtArgs> | null
    where?: channelsWhereInput
    orderBy?: channelsOrderByWithRelationInput | channelsOrderByWithRelationInput[]
    cursor?: channelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelsScalarFieldEnum | ChannelsScalarFieldEnum[]
  }

  /**
   * events.event_tickets
   */
  export type events$event_ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_tickets
     */
    select?: event_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_tickets
     */
    omit?: event_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_ticketsInclude<ExtArgs> | null
    where?: event_ticketsWhereInput
    orderBy?: event_ticketsOrderByWithRelationInput | event_ticketsOrderByWithRelationInput[]
    cursor?: event_ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_ticketsScalarFieldEnum | Event_ticketsScalarFieldEnum[]
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
  }


  /**
   * Model organizers
   */

  export type AggregateOrganizers = {
    _count: OrganizersCountAggregateOutputType | null
    _avg: OrganizersAvgAggregateOutputType | null
    _sum: OrganizersSumAggregateOutputType | null
    _min: OrganizersMinAggregateOutputType | null
    _max: OrganizersMaxAggregateOutputType | null
  }

  export type OrganizersAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizersSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizersMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    email: string | null
    password_hash: string | null
  }

  export type OrganizersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    email: string | null
    password_hash: string | null
  }

  export type OrganizersCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    email: number
    password_hash: number
    _all: number
  }


  export type OrganizersAvgAggregateInputType = {
    id?: true
  }

  export type OrganizersSumAggregateInputType = {
    id?: true
  }

  export type OrganizersMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    password_hash?: true
  }

  export type OrganizersMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    password_hash?: true
  }

  export type OrganizersCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    password_hash?: true
    _all?: true
  }

  export type OrganizersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizers to aggregate.
     */
    where?: organizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizers to fetch.
     */
    orderBy?: organizersOrderByWithRelationInput | organizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizers
    **/
    _count?: true | OrganizersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizersMaxAggregateInputType
  }

  export type GetOrganizersAggregateType<T extends OrganizersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizers[P]>
      : GetScalarType<T[P], AggregateOrganizers[P]>
  }




  export type organizersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizersWhereInput
    orderBy?: organizersOrderByWithAggregationInput | organizersOrderByWithAggregationInput[]
    by: OrganizersScalarFieldEnum[] | OrganizersScalarFieldEnum
    having?: organizersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizersCountAggregateInputType | true
    _avg?: OrganizersAvgAggregateInputType
    _sum?: OrganizersSumAggregateInputType
    _min?: OrganizersMinAggregateInputType
    _max?: OrganizersMaxAggregateInputType
  }

  export type OrganizersGroupByOutputType = {
    id: number
    name: string
    slug: string
    email: string | null
    password_hash: string
    _count: OrganizersCountAggregateOutputType | null
    _avg: OrganizersAvgAggregateOutputType | null
    _sum: OrganizersSumAggregateOutputType | null
    _min: OrganizersMinAggregateOutputType | null
    _max: OrganizersMaxAggregateOutputType | null
  }

  type GetOrganizersGroupByPayload<T extends organizersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizersGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizersGroupByOutputType[P]>
        }
      >
    >


  export type organizersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    password_hash?: boolean
    events?: boolean | organizers$eventsArgs<ExtArgs>
    _count?: boolean | OrganizersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizers"]>



  export type organizersSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    password_hash?: boolean
  }

  export type organizersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "email" | "password_hash", ExtArgs["result"]["organizers"]>
  export type organizersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | organizers$eventsArgs<ExtArgs>
    _count?: boolean | OrganizersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $organizersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organizers"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      email: string | null
      password_hash: string
    }, ExtArgs["result"]["organizers"]>
    composites: {}
  }

  type organizersGetPayload<S extends boolean | null | undefined | organizersDefaultArgs> = $Result.GetResult<Prisma.$organizersPayload, S>

  type organizersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizersCountAggregateInputType | true
    }

  export interface organizersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organizers'], meta: { name: 'organizers' } }
    /**
     * Find zero or one Organizers that matches the filter.
     * @param {organizersFindUniqueArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizersFindUniqueArgs>(args: SelectSubset<T, organizersFindUniqueArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organizers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizersFindUniqueOrThrowArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizersFindUniqueOrThrowArgs>(args: SelectSubset<T, organizersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersFindFirstArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizersFindFirstArgs>(args?: SelectSubset<T, organizersFindFirstArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersFindFirstOrThrowArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizersFindFirstOrThrowArgs>(args?: SelectSubset<T, organizersFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizers
     * const organizers = await prisma.organizers.findMany()
     * 
     * // Get first 10 Organizers
     * const organizers = await prisma.organizers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizersWithIdOnly = await prisma.organizers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizersFindManyArgs>(args?: SelectSubset<T, organizersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organizers.
     * @param {organizersCreateArgs} args - Arguments to create a Organizers.
     * @example
     * // Create one Organizers
     * const Organizers = await prisma.organizers.create({
     *   data: {
     *     // ... data to create a Organizers
     *   }
     * })
     * 
     */
    create<T extends organizersCreateArgs>(args: SelectSubset<T, organizersCreateArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizers.
     * @param {organizersCreateManyArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizers = await prisma.organizers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizersCreateManyArgs>(args?: SelectSubset<T, organizersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organizers.
     * @param {organizersDeleteArgs} args - Arguments to delete one Organizers.
     * @example
     * // Delete one Organizers
     * const Organizers = await prisma.organizers.delete({
     *   where: {
     *     // ... filter to delete one Organizers
     *   }
     * })
     * 
     */
    delete<T extends organizersDeleteArgs>(args: SelectSubset<T, organizersDeleteArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organizers.
     * @param {organizersUpdateArgs} args - Arguments to update one Organizers.
     * @example
     * // Update one Organizers
     * const organizers = await prisma.organizers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizersUpdateArgs>(args: SelectSubset<T, organizersUpdateArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizers.
     * @param {organizersDeleteManyArgs} args - Arguments to filter Organizers to delete.
     * @example
     * // Delete a few Organizers
     * const { count } = await prisma.organizers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizersDeleteManyArgs>(args?: SelectSubset<T, organizersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizers
     * const organizers = await prisma.organizers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizersUpdateManyArgs>(args: SelectSubset<T, organizersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organizers.
     * @param {organizersUpsertArgs} args - Arguments to update or create a Organizers.
     * @example
     * // Update or create a Organizers
     * const organizers = await prisma.organizers.upsert({
     *   create: {
     *     // ... data to create a Organizers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizers we want to update
     *   }
     * })
     */
    upsert<T extends organizersUpsertArgs>(args: SelectSubset<T, organizersUpsertArgs<ExtArgs>>): Prisma__organizersClient<$Result.GetResult<Prisma.$organizersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersCountArgs} args - Arguments to filter Organizers to count.
     * @example
     * // Count the number of Organizers
     * const count = await prisma.organizers.count({
     *   where: {
     *     // ... the filter for the Organizers we want to count
     *   }
     * })
    **/
    count<T extends organizersCountArgs>(
      args?: Subset<T, organizersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizersAggregateArgs>(args: Subset<T, OrganizersAggregateArgs>): Prisma.PrismaPromise<GetOrganizersAggregateType<T>>

    /**
     * Group by Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizersGroupByArgs} args - Group by arguments.
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
      T extends organizersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizersGroupByArgs['orderBy'] }
        : { orderBy?: organizersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, organizersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organizers model
   */
  readonly fields: organizersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organizers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends organizers$eventsArgs<ExtArgs> = {}>(args?: Subset<T, organizers$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the organizers model
   */
  interface organizersFieldRefs {
    readonly id: FieldRef<"organizers", 'Int'>
    readonly name: FieldRef<"organizers", 'String'>
    readonly slug: FieldRef<"organizers", 'String'>
    readonly email: FieldRef<"organizers", 'String'>
    readonly password_hash: FieldRef<"organizers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * organizers findUnique
   */
  export type organizersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter, which organizers to fetch.
     */
    where: organizersWhereUniqueInput
  }

  /**
   * organizers findUniqueOrThrow
   */
  export type organizersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter, which organizers to fetch.
     */
    where: organizersWhereUniqueInput
  }

  /**
   * organizers findFirst
   */
  export type organizersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter, which organizers to fetch.
     */
    where?: organizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizers to fetch.
     */
    orderBy?: organizersOrderByWithRelationInput | organizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizers.
     */
    cursor?: organizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizers.
     */
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * organizers findFirstOrThrow
   */
  export type organizersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter, which organizers to fetch.
     */
    where?: organizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizers to fetch.
     */
    orderBy?: organizersOrderByWithRelationInput | organizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizers.
     */
    cursor?: organizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizers.
     */
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * organizers findMany
   */
  export type organizersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter, which organizers to fetch.
     */
    where?: organizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizers to fetch.
     */
    orderBy?: organizersOrderByWithRelationInput | organizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizers.
     */
    cursor?: organizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizers.
     */
    skip?: number
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * organizers create
   */
  export type organizersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * The data needed to create a organizers.
     */
    data: XOR<organizersCreateInput, organizersUncheckedCreateInput>
  }

  /**
   * organizers createMany
   */
  export type organizersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizers.
     */
    data: organizersCreateManyInput | organizersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizers update
   */
  export type organizersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * The data needed to update a organizers.
     */
    data: XOR<organizersUpdateInput, organizersUncheckedUpdateInput>
    /**
     * Choose, which organizers to update.
     */
    where: organizersWhereUniqueInput
  }

  /**
   * organizers updateMany
   */
  export type organizersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizers.
     */
    data: XOR<organizersUpdateManyMutationInput, organizersUncheckedUpdateManyInput>
    /**
     * Filter which organizers to update
     */
    where?: organizersWhereInput
    /**
     * Limit how many organizers to update.
     */
    limit?: number
  }

  /**
   * organizers upsert
   */
  export type organizersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * The filter to search for the organizers to update in case it exists.
     */
    where: organizersWhereUniqueInput
    /**
     * In case the organizers found by the `where` argument doesn't exist, create a new organizers with this data.
     */
    create: XOR<organizersCreateInput, organizersUncheckedCreateInput>
    /**
     * In case the organizers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizersUpdateInput, organizersUncheckedUpdateInput>
  }

  /**
   * organizers delete
   */
  export type organizersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
    /**
     * Filter which organizers to delete.
     */
    where: organizersWhereUniqueInput
  }

  /**
   * organizers deleteMany
   */
  export type organizersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizers to delete
     */
    where?: organizersWhereInput
    /**
     * Limit how many organizers to delete.
     */
    limit?: number
  }

  /**
   * organizers.events
   */
  export type organizers$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    cursor?: eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * organizers without action
   */
  export type organizersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizers
     */
    select?: organizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizers
     */
    omit?: organizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizersInclude<ExtArgs> | null
  }


  /**
   * Model registrations
   */

  export type AggregateRegistrations = {
    _count: RegistrationsCountAggregateOutputType | null
    _avg: RegistrationsAvgAggregateOutputType | null
    _sum: RegistrationsSumAggregateOutputType | null
    _min: RegistrationsMinAggregateOutputType | null
    _max: RegistrationsMaxAggregateOutputType | null
  }

  export type RegistrationsAvgAggregateOutputType = {
    id: number | null
    attendee_id: number | null
    ticket_id: number | null
  }

  export type RegistrationsSumAggregateOutputType = {
    id: number | null
    attendee_id: number | null
    ticket_id: number | null
  }

  export type RegistrationsMinAggregateOutputType = {
    id: number | null
    attendee_id: number | null
    ticket_id: number | null
    registration_time: Date | null
  }

  export type RegistrationsMaxAggregateOutputType = {
    id: number | null
    attendee_id: number | null
    ticket_id: number | null
    registration_time: Date | null
  }

  export type RegistrationsCountAggregateOutputType = {
    id: number
    attendee_id: number
    ticket_id: number
    registration_time: number
    _all: number
  }


  export type RegistrationsAvgAggregateInputType = {
    id?: true
    attendee_id?: true
    ticket_id?: true
  }

  export type RegistrationsSumAggregateInputType = {
    id?: true
    attendee_id?: true
    ticket_id?: true
  }

  export type RegistrationsMinAggregateInputType = {
    id?: true
    attendee_id?: true
    ticket_id?: true
    registration_time?: true
  }

  export type RegistrationsMaxAggregateInputType = {
    id?: true
    attendee_id?: true
    ticket_id?: true
    registration_time?: true
  }

  export type RegistrationsCountAggregateInputType = {
    id?: true
    attendee_id?: true
    ticket_id?: true
    registration_time?: true
    _all?: true
  }

  export type RegistrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registrations to aggregate.
     */
    where?: registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrations to fetch.
     */
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned registrations
    **/
    _count?: true | RegistrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationsMaxAggregateInputType
  }

  export type GetRegistrationsAggregateType<T extends RegistrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrations[P]>
      : GetScalarType<T[P], AggregateRegistrations[P]>
  }




  export type registrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registrationsWhereInput
    orderBy?: registrationsOrderByWithAggregationInput | registrationsOrderByWithAggregationInput[]
    by: RegistrationsScalarFieldEnum[] | RegistrationsScalarFieldEnum
    having?: registrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationsCountAggregateInputType | true
    _avg?: RegistrationsAvgAggregateInputType
    _sum?: RegistrationsSumAggregateInputType
    _min?: RegistrationsMinAggregateInputType
    _max?: RegistrationsMaxAggregateInputType
  }

  export type RegistrationsGroupByOutputType = {
    id: number
    attendee_id: number
    ticket_id: number
    registration_time: Date | null
    _count: RegistrationsCountAggregateOutputType | null
    _avg: RegistrationsAvgAggregateOutputType | null
    _sum: RegistrationsSumAggregateOutputType | null
    _min: RegistrationsMinAggregateOutputType | null
    _max: RegistrationsMaxAggregateOutputType | null
  }

  type GetRegistrationsGroupByPayload<T extends registrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationsGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationsGroupByOutputType[P]>
        }
      >
    >


  export type registrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendee_id?: boolean
    ticket_id?: boolean
    registration_time?: boolean
    attendees?: boolean | attendeesDefaultArgs<ExtArgs>
    event_tickets?: boolean | event_ticketsDefaultArgs<ExtArgs>
    session_registrations?: boolean | registrations$session_registrationsArgs<ExtArgs>
    _count?: boolean | RegistrationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrations"]>



  export type registrationsSelectScalar = {
    id?: boolean
    attendee_id?: boolean
    ticket_id?: boolean
    registration_time?: boolean
  }

  export type registrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attendee_id" | "ticket_id" | "registration_time", ExtArgs["result"]["registrations"]>
  export type registrationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | attendeesDefaultArgs<ExtArgs>
    event_tickets?: boolean | event_ticketsDefaultArgs<ExtArgs>
    session_registrations?: boolean | registrations$session_registrationsArgs<ExtArgs>
    _count?: boolean | RegistrationsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $registrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "registrations"
    objects: {
      attendees: Prisma.$attendeesPayload<ExtArgs>
      event_tickets: Prisma.$event_ticketsPayload<ExtArgs>
      session_registrations: Prisma.$session_registrationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      attendee_id: number
      ticket_id: number
      registration_time: Date | null
    }, ExtArgs["result"]["registrations"]>
    composites: {}
  }

  type registrationsGetPayload<S extends boolean | null | undefined | registrationsDefaultArgs> = $Result.GetResult<Prisma.$registrationsPayload, S>

  type registrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<registrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationsCountAggregateInputType | true
    }

  export interface registrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['registrations'], meta: { name: 'registrations' } }
    /**
     * Find zero or one Registrations that matches the filter.
     * @param {registrationsFindUniqueArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends registrationsFindUniqueArgs>(args: SelectSubset<T, registrationsFindUniqueArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {registrationsFindUniqueOrThrowArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends registrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, registrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsFindFirstArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends registrationsFindFirstArgs>(args?: SelectSubset<T, registrationsFindFirstArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsFindFirstOrThrowArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends registrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, registrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registrations.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationsWithIdOnly = await prisma.registrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends registrationsFindManyArgs>(args?: SelectSubset<T, registrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registrations.
     * @param {registrationsCreateArgs} args - Arguments to create a Registrations.
     * @example
     * // Create one Registrations
     * const Registrations = await prisma.registrations.create({
     *   data: {
     *     // ... data to create a Registrations
     *   }
     * })
     * 
     */
    create<T extends registrationsCreateArgs>(args: SelectSubset<T, registrationsCreateArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registrations.
     * @param {registrationsCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registrations = await prisma.registrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends registrationsCreateManyArgs>(args?: SelectSubset<T, registrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Registrations.
     * @param {registrationsDeleteArgs} args - Arguments to delete one Registrations.
     * @example
     * // Delete one Registrations
     * const Registrations = await prisma.registrations.delete({
     *   where: {
     *     // ... filter to delete one Registrations
     *   }
     * })
     * 
     */
    delete<T extends registrationsDeleteArgs>(args: SelectSubset<T, registrationsDeleteArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registrations.
     * @param {registrationsUpdateArgs} args - Arguments to update one Registrations.
     * @example
     * // Update one Registrations
     * const registrations = await prisma.registrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends registrationsUpdateArgs>(args: SelectSubset<T, registrationsUpdateArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registrations.
     * @param {registrationsDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends registrationsDeleteManyArgs>(args?: SelectSubset<T, registrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registrations = await prisma.registrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends registrationsUpdateManyArgs>(args: SelectSubset<T, registrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Registrations.
     * @param {registrationsUpsertArgs} args - Arguments to update or create a Registrations.
     * @example
     * // Update or create a Registrations
     * const registrations = await prisma.registrations.upsert({
     *   create: {
     *     // ... data to create a Registrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registrations we want to update
     *   }
     * })
     */
    upsert<T extends registrationsUpsertArgs>(args: SelectSubset<T, registrationsUpsertArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registrations.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends registrationsCountArgs>(
      args?: Subset<T, registrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationsAggregateArgs>(args: Subset<T, RegistrationsAggregateArgs>): Prisma.PrismaPromise<GetRegistrationsAggregateType<T>>

    /**
     * Group by Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registrationsGroupByArgs} args - Group by arguments.
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
      T extends registrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: registrationsGroupByArgs['orderBy'] }
        : { orderBy?: registrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, registrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the registrations model
   */
  readonly fields: registrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for registrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__registrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendees<T extends attendeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, attendeesDefaultArgs<ExtArgs>>): Prisma__attendeesClient<$Result.GetResult<Prisma.$attendeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event_tickets<T extends event_ticketsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, event_ticketsDefaultArgs<ExtArgs>>): Prisma__event_ticketsClient<$Result.GetResult<Prisma.$event_ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session_registrations<T extends registrations$session_registrationsArgs<ExtArgs> = {}>(args?: Subset<T, registrations$session_registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the registrations model
   */
  interface registrationsFieldRefs {
    readonly id: FieldRef<"registrations", 'Int'>
    readonly attendee_id: FieldRef<"registrations", 'Int'>
    readonly ticket_id: FieldRef<"registrations", 'Int'>
    readonly registration_time: FieldRef<"registrations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * registrations findUnique
   */
  export type registrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter, which registrations to fetch.
     */
    where: registrationsWhereUniqueInput
  }

  /**
   * registrations findUniqueOrThrow
   */
  export type registrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter, which registrations to fetch.
     */
    where: registrationsWhereUniqueInput
  }

  /**
   * registrations findFirst
   */
  export type registrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter, which registrations to fetch.
     */
    where?: registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrations to fetch.
     */
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registrations.
     */
    cursor?: registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registrations.
     */
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * registrations findFirstOrThrow
   */
  export type registrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter, which registrations to fetch.
     */
    where?: registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrations to fetch.
     */
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registrations.
     */
    cursor?: registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registrations.
     */
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * registrations findMany
   */
  export type registrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter, which registrations to fetch.
     */
    where?: registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registrations to fetch.
     */
    orderBy?: registrationsOrderByWithRelationInput | registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing registrations.
     */
    cursor?: registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registrations.
     */
    skip?: number
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * registrations create
   */
  export type registrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * The data needed to create a registrations.
     */
    data: XOR<registrationsCreateInput, registrationsUncheckedCreateInput>
  }

  /**
   * registrations createMany
   */
  export type registrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many registrations.
     */
    data: registrationsCreateManyInput | registrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * registrations update
   */
  export type registrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * The data needed to update a registrations.
     */
    data: XOR<registrationsUpdateInput, registrationsUncheckedUpdateInput>
    /**
     * Choose, which registrations to update.
     */
    where: registrationsWhereUniqueInput
  }

  /**
   * registrations updateMany
   */
  export type registrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update registrations.
     */
    data: XOR<registrationsUpdateManyMutationInput, registrationsUncheckedUpdateManyInput>
    /**
     * Filter which registrations to update
     */
    where?: registrationsWhereInput
    /**
     * Limit how many registrations to update.
     */
    limit?: number
  }

  /**
   * registrations upsert
   */
  export type registrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * The filter to search for the registrations to update in case it exists.
     */
    where: registrationsWhereUniqueInput
    /**
     * In case the registrations found by the `where` argument doesn't exist, create a new registrations with this data.
     */
    create: XOR<registrationsCreateInput, registrationsUncheckedCreateInput>
    /**
     * In case the registrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<registrationsUpdateInput, registrationsUncheckedUpdateInput>
  }

  /**
   * registrations delete
   */
  export type registrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
    /**
     * Filter which registrations to delete.
     */
    where: registrationsWhereUniqueInput
  }

  /**
   * registrations deleteMany
   */
  export type registrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registrations to delete
     */
    where?: registrationsWhereInput
    /**
     * Limit how many registrations to delete.
     */
    limit?: number
  }

  /**
   * registrations.session_registrations
   */
  export type registrations$session_registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    where?: session_registrationsWhereInput
    orderBy?: session_registrationsOrderByWithRelationInput | session_registrationsOrderByWithRelationInput[]
    cursor?: session_registrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Session_registrationsScalarFieldEnum | Session_registrationsScalarFieldEnum[]
  }

  /**
   * registrations without action
   */
  export type registrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registrations
     */
    select?: registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registrations
     */
    omit?: registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registrationsInclude<ExtArgs> | null
  }


  /**
   * Model rooms
   */

  export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  export type RoomsAvgAggregateOutputType = {
    id: number | null
    channel_id: number | null
    capacity: number | null
  }

  export type RoomsSumAggregateOutputType = {
    id: number | null
    channel_id: number | null
    capacity: number | null
  }

  export type RoomsMinAggregateOutputType = {
    id: number | null
    channel_id: number | null
    name: string | null
    capacity: number | null
  }

  export type RoomsMaxAggregateOutputType = {
    id: number | null
    channel_id: number | null
    name: string | null
    capacity: number | null
  }

  export type RoomsCountAggregateOutputType = {
    id: number
    channel_id: number
    name: number
    capacity: number
    _all: number
  }


  export type RoomsAvgAggregateInputType = {
    id?: true
    channel_id?: true
    capacity?: true
  }

  export type RoomsSumAggregateInputType = {
    id?: true
    channel_id?: true
    capacity?: true
  }

  export type RoomsMinAggregateInputType = {
    id?: true
    channel_id?: true
    name?: true
    capacity?: true
  }

  export type RoomsMaxAggregateInputType = {
    id?: true
    channel_id?: true
    name?: true
    capacity?: true
  }

  export type RoomsCountAggregateInputType = {
    id?: true
    channel_id?: true
    name?: true
    capacity?: true
    _all?: true
  }

  export type RoomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to aggregate.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomsMaxAggregateInputType
  }

  export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
        [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRooms[P]>
      : GetScalarType<T[P], AggregateRooms[P]>
  }




  export type roomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomsWhereInput
    orderBy?: roomsOrderByWithAggregationInput | roomsOrderByWithAggregationInput[]
    by: RoomsScalarFieldEnum[] | RoomsScalarFieldEnum
    having?: roomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomsCountAggregateInputType | true
    _avg?: RoomsAvgAggregateInputType
    _sum?: RoomsSumAggregateInputType
    _min?: RoomsMinAggregateInputType
    _max?: RoomsMaxAggregateInputType
  }

  export type RoomsGroupByOutputType = {
    id: number
    channel_id: number
    name: string | null
    capacity: number | null
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  type GetRoomsGroupByPayload<T extends roomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomsGroupByOutputType[P]>
            : GetScalarType<T[P], RoomsGroupByOutputType[P]>
        }
      >
    >


  export type roomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channel_id?: boolean
    name?: boolean
    capacity?: boolean
    channels?: boolean | channelsDefaultArgs<ExtArgs>
    sessions?: boolean | rooms$sessionsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>



  export type roomsSelectScalar = {
    id?: boolean
    channel_id?: boolean
    name?: boolean
    capacity?: boolean
  }

  export type roomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channel_id" | "name" | "capacity", ExtArgs["result"]["rooms"]>
  export type roomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | channelsDefaultArgs<ExtArgs>
    sessions?: boolean | rooms$sessionsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $roomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rooms"
    objects: {
      channels: Prisma.$channelsPayload<ExtArgs>
      sessions: Prisma.$sessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      channel_id: number
      name: string | null
      capacity: number | null
    }, ExtArgs["result"]["rooms"]>
    composites: {}
  }

  type roomsGetPayload<S extends boolean | null | undefined | roomsDefaultArgs> = $Result.GetResult<Prisma.$roomsPayload, S>

  type roomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomsCountAggregateInputType | true
    }

  export interface roomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rooms'], meta: { name: 'rooms' } }
    /**
     * Find zero or one Rooms that matches the filter.
     * @param {roomsFindUniqueArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roomsFindUniqueArgs>(args: SelectSubset<T, roomsFindUniqueArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roomsFindUniqueOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roomsFindUniqueOrThrowArgs>(args: SelectSubset<T, roomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindFirstArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roomsFindFirstArgs>(args?: SelectSubset<T, roomsFindFirstArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindFirstOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roomsFindFirstOrThrowArgs>(args?: SelectSubset<T, roomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.rooms.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.rooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomsWithIdOnly = await prisma.rooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roomsFindManyArgs>(args?: SelectSubset<T, roomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rooms.
     * @param {roomsCreateArgs} args - Arguments to create a Rooms.
     * @example
     * // Create one Rooms
     * const Rooms = await prisma.rooms.create({
     *   data: {
     *     // ... data to create a Rooms
     *   }
     * })
     * 
     */
    create<T extends roomsCreateArgs>(args: SelectSubset<T, roomsCreateArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {roomsCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roomsCreateManyArgs>(args?: SelectSubset<T, roomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rooms.
     * @param {roomsDeleteArgs} args - Arguments to delete one Rooms.
     * @example
     * // Delete one Rooms
     * const Rooms = await prisma.rooms.delete({
     *   where: {
     *     // ... filter to delete one Rooms
     *   }
     * })
     * 
     */
    delete<T extends roomsDeleteArgs>(args: SelectSubset<T, roomsDeleteArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rooms.
     * @param {roomsUpdateArgs} args - Arguments to update one Rooms.
     * @example
     * // Update one Rooms
     * const rooms = await prisma.rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roomsUpdateArgs>(args: SelectSubset<T, roomsUpdateArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {roomsDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roomsDeleteManyArgs>(args?: SelectSubset<T, roomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roomsUpdateManyArgs>(args: SelectSubset<T, roomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rooms.
     * @param {roomsUpsertArgs} args - Arguments to update or create a Rooms.
     * @example
     * // Update or create a Rooms
     * const rooms = await prisma.rooms.upsert({
     *   create: {
     *     // ... data to create a Rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rooms we want to update
     *   }
     * })
     */
    upsert<T extends roomsUpsertArgs>(args: SelectSubset<T, roomsUpsertArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.rooms.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomsCountArgs>(
      args?: Subset<T, roomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomsAggregateArgs>(args: Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>

    /**
     * Group by Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsGroupByArgs} args - Group by arguments.
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
      T extends roomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roomsGroupByArgs['orderBy'] }
        : { orderBy?: roomsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rooms model
   */
  readonly fields: roomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channels<T extends channelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, channelsDefaultArgs<ExtArgs>>): Prisma__channelsClient<$Result.GetResult<Prisma.$channelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends rooms$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, rooms$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the rooms model
   */
  interface roomsFieldRefs {
    readonly id: FieldRef<"rooms", 'Int'>
    readonly channel_id: FieldRef<"rooms", 'Int'>
    readonly name: FieldRef<"rooms", 'String'>
    readonly capacity: FieldRef<"rooms", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * rooms findUnique
   */
  export type roomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms findUniqueOrThrow
   */
  export type roomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms findFirst
   */
  export type roomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms findFirstOrThrow
   */
  export type roomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms findMany
   */
  export type roomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms create
   */
  export type roomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The data needed to create a rooms.
     */
    data: XOR<roomsCreateInput, roomsUncheckedCreateInput>
  }

  /**
   * rooms createMany
   */
  export type roomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rooms.
     */
    data: roomsCreateManyInput | roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rooms update
   */
  export type roomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The data needed to update a rooms.
     */
    data: XOR<roomsUpdateInput, roomsUncheckedUpdateInput>
    /**
     * Choose, which rooms to update.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms updateMany
   */
  export type roomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomsUpdateManyMutationInput, roomsUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * rooms upsert
   */
  export type roomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The filter to search for the rooms to update in case it exists.
     */
    where: roomsWhereUniqueInput
    /**
     * In case the rooms found by the `where` argument doesn't exist, create a new rooms with this data.
     */
    create: XOR<roomsCreateInput, roomsUncheckedCreateInput>
    /**
     * In case the rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomsUpdateInput, roomsUncheckedUpdateInput>
  }

  /**
   * rooms delete
   */
  export type roomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter which rooms to delete.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms deleteMany
   */
  export type roomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to delete
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to delete.
     */
    limit?: number
  }

  /**
   * rooms.sessions
   */
  export type rooms$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    cursor?: sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * rooms without action
   */
  export type roomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
  }


  /**
   * Model session_registrations
   */

  export type AggregateSession_registrations = {
    _count: Session_registrationsCountAggregateOutputType | null
    _avg: Session_registrationsAvgAggregateOutputType | null
    _sum: Session_registrationsSumAggregateOutputType | null
    _min: Session_registrationsMinAggregateOutputType | null
    _max: Session_registrationsMaxAggregateOutputType | null
  }

  export type Session_registrationsAvgAggregateOutputType = {
    id: number | null
    registration_id: number | null
    session_id: number | null
  }

  export type Session_registrationsSumAggregateOutputType = {
    id: number | null
    registration_id: number | null
    session_id: number | null
  }

  export type Session_registrationsMinAggregateOutputType = {
    id: number | null
    registration_id: number | null
    session_id: number | null
  }

  export type Session_registrationsMaxAggregateOutputType = {
    id: number | null
    registration_id: number | null
    session_id: number | null
  }

  export type Session_registrationsCountAggregateOutputType = {
    id: number
    registration_id: number
    session_id: number
    _all: number
  }


  export type Session_registrationsAvgAggregateInputType = {
    id?: true
    registration_id?: true
    session_id?: true
  }

  export type Session_registrationsSumAggregateInputType = {
    id?: true
    registration_id?: true
    session_id?: true
  }

  export type Session_registrationsMinAggregateInputType = {
    id?: true
    registration_id?: true
    session_id?: true
  }

  export type Session_registrationsMaxAggregateInputType = {
    id?: true
    registration_id?: true
    session_id?: true
  }

  export type Session_registrationsCountAggregateInputType = {
    id?: true
    registration_id?: true
    session_id?: true
    _all?: true
  }

  export type Session_registrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session_registrations to aggregate.
     */
    where?: session_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_registrations to fetch.
     */
    orderBy?: session_registrationsOrderByWithRelationInput | session_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: session_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned session_registrations
    **/
    _count?: true | Session_registrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Session_registrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Session_registrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Session_registrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Session_registrationsMaxAggregateInputType
  }

  export type GetSession_registrationsAggregateType<T extends Session_registrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateSession_registrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession_registrations[P]>
      : GetScalarType<T[P], AggregateSession_registrations[P]>
  }




  export type session_registrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_registrationsWhereInput
    orderBy?: session_registrationsOrderByWithAggregationInput | session_registrationsOrderByWithAggregationInput[]
    by: Session_registrationsScalarFieldEnum[] | Session_registrationsScalarFieldEnum
    having?: session_registrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Session_registrationsCountAggregateInputType | true
    _avg?: Session_registrationsAvgAggregateInputType
    _sum?: Session_registrationsSumAggregateInputType
    _min?: Session_registrationsMinAggregateInputType
    _max?: Session_registrationsMaxAggregateInputType
  }

  export type Session_registrationsGroupByOutputType = {
    id: number
    registration_id: number
    session_id: number
    _count: Session_registrationsCountAggregateOutputType | null
    _avg: Session_registrationsAvgAggregateOutputType | null
    _sum: Session_registrationsSumAggregateOutputType | null
    _min: Session_registrationsMinAggregateOutputType | null
    _max: Session_registrationsMaxAggregateOutputType | null
  }

  type GetSession_registrationsGroupByPayload<T extends session_registrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Session_registrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Session_registrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Session_registrationsGroupByOutputType[P]>
            : GetScalarType<T[P], Session_registrationsGroupByOutputType[P]>
        }
      >
    >


  export type session_registrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registration_id?: boolean
    session_id?: boolean
    registrations?: boolean | registrationsDefaultArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session_registrations"]>



  export type session_registrationsSelectScalar = {
    id?: boolean
    registration_id?: boolean
    session_id?: boolean
  }

  export type session_registrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registration_id" | "session_id", ExtArgs["result"]["session_registrations"]>
  export type session_registrationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | registrationsDefaultArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
  }

  export type $session_registrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "session_registrations"
    objects: {
      registrations: Prisma.$registrationsPayload<ExtArgs>
      sessions: Prisma.$sessionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      registration_id: number
      session_id: number
    }, ExtArgs["result"]["session_registrations"]>
    composites: {}
  }

  type session_registrationsGetPayload<S extends boolean | null | undefined | session_registrationsDefaultArgs> = $Result.GetResult<Prisma.$session_registrationsPayload, S>

  type session_registrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<session_registrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Session_registrationsCountAggregateInputType | true
    }

  export interface session_registrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['session_registrations'], meta: { name: 'session_registrations' } }
    /**
     * Find zero or one Session_registrations that matches the filter.
     * @param {session_registrationsFindUniqueArgs} args - Arguments to find a Session_registrations
     * @example
     * // Get one Session_registrations
     * const session_registrations = await prisma.session_registrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends session_registrationsFindUniqueArgs>(args: SelectSubset<T, session_registrationsFindUniqueArgs<ExtArgs>>): Prisma__session_registrationsClient<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session_registrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {session_registrationsFindUniqueOrThrowArgs} args - Arguments to find a Session_registrations
     * @example
     * // Get one Session_registrations
     * const session_registrations = await prisma.session_registrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends session_registrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, session_registrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__session_registrationsClient<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session_registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_registrationsFindFirstArgs} args - Arguments to find a Session_registrations
     * @example
     * // Get one Session_registrations
     * const session_registrations = await prisma.session_registrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends session_registrationsFindFirstArgs>(args?: SelectSubset<T, session_registrationsFindFirstArgs<ExtArgs>>): Prisma__session_registrationsClient<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session_registrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_registrationsFindFirstOrThrowArgs} args - Arguments to find a Session_registrations
     * @example
     * // Get one Session_registrations
     * const session_registrations = await prisma.session_registrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends session_registrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, session_registrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__session_registrationsClient<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Session_registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_registrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Session_registrations
     * const session_registrations = await prisma.session_registrations.findMany()
     * 
     * // Get first 10 Session_registrations
     * const session_registrations = await prisma.session_registrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const session_registrationsWithIdOnly = await prisma.session_registrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends session_registrationsFindManyArgs>(args?: SelectSubset<T, session_registrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session_registrations.
     * @param {session_registrationsCreateArgs} args - Arguments to create a Session_registrations.
     * @example
     * // Create one Session_registrations
     * const Session_registrations = await prisma.session_registrations.create({
     *   data: {
     *     // ... data to create a Session_registrations
     *   }
     * })
     * 
     */
    create<T extends session_registrationsCreateArgs>(args: SelectSubset<T, session_registrationsCreateArgs<ExtArgs>>): Prisma__session_registrationsClient<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Session_registrations.
     * @param {session_registrationsCreateManyArgs} args - Arguments to create many Session_registrations.
     * @example
     * // Create many Session_registrations
     * const session_registrations = await prisma.session_registrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends session_registrationsCreateManyArgs>(args?: SelectSubset<T, session_registrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session_registrations.
     * @param {session_registrationsDeleteArgs} args - Arguments to delete one Session_registrations.
     * @example
     * // Delete one Session_registrations
     * const Session_registrations = await prisma.session_registrations.delete({
     *   where: {
     *     // ... filter to delete one Session_registrations
     *   }
     * })
     * 
     */
    delete<T extends session_registrationsDeleteArgs>(args: SelectSubset<T, session_registrationsDeleteArgs<ExtArgs>>): Prisma__session_registrationsClient<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session_registrations.
     * @param {session_registrationsUpdateArgs} args - Arguments to update one Session_registrations.
     * @example
     * // Update one Session_registrations
     * const session_registrations = await prisma.session_registrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends session_registrationsUpdateArgs>(args: SelectSubset<T, session_registrationsUpdateArgs<ExtArgs>>): Prisma__session_registrationsClient<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Session_registrations.
     * @param {session_registrationsDeleteManyArgs} args - Arguments to filter Session_registrations to delete.
     * @example
     * // Delete a few Session_registrations
     * const { count } = await prisma.session_registrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends session_registrationsDeleteManyArgs>(args?: SelectSubset<T, session_registrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Session_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_registrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Session_registrations
     * const session_registrations = await prisma.session_registrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends session_registrationsUpdateManyArgs>(args: SelectSubset<T, session_registrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session_registrations.
     * @param {session_registrationsUpsertArgs} args - Arguments to update or create a Session_registrations.
     * @example
     * // Update or create a Session_registrations
     * const session_registrations = await prisma.session_registrations.upsert({
     *   create: {
     *     // ... data to create a Session_registrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session_registrations we want to update
     *   }
     * })
     */
    upsert<T extends session_registrationsUpsertArgs>(args: SelectSubset<T, session_registrationsUpsertArgs<ExtArgs>>): Prisma__session_registrationsClient<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Session_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_registrationsCountArgs} args - Arguments to filter Session_registrations to count.
     * @example
     * // Count the number of Session_registrations
     * const count = await prisma.session_registrations.count({
     *   where: {
     *     // ... the filter for the Session_registrations we want to count
     *   }
     * })
    **/
    count<T extends session_registrationsCountArgs>(
      args?: Subset<T, session_registrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Session_registrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Session_registrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Session_registrationsAggregateArgs>(args: Subset<T, Session_registrationsAggregateArgs>): Prisma.PrismaPromise<GetSession_registrationsAggregateType<T>>

    /**
     * Group by Session_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_registrationsGroupByArgs} args - Group by arguments.
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
      T extends session_registrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: session_registrationsGroupByArgs['orderBy'] }
        : { orderBy?: session_registrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, session_registrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSession_registrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the session_registrations model
   */
  readonly fields: session_registrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for session_registrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__session_registrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registrations<T extends registrationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, registrationsDefaultArgs<ExtArgs>>): Prisma__registrationsClient<$Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends sessionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sessionsDefaultArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the session_registrations model
   */
  interface session_registrationsFieldRefs {
    readonly id: FieldRef<"session_registrations", 'Int'>
    readonly registration_id: FieldRef<"session_registrations", 'Int'>
    readonly session_id: FieldRef<"session_registrations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * session_registrations findUnique
   */
  export type session_registrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    /**
     * Filter, which session_registrations to fetch.
     */
    where: session_registrationsWhereUniqueInput
  }

  /**
   * session_registrations findUniqueOrThrow
   */
  export type session_registrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    /**
     * Filter, which session_registrations to fetch.
     */
    where: session_registrationsWhereUniqueInput
  }

  /**
   * session_registrations findFirst
   */
  export type session_registrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    /**
     * Filter, which session_registrations to fetch.
     */
    where?: session_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_registrations to fetch.
     */
    orderBy?: session_registrationsOrderByWithRelationInput | session_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for session_registrations.
     */
    cursor?: session_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of session_registrations.
     */
    distinct?: Session_registrationsScalarFieldEnum | Session_registrationsScalarFieldEnum[]
  }

  /**
   * session_registrations findFirstOrThrow
   */
  export type session_registrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    /**
     * Filter, which session_registrations to fetch.
     */
    where?: session_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_registrations to fetch.
     */
    orderBy?: session_registrationsOrderByWithRelationInput | session_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for session_registrations.
     */
    cursor?: session_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of session_registrations.
     */
    distinct?: Session_registrationsScalarFieldEnum | Session_registrationsScalarFieldEnum[]
  }

  /**
   * session_registrations findMany
   */
  export type session_registrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    /**
     * Filter, which session_registrations to fetch.
     */
    where?: session_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_registrations to fetch.
     */
    orderBy?: session_registrationsOrderByWithRelationInput | session_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing session_registrations.
     */
    cursor?: session_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_registrations.
     */
    skip?: number
    distinct?: Session_registrationsScalarFieldEnum | Session_registrationsScalarFieldEnum[]
  }

  /**
   * session_registrations create
   */
  export type session_registrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    /**
     * The data needed to create a session_registrations.
     */
    data: XOR<session_registrationsCreateInput, session_registrationsUncheckedCreateInput>
  }

  /**
   * session_registrations createMany
   */
  export type session_registrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many session_registrations.
     */
    data: session_registrationsCreateManyInput | session_registrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * session_registrations update
   */
  export type session_registrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    /**
     * The data needed to update a session_registrations.
     */
    data: XOR<session_registrationsUpdateInput, session_registrationsUncheckedUpdateInput>
    /**
     * Choose, which session_registrations to update.
     */
    where: session_registrationsWhereUniqueInput
  }

  /**
   * session_registrations updateMany
   */
  export type session_registrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update session_registrations.
     */
    data: XOR<session_registrationsUpdateManyMutationInput, session_registrationsUncheckedUpdateManyInput>
    /**
     * Filter which session_registrations to update
     */
    where?: session_registrationsWhereInput
    /**
     * Limit how many session_registrations to update.
     */
    limit?: number
  }

  /**
   * session_registrations upsert
   */
  export type session_registrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    /**
     * The filter to search for the session_registrations to update in case it exists.
     */
    where: session_registrationsWhereUniqueInput
    /**
     * In case the session_registrations found by the `where` argument doesn't exist, create a new session_registrations with this data.
     */
    create: XOR<session_registrationsCreateInput, session_registrationsUncheckedCreateInput>
    /**
     * In case the session_registrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<session_registrationsUpdateInput, session_registrationsUncheckedUpdateInput>
  }

  /**
   * session_registrations delete
   */
  export type session_registrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    /**
     * Filter which session_registrations to delete.
     */
    where: session_registrationsWhereUniqueInput
  }

  /**
   * session_registrations deleteMany
   */
  export type session_registrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session_registrations to delete
     */
    where?: session_registrationsWhereInput
    /**
     * Limit how many session_registrations to delete.
     */
    limit?: number
  }

  /**
   * session_registrations without action
   */
  export type session_registrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    id: number | null
    room_id: number | null
    cost: Decimal | null
  }

  export type SessionsSumAggregateOutputType = {
    id: number | null
    room_id: number | null
    cost: Decimal | null
  }

  export type SessionsMinAggregateOutputType = {
    id: number | null
    room_id: number | null
    title: string | null
    description: string | null
    speaker: string | null
    start: Date | null
    end: Date | null
    type: $Enums.sessions_type | null
    cost: Decimal | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: number | null
    room_id: number | null
    title: string | null
    description: string | null
    speaker: string | null
    start: Date | null
    end: Date | null
    type: $Enums.sessions_type | null
    cost: Decimal | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    room_id: number
    title: number
    description: number
    speaker: number
    start: number
    end: number
    type: number
    cost: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    id?: true
    room_id?: true
    cost?: true
  }

  export type SessionsSumAggregateInputType = {
    id?: true
    room_id?: true
    cost?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    room_id?: true
    title?: true
    description?: true
    speaker?: true
    start?: true
    end?: true
    type?: true
    cost?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    room_id?: true
    title?: true
    description?: true
    speaker?: true
    start?: true
    end?: true
    type?: true
    cost?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    room_id?: true
    title?: true
    description?: true
    speaker?: true
    start?: true
    end?: true
    type?: true
    cost?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: number
    room_id: number
    title: string
    description: string | null
    speaker: string | null
    start: Date
    end: Date
    type: $Enums.sessions_type
    cost: Decimal | null
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    title?: boolean
    description?: boolean
    speaker?: boolean
    start?: boolean
    end?: boolean
    type?: boolean
    cost?: boolean
    session_registrations?: boolean | sessions$session_registrationsArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    _count?: boolean | SessionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>



  export type sessionsSelectScalar = {
    id?: boolean
    room_id?: boolean
    title?: boolean
    description?: boolean
    speaker?: boolean
    start?: boolean
    end?: boolean
    type?: boolean
    cost?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_id" | "title" | "description" | "speaker" | "start" | "end" | "type" | "cost", ExtArgs["result"]["sessions"]>
  export type sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_registrations?: boolean | sessions$session_registrationsArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    _count?: boolean | SessionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {
      session_registrations: Prisma.$session_registrationsPayload<ExtArgs>[]
      rooms: Prisma.$roomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      room_id: number
      title: string
      description: string | null
      speaker: string | null
      start: Date
      end: Date
      type: $Enums.sessions_type
      cost: Prisma.Decimal | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
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
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session_registrations<T extends sessions$session_registrationsArgs<ExtArgs> = {}>(args?: Subset<T, sessions$session_registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomsDefaultArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'Int'>
    readonly room_id: FieldRef<"sessions", 'Int'>
    readonly title: FieldRef<"sessions", 'String'>
    readonly description: FieldRef<"sessions", 'String'>
    readonly speaker: FieldRef<"sessions", 'String'>
    readonly start: FieldRef<"sessions", 'DateTime'>
    readonly end: FieldRef<"sessions", 'DateTime'>
    readonly type: FieldRef<"sessions", 'sessions_type'>
    readonly cost: FieldRef<"sessions", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions.session_registrations
   */
  export type sessions$session_registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_registrations
     */
    select?: session_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_registrations
     */
    omit?: session_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_registrationsInclude<ExtArgs> | null
    where?: session_registrationsWhereInput
    orderBy?: session_registrationsOrderByWithRelationInput | session_registrationsOrderByWithRelationInput[]
    cursor?: session_registrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Session_registrationsScalarFieldEnum | Session_registrationsScalarFieldEnum[]
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
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


  export const AttendeesScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    email: 'email',
    registration_code: 'registration_code',
    login_token: 'login_token'
  };

  export type AttendeesScalarFieldEnum = (typeof AttendeesScalarFieldEnum)[keyof typeof AttendeesScalarFieldEnum]


  export const ChannelsScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    name: 'name'
  };

  export type ChannelsScalarFieldEnum = (typeof ChannelsScalarFieldEnum)[keyof typeof ChannelsScalarFieldEnum]


  export const Event_ticketsScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    name: 'name',
    cost: 'cost',
    special_validity: 'special_validity'
  };

  export type Event_ticketsScalarFieldEnum = (typeof Event_ticketsScalarFieldEnum)[keyof typeof Event_ticketsScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    organizer_id: 'organizer_id',
    name: 'name',
    slug: 'slug',
    date: 'date'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const OrganizersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    password_hash: 'password_hash'
  };

  export type OrganizersScalarFieldEnum = (typeof OrganizersScalarFieldEnum)[keyof typeof OrganizersScalarFieldEnum]


  export const RegistrationsScalarFieldEnum: {
    id: 'id',
    attendee_id: 'attendee_id',
    ticket_id: 'ticket_id',
    registration_time: 'registration_time'
  };

  export type RegistrationsScalarFieldEnum = (typeof RegistrationsScalarFieldEnum)[keyof typeof RegistrationsScalarFieldEnum]


  export const RoomsScalarFieldEnum: {
    id: 'id',
    channel_id: 'channel_id',
    name: 'name',
    capacity: 'capacity'
  };

  export type RoomsScalarFieldEnum = (typeof RoomsScalarFieldEnum)[keyof typeof RoomsScalarFieldEnum]


  export const Session_registrationsScalarFieldEnum: {
    id: 'id',
    registration_id: 'registration_id',
    session_id: 'session_id'
  };

  export type Session_registrationsScalarFieldEnum = (typeof Session_registrationsScalarFieldEnum)[keyof typeof Session_registrationsScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    room_id: 'room_id',
    title: 'title',
    description: 'description',
    speaker: 'speaker',
    start: 'start',
    end: 'end',
    type: 'type',
    cost: 'cost'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const attendeesOrderByRelevanceFieldEnum: {
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    email: 'email',
    registration_code: 'registration_code',
    login_token: 'login_token'
  };

  export type attendeesOrderByRelevanceFieldEnum = (typeof attendeesOrderByRelevanceFieldEnum)[keyof typeof attendeesOrderByRelevanceFieldEnum]


  export const channelsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type channelsOrderByRelevanceFieldEnum = (typeof channelsOrderByRelevanceFieldEnum)[keyof typeof channelsOrderByRelevanceFieldEnum]


  export const event_ticketsOrderByRelevanceFieldEnum: {
    name: 'name',
    special_validity: 'special_validity'
  };

  export type event_ticketsOrderByRelevanceFieldEnum = (typeof event_ticketsOrderByRelevanceFieldEnum)[keyof typeof event_ticketsOrderByRelevanceFieldEnum]


  export const eventsOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug'
  };

  export type eventsOrderByRelevanceFieldEnum = (typeof eventsOrderByRelevanceFieldEnum)[keyof typeof eventsOrderByRelevanceFieldEnum]


  export const organizersOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug',
    email: 'email',
    password_hash: 'password_hash'
  };

  export type organizersOrderByRelevanceFieldEnum = (typeof organizersOrderByRelevanceFieldEnum)[keyof typeof organizersOrderByRelevanceFieldEnum]


  export const roomsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type roomsOrderByRelevanceFieldEnum = (typeof roomsOrderByRelevanceFieldEnum)[keyof typeof roomsOrderByRelevanceFieldEnum]


  export const sessionsOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    speaker: 'speaker'
  };

  export type sessionsOrderByRelevanceFieldEnum = (typeof sessionsOrderByRelevanceFieldEnum)[keyof typeof sessionsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'sessions_type'
   */
  export type Enumsessions_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sessions_type'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type attendeesWhereInput = {
    AND?: attendeesWhereInput | attendeesWhereInput[]
    OR?: attendeesWhereInput[]
    NOT?: attendeesWhereInput | attendeesWhereInput[]
    id?: IntFilter<"attendees"> | number
    firstname?: StringFilter<"attendees"> | string
    lastname?: StringFilter<"attendees"> | string
    username?: StringFilter<"attendees"> | string
    email?: StringFilter<"attendees"> | string
    registration_code?: StringFilter<"attendees"> | string
    login_token?: StringNullableFilter<"attendees"> | string | null
    registrations?: RegistrationsListRelationFilter
  }

  export type attendeesOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    registration_code?: SortOrder
    login_token?: SortOrderInput | SortOrder
    registrations?: registrationsOrderByRelationAggregateInput
    _relevance?: attendeesOrderByRelevanceInput
  }

  export type attendeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: attendeesWhereInput | attendeesWhereInput[]
    OR?: attendeesWhereInput[]
    NOT?: attendeesWhereInput | attendeesWhereInput[]
    firstname?: StringFilter<"attendees"> | string
    lastname?: StringFilter<"attendees"> | string
    username?: StringFilter<"attendees"> | string
    email?: StringFilter<"attendees"> | string
    registration_code?: StringFilter<"attendees"> | string
    login_token?: StringNullableFilter<"attendees"> | string | null
    registrations?: RegistrationsListRelationFilter
  }, "id">

  export type attendeesOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    registration_code?: SortOrder
    login_token?: SortOrderInput | SortOrder
    _count?: attendeesCountOrderByAggregateInput
    _avg?: attendeesAvgOrderByAggregateInput
    _max?: attendeesMaxOrderByAggregateInput
    _min?: attendeesMinOrderByAggregateInput
    _sum?: attendeesSumOrderByAggregateInput
  }

  export type attendeesScalarWhereWithAggregatesInput = {
    AND?: attendeesScalarWhereWithAggregatesInput | attendeesScalarWhereWithAggregatesInput[]
    OR?: attendeesScalarWhereWithAggregatesInput[]
    NOT?: attendeesScalarWhereWithAggregatesInput | attendeesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"attendees"> | number
    firstname?: StringWithAggregatesFilter<"attendees"> | string
    lastname?: StringWithAggregatesFilter<"attendees"> | string
    username?: StringWithAggregatesFilter<"attendees"> | string
    email?: StringWithAggregatesFilter<"attendees"> | string
    registration_code?: StringWithAggregatesFilter<"attendees"> | string
    login_token?: StringNullableWithAggregatesFilter<"attendees"> | string | null
  }

  export type channelsWhereInput = {
    AND?: channelsWhereInput | channelsWhereInput[]
    OR?: channelsWhereInput[]
    NOT?: channelsWhereInput | channelsWhereInput[]
    id?: IntFilter<"channels"> | number
    event_id?: IntFilter<"channels"> | number
    name?: StringNullableFilter<"channels"> | string | null
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    rooms?: RoomsListRelationFilter
  }

  export type channelsOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrderInput | SortOrder
    events?: eventsOrderByWithRelationInput
    rooms?: roomsOrderByRelationAggregateInput
    _relevance?: channelsOrderByRelevanceInput
  }

  export type channelsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: channelsWhereInput | channelsWhereInput[]
    OR?: channelsWhereInput[]
    NOT?: channelsWhereInput | channelsWhereInput[]
    event_id?: IntFilter<"channels"> | number
    name?: StringNullableFilter<"channels"> | string | null
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    rooms?: RoomsListRelationFilter
  }, "id">

  export type channelsOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: channelsCountOrderByAggregateInput
    _avg?: channelsAvgOrderByAggregateInput
    _max?: channelsMaxOrderByAggregateInput
    _min?: channelsMinOrderByAggregateInput
    _sum?: channelsSumOrderByAggregateInput
  }

  export type channelsScalarWhereWithAggregatesInput = {
    AND?: channelsScalarWhereWithAggregatesInput | channelsScalarWhereWithAggregatesInput[]
    OR?: channelsScalarWhereWithAggregatesInput[]
    NOT?: channelsScalarWhereWithAggregatesInput | channelsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"channels"> | number
    event_id?: IntWithAggregatesFilter<"channels"> | number
    name?: StringNullableWithAggregatesFilter<"channels"> | string | null
  }

  export type event_ticketsWhereInput = {
    AND?: event_ticketsWhereInput | event_ticketsWhereInput[]
    OR?: event_ticketsWhereInput[]
    NOT?: event_ticketsWhereInput | event_ticketsWhereInput[]
    id?: IntFilter<"event_tickets"> | number
    event_id?: IntFilter<"event_tickets"> | number
    name?: StringNullableFilter<"event_tickets"> | string | null
    cost?: DecimalNullableFilter<"event_tickets"> | Decimal | DecimalJsLike | number | string | null
    special_validity?: StringNullableFilter<"event_tickets"> | string | null
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    registrations?: RegistrationsListRelationFilter
  }

  export type event_ticketsOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    special_validity?: SortOrderInput | SortOrder
    events?: eventsOrderByWithRelationInput
    registrations?: registrationsOrderByRelationAggregateInput
    _relevance?: event_ticketsOrderByRelevanceInput
  }

  export type event_ticketsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: event_ticketsWhereInput | event_ticketsWhereInput[]
    OR?: event_ticketsWhereInput[]
    NOT?: event_ticketsWhereInput | event_ticketsWhereInput[]
    event_id?: IntFilter<"event_tickets"> | number
    name?: StringNullableFilter<"event_tickets"> | string | null
    cost?: DecimalNullableFilter<"event_tickets"> | Decimal | DecimalJsLike | number | string | null
    special_validity?: StringNullableFilter<"event_tickets"> | string | null
    events?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    registrations?: RegistrationsListRelationFilter
  }, "id">

  export type event_ticketsOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    special_validity?: SortOrderInput | SortOrder
    _count?: event_ticketsCountOrderByAggregateInput
    _avg?: event_ticketsAvgOrderByAggregateInput
    _max?: event_ticketsMaxOrderByAggregateInput
    _min?: event_ticketsMinOrderByAggregateInput
    _sum?: event_ticketsSumOrderByAggregateInput
  }

  export type event_ticketsScalarWhereWithAggregatesInput = {
    AND?: event_ticketsScalarWhereWithAggregatesInput | event_ticketsScalarWhereWithAggregatesInput[]
    OR?: event_ticketsScalarWhereWithAggregatesInput[]
    NOT?: event_ticketsScalarWhereWithAggregatesInput | event_ticketsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"event_tickets"> | number
    event_id?: IntWithAggregatesFilter<"event_tickets"> | number
    name?: StringNullableWithAggregatesFilter<"event_tickets"> | string | null
    cost?: DecimalNullableWithAggregatesFilter<"event_tickets"> | Decimal | DecimalJsLike | number | string | null
    special_validity?: StringNullableWithAggregatesFilter<"event_tickets"> | string | null
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: IntFilter<"events"> | number
    organizer_id?: IntFilter<"events"> | number
    name?: StringNullableFilter<"events"> | string | null
    slug?: StringNullableFilter<"events"> | string | null
    date?: DateTimeNullableFilter<"events"> | Date | string | null
    channels?: ChannelsListRelationFilter
    event_tickets?: Event_ticketsListRelationFilter
    organizers?: XOR<OrganizersScalarRelationFilter, organizersWhereInput>
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    channels?: channelsOrderByRelationAggregateInput
    event_tickets?: event_ticketsOrderByRelationAggregateInput
    organizers?: organizersOrderByWithRelationInput
    _relevance?: eventsOrderByRelevanceInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    organizer_id?: IntFilter<"events"> | number
    name?: StringNullableFilter<"events"> | string | null
    slug?: StringNullableFilter<"events"> | string | null
    date?: DateTimeNullableFilter<"events"> | Date | string | null
    channels?: ChannelsListRelationFilter
    event_tickets?: Event_ticketsListRelationFilter
    organizers?: XOR<OrganizersScalarRelationFilter, organizersWhereInput>
  }, "id">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events"> | number
    organizer_id?: IntWithAggregatesFilter<"events"> | number
    name?: StringNullableWithAggregatesFilter<"events"> | string | null
    slug?: StringNullableWithAggregatesFilter<"events"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"events"> | Date | string | null
  }

  export type organizersWhereInput = {
    AND?: organizersWhereInput | organizersWhereInput[]
    OR?: organizersWhereInput[]
    NOT?: organizersWhereInput | organizersWhereInput[]
    id?: IntFilter<"organizers"> | number
    name?: StringFilter<"organizers"> | string
    slug?: StringFilter<"organizers"> | string
    email?: StringNullableFilter<"organizers"> | string | null
    password_hash?: StringFilter<"organizers"> | string
    events?: EventsListRelationFilter
  }

  export type organizersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    events?: eventsOrderByRelationAggregateInput
    _relevance?: organizersOrderByRelevanceInput
  }

  export type organizersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: organizersWhereInput | organizersWhereInput[]
    OR?: organizersWhereInput[]
    NOT?: organizersWhereInput | organizersWhereInput[]
    name?: StringFilter<"organizers"> | string
    slug?: StringFilter<"organizers"> | string
    email?: StringNullableFilter<"organizers"> | string | null
    password_hash?: StringFilter<"organizers"> | string
    events?: EventsListRelationFilter
  }, "id">

  export type organizersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    _count?: organizersCountOrderByAggregateInput
    _avg?: organizersAvgOrderByAggregateInput
    _max?: organizersMaxOrderByAggregateInput
    _min?: organizersMinOrderByAggregateInput
    _sum?: organizersSumOrderByAggregateInput
  }

  export type organizersScalarWhereWithAggregatesInput = {
    AND?: organizersScalarWhereWithAggregatesInput | organizersScalarWhereWithAggregatesInput[]
    OR?: organizersScalarWhereWithAggregatesInput[]
    NOT?: organizersScalarWhereWithAggregatesInput | organizersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"organizers"> | number
    name?: StringWithAggregatesFilter<"organizers"> | string
    slug?: StringWithAggregatesFilter<"organizers"> | string
    email?: StringNullableWithAggregatesFilter<"organizers"> | string | null
    password_hash?: StringWithAggregatesFilter<"organizers"> | string
  }

  export type registrationsWhereInput = {
    AND?: registrationsWhereInput | registrationsWhereInput[]
    OR?: registrationsWhereInput[]
    NOT?: registrationsWhereInput | registrationsWhereInput[]
    id?: IntFilter<"registrations"> | number
    attendee_id?: IntFilter<"registrations"> | number
    ticket_id?: IntFilter<"registrations"> | number
    registration_time?: DateTimeNullableFilter<"registrations"> | Date | string | null
    attendees?: XOR<AttendeesScalarRelationFilter, attendeesWhereInput>
    event_tickets?: XOR<Event_ticketsScalarRelationFilter, event_ticketsWhereInput>
    session_registrations?: Session_registrationsListRelationFilter
  }

  export type registrationsOrderByWithRelationInput = {
    id?: SortOrder
    attendee_id?: SortOrder
    ticket_id?: SortOrder
    registration_time?: SortOrderInput | SortOrder
    attendees?: attendeesOrderByWithRelationInput
    event_tickets?: event_ticketsOrderByWithRelationInput
    session_registrations?: session_registrationsOrderByRelationAggregateInput
  }

  export type registrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: registrationsWhereInput | registrationsWhereInput[]
    OR?: registrationsWhereInput[]
    NOT?: registrationsWhereInput | registrationsWhereInput[]
    attendee_id?: IntFilter<"registrations"> | number
    ticket_id?: IntFilter<"registrations"> | number
    registration_time?: DateTimeNullableFilter<"registrations"> | Date | string | null
    attendees?: XOR<AttendeesScalarRelationFilter, attendeesWhereInput>
    event_tickets?: XOR<Event_ticketsScalarRelationFilter, event_ticketsWhereInput>
    session_registrations?: Session_registrationsListRelationFilter
  }, "id">

  export type registrationsOrderByWithAggregationInput = {
    id?: SortOrder
    attendee_id?: SortOrder
    ticket_id?: SortOrder
    registration_time?: SortOrderInput | SortOrder
    _count?: registrationsCountOrderByAggregateInput
    _avg?: registrationsAvgOrderByAggregateInput
    _max?: registrationsMaxOrderByAggregateInput
    _min?: registrationsMinOrderByAggregateInput
    _sum?: registrationsSumOrderByAggregateInput
  }

  export type registrationsScalarWhereWithAggregatesInput = {
    AND?: registrationsScalarWhereWithAggregatesInput | registrationsScalarWhereWithAggregatesInput[]
    OR?: registrationsScalarWhereWithAggregatesInput[]
    NOT?: registrationsScalarWhereWithAggregatesInput | registrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"registrations"> | number
    attendee_id?: IntWithAggregatesFilter<"registrations"> | number
    ticket_id?: IntWithAggregatesFilter<"registrations"> | number
    registration_time?: DateTimeNullableWithAggregatesFilter<"registrations"> | Date | string | null
  }

  export type roomsWhereInput = {
    AND?: roomsWhereInput | roomsWhereInput[]
    OR?: roomsWhereInput[]
    NOT?: roomsWhereInput | roomsWhereInput[]
    id?: IntFilter<"rooms"> | number
    channel_id?: IntFilter<"rooms"> | number
    name?: StringNullableFilter<"rooms"> | string | null
    capacity?: IntNullableFilter<"rooms"> | number | null
    channels?: XOR<ChannelsScalarRelationFilter, channelsWhereInput>
    sessions?: SessionsListRelationFilter
  }

  export type roomsOrderByWithRelationInput = {
    id?: SortOrder
    channel_id?: SortOrder
    name?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    channels?: channelsOrderByWithRelationInput
    sessions?: sessionsOrderByRelationAggregateInput
    _relevance?: roomsOrderByRelevanceInput
  }

  export type roomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: roomsWhereInput | roomsWhereInput[]
    OR?: roomsWhereInput[]
    NOT?: roomsWhereInput | roomsWhereInput[]
    channel_id?: IntFilter<"rooms"> | number
    name?: StringNullableFilter<"rooms"> | string | null
    capacity?: IntNullableFilter<"rooms"> | number | null
    channels?: XOR<ChannelsScalarRelationFilter, channelsWhereInput>
    sessions?: SessionsListRelationFilter
  }, "id">

  export type roomsOrderByWithAggregationInput = {
    id?: SortOrder
    channel_id?: SortOrder
    name?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    _count?: roomsCountOrderByAggregateInput
    _avg?: roomsAvgOrderByAggregateInput
    _max?: roomsMaxOrderByAggregateInput
    _min?: roomsMinOrderByAggregateInput
    _sum?: roomsSumOrderByAggregateInput
  }

  export type roomsScalarWhereWithAggregatesInput = {
    AND?: roomsScalarWhereWithAggregatesInput | roomsScalarWhereWithAggregatesInput[]
    OR?: roomsScalarWhereWithAggregatesInput[]
    NOT?: roomsScalarWhereWithAggregatesInput | roomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rooms"> | number
    channel_id?: IntWithAggregatesFilter<"rooms"> | number
    name?: StringNullableWithAggregatesFilter<"rooms"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"rooms"> | number | null
  }

  export type session_registrationsWhereInput = {
    AND?: session_registrationsWhereInput | session_registrationsWhereInput[]
    OR?: session_registrationsWhereInput[]
    NOT?: session_registrationsWhereInput | session_registrationsWhereInput[]
    id?: IntFilter<"session_registrations"> | number
    registration_id?: IntFilter<"session_registrations"> | number
    session_id?: IntFilter<"session_registrations"> | number
    registrations?: XOR<RegistrationsScalarRelationFilter, registrationsWhereInput>
    sessions?: XOR<SessionsScalarRelationFilter, sessionsWhereInput>
  }

  export type session_registrationsOrderByWithRelationInput = {
    id?: SortOrder
    registration_id?: SortOrder
    session_id?: SortOrder
    registrations?: registrationsOrderByWithRelationInput
    sessions?: sessionsOrderByWithRelationInput
  }

  export type session_registrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: session_registrationsWhereInput | session_registrationsWhereInput[]
    OR?: session_registrationsWhereInput[]
    NOT?: session_registrationsWhereInput | session_registrationsWhereInput[]
    registration_id?: IntFilter<"session_registrations"> | number
    session_id?: IntFilter<"session_registrations"> | number
    registrations?: XOR<RegistrationsScalarRelationFilter, registrationsWhereInput>
    sessions?: XOR<SessionsScalarRelationFilter, sessionsWhereInput>
  }, "id">

  export type session_registrationsOrderByWithAggregationInput = {
    id?: SortOrder
    registration_id?: SortOrder
    session_id?: SortOrder
    _count?: session_registrationsCountOrderByAggregateInput
    _avg?: session_registrationsAvgOrderByAggregateInput
    _max?: session_registrationsMaxOrderByAggregateInput
    _min?: session_registrationsMinOrderByAggregateInput
    _sum?: session_registrationsSumOrderByAggregateInput
  }

  export type session_registrationsScalarWhereWithAggregatesInput = {
    AND?: session_registrationsScalarWhereWithAggregatesInput | session_registrationsScalarWhereWithAggregatesInput[]
    OR?: session_registrationsScalarWhereWithAggregatesInput[]
    NOT?: session_registrationsScalarWhereWithAggregatesInput | session_registrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"session_registrations"> | number
    registration_id?: IntWithAggregatesFilter<"session_registrations"> | number
    session_id?: IntWithAggregatesFilter<"session_registrations"> | number
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: IntFilter<"sessions"> | number
    room_id?: IntFilter<"sessions"> | number
    title?: StringFilter<"sessions"> | string
    description?: StringNullableFilter<"sessions"> | string | null
    speaker?: StringNullableFilter<"sessions"> | string | null
    start?: DateTimeFilter<"sessions"> | Date | string
    end?: DateTimeFilter<"sessions"> | Date | string
    type?: Enumsessions_typeFilter<"sessions"> | $Enums.sessions_type
    cost?: DecimalNullableFilter<"sessions"> | Decimal | DecimalJsLike | number | string | null
    session_registrations?: Session_registrationsListRelationFilter
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    room_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    speaker?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrder
    type?: SortOrder
    cost?: SortOrderInput | SortOrder
    session_registrations?: session_registrationsOrderByRelationAggregateInput
    rooms?: roomsOrderByWithRelationInput
    _relevance?: sessionsOrderByRelevanceInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    room_id?: IntFilter<"sessions"> | number
    title?: StringFilter<"sessions"> | string
    description?: StringNullableFilter<"sessions"> | string | null
    speaker?: StringNullableFilter<"sessions"> | string | null
    start?: DateTimeFilter<"sessions"> | Date | string
    end?: DateTimeFilter<"sessions"> | Date | string
    type?: Enumsessions_typeFilter<"sessions"> | $Enums.sessions_type
    cost?: DecimalNullableFilter<"sessions"> | Decimal | DecimalJsLike | number | string | null
    session_registrations?: Session_registrationsListRelationFilter
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
  }, "id">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    room_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    speaker?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrder
    type?: SortOrder
    cost?: SortOrderInput | SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sessions"> | number
    room_id?: IntWithAggregatesFilter<"sessions"> | number
    title?: StringWithAggregatesFilter<"sessions"> | string
    description?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    speaker?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    start?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    end?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    type?: Enumsessions_typeWithAggregatesFilter<"sessions"> | $Enums.sessions_type
    cost?: DecimalNullableWithAggregatesFilter<"sessions"> | Decimal | DecimalJsLike | number | string | null
  }

  export type attendeesCreateInput = {
    firstname: string
    lastname: string
    username: string
    email: string
    registration_code: string
    login_token?: string | null
    registrations?: registrationsCreateNestedManyWithoutAttendeesInput
  }

  export type attendeesUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    username: string
    email: string
    registration_code: string
    login_token?: string | null
    registrations?: registrationsUncheckedCreateNestedManyWithoutAttendeesInput
  }

  export type attendeesUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registration_code?: StringFieldUpdateOperationsInput | string
    login_token?: NullableStringFieldUpdateOperationsInput | string | null
    registrations?: registrationsUpdateManyWithoutAttendeesNestedInput
  }

  export type attendeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registration_code?: StringFieldUpdateOperationsInput | string
    login_token?: NullableStringFieldUpdateOperationsInput | string | null
    registrations?: registrationsUncheckedUpdateManyWithoutAttendeesNestedInput
  }

  export type attendeesCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    username: string
    email: string
    registration_code: string
    login_token?: string | null
  }

  export type attendeesUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registration_code?: StringFieldUpdateOperationsInput | string
    login_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type attendeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registration_code?: StringFieldUpdateOperationsInput | string
    login_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type channelsCreateInput = {
    name?: string | null
    events: eventsCreateNestedOneWithoutChannelsInput
    rooms?: roomsCreateNestedManyWithoutChannelsInput
  }

  export type channelsUncheckedCreateInput = {
    id?: number
    event_id: number
    name?: string | null
    rooms?: roomsUncheckedCreateNestedManyWithoutChannelsInput
  }

  export type channelsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUpdateOneRequiredWithoutChannelsNestedInput
    rooms?: roomsUpdateManyWithoutChannelsNestedInput
  }

  export type channelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: roomsUncheckedUpdateManyWithoutChannelsNestedInput
  }

  export type channelsCreateManyInput = {
    id?: number
    event_id: number
    name?: string | null
  }

  export type channelsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type channelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type event_ticketsCreateInput = {
    name?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    special_validity?: string | null
    events: eventsCreateNestedOneWithoutEvent_ticketsInput
    registrations?: registrationsCreateNestedManyWithoutEvent_ticketsInput
  }

  export type event_ticketsUncheckedCreateInput = {
    id?: number
    event_id: number
    name?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    special_validity?: string | null
    registrations?: registrationsUncheckedCreateNestedManyWithoutEvent_ticketsInput
  }

  export type event_ticketsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    special_validity?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUpdateOneRequiredWithoutEvent_ticketsNestedInput
    registrations?: registrationsUpdateManyWithoutEvent_ticketsNestedInput
  }

  export type event_ticketsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    special_validity?: NullableStringFieldUpdateOperationsInput | string | null
    registrations?: registrationsUncheckedUpdateManyWithoutEvent_ticketsNestedInput
  }

  export type event_ticketsCreateManyInput = {
    id?: number
    event_id: number
    name?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    special_validity?: string | null
  }

  export type event_ticketsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    special_validity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type event_ticketsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    special_validity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventsCreateInput = {
    name?: string | null
    slug?: string | null
    date?: Date | string | null
    channels?: channelsCreateNestedManyWithoutEventsInput
    event_tickets?: event_ticketsCreateNestedManyWithoutEventsInput
    organizers: organizersCreateNestedOneWithoutEventsInput
  }

  export type eventsUncheckedCreateInput = {
    id?: number
    organizer_id: number
    name?: string | null
    slug?: string | null
    date?: Date | string | null
    channels?: channelsUncheckedCreateNestedManyWithoutEventsInput
    event_tickets?: event_ticketsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    channels?: channelsUpdateManyWithoutEventsNestedInput
    event_tickets?: event_ticketsUpdateManyWithoutEventsNestedInput
    organizers?: organizersUpdateOneRequiredWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    channels?: channelsUncheckedUpdateManyWithoutEventsNestedInput
    event_tickets?: event_ticketsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsCreateManyInput = {
    id?: number
    organizer_id: number
    name?: string | null
    slug?: string | null
    date?: Date | string | null
  }

  export type eventsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type organizersCreateInput = {
    name: string
    slug: string
    email?: string | null
    password_hash: string
    events?: eventsCreateNestedManyWithoutOrganizersInput
  }

  export type organizersUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    email?: string | null
    password_hash: string
    events?: eventsUncheckedCreateNestedManyWithoutOrganizersInput
  }

  export type organizersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    events?: eventsUpdateManyWithoutOrganizersNestedInput
  }

  export type organizersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    events?: eventsUncheckedUpdateManyWithoutOrganizersNestedInput
  }

  export type organizersCreateManyInput = {
    id?: number
    name: string
    slug: string
    email?: string | null
    password_hash: string
  }

  export type organizersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type organizersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type registrationsCreateInput = {
    registration_time?: Date | string | null
    attendees: attendeesCreateNestedOneWithoutRegistrationsInput
    event_tickets: event_ticketsCreateNestedOneWithoutRegistrationsInput
    session_registrations?: session_registrationsCreateNestedManyWithoutRegistrationsInput
  }

  export type registrationsUncheckedCreateInput = {
    id?: number
    attendee_id: number
    ticket_id: number
    registration_time?: Date | string | null
    session_registrations?: session_registrationsUncheckedCreateNestedManyWithoutRegistrationsInput
  }

  export type registrationsUpdateInput = {
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendees?: attendeesUpdateOneRequiredWithoutRegistrationsNestedInput
    event_tickets?: event_ticketsUpdateOneRequiredWithoutRegistrationsNestedInput
    session_registrations?: session_registrationsUpdateManyWithoutRegistrationsNestedInput
  }

  export type registrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendee_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session_registrations?: session_registrationsUncheckedUpdateManyWithoutRegistrationsNestedInput
  }

  export type registrationsCreateManyInput = {
    id?: number
    attendee_id: number
    ticket_id: number
    registration_time?: Date | string | null
  }

  export type registrationsUpdateManyMutationInput = {
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type registrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendee_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type roomsCreateInput = {
    name?: string | null
    capacity?: number | null
    channels: channelsCreateNestedOneWithoutRoomsInput
    sessions?: sessionsCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateInput = {
    id?: number
    channel_id: number
    name?: string | null
    capacity?: number | null
    sessions?: sessionsUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: channelsUpdateOneRequiredWithoutRoomsNestedInput
    sessions?: sessionsUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    sessions?: sessionsUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type roomsCreateManyInput = {
    id?: number
    channel_id: number
    name?: string | null
    capacity?: number | null
  }

  export type roomsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type roomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type session_registrationsCreateInput = {
    registrations: registrationsCreateNestedOneWithoutSession_registrationsInput
    sessions: sessionsCreateNestedOneWithoutSession_registrationsInput
  }

  export type session_registrationsUncheckedCreateInput = {
    id?: number
    registration_id: number
    session_id: number
  }

  export type session_registrationsUpdateInput = {
    registrations?: registrationsUpdateOneRequiredWithoutSession_registrationsNestedInput
    sessions?: sessionsUpdateOneRequiredWithoutSession_registrationsNestedInput
  }

  export type session_registrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    registration_id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
  }

  export type session_registrationsCreateManyInput = {
    id?: number
    registration_id: number
    session_id: number
  }

  export type session_registrationsUpdateManyMutationInput = {

  }

  export type session_registrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    registration_id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsCreateInput = {
    title: string
    description?: string | null
    speaker?: string | null
    start: Date | string
    end: Date | string
    type: $Enums.sessions_type
    cost?: Decimal | DecimalJsLike | number | string | null
    session_registrations?: session_registrationsCreateNestedManyWithoutSessionsInput
    rooms: roomsCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateInput = {
    id?: number
    room_id: number
    title: string
    description?: string | null
    speaker?: string | null
    start: Date | string
    end: Date | string
    type: $Enums.sessions_type
    cost?: Decimal | DecimalJsLike | number | string | null
    session_registrations?: session_registrationsUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type sessionsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumsessions_typeFieldUpdateOperationsInput | $Enums.sessions_type
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    session_registrations?: session_registrationsUpdateManyWithoutSessionsNestedInput
    rooms?: roomsUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumsessions_typeFieldUpdateOperationsInput | $Enums.sessions_type
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    session_registrations?: session_registrationsUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type sessionsCreateManyInput = {
    id?: number
    room_id: number
    title: string
    description?: string | null
    speaker?: string | null
    start: Date | string
    end: Date | string
    type: $Enums.sessions_type
    cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type sessionsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumsessions_typeFieldUpdateOperationsInput | $Enums.sessions_type
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumsessions_typeFieldUpdateOperationsInput | $Enums.sessions_type
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RegistrationsListRelationFilter = {
    every?: registrationsWhereInput
    some?: registrationsWhereInput
    none?: registrationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type registrationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type attendeesOrderByRelevanceInput = {
    fields: attendeesOrderByRelevanceFieldEnum | attendeesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type attendeesCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    registration_code?: SortOrder
    login_token?: SortOrder
  }

  export type attendeesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type attendeesMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    registration_code?: SortOrder
    login_token?: SortOrder
  }

  export type attendeesMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    registration_code?: SortOrder
    login_token?: SortOrder
  }

  export type attendeesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EventsScalarRelationFilter = {
    is?: eventsWhereInput
    isNot?: eventsWhereInput
  }

  export type RoomsListRelationFilter = {
    every?: roomsWhereInput
    some?: roomsWhereInput
    none?: roomsWhereInput
  }

  export type roomsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type channelsOrderByRelevanceInput = {
    fields: channelsOrderByRelevanceFieldEnum | channelsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type channelsCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
  }

  export type channelsAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type channelsMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
  }

  export type channelsMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
  }

  export type channelsSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type event_ticketsOrderByRelevanceInput = {
    fields: event_ticketsOrderByRelevanceFieldEnum | event_ticketsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type event_ticketsCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    special_validity?: SortOrder
  }

  export type event_ticketsAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    cost?: SortOrder
  }

  export type event_ticketsMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    special_validity?: SortOrder
  }

  export type event_ticketsMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    special_validity?: SortOrder
  }

  export type event_ticketsSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    cost?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ChannelsListRelationFilter = {
    every?: channelsWhereInput
    some?: channelsWhereInput
    none?: channelsWhereInput
  }

  export type Event_ticketsListRelationFilter = {
    every?: event_ticketsWhereInput
    some?: event_ticketsWhereInput
    none?: event_ticketsWhereInput
  }

  export type OrganizersScalarRelationFilter = {
    is?: organizersWhereInput
    isNot?: organizersWhereInput
  }

  export type channelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type event_ticketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventsOrderByRelevanceInput = {
    fields: eventsOrderByRelevanceFieldEnum | eventsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    date?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    date?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    date?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventsListRelationFilter = {
    every?: eventsWhereInput
    some?: eventsWhereInput
    none?: eventsWhereInput
  }

  export type eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizersOrderByRelevanceInput = {
    fields: organizersOrderByRelevanceFieldEnum | organizersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type organizersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
  }

  export type organizersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organizersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
  }

  export type organizersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
  }

  export type organizersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AttendeesScalarRelationFilter = {
    is?: attendeesWhereInput
    isNot?: attendeesWhereInput
  }

  export type Event_ticketsScalarRelationFilter = {
    is?: event_ticketsWhereInput
    isNot?: event_ticketsWhereInput
  }

  export type Session_registrationsListRelationFilter = {
    every?: session_registrationsWhereInput
    some?: session_registrationsWhereInput
    none?: session_registrationsWhereInput
  }

  export type session_registrationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type registrationsCountOrderByAggregateInput = {
    id?: SortOrder
    attendee_id?: SortOrder
    ticket_id?: SortOrder
    registration_time?: SortOrder
  }

  export type registrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    attendee_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type registrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    attendee_id?: SortOrder
    ticket_id?: SortOrder
    registration_time?: SortOrder
  }

  export type registrationsMinOrderByAggregateInput = {
    id?: SortOrder
    attendee_id?: SortOrder
    ticket_id?: SortOrder
    registration_time?: SortOrder
  }

  export type registrationsSumOrderByAggregateInput = {
    id?: SortOrder
    attendee_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ChannelsScalarRelationFilter = {
    is?: channelsWhereInput
    isNot?: channelsWhereInput
  }

  export type SessionsListRelationFilter = {
    every?: sessionsWhereInput
    some?: sessionsWhereInput
    none?: sessionsWhereInput
  }

  export type sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roomsOrderByRelevanceInput = {
    fields: roomsOrderByRelevanceFieldEnum | roomsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type roomsCountOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
  }

  export type roomsAvgOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    capacity?: SortOrder
  }

  export type roomsMaxOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
  }

  export type roomsMinOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
  }

  export type roomsSumOrderByAggregateInput = {
    id?: SortOrder
    channel_id?: SortOrder
    capacity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type RegistrationsScalarRelationFilter = {
    is?: registrationsWhereInput
    isNot?: registrationsWhereInput
  }

  export type SessionsScalarRelationFilter = {
    is?: sessionsWhereInput
    isNot?: sessionsWhereInput
  }

  export type session_registrationsCountOrderByAggregateInput = {
    id?: SortOrder
    registration_id?: SortOrder
    session_id?: SortOrder
  }

  export type session_registrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    registration_id?: SortOrder
    session_id?: SortOrder
  }

  export type session_registrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    registration_id?: SortOrder
    session_id?: SortOrder
  }

  export type session_registrationsMinOrderByAggregateInput = {
    id?: SortOrder
    registration_id?: SortOrder
    session_id?: SortOrder
  }

  export type session_registrationsSumOrderByAggregateInput = {
    id?: SortOrder
    registration_id?: SortOrder
    session_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumsessions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.sessions_type | Enumsessions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.sessions_type[]
    notIn?: $Enums.sessions_type[]
    not?: NestedEnumsessions_typeFilter<$PrismaModel> | $Enums.sessions_type
  }

  export type RoomsScalarRelationFilter = {
    is?: roomsWhereInput
    isNot?: roomsWhereInput
  }

  export type sessionsOrderByRelevanceInput = {
    fields: sessionsOrderByRelevanceFieldEnum | sessionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    start?: SortOrder
    end?: SortOrder
    type?: SortOrder
    cost?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    cost?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    start?: SortOrder
    end?: SortOrder
    type?: SortOrder
    cost?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    speaker?: SortOrder
    start?: SortOrder
    end?: SortOrder
    type?: SortOrder
    cost?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    cost?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumsessions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sessions_type | Enumsessions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.sessions_type[]
    notIn?: $Enums.sessions_type[]
    not?: NestedEnumsessions_typeWithAggregatesFilter<$PrismaModel> | $Enums.sessions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsessions_typeFilter<$PrismaModel>
    _max?: NestedEnumsessions_typeFilter<$PrismaModel>
  }

  export type registrationsCreateNestedManyWithoutAttendeesInput = {
    create?: XOR<registrationsCreateWithoutAttendeesInput, registrationsUncheckedCreateWithoutAttendeesInput> | registrationsCreateWithoutAttendeesInput[] | registrationsUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutAttendeesInput | registrationsCreateOrConnectWithoutAttendeesInput[]
    createMany?: registrationsCreateManyAttendeesInputEnvelope
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
  }

  export type registrationsUncheckedCreateNestedManyWithoutAttendeesInput = {
    create?: XOR<registrationsCreateWithoutAttendeesInput, registrationsUncheckedCreateWithoutAttendeesInput> | registrationsCreateWithoutAttendeesInput[] | registrationsUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutAttendeesInput | registrationsCreateOrConnectWithoutAttendeesInput[]
    createMany?: registrationsCreateManyAttendeesInputEnvelope
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type registrationsUpdateManyWithoutAttendeesNestedInput = {
    create?: XOR<registrationsCreateWithoutAttendeesInput, registrationsUncheckedCreateWithoutAttendeesInput> | registrationsCreateWithoutAttendeesInput[] | registrationsUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutAttendeesInput | registrationsCreateOrConnectWithoutAttendeesInput[]
    upsert?: registrationsUpsertWithWhereUniqueWithoutAttendeesInput | registrationsUpsertWithWhereUniqueWithoutAttendeesInput[]
    createMany?: registrationsCreateManyAttendeesInputEnvelope
    set?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    disconnect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    delete?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    update?: registrationsUpdateWithWhereUniqueWithoutAttendeesInput | registrationsUpdateWithWhereUniqueWithoutAttendeesInput[]
    updateMany?: registrationsUpdateManyWithWhereWithoutAttendeesInput | registrationsUpdateManyWithWhereWithoutAttendeesInput[]
    deleteMany?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type registrationsUncheckedUpdateManyWithoutAttendeesNestedInput = {
    create?: XOR<registrationsCreateWithoutAttendeesInput, registrationsUncheckedCreateWithoutAttendeesInput> | registrationsCreateWithoutAttendeesInput[] | registrationsUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutAttendeesInput | registrationsCreateOrConnectWithoutAttendeesInput[]
    upsert?: registrationsUpsertWithWhereUniqueWithoutAttendeesInput | registrationsUpsertWithWhereUniqueWithoutAttendeesInput[]
    createMany?: registrationsCreateManyAttendeesInputEnvelope
    set?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    disconnect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    delete?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    update?: registrationsUpdateWithWhereUniqueWithoutAttendeesInput | registrationsUpdateWithWhereUniqueWithoutAttendeesInput[]
    updateMany?: registrationsUpdateManyWithWhereWithoutAttendeesInput | registrationsUpdateManyWithWhereWithoutAttendeesInput[]
    deleteMany?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
  }

  export type eventsCreateNestedOneWithoutChannelsInput = {
    create?: XOR<eventsCreateWithoutChannelsInput, eventsUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutChannelsInput
    connect?: eventsWhereUniqueInput
  }

  export type roomsCreateNestedManyWithoutChannelsInput = {
    create?: XOR<roomsCreateWithoutChannelsInput, roomsUncheckedCreateWithoutChannelsInput> | roomsCreateWithoutChannelsInput[] | roomsUncheckedCreateWithoutChannelsInput[]
    connectOrCreate?: roomsCreateOrConnectWithoutChannelsInput | roomsCreateOrConnectWithoutChannelsInput[]
    createMany?: roomsCreateManyChannelsInputEnvelope
    connect?: roomsWhereUniqueInput | roomsWhereUniqueInput[]
  }

  export type roomsUncheckedCreateNestedManyWithoutChannelsInput = {
    create?: XOR<roomsCreateWithoutChannelsInput, roomsUncheckedCreateWithoutChannelsInput> | roomsCreateWithoutChannelsInput[] | roomsUncheckedCreateWithoutChannelsInput[]
    connectOrCreate?: roomsCreateOrConnectWithoutChannelsInput | roomsCreateOrConnectWithoutChannelsInput[]
    createMany?: roomsCreateManyChannelsInputEnvelope
    connect?: roomsWhereUniqueInput | roomsWhereUniqueInput[]
  }

  export type eventsUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<eventsCreateWithoutChannelsInput, eventsUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutChannelsInput
    upsert?: eventsUpsertWithoutChannelsInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutChannelsInput, eventsUpdateWithoutChannelsInput>, eventsUncheckedUpdateWithoutChannelsInput>
  }

  export type roomsUpdateManyWithoutChannelsNestedInput = {
    create?: XOR<roomsCreateWithoutChannelsInput, roomsUncheckedCreateWithoutChannelsInput> | roomsCreateWithoutChannelsInput[] | roomsUncheckedCreateWithoutChannelsInput[]
    connectOrCreate?: roomsCreateOrConnectWithoutChannelsInput | roomsCreateOrConnectWithoutChannelsInput[]
    upsert?: roomsUpsertWithWhereUniqueWithoutChannelsInput | roomsUpsertWithWhereUniqueWithoutChannelsInput[]
    createMany?: roomsCreateManyChannelsInputEnvelope
    set?: roomsWhereUniqueInput | roomsWhereUniqueInput[]
    disconnect?: roomsWhereUniqueInput | roomsWhereUniqueInput[]
    delete?: roomsWhereUniqueInput | roomsWhereUniqueInput[]
    connect?: roomsWhereUniqueInput | roomsWhereUniqueInput[]
    update?: roomsUpdateWithWhereUniqueWithoutChannelsInput | roomsUpdateWithWhereUniqueWithoutChannelsInput[]
    updateMany?: roomsUpdateManyWithWhereWithoutChannelsInput | roomsUpdateManyWithWhereWithoutChannelsInput[]
    deleteMany?: roomsScalarWhereInput | roomsScalarWhereInput[]
  }

  export type roomsUncheckedUpdateManyWithoutChannelsNestedInput = {
    create?: XOR<roomsCreateWithoutChannelsInput, roomsUncheckedCreateWithoutChannelsInput> | roomsCreateWithoutChannelsInput[] | roomsUncheckedCreateWithoutChannelsInput[]
    connectOrCreate?: roomsCreateOrConnectWithoutChannelsInput | roomsCreateOrConnectWithoutChannelsInput[]
    upsert?: roomsUpsertWithWhereUniqueWithoutChannelsInput | roomsUpsertWithWhereUniqueWithoutChannelsInput[]
    createMany?: roomsCreateManyChannelsInputEnvelope
    set?: roomsWhereUniqueInput | roomsWhereUniqueInput[]
    disconnect?: roomsWhereUniqueInput | roomsWhereUniqueInput[]
    delete?: roomsWhereUniqueInput | roomsWhereUniqueInput[]
    connect?: roomsWhereUniqueInput | roomsWhereUniqueInput[]
    update?: roomsUpdateWithWhereUniqueWithoutChannelsInput | roomsUpdateWithWhereUniqueWithoutChannelsInput[]
    updateMany?: roomsUpdateManyWithWhereWithoutChannelsInput | roomsUpdateManyWithWhereWithoutChannelsInput[]
    deleteMany?: roomsScalarWhereInput | roomsScalarWhereInput[]
  }

  export type eventsCreateNestedOneWithoutEvent_ticketsInput = {
    create?: XOR<eventsCreateWithoutEvent_ticketsInput, eventsUncheckedCreateWithoutEvent_ticketsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutEvent_ticketsInput
    connect?: eventsWhereUniqueInput
  }

  export type registrationsCreateNestedManyWithoutEvent_ticketsInput = {
    create?: XOR<registrationsCreateWithoutEvent_ticketsInput, registrationsUncheckedCreateWithoutEvent_ticketsInput> | registrationsCreateWithoutEvent_ticketsInput[] | registrationsUncheckedCreateWithoutEvent_ticketsInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutEvent_ticketsInput | registrationsCreateOrConnectWithoutEvent_ticketsInput[]
    createMany?: registrationsCreateManyEvent_ticketsInputEnvelope
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
  }

  export type registrationsUncheckedCreateNestedManyWithoutEvent_ticketsInput = {
    create?: XOR<registrationsCreateWithoutEvent_ticketsInput, registrationsUncheckedCreateWithoutEvent_ticketsInput> | registrationsCreateWithoutEvent_ticketsInput[] | registrationsUncheckedCreateWithoutEvent_ticketsInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutEvent_ticketsInput | registrationsCreateOrConnectWithoutEvent_ticketsInput[]
    createMany?: registrationsCreateManyEvent_ticketsInputEnvelope
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type eventsUpdateOneRequiredWithoutEvent_ticketsNestedInput = {
    create?: XOR<eventsCreateWithoutEvent_ticketsInput, eventsUncheckedCreateWithoutEvent_ticketsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutEvent_ticketsInput
    upsert?: eventsUpsertWithoutEvent_ticketsInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutEvent_ticketsInput, eventsUpdateWithoutEvent_ticketsInput>, eventsUncheckedUpdateWithoutEvent_ticketsInput>
  }

  export type registrationsUpdateManyWithoutEvent_ticketsNestedInput = {
    create?: XOR<registrationsCreateWithoutEvent_ticketsInput, registrationsUncheckedCreateWithoutEvent_ticketsInput> | registrationsCreateWithoutEvent_ticketsInput[] | registrationsUncheckedCreateWithoutEvent_ticketsInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutEvent_ticketsInput | registrationsCreateOrConnectWithoutEvent_ticketsInput[]
    upsert?: registrationsUpsertWithWhereUniqueWithoutEvent_ticketsInput | registrationsUpsertWithWhereUniqueWithoutEvent_ticketsInput[]
    createMany?: registrationsCreateManyEvent_ticketsInputEnvelope
    set?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    disconnect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    delete?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    update?: registrationsUpdateWithWhereUniqueWithoutEvent_ticketsInput | registrationsUpdateWithWhereUniqueWithoutEvent_ticketsInput[]
    updateMany?: registrationsUpdateManyWithWhereWithoutEvent_ticketsInput | registrationsUpdateManyWithWhereWithoutEvent_ticketsInput[]
    deleteMany?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
  }

  export type registrationsUncheckedUpdateManyWithoutEvent_ticketsNestedInput = {
    create?: XOR<registrationsCreateWithoutEvent_ticketsInput, registrationsUncheckedCreateWithoutEvent_ticketsInput> | registrationsCreateWithoutEvent_ticketsInput[] | registrationsUncheckedCreateWithoutEvent_ticketsInput[]
    connectOrCreate?: registrationsCreateOrConnectWithoutEvent_ticketsInput | registrationsCreateOrConnectWithoutEvent_ticketsInput[]
    upsert?: registrationsUpsertWithWhereUniqueWithoutEvent_ticketsInput | registrationsUpsertWithWhereUniqueWithoutEvent_ticketsInput[]
    createMany?: registrationsCreateManyEvent_ticketsInputEnvelope
    set?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    disconnect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    delete?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    connect?: registrationsWhereUniqueInput | registrationsWhereUniqueInput[]
    update?: registrationsUpdateWithWhereUniqueWithoutEvent_ticketsInput | registrationsUpdateWithWhereUniqueWithoutEvent_ticketsInput[]
    updateMany?: registrationsUpdateManyWithWhereWithoutEvent_ticketsInput | registrationsUpdateManyWithWhereWithoutEvent_ticketsInput[]
    deleteMany?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
  }

  export type channelsCreateNestedManyWithoutEventsInput = {
    create?: XOR<channelsCreateWithoutEventsInput, channelsUncheckedCreateWithoutEventsInput> | channelsCreateWithoutEventsInput[] | channelsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: channelsCreateOrConnectWithoutEventsInput | channelsCreateOrConnectWithoutEventsInput[]
    createMany?: channelsCreateManyEventsInputEnvelope
    connect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
  }

  export type event_ticketsCreateNestedManyWithoutEventsInput = {
    create?: XOR<event_ticketsCreateWithoutEventsInput, event_ticketsUncheckedCreateWithoutEventsInput> | event_ticketsCreateWithoutEventsInput[] | event_ticketsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_ticketsCreateOrConnectWithoutEventsInput | event_ticketsCreateOrConnectWithoutEventsInput[]
    createMany?: event_ticketsCreateManyEventsInputEnvelope
    connect?: event_ticketsWhereUniqueInput | event_ticketsWhereUniqueInput[]
  }

  export type organizersCreateNestedOneWithoutEventsInput = {
    create?: XOR<organizersCreateWithoutEventsInput, organizersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: organizersCreateOrConnectWithoutEventsInput
    connect?: organizersWhereUniqueInput
  }

  export type channelsUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<channelsCreateWithoutEventsInput, channelsUncheckedCreateWithoutEventsInput> | channelsCreateWithoutEventsInput[] | channelsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: channelsCreateOrConnectWithoutEventsInput | channelsCreateOrConnectWithoutEventsInput[]
    createMany?: channelsCreateManyEventsInputEnvelope
    connect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
  }

  export type event_ticketsUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<event_ticketsCreateWithoutEventsInput, event_ticketsUncheckedCreateWithoutEventsInput> | event_ticketsCreateWithoutEventsInput[] | event_ticketsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_ticketsCreateOrConnectWithoutEventsInput | event_ticketsCreateOrConnectWithoutEventsInput[]
    createMany?: event_ticketsCreateManyEventsInputEnvelope
    connect?: event_ticketsWhereUniqueInput | event_ticketsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type channelsUpdateManyWithoutEventsNestedInput = {
    create?: XOR<channelsCreateWithoutEventsInput, channelsUncheckedCreateWithoutEventsInput> | channelsCreateWithoutEventsInput[] | channelsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: channelsCreateOrConnectWithoutEventsInput | channelsCreateOrConnectWithoutEventsInput[]
    upsert?: channelsUpsertWithWhereUniqueWithoutEventsInput | channelsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: channelsCreateManyEventsInputEnvelope
    set?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    disconnect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    delete?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    connect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    update?: channelsUpdateWithWhereUniqueWithoutEventsInput | channelsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: channelsUpdateManyWithWhereWithoutEventsInput | channelsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: channelsScalarWhereInput | channelsScalarWhereInput[]
  }

  export type event_ticketsUpdateManyWithoutEventsNestedInput = {
    create?: XOR<event_ticketsCreateWithoutEventsInput, event_ticketsUncheckedCreateWithoutEventsInput> | event_ticketsCreateWithoutEventsInput[] | event_ticketsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_ticketsCreateOrConnectWithoutEventsInput | event_ticketsCreateOrConnectWithoutEventsInput[]
    upsert?: event_ticketsUpsertWithWhereUniqueWithoutEventsInput | event_ticketsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: event_ticketsCreateManyEventsInputEnvelope
    set?: event_ticketsWhereUniqueInput | event_ticketsWhereUniqueInput[]
    disconnect?: event_ticketsWhereUniqueInput | event_ticketsWhereUniqueInput[]
    delete?: event_ticketsWhereUniqueInput | event_ticketsWhereUniqueInput[]
    connect?: event_ticketsWhereUniqueInput | event_ticketsWhereUniqueInput[]
    update?: event_ticketsUpdateWithWhereUniqueWithoutEventsInput | event_ticketsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: event_ticketsUpdateManyWithWhereWithoutEventsInput | event_ticketsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: event_ticketsScalarWhereInput | event_ticketsScalarWhereInput[]
  }

  export type organizersUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<organizersCreateWithoutEventsInput, organizersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: organizersCreateOrConnectWithoutEventsInput
    upsert?: organizersUpsertWithoutEventsInput
    connect?: organizersWhereUniqueInput
    update?: XOR<XOR<organizersUpdateToOneWithWhereWithoutEventsInput, organizersUpdateWithoutEventsInput>, organizersUncheckedUpdateWithoutEventsInput>
  }

  export type channelsUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<channelsCreateWithoutEventsInput, channelsUncheckedCreateWithoutEventsInput> | channelsCreateWithoutEventsInput[] | channelsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: channelsCreateOrConnectWithoutEventsInput | channelsCreateOrConnectWithoutEventsInput[]
    upsert?: channelsUpsertWithWhereUniqueWithoutEventsInput | channelsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: channelsCreateManyEventsInputEnvelope
    set?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    disconnect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    delete?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    connect?: channelsWhereUniqueInput | channelsWhereUniqueInput[]
    update?: channelsUpdateWithWhereUniqueWithoutEventsInput | channelsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: channelsUpdateManyWithWhereWithoutEventsInput | channelsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: channelsScalarWhereInput | channelsScalarWhereInput[]
  }

  export type event_ticketsUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<event_ticketsCreateWithoutEventsInput, event_ticketsUncheckedCreateWithoutEventsInput> | event_ticketsCreateWithoutEventsInput[] | event_ticketsUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_ticketsCreateOrConnectWithoutEventsInput | event_ticketsCreateOrConnectWithoutEventsInput[]
    upsert?: event_ticketsUpsertWithWhereUniqueWithoutEventsInput | event_ticketsUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: event_ticketsCreateManyEventsInputEnvelope
    set?: event_ticketsWhereUniqueInput | event_ticketsWhereUniqueInput[]
    disconnect?: event_ticketsWhereUniqueInput | event_ticketsWhereUniqueInput[]
    delete?: event_ticketsWhereUniqueInput | event_ticketsWhereUniqueInput[]
    connect?: event_ticketsWhereUniqueInput | event_ticketsWhereUniqueInput[]
    update?: event_ticketsUpdateWithWhereUniqueWithoutEventsInput | event_ticketsUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: event_ticketsUpdateManyWithWhereWithoutEventsInput | event_ticketsUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: event_ticketsScalarWhereInput | event_ticketsScalarWhereInput[]
  }

  export type eventsCreateNestedManyWithoutOrganizersInput = {
    create?: XOR<eventsCreateWithoutOrganizersInput, eventsUncheckedCreateWithoutOrganizersInput> | eventsCreateWithoutOrganizersInput[] | eventsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizersInput | eventsCreateOrConnectWithoutOrganizersInput[]
    createMany?: eventsCreateManyOrganizersInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type eventsUncheckedCreateNestedManyWithoutOrganizersInput = {
    create?: XOR<eventsCreateWithoutOrganizersInput, eventsUncheckedCreateWithoutOrganizersInput> | eventsCreateWithoutOrganizersInput[] | eventsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizersInput | eventsCreateOrConnectWithoutOrganizersInput[]
    createMany?: eventsCreateManyOrganizersInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type eventsUpdateManyWithoutOrganizersNestedInput = {
    create?: XOR<eventsCreateWithoutOrganizersInput, eventsUncheckedCreateWithoutOrganizersInput> | eventsCreateWithoutOrganizersInput[] | eventsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizersInput | eventsCreateOrConnectWithoutOrganizersInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutOrganizersInput | eventsUpsertWithWhereUniqueWithoutOrganizersInput[]
    createMany?: eventsCreateManyOrganizersInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutOrganizersInput | eventsUpdateWithWhereUniqueWithoutOrganizersInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutOrganizersInput | eventsUpdateManyWithWhereWithoutOrganizersInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type eventsUncheckedUpdateManyWithoutOrganizersNestedInput = {
    create?: XOR<eventsCreateWithoutOrganizersInput, eventsUncheckedCreateWithoutOrganizersInput> | eventsCreateWithoutOrganizersInput[] | eventsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutOrganizersInput | eventsCreateOrConnectWithoutOrganizersInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutOrganizersInput | eventsUpsertWithWhereUniqueWithoutOrganizersInput[]
    createMany?: eventsCreateManyOrganizersInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutOrganizersInput | eventsUpdateWithWhereUniqueWithoutOrganizersInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutOrganizersInput | eventsUpdateManyWithWhereWithoutOrganizersInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type attendeesCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<attendeesCreateWithoutRegistrationsInput, attendeesUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: attendeesCreateOrConnectWithoutRegistrationsInput
    connect?: attendeesWhereUniqueInput
  }

  export type event_ticketsCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<event_ticketsCreateWithoutRegistrationsInput, event_ticketsUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: event_ticketsCreateOrConnectWithoutRegistrationsInput
    connect?: event_ticketsWhereUniqueInput
  }

  export type session_registrationsCreateNestedManyWithoutRegistrationsInput = {
    create?: XOR<session_registrationsCreateWithoutRegistrationsInput, session_registrationsUncheckedCreateWithoutRegistrationsInput> | session_registrationsCreateWithoutRegistrationsInput[] | session_registrationsUncheckedCreateWithoutRegistrationsInput[]
    connectOrCreate?: session_registrationsCreateOrConnectWithoutRegistrationsInput | session_registrationsCreateOrConnectWithoutRegistrationsInput[]
    createMany?: session_registrationsCreateManyRegistrationsInputEnvelope
    connect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
  }

  export type session_registrationsUncheckedCreateNestedManyWithoutRegistrationsInput = {
    create?: XOR<session_registrationsCreateWithoutRegistrationsInput, session_registrationsUncheckedCreateWithoutRegistrationsInput> | session_registrationsCreateWithoutRegistrationsInput[] | session_registrationsUncheckedCreateWithoutRegistrationsInput[]
    connectOrCreate?: session_registrationsCreateOrConnectWithoutRegistrationsInput | session_registrationsCreateOrConnectWithoutRegistrationsInput[]
    createMany?: session_registrationsCreateManyRegistrationsInputEnvelope
    connect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
  }

  export type attendeesUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<attendeesCreateWithoutRegistrationsInput, attendeesUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: attendeesCreateOrConnectWithoutRegistrationsInput
    upsert?: attendeesUpsertWithoutRegistrationsInput
    connect?: attendeesWhereUniqueInput
    update?: XOR<XOR<attendeesUpdateToOneWithWhereWithoutRegistrationsInput, attendeesUpdateWithoutRegistrationsInput>, attendeesUncheckedUpdateWithoutRegistrationsInput>
  }

  export type event_ticketsUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<event_ticketsCreateWithoutRegistrationsInput, event_ticketsUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: event_ticketsCreateOrConnectWithoutRegistrationsInput
    upsert?: event_ticketsUpsertWithoutRegistrationsInput
    connect?: event_ticketsWhereUniqueInput
    update?: XOR<XOR<event_ticketsUpdateToOneWithWhereWithoutRegistrationsInput, event_ticketsUpdateWithoutRegistrationsInput>, event_ticketsUncheckedUpdateWithoutRegistrationsInput>
  }

  export type session_registrationsUpdateManyWithoutRegistrationsNestedInput = {
    create?: XOR<session_registrationsCreateWithoutRegistrationsInput, session_registrationsUncheckedCreateWithoutRegistrationsInput> | session_registrationsCreateWithoutRegistrationsInput[] | session_registrationsUncheckedCreateWithoutRegistrationsInput[]
    connectOrCreate?: session_registrationsCreateOrConnectWithoutRegistrationsInput | session_registrationsCreateOrConnectWithoutRegistrationsInput[]
    upsert?: session_registrationsUpsertWithWhereUniqueWithoutRegistrationsInput | session_registrationsUpsertWithWhereUniqueWithoutRegistrationsInput[]
    createMany?: session_registrationsCreateManyRegistrationsInputEnvelope
    set?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    disconnect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    delete?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    connect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    update?: session_registrationsUpdateWithWhereUniqueWithoutRegistrationsInput | session_registrationsUpdateWithWhereUniqueWithoutRegistrationsInput[]
    updateMany?: session_registrationsUpdateManyWithWhereWithoutRegistrationsInput | session_registrationsUpdateManyWithWhereWithoutRegistrationsInput[]
    deleteMany?: session_registrationsScalarWhereInput | session_registrationsScalarWhereInput[]
  }

  export type session_registrationsUncheckedUpdateManyWithoutRegistrationsNestedInput = {
    create?: XOR<session_registrationsCreateWithoutRegistrationsInput, session_registrationsUncheckedCreateWithoutRegistrationsInput> | session_registrationsCreateWithoutRegistrationsInput[] | session_registrationsUncheckedCreateWithoutRegistrationsInput[]
    connectOrCreate?: session_registrationsCreateOrConnectWithoutRegistrationsInput | session_registrationsCreateOrConnectWithoutRegistrationsInput[]
    upsert?: session_registrationsUpsertWithWhereUniqueWithoutRegistrationsInput | session_registrationsUpsertWithWhereUniqueWithoutRegistrationsInput[]
    createMany?: session_registrationsCreateManyRegistrationsInputEnvelope
    set?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    disconnect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    delete?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    connect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    update?: session_registrationsUpdateWithWhereUniqueWithoutRegistrationsInput | session_registrationsUpdateWithWhereUniqueWithoutRegistrationsInput[]
    updateMany?: session_registrationsUpdateManyWithWhereWithoutRegistrationsInput | session_registrationsUpdateManyWithWhereWithoutRegistrationsInput[]
    deleteMany?: session_registrationsScalarWhereInput | session_registrationsScalarWhereInput[]
  }

  export type channelsCreateNestedOneWithoutRoomsInput = {
    create?: XOR<channelsCreateWithoutRoomsInput, channelsUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: channelsCreateOrConnectWithoutRoomsInput
    connect?: channelsWhereUniqueInput
  }

  export type sessionsCreateNestedManyWithoutRoomsInput = {
    create?: XOR<sessionsCreateWithoutRoomsInput, sessionsUncheckedCreateWithoutRoomsInput> | sessionsCreateWithoutRoomsInput[] | sessionsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutRoomsInput | sessionsCreateOrConnectWithoutRoomsInput[]
    createMany?: sessionsCreateManyRoomsInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type sessionsUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<sessionsCreateWithoutRoomsInput, sessionsUncheckedCreateWithoutRoomsInput> | sessionsCreateWithoutRoomsInput[] | sessionsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutRoomsInput | sessionsCreateOrConnectWithoutRoomsInput[]
    createMany?: sessionsCreateManyRoomsInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type channelsUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<channelsCreateWithoutRoomsInput, channelsUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: channelsCreateOrConnectWithoutRoomsInput
    upsert?: channelsUpsertWithoutRoomsInput
    connect?: channelsWhereUniqueInput
    update?: XOR<XOR<channelsUpdateToOneWithWhereWithoutRoomsInput, channelsUpdateWithoutRoomsInput>, channelsUncheckedUpdateWithoutRoomsInput>
  }

  export type sessionsUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<sessionsCreateWithoutRoomsInput, sessionsUncheckedCreateWithoutRoomsInput> | sessionsCreateWithoutRoomsInput[] | sessionsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutRoomsInput | sessionsCreateOrConnectWithoutRoomsInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutRoomsInput | sessionsUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: sessionsCreateManyRoomsInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutRoomsInput | sessionsUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutRoomsInput | sessionsUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type sessionsUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<sessionsCreateWithoutRoomsInput, sessionsUncheckedCreateWithoutRoomsInput> | sessionsCreateWithoutRoomsInput[] | sessionsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutRoomsInput | sessionsCreateOrConnectWithoutRoomsInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutRoomsInput | sessionsUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: sessionsCreateManyRoomsInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutRoomsInput | sessionsUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutRoomsInput | sessionsUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type registrationsCreateNestedOneWithoutSession_registrationsInput = {
    create?: XOR<registrationsCreateWithoutSession_registrationsInput, registrationsUncheckedCreateWithoutSession_registrationsInput>
    connectOrCreate?: registrationsCreateOrConnectWithoutSession_registrationsInput
    connect?: registrationsWhereUniqueInput
  }

  export type sessionsCreateNestedOneWithoutSession_registrationsInput = {
    create?: XOR<sessionsCreateWithoutSession_registrationsInput, sessionsUncheckedCreateWithoutSession_registrationsInput>
    connectOrCreate?: sessionsCreateOrConnectWithoutSession_registrationsInput
    connect?: sessionsWhereUniqueInput
  }

  export type registrationsUpdateOneRequiredWithoutSession_registrationsNestedInput = {
    create?: XOR<registrationsCreateWithoutSession_registrationsInput, registrationsUncheckedCreateWithoutSession_registrationsInput>
    connectOrCreate?: registrationsCreateOrConnectWithoutSession_registrationsInput
    upsert?: registrationsUpsertWithoutSession_registrationsInput
    connect?: registrationsWhereUniqueInput
    update?: XOR<XOR<registrationsUpdateToOneWithWhereWithoutSession_registrationsInput, registrationsUpdateWithoutSession_registrationsInput>, registrationsUncheckedUpdateWithoutSession_registrationsInput>
  }

  export type sessionsUpdateOneRequiredWithoutSession_registrationsNestedInput = {
    create?: XOR<sessionsCreateWithoutSession_registrationsInput, sessionsUncheckedCreateWithoutSession_registrationsInput>
    connectOrCreate?: sessionsCreateOrConnectWithoutSession_registrationsInput
    upsert?: sessionsUpsertWithoutSession_registrationsInput
    connect?: sessionsWhereUniqueInput
    update?: XOR<XOR<sessionsUpdateToOneWithWhereWithoutSession_registrationsInput, sessionsUpdateWithoutSession_registrationsInput>, sessionsUncheckedUpdateWithoutSession_registrationsInput>
  }

  export type session_registrationsCreateNestedManyWithoutSessionsInput = {
    create?: XOR<session_registrationsCreateWithoutSessionsInput, session_registrationsUncheckedCreateWithoutSessionsInput> | session_registrationsCreateWithoutSessionsInput[] | session_registrationsUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_registrationsCreateOrConnectWithoutSessionsInput | session_registrationsCreateOrConnectWithoutSessionsInput[]
    createMany?: session_registrationsCreateManySessionsInputEnvelope
    connect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
  }

  export type roomsCreateNestedOneWithoutSessionsInput = {
    create?: XOR<roomsCreateWithoutSessionsInput, roomsUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: roomsCreateOrConnectWithoutSessionsInput
    connect?: roomsWhereUniqueInput
  }

  export type session_registrationsUncheckedCreateNestedManyWithoutSessionsInput = {
    create?: XOR<session_registrationsCreateWithoutSessionsInput, session_registrationsUncheckedCreateWithoutSessionsInput> | session_registrationsCreateWithoutSessionsInput[] | session_registrationsUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_registrationsCreateOrConnectWithoutSessionsInput | session_registrationsCreateOrConnectWithoutSessionsInput[]
    createMany?: session_registrationsCreateManySessionsInputEnvelope
    connect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumsessions_typeFieldUpdateOperationsInput = {
    set?: $Enums.sessions_type
  }

  export type session_registrationsUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<session_registrationsCreateWithoutSessionsInput, session_registrationsUncheckedCreateWithoutSessionsInput> | session_registrationsCreateWithoutSessionsInput[] | session_registrationsUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_registrationsCreateOrConnectWithoutSessionsInput | session_registrationsCreateOrConnectWithoutSessionsInput[]
    upsert?: session_registrationsUpsertWithWhereUniqueWithoutSessionsInput | session_registrationsUpsertWithWhereUniqueWithoutSessionsInput[]
    createMany?: session_registrationsCreateManySessionsInputEnvelope
    set?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    disconnect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    delete?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    connect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    update?: session_registrationsUpdateWithWhereUniqueWithoutSessionsInput | session_registrationsUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: session_registrationsUpdateManyWithWhereWithoutSessionsInput | session_registrationsUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: session_registrationsScalarWhereInput | session_registrationsScalarWhereInput[]
  }

  export type roomsUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<roomsCreateWithoutSessionsInput, roomsUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: roomsCreateOrConnectWithoutSessionsInput
    upsert?: roomsUpsertWithoutSessionsInput
    connect?: roomsWhereUniqueInput
    update?: XOR<XOR<roomsUpdateToOneWithWhereWithoutSessionsInput, roomsUpdateWithoutSessionsInput>, roomsUncheckedUpdateWithoutSessionsInput>
  }

  export type session_registrationsUncheckedUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<session_registrationsCreateWithoutSessionsInput, session_registrationsUncheckedCreateWithoutSessionsInput> | session_registrationsCreateWithoutSessionsInput[] | session_registrationsUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_registrationsCreateOrConnectWithoutSessionsInput | session_registrationsCreateOrConnectWithoutSessionsInput[]
    upsert?: session_registrationsUpsertWithWhereUniqueWithoutSessionsInput | session_registrationsUpsertWithWhereUniqueWithoutSessionsInput[]
    createMany?: session_registrationsCreateManySessionsInputEnvelope
    set?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    disconnect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    delete?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    connect?: session_registrationsWhereUniqueInput | session_registrationsWhereUniqueInput[]
    update?: session_registrationsUpdateWithWhereUniqueWithoutSessionsInput | session_registrationsUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: session_registrationsUpdateManyWithWhereWithoutSessionsInput | session_registrationsUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: session_registrationsScalarWhereInput | session_registrationsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumsessions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.sessions_type | Enumsessions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.sessions_type[]
    notIn?: $Enums.sessions_type[]
    not?: NestedEnumsessions_typeFilter<$PrismaModel> | $Enums.sessions_type
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumsessions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sessions_type | Enumsessions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.sessions_type[]
    notIn?: $Enums.sessions_type[]
    not?: NestedEnumsessions_typeWithAggregatesFilter<$PrismaModel> | $Enums.sessions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsessions_typeFilter<$PrismaModel>
    _max?: NestedEnumsessions_typeFilter<$PrismaModel>
  }

  export type registrationsCreateWithoutAttendeesInput = {
    registration_time?: Date | string | null
    event_tickets: event_ticketsCreateNestedOneWithoutRegistrationsInput
    session_registrations?: session_registrationsCreateNestedManyWithoutRegistrationsInput
  }

  export type registrationsUncheckedCreateWithoutAttendeesInput = {
    id?: number
    ticket_id: number
    registration_time?: Date | string | null
    session_registrations?: session_registrationsUncheckedCreateNestedManyWithoutRegistrationsInput
  }

  export type registrationsCreateOrConnectWithoutAttendeesInput = {
    where: registrationsWhereUniqueInput
    create: XOR<registrationsCreateWithoutAttendeesInput, registrationsUncheckedCreateWithoutAttendeesInput>
  }

  export type registrationsCreateManyAttendeesInputEnvelope = {
    data: registrationsCreateManyAttendeesInput | registrationsCreateManyAttendeesInput[]
    skipDuplicates?: boolean
  }

  export type registrationsUpsertWithWhereUniqueWithoutAttendeesInput = {
    where: registrationsWhereUniqueInput
    update: XOR<registrationsUpdateWithoutAttendeesInput, registrationsUncheckedUpdateWithoutAttendeesInput>
    create: XOR<registrationsCreateWithoutAttendeesInput, registrationsUncheckedCreateWithoutAttendeesInput>
  }

  export type registrationsUpdateWithWhereUniqueWithoutAttendeesInput = {
    where: registrationsWhereUniqueInput
    data: XOR<registrationsUpdateWithoutAttendeesInput, registrationsUncheckedUpdateWithoutAttendeesInput>
  }

  export type registrationsUpdateManyWithWhereWithoutAttendeesInput = {
    where: registrationsScalarWhereInput
    data: XOR<registrationsUpdateManyMutationInput, registrationsUncheckedUpdateManyWithoutAttendeesInput>
  }

  export type registrationsScalarWhereInput = {
    AND?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
    OR?: registrationsScalarWhereInput[]
    NOT?: registrationsScalarWhereInput | registrationsScalarWhereInput[]
    id?: IntFilter<"registrations"> | number
    attendee_id?: IntFilter<"registrations"> | number
    ticket_id?: IntFilter<"registrations"> | number
    registration_time?: DateTimeNullableFilter<"registrations"> | Date | string | null
  }

  export type eventsCreateWithoutChannelsInput = {
    name?: string | null
    slug?: string | null
    date?: Date | string | null
    event_tickets?: event_ticketsCreateNestedManyWithoutEventsInput
    organizers: organizersCreateNestedOneWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutChannelsInput = {
    id?: number
    organizer_id: number
    name?: string | null
    slug?: string | null
    date?: Date | string | null
    event_tickets?: event_ticketsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutChannelsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutChannelsInput, eventsUncheckedCreateWithoutChannelsInput>
  }

  export type roomsCreateWithoutChannelsInput = {
    name?: string | null
    capacity?: number | null
    sessions?: sessionsCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateWithoutChannelsInput = {
    id?: number
    name?: string | null
    capacity?: number | null
    sessions?: sessionsUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsCreateOrConnectWithoutChannelsInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutChannelsInput, roomsUncheckedCreateWithoutChannelsInput>
  }

  export type roomsCreateManyChannelsInputEnvelope = {
    data: roomsCreateManyChannelsInput | roomsCreateManyChannelsInput[]
    skipDuplicates?: boolean
  }

  export type eventsUpsertWithoutChannelsInput = {
    update: XOR<eventsUpdateWithoutChannelsInput, eventsUncheckedUpdateWithoutChannelsInput>
    create: XOR<eventsCreateWithoutChannelsInput, eventsUncheckedCreateWithoutChannelsInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutChannelsInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutChannelsInput, eventsUncheckedUpdateWithoutChannelsInput>
  }

  export type eventsUpdateWithoutChannelsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_tickets?: event_ticketsUpdateManyWithoutEventsNestedInput
    organizers?: organizersUpdateOneRequiredWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_tickets?: event_ticketsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type roomsUpsertWithWhereUniqueWithoutChannelsInput = {
    where: roomsWhereUniqueInput
    update: XOR<roomsUpdateWithoutChannelsInput, roomsUncheckedUpdateWithoutChannelsInput>
    create: XOR<roomsCreateWithoutChannelsInput, roomsUncheckedCreateWithoutChannelsInput>
  }

  export type roomsUpdateWithWhereUniqueWithoutChannelsInput = {
    where: roomsWhereUniqueInput
    data: XOR<roomsUpdateWithoutChannelsInput, roomsUncheckedUpdateWithoutChannelsInput>
  }

  export type roomsUpdateManyWithWhereWithoutChannelsInput = {
    where: roomsScalarWhereInput
    data: XOR<roomsUpdateManyMutationInput, roomsUncheckedUpdateManyWithoutChannelsInput>
  }

  export type roomsScalarWhereInput = {
    AND?: roomsScalarWhereInput | roomsScalarWhereInput[]
    OR?: roomsScalarWhereInput[]
    NOT?: roomsScalarWhereInput | roomsScalarWhereInput[]
    id?: IntFilter<"rooms"> | number
    channel_id?: IntFilter<"rooms"> | number
    name?: StringNullableFilter<"rooms"> | string | null
    capacity?: IntNullableFilter<"rooms"> | number | null
  }

  export type eventsCreateWithoutEvent_ticketsInput = {
    name?: string | null
    slug?: string | null
    date?: Date | string | null
    channels?: channelsCreateNestedManyWithoutEventsInput
    organizers: organizersCreateNestedOneWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutEvent_ticketsInput = {
    id?: number
    organizer_id: number
    name?: string | null
    slug?: string | null
    date?: Date | string | null
    channels?: channelsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutEvent_ticketsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutEvent_ticketsInput, eventsUncheckedCreateWithoutEvent_ticketsInput>
  }

  export type registrationsCreateWithoutEvent_ticketsInput = {
    registration_time?: Date | string | null
    attendees: attendeesCreateNestedOneWithoutRegistrationsInput
    session_registrations?: session_registrationsCreateNestedManyWithoutRegistrationsInput
  }

  export type registrationsUncheckedCreateWithoutEvent_ticketsInput = {
    id?: number
    attendee_id: number
    registration_time?: Date | string | null
    session_registrations?: session_registrationsUncheckedCreateNestedManyWithoutRegistrationsInput
  }

  export type registrationsCreateOrConnectWithoutEvent_ticketsInput = {
    where: registrationsWhereUniqueInput
    create: XOR<registrationsCreateWithoutEvent_ticketsInput, registrationsUncheckedCreateWithoutEvent_ticketsInput>
  }

  export type registrationsCreateManyEvent_ticketsInputEnvelope = {
    data: registrationsCreateManyEvent_ticketsInput | registrationsCreateManyEvent_ticketsInput[]
    skipDuplicates?: boolean
  }

  export type eventsUpsertWithoutEvent_ticketsInput = {
    update: XOR<eventsUpdateWithoutEvent_ticketsInput, eventsUncheckedUpdateWithoutEvent_ticketsInput>
    create: XOR<eventsCreateWithoutEvent_ticketsInput, eventsUncheckedCreateWithoutEvent_ticketsInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutEvent_ticketsInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutEvent_ticketsInput, eventsUncheckedUpdateWithoutEvent_ticketsInput>
  }

  export type eventsUpdateWithoutEvent_ticketsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    channels?: channelsUpdateManyWithoutEventsNestedInput
    organizers?: organizersUpdateOneRequiredWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutEvent_ticketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizer_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    channels?: channelsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type registrationsUpsertWithWhereUniqueWithoutEvent_ticketsInput = {
    where: registrationsWhereUniqueInput
    update: XOR<registrationsUpdateWithoutEvent_ticketsInput, registrationsUncheckedUpdateWithoutEvent_ticketsInput>
    create: XOR<registrationsCreateWithoutEvent_ticketsInput, registrationsUncheckedCreateWithoutEvent_ticketsInput>
  }

  export type registrationsUpdateWithWhereUniqueWithoutEvent_ticketsInput = {
    where: registrationsWhereUniqueInput
    data: XOR<registrationsUpdateWithoutEvent_ticketsInput, registrationsUncheckedUpdateWithoutEvent_ticketsInput>
  }

  export type registrationsUpdateManyWithWhereWithoutEvent_ticketsInput = {
    where: registrationsScalarWhereInput
    data: XOR<registrationsUpdateManyMutationInput, registrationsUncheckedUpdateManyWithoutEvent_ticketsInput>
  }

  export type channelsCreateWithoutEventsInput = {
    name?: string | null
    rooms?: roomsCreateNestedManyWithoutChannelsInput
  }

  export type channelsUncheckedCreateWithoutEventsInput = {
    id?: number
    name?: string | null
    rooms?: roomsUncheckedCreateNestedManyWithoutChannelsInput
  }

  export type channelsCreateOrConnectWithoutEventsInput = {
    where: channelsWhereUniqueInput
    create: XOR<channelsCreateWithoutEventsInput, channelsUncheckedCreateWithoutEventsInput>
  }

  export type channelsCreateManyEventsInputEnvelope = {
    data: channelsCreateManyEventsInput | channelsCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type event_ticketsCreateWithoutEventsInput = {
    name?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    special_validity?: string | null
    registrations?: registrationsCreateNestedManyWithoutEvent_ticketsInput
  }

  export type event_ticketsUncheckedCreateWithoutEventsInput = {
    id?: number
    name?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    special_validity?: string | null
    registrations?: registrationsUncheckedCreateNestedManyWithoutEvent_ticketsInput
  }

  export type event_ticketsCreateOrConnectWithoutEventsInput = {
    where: event_ticketsWhereUniqueInput
    create: XOR<event_ticketsCreateWithoutEventsInput, event_ticketsUncheckedCreateWithoutEventsInput>
  }

  export type event_ticketsCreateManyEventsInputEnvelope = {
    data: event_ticketsCreateManyEventsInput | event_ticketsCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type organizersCreateWithoutEventsInput = {
    name: string
    slug: string
    email?: string | null
    password_hash: string
  }

  export type organizersUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    slug: string
    email?: string | null
    password_hash: string
  }

  export type organizersCreateOrConnectWithoutEventsInput = {
    where: organizersWhereUniqueInput
    create: XOR<organizersCreateWithoutEventsInput, organizersUncheckedCreateWithoutEventsInput>
  }

  export type channelsUpsertWithWhereUniqueWithoutEventsInput = {
    where: channelsWhereUniqueInput
    update: XOR<channelsUpdateWithoutEventsInput, channelsUncheckedUpdateWithoutEventsInput>
    create: XOR<channelsCreateWithoutEventsInput, channelsUncheckedCreateWithoutEventsInput>
  }

  export type channelsUpdateWithWhereUniqueWithoutEventsInput = {
    where: channelsWhereUniqueInput
    data: XOR<channelsUpdateWithoutEventsInput, channelsUncheckedUpdateWithoutEventsInput>
  }

  export type channelsUpdateManyWithWhereWithoutEventsInput = {
    where: channelsScalarWhereInput
    data: XOR<channelsUpdateManyMutationInput, channelsUncheckedUpdateManyWithoutEventsInput>
  }

  export type channelsScalarWhereInput = {
    AND?: channelsScalarWhereInput | channelsScalarWhereInput[]
    OR?: channelsScalarWhereInput[]
    NOT?: channelsScalarWhereInput | channelsScalarWhereInput[]
    id?: IntFilter<"channels"> | number
    event_id?: IntFilter<"channels"> | number
    name?: StringNullableFilter<"channels"> | string | null
  }

  export type event_ticketsUpsertWithWhereUniqueWithoutEventsInput = {
    where: event_ticketsWhereUniqueInput
    update: XOR<event_ticketsUpdateWithoutEventsInput, event_ticketsUncheckedUpdateWithoutEventsInput>
    create: XOR<event_ticketsCreateWithoutEventsInput, event_ticketsUncheckedCreateWithoutEventsInput>
  }

  export type event_ticketsUpdateWithWhereUniqueWithoutEventsInput = {
    where: event_ticketsWhereUniqueInput
    data: XOR<event_ticketsUpdateWithoutEventsInput, event_ticketsUncheckedUpdateWithoutEventsInput>
  }

  export type event_ticketsUpdateManyWithWhereWithoutEventsInput = {
    where: event_ticketsScalarWhereInput
    data: XOR<event_ticketsUpdateManyMutationInput, event_ticketsUncheckedUpdateManyWithoutEventsInput>
  }

  export type event_ticketsScalarWhereInput = {
    AND?: event_ticketsScalarWhereInput | event_ticketsScalarWhereInput[]
    OR?: event_ticketsScalarWhereInput[]
    NOT?: event_ticketsScalarWhereInput | event_ticketsScalarWhereInput[]
    id?: IntFilter<"event_tickets"> | number
    event_id?: IntFilter<"event_tickets"> | number
    name?: StringNullableFilter<"event_tickets"> | string | null
    cost?: DecimalNullableFilter<"event_tickets"> | Decimal | DecimalJsLike | number | string | null
    special_validity?: StringNullableFilter<"event_tickets"> | string | null
  }

  export type organizersUpsertWithoutEventsInput = {
    update: XOR<organizersUpdateWithoutEventsInput, organizersUncheckedUpdateWithoutEventsInput>
    create: XOR<organizersCreateWithoutEventsInput, organizersUncheckedCreateWithoutEventsInput>
    where?: organizersWhereInput
  }

  export type organizersUpdateToOneWithWhereWithoutEventsInput = {
    where?: organizersWhereInput
    data: XOR<organizersUpdateWithoutEventsInput, organizersUncheckedUpdateWithoutEventsInput>
  }

  export type organizersUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type organizersUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type eventsCreateWithoutOrganizersInput = {
    name?: string | null
    slug?: string | null
    date?: Date | string | null
    channels?: channelsCreateNestedManyWithoutEventsInput
    event_tickets?: event_ticketsCreateNestedManyWithoutEventsInput
  }

  export type eventsUncheckedCreateWithoutOrganizersInput = {
    id?: number
    name?: string | null
    slug?: string | null
    date?: Date | string | null
    channels?: channelsUncheckedCreateNestedManyWithoutEventsInput
    event_tickets?: event_ticketsUncheckedCreateNestedManyWithoutEventsInput
  }

  export type eventsCreateOrConnectWithoutOrganizersInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutOrganizersInput, eventsUncheckedCreateWithoutOrganizersInput>
  }

  export type eventsCreateManyOrganizersInputEnvelope = {
    data: eventsCreateManyOrganizersInput | eventsCreateManyOrganizersInput[]
    skipDuplicates?: boolean
  }

  export type eventsUpsertWithWhereUniqueWithoutOrganizersInput = {
    where: eventsWhereUniqueInput
    update: XOR<eventsUpdateWithoutOrganizersInput, eventsUncheckedUpdateWithoutOrganizersInput>
    create: XOR<eventsCreateWithoutOrganizersInput, eventsUncheckedCreateWithoutOrganizersInput>
  }

  export type eventsUpdateWithWhereUniqueWithoutOrganizersInput = {
    where: eventsWhereUniqueInput
    data: XOR<eventsUpdateWithoutOrganizersInput, eventsUncheckedUpdateWithoutOrganizersInput>
  }

  export type eventsUpdateManyWithWhereWithoutOrganizersInput = {
    where: eventsScalarWhereInput
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyWithoutOrganizersInput>
  }

  export type eventsScalarWhereInput = {
    AND?: eventsScalarWhereInput | eventsScalarWhereInput[]
    OR?: eventsScalarWhereInput[]
    NOT?: eventsScalarWhereInput | eventsScalarWhereInput[]
    id?: IntFilter<"events"> | number
    organizer_id?: IntFilter<"events"> | number
    name?: StringNullableFilter<"events"> | string | null
    slug?: StringNullableFilter<"events"> | string | null
    date?: DateTimeNullableFilter<"events"> | Date | string | null
  }

  export type attendeesCreateWithoutRegistrationsInput = {
    firstname: string
    lastname: string
    username: string
    email: string
    registration_code: string
    login_token?: string | null
  }

  export type attendeesUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    firstname: string
    lastname: string
    username: string
    email: string
    registration_code: string
    login_token?: string | null
  }

  export type attendeesCreateOrConnectWithoutRegistrationsInput = {
    where: attendeesWhereUniqueInput
    create: XOR<attendeesCreateWithoutRegistrationsInput, attendeesUncheckedCreateWithoutRegistrationsInput>
  }

  export type event_ticketsCreateWithoutRegistrationsInput = {
    name?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    special_validity?: string | null
    events: eventsCreateNestedOneWithoutEvent_ticketsInput
  }

  export type event_ticketsUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    event_id: number
    name?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    special_validity?: string | null
  }

  export type event_ticketsCreateOrConnectWithoutRegistrationsInput = {
    where: event_ticketsWhereUniqueInput
    create: XOR<event_ticketsCreateWithoutRegistrationsInput, event_ticketsUncheckedCreateWithoutRegistrationsInput>
  }

  export type session_registrationsCreateWithoutRegistrationsInput = {
    sessions: sessionsCreateNestedOneWithoutSession_registrationsInput
  }

  export type session_registrationsUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    session_id: number
  }

  export type session_registrationsCreateOrConnectWithoutRegistrationsInput = {
    where: session_registrationsWhereUniqueInput
    create: XOR<session_registrationsCreateWithoutRegistrationsInput, session_registrationsUncheckedCreateWithoutRegistrationsInput>
  }

  export type session_registrationsCreateManyRegistrationsInputEnvelope = {
    data: session_registrationsCreateManyRegistrationsInput | session_registrationsCreateManyRegistrationsInput[]
    skipDuplicates?: boolean
  }

  export type attendeesUpsertWithoutRegistrationsInput = {
    update: XOR<attendeesUpdateWithoutRegistrationsInput, attendeesUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<attendeesCreateWithoutRegistrationsInput, attendeesUncheckedCreateWithoutRegistrationsInput>
    where?: attendeesWhereInput
  }

  export type attendeesUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: attendeesWhereInput
    data: XOR<attendeesUpdateWithoutRegistrationsInput, attendeesUncheckedUpdateWithoutRegistrationsInput>
  }

  export type attendeesUpdateWithoutRegistrationsInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registration_code?: StringFieldUpdateOperationsInput | string
    login_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type attendeesUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    registration_code?: StringFieldUpdateOperationsInput | string
    login_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type event_ticketsUpsertWithoutRegistrationsInput = {
    update: XOR<event_ticketsUpdateWithoutRegistrationsInput, event_ticketsUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<event_ticketsCreateWithoutRegistrationsInput, event_ticketsUncheckedCreateWithoutRegistrationsInput>
    where?: event_ticketsWhereInput
  }

  export type event_ticketsUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: event_ticketsWhereInput
    data: XOR<event_ticketsUpdateWithoutRegistrationsInput, event_ticketsUncheckedUpdateWithoutRegistrationsInput>
  }

  export type event_ticketsUpdateWithoutRegistrationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    special_validity?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUpdateOneRequiredWithoutEvent_ticketsNestedInput
  }

  export type event_ticketsUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    special_validity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type session_registrationsUpsertWithWhereUniqueWithoutRegistrationsInput = {
    where: session_registrationsWhereUniqueInput
    update: XOR<session_registrationsUpdateWithoutRegistrationsInput, session_registrationsUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<session_registrationsCreateWithoutRegistrationsInput, session_registrationsUncheckedCreateWithoutRegistrationsInput>
  }

  export type session_registrationsUpdateWithWhereUniqueWithoutRegistrationsInput = {
    where: session_registrationsWhereUniqueInput
    data: XOR<session_registrationsUpdateWithoutRegistrationsInput, session_registrationsUncheckedUpdateWithoutRegistrationsInput>
  }

  export type session_registrationsUpdateManyWithWhereWithoutRegistrationsInput = {
    where: session_registrationsScalarWhereInput
    data: XOR<session_registrationsUpdateManyMutationInput, session_registrationsUncheckedUpdateManyWithoutRegistrationsInput>
  }

  export type session_registrationsScalarWhereInput = {
    AND?: session_registrationsScalarWhereInput | session_registrationsScalarWhereInput[]
    OR?: session_registrationsScalarWhereInput[]
    NOT?: session_registrationsScalarWhereInput | session_registrationsScalarWhereInput[]
    id?: IntFilter<"session_registrations"> | number
    registration_id?: IntFilter<"session_registrations"> | number
    session_id?: IntFilter<"session_registrations"> | number
  }

  export type channelsCreateWithoutRoomsInput = {
    name?: string | null
    events: eventsCreateNestedOneWithoutChannelsInput
  }

  export type channelsUncheckedCreateWithoutRoomsInput = {
    id?: number
    event_id: number
    name?: string | null
  }

  export type channelsCreateOrConnectWithoutRoomsInput = {
    where: channelsWhereUniqueInput
    create: XOR<channelsCreateWithoutRoomsInput, channelsUncheckedCreateWithoutRoomsInput>
  }

  export type sessionsCreateWithoutRoomsInput = {
    title: string
    description?: string | null
    speaker?: string | null
    start: Date | string
    end: Date | string
    type: $Enums.sessions_type
    cost?: Decimal | DecimalJsLike | number | string | null
    session_registrations?: session_registrationsCreateNestedManyWithoutSessionsInput
  }

  export type sessionsUncheckedCreateWithoutRoomsInput = {
    id?: number
    title: string
    description?: string | null
    speaker?: string | null
    start: Date | string
    end: Date | string
    type: $Enums.sessions_type
    cost?: Decimal | DecimalJsLike | number | string | null
    session_registrations?: session_registrationsUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type sessionsCreateOrConnectWithoutRoomsInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutRoomsInput, sessionsUncheckedCreateWithoutRoomsInput>
  }

  export type sessionsCreateManyRoomsInputEnvelope = {
    data: sessionsCreateManyRoomsInput | sessionsCreateManyRoomsInput[]
    skipDuplicates?: boolean
  }

  export type channelsUpsertWithoutRoomsInput = {
    update: XOR<channelsUpdateWithoutRoomsInput, channelsUncheckedUpdateWithoutRoomsInput>
    create: XOR<channelsCreateWithoutRoomsInput, channelsUncheckedCreateWithoutRoomsInput>
    where?: channelsWhereInput
  }

  export type channelsUpdateToOneWithWhereWithoutRoomsInput = {
    where?: channelsWhereInput
    data: XOR<channelsUpdateWithoutRoomsInput, channelsUncheckedUpdateWithoutRoomsInput>
  }

  export type channelsUpdateWithoutRoomsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    events?: eventsUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type channelsUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUpsertWithWhereUniqueWithoutRoomsInput = {
    where: sessionsWhereUniqueInput
    update: XOR<sessionsUpdateWithoutRoomsInput, sessionsUncheckedUpdateWithoutRoomsInput>
    create: XOR<sessionsCreateWithoutRoomsInput, sessionsUncheckedCreateWithoutRoomsInput>
  }

  export type sessionsUpdateWithWhereUniqueWithoutRoomsInput = {
    where: sessionsWhereUniqueInput
    data: XOR<sessionsUpdateWithoutRoomsInput, sessionsUncheckedUpdateWithoutRoomsInput>
  }

  export type sessionsUpdateManyWithWhereWithoutRoomsInput = {
    where: sessionsScalarWhereInput
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyWithoutRoomsInput>
  }

  export type sessionsScalarWhereInput = {
    AND?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    OR?: sessionsScalarWhereInput[]
    NOT?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    id?: IntFilter<"sessions"> | number
    room_id?: IntFilter<"sessions"> | number
    title?: StringFilter<"sessions"> | string
    description?: StringNullableFilter<"sessions"> | string | null
    speaker?: StringNullableFilter<"sessions"> | string | null
    start?: DateTimeFilter<"sessions"> | Date | string
    end?: DateTimeFilter<"sessions"> | Date | string
    type?: Enumsessions_typeFilter<"sessions"> | $Enums.sessions_type
    cost?: DecimalNullableFilter<"sessions"> | Decimal | DecimalJsLike | number | string | null
  }

  export type registrationsCreateWithoutSession_registrationsInput = {
    registration_time?: Date | string | null
    attendees: attendeesCreateNestedOneWithoutRegistrationsInput
    event_tickets: event_ticketsCreateNestedOneWithoutRegistrationsInput
  }

  export type registrationsUncheckedCreateWithoutSession_registrationsInput = {
    id?: number
    attendee_id: number
    ticket_id: number
    registration_time?: Date | string | null
  }

  export type registrationsCreateOrConnectWithoutSession_registrationsInput = {
    where: registrationsWhereUniqueInput
    create: XOR<registrationsCreateWithoutSession_registrationsInput, registrationsUncheckedCreateWithoutSession_registrationsInput>
  }

  export type sessionsCreateWithoutSession_registrationsInput = {
    title: string
    description?: string | null
    speaker?: string | null
    start: Date | string
    end: Date | string
    type: $Enums.sessions_type
    cost?: Decimal | DecimalJsLike | number | string | null
    rooms: roomsCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateWithoutSession_registrationsInput = {
    id?: number
    room_id: number
    title: string
    description?: string | null
    speaker?: string | null
    start: Date | string
    end: Date | string
    type: $Enums.sessions_type
    cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type sessionsCreateOrConnectWithoutSession_registrationsInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutSession_registrationsInput, sessionsUncheckedCreateWithoutSession_registrationsInput>
  }

  export type registrationsUpsertWithoutSession_registrationsInput = {
    update: XOR<registrationsUpdateWithoutSession_registrationsInput, registrationsUncheckedUpdateWithoutSession_registrationsInput>
    create: XOR<registrationsCreateWithoutSession_registrationsInput, registrationsUncheckedCreateWithoutSession_registrationsInput>
    where?: registrationsWhereInput
  }

  export type registrationsUpdateToOneWithWhereWithoutSession_registrationsInput = {
    where?: registrationsWhereInput
    data: XOR<registrationsUpdateWithoutSession_registrationsInput, registrationsUncheckedUpdateWithoutSession_registrationsInput>
  }

  export type registrationsUpdateWithoutSession_registrationsInput = {
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendees?: attendeesUpdateOneRequiredWithoutRegistrationsNestedInput
    event_tickets?: event_ticketsUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type registrationsUncheckedUpdateWithoutSession_registrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendee_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsUpsertWithoutSession_registrationsInput = {
    update: XOR<sessionsUpdateWithoutSession_registrationsInput, sessionsUncheckedUpdateWithoutSession_registrationsInput>
    create: XOR<sessionsCreateWithoutSession_registrationsInput, sessionsUncheckedCreateWithoutSession_registrationsInput>
    where?: sessionsWhereInput
  }

  export type sessionsUpdateToOneWithWhereWithoutSession_registrationsInput = {
    where?: sessionsWhereInput
    data: XOR<sessionsUpdateWithoutSession_registrationsInput, sessionsUncheckedUpdateWithoutSession_registrationsInput>
  }

  export type sessionsUpdateWithoutSession_registrationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumsessions_typeFieldUpdateOperationsInput | $Enums.sessions_type
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rooms?: roomsUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateWithoutSession_registrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumsessions_typeFieldUpdateOperationsInput | $Enums.sessions_type
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type session_registrationsCreateWithoutSessionsInput = {
    registrations: registrationsCreateNestedOneWithoutSession_registrationsInput
  }

  export type session_registrationsUncheckedCreateWithoutSessionsInput = {
    id?: number
    registration_id: number
  }

  export type session_registrationsCreateOrConnectWithoutSessionsInput = {
    where: session_registrationsWhereUniqueInput
    create: XOR<session_registrationsCreateWithoutSessionsInput, session_registrationsUncheckedCreateWithoutSessionsInput>
  }

  export type session_registrationsCreateManySessionsInputEnvelope = {
    data: session_registrationsCreateManySessionsInput | session_registrationsCreateManySessionsInput[]
    skipDuplicates?: boolean
  }

  export type roomsCreateWithoutSessionsInput = {
    name?: string | null
    capacity?: number | null
    channels: channelsCreateNestedOneWithoutRoomsInput
  }

  export type roomsUncheckedCreateWithoutSessionsInput = {
    id?: number
    channel_id: number
    name?: string | null
    capacity?: number | null
  }

  export type roomsCreateOrConnectWithoutSessionsInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutSessionsInput, roomsUncheckedCreateWithoutSessionsInput>
  }

  export type session_registrationsUpsertWithWhereUniqueWithoutSessionsInput = {
    where: session_registrationsWhereUniqueInput
    update: XOR<session_registrationsUpdateWithoutSessionsInput, session_registrationsUncheckedUpdateWithoutSessionsInput>
    create: XOR<session_registrationsCreateWithoutSessionsInput, session_registrationsUncheckedCreateWithoutSessionsInput>
  }

  export type session_registrationsUpdateWithWhereUniqueWithoutSessionsInput = {
    where: session_registrationsWhereUniqueInput
    data: XOR<session_registrationsUpdateWithoutSessionsInput, session_registrationsUncheckedUpdateWithoutSessionsInput>
  }

  export type session_registrationsUpdateManyWithWhereWithoutSessionsInput = {
    where: session_registrationsScalarWhereInput
    data: XOR<session_registrationsUpdateManyMutationInput, session_registrationsUncheckedUpdateManyWithoutSessionsInput>
  }

  export type roomsUpsertWithoutSessionsInput = {
    update: XOR<roomsUpdateWithoutSessionsInput, roomsUncheckedUpdateWithoutSessionsInput>
    create: XOR<roomsCreateWithoutSessionsInput, roomsUncheckedCreateWithoutSessionsInput>
    where?: roomsWhereInput
  }

  export type roomsUpdateToOneWithWhereWithoutSessionsInput = {
    where?: roomsWhereInput
    data: XOR<roomsUpdateWithoutSessionsInput, roomsUncheckedUpdateWithoutSessionsInput>
  }

  export type roomsUpdateWithoutSessionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    channels?: channelsUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type registrationsCreateManyAttendeesInput = {
    id?: number
    ticket_id: number
    registration_time?: Date | string | null
  }

  export type registrationsUpdateWithoutAttendeesInput = {
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_tickets?: event_ticketsUpdateOneRequiredWithoutRegistrationsNestedInput
    session_registrations?: session_registrationsUpdateManyWithoutRegistrationsNestedInput
  }

  export type registrationsUncheckedUpdateWithoutAttendeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session_registrations?: session_registrationsUncheckedUpdateManyWithoutRegistrationsNestedInput
  }

  export type registrationsUncheckedUpdateManyWithoutAttendeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type roomsCreateManyChannelsInput = {
    id?: number
    name?: string | null
    capacity?: number | null
  }

  export type roomsUpdateWithoutChannelsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    sessions?: sessionsUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateWithoutChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    sessions?: sessionsUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateManyWithoutChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type registrationsCreateManyEvent_ticketsInput = {
    id?: number
    attendee_id: number
    registration_time?: Date | string | null
  }

  export type registrationsUpdateWithoutEvent_ticketsInput = {
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendees?: attendeesUpdateOneRequiredWithoutRegistrationsNestedInput
    session_registrations?: session_registrationsUpdateManyWithoutRegistrationsNestedInput
  }

  export type registrationsUncheckedUpdateWithoutEvent_ticketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendee_id?: IntFieldUpdateOperationsInput | number
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session_registrations?: session_registrationsUncheckedUpdateManyWithoutRegistrationsNestedInput
  }

  export type registrationsUncheckedUpdateManyWithoutEvent_ticketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    attendee_id?: IntFieldUpdateOperationsInput | number
    registration_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type channelsCreateManyEventsInput = {
    id?: number
    name?: string | null
  }

  export type event_ticketsCreateManyEventsInput = {
    id?: number
    name?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    special_validity?: string | null
  }

  export type channelsUpdateWithoutEventsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: roomsUpdateManyWithoutChannelsNestedInput
  }

  export type channelsUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: roomsUncheckedUpdateManyWithoutChannelsNestedInput
  }

  export type channelsUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type event_ticketsUpdateWithoutEventsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    special_validity?: NullableStringFieldUpdateOperationsInput | string | null
    registrations?: registrationsUpdateManyWithoutEvent_ticketsNestedInput
  }

  export type event_ticketsUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    special_validity?: NullableStringFieldUpdateOperationsInput | string | null
    registrations?: registrationsUncheckedUpdateManyWithoutEvent_ticketsNestedInput
  }

  export type event_ticketsUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    special_validity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventsCreateManyOrganizersInput = {
    id?: number
    name?: string | null
    slug?: string | null
    date?: Date | string | null
  }

  export type eventsUpdateWithoutOrganizersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    channels?: channelsUpdateManyWithoutEventsNestedInput
    event_tickets?: event_ticketsUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateWithoutOrganizersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    channels?: channelsUncheckedUpdateManyWithoutEventsNestedInput
    event_tickets?: event_ticketsUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateManyWithoutOrganizersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type session_registrationsCreateManyRegistrationsInput = {
    id?: number
    session_id: number
  }

  export type session_registrationsUpdateWithoutRegistrationsInput = {
    sessions?: sessionsUpdateOneRequiredWithoutSession_registrationsNestedInput
  }

  export type session_registrationsUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
  }

  export type session_registrationsUncheckedUpdateManyWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsCreateManyRoomsInput = {
    id?: number
    title: string
    description?: string | null
    speaker?: string | null
    start: Date | string
    end: Date | string
    type: $Enums.sessions_type
    cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type sessionsUpdateWithoutRoomsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumsessions_typeFieldUpdateOperationsInput | $Enums.sessions_type
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    session_registrations?: session_registrationsUpdateManyWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumsessions_typeFieldUpdateOperationsInput | $Enums.sessions_type
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    session_registrations?: session_registrationsUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateManyWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumsessions_typeFieldUpdateOperationsInput | $Enums.sessions_type
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type session_registrationsCreateManySessionsInput = {
    id?: number
    registration_id: number
  }

  export type session_registrationsUpdateWithoutSessionsInput = {
    registrations?: registrationsUpdateOneRequiredWithoutSession_registrationsNestedInput
  }

  export type session_registrationsUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    registration_id?: IntFieldUpdateOperationsInput | number
  }

  export type session_registrationsUncheckedUpdateManyWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    registration_id?: IntFieldUpdateOperationsInput | number
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