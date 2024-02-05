import React from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { BiSolidError, BiErrorCircle } from 'react-icons/bi';

export const Modal = ({variant, title, description, warningDesc, leftButtonText, rightButtonText, onClickRight, onClickLeft, isOpen, closeModal})  => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-[394px] transform overflow-hidden rounded-lg bg-white p-6 text-center align-middle shadow-xl transition-all">
                      <Dialog.Title
                          as="p"
                          className="text-modal-title flex flex-col items-center justify-center">
                              {
                                  variant === 'primary' ?
                                  <div className='rounded-full bg-blue-500 text-white p-2 mb-3'>
                                      <BiSolidError className="text-2xl" />
                                  </div> :
                                  variant === 'warning' ?
                                  <div className='rounded-full bg-yellow-300 text-white p-2 mb-3'>
                                      <BiSolidError className="text-2xl" />
                                  </div> :
                                  <div className='rounded-full bg-red-400 text-white p-2 mb-3'>
                                      <BiSolidError className="text-2xl" />
                                  </div>
                              }
                              <span className={`${title == null ? '!hidden' : null}`}>{title}</span>
                      </Dialog.Title>
  
                      <div className="mt-1 max-h-[150px] overflow-y-auto">
                          <p className="m-p-reg">
                          {description}
                          </p>
                      </div>
  
                      <div className={`${warningDesc == null ? '!hidden' : null} mt-4 rounded-lg bg-danger-surface px-6 py-4 text-left align-middle`}>
                          <p className={`s-p-med text-danger flex`}>
                              <BiErrorCircle className="text-lg mr-1" />
                              Peringatan
                          </p>
                          <p className={`s-p-reg text-danger-hover pt-2`}>
                              {warningDesc}
                          </p>
                      </div>
  
                      <div className="flex w-full mt-2 gap-2">
                          <button type="button" className={`bg-white hover:bg-red-500 text-red-500 hover:text-white cursor-pointer`} style={{ width: '100%' }} onClick={onClickLeft == null ? closeModal : onClickLeft}>{leftButtonText}</button>
                          <button type="button" className={`border border-blue-500 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer`} style={{ width: '100%' }} onClick={onClickRight == null ? closeModal : onClickRight}>{rightButtonText}</button>
                      </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
    )
  }