/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the ChannelList
 *
 * @param version - Version of the resource
 */
declare function ChannelList(version: V1): ChannelListInstance;

interface ChannelListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ChannelContext;
  /**
   * create a ChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ChannelListInstanceCreateOptions, callback?: (error: Error | null, item: ChannelInstance) => any): Promise<ChannelInstance>;
  /**
   * Streams ChannelInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ChannelListInstanceEachOptions, callback?: (item: ChannelInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a channel
   *
   * @param sid - Flex Chat Channel Sid
   */
  get(sid: string): ChannelContext;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ChannelListInstanceOptions, callback?: (error: Error | null, items: ChannelInstance[]) => any): Promise<ChannelInstance[]>;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ChannelListInstancePageOptions, callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property chatFriendlyName - Chat channel friendly name
 * @property chatUniqueName - Chat channel unique name
 * @property chatUserFriendlyName - Customer friendly name
 * @property flexFlowSid - The unique ID of the FlexFlow
 * @property identity - Chat User identity
 * @property longLived - Long Lived flag
 * @property preEngagementData - Pre-engagement data
 * @property target - Target Contact Identity
 * @property taskAttributes - Task attributes to be added for the TaskRouter Task
 * @property taskSid - TaskRouter Task Sid.
 */
interface ChannelListInstanceCreateOptions {
  chatFriendlyName: string;
  chatUniqueName?: string;
  chatUserFriendlyName: string;
  flexFlowSid: string;
  identity: string;
  longLived?: boolean;
  preEngagementData?: string;
  target?: string;
  taskAttributes?: string;
  taskSid?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface ChannelListInstanceEachOptions {
  callback?: (item: ChannelInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ChannelListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ChannelListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ChannelPayload extends ChannelResource, Page.TwilioResponsePayload {
}

interface ChannelResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  flex_flow_sid: string;
  sid: string;
  task_sid: string;
  url: string;
  user_sid: string;
}

interface ChannelSolution {
}


declare class ChannelContext {
  /**
   * Initialize the ChannelContext
   *
   * @param version - Version of the resource
   * @param sid - Flex Chat Channel Sid
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ChannelInstance) => any): Promise<ChannelInstance>;
  /**
   * remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ChannelInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class ChannelInstance extends SerializableClass {
  /**
   * Initialize the ChannelContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - Flex Chat Channel Sid
   */
  constructor(version: V1, payload: ChannelPayload, sid: string);

  private _proxy: ChannelContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ChannelInstance) => any): void;
  flexFlowSid: string;
  /**
   * remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ChannelInstance) => any): void;
  sid: string;
  taskSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  userSid: string;
}


declare class ChannelPage extends Page<V1, ChannelPayload, ChannelResource, ChannelInstance> {
  /**
   * Initialize the ChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ChannelSolution);

  /**
   * Build an instance of ChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChannelPayload): ChannelInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ChannelContext, ChannelInstance, ChannelList, ChannelListInstance, ChannelListInstanceCreateOptions, ChannelListInstanceEachOptions, ChannelListInstanceOptions, ChannelListInstancePageOptions, ChannelPage, ChannelPayload, ChannelResource, ChannelSolution }
