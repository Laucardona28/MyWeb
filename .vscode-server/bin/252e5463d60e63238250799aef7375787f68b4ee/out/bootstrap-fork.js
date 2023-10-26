"use strict";const performance=require("./vs/base/common/performance");performance.mark("code/fork/start");const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node");configureCrashReporter(),bootstrapNode.removeGlobalNodeModuleLookupPaths(),bootstrap.enableASARSupport(),process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH&&bootstrapNode.injectNodeModuleLookupPath(process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH),process.send&&process.env.VSCODE_PIPE_LOGGING==="true"&&pipeLoggingToParent(),process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS||handleExceptions(),process.env.VSCODE_PARENT_PID&&terminateWhenParentTerminates(),require("./bootstrap-amd").load(process.env.VSCODE_AMD_ENTRYPOINT);function pipeLoggingToParent(){function f(e){const s=[],i=[];if(e.length)for(let n=0;n<e.length;n++){let r=e[n];if(typeof r>"u")r="undefined";else if(r instanceof Error){const o=r;o.stack?r=o.stack:r=o.toString()}i.push(r)}try{const n=JSON.stringify(i,function(r,o){if(E(o)||Array.isArray(o)){if(s.indexOf(o)!==-1)return"[Circular]";s.push(o)}return o});return n.length>1e5?"Output omitted for a large object that exceeds the limits":n}catch(n){return`Output omitted for an object that cannot be inspected ('${n.toString()}')`}}function d(e){try{process.send&&process.send(e)}catch{}}function E(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)&&!(e instanceof RegExp)&&!(e instanceof Date)}function _(e,s){d({type:"__$console",severity:e,arguments:s})}function a(e,s){Object.defineProperty(console,e,{set:()=>{},get:()=>function(){_(s,f(arguments))}})}function u(e,s){const i=process[e],n=i.write;let r="";Object.defineProperty(i,"write",{set:()=>{},get:()=>(o,l,O)=>{r+=o.toString(l);const p=r.length>1048576?r.length:r.lastIndexOf(`
`);p!==-1&&(console[s](r.slice(0,p)),r=r.slice(p+1)),n.call(i,o,l,O)}})}process.env.VSCODE_VERBOSE_LOGGING==="true"?(a("info","log"),a("log","log"),a("warn","warn"),a("error","error")):(console.log=function(){},console.warn=function(){},console.info=function(){},a("error","error")),u("stderr","error"),u("stdout","log")}function handleExceptions(){process.on("uncaughtException",function(t){console.error("Uncaught Exception: ",t)}),process.on("unhandledRejection",function(t){console.error("Unhandled Promise Rejection: ",t)})}function terminateWhenParentTerminates(){const t=Number(process.env.VSCODE_PARENT_PID);typeof t=="number"&&!isNaN(t)&&setInterval(function(){try{process.kill(t,0)}catch{process.exit()}},5e3)}function configureCrashReporter(){process.env.VSCODE_CRASH_REPORTER_SANDBOXED_HINT&&addCrashReporterParameter("_sandboxed","true");const c=process.env.VSCODE_CRASH_REPORTER_PROCESS_TYPE;c&&addCrashReporterParameter("processType",c)}function addCrashReporterParameter(t,c){try{process.crashReporter&&typeof process.crashReporter.addExtraParameter=="function"&&process.crashReporter.addExtraParameter(t,c)}catch(f){console.error(f)}}

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/252e5463d60e63238250799aef7375787f68b4ee/core/bootstrap-fork.js.map
