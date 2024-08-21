var t=Object.defineProperty,__name=(e,r)=>t(e,"name",{value:r,configurable:!0}),e=class _TraceCollection{constructor(){this.traces=[]}static empty(){return new _TraceCollection}add(t){const e=new _TraceCollection;return e.traces=[...this.traces,t],e}*[Symbol.iterator](){for(const t of this.traces)yield t}};__name(e,"TraceCollection");var r=e,s=class _TraceCommon{constructor(t,e){this.message=t,this.time=e}static from(t,e){return new _TraceCommon(t,e)}read(){return this.message}at(){return this.time}};__name(s,"TraceCommon");var n=s,o=class _Some{constructor(t){this.value=t}static of(t){return new _Some(t)}bind(t){return t(this.value)}unwrap(){return this.value}map(t){const e=t(this.value);return _Some.of(e)}};__name(o,"Some");var c=o,i=class _None{static of(){return new _None}bind(t){return this}unwrap(){throw new Error("Value of None cannot be unwrapped")}map(t){return this}};__name(i,"None");var a=i,u=class _ContextCollection{constructor(){this.contexts={}}static empty(){return new _ContextCollection}get(t){return this.contexts[t]?c.of(this.contexts[t]):a.of()}add(t,e){const r=new _ContextCollection;return r.contexts={...this.contexts},r.contexts[t]=e,r}remove(t){const e=new _ContextCollection;return e.contexts={...this.contexts},delete e.contexts[t],e}*[Symbol.iterator](){for(const t in this.contexts)yield this.contexts[t]}};__name(u,"ContextCollection");var h=u,l=class _Failure{constructor(t,e,r,s,n){this.message=t,this.name="Failure",this.code=e,this.traces=r,this.contexts=s,this.previous=n}static dueTo(t,e,s,o,c,i){return c=c??r.empty(),o?c.add(o):c.add(n.from(t,Date.now())),i=i??h.empty(),new _Failure(t,e,c,i,s||null)}bind(t){return this}map(t){return this}lift(t){return this}unwrap(){throw new Error("Value of Failure can not be unwrapped")}getTraces(){return this.traces}withTrace(t){return this.traces.add(t),this}withContext(t,e){return this.contexts.add(t,e),this}getContext(t){return this.contexts.get(t)}getContexts(){return this.contexts}clearContext(t){return this.contexts.remove(t),this}};__name(l,"Failure");var x=l,m=class _Success{constructor(t,e,r){this.value=t,this.traces=e,this.contexts=r}static of(t,e,s){return new _Success(t,e??r.empty(),s??h.empty())}bind(t){return t(this.value)}lift(t){return new _Success(t,this.traces,this.contexts)}map(t){return new _Success(t(this.value),this.traces,this.contexts)}unwrap(){return this.value}getTraces(){return this.traces}withTrace(t){return this.traces.add(t),this}withContext(t,e){return this.contexts.add(t,e),this}getContext(t){return this.contexts.get(t)}getContexts(){return this.contexts}clearContext(t){return this.contexts.remove(t),this}};__name(m,"Success");var d=m,w=class _Awaiting{};__name(w,"Awaiting");var C=w;export{C as Awaiting,h as ContextCollection,x as Failure,a as None,c as Some,d as Success,r as TraceCollection,n as TraceCommon};//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb25hZC90cmFjZS90cmFjZS1jb2xsZWN0aW9uLnRzIiwiLi4vc3JjL21vbmFkL3RyYWNlL3RyYWNlLWNvbW1vbi50cyIsIi4uL3NyYy9tb25hZC9tb25hZHMvb3B0aW9uYWwvc29tZS50cyIsIi4uL3NyYy9tb25hZC9tb25hZHMvb3B0aW9uYWwvbm9uZS50cyIsIi4uL3NyYy9tb25hZC9jb250ZXh0L2NvbnRleHQtY29sbGVjdGlvbi50cyIsIi4uL3NyYy9tb25hZC9tb25hZHMvZWl0aGVyL2ZhaWx1cmUudHMiLCIuLi9zcmMvbW9uYWQvbW9uYWRzL2VpdGhlci9zdWNjZXNzLnRzIiwiLi4vc3JjL21vbmFkL2F3YWl0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJTyxJQUFNLG1CQUFOLE1BQU0saUJBQWtDO0FBQUEsRUFHckMsY0FBYztBQUZ0QixTQUFVLFNBQWtCLENBQUM7QUFBQSxFQUVOO0FBQUEsRUFFdkIsT0FBYyxRQUF5QjtBQUNyQyxXQUFPLElBQUksaUJBQWdCO0FBQUEsRUFDN0I7QUFBQSxFQUVPLElBQUksT0FBK0I7QUFDeEMsVUFBTSxnQkFBZ0IsSUFBSSxpQkFBZ0I7QUFDMUMsa0JBQWMsU0FBUyxDQUFDLEdBQUcsS0FBSyxRQUFRLEtBQUs7QUFDN0MsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLEVBQVMsT0FBTyxRQUFRLElBQXFCO0FBQzNDLGVBQVcsU0FBUyxLQUFLLFFBQVE7QUFDL0IsWUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQ0Y7QUFwQitDO0FBQXhDLElBQU0sa0JBQU47OztBQ0RBLElBQU0sZUFBTixNQUFNLGFBQTZCO0FBQUEsRUFJaEMsWUFBWSxTQUFpQixNQUFjO0FBQ2pELFNBQUssVUFBVTtBQUNmLFNBQUssT0FBTztBQUFBLEVBQ2Q7QUFBQSxFQUVBLE9BQWMsS0FBSyxTQUFpQixNQUEyQjtBQUM3RCxXQUFPLElBQUksYUFBWSxTQUFTLElBQUk7QUFBQSxFQUN0QztBQUFBLEVBRU8sT0FBZTtBQUNwQixXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUEsRUFFTyxLQUFhO0FBQ2xCLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFDRjtBQXBCMEM7QUFBbkMsSUFBTSxjQUFOOzs7QUNEQSxJQUFNLFFBQU4sTUFBTSxNQUErQjtBQUFBLEVBR2xDLFlBQVksT0FBVTtBQUM1QixTQUFLLFFBQVE7QUFBQSxFQUNmO0FBQUEsRUFFQSxPQUFPLEdBQU0sT0FBbUI7QUFDOUIsV0FBTyxJQUFJLE1BQUssS0FBSztBQUFBLEVBQ3ZCO0FBQUEsRUFFQSxLQUFRLElBQTRDO0FBQ2xELFdBQU8sR0FBRyxLQUFLLEtBQUs7QUFBQSxFQUN0QjtBQUFBLEVBRUEsU0FBWTtBQUNWLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUVBLElBQU8sSUFBa0M7QUFDdkMsVUFBTSxXQUFXLEdBQUcsS0FBSyxLQUFLO0FBQzlCLFdBQU8sTUFBSyxHQUFHLFFBQVE7QUFBQSxFQUN6QjtBQUNGO0FBdkI0QztBQUFyQyxJQUFNLE9BQU47OztBQ0NBLElBQU0sUUFBTixNQUFNLE1BQWdDO0FBQUEsRUFDM0MsT0FBTyxLQUFXO0FBQ2hCLFdBQU8sSUFBSSxNQUFLO0FBQUEsRUFDbEI7QUFBQSxFQUVBLEtBQUssSUFBNkM7QUFDaEQsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFNBQWdCO0FBQ2QsVUFBTSxJQUFJLE1BQU0sbUNBQW1DO0FBQUEsRUFDckQ7QUFBQSxFQUVBLElBQU8sSUFBK0I7QUFDcEMsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQWhCNkM7QUFBdEMsSUFBTSxPQUFOOzs7QUNHQSxJQUFNLHFCQUFOLE1BQU0sbUJBQXNDO0FBQUEsRUFBNUM7QUFDTCxTQUFRLFdBQXVDLENBQUM7QUFBQTtBQUFBLEVBRWhELE9BQU8sUUFBMkI7QUFDaEMsV0FBTyxJQUFJLG1CQUFrQjtBQUFBLEVBQy9CO0FBQUEsRUFFQSxJQUFJLEtBQXNDO0FBQ3hDLFdBQU8sS0FBSyxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsS0FBSyxTQUFTLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRztBQUFBLEVBQ3BFO0FBQUEsRUFFQSxJQUFJLEtBQWEsU0FBcUM7QUFDcEQsVUFBTSxnQkFBZ0IsSUFBSSxtQkFBa0I7QUFDNUMsa0JBQWMsV0FBVyxFQUFFLEdBQUcsS0FBSyxTQUFTO0FBQzVDLGtCQUFjLFNBQVMsR0FBRyxJQUFJO0FBQzlCLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxPQUFPLEtBQWdDO0FBQ3JDLFVBQU0sZ0JBQWdCLElBQUksbUJBQWtCO0FBQzVDLGtCQUFjLFdBQVcsRUFBRSxHQUFHLEtBQUssU0FBUztBQUM1QyxXQUFPLGNBQWMsU0FBUyxHQUFHO0FBQ2pDLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxFQUFFLE9BQU8sUUFBUSxJQUF1QjtBQUN0QyxlQUFXLE9BQU8sS0FBSyxVQUFVO0FBQy9CLFlBQU0sS0FBSyxTQUFTLEdBQUc7QUFBQSxJQUN6QjtBQUFBLEVBQ0Y7QUFDRjtBQTlCbUQ7QUFBNUMsSUFBTSxvQkFBTjs7O0FDSUEsSUFBTSxXQUFOLE1BQU0sU0FBd0M7QUFBQSxFQVEzQyxZQUNOLFNBQ0EsTUFDQSxRQUNBLFVBQ0EsVUFDQTtBQUNBLFNBQUssVUFBVTtBQUNmLFNBQUssT0FBTztBQUNaLFNBQUssT0FBTztBQUNaLFNBQUssU0FBUztBQUNkLFNBQUssV0FBVztBQUNoQixTQUFLLFdBQVc7QUFBQSxFQUNsQjtBQUFBLEVBRUEsT0FBTyxNQUNMLFNBQ0EsTUFDQSxVQUNBLE9BQ0EsUUFDQSxVQUNTO0FBRVQsYUFBUyxVQUFVLGdCQUFnQixNQUFNO0FBQ3pDLFFBQUksT0FBTztBQUNULGFBQU8sSUFBSSxLQUFLO0FBQUEsSUFDbEIsT0FBTztBQUVMLGFBQU8sSUFBSSxZQUFZLEtBQUssU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQUEsSUFDbEQ7QUFFQSxlQUFXLFlBQVksa0JBQWtCLE1BQU07QUFDL0MsV0FBTyxJQUFJO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsV0FBVyxXQUFXO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQUEsRUFFQSxLQUFLLElBQW9EO0FBQ3ZELFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxJQUFJLElBQTRDO0FBQzlDLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxLQUFLLE9BQTZCO0FBQ2hDLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxTQUFnQjtBQUNkLFVBQU0sSUFBSSxNQUFNLHVDQUF1QztBQUFBLEVBQ3pEO0FBQUEsRUFFQSxZQUFvQjtBQUNsQixXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUEsRUFFQSxVQUFVLE9BQTZCO0FBQ3JDLFNBQUssT0FBTyxJQUFJLEtBQUs7QUFDckIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFlBQVksS0FBYSxTQUFpQztBQUN4RCxTQUFLLFNBQVMsSUFBSSxLQUFLLE9BQU87QUFDOUIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFdBQVcsS0FBc0M7QUFDL0MsV0FBTyxLQUFLLFNBQVMsSUFBSSxHQUFHO0FBQUEsRUFDOUI7QUFBQSxFQUVBLGNBQXdCO0FBQ3RCLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUVBLGFBQWEsS0FBNEI7QUFDdkMsU0FBSyxTQUFTLE9BQU8sR0FBRztBQUN4QixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBNUZxRDtBQUE5QyxJQUFNLFVBQU47OztBQ0RBLElBQU0sV0FBTixNQUFNLFNBQWdDO0FBQUEsRUFLbkMsWUFBWSxPQUFVLFFBQWdCLFVBQW9CO0FBQ2hFLFNBQUssUUFBUTtBQUNiLFNBQUssU0FBUztBQUNkLFNBQUssV0FBVztBQUFBLEVBQ2xCO0FBQUEsRUFFQSxPQUFPLEdBQUcsT0FBWSxRQUF3QixVQUE0QjtBQUN4RSxXQUFPLElBQUk7QUFBQSxNQUNUO0FBQUEsTUFDQSxVQUFVLGdCQUFnQixNQUFNO0FBQUEsTUFDaEMsWUFBWSxrQkFBa0IsTUFBTTtBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBRUEsS0FBSyxJQUF3QztBQUMzQyxXQUFPLEdBQUcsS0FBSyxLQUFLO0FBQUEsRUFDdEI7QUFBQSxFQUVBLEtBQUssT0FBdUI7QUFDMUIsV0FBTyxJQUFJLFNBQVEsT0FBTyxLQUFLLFFBQVEsS0FBSyxRQUFRO0FBQUEsRUFDdEQ7QUFBQSxFQUVBLElBQUksSUFBb0M7QUFDdEMsV0FBTyxJQUFJLFNBQVEsR0FBRyxLQUFLLEtBQUssR0FBRyxLQUFLLFFBQVEsS0FBSyxRQUFRO0FBQUEsRUFDL0Q7QUFBQSxFQUVBLFNBQVk7QUFDVixXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUEsRUFFQSxZQUFvQjtBQUNsQixXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUEsRUFFQSxVQUFVLE9BQXlCO0FBQ2pDLFNBQUssT0FBTyxJQUFJLEtBQUs7QUFDckIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFlBQVksS0FBYSxTQUE2QjtBQUNwRCxTQUFLLFNBQVMsSUFBSSxLQUFLLE9BQU87QUFDOUIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFdBQVcsS0FBc0M7QUFDL0MsV0FBTyxLQUFLLFNBQVMsSUFBSSxHQUFHO0FBQUEsRUFDOUI7QUFBQSxFQUVBLGNBQXdCO0FBQ3RCLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUVBLGFBQWEsS0FBd0I7QUFDbkMsU0FBSyxTQUFTLE9BQU8sR0FBRztBQUN4QixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBN0Q2QztBQUF0QyxJQUFNLFVBQU47OztBQ1RBLElBQU0sWUFBTixNQUFNLFVBQVM7QUFBQztBQUFEO0FBQWYsSUFBTSxXQUFOIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wbGVtZW50IHRoZSBUcmFjZUNvbGxlY3Rpb24gY2xhc3NcbmltcG9ydCB7IFRyYWNlcyB9IGZyb20gXCJAL21vbmFkL3RyYWNlL3RyYWNlc1wiO1xuaW1wb3J0IHsgVHJhY2UgfSBmcm9tIFwiQC9tb25hZC90cmFjZS90cmFjZVwiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2VDb2xsZWN0aW9uIGltcGxlbWVudHMgVHJhY2VzIHtcbiAgcHJvdGVjdGVkIHRyYWNlczogVHJhY2VbXSA9IFtdO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBzdGF0aWMgZW1wdHkoKTogVHJhY2VDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gbmV3IFRyYWNlQ29sbGVjdGlvbigpO1xuICB9XG5cbiAgcHVibGljIGFkZCh0cmFjZTogVHJhY2UpOiBUcmFjZUNvbGxlY3Rpb24ge1xuICAgIGNvbnN0IG5ld0NvbGxlY3Rpb24gPSBuZXcgVHJhY2VDb2xsZWN0aW9uKCk7XG4gICAgbmV3Q29sbGVjdGlvbi50cmFjZXMgPSBbLi4udGhpcy50cmFjZXMsIHRyYWNlXTtcbiAgICByZXR1cm4gbmV3Q29sbGVjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyAqW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmF0b3I8VHJhY2U+IHtcbiAgICBmb3IgKGNvbnN0IHRyYWNlIG9mIHRoaXMudHJhY2VzKSB7XG4gICAgICB5aWVsZCB0cmFjZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEltcGxlbWVudCB0aGUgVHJhY2VDb21tb24gY2xhc3NcbmltcG9ydCB7IFRyYWNlIH0gZnJvbSBcIkAvbW9uYWQvdHJhY2UvdHJhY2VcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNlQ29tbW9uIGltcGxlbWVudHMgVHJhY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSB0aW1lOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHRpbWU6IG51bWJlcikge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbShtZXNzYWdlOiBzdHJpbmcsIHRpbWU6IG51bWJlcik6IFRyYWNlQ29tbW9uIHtcbiAgICByZXR1cm4gbmV3IFRyYWNlQ29tbW9uKG1lc3NhZ2UsIHRpbWUpO1xuICB9XG5cbiAgcHVibGljIHJlYWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG5cbiAgcHVibGljIGF0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tIFwiQC9tb25hZC9vcHRpb25hbFwiO1xuXG5leHBvcnQgY2xhc3MgU29tZTxUPiBpbXBsZW1lbnRzIE9wdGlvbmFsPFQ+IHtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZTogVDtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHZhbHVlOiBUKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG9mPFQ+KHZhbHVlOiBUKTogU29tZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBTb21lKHZhbHVlKTtcbiAgfVxuXG4gIGJpbmQ8VT4oZm46ICh2YWx1ZTogVCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxVPiB7XG4gICAgcmV0dXJuIGZuKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgdW53cmFwKCk6IFQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgbWFwPFU+KGZuOiAodmFsdWU6IFQpID0+IFUpOiBPcHRpb25hbDxVPiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBmbih0aGlzLnZhbHVlKTtcbiAgICByZXR1cm4gU29tZS5vZihuZXdWYWx1ZSk7XG4gIH1cbn1cbiIsIi8vIERlZmluZSB0aGUgTm9uZSBjbGFzcyBpbXBsZW1lbnRpbmcgdGhlIE9wdGlvbmFsIGludGVyZmFjZVxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tIFwiQC9tb25hZC9vcHRpb25hbFwiO1xuXG5leHBvcnQgY2xhc3MgTm9uZSBpbXBsZW1lbnRzIE9wdGlvbmFsPG5ldmVyPiB7XG4gIHN0YXRpYyBvZigpOiBOb25lIHtcbiAgICByZXR1cm4gbmV3IE5vbmUoKTtcbiAgfVxuXG4gIGJpbmQoZm46ICh2YWx1ZTogbmV2ZXIpID0+IE9wdGlvbmFsPG5ldmVyPik6IE5vbmUge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW53cmFwKCk6IG5ldmVyIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSBvZiBOb25lIGNhbm5vdCBiZSB1bndyYXBwZWRcIik7XG4gIH1cblxuICBtYXA8VT4oZm46ICh2YWx1ZTogbmV2ZXIpID0+IFUpOiBOb25lIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dHMgfSBmcm9tIFwiQC9tb25hZC9jb250ZXh0L2NvbnRleHRzXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIkAvbW9uYWQvY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgeyBPcHRpb25hbFJlc3VsdCB9IGZyb20gXCJAL21vbmFkL3Jlc3VsdFwiO1xuaW1wb3J0IHsgU29tZSB9IGZyb20gXCJAL21vbmFkL21vbmFkcy9vcHRpb25hbC9zb21lXCI7XG5pbXBvcnQgeyBOb25lIH0gZnJvbSBcIkAvbW9uYWQvbW9uYWRzL29wdGlvbmFsL25vbmVcIjtcblxuZXhwb3J0IGNsYXNzIENvbnRleHRDb2xsZWN0aW9uIGltcGxlbWVudHMgQ29udGV4dHMge1xuICBwcml2YXRlIGNvbnRleHRzOiB7IFtrZXk6IHN0cmluZ106IENvbnRleHQgfSA9IHt9O1xuXG4gIHN0YXRpYyBlbXB0eSgpOiBDb250ZXh0Q29sbGVjdGlvbiB7XG4gICAgcmV0dXJuIG5ldyBDb250ZXh0Q29sbGVjdGlvbigpO1xuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogT3B0aW9uYWxSZXN1bHQ8Q29udGV4dD4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRzW2tleV0gPyBTb21lLm9mKHRoaXMuY29udGV4dHNba2V5XSkgOiBOb25lLm9mKCk7XG4gIH1cblxuICBhZGQoa2V5OiBzdHJpbmcsIGNvbnRleHQ6IENvbnRleHQpOiBDb250ZXh0Q29sbGVjdGlvbiB7XG4gICAgY29uc3QgbmV3Q29sbGVjdGlvbiA9IG5ldyBDb250ZXh0Q29sbGVjdGlvbigpO1xuICAgIG5ld0NvbGxlY3Rpb24uY29udGV4dHMgPSB7IC4uLnRoaXMuY29udGV4dHMgfTtcbiAgICBuZXdDb2xsZWN0aW9uLmNvbnRleHRzW2tleV0gPSBjb250ZXh0O1xuICAgIHJldHVybiBuZXdDb2xsZWN0aW9uO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogQ29udGV4dENvbGxlY3Rpb24ge1xuICAgIGNvbnN0IG5ld0NvbGxlY3Rpb24gPSBuZXcgQ29udGV4dENvbGxlY3Rpb24oKTtcbiAgICBuZXdDb2xsZWN0aW9uLmNvbnRleHRzID0geyAuLi50aGlzLmNvbnRleHRzIH07XG4gICAgZGVsZXRlIG5ld0NvbGxlY3Rpb24uY29udGV4dHNba2V5XTtcbiAgICByZXR1cm4gbmV3Q29sbGVjdGlvbjtcbiAgfVxuXG4gICpbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYXRvcjxDb250ZXh0PiB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb250ZXh0cykge1xuICAgICAgeWllbGQgdGhpcy5jb250ZXh0c1trZXldO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRWl0aGVyIH0gZnJvbSBcIkAvbW9uYWQvZWl0aGVyXCI7XG5pbXBvcnQgeyBPcHRpb25hbFJlc3VsdCwgUmVzdWx0IH0gZnJvbSBcIkAvbW9uYWQvcmVzdWx0XCI7XG5pbXBvcnQgeyBUcmFjZXMgfSBmcm9tIFwiQC9tb25hZC90cmFjZS90cmFjZXNcIjtcbmltcG9ydCB7IFRyYWNlIH0gZnJvbSBcIkAvbW9uYWQvdHJhY2UvdHJhY2VcIjtcbmltcG9ydCB7IENvbnRleHRzIH0gZnJvbSBcIkAvbW9uYWQvY29udGV4dC9jb250ZXh0c1wiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCJAL21vbmFkL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IHsgVHJhY2VDb2xsZWN0aW9uIH0gZnJvbSBcIkAvbW9uYWQvdHJhY2UvdHJhY2UtY29sbGVjdGlvblwiO1xuaW1wb3J0IHsgVHJhY2VDb21tb24gfSBmcm9tIFwiQC9tb25hZC90cmFjZS90cmFjZS1jb21tb25cIjtcbmltcG9ydCB7IENvbnRleHRDb2xsZWN0aW9uIH0gZnJvbSBcIkAvbW9uYWQvY29udGV4dC9jb250ZXh0LWNvbGxlY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIEZhaWx1cmUgaW1wbGVtZW50cyBFaXRoZXI8bmV2ZXI+LCBFcnJvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdHJhY2VzOiBUcmFjZXM7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dHM6IENvbnRleHRzO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmV2aW91czogRXJyb3IgfCBudWxsO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICB0cmFjZXM6IFRyYWNlcyxcbiAgICBjb250ZXh0czogQ29udGV4dHMsXG4gICAgcHJldmlvdXM6IEVycm9yIHwgbnVsbCxcbiAgKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLm5hbWUgPSBcIkZhaWx1cmVcIjtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMudHJhY2VzID0gdHJhY2VzO1xuICAgIHRoaXMuY29udGV4dHMgPSBjb250ZXh0cztcbiAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gIH1cblxuICBzdGF0aWMgZHVlVG8oXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICBwcmV2aW91cz86IEVycm9yIHwgbnVsbCxcbiAgICB0cmFjZT86IFRyYWNlIHwgbnVsbCxcbiAgICB0cmFjZXM/OiBUcmFjZXMgfCBudWxsLFxuICAgIGNvbnRleHRzPzogQ29udGV4dHMgfCBudWxsLFxuICApOiBGYWlsdXJlIHtcbiAgICAvLyBBZGQgRmFpbHVyZSB0cmFjZXMgYXMgbGFzdCBpdGVtLlxuICAgIHRyYWNlcyA9IHRyYWNlcyA/PyBUcmFjZUNvbGxlY3Rpb24uZW1wdHkoKTtcbiAgICBpZiAodHJhY2UpIHtcbiAgICAgIHRyYWNlcy5hZGQodHJhY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGYWxsYmFjayB0byBhIGNvbW1vbiB0cmFjZSBvZiB0aGUgbWVzc2FnZSB3aGVuIG5vIHNwZWNpZmljIHRyYWNlIHdhcyBwcm92aWRlZC5cbiAgICAgIHRyYWNlcy5hZGQoVHJhY2VDb21tb24uZnJvbShtZXNzYWdlLCBEYXRlLm5vdygpKSk7XG4gICAgfVxuXG4gICAgY29udGV4dHMgPSBjb250ZXh0cyA/PyBDb250ZXh0Q29sbGVjdGlvbi5lbXB0eSgpO1xuICAgIHJldHVybiBuZXcgRmFpbHVyZShcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBjb2RlLFxuICAgICAgdHJhY2VzLFxuICAgICAgY29udGV4dHMsXG4gICAgICBwcmV2aW91cyA/IHByZXZpb3VzIDogbnVsbCxcbiAgICApO1xuICB9XG5cbiAgYmluZChmbjogKHZhbHVlOiBuZXZlcikgPT4gUmVzdWx0PG5ldmVyPik6IFJlc3VsdDxuZXZlcj4ge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWFwKGZuOiAodmFsdWU6IG5ldmVyKSA9PiBuZXZlcik6IFJlc3VsdDxuZXZlcj4ge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlmdCh2YWx1ZTogbmV2ZXIpOiBSZXN1bHQ8bmV2ZXI+IHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVud3JhcCgpOiBuZXZlciB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsdWUgb2YgRmFpbHVyZSBjYW4gbm90IGJlIHVud3JhcHBlZFwiKTtcbiAgfVxuXG4gIGdldFRyYWNlcygpOiBUcmFjZXMge1xuICAgIHJldHVybiB0aGlzLnRyYWNlcztcbiAgfVxuXG4gIHdpdGhUcmFjZSh0cmFjZTogVHJhY2UpOiBSZXN1bHQ8bmV2ZXI+IHtcbiAgICB0aGlzLnRyYWNlcy5hZGQodHJhY2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2l0aENvbnRleHQoa2V5OiBzdHJpbmcsIGNvbnRleHQ6IENvbnRleHQpOiBSZXN1bHQ8bmV2ZXI+IHtcbiAgICB0aGlzLmNvbnRleHRzLmFkZChrZXksIGNvbnRleHQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Q29udGV4dChrZXk6IHN0cmluZyk6IE9wdGlvbmFsUmVzdWx0PENvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0cy5nZXQoa2V5KTtcbiAgfVxuXG4gIGdldENvbnRleHRzKCk6IENvbnRleHRzIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0cztcbiAgfVxuXG4gIGNsZWFyQ29udGV4dChrZXk6IHN0cmluZyk6IFJlc3VsdDxuZXZlcj4ge1xuICAgIHRoaXMuY29udGV4dHMucmVtb3ZlKGtleSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEVpdGhlciB9IGZyb20gXCJAL21vbmFkL2VpdGhlclwiO1xuaW1wb3J0IHsgT3B0aW9uYWxSZXN1bHQsIFJlc3VsdCB9IGZyb20gXCJAL21vbmFkL3Jlc3VsdFwiO1xuaW1wb3J0IHsgQ29udGV4dHMgfSBmcm9tIFwiQC9tb25hZC9jb250ZXh0L2NvbnRleHRzXCI7XG5pbXBvcnQgeyBUcmFjZXMgfSBmcm9tIFwiQC9tb25hZC90cmFjZS90cmFjZXNcIjtcbmltcG9ydCB7IFRyYWNlIH0gZnJvbSBcIkAvbW9uYWQvdHJhY2UvdHJhY2VcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiQC9tb25hZC9jb250ZXh0L2NvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNlQ29sbGVjdGlvbiB9IGZyb20gXCJAL21vbmFkL3RyYWNlL3RyYWNlLWNvbGxlY3Rpb25cIjtcbmltcG9ydCB7IENvbnRleHRDb2xsZWN0aW9uIH0gZnJvbSBcIkAvbW9uYWQvY29udGV4dC9jb250ZXh0LWNvbGxlY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIFN1Y2Nlc3M8VD4gaW1wbGVtZW50cyBFaXRoZXI8VD4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBUO1xuICBwcml2YXRlIHJlYWRvbmx5IHRyYWNlczogVHJhY2VzO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHRzOiBDb250ZXh0cztcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHZhbHVlOiBULCB0cmFjZXM6IFRyYWNlcywgY29udGV4dHM6IENvbnRleHRzKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudHJhY2VzID0gdHJhY2VzO1xuICAgIHRoaXMuY29udGV4dHMgPSBjb250ZXh0cztcbiAgfVxuXG4gIHN0YXRpYyBvZih2YWx1ZTogYW55LCB0cmFjZXM/OiBUcmFjZXMgfCBudWxsLCBjb250ZXh0cz86IENvbnRleHRzIHwgbnVsbCkge1xuICAgIHJldHVybiBuZXcgU3VjY2VzcyhcbiAgICAgIHZhbHVlLFxuICAgICAgdHJhY2VzID8/IFRyYWNlQ29sbGVjdGlvbi5lbXB0eSgpLFxuICAgICAgY29udGV4dHMgPz8gQ29udGV4dENvbGxlY3Rpb24uZW1wdHkoKSxcbiAgICApO1xuICB9XG5cbiAgYmluZChmbjogKHZhbHVlOiBUKSA9PiBSZXN1bHQ8VD4pOiBSZXN1bHQ8VD4ge1xuICAgIHJldHVybiBmbih0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGxpZnQodmFsdWU6IGFueSk6IFJlc3VsdDxUPiB7XG4gICAgcmV0dXJuIG5ldyBTdWNjZXNzKHZhbHVlLCB0aGlzLnRyYWNlcywgdGhpcy5jb250ZXh0cyk7XG4gIH1cblxuICBtYXAoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiBSZXN1bHQ8VD4ge1xuICAgIHJldHVybiBuZXcgU3VjY2Vzcyhmbih0aGlzLnZhbHVlKSwgdGhpcy50cmFjZXMsIHRoaXMuY29udGV4dHMpO1xuICB9XG5cbiAgdW53cmFwKCk6IFQge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0VHJhY2VzKCk6IFRyYWNlcyB7XG4gICAgcmV0dXJuIHRoaXMudHJhY2VzO1xuICB9XG5cbiAgd2l0aFRyYWNlKHRyYWNlOiBUcmFjZSk6IFJlc3VsdDxUPiB7XG4gICAgdGhpcy50cmFjZXMuYWRkKHRyYWNlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdpdGhDb250ZXh0KGtleTogc3RyaW5nLCBjb250ZXh0OiBDb250ZXh0KTogUmVzdWx0PFQ+IHtcbiAgICB0aGlzLmNvbnRleHRzLmFkZChrZXksIGNvbnRleHQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Q29udGV4dChrZXk6IHN0cmluZyk6IE9wdGlvbmFsUmVzdWx0PENvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0cy5nZXQoa2V5KTtcbiAgfVxuXG4gIGdldENvbnRleHRzKCk6IENvbnRleHRzIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0cztcbiAgfVxuXG4gIGNsZWFyQ29udGV4dChrZXk6IHN0cmluZyk6IFJlc3VsdDxUPiB7XG4gICAgdGhpcy5jb250ZXh0cy5yZW1vdmUoa2V5KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEF3YWl0aW5nIHt9XG4iXX0=