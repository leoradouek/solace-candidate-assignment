import { Advocate } from '@/types/advocates';
import React from 'react';
type Props = {
  loading: boolean;
  error: Error | null;
  success: boolean;
  advocates: Advocate[];
  searchTerm: string;

}
export default function BlankStates({loading, error, success, advocates, searchTerm}: Props){
  if (loading) {
    return (
      <div className= "h-[90vh] flex items-center justify-center">Loading...</div>
    )
  }

  if (error) {
    return (
      <div className= "h-[90vh] flex items-center justify-center"> There was an error retrieving the advocates. Please try refreshing the page. </div>
    )
  }

  if (success && advocates.length === 0) {
    if (searchTerm) {
      return (
        <div className= "h-[80vh] flex items-center justify-center">We couldn&apos;t find any matching results for {searchTerm}. Please try again.</div>
      )
    } 
    
    return (
      <div className= "h-[80vh] flex items-center justify-center">There are currently no advocates.</div>
    )
  }
  
}