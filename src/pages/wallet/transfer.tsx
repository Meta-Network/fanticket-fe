import React from "react";
import { NumberInput, Input } from "../../components/Input";
import WalletPageSidebar from "../../components/Sidebar/WalletSidebar";

export default function TransferAssetPage() {
    return (
      <div className="py-4 px-4 bg-gray-50 ">
        <div className="bg-white rounded p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Transfer</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Transfer your FanTicket to someone else
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              {/* <form action="#" method="POST"> */}
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                      <label className="block text-sm font-medium text-gray-700">Token</label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <button
                          type="button"
                          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Change
                        </button>
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="Receipient" className="block text-sm font-medium text-gray-700">
                        Receipient (To):
                      </label>
                      <div className="mt-1">
                        <Input type="text" placeholder="e.g. 0x1234567890....." />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Enter the the wallet address of the Receipient, started with '0x'.
                      </p>
                    </div>
  
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Amount
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <NumberInput type="number" placeholder="Enter amount like 1.2345" isFullWidth step="0.0001" />
                        </div>
                      </div>
                    </div>
  
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Wallet Unlock Password</label>
                      <input 
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300"
                          type="password" name="wallet-password" placeholder="Enter your password for encrypted hosting wallet..." />
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send
                    </button>
                  </div>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
      </div>
    )
  }
  