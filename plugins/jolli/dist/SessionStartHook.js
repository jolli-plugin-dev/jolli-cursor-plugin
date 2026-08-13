#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var ui=Object.create;var Ue=Object.defineProperty;var pi=Object.getOwnPropertyDescriptor;var mi=Object.getOwnPropertyNames;var fi=Object.getPrototypeOf,gi=Object.prototype.hasOwnProperty;var p=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var it=(e,t)=>{for(var n in t)Ue(e,n,{get:t[n],enumerable:!0})},Tn=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of mi(t))!gi.call(e,o)&&o!==n&&Ue(e,o,{get:()=>t[o],enumerable:!(r=pi(t,o))||r.enumerable});return e};var bn=(e,t,n)=>(n=e!=null?ui(fi(e)):{},Tn(t||!e||!e.__esModule?Ue(n,"default",{value:e,enumerable:!0}):n,e)),hi=e=>Tn(Ue({},"__esModule",{value:!0}),e);function st(){return"cursor-plugin"}var he,at=p(()=>{"use strict";he="cursor-plugin/1.0.0"});function _i(e){return Si.some(t=>(e[t]??"")!=="")}function z(e){try{return(0,re.readFileSync)(e,"utf-8")}catch{return null}}function lt(e){try{return(0,re.realpathSync)(e)}catch{return(0,w.resolve)(e)}}function $e(e){try{return(0,re.statSync)(e).isDirectory()}catch{return!1}}function xn(e,t){let n=z((0,w.join)(e,"HEAD"))?.trim();return!n||!(We.test(n)||Ti.test(n))?!1:$e((0,w.join)(t,"objects"))&&$e((0,w.join)(t,"refs"))}function bi(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let i=(0,w.isAbsolute)(o)?o:(0,w.resolve)(e,o);return $e(i)?n?lt(i):i:null}function An(e,t){let n=z((0,w.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,w.isAbsolute)(n)?n:(0,w.resolve)(e,n);return t?lt(r):r}function oe(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(_i(n))return null;let o=r?lt(e):(0,w.resolve)(e);for(;;){let i=(0,w.join)(o,".git");if($e(i)){let l=An(i,r);return xn(i,l)?{worktreeRoot:o,gitDir:i,commonDir:l}:null}let s=z(i);if(s!==null){let l=bi(o,s,r);if(l===null)return null;let c=An(l,r);return xn(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,w.dirname)(o);if(a===o)return null;o=a}}function kn(e){let t=z((0,w.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function Ri(e){return wi.test(e)&&!e.split("/").includes("..")}function xi(e,t){let n=z((0,w.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let i=r.slice(0,o).trim();return We.test(i)?i:null}}return null}function vn(e){let t=z((0,w.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(We.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!Ri(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let i=z((0,w.join)(o,r))?.trim();if(i&&We.test(i))return i;let s=xi(o,r);if(s)return s}return null}var re,w,Si,We,Ti,wi,Be=p(()=>{"use strict";re=require("node:fs"),w=require("node:path"),Si=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];We=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,Ti=/^ref:\s*refs\//;wi=/^refs\/[A-Za-z0-9._\-/]+$/});function Dn(){return Ai.getStore()?.traceId}var Cn,yl,Ai,Nn=p(()=>{"use strict";Cn=require("node:async_hooks"),yl="0".repeat(32),Ai=new Cn.AsyncLocalStorage});function b(e){return e instanceof Error?e.message:String(e)}function ct(e){return e instanceof Error&&e.code==="ENOENT"}function dt(e){On=e}function se(){return Pn}function Li(e,t){let n=Ni[t]??Di;return In[e]>=In[n]}function Oi(e,t,n,r,o){let i=new Date().toISOString(),s=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=r.length)return d;let u=r[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${i}] ${s} [${t}]${c} ${a}`}function L(e){let t=e??On??process.cwd();return(0,ie.join)(t,ki,vi)}function ye(e){return String(e).padStart(2,"0")}async function Hi(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${ye(n.getUTCMonth()+1)}-${ye(n.getUTCDate())}_${ye(n.getUTCHours())}-${ye(n.getUTCMinutes())}-${ye(n.getUTCSeconds())}`;try{let o=(0,ie.join)(e,`debug_${r}.log`);for(let i=1;await ji(o);i++)o=(0,ie.join)(e,`debug_${r}_${i}.log`);await(0,C.rename)(t,o)}catch{return}try{let o=(await(0,C.readdir)(e)).filter(i=>Fi.test(i)).sort();for(let i=0;i<o.length-Mi;i++)await(0,C.unlink)((0,ie.join)(e,o[i])).catch(()=>{})}catch{}}async function ji(e){try{return await(0,C.stat)(e),!0}catch{return!1}}function Ui(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Pn||(Ln=Ln.then(async()=>{try{let t=L(),n=(0,ie.join)(t,Ci);await(0,C.stat)(t);try{(await(0,C.stat)(n)).size>Pi&&await Hi(t,n)}catch{}await(0,C.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function m(e){function t(n,r,o){let i=Oi(n,e,r,o,Dn());Ii&&(n==="info"||n==="debug")||(n==="warn"?console.warn(i):console.error(i)),Li(n,e)&&Ui(i)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var C,ie,ki,vi,Ci,W,On,Pn,In,Di,Ni,Ii,Ln,Pi,Mi,Fi,y=p(()=>{"use strict";C=require("node:fs/promises"),ie=require("node:path");Nn();ki=".jolli",vi="jollimemory",Ci="debug.log";W="jollimemory/summaries/v3";Pn=!1;In={debug:0,info:1,warn:2,error:3},Di="info",Ni={},Ii=!0;Ln=Promise.resolve(),Pi=2*1024*1024,Mi=10,Fi=/^debug_.*\.log$/});function Ke(e,t,n){return(0,Mn.promisify)(B.execFile)(e,t,{...Ge,...n??{}})}function G(e,t,n){return(0,B.execFileSync)(e,t,{...Ge,...n??{}})}var B,Mn,Ge,Z,F=p(()=>{"use strict";B=require("node:child_process"),Mn=require("node:util"),Ge={windowsHide:!0};Z=((e,t,n)=>Array.isArray(t)?(0,B.spawn)(e,t,{...Ge,...n??{}}):(0,B.spawn)(e,{...Ge,...t??{}}))});function ut(e,t){let n=Ee(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function Ee(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function Q(e){return e.replace(/\\/g,"/")}var K=p(()=>{"use strict"});function Un(e){let t=pt.get(e);if(t!==void 0)return t;let n=oe(e,{realpath:!0})?.worktreeRoot;if(n){let o=Q(n);return pt.set(e,o),o}let r=e;try{let o=G("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return pt.set(e,r),r}async function A(e,t){R.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await Ke("git",e,{maxBuffer:Wi,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,i={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return R.debug("git command failed (exit: %d, stderr: %s)",o,i.stderr.substring(0,200)),i}}async function mt(e,t){return(await A(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function ft(e,t){if(await mt(e,t))return;R.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await Ji(n,t);R.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,i=await Vi(o,t);R.debug("Created tree: %s",i);let s=await A(["commit-tree",i,"-m","Initialize Jolli Memory summaries"],t);if(s.exitCode!==0)throw new Error(`Failed to create commit: ${s.stderr}`);let a=s.stdout.trim();R.debug("Created commit: %s",a);let l=await A(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);R.info("Orphan branch '%s' created successfully",e)}function Ki(e){let t=e.toLowerCase();return Gi.some(n=>t.includes(n))}async function gt(e,t,n){R.debug("Reading file from branch: %s:%s",e,t);let r=await A(["show",`${e}:${t}`],n);return r.exitCode!==0?(Ki(r.stderr)?R.debug("File not found: %s:%s",e,t):R.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function ht(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return R.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((i,s)=>{let a=Z("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),d=!0,u=0,f=[],E=!1,_=0,S=!1,h=g=>{S||(S=!0,g?s(g):i(r))};a.stderr.on("data",g=>{l+=g.toString()}),a.stdout.on("data",g=>{for(c=Buffer.concat([c,g]);!S;){if(d){let T=c.indexOf(10);if(T<0)return;let k=c.subarray(0,T).toString("utf8");if(c=c.subarray(T+1),_>=t.length){h(new Error(`git cat-file --batch returned extra response: ${k}`));return}let D=t[_];if(_++,k.endsWith(" missing")){r.set(D,null);continue}let je=k.substring(k.lastIndexOf(" ")+1),ot=Number.parseInt(je,10);if(!Number.isFinite(ot)||ot<0){h(new Error(`Unexpected cat-file --batch header for ${D}: ${k}`));return}u=ot,f=[],d=!1,E=!0}if(u>0){if(c.length===0)return;let T=Math.min(u,c.length);if(f.push(c.subarray(0,T)),c=c.subarray(T),u-=T,u>0)return}if(E){if(c.length<1)return;c=c.subarray(1),E=!1;let T=t[_-1];r.set(T,Buffer.concat(f).toString("utf8")),f=[],d=!0}}}),a.on("close",g=>{if(g!==0){h(new Error(`git cat-file --batch failed (exit ${g}): ${l.trim()}`));return}if(_<t.length){h(new Error(`git cat-file --batch returned ${_} of ${t.length} expected responses; stderr=${l.trim()}`));return}h(null)}),a.on("error",g=>{h(g)}),a.stdin.on("error",g=>{h(g)});for(let g of t)a.stdin.write(`${e}:${g}
`);a.stdin.end()})}async function $n(e,t,n,r){await ft(e,r);let o=await A(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let i=o.stdout.trim();await Xi(e,i,n,t,r);let s=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;R.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,s,a)}async function yt(e,t,n){R.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await A(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return R.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(Bi).filter(i=>i.length>0);return R.debug("Found %d files",o.length),o}async function qi(e){let t=await A(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,Se.resolve)(e,n)}async function Wn(e){let t=await qi(e);return(0,Se.dirname)(t)}async function Bn(e){let t=await A(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}function Gn(e,t,n){return R.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let i=Z("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),s="",a="";i.stdout.on("data",l=>{s+=l.toString()}),i.stderr.on("data",l=>{a+=l.toString()}),i.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(s.trim())}),i.on("error",l=>{o(l)}),i.stdin.write(t),i.stdin.end()})}async function Ji(e,t){return Gn(["hash-object","-w","--stdin"],e,t)}async function Fn(e,t){let n=await A(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function Xi(e,t,n,r,o){let i=await Fn("GIT_AUTHOR_IDENT",o),s=await Fn("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];R.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(d=>!d.delete),c=r.filter(d=>d.delete);return new Promise((d,u)=>{let f=Z("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),E="";f.stderr.on("data",g=>{E+=g.toString()}),f.on("close",g=>{g!==0?u(new Error(`git fast-import failed (exit ${g}): ${E.trim()}`)):d()}),f.on("error",g=>{u(g)});let _=f.stdin;_.on("error",g=>{u(g)});let S=[];l.forEach((g,T)=>{let k=T+1,D=Buffer.from(g.content,"utf8");S.push(`blob
mark :${k}
data ${D.length}
`,D,`
`)});let h=Buffer.from(n,"utf8");S.push(`commit refs/heads/${e}
`,`author ${i}
`,`committer ${s}
`,`data ${h.length}
`,h,`
`,`from ${t}
`),l.forEach((g,T)=>{S.push(`M 100644 :${T+1} ${Hn(g.path)}
`)});for(let g of c)S.push(`D ${Hn(g.path)}
`);S.push(`done
`),Yi(_,S).then(()=>{_.end()},g=>{u(g)})})}async function Yi(e,t){for(let n of t)e.write(n)||await(0,jn.once)(e,"drain")}function Hn(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function Vi(e,t){return Gn(["mktree"],e,t)}var jn,Se,Wi,Bi,R,pt,Gi,H=p(()=>{"use strict";jn=require("node:events"),Se=require("node:path");y();F();Be();K();Wi=10*1024*1024,Bi="\0",R=m("GitOps"),pt=new Map;Gi=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});var Et=p(()=>{"use strict"});async function Jn(e,t,n){let r=`${e}.${process.pid}.${(0,qn.randomUUID)()}.tmp`;await(0,ee.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,ee.rename)(r,e)}catch(o){let i=o.code;if(i==="EPERM"||i==="EACCES")await(0,ee.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,ee.rm)(r,{force:!0});else throw o}}var qn,ee,Xn=p(()=>{"use strict";qn=require("node:crypto"),ee=require("node:fs/promises")});function zi(e){return new Promise(t=>setTimeout(t,e))}function Vn(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function St(e){try{let t=await(0,O.stat)(e),n=Date.now()-t.mtimeMs,r=await zn(e),o=r!==null&&!Vn(r);if(!o&&n<Yn)return!1;o?_e.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):_e.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,O.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return _e.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,O.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function zn(e){try{let n=(await(0,O.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function _t(e,t){let n=await zn(e);if(n!==null&&n!==String(process.pid)){_e.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,O.rm)(e,{force:!0})}catch(r){_e.error("Failed to release %s: %s",t,r.message)}}async function Tt(e,t){if(t.timeoutMs<=0)return St(e);let n=Date.now()+t.timeoutMs;for(;;){if(await St(e))return!0;if(Date.now()>=n)return!1;await zi(t.pollMs)}}var O,_e,Yn,bt=p(()=>{"use strict";O=require("node:fs/promises");y();_e=m("LockPrimitives"),Yn=300*1e3});var Zn,Il,wt=p(()=>{"use strict";Zn=require("node:async_hooks"),Il=new Zn.AsyncLocalStorage});function es(e){return Ke("git",["rev-parse","--git-common-dir"],{cwd:e})}async function os(e){let t=e??process.cwd(),n=er.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await es(t),i=o.trim(),s=(0,q.isAbsolute)(i)?i:(0,q.resolve)(t,i);r=(0,q.join)(s,"jollimemory")}catch{tr.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=L(t)}return er.set(t,r),r}async function is(e){let t=await os(e);return await(0,qe.mkdir)(t,{recursive:!0}),t}async function ss(e,t,n,r){let o=r.timeoutMs??rs,i=r.pollMs??nr;await(0,qe.mkdir)(e,{recursive:!0});let s=(0,q.join)(e,t),a=await Tt(s,{timeoutMs:o,pollMs:i});a||tr.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await _t(s,t)}}async function rr(e,t,n={}){return ss(e,ts,t,n)}async function or(e,t,n={}){let r=n.timeoutMs??ns,o=n.pollMs??nr,i=await is(e),s=(0,q.join)(i,Qn);if(!await Tt(s,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await _t(s,Qn)}}var qe,q,tr,Qn,ts,ns,nr,rs,er,Te=p(()=>{"use strict";qe=require("node:fs/promises"),q=require("node:path");y();F();bt();wt();tr=m("Locks");Qn="profile.lock",ts="config.lock",ns=5e3,nr=25,rs=5e3,er=new Map});var be=p(()=>{"use strict"});var ir=p(()=>{"use strict"});var sr=p(()=>{"use strict"});function ar(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function lr(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return ar(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return ar(o)?String.fromCodePoint(o):t}let r=as[n];return typeof r=="string"?r:t})}var as,cr=p(()=>{"use strict";as={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var ls,cs,dr=p(()=>{"use strict";ir();be();sr();cr();ls={decodeHtmlEntities:lr,lowercase:e=>e.toLowerCase()},cs=new Set(Object.keys(ls))});var ur=p(()=>{"use strict"});var pr=p(()=>{"use strict"});var mr=p(()=>{"use strict"});var xt,ds,At,nc,fr=p(()=>{"use strict";be();xt=["mcp__Figma__","mcp__figma__"],ds={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},At=Object.keys(ds),nc=new Set(At)});var us,ps,ms,gr=p(()=>{"use strict";fr();us="^[0-9a-zA-Z]{22,128}$",ps=xt.flatMap(e=>At.map(t=>`${e}${t}`)),ms={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...xt],exact:ps}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:us},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var hr=p(()=>{"use strict"});var yr=p(()=>{"use strict"});var Er=p(()=>{"use strict"});var Sr=p(()=>{"use strict"});var _r=p(()=>{"use strict"});var Tr=p(()=>{"use strict"});var kt,fs,gs,vt,mc,br=p(()=>{"use strict";be();kt=["mcp__Sentry__","mcp__sentry__"],fs="get_sentry_resource",gs="analyze_issue_with_seer",vt=[fs,gs],mc=new Set(vt)});var hs,ys,Es,Ss,wr=p(()=>{"use strict";br();hs=kt.flatMap(e=>vt.map(t=>`${e}${t}`)),ys="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",Es="^Issue [A-Za-z0-9_-]{1,128}$",Ss={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:Es,match:{claude:{prefixes:[...kt],exact:hs}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:ys},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Rr=p(()=>{"use strict"});var xr=p(()=>{"use strict"});var Ar=p(()=>{"use strict"});var kr=p(()=>{"use strict"});var vr=p(()=>{"use strict";ur();pr();mr();gr();hr();yr();Er();Sr();_r();Tr();wr();Rr();xr();Ar();kr()});var Ct=p(()=>{"use strict";be();dr();vr()});function Dt(e){return Rs(e)}function Ts(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function bs(e){let t=e.indexOf(ws);return t===-1?e:e.slice(0,t)}function Rs(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let T=1;T<t.length;T++)if(t[T].trim()==="---"){n=T;break}if(n===-1)return null;let r=t.slice(1,n),o=Ts(bs(t.slice(n+1).join(`
`))),i={},s=[],a=!1;for(let T of r){if(a){let D=/^\s+- (.+)$/.exec(T);if(D){try{let je=JSON.parse(D[1]);xs(je)&&s.push(je)}catch{}continue}a=!1}if(T.trim()==="fields:"){a=!0;continue}let k=/^([a-zA-Z]+):\s*(.+)$/.exec(T);k&&(i[k[1]]=k[2])}let l=T=>{let k=i[T];if(k!==void 0)try{let D=JSON.parse(k);return typeof D=="string"?D:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!As(c))return null;let u=c,f=d,E=l("title"),_=l("url"),S=l("referencedAt"),h=l("sourceToolName");return!E||S===void 0||!h?null:{mapKey:`${u}:${f}`,source:u,nativeId:f,title:E,referencedAt:S,toolName:h,..._!==void 0?{url:_}:{},...s.length>0?{fields:s}:{},...o.length>0?{description:o}:{}}}function xs(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function As(e){return e.length>0&&/^[\w-]+$/.test(e)}var rd,ws,we=p(()=>{"use strict";y();Ct();rd=m("ReferenceStore");ws="<!-- jolli:auto-note -->"});var Nt=p(()=>{"use strict"});var ad,Cr=p(()=>{"use strict";y();ad=m("SkillStore")});function Re(){return(0,Je.join)((0,Dr.homedir)(),".jolli","jollimemory")}async function Pt(e){let t=(0,Je.join)(e,Nr);try{let n=await(0,J.readFile)(t,"utf-8"),r=JSON.parse(n);return ks(r)}catch{return Ot.debug("No config file found in %s, using defaults",e),{}}}function ks(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function vs(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:(Ot.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function Mt(e){return Cs(e,Re())}async function Cs(e,t){return rr(t,async()=>{let{update:n,result:r}=e(await Pt(t));return n!==null&&(await Ds(n,t),Ot.info("Config saved to %s",t)),r})}async function Ds(e,t){let n=await Pt(t),r={...n,...vs(n,e)};await Jn((0,Je.join)(t,Nr),JSON.stringify(r,null,"	"))}async function Xe(){return Pt(Re())}function It(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function Ir(e){let t=!1,n={};for(let[s,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=It(a,Ns);l.changed&&(t=!0),n[s]=l.value}let r;if(e.notes!==void 0){r={};for(let[s,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=It(a,Is);l.changed&&(t=!0),r[s]=l.value}}let o;if(e.references!==void 0){o={};for(let[s,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=It(a,Ls);c.changed&&(t=!0),o[s]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var Lt,J,Dr,Je,Ot,Nr,Rd,xd,Ad,kd,Ns,Is,Ls,ae=p(()=>{"use strict";Lt=require("node:crypto"),J=require("node:fs/promises"),Dr=require("node:os"),Je=require("node:path");y();Et();Xn();Te();we();Nt();Cr();Ot=m("SessionTracker"),Nr="config.json",Rd=2880*60*1e3;xd=2880*60*1e3,Ad=10080*60*1e3,kd=(0,Lt.randomBytes)(4).toString("hex"),Ns=["ignored","branch","editCount"],Is=["ignored","branch"],Ls=["ignored","branch","commitHash","contentHashAtCommit"]});async function Ut(e,t,n={}){await(0,X.mkdir)((0,Lr.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,X.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,X.rename)(r,e)}catch(o){throw await(0,X.unlink)(r).catch(()=>{}),o}}var X,Lr,$t=p(()=>{"use strict";X=require("node:fs/promises"),Lr=require("node:path")});function Fs(e){return{...e,manuallyDisabled:e.userDisabled===!0||e.cutoverFence!==void 0}}async function Hs(e){let t=oe(e)?.commonDir;if(t)return t;let n=await A(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,P.isAbsolute)(r)?r:(0,P.join)(e,r):null}async function Mr(e){let t=await Hs(e);if(t===null)return{profilePath:(0,P.join)(L(e),Or),legacyMarkerPath:null};let n=(0,P.dirname)(t);return{profilePath:(0,P.join)(L(n),Or),legacyMarkerPath:(0,P.join)(t,Os,Ps)}}async function Wt(e){try{let t=await(0,xe.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function js(e){try{return await(0,xe.stat)(e),!0}catch{return!1}}async function Us(e,t){await Ut(e,`${JSON.stringify(t,null,"	")}
`)}async function $s(e){let t;try{t=await Bn(e)}catch{t=[e]}for(let n of t)if(await js((0,P.join)(L(n),Ms)))return!0;return!1}async function Fr(e){let{profilePath:t}=await Mr(e),n=await Wt(t);if(n.userDisabled!==void 0)return n.userDisabled===!0;if(n.manuallyDisabled!==void 0)return Pr(e,t,n.manuallyDisabled===!0);let r=await $s(e);return Pr(e,t,r)}async function Pr(e,t,n){let r=await or(e,async()=>{let o=await Wt(t);return o.userDisabled!==void 0?o.userDisabled===!0:(await Us(t,Fs({...o,userDisabled:n})),n)}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function Ae(e){let{profilePath:t}=await Mr(e);return(await Wt(t)).cutoverFence??null}var xe,P,Or,Os,Ps,Ms,ke=p(()=>{"use strict";xe=require("node:fs/promises"),P=require("node:path");y();F();$t();Be();H();Te();Or="profile.json",Os="jollimemory",Ps="backfill-card-dismissed",Ms="disabled-by-user"});function Hr(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var jr=p(()=>{"use strict"});var Ur,$r,Wr,Br,Gr,Kr,qr,Ye=p(()=>{"use strict";Ur=`
-- \u2500\u2500 Metadata \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
CREATE TABLE schema_meta (key TEXT PRIMARY KEY, value TEXT) STRICT;

