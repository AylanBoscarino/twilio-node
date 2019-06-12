/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

type CallSummaryCallState = 'ringing'|'completed'|'busy'|'fail'|'noanswer'|'canceled'|'answered'|'undialed';

type CallSummaryCallType = 'carrier'|'sip'|'trunking'|'client';

type CallSummaryDirection = 'inbound'|'outbound_api'|'outbound_dial'|'trunking_originating'|'trunking_terminating';

type CallSummaryDisconnectedBy = 'callee'|'caller'|'unknown';

type CallSummaryProcessingState = 'complete'|'partial';

/**
 * Initialize the CallSummaryList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CallSummaryList(version: V1): CallSummaryListInstance;

/**
 * Options to pass to fetch
 *
 * @property processingState - The processing_state
 */
interface CallSummaryInstanceFetchOptions {
  processingState?: CallSummaryProcessingState;
}

interface CallSummaryListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CallSummaryContext;
  /**
   * Constructs a call_summary
   *
   * @param callSid - The call_sid
   */
  get(callSid: string): CallSummaryContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface CallSummaryPayload extends CallSummaryResource, Page.TwilioResponsePayload {
}

interface CallSummaryResource {
  account_sid: string;
  attributes: string;
  call_sid: string;
  call_state: CallSummaryCallState;
  call_type: CallSummaryCallType;
  carrier_edge: string;
  client_edge: string;
  connect_duration: number;
  direction: CallSummaryDirection;
  disconnected_by: CallSummaryDisconnectedBy;
  duration: number;
  end_time: Date;
  from: string;
  processing_state: CallSummaryProcessingState;
  sdk_edge: string;
  sip_edge: string;
  start_time: Date;
  tags: string;
  to: string;
  url: string;
}

interface CallSummarySolution {
}


declare class CallSummaryContext {
  /**
   * Initialize the CallSummaryContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param callSid - The call_sid
   */
  constructor(version: V1, callSid: string);

  /**
   * fetch a CallSummaryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: CallSummaryInstanceFetchOptions, callback?: (error: Error | null, items: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class CallSummaryInstance extends SerializableClass {
  /**
   * Initialize the CallSummaryContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param callSid - The call_sid
   */
  constructor(version: V1, payload: CallSummaryPayload, callSid: string);

  private _proxy: CallSummaryContext;
  accountSid: string;
  attributes: string;
  callSid: string;
  callState: CallSummaryCallState;
  callType: CallSummaryCallType;
  carrierEdge: string;
  clientEdge: string;
  connectDuration: number;
  direction: CallSummaryDirection;
  disconnectedBy: CallSummaryDisconnectedBy;
  duration: number;
  endTime: Date;
  /**
   * fetch a CallSummaryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: CallSummaryInstanceFetchOptions, callback?: (error: Error | null, items: CallSummaryInstance) => any): void;
  from: string;
  processingState: CallSummaryProcessingState;
  sdkEdge: string;
  sipEdge: string;
  startTime: Date;
  tags: string;
  to: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class CallSummaryPage extends Page<V1, CallSummaryPayload, CallSummaryResource, CallSummaryInstance> {
  /**
   * Initialize the CallSummaryPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CallSummarySolution);

  /**
   * Build an instance of CallSummaryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CallSummaryPayload): CallSummaryInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CallSummaryContext, CallSummaryInstance, CallSummaryList, CallSummaryListInstance, CallSummaryPage, CallSummaryPayload, CallSummaryResource, CallSummarySolution }
