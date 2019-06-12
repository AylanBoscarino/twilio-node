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

type FlexFlowChannelType = 'web'|'sms'|'facebook'|'whatsapp'|'line'|'custom';

type FlexFlowIntegrationType = 'studio'|'external'|'task';

/**
 * Initialize the FlexFlowList
 *
 * @param version - Version of the resource
 */
declare function FlexFlowList(version: V1): FlexFlowListInstance;

/**
 * Options to pass to update
 *
 * @property channelType - Channel type
 * @property chatServiceSid - Service Sid.
 * @property contactIdentity - Channel contact Identity
 * @property enabled - Boolean flag for enabling or disabling the FlexFlow
 * @property friendlyName - Human readable description of this FlexFlow
 * @property integration.channel - Task Channel for a new task
 * @property integration.creationOnMessage - Flag for task creation
 * @property integration.flowSid - Flow Sid.
 * @property integration.priority - Task priority for a new task
 * @property integration.timeout - Task timeout in seconds for a new task
 * @property integration.url - External Webhook Url
 * @property integration.workflowSid - Workflow Sid for a new task
 * @property integration.workspaceSid - Workspace Sid for a new task
 * @property integrationType - Integration type
 * @property longLived - Long Lived flag for new Channel
 */
interface FlexFlowInstanceUpdateOptions {
  channelType?: FlexFlowChannelType;
  chatServiceSid?: string;
  contactIdentity?: string;
  enabled?: boolean;
  friendlyName?: string;
  integration?: {
    flowSid?: string;
    url?: string;
    workspaceSid?: string;
    workflowSid?: string;
    channel?: string;
    timeout?: number;
    priority?: number;
    creationOnMessage?: boolean;
  };
  integrationType?: FlexFlowIntegrationType;
  longLived?: boolean;
}

interface FlexFlowListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FlexFlowContext;
  /**
   * create a FlexFlowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FlexFlowListInstanceCreateOptions, callback?: (error: Error | null, item: FlexFlowInstance) => any): Promise<FlexFlowInstance>;
  /**
   * Streams FlexFlowInstance records from the API.
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
  each(opts?: FlexFlowListInstanceEachOptions, callback?: (item: FlexFlowInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a flex_flow
   *
   * @param sid - The unique ID of the FlexFlow
   */
  get(sid: string): FlexFlowContext;
  /**
   * Retrieve a single target page of FlexFlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FlexFlowPage) => any): Promise<FlexFlowPage>;
  /**
   * Lists FlexFlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FlexFlowListInstanceOptions, callback?: (error: Error | null, items: FlexFlowInstance[]) => any): Promise<FlexFlowInstance[]>;
  /**
   * Retrieve a single page of FlexFlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FlexFlowListInstancePageOptions, callback?: (error: Error | null, items: FlexFlowPage) => any): Promise<FlexFlowPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property channelType - Channel type
 * @property chatServiceSid - Service Sid.
 * @property contactIdentity - Channel contact Identity
 * @property enabled - Boolean flag for enabling or disabling the FlexFlow
 * @property friendlyName - Human readable description of this FlexFlow
 * @property integration.channel - Task Channel for a new task
 * @property integration.creationOnMessage - Flag for task creation
 * @property integration.flowSid - Flow Sid.
 * @property integration.priority - Task priority for a new task
 * @property integration.timeout - Task timeout in seconds for a new task
 * @property integration.url - External Webhook Url
 * @property integration.workflowSid - Workflow Sid for a new task
 * @property integration.workspaceSid - Workspace Sid for a new task
 * @property integrationType - Integration type
 * @property longLived - Long Lived flag for new Channel
 */
interface FlexFlowListInstanceCreateOptions {
  channelType: FlexFlowChannelType;
  chatServiceSid: string;
  contactIdentity?: string;
  enabled?: boolean;
  friendlyName: string;
  integration?: {
    flowSid?: string;
    url?: string;
    workspaceSid?: string;
    workflowSid?: string;
    channel?: string;
    timeout?: number;
    priority?: number;
    creationOnMessage?: boolean;
  };
  integrationType?: FlexFlowIntegrationType;
  longLived?: boolean;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - Human readable description of this FlexFlow
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
interface FlexFlowListInstanceEachOptions {
  callback?: (item: FlexFlowInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - Human readable description of this FlexFlow
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
interface FlexFlowListInstanceOptions {
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - Human readable description of this FlexFlow
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface FlexFlowListInstancePageOptions {
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FlexFlowPayload extends FlexFlowResource, Page.TwilioResponsePayload {
}

interface FlexFlowResource {
  account_sid: string;
  channel_type: FlexFlowChannelType;
  chat_service_sid: string;
  contact_identity: string;
  date_created: Date;
  date_updated: Date;
  enabled: boolean;
  friendly_name: string;
  integration: string;
  integration_type: FlexFlowIntegrationType;
  long_lived: boolean;
  sid: string;
  url: string;
}

interface FlexFlowSolution {
}


declare class FlexFlowContext {
  /**
   * Initialize the FlexFlowContext
   *
   * @param version - Version of the resource
   * @param sid - The unique ID of the FlexFlow
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a FlexFlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FlexFlowInstance) => any): Promise<FlexFlowInstance>;
  /**
   * remove a FlexFlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FlexFlowInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FlexFlowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FlexFlowInstanceUpdateOptions, callback?: (error: Error | null, items: FlexFlowInstance) => any): Promise<FlexFlowInstance>;
}


declare class FlexFlowInstance extends SerializableClass {
  /**
   * Initialize the FlexFlowContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique ID of the FlexFlow
   */
  constructor(version: V1, payload: FlexFlowPayload, sid: string);

  private _proxy: FlexFlowContext;
  accountSid: string;
  channelType: FlexFlowChannelType;
  chatServiceSid: string;
  contactIdentity: string;
  dateCreated: Date;
  dateUpdated: Date;
  enabled: boolean;
  /**
   * fetch a FlexFlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FlexFlowInstance) => any): void;
  friendlyName: string;
  integration: string;
  integrationType: FlexFlowIntegrationType;
  longLived: boolean;
  /**
   * remove a FlexFlowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FlexFlowInstance) => any): void;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FlexFlowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FlexFlowInstanceUpdateOptions, callback?: (error: Error | null, items: FlexFlowInstance) => any): void;
  url: string;
}


declare class FlexFlowPage extends Page<V1, FlexFlowPayload, FlexFlowResource, FlexFlowInstance> {
  /**
   * Initialize the FlexFlowPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FlexFlowSolution);

  /**
   * Build an instance of FlexFlowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlexFlowPayload): FlexFlowInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FlexFlowContext, FlexFlowInstance, FlexFlowList, FlexFlowListInstance, FlexFlowListInstanceCreateOptions, FlexFlowListInstanceEachOptions, FlexFlowListInstanceOptions, FlexFlowListInstancePageOptions, FlexFlowPage, FlexFlowPayload, FlexFlowResource, FlexFlowSolution }