-- \u2500\u2500 Repo registry \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- \`id\` is the surrogate key every other table references. repo_identity is a
-- normalized remote URL that legitimately CHANGES (a local-only repo gaining a
-- remote, a checkout moving), and it is 60-odd bytes that would otherwise ride
-- in every row and every composite index \u2014 measured, that one substitution took
-- commit_branches from 37.3 MiB to 30.2 MiB before any other change. It stays as
-- a UNIQUE natural key because that is what a worktree resolves to at startup.
--
-- Rows are NEVER deleted; disable is an UPDATE of \`disabled_at\`, so history
-- stays queryable and no single statement can wipe a repo's memories. The
-- trigger that enforces it is in DashboardDb, with the reasoning for why it is
-- the one trigger that survived.
-- Every column here is either read today or is a fact about the repo that only
-- this row records. \`bootstrap_cursor\` was neither \u2014 it was declared and never
-- written by anything \u2014 so it is the one that went.
CREATE TABLE repos (
  id                INTEGER PRIMARY KEY,
  repo_identity     TEXT NOT NULL UNIQUE,
  repo_name         TEXT NOT NULL,
  worktree_root     TEXT NOT NULL,
  remote_url        TEXT,
  enabled_at        TEXT NOT NULL,
  disabled_at       TEXT,
  last_ingested_at  TEXT,
  bootstrap_state   TEXT NOT NULL DEFAULT 'pending'
) STRICT;

-- \u2500\u2500 Sessions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- event_id embeds repo_identity + source + sessionId, so the PK IS the natural
-- key and every write can be a plain idempotent UPSERT.
-- Instants are stored ONCE, as epoch ms. The ISO twins (\`started_at\`,
-- \`updated_at\`) held the same instant a second time and were read by nothing \u2014
-- every query orders and filters on the \`_ms\` column. The instants themselves
-- stay: \`started_at_ms\` cannot be recovered from \`updated_at_ms\` and duration.
CREATE TABLE sessions (
  event_id        TEXT PRIMARY KEY,
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  source          TEXT NOT NULL,
  session_id      TEXT NOT NULL,
  title           TEXT,
  started_at_ms   INTEGER,
  updated_at_ms   INTEGER NOT NULL,
  message_count   INTEGER,
  duration_ms     INTEGER,
  model           TEXT,
  input_tokens    INTEGER NOT NULL DEFAULT 0,
  output_tokens   INTEGER NOT NULL DEFAULT 0,
  cached_tokens   INTEGER NOT NULL DEFAULT 0,
  est_cost_usd    REAL,
  token_coverage  TEXT NOT NULL DEFAULT 'sessions-only',
  prices_as_of    TEXT,
  UNIQUE (repo_id, source, session_id)
) STRICT;
CREATE INDEX ix_sessions_repo_time ON sessions(repo_id, updated_at_ms);
CREATE INDEX ix_sessions_time ON sessions(updated_at_ms);
CREATE INDEX ix_sessions_source ON sessions(source);

-- Per-session, per-model split. A session can switch models mid-stream, so
-- sessions.model is a display convenience and THIS is authoritative.
--
-- Keyed on session_event_id rather than an integer: measured at 24 and 114 rows,
-- so the key-shape work that paid for itself on the commits chain would buy
-- nothing here while touching StopHook, the VS Code tick and two projections.
CREATE TABLE session_model_usage (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  model            TEXT NOT NULL,
  -- No \`provider\` column: it was recorded per row and selected by nothing.
  -- Pricing resolves the provider from the model id (see core/Pricing.ts), so a
  -- stored copy is a second answer to a question that already has one.
  input_tokens     INTEGER NOT NULL DEFAULT 0,
  output_tokens    INTEGER NOT NULL DEFAULT 0,
  cached_tokens    INTEGER NOT NULL DEFAULT 0,
  est_cost_usd     REAL,
  PRIMARY KEY (session_event_id, model)
) STRICT;
CREATE INDEX ix_smu_model ON session_model_usage(model);

CREATE TABLE session_tool_use (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  tool_name        TEXT NOT NULL,
  kind             TEXT NOT NULL,
  server           TEXT,
  calls            INTEGER NOT NULL DEFAULT 0,
  -- This table counts CALLS, nothing more. It used to carry a metadata_json
  -- column holding each recall call's own hit/miss and served commits, parsed
  -- back out of Claude's transcript; \`recall_receipts\` replaced that (see its
  -- DDL for why), so the column has no writer and no reader and is gone from
  -- the definition. Databases created before the change still have it \u2014 an
  -- unused nullable column, harmless, and cheaper to leave than to rewrite a
  -- STRICT table for.
  -- "kind" is part of the key, not just a column: a skill and a builtin can
  -- share a name, and the parser already groups on (kind, name). Keying on the
  -- name alone would silently merge two different things into one row.
  PRIMARY KEY (session_event_id, tool_name, kind)
) STRICT;
CREATE INDEX ix_stu_kind ON session_tool_use(kind);
CREATE INDEX ix_stu_server ON session_tool_use(server);

-- \u2500\u2500 Commits \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Child tables reference \`id\`, never \`event_id\`. event_id is the producer's
-- idempotency key \u2014 'commit:<remote URL>:<40-hex sha>', measured at 80 bytes
-- average \u2014 and it is used only to dedupe at write time. Carrying it in the
-- children instead is what made commit_branches the largest object in the
-- database while holding no business data at all.
--
-- The memory projections that used to trail here (turns, tokens, est_cost_usd,
-- ticket_id, plus the commit_insights / commit_references / session_commit_link
-- child tables) are GONE (A3b): a copy falls behind whenever a memory is
-- regenerated, so the dashboard reads them from the memory tables instead \u2014
-- generated columns on \`memories\`, json_each over summary_json for insights,
-- transcript_sessions x memory_transcripts for the session link \u2014 which
-- recordCommitsFromWorker refreshes live at the same moment it emits
-- commit.summary. Do not reintroduce a stored copy; dev databases created
-- before the drop may still carry the dead columns/tables harmlessly
-- (pre-release, nothing reads or writes them).
--
-- work_category is deliberately NOT among them: it never was a summary field but
-- a mode computed over the topics' categories, and category belongs to a TOPIC.
-- Pages that aggregate by category read \`memory_topics\`; pages that want a
-- commit-level LABEL derive the mode at query time, so there is no stored copy
-- to fall behind.
-- Same instant-stored-once rule as \`sessions\`: \`committed_at\` (ISO) rode beside
-- \`committed_at_ms\` and no query read it. The author columns stay \u2014 nothing
-- displays them today, but they are the commit's own facts and re-deriving them
-- means re-walking git.
CREATE TABLE commits (
  id              INTEGER PRIMARY KEY,
  event_id        TEXT NOT NULL UNIQUE,
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  hash            TEXT NOT NULL,
  branch          TEXT,
  message         TEXT,
  author_name     TEXT,
  author_email    TEXT,
  committed_at_ms INTEGER NOT NULL,
  files_changed   INTEGER,
  insertions      INTEGER,
  deletions       INTEGER,
  UNIQUE (repo_id, hash)
) STRICT;
CREATE INDEX ix_commits_repo_time ON commits(repo_id, committed_at_ms);
CREATE INDEX ix_commits_branch ON commits(branch);





-- Branch-name dictionary. Measured: 87 distinct names referenced by 102,767
-- rows, average name length 27.4 bytes, so the names were repeating tens of
-- thousands of times \u2014 one of them 2,098 times by itself.
CREATE TABLE branches (
  id      INTEGER PRIMARY KEY,
  repo_id INTEGER NOT NULL REFERENCES repos(id),
  name    TEXT NOT NULL,
  UNIQUE (repo_id, name)
) STRICT;

-- Commit<->branch reachability. A commit is reachable from many branches, so
-- commits.branch cannot answer "group by branch" correctly \u2014 it is only a
-- heuristic "first seen on" label. Refreshed by unioning per-ref 'git rev-list',
-- never by 'git branch --contains' per commit.
--
-- The row count is correct and not worth optimizing: measured, 1,078 commits are
-- each reachable from 68 branches, because old branches all contain main's
-- history. O(commit x reachable branches) is the true answer to reachability.
-- What was wrong was 380 bytes per row for 3 bytes of information.
--
-- This is the ONE table with no repo_id: the boundary comes from
-- branches.repo_id, and "commits on branch X of repo Y" is two hops
-- (branches(repo_id,name) -> branch_id -> ix_cb_branch). One extra join, and the
-- table plus its indexes went from 30.19 MiB to 2.04 MiB on real data.
-- WITHOUT ROWID because a pure key table does not need a second rowid index.
CREATE TABLE commit_branches (
  commit_id INTEGER NOT NULL REFERENCES commits(id)  ON DELETE CASCADE,
  branch_id INTEGER NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
  PRIMARY KEY (commit_id, branch_id)
) STRICT, WITHOUT ROWID;
CREATE INDEX ix_cb_branch ON commit_branches(branch_id, commit_id);

CREATE TABLE commit_files (
  commit_id  INTEGER NOT NULL REFERENCES commits(id) ON DELETE CASCADE,
  path       TEXT NOT NULL,
  insertions INTEGER,
  deletions  INTEGER,
  PRIMARY KEY (commit_id, path)
) STRICT, WITHOUT ROWID;
CREATE INDEX ix_commit_files_path ON commit_files(path);

-- \u2500\u2500 Workspace \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Transient, latest-wins. A detached HEAD has no branch name; branch_key holds
-- the '' sentinel so the PK stays usable (SQLite treats every NULL as distinct,
-- which would let detached-HEAD rows accumulate without bound).
CREATE TABLE worktree_status (
  repo_id        INTEGER NOT NULL REFERENCES repos(id),
  branch_key     TEXT NOT NULL DEFAULT '',
  branch         TEXT,
  files_changed  INTEGER,
  insertions     INTEGER,
  deletions      INTEGER,
  -- Instant stored once, as epoch ms \u2014 see \`sessions\`.
  observed_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, branch_key)
) STRICT;

-- \u2500\u2500 Write-ahead log / durable ingest queue \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- StatsWriter lands every event here as 'pending' and COMMITS before it
-- projects, so a crash mid-projection leaves something to drain. event_id is
-- deliberately NOT unique: the same event may be written repeatedly, and
-- idempotency lives in the projection tables.
--
-- This is the one table that keeps \`repo_identity\` instead of \`repo_id\`, and the
-- reason is the same one that makes it a separate transaction: the log's job is
-- to get the raw event onto disk before anything is interpreted. Resolving an id
-- would make that first commit depend on a repos row existing, which is exactly
-- the ordering assumption the log exists to avoid \u2014 producers write in any order,
-- and a session event can arrive before \`jolli enable\` has projected the
-- registry. Storing what the producer said keeps the log a log; the projection
-- resolves the id on the way out.
CREATE TABLE events_raw (
  seq               INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id          TEXT,
  repo_identity     TEXT,
  type              TEXT NOT NULL,
  schema_version    INTEGER NOT NULL,
  producer_kind     TEXT,
  producer_version  TEXT,
  occurred_at       TEXT,
  received_at       TEXT NOT NULL,
  data_json         TEXT NOT NULL,
  projection_status TEXT NOT NULL DEFAULT 'pending',
  claimed_at_ms     INTEGER,
  attempts          INTEGER NOT NULL DEFAULT 0
) STRICT;
-- Only ONE index, and it is the drain's: every events_raw query filters on
-- projection_status (+ seq, attempts, schema_version) or prunes on received_at.
-- The three that used to sit here (on type, on (repo_identity, occurred_at) and
-- on event_id) indexed columns no query has ever filtered on \u2014 they cost a write
-- per enqueue on the blocking commit path and bought nothing. Re-add one only
-- alongside the query that needs it.
CREATE INDEX ix_events_pending ON events_raw(projection_status, seq);

-- \u2500\u2500 Gap-recovery cursors \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A fast path for append-only history plus a rewrite detector \u2014 NOT the
-- correctness mechanism. Adds/changes are handled by idempotent UPSERT and
-- deletes by set reconciliation, because a high-water mark alone misses
-- out-of-order updates, history rewrites and deletions.
CREATE TABLE ingest_cursors (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  source        TEXT NOT NULL,
  cursor        TEXT NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, source)
) STRICT;

-- \u2500\u2500 Aggregates \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- There are none. agg_repo_totals lived here and was removed unused: every
-- reader that wants tokens, cost or activity spans computes them live from the
-- detail tables (see the ~20 such queries in DashboardQuery), so the aggregate
-- was maintained on the projection path and read by nothing but a single
-- session count \u2014 which the Repositories page now counts live, the same way it
-- already counted memories. Read-time aggregation over the indexed detail rows
-- is what this schema is shaped for; re-adding a stored aggregate needs a
-- measured query that is actually too slow without it, not the assumption that
-- one will be.
-- \u2500\u2500 Provider usage / quota \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- There is none. \`usage_observations\` (and the Claude-shaped \`usage_samples\`
-- before it) recorded account-level limit pressure read out of Claude Code's own
-- local cache; the whole feature \u2014 reader, sampler, model, cards \u2014 was removed.
-- A database created before that still carries the table; it is simply unused,
-- and nothing here recreates it. Bringing quota tracking back means designing it
-- against whatever provider actually exposes it, not reviving this shape.

-- \u2500\u2500 Code graph \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- PARKED, not deleted. The graph page was removed (no view token, no route, no
-- reader), which left this table written by DbBackfill and read by nothing \u2014 a few
-- hundred KB of JSON per repo per import, for no query. The writer is commented
-- out in lockstep (StatsWriter.recordRepoGraph, DbBackfill's call site); uncomment
-- all three together if the page returns. Kept as commented DDL rather than
-- dropped from history because this is the exact shape it would come back to.
--
-- CREATE TABLE repo_graphs (
--   repo_id        INTEGER PRIMARY KEY REFERENCES repos(id),
--   generated_at   TEXT NOT NULL,
--   schema_version INTEGER NOT NULL,
--   categories     INTEGER NOT NULL DEFAULT 0,
--   topics         INTEGER NOT NULL DEFAULT 0,
--   units          INTEGER NOT NULL DEFAULT 0,
--   edges          INTEGER NOT NULL DEFAULT 0,
--   graph_json     TEXT NOT NULL
-- ) STRICT;
`,$r=`
CREATE TABLE recall_receipts (
  -- The producer's own idempotency key (statsEventId), so a re-drained event
  -- converges on one row instead of appending a duplicate call.
  receipt_id   TEXT PRIMARY KEY,
  repo_id      INTEGER NOT NULL REFERENCES repos(id),
  at_ms        INTEGER NOT NULL,
  -- 'mcp' | 'cli'. Kept because the two answer different questions about
  -- adoption, and because a surface that stops reporting is only visible here.
  surface      TEXT NOT NULL,
  session_id   TEXT,
  hit          INTEGER NOT NULL,
  commit_count INTEGER NOT NULL DEFAULT 0,
  -- JSON array of {hash, date} for a hit; NULL for a miss. Powers "distinct
  -- memories used" and the stale-memory count, neither of which a bare
  -- commit_count can answer.
  commits_json TEXT
) STRICT;
CREATE INDEX ix_recall_receipts_repo_at ON recall_receipts(repo_id, at_ms);
`,Wr=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,Br=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,Gr=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,Kr=`
CREATE TABLE schema_migrations (
  seq           INTEGER PRIMARY KEY AUTOINCREMENT,
  -- Which array position it ran at. DIAGNOSTIC ONLY \u2014 nothing decides anything
  -- from it. Kept because "slot 5" is what a bug report says out loud.
  slot          INTEGER NOT NULL,
  name          TEXT    NOT NULL,
  outcome       TEXT    NOT NULL CHECK (outcome IN ('applied','failed','skipped','baseline')),
  -- \`JOLLI_CLIENT_HEADER\` \u2014 '<kind>/<version>', e.g. 'cli/0.99.11' or
  -- 'vscode-plugin/0.99.11'. The surface identity the user would go and upgrade.
  applied_by    TEXT    NOT NULL,
  applied_at_ms INTEGER NOT NULL,
  duration_ms   INTEGER NOT NULL,
  ddl           TEXT    NOT NULL
) STRICT;
CREATE INDEX ix_schema_migrations_name ON schema_migrations(name, seq);
`,qr=`
-- Per-repo control state (JSON values): 'orphan-import', 'cutover',
-- 'v5-migration' (the raw bytes of the orphan's schema-v5-migration.json \u2014 a
-- completed-marker whose absence would make the v5 migration re-run), ...
-- Kept out of schema_meta, which is a whole-database singleton. A key-value
-- table rather than columns on \`repos\` because \`cutover\` has to be written in
-- the same transaction as the data it certifies, and because adding a column
-- after release is a cross-surface release event while adding a marker is an
-- INSERT.
CREATE TABLE repo_state (
  repo_id INTEGER NOT NULL REFERENCES repos(id),
  key     TEXT NOT NULL,
  value   TEXT NOT NULL,
  PRIMARY KEY (repo_id, key)
) STRICT;

-- \u2500\u2500 memories: identity, topology and content in one row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- \`children[]\` is stored as edges + array position rather than nested copies of
-- the child files (measured: the nesting is 31.3% of the bytes). The key stays
-- present in \`summary_json\` with its value emptied to \`[]\` \u2014 removing it and
-- appending it back during reassembly would reorder the JSON keys, and the
-- byte-for-byte equivalence check does not allow that difference.
--
-- root_hash and depth are denormalizations the write module maintains: the tree
-- measures 17 levels deep, so without them every root read is a recursive query.
-- depth doubles as cycle detection \u2014 a cycle makes inspection query 1 return
-- rows.
CREATE TABLE memories (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  commit_hash   TEXT NOT NULL,

  parent_hash   TEXT,
  child_pos     INTEGER,
  root_hash     TEXT NOT NULL,
  depth         INTEGER NOT NULL DEFAULT 0,

  summary_json   TEXT NOT NULL,
  -- A REAL column, not a generated one: measured 313/313, summary files carry
  -- no \`treeHash\` \u2014 it exists only in index.json entries, computed from git at
  -- index-build time. It is load-bearing for alias scanning (tree-hash matching
  -- finds "same content, new sha"), so the importer copies it off the index
  -- entry and the write module stamps it via getTreeHash, exactly as
  -- flattenSummaryTree does today. NULL when git could not answer.
  tree_hash      TEXT,
  -- Same story as \`tree_hash\`, and a REAL column for the same reason: legacy
  -- (pre-v4) summaries carry their root diff stats ONLY on the index entry,
  -- never in the body. \`synthIndex\` rebuilds index.json from these rows and
  -- reads \`diffStats\` off the body, so without this the badge \`jolli view\`,
  -- the sidebar and the SessionStart briefing render is lost for every legacy
  -- root, and the rebuilt entry stops matching the file the branch carried.
  -- Not folded into \`summary_json\`: that blob has to reproduce the source file
  -- byte-for-byte for the cutover compare. NULL means the body is the only
  -- source, which is every v4-and-later memory.
  index_diff_stats_json TEXT,
  first_seen_ms  INTEGER NOT NULL,
  written_at_ms  INTEGER NOT NULL,
  -- Hand-written, not generated: date functions are barred from generated
  -- columns. It must be derived from the same field as \`commit_date\`, and no
  -- constraint can enforce that. NOT NULL plus an optional source field means a
  -- missing \`commitDate\` fails the whole row, so the write module falls back
  -- commitDate -> git commit time -> first_seen_ms before giving up.
  commit_date_ms INTEGER NOT NULL,

  -- STORED only for columns that feed an index or get read as a whole column.
  -- STORED is also restricted to TEXT (see this module's header): all three are.
  branch          TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.branch'))            STORED,
  commit_message  TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitMessage'))     STORED,
  commit_type     TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitType'))        STORED,

  commit_date     TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitDate'))        VIRTUAL,
  commit_author   TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitAuthor'))      VIRTUAL,
  generated_at    TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.generatedAt'))       VIRTUAL,
  recap           TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.recap'))             VIRTUAL,
  ticket_id       TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.ticketId'))          VIRTUAL,
  jolli_doc_id    TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.jolliDocId'))        VIRTUAL,
  -- No topics_json column: the topics are projected into \`memory_topics\` instead,
  -- for the reason spelled out on that table.
  -- Numeric columns pass through a json_type gate so an off-type value degrades
  -- to NULL \u2014 the case the pages already handle for a missing field \u2014 instead of
  -- handing a REAL back from an INTEGER column. VIRTUAL escapes STRICT's type
  -- check entirely, so nothing else would notice.
  turns           INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.conversationTurns')='integer'  THEN json_extract(summary_json,'$.conversationTurns')  END) VIRTUAL,
  tokens          INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.conversationTokens')='integer' THEN json_extract(summary_json,'$.conversationTokens') END) VIRTUAL,
  est_cost_usd    REAL    GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.estimatedCostUsd') IN ('integer','real') THEN json_extract(summary_json,'$.estimatedCostUsd') END) VIRTUAL,
  files_changed   INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.filesChanged')='integer' THEN json_extract(summary_json,'$.diffStats.filesChanged') END) VIRTUAL,
  insertions      INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.insertions')='integer'   THEN json_extract(summary_json,'$.diffStats.insertions')   END) VIRTUAL,
  deletions       INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.deletions')='integer'    THEN json_extract(summary_json,'$.diffStats.deletions')    END) VIRTUAL,

  PRIMARY KEY (repo_id, commit_hash),
  UNIQUE (repo_id, parent_hash, child_pos),
  -- Shape handed to the engine: a root has no position, a child must have one.
  -- Blocks "root with a position" and "child without one" in a single check.
  CHECK ((parent_hash IS NULL) = (child_pos IS NULL)),
  -- Non-negative, so a reorder's temporaries have to offset upward. A negative
  -- scheme would need this check relaxed for the duration of every reorder.
  CHECK (child_pos IS NULL OR child_pos >= 0),
  -- Deliberately as loose as 2x REORDER_OFFSET: it must admit the reorder's own
  -- temporaries, so it cannot be the tight bound. What it catches is a retried
  -- reorder offsetting crash residue a second time. The tight bound
  -- (final positions < REORDER_OFFSET) is an assertion in the write module,
  -- because as a CHECK it would reject the temporaries.
  CHECK (child_pos IS NULL OR child_pos < 2000000),
  -- Self-reference: deleting a root deletes the whole tree. Pruning is therefore
  -- a whole-tree decision by root_hash, never a row-by-row one by date.
  FOREIGN KEY (repo_id, parent_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;
CREATE INDEX ix_mem_root   ON memories(repo_id, root_hash);
CREATE INDEX ix_mem_branch ON memories(repo_id, branch, commit_date_ms);
CREATE INDEX ix_mem_date   ON memories(repo_id, commit_date_ms);
CREATE INDEX ix_mem_ticket ON memories(repo_id, ticket_id);

-- \u2500\u2500 memory_topics: the summary's topics[], one row per topic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A topic is "one independent problem/goal within a commit" (TopicSummary), and
-- \`category\` / \`importance\` belong to IT, not to the commit \u2014 the model is asked
-- for one category per topic, not one per commit. Measured on this repo: 727
-- memories carry 5,159 topics, 7.6 on average and up to 43.
--
-- The old read model collapsed them with a mode ("the commit's dominant
-- category") and stored one value per commit. That loses information the data
-- plainly has: by topic the split is bugfix 2,050 / feature 1,292, while by
-- commit-mode it is 39 / 36 \u2014 and \`security\` (211 topics) and \`docs\` (30) vanish
-- entirely, because neither ever wins a commit's vote. 15% of commits had a TIE
-- at the top, where "dominant" silently meant "whichever topic came first".
--
-- Why a table rather than reading them out of summary_json, all four measured on
-- the real 727 rows:
--   GROUP BY commits.work_category   0.87 ms  \u2014 fast, wrong shape
--   parse topics in JS               37 ms    \u2014 wrong shape, and ships 11.2 MiB
--   json_each over summary_json      303 ms   \u2014 right shape, unusable
--   this table                       4.88 ms  \u2014 right shape, fast
-- Same reason \`transcript_sessions\` exists: a queryable field sitting inside a
-- payload SQL has to parse per row is not queryable. summary_json stays the
-- source of truth and keeps the full topics for byte-faithful reassembly; this is
-- a projection of it, replaced as a whole group on every write.
--
-- Only the queryable fields are projected. decisions / trigger / response are
-- long prose that only ever gets displayed, and the pages already read those
-- from summary_json \u2014 a second copy would be bytes with no query behind them.
CREATE TABLE memory_topics (
  repo_id     INTEGER NOT NULL,
  commit_hash TEXT NOT NULL,
  pos         INTEGER NOT NULL,          -- topics[] index; ordering is restored from it
  category    TEXT,                      -- TopicCategory; NULL when the model omitted it
  importance  TEXT,                      -- 'major' | 'minor'
  title       TEXT NOT NULL,
  PRIMARY KEY (repo_id, commit_hash, pos),
  CHECK (pos >= 0),
  FOREIGN KEY (repo_id, commit_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;
-- Leads with repo_id because every page query is repo-scoped; category second
-- because "group by category" is the whole point of the table.
CREATE INDEX ix_mtopic_category ON memory_topics(repo_id, category);

-- \u2500\u2500 commit aliases (index.json's third top-level key) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A rewritten SHA -> the live memory with the same tree hash. Step 2 of
-- getSummary()'s four-step lookup. Tree-hash matching costs a git subprocess
-- per candidate, so a computed alias is kept forever; in index.json every
-- rebuild path had to remember to copy them across (one of five did not), and a
-- table has no rebuild to forget.
CREATE TABLE commit_aliases (
  repo_id     INTEGER NOT NULL,
  old_hash    TEXT NOT NULL,
  target_hash TEXT NOT NULL,
  created_ms  INTEGER NOT NULL,
  PRIMARY KEY (repo_id, old_hash),
  FOREIGN KEY (repo_id, target_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;

-- \u2500\u2500 transcripts (keyed by TranscriptId \u2014 UUID or legacy commit hash) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- sessions_blob is zlib-compressed JSON: no generated columns, not indexed,
-- stored and fetched whole. It is the only compressible block in the database
-- (everywhere else has a query dependency on the text) and the second largest.
CREATE TABLE transcripts (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  transcript_id TEXT NOT NULL,
  sessions_blob BLOB NOT NULL,
  written_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, transcript_id)
) STRICT;

-- Many-to-many: one transcript is shared by several nodes of an amend chain,
-- and one memory can reference several. No array index is stored \u2014
-- \`summary.transcripts\` carries the order in summary_json and that is what
-- reassembly uses, so this table only answers queries and owes no fidelity.
CREATE TABLE memory_transcripts (
  repo_id       INTEGER NOT NULL,
  commit_hash   TEXT NOT NULL,
  transcript_id TEXT NOT NULL,
  PRIMARY KEY (repo_id, commit_hash, transcript_id),
  FOREIGN KEY (repo_id, commit_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE,
  FOREIGN KEY (repo_id, transcript_id)
    REFERENCES transcripts(repo_id, transcript_id) ON DELETE CASCADE
) STRICT;
CREATE INDEX ix_mt_transcript ON memory_transcripts(repo_id, transcript_id);

-- Compression makes the sessions invisible to SQL, so the queryable fields are
-- projected out. Uncompressed it would still need this: one session lookup
-- would otherwise parse megabytes of transcript JSON.
CREATE TABLE transcript_sessions (
  repo_id       INTEGER NOT NULL,
  transcript_id TEXT NOT NULL,
  session_id    TEXT NOT NULL,
  source        TEXT,
  PRIMARY KEY (repo_id, transcript_id, session_id),
  FOREIGN KEY (repo_id, transcript_id)
    REFERENCES transcripts(repo_id, transcript_id) ON DELETE CASCADE
) STRICT;
-- session_id leads, not source: the only reason this table exists is "which
-- commits is this session tied to", and source is legitimately NULL on older
-- data and not always known by the caller. Leading with source degrades that
-- lookup to a repo_id prefix plus a scan.
CREATE INDEX ix_ts_session ON transcript_sessions(repo_id, session_id, source);

-- \u2500\u2500 context: plans / notes / references / skills unified \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- All four are the same shape: one key, one complete file body, one version.
-- body_md is exactly what readFile() returns today (frontmatter included for a
-- reference or a skill), so the round trip is byte-faithful by construction.
-- native_id is stored separately because path escaping is irreversible \u2014
-- GitHub's \`owner/repo#number\` cannot be recovered from context_key.
--
-- A kind registry table rather than a closed CHECK: adding a kind is an INSERT.
-- 'skill' is NOT inserted here \u2014 it arrived after this entry was already on
-- disk in dev databases, so it ships as its own append-only migration (see
-- {@link SKILL_CONTEXT_KIND_DDL}); a fresh database gets it by running that
-- migration, exactly like an existing one.
CREATE TABLE context_kinds (kind TEXT PRIMARY KEY) STRICT;
INSERT INTO context_kinds (kind) VALUES ('plan'), ('note'), ('reference');
CREATE TABLE context (
  id            INTEGER PRIMARY KEY,
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  kind          TEXT NOT NULL REFERENCES context_kinds(kind),
  context_key   TEXT NOT NULL,
  source        TEXT,
  native_id     TEXT,
  tool_name     TEXT,
  referenced_at TEXT,
  original_slug TEXT,
  branch        TEXT,
  title         TEXT,
  url           TEXT,
  body_md       TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER,
  -- Non-NULL for plans only. This is plan_progress's foreign-key target, which
  -- is what replaced the three triggers that used to police that relation.
  plan_key TEXT GENERATED ALWAYS AS (CASE WHEN kind = 'plan' THEN context_key END) STORED,
  UNIQUE (repo_id, kind, context_key),
  UNIQUE (repo_id, plan_key),
  -- These three are stricter than file storage, which is a deliberate open
  -- question rather than a settled constraint: a historical reference file on
  -- orphan that lacks \`referencedAt\` is legal as a file but a CHECK violation
  -- here, and the importer's failure set has to be EMPTY before a repo may cut
  -- over. So the import phase counts how many real reference files are missing
  -- each field; if any are, the affected check degrades to the one-way form
  -- below (NULL unless reference) and the missing side is stored as NULL and
  -- logged. Until that measurement exists, keep them \u2014 do not relax them on
  -- the theory that looser is safer, because a silent NULL where the field was
  -- expected is its own class of bug.
  CHECK ((source        IS NOT NULL) = (kind = 'reference')),
  CHECK ((native_id     IS NOT NULL) = (kind = 'reference')),
  CHECK ((referenced_at IS NOT NULL) = (kind = 'reference')),
  CHECK (tool_name     IS NULL OR kind = 'reference'),
  CHECK (url           IS NULL OR kind = 'reference'),
  CHECK (original_slug IS NULL OR kind = 'plan'),
  CHECK (branch        IS NULL OR kind IN ('plan','note'))
) STRICT;
-- No indexes. Every context read is by (repo_id, kind, context_key) or
-- (repo_id, kind), both served by the UNIQUE constraint above. The three partial
-- indexes that used to sit here (on source, on (source, native_id), on branch)
-- were built for a queryable-metadata story no query ever arrived for; the
-- columns stay, the indexes do not.

-- \u2500\u2500 plan progress \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- One artifact per (plan, commit), keyed on the plan: a later commit for the
-- same plan overwrites the row. It has to be a table rather than a query
-- because rebuilding it is one LLM call per plan and the output is not
-- reproducible \u2014 the same criterion that keeps topic_pages a table.
--
-- ON UPDATE CASCADE is not optional. Plan slugs get normalized and rewritten
-- (which is why context.original_slug exists), and without the cascade an
-- in-place rename is rejected by the foreign key while a DELETE+INSERT rename
-- silently takes the progress with it.
CREATE TABLE plan_progress (
  repo_id       INTEGER NOT NULL,
  plan_slug     TEXT NOT NULL,
  artifact_json TEXT NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  -- No generated columns. \`artifact_json\` is written and read whole (see
  -- SqliteStorage), so the eight projections that used to sit here \u2014 originalSlug,
  -- commitHash, commitMessage, commitDate, summary, steps, llm.model and a CAST
  -- payload_version \u2014 answered no query. Project a field out again when something
  -- needs to filter or sort on it, not on the theory that it might.
  PRIMARY KEY (repo_id, plan_slug),
  FOREIGN KEY (repo_id, plan_slug) REFERENCES context(repo_id, plan_key)
    ON UPDATE CASCADE ON DELETE CASCADE
) STRICT;

-- \u2500\u2500 topic KB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Not the same thing as summary_json's \`topics\`, which are groupings inside one
-- commit. A topic page is what accumulated about one topic across commits, so
-- it is derived but not cheap: one LLM call per topic, output not reproducible.
-- topic_pages.summary existed only inside topics/index.json; storing it here is
-- what lets that index become a view.
CREATE TABLE topic_pages (
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  stable_slug     TEXT NOT NULL,
  title           TEXT NOT NULL,
  summary         TEXT,
  content_md      TEXT NOT NULL,
  related_branches_json TEXT NOT NULL DEFAULT '[]',
  last_updated_at TEXT NOT NULL,
  payload_version INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (repo_id, stable_slug)
) STRICT;

-- pos preserves the page's sourceRefs[] array order. The UNIQUE on it is the
-- same hazard as memories.child_pos, with a cheaper fix: this table has no
-- self-referencing foreign key, so the write module replaces a page's refs as a
-- whole group (DELETE then re-INSERT in one transaction) rather than updating
-- positions row by row. Never UPDATE pos in place.
CREATE TABLE topic_source_refs (
  repo_id     INTEGER NOT NULL,
  stable_slug TEXT NOT NULL,
  pos         INTEGER NOT NULL,
  ref_type    TEXT NOT NULL CHECK (ref_type IN ('summary','plan','note','userfile')),
  ref_id      TEXT NOT NULL,
  ts          TEXT NOT NULL,
  branch      TEXT,
  PRIMARY KEY (repo_id, stable_slug, ref_type, ref_id),
  UNIQUE (repo_id, stable_slug, pos),
  CHECK (pos >= 0),
  FOREIGN KEY (repo_id, stable_slug)
    REFERENCES topic_pages(repo_id, stable_slug) ON DELETE CASCADE
) STRICT;
CREATE INDEX ix_tsr_ref ON topic_source_refs(repo_id, ref_type, ref_id);

CREATE TABLE topic_processed_sources (
  repo_id     INTEGER NOT NULL REFERENCES repos(id),
  source_type TEXT NOT NULL CHECK (source_type IN ('summary','plan','note','userfile')),
  source_id   TEXT NOT NULL,
  PRIMARY KEY (repo_id, source_type, source_id)
) STRICT;

-- No views. \`v_topic_index\` used to live here, assembling topics/index.json's
-- array-ordered projection with ORDER BY inside json_group_array \u2014 but
-- SqliteStorage rebuilds that index directly from topic_pages + topic_source_refs
-- and never queried the view, so it was maintained by the engine on every write
-- and read by nothing.
`});function de(){return(0,Ve.join)(Re(),"jollimemory.db")}function Y(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>De.major?!0:n<De.major?!1:r>=De.minor}function Ce(e){try{let t=e.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),n=Number.parseInt(t?.value??"",10);return Number.isFinite(n)?n:0}catch{return 0}}function Ks(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function Gt(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=Ks(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:b(t),tableConfirmed:n==="present"}}}function Jr(e){let t=Gt(e);return t.kind==="rows"?t.rows:void 0}function ve(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function qs(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function Js(e){let t=new Map;for(let n of e){if(n.outcome!=="applied")continue;let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function Xs(e){return ce.findIndex(t=>t.name===e)}function Ys(e){let t=Gt(e);if(t.kind==="none")return;if(t.kind==="unreadable"){le.has(Xr)||(le.add(Xr),j.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(ce.map(o=>o.name));for(let[o,i]of qs(n))r.has(o)||le.has(o)||(le.add(o),j.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,i.applied_by,he));for(let[o,i]of Js(n))r.has(o)&&(le.has(o)||i.ddl!==ce[Xs(o)].ddl&&(le.add(o),j.warn("migration %s (slot %d) was applied by %s on %s with DIFFERENT DDL than this build (%s) carries \u2014 run `jolli doctor --schema-log` to see the log",o,i.slot,i.applied_by,new Date(i.applied_at_ms).toISOString().slice(0,10),he)))}function Vs(e,t={}){let n=t.now??Date.now,r=t.appliedBy??he,o=Ce(e),i=Gt(e),s=new Set,a=[];if(i.kind==="rows")for(let d of i.rows)(d.outcome==="applied"||d.outcome==="baseline")&&s.add(d.name);else{let d=Math.min(o,ce.length),u=ce.slice(0,d).map((f,E)=>({slot:E,name:f.name,ddl:f.ddl}));for(let f of u)s.add(f.name);i.kind==="none"?a=u:j.warn(i.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 migrating from the version stamp and recording nothing":"the database could not be queried for its migration log (%s) \u2014 migrating from the version stamp and recording nothing",i.reason)}let l=ce.map((d,u)=>({m:d,slot:u})).filter(({m:d})=>!s.has(d.name));if(l.length===0)return;let c=[];e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:d,slot:u}of l){let f=n();e.exec("BEGIN IMMEDIATE");try{let E=Jr(e);if(E?.some(h=>h.name===d.name&&(h.outcome==="applied"||h.outcome==="baseline"))){ve(e,{slot:u,name:d.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:d.ddl}),e.exec("COMMIT");continue}if(!E&&Ce(e)>u){e.exec("COMMIT");continue}e.exec(d.ddl);let _={slot:u,name:d.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-f,ddl:d.ddl};if(Jr(e)){for(let h of a)ve(e,{...h,outcome:"baseline",appliedBy:r,atMs:n(),durationMs:0});a=[];for(let h of c)ve(e,h);c.length=0,ve(e,_)}else c.push(_);let S=Math.max(Ce(e),u+1);zs(e,"schema_version",String(S)),e.exec("COMMIT")}catch(E){try{e.exec("ROLLBACK")}catch{}try{ve(e,{slot:u,name:d.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-f,ddl:d.ddl})}catch(_){j.debug("could not record the failed migration %s: %s",d.name,b(_))}throw E}}}finally{e.exec("PRAGMA foreign_keys = ON")}j.info("dashboard schema migrated %d \u2192 %d (%s)",o,Ce(e),l.map(({m:d})=>d.name).join(", "))}function zs(e,t,n){e.prepare(`INSERT INTO schema_meta (key, value) VALUES (?, ?)
		 ON CONFLICT(key) DO UPDATE SET value = excluded.value`).run(t,n)}function Zs(e){Yr!==e&&(Yr=e,j.warn("database is at format v%d, this build (%s) reads v%d \u2014 data written by newer builds is not visible here",e,he,Vr))}function Qs(e){let t=(0,Ve.dirname)(e);try{(0,U.mkdirSync)(t,{recursive:!0,mode:448}),((0,U.statSync)(t).mode&511)!==448&&(0,U.chmodSync)(t,448)}catch(n){j.warn("could not restrict %s to owner-only: %s",t,b(n))}}function ea(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,U.statSync)(t).mode&511)!==384&&(0,U.chmodSync)(t,384)}catch(n){ct(n)||j.warn("could not restrict %s to 0600: %s",t,b(n))}}async function zr(e,t){if(!Y())throw new Bt(process.versions.node);let n=t.dbPath??de(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||Qs(n);let{DatabaseSync:i}=await import("node:sqlite");for(let s=1;;s++){let a;try{a=new i(n,{readOnly:e});for(let l of e?Bs:Ws)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??Gs}`),e||ea(n),a}catch(l){try{a?.close()}catch{}if(Hr(l)?.kind!=="locked"||s>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(s-1)))}}}async function Kt(e,t={}){let n=await zr(!1,t);try{let r=Ce(n);return r>Vr&&Zs(r),Ys(n),Vs(n),await e(n)}finally{n.close()}}async function qt(e,t={}){let n=await zr(!0,t);try{return await e(n)}finally{n.close()}}function Jt(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var U,Ve,j,Vr,De,Bt,Ws,Bs,Gs,ce,le,Xr,Yr,V=p(()=>{"use strict";U=require("node:fs"),Ve=require("node:path");at();ae();jr();y();Ye();j=m("DashboardDb"),Vr=6,De={major:22,minor:13};Bt=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${De.major}.${De.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},Ws=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],Bs=["PRAGMA foreign_keys = ON"],Gs=2e3,ce=[{name:"BASELINE_DDL",ddl:Ur+`
-- Policy: repo rows are NEVER deleted \u2014 disable = set disabled_at. Every table
-- references repos(id) with default NO ACTION (not CASCADE), so a stray DELETE
-- errors instead of silently wiping a repo's memories; this trigger catches even
-- the zero-data case.
--
-- This is the ONE trigger the no-triggers rule keeps, and the reasons it does
-- not fall under that rule are worth stating: it encodes no business rule that
-- could change (repo rows stay forever by design), it has no ordering
-- relationship with any other trigger, and what it prevents is not a wrong value
-- but the irreversible loss of every memory belonging to a repo. Replacing it
-- with "the code does not write DELETE, and a test pins that" would trade an
-- engine-enforced guarantee for a convention.
CREATE TRIGGER repos_no_delete BEFORE DELETE ON repos
BEGIN SELECT RAISE(ABORT, 'repos are never deleted: set disabled_at instead'); END;
`+qr},{name:"RECALL_RECEIPTS_DDL",ddl:$r},{name:"SKILL_CONTEXT_KIND_DDL",ddl:Wr},{name:"EVENT_FAILED_KIND_DDL",ddl:Br},{name:"TOOL_CALL_TIME_DDL",ddl:Gr},{name:"SCHEMA_MIGRATIONS_DDL",ddl:Kr}];le=new Set,Xr="\0unreadable-log";Yr=0});function Xt(e){let t=i=>{try{return(0,Ne.statSync)(`${e}${i}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var Ne,Yd,Yt=p(()=>{"use strict";Ne=require("node:fs");y();Yd=m("DbDetection")});var Zr=p(()=>{"use strict";F()});var ou,Qr=p(()=>{"use strict";y();Zr();K();ou=m("MetadataManager")});var lu,eo=p(()=>{"use strict";y();F();lu=m("SshAliasResolver")});var Eu,to,Vt=p(()=>{"use strict";y();F();Qr();K();eo();Eu=m("KBPathResolver"),to=new Set(["github.com","gitlab.com","bitbucket.org"])});async function oo(e){let t=await A(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?Ie(e):ta(n,e)}function ta(e,t){let n=e.trim();if(n.length===0)return Ie(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let s=r[2].toLowerCase(),a=ro(s,no(r[3]));return`https://${s}/${a}`}let o;try{o=new URL(n)}catch{return Ie(t)}let i=o.protocol.replace(/:$/,"").toLowerCase();if(i==="ssh"||i==="git"||i==="http"||i==="https"){let s=o.hostname.toLowerCase(),a=ro(s,no(o.pathname.replace(/^\/+/,""))),l=ra(i,o.port);return`https://${s}${l}/${a}`}return Ie(i==="file"?o.pathname:t)}function Ie(e){let t=Ee(Q(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function no(e){let t=Ee(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),Ee(t)}function ro(e,t){return to.has(e)?t.toLowerCase():t}function ra(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===na[e]?"":`:${t}`:`:${t}`}var na,io=p(()=>{"use strict";H();Vt();K();na={ssh:"22",git:"9418"}});async function ia(e){try{let n=await oo(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){oa.debug("no canonical remote for %s (%s) \u2014 using path identity",e,b(n))}return{identity:`local:${(0,so.createHash)("sha256").update(Q(e)).digest("hex").slice(0,32)}`}}async function Le(e){return ia(await Wn(e))}var so,oa,ue=p(()=>{"use strict";so=require("node:crypto");$t();H();io();Te();K();ae();y();oa=m("RepoRegistry")});var lo={};it(lo,{hasCutoverRow:()=>ca,resetCutoverRouterCaches:()=>aa,resolveCutoverRoute:()=>Zt});function aa(){zt.clear()}async function la(e){let t=zt.get(e);if(t!==void 0)return t;let{identity:n}=await Le(e);return zt.set(e,n),n}async function ao(e,t){if(!Y())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=Xt(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let i=await la(e),s=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(i);if(!s)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(s.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:b(r)}}}async function ca(e,t={}){return(await ao(e,t.dbPath??de())).kind==="row"}async function Zt(e,t={}){let n=await Ae(e).catch(()=>null),r=await ao(e,t.dbPath??de());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(sa.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var sa,zt,Qt=p(()=>{"use strict";ke();y();V();Yt();ue();sa=m("CutoverRouter"),zt=new Map});function ln(){return"0.99.11"}function Io(e){return/^\d/.test(e)}function Po(e,t){if(!Io(e)||!Io(t))return!1;let n=i=>i.split(".").map(s=>Number.parseInt(s,10)||0),r=n(e),o=n(t);for(let i=0;i<Math.max(r.length,o.length);i++){let s=r[i]??0,a=o[i]??0;if(s!==a)return s>a}return!1}function Fe(e,t=Pa){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,i=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",s),e.removeListener("close",a),e.removeListener("error",a),n(c))},s=c=>{r=Buffer.concat([r,c]);let d=r.indexOf(10);if(d===-1){r.length>Ma&&i(void 0);return}i({line:r.subarray(0,d).toString("utf8"),rest:r.subarray(d+1)})},a=()=>i(void 0),l=setTimeout(()=>i(void 0),t);l.unref?.(),e.on("data",s),e.once("close",a),e.once("error",a)})}function Mo(e,t){return(0,fe.join)((0,Lo.tmpdir)(),`.jolli-${e}-${t}`)}function et(e){return`${JSON.stringify(e)}
`}var an,Lo,fe,Oo,sn,Pa,Ma,tt=p(()=>{"use strict";an=require("node:fs"),Lo=require("node:os"),fe=require("node:path"),Oo=require("node:url");K();Pa=1e4,Ma=4096});function ja(e){let t=(0,ne.join)((0,ne.dirname)((0,dn.fileURLToPath)(e)),Fa);return(0,cn.existsSync)(t)?t:void 0}function un(e,t=process.argv[1],n=process.execArgv){let r=ja(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,ne.dirname)((0,dn.fileURLToPath)(e)),i=(0,ne.join)((0,ne.dirname)(o),Ha);if(t?.endsWith(".ts")&&(0,cn.existsSync)(i))return{entry:i,nodeArgs:n}}var cn,ne,dn,Fa,Ha,Fo=p(()=>{"use strict";cn=require("node:fs"),ne=require("node:path"),dn=require("node:url"),Fa="Cli.js",Ha="Cli.ts"});var mf,ff,gf,Ho=p(()=>{"use strict";H();Vt();ae();y();V();ue();mf=m("Backup"),ff=2*1024*1024*1024,gf=1440*60*1e3});function Bo(e){return Mo("global",e)}function Ua(e=(0,Uo.homedir)()){return(0,jo.createHash)("sha256").update(ut(e,"win32")).digest("hex").slice(0,16)}function He(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${Ua(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,$o.join)(Bo(n),"daemon.sock")}function mn(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:i,startedAt:s}=t;if(!(n!=="hello"||r!==Wo)&&!(typeof o!="string"||typeof i!="number"||typeof s!="number"))return{t:"hello",protocol:r,version:o,pid:i,startedAt:s}}var jo,Uo,$o,Wo,pn,fn=p(()=>{"use strict";jo=require("node:crypto"),Uo=require("node:os"),$o=require("node:path");tt();K();Wo=1,pn=300});var Tf,Go=p(()=>{"use strict";y();Tf=m("TaskScheduler")});var Of,gn,Pf,Ko=p(()=>{"use strict";tt();Ho();y();fn();Go();Of=m("GlobalDaemon"),gn="global-daemon",Pf=3600*1e3});var Xo={};it(Xo,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>yn,ensureGlobalDaemon:()=>Ga,probeGlobalDaemon:()=>Ja,retireGlobalDaemon:()=>qa,shouldSkipGlobalDaemon:()=>En,triggerEnsureGlobalDaemon:()=>Ka});function En(e){return e!==null&&Wa.has(e)}function Sn(e){return new Promise(t=>{let n=!1,r=(0,Jo.connect)(e),o=s=>{n||(n=!0,clearTimeout(i),r.removeAllListeners("connect"),s.socket===void 0&&r.destroy(),t(s))},i=setTimeout(()=>o({socket:void 0}),$a);i.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",s=>{if(n){N.warn("global daemon socket error after connect: %s",b(s));return}o({socket:void 0,code:s.code})})})}async function Ba(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,qo.unlink)(e)}catch{}}async function Ga(e={}){try{if(En(e.command??null))return"skipped-excluded-command";if(!Y(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??He(),{socket:n,code:r}=await Sn(t);if(!n)return r==="ECONNREFUSED"&&await Ba(t),(e.spawnDaemon??Xa)(t),"spawned";try{let o=await Fe(n,e.helloTimeoutMs??pn),i=o?mn(o.line):void 0;if(!i)return"already-running";let s=e.ownVersion??ln();return Po(s,i.version)?(n.write(et({t:"retire"})),N.info("retiring global daemon pid %d (v%s < v%s)",i.pid,i.version,s),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return N.warn("could not ensure the global daemon: %s",b(t)),"failed"}}function Ka(e={}){try{return En(e.command??null)||!Y(e.nodeVersion??process.versions.node)?!1:(Ya(e.socketPath),!0)}catch(t){return N.warn("could not trigger the global daemon ensure helper: %s",b(t)),!1}}async function qa(e={}){try{let{socket:t}=await Sn(e.socketPath??He());return t?(await Fe(t,pn),t.write(et({t:"retire"})),t.end(),!0):!1}catch(t){return N.warn("could not retire the global daemon: %s",b(t)),!1}}async function Ja(e){try{let{socket:t}=await Sn(e??He());if(!t)return;try{let n=await Fe(t,5e3);return n?mn(n.line):void 0}finally{t.end()}}catch{return}}function Xa(e){let t=un(__jmImportMetaUrl);if(!t){N.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=Z(process.execPath,[...t.nodeArgs,t.entry,gn,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,hn.homedir)()});n.on("error",r=>N.warn("global daemon failed to spawn: %s",b(r))),n.unref(),N.info("spawned global daemon (pid %d)",n.pid??-1)}function Ya(e){let t=un(__jmImportMetaUrl);if(!t){N.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,yn];e&&n.push("--socket",e);let r=Z(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,hn.homedir)()});r.on("error",o=>N.warn("global daemon ensure helper failed to start: %s",b(o))),r.unref(),N.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var qo,Jo,hn,N,yn,$a,Wa,Yo=p(()=>{"use strict";qo=require("node:fs/promises"),Jo=require("node:net"),hn=require("node:os");tt();V();y();Fo();F();Ko();fn();N=m("EnsureGlobalDaemon"),yn="global-daemon-ensure",$a=200,Wa=new Set([gn,yn,"mcp","mcp-serve","daemon","uninstall","disable"])});var pl={};it(pl,{armSessionStartDeadline:()=>Zo,buildSessionStartContext:()=>ii,computeLoginReminder:()=>ei,ensurePluginDefaultProvider:()=>Qa,formatRecallSuggestion:()=>ai,getAuthFailureReminder:()=>ri,getLoginReminder:()=>ti,main:()=>oi,warmBriefingCache:()=>tl});module.exports=hi(pl);var x=require("node:fs"),I=require("node:path"),zo=require("node:url");var ge=require("node:fs");var wn=require("node:path"),yi="JOLLI_LOCAL_AGENT_CHILD",Ei=".jolli-local-agent-child";function Rn(e=process.env,t){return e[yi]==="1"?!0:t!==void 0&&(0,ge.existsSync)((0,wn.join)(t,Ei))}at();Be();H();function Kn(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}ae();var Ft={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},Dd=Object.keys(Ft);function Ht(e){return e===void 0?void 0:Ft[e]?.localAgentTool}function jt(e,t){return(e===void 0?void 0:Ft[e]?.skillInvocation)?.replace("<name>",t)}ke();ae();Qt();ue();y();H();ke();var pe=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return gt(W,t,this.cwd)}async batchReadFiles(t){return ht(W,t,this.cwd)}async writeFiles(t,n){if(se())return;if(await Ae(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Error("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(Qt(),lo));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Error("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await $n(W,t,n,this.cwd)}async listFiles(t){return[...await yt(W,t,this.cwd)]}async exists(){return mt(W,this.cwd)}async ensure(){await ft(W,this.cwd)}};var Ro=require("node:zlib");V();var bo=require("node:zlib");we();function co(e){return e.version>=4}function da(e){return[...e??[]].reverse()}function Oe(e){let t=da(e.children).flatMap(Oe),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function en(e){return co(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):Oe(e)}function tn(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...tn(n));return t}function me(e,t){return e.transcripts!==void 0?e.transcripts:tn(e).filter(n=>t.has(n))}y();V();H();y();y();Et();H();Te();wt();we();var ua="local-agent-auth";function uo(e){return e.summaryError===ua}var nn={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop"},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app"},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function ze(e){return nn[e]?.label??"Local agent"}function po(e){return nn[e]?.loginHint??"Sign in to your local agent CLI."}function mo(e){let t=nn[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}Ct();function M(e){return e.generatedAt||e.commitDate}Nt();var pa;async function ma(e){let t=await go(e);return t.ok?t.storage:(rn.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new pe(e))}async function fa(e,t){return e??pa??await ma(t)}var rn=m("SummaryStore"),ga="index.json";async function Ze(e,t){return ha(e,t)}async function ha(e,t){let n=await fa(t,e),r=await n.readFile(ga);if(!r)return rn.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return rn.error("Failed to parse index.json: %s",o.message),null}}function fo(e){let t=en(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}var Gp=m("ProcessedSourceStore");ke();we();y();var Xp=m("TopicIndexStore");y();var Zp=m("TopicPageStore");y();V();bt();y();V();Yt();ue();var im=m("ImportState");var sm=10*6e4;ue();Ye();var Nm=m("SotImport");function $(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function Eo(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}var ya=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function So(e,t,n){for(let{path:r,accepts:o}of ya){let i=e;for(let a of r){if(i==null||typeof i!="object"){i=void 0;break}i=i[a]}i==null||(o==="integer"?Number.isInteger(i):typeof i=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof i} (${JSON.stringify(i)}) \u2014 column reads NULL`)}}function _o(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function To(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let i=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),s=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let u=s.get(l);(u.root_hash!==c||u.depth!==d)&&i.run(c,d,t,l);for(let f of r.get(l)??[])o.push({hash:f,root:c,depth:d+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}Ye();var te=m("SotWrite"),Ea={plans:"plan",notes:"note",references:"reference",skills:"skill"};function Sa(e){let t=[],n=(r,o,i)=>{t.push({hash:r.commitHash,parentInFile:o,pos:i,summary:r}),(r.children??[]).forEach((s,a)=>{n(s,r.commitHash,a)})};return n(e,null,null),t}function _a(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=$(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push(Sa(c));continue}if(n.path==="index.json"){if(r)continue;let c=$(n.content);for(let d of c?.entries??[])d.treeHash&&t.treeHashes.set(d.commitHash,d.treeHash);for(let[d,u]of Object.entries(c?.commitAliases??{}))t.aliases.set(d,u);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=$(n.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&t.topicSummaries.set(d.stableSlug,d.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let i=n.path.match(/^transcripts\/(.+)\.json$/);if(i){r?t.transcriptDeletes.push(i[1]):t.transcriptWrites.push({id:i[1],content:n.content});continue}let s=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(s){let c=Ea[s[1]];r?t.contextDeletes.push({kind:c,key:s[2]}):t.contextWrites.push({kind:c,key:s[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function Me(e,t){te.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function Ta(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function ba(e,t,n,r){for(let d of n.summaryDeletes)e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,d);if(n.summaryTrees.length===0)return;let o=new Set;for(let d of n.summaryTrees)for(let u of d)"children"in u.summary&&o.add(u.hash);let i=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let d of o)i.run(t,d);let s=new Map;for(let d of n.summaryTrees)for(let u of d){if(u.parentInFile===null||u.pos===null)continue;let f=s.get(u.parentInFile)??new Map;f.set(u.hash,u.pos),s.set(u.parentInFile,f)}let a=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),l=(d,u)=>te.info("write degraded a value: %s %s",d,u);for(let d of n.summaryTrees)for(let u of d){let f=u.parentInFile,E=u.pos;if(u.parentInFile===null){let h=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,u.hash);h&&(f=h.parent_hash,E=h.child_pos,E!==null&&E>=1e6&&((f===null?void 0:s.get(f))?.has(u.hash)||(f=null,E=null)))}let _=JSON.stringify("children"in u.summary?{...u.summary,children:[]}:u.summary);a.run(t,u.hash,f,E,u.hash,0,_,n.treeHashes.get(u.hash)??null,r,r,_o(u.summary,u.hash,r,l)),So(u.summary,u.hash,l),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,u.hash);let S=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(u.summary.topics??[]).forEach((h,g)=>{if(!h.title){l("topic",`${u.hash}[${g}] has no title`);return}S.run(t,u.hash,g,h.category??null,h.importance??null,h.title)})}let c=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`);for(let d of o)c.run(t,d);To(e,t)}function wa(e,t,n,r){for(let[o,i]of n.aliases){if(!e.prepare("SELECT 1 AS ok FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,i)){te.info("dropping alias %s -> %s (no such memory row)",o,i);continue}e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,o,i,r)}}function Ra(e,t,n,r){let o=new Set;for(let i of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,i),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,i),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,i);for(let{id:i,content:s}of n.transcriptWrites){let a=$(s);if(!a||!Array.isArray(a.sessions)){Me("transcript",i);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,i,(0,bo.deflateSync)(Buffer.from(s,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,i);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,i,l.sessionId,l.source??null);o.add(i)}return o}function xa(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),i=new Set(n.summaryTrees.flat().flatMap(c=>[...me(c.summary,r)])),s=[...r].filter(c=>!i.has(c));if(s.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of s){let d=a.all(t,`%${c}%`);for(let u of d){if(o.has(u.commit_hash))continue;let f=$(u.summary_json);f&&me(f,r).includes(c)&&(l.run(t,u.commit_hash,c),te.info("linked stored transcript %s to memory %s written earlier",c,u.commit_hash))}}}function Aa(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let i of o){let s=[...new Set(me(i.summary,r).filter(a=>r.has(a)))];for(let a of i.summary.transcripts??[])r.has(a)||te.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",i.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,i.hash);for(let a of s)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,i.hash,a)}}function ka(e,t,n,r){for(let{kind:i,key:s}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,i,s);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:i,key:s,body:a}of n.contextWrites){if(i==="reference"){let d=Dt(a);if(!d){Me("reference frontmatter",`references/${s}.md`);continue}o.run(t,i,s,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,r,r);continue}let l=i==="plan"||i==="note"?Ta(e,t,s):null,c=i==="plan"&&l!==null?s.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,i,s,null,null,null,null,c,l,Eo(a),null,a,r,r)}}function va(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:i}of n.progressWrites){let s=$(i);if(!s){Me("plan-progress",`plan-progress/${o}.json`);continue}let a=s.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){te.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,i,r)}}function Ca(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:i}of n.topicPageWrites){let s=$(i);if(!s?.stableSlug||s.title===void 0||s.content===void 0||!s.lastUpdatedAt){Me("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,s.stableSlug,s.title,n.topicSummaries.get(s.stableSlug)??null,s.content,JSON.stringify(s.relatedBranches??[]),s.lastUpdatedAt,s.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,s.stableSlug),(s.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,s.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,i]of n.topicSummaries){let s=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(i,t,o);Number(s.changes)===0&&te.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=$(n.processedSet);if(!o?.processed)Me("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let i=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[s,a]of Object.entries(o.processed))for(let l of a)i.run(t,s,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function wo(e,t,n,r){let o=_a(n);Jt(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),ba(e,t,o,r),wa(e,t,o,r);let i=Ra(e,t,o,r);Aa(e,t,o),xa(e,t,o,i),ka(e,t,o,r),va(e,t,o,r),Ca(e,t,o,r)})}y();function xo(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function on(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>on(e,r))),n}function Da(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),i=o.find(s=>s.commit_hash===n);return i?on(xo(o),i):void 0}function Na(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var Qe=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return qt(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return qt(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let i of t)o.set(i,this.readOne(n,r,i));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=Da(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let i=r.match(/^topics\/([^/]+)\.json$/);if(i)return this.synthTopicPage(t,n,i[1]);let s=r.match(/^transcripts\/(.+)\.json$/);if(s){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,s[1]);return c?(0,Ro.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),i=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...Na(a.diff_stats_json)}})),s=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:i,...s.length>0&&{commitAliases:Object.fromEntries(s.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=xo(r),i=r.filter(s=>s.parent_hash===null).map(s=>fo(on(o,s)));return JSON.stringify({version:1,entries:i},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(i=>({type:i.ref_type,id:i.ref_id,timestamp:i.ts,...i.branch!==null&&{branch:i.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(i=>({stableSlug:i.stable_slug,title:i.title,...i.summary!==null&&{summary:i.summary},relatedBranches:JSON.parse(i.related_branches_json),sourceRefs:this.topicRefs(t,n,i.stable_slug),lastUpdatedAt:i.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let i of r)o[i.source_type].push(i.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(s,a)=>n.prepare(s).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",s=>`summaries/${s}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",s=>`transcripts/${s}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",s=>`plans/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",s=>`notes/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",s=>`references/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",s=>`skills/${s}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",s=>`plan-progress/${s}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",s=>`topics/${s}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",s=>s)].filter(s=>s.startsWith(t)).sort()},[])}async writeFiles(t,n){se()||await Kt(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);wo(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(i=>i.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(i=>({commitHash:i.commit_hash,parentCommitHash:null,...i.tree_hash!==null?{treeHash:i.tree_hash}:{},...i.commit_type!==null?{commitType:i.commit_type}:{},commitMessage:i.commit_message??"",commitDate:i.commit_date??"",branch:i.branch??"",generatedAt:i.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let i of r){let s=o.get(i.commit_hash)??[];s.push(i.title),o.set(i.commit_hash,s)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),i=new Map;for(let s of o){let a=i.get(s.stable_slug)??[];a.push(s.ref_type),i.set(s.stable_slug,a)}return r.map(s=>({stableSlug:s.stable_slug,title:s.title,summary:s.summary,content:s.content_md,relatedBranches:JSON.parse(s.related_branches_json),lastUpdatedAt:s.last_updated_at,refTypes:i.get(s.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var Ia=3e3,Ao=new Map;async function ko(e){let t=Date.now(),n=Ao.get(e);if(n&&t-n.at<Ia)return n.route;let r=await Zt(e);return Ao.set(e,{route:r,at:t}),r}async function vo(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await Le(t);return new Qe(r)}return new pe(e)}async function Co(e){let t=e??process.cwd(),n=await ko(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return vo(e,t,n)}async function go(e){let t=e??process.cwd(),n;try{n=await ko(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await vo(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}y();F();function La(e){return[`1) Re-authenticate ${ze(e)}:  ${po(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function Oa(e,t){let n=mo(e);return n===null?[]:[`${t}${n}`]}function Do(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${ze(e)} authentication expired or is unavailable.`,...Oa(e,""),"\u2192 Fix with either:",...La(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}function No(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var v=m("SessionStartHook"),Va=new Set(["main","master","develop","development","staging","production"]),nt=500,za=250;function Zo(e=nt+za){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var Qo="login-reminder-dismissed";function Za(e){let t=jt(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Qo}.)`].join(`
`)}function ei(e,t,n){return t||n?null:Za(e)}async function Qa(e,t){let n=Ht(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{return await Mt(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",localAgentTool:n},result:!0}:{update:null,result:!1})?(v.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",n,e),!0):(v.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1)}catch(r){return v.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function ti(e,t=st()){let n=await Xe(),r=Kn(n),o=(0,I.join)(e,".jolli","jollimemory",Qo),i=(0,x.existsSync)(o);if(r&&i)try{(0,x.rmSync)(o)}catch{}return ei(t,r,i)}async function ni(e,t){return(await Co(t)).readFile(`summaries/${e}.json`)}async function el(e,t){try{let n=await ni(e,t);return n?uo(JSON.parse(n)):!1}catch(n){return v.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function ri(e,t=st()){let n=Ht(t);if(n===void 0)return null;let r=di(e);if(!r)return null;let o=await Ze(e);if(!o)return null;let i=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(i.length===0)return null;let s=[...i].sort((l,c)=>new Date(M(c)).getTime()-new Date(M(l)).getTime())[0];if(!await el(s.commitHash,e))return null;let a=await Xe();return Do(a.localAgentTool??n)}async function oi(){if(Rn()){v.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await No(),{cwd:t}=JSON.parse(e),n=Un(t??process.cwd());if(dt(n),v.info("SessionStartHook invoked (cwd=%s)",n),await Fr(n)){v.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await ii(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):v.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(Yo(),Xo));o()}catch(e){v.info("SessionStartHook failed: %s",e.message)}}async function ii(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[i,s,a]=await Promise.all([r?Promise.race([si(e,t),_n(nt)]):Promise.resolve(null),o?Promise.race([ri(e,t),_n(nt)]):Promise.resolve(null),o?Promise.race([ti(e,t),_n(nt)]):Promise.resolve(null)]),l=[s,a,i].filter(c=>!!c);return l.length===0?null:(v.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function tl(e,t="shared"){try{return await si(e,t)===null?(v.info("Briefing cache not warmed \u2014 nothing to brief on this branch"),!1):(v.info("Briefing cache warmed for the next session start"),!0)}catch(n){return v.info("Briefing cache warm-up failed (non-fatal): %s",n.message),!1}}async function si(e,t){let n=rt(e),r=di(e,n);if(!r||Va.has(r))return null;let o=al(e,r,t,n);if(o)return o;let i=await Ze(e);if(!i)return null;let s=i.entries.filter(S=>S.branch===r&&(S.parentCommitHash===null||S.parentCommitHash===void 0));if(s.length===0)return null;let a=[...s].sort((S,h)=>new Date(M(h)).getTime()-new Date(M(S)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&cl(M(l)))return null;let d=await nl(l.commitHash,e),u=rl(e,r),f=ol(a),E=il(r,a,l,c,d,u,f,t),_=ci(e,n);return ll(e,r,_??l.commitHash,E,t),E}async function nl(e,t){try{let n=await ni(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=Oe(r),i=o.length>0?o[o.length-1].title:null,s=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&s.push(a.decisions);return{lastTopicTitle:i,keyDecisions:s}}catch(n){return v.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function rl(e,t){try{let n=(0,I.join)(e,".jolli","jollimemory","plans.json");if(!(0,x.existsSync)(n))return[];let r=JSON.parse((0,x.readFileSync)(n,"utf-8")),o=Ir(r).registry,i=[];for(let s of Object.values(o.plans))!s.commitHash&&s.title&&i.push(s.title);return i}catch{return[]}}function ol(e){let t=0,n=0,r=0,o=!1;for(let i of e)i.diffStats&&(t+=i.diffStats.filesChanged,n+=i.diffStats.insertions,r+=i.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function il(e,t,n,r,o,i,s,a){let l=t.length,c=Vo(M(r)),d=Vo(M(n)),u=dl(M(n),new Date().toISOString()),f=[];f.push(`[Jolli Memory \u2014 ${e}]`);let E=`${l} commits (${c} ~ ${d})`;s&&(E+=` | ${s.filesChanged} files, +${s.insertions} -${s.deletions}`),f.push(E);let _=o.lastTopicTitle??n.commitMessage;if(f.push(`Last: ${_} (${d})`),o.keyDecisions.length>0){let h=sl(o.keyDecisions);f.push(`Decisions: ${h}`)}i.length>0&&f.push(`Plans: ${i.join("; ")}`);let S=ai(u,a);return S&&f.push(S),f.join(`
`)}function ai(e,t){if(e<=0)return null;let n=jt(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function sl(e){let n=[],r=0;for(let o of e){let i=o.replace(/[.;]\s*$/,"").trim();if(i.length>200&&(i=`${i.slice(0,199)}\u2026`),r+i.length>200&&n.length>0)break;n.push(i),r+=i.length+2}return n.join("; ")}function li(e){return(0,I.join)(e,".jolli","jollimemory","briefing-cache.json")}function al(e,t,n,r=rt(e)){let o=li(e);if(!(0,x.existsSync)(o))return null;try{let i=JSON.parse((0,x.readFileSync)(o,"utf-8"));if(i.branch!==t||i.clientKind!==n)return null;let s=ci(e,r);return!s||i.lastCommitHash!==s?null:i.briefingText}catch{return null}}function ll(e,t,n,r,o){let i=li(e),s={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,I.dirname)(i);(0,x.existsSync)(a)||(0,x.mkdirSync)(a,{recursive:!0});let l=`${i}.${process.pid}.tmp`;(0,x.writeFileSync)(l,JSON.stringify(s,null,"	"),"utf-8"),(0,x.renameSync)(l,i)}catch{}}function rt(e){return oe(e)}function ci(e,t=rt(e)){let n=t?vn(t):null;if(n)return n;try{return G("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function di(e,t=rt(e)){let n=t?kn(t):null;if(n)return n;if(t)return null;try{return G("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function _n(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function cl(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function dl(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function Vo(e){return e?e.split("T")[0]:"unknown"}function ul(){let e=process.argv[1];if(process.env.VITEST||!e||(0,I.resolve)(e)!==(0,I.resolve)((0,zo.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,I.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}ul()&&(Zo(),oi());0&&(module.exports={armSessionStartDeadline,buildSessionStartContext,computeLoginReminder,ensurePluginDefaultProvider,formatRecallSuggestion,getAuthFailureReminder,getLoginReminder,main,warmBriefingCache});
