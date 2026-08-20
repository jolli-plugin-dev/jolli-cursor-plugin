#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var Ci=Object.create;var je=Object.defineProperty;var Li=Object.getOwnPropertyDescriptor;var ki=Object.getOwnPropertyNames;var vi=Object.getPrototypeOf,Ii=Object.prototype.hasOwnProperty;var p=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var at=(e,t)=>{for(var n in t)je(e,n,{get:t[n],enumerable:!0})},Rn=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ki(t))!Ii.call(e,o)&&o!==n&&je(e,o,{get:()=>t[o],enumerable:!(r=Li(t,o))||r.enumerable});return e};var wn=(e,t,n)=>(n=e!=null?Ci(vi(e)):{},Rn(t||!e||!e.__esModule?je(n,"default",{value:e,enumerable:!0}):n,e)),Oi=e=>Rn(je({},"__esModule",{value:!0}),e);function lt(){return"cursor-plugin"}var ye,ct=p(()=>{"use strict";ye="cursor-plugin/1.0.0"});function Hi(e){return Fi.some(t=>(e[t]??"")!=="")}function z(e){try{return(0,oe.readFileSync)(e,"utf-8")}catch{return null}}function dt(e){try{return(0,oe.realpathSync)(e)}catch{return(0,R.resolve)(e)}}function $e(e){try{return(0,oe.statSync)(e).isDirectory()}catch{return!1}}function Dn(e,t){let n=z((0,R.join)(e,"HEAD"))?.trim();return!n||!(We.test(n)||Ui.test(n))?!1:$e((0,R.join)(t,"objects"))&&$e((0,R.join)(t,"refs"))}function ji(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let i=(0,R.isAbsolute)(o)?o:(0,R.resolve)(e,o);return $e(i)?n?dt(i):i:null}function Nn(e,t){let n=z((0,R.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,R.isAbsolute)(n)?n:(0,R.resolve)(e,n);return t?dt(r):r}function ie(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(Hi(n))return null;let o=r?dt(e):(0,R.resolve)(e);for(;;){let i=(0,R.join)(o,".git");if($e(i)){let l=Nn(i,r);return Dn(i,l)?{worktreeRoot:o,gitDir:i,commonDir:l}:null}let s=z(i);if(s!==null){let l=ji(o,s,r);if(l===null)return null;let c=Nn(l,r);return Dn(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,R.dirname)(o);if(a===o)return null;o=a}}function Cn(e){let t=z((0,R.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function Wi(e){return $i.test(e)&&!e.split("/").includes("..")}function Bi(e,t){let n=z((0,R.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let i=r.slice(0,o).trim();return We.test(i)?i:null}}return null}function Ln(e){let t=z((0,R.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(We.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!Wi(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let i=z((0,R.join)(o,r))?.trim();if(i&&We.test(i))return i;let s=Bi(o,r);if(s)return s}return null}var oe,R,Fi,We,Ui,$i,Be=p(()=>{"use strict";oe=require("node:fs"),R=require("node:path"),Fi=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];We=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,Ui=/^ref:\s*refs\//;$i=/^refs\/[A-Za-z0-9._\-/]+$/});function vn(){return Gi.getStore()?.traceId}var kn,Vl,Gi,In=p(()=>{"use strict";kn=require("node:async_hooks"),Vl="0".repeat(32),Gi=new kn.AsyncLocalStorage});function w(e){return e instanceof Error?e.message:String(e)}function ut(e){return e instanceof Error&&e.code==="ENOENT"}function Fn(e){Mn=e}function ae(){return Hn}function zi(e,t){let n=Yi[t]??Xi;return On[e]>=On[n]}function Qi(e,t,n,r,o){let i=new Date().toISOString(),s=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,m=>{if(l>=r.length)return m;let d=r[l++];return m==="%d"?String(Number(d)):m==="%j"?JSON.stringify(d):String(d)});let c=o?` [trace=${o}]`:"";return`[${i}] ${s} [${t}]${c} ${a}`}function I(e){let t=e??Mn??process.cwd();return(0,se.join)(t,Ki,qi)}function _e(e){return String(e).padStart(2,"0")}async function ns(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${_e(n.getUTCMonth()+1)}-${_e(n.getUTCDate())}_${_e(n.getUTCHours())}-${_e(n.getUTCMinutes())}-${_e(n.getUTCSeconds())}`;try{let o=(0,se.join)(e,`debug_${r}.log`);for(let i=1;await rs(o);i++)o=(0,se.join)(e,`debug_${r}_${i}.log`);await(0,L.rename)(t,o)}catch{return}try{let o=(await(0,L.readdir)(e)).filter(i=>ts.test(i)).sort();for(let i=0;i<o.length-es;i++)await(0,L.unlink)((0,se.join)(e,o[i])).catch(()=>{})}catch{}}async function rs(e){try{return await(0,L.stat)(e),!0}catch{return!1}}function os(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Hn||(Pn=Pn.then(async()=>{try{let t=I(),n=(0,se.join)(t,Ji);await(0,L.stat)(t);try{(await(0,L.stat)(n)).size>Zi&&await ns(t,n)}catch{}await(0,L.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function f(e){function t(n,r,o){let i=Qi(n,e,r,o,vn());Vi&&(n==="info"||n==="debug")||(n==="warn"?console.warn(i):console.error(i)),zi(n,e)&&os(i)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var L,se,Ki,qi,Ji,W,Mn,Hn,On,Xi,Yi,Vi,Pn,Zi,es,ts,E=p(()=>{"use strict";L=require("node:fs/promises"),se=require("node:path");In();Ki=".jolli",qi="jollimemory",Ji="debug.log";W="jollimemory/summaries/v3";Hn=!1;On={debug:0,info:1,warn:2,error:3},Xi="info",Yi={},Vi=!0;Pn=Promise.resolve(),Zi=2*1024*1024,es=10,ts=/^debug_.*\.log$/});function Ke(e,t,n){return(0,Un.promisify)(B.execFile)(e,t,{...Ge,...n??{}})}function G(e,t,n){return(0,B.execFileSync)(e,t,{...Ge,...n??{}})}var B,Un,Ge,Q,F=p(()=>{"use strict";B=require("node:child_process"),Un=require("node:util"),Ge={windowsHide:!0};Q=((e,t,n)=>Array.isArray(t)?(0,B.spawn)(e,t,{...Ge,...n??{}}):(0,B.spawn)(e,{...Ge,...t??{}}))});function qe(e,t){let n=Ee(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function Ee(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function Z(e){return e.replace(/\\/g,"/")}var K=p(()=>{"use strict"});function Bn(e){let t=mt.get(e);if(t!==void 0)return t;let n=ie(e,{realpath:!0})?.worktreeRoot;if(n){let o=Z(n);return mt.set(e,o),o}let r=e;try{let o=G("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return mt.set(e,r),r}async function N(e,t){A.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await Ke("git",e,{maxBuffer:ss,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,i={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return A.debug("git command failed (exit: %d, stderr: %s)",o,i.stderr.substring(0,200)),i}}async function pt(e,t){return(await N(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function ft(e,t){if(await pt(e,t))return;A.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await us(n,t);A.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,i=await fs(o,t);A.debug("Created tree: %s",i);let s=await N(["commit-tree",i,"-m","Initialize Jolli Memory summaries"],t);if(s.exitCode!==0)throw new Error(`Failed to create commit: ${s.stderr}`);let a=s.stdout.trim();A.debug("Created commit: %s",a);let l=await N(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);A.info("Orphan branch '%s' created successfully",e)}function cs(e){let t=e.toLowerCase();return ls.some(n=>t.includes(n))}async function gt(e,t,n){A.debug("Reading file from branch: %s:%s",e,t);let r=await N(["show",`${e}:${t}`],n);return r.exitCode!==0?(cs(r.stderr)?A.debug("File not found: %s:%s",e,t):A.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function ht(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return A.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((i,s)=>{let a=Q("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),m=!0,d=0,g=[],T=!1,y=0,u=!1,_=h=>{u||(u=!0,h?s(h):i(r))};a.stderr.on("data",h=>{l+=h.toString()}),a.stdout.on("data",h=>{for(c=Buffer.concat([c,h]);!u;){if(m){let S=c.indexOf(10);if(S<0)return;let x=c.subarray(0,S).toString("utf8");if(c=c.subarray(S+1),y>=t.length){_(new Error(`git cat-file --batch returned extra response: ${x}`));return}let b=t[y];if(y++,x.endsWith(" missing")){r.set(b,null);continue}let $=x.substring(x.lastIndexOf(" ")+1),st=Number.parseInt($,10);if(!Number.isFinite(st)||st<0){_(new Error(`Unexpected cat-file --batch header for ${b}: ${x}`));return}d=st,g=[],m=!1,T=!0}if(d>0){if(c.length===0)return;let S=Math.min(d,c.length);if(g.push(c.subarray(0,S)),c=c.subarray(S),d-=S,d>0)return}if(T){if(c.length<1)return;c=c.subarray(1),T=!1;let S=t[y-1];r.set(S,Buffer.concat(g).toString("utf8")),g=[],m=!0}}}),a.on("close",h=>{if(h!==0){_(new Error(`git cat-file --batch failed (exit ${h}): ${l.trim()}`));return}if(y<t.length){_(new Error(`git cat-file --batch returned ${y} of ${t.length} expected responses; stderr=${l.trim()}`));return}_(null)}),a.on("error",h=>{_(h)}),a.stdin.on("error",h=>{_(h)});for(let h of t)a.stdin.write(`${e}:${h}
`);a.stdin.end()})}async function Gn(e,t,n,r){await ft(e,r);let o=await N(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let i=o.stdout.trim();await ms(e,i,n,t,r);let s=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;A.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,s,a)}async function yt(e,t,n){A.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await N(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return A.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(as).filter(i=>i.length>0);return A.debug("Found %d files",o.length),o}async function ds(e){let t=await N(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,Se.resolve)(e,n)}async function Kn(e){let t=await ds(e);return(0,Se.dirname)(t)}async function qn(e){let t=await N(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}function Jn(e,t,n){return A.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let i=Q("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),s="",a="";i.stdout.on("data",l=>{s+=l.toString()}),i.stderr.on("data",l=>{a+=l.toString()}),i.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(s.trim())}),i.on("error",l=>{o(l)}),i.stdin.write(t),i.stdin.end()})}async function us(e,t){return Jn(["hash-object","-w","--stdin"],e,t)}async function jn(e,t){let n=await N(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function ms(e,t,n,r,o){let i=await jn("GIT_AUTHOR_IDENT",o),s=await jn("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];A.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(m=>!m.delete),c=r.filter(m=>m.delete);return new Promise((m,d)=>{let g=Q("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),T="";g.stderr.on("data",h=>{T+=h.toString()}),g.on("close",h=>{h!==0?d(new Error(`git fast-import failed (exit ${h}): ${T.trim()}`)):m()}),g.on("error",h=>{d(h)});let y=g.stdin;y.on("error",h=>{d(h)});let u=[];l.forEach((h,S)=>{let x=S+1,b=Buffer.from(h.content,"utf8");u.push(`blob
mark :${x}
data ${b.length}
`,b,`
`)});let _=Buffer.from(n,"utf8");u.push(`commit refs/heads/${e}
`,`author ${i}
`,`committer ${s}
`,`data ${_.length}
`,_,`
`,`from ${t}
`),l.forEach((h,S)=>{u.push(`M 100644 :${S+1} ${$n(h.path)}
`)});for(let h of c)u.push(`D ${$n(h.path)}
`);u.push(`done
`),ps(y,u).then(()=>{y.end()},h=>{d(h)})})}async function ps(e,t){for(let n of t)e.write(n)||await(0,Wn.once)(e,"drain")}function $n(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function fs(e,t){return Jn(["mktree"],e,t)}var Wn,Se,ss,as,A,mt,ls,q=p(()=>{"use strict";Wn=require("node:events"),Se=require("node:path");E();F();Be();K();ss=10*1024*1024,as="\0",A=f("GitOps"),mt=new Map;ls=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});var _t=p(()=>{"use strict"});async function Vn(e,t,n){let r=`${e}.${process.pid}.${(0,Yn.randomUUID)()}.tmp`;await(0,ee.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,ee.rename)(r,e)}catch(o){let i=o.code;if(i==="EPERM"||i==="EACCES")await(0,ee.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,ee.rm)(r,{force:!0});else throw o}}var Yn,ee,zn=p(()=>{"use strict";Yn=require("node:crypto"),ee=require("node:fs/promises")});function gs(e){return new Promise(t=>setTimeout(t,e))}function Zn(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function Et(e){try{let t=await(0,O.stat)(e),n=Date.now()-t.mtimeMs,r=await er(e),o=r!==null&&!Zn(r);if(!o&&n<Qn)return!1;o?Te.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):Te.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,O.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return Te.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,O.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function er(e){try{let n=(await(0,O.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function St(e,t){let n=await er(e);if(n!==null&&n!==String(process.pid)){Te.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,O.rm)(e,{force:!0})}catch(r){Te.error("Failed to release %s: %s",t,r.message)}}async function Tt(e,t){if(t.timeoutMs<=0)return Et(e);let n=Date.now()+t.timeoutMs;for(;;){if(await Et(e))return!0;if(Date.now()>=n)return!1;await gs(t.pollMs)}}var O,Te,Qn,bt=p(()=>{"use strict";O=require("node:fs/promises");E();Te=f("LockPrimitives"),Qn=300*1e3});var tr,uc,Rt=p(()=>{"use strict";tr=require("node:async_hooks"),uc=new tr.AsyncLocalStorage});function _s(e){return Ke("git",["rev-parse","--git-common-dir"],{cwd:e})}async function bs(e){let t=e??process.cwd(),n=rr.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await _s(t),i=o.trim(),s=(0,J.isAbsolute)(i)?i:(0,J.resolve)(t,i);r=(0,J.join)(s,"jollimemory")}catch{or.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=I(t)}return rr.set(t,r),r}async function Rs(e){let t=await bs(e);return await(0,Je.mkdir)(t,{recursive:!0}),t}async function ws(e,t,n,r){let o=r.timeoutMs??Ts,i=r.pollMs??ir;await(0,Je.mkdir)(e,{recursive:!0});let s=(0,J.join)(e,t),a=await Tt(s,{timeoutMs:o,pollMs:i});a||or.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await St(s,t)}}async function sr(e,t,n={}){return ws(e,Es,t,n)}async function ar(e,t,n={}){let r=n.timeoutMs??Ss,o=n.pollMs??ir,i=await Rs(e),s=(0,J.join)(i,nr);if(!await Tt(s,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await St(s,nr)}}var Je,J,or,nr,Es,Ss,ir,Ts,rr,be=p(()=>{"use strict";Je=require("node:fs/promises"),J=require("node:path");E();F();bt();Rt();or=f("Locks");nr="profile.lock",Es="config.lock",Ss=5e3,ir=25,Ts=5e3,rr=new Map});var Re=p(()=>{"use strict"});var lr=p(()=>{"use strict"});var cr=p(()=>{"use strict"});function dr(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function ur(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return dr(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return dr(o)?String.fromCodePoint(o):t}let r=As[n];return typeof r=="string"?r:t})}var As,mr=p(()=>{"use strict";As={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var xs,Ds,pr=p(()=>{"use strict";lr();Re();cr();mr();xs={decodeHtmlEntities:ur,lowercase:e=>e.toLowerCase()},Ds=new Set(Object.keys(xs))});var fr=p(()=>{"use strict"});var gr=p(()=>{"use strict"});var hr=p(()=>{"use strict"});var At,Ns,xt,Pc,yr=p(()=>{"use strict";Re();At=["mcp__Figma__","mcp__figma__"],Ns={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},xt=Object.keys(Ns),Pc=new Set(xt)});var Cs,Ls,ks,_r=p(()=>{"use strict";yr();Cs="^[0-9a-zA-Z]{22,128}$",Ls=At.flatMap(e=>xt.map(t=>`${e}${t}`)),ks={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...At],exact:Ls}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:Cs},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Er=p(()=>{"use strict"});var Sr=p(()=>{"use strict"});var Tr=p(()=>{"use strict"});var br=p(()=>{"use strict"});var Rr=p(()=>{"use strict"});var wr=p(()=>{"use strict"});var Dt,vs,Is,Nt,qc,Ar=p(()=>{"use strict";Re();Dt=["mcp__Sentry__","mcp__sentry__"],vs="get_sentry_resource",Is="analyze_issue_with_seer",Nt=[vs,Is],qc=new Set(Nt)});var Os,Ps,Ms,Fs,Hs,xr=p(()=>{"use strict";Ar();Os=Dt.flatMap(e=>Nt.map(t=>`${e}${t}`)),Ps="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",Ms="^Issue [A-Za-z0-9_-]{1,128}$",Fs="^Issue [0-9]{1,128}$",Hs={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:Ms,titleFallbackPoorestPattern:Fs,match:{claude:{prefixes:[...Dt],exact:Os}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:Ps},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Dr=p(()=>{"use strict"});var Nr=p(()=>{"use strict"});var Cr=p(()=>{"use strict"});var Lr=p(()=>{"use strict"});var kr=p(()=>{"use strict";fr();gr();hr();_r();Er();Sr();Tr();br();Rr();wr();xr();Dr();Nr();Cr();Lr()});var Ct=p(()=>{"use strict";Re();pr();kr()});function Lt(e){return Bs(e)}function js(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function $s(e){let t=e.indexOf(Ws);return t===-1?e:e.slice(0,t)}function Bs(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let S=1;S<t.length;S++)if(t[S].trim()==="---"){n=S;break}if(n===-1)return null;let r=t.slice(1,n),o=js($s(t.slice(n+1).join(`
`))),i={},s=[],a=!1;for(let S of r){if(a){let b=/^\s+- (.+)$/.exec(S);if(b){try{let $=JSON.parse(b[1]);Gs($)&&s.push($)}catch{}continue}a=!1}if(S.trim()==="fields:"){a=!0;continue}let x=/^([a-zA-Z]+):\s*(.+)$/.exec(S);x&&(i[x[1]]=x[2])}let l=S=>{let x=i[S];if(x!==void 0)try{let b=JSON.parse(x);return typeof b=="string"?b:void 0}catch{return}},c=l("source"),m=l("nativeId");if(c===void 0||m===void 0||!Ks(c))return null;let d=c,g=m,T=l("title"),y=l("url"),u=l("referencedAt"),_=l("sourceToolName");return!T||u===void 0||!_?null:{mapKey:`${d}:${g}`,source:d,nativeId:g,title:T,referencedAt:u,toolName:_,...y!==void 0?{url:y}:{},...s.length>0?{fields:s}:{},...o.length>0?{description:o}:{}}}function Gs(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function Ks(e){return e.length>0&&/^[\w-]+$/.test(e)}var Md,Ws,we=p(()=>{"use strict";E();Ct();Md=f("ReferenceStore");Ws="<!-- jolli:auto-note -->"});var kt=p(()=>{"use strict"});var jd,vr=p(()=>{"use strict";E();jd=f("SkillStore")});function Ae(){return(0,Xe.join)((0,Ir.homedir)(),".jolli","jollimemory")}async function Pt(e){let t=(0,Xe.join)(e,Or);try{let n=await(0,X.readFile)(t,"utf-8"),r=JSON.parse(n);return qs(r)}catch{return Ot.debug("No config file found in %s, using defaults",e),{}}}function qs(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function Js(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:(Ot.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function Mt(e){return Xs(e,Ae())}async function Xs(e,t){return sr(t,async()=>{let{update:n,result:r}=e(await Pt(t));return n!==null&&(await Ys(n,t),Ot.info("Config saved to %s",t)),r})}async function Ys(e,t){let n=await Pt(t),r={...n,...Js(n,e)};await Vn((0,Xe.join)(t,Or),JSON.stringify(r,null,"	"))}async function Ft(){return Pt(Ae())}function vt(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function Pr(e){let t=!1,n={};for(let[s,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=vt(a,Vs);l.changed&&(t=!0),n[s]=l.value}let r;if(e.notes!==void 0){r={};for(let[s,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=vt(a,zs);l.changed&&(t=!0),r[s]=l.value}}let o;if(e.references!==void 0){o={};for(let[s,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=vt(a,Qs);c.changed&&(t=!0),o[s]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var It,X,Ir,Xe,Ot,Or,ru,ou,iu,su,Vs,zs,Qs,xe=p(()=>{"use strict";It=require("node:crypto"),X=require("node:fs/promises"),Ir=require("node:os"),Xe=require("node:path");E();_t();zn();be();we();kt();vr();Ot=f("SessionTracker"),Or="config.json",ru=2880*60*1e3;ou=2880*60*1e3,iu=10080*60*1e3,su=(0,It.randomBytes)(4).toString("hex"),Vs=["ignored","branch","editCount"],zs=["ignored","branch"],Qs=["ignored","branch","commitHash","contentHashAtCommit"]});async function $t(e,t,n={}){await(0,Y.mkdir)((0,Mr.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,Y.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,Y.rename)(r,e)}catch(o){throw await(0,Y.unlink)(r).catch(()=>{}),o}}var Y,Mr,Wt=p(()=>{"use strict";Y=require("node:fs/promises"),Mr=require("node:path")});function na(e,t){let n={...e,manuallyDisabled:t};return delete n.userDisabled,n}async function ra(e){let t=ie(e)?.commonDir;if(t)return t;let n=await N(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,P.isAbsolute)(r)?r:(0,P.join)(e,r):null}async function $r(e){let t=await ra(e);if(t===null)return{profilePath:(0,P.join)(I(e),Fr),legacyMarkerPath:null};let n=(0,P.dirname)(t);return{profilePath:(0,P.join)(I(n),Fr),legacyMarkerPath:(0,P.join)(t,Zs,ea)}}async function Gt(e){try{let t=await(0,De.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function oa(e){try{return await(0,De.stat)(e),!0}catch{return!1}}async function ia(e,t){await $t(e,`${JSON.stringify(t,null,"	")}
`)}function Bt(e,t,n,r,o,i){if(e==="read"){let s=`${o}|${t}|${n}`;if(Hr.has(s))return n;Hr.add(s)}return jr.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",e,n,t,process.pid,r,o,String(i.userDisabled),String(i.manuallyDisabled),i.cutoverFence?i.cutoverFence.at:"none"),n}function sa(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function aa(e){let t;try{t=await qn(e)}catch{t=[e]}for(let n of t)if(await oa((0,P.join)(I(n),ta)))return!0;return!1}async function Wr(e){let{profilePath:t}=await $r(e),n=await Gt(t);if(n.userDisabled!==void 0){let i=await Ur(e,t,n.userDisabled===!0);return Bt("read","migrate:userDisabled",i,e,t,n)}if(n.manuallyDisabled!==void 0)return Bt("read","manuallyDisabled",n.manuallyDisabled===!0,e,t,n);let r=await aa(e),o=await Ur(e,t,r);return Bt("read","migrate:legacy-marker",o,e,t,n)}async function Ur(e,t,n){let r=await ar(e,async()=>{let o=await Gt(t),i=o.userDisabled??o.manuallyDisabled,s=i===void 0?n:i===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||(jr.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",s,process.pid,t,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",sa()),await ia(t,na(o,s))),s}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function Ne(e){let{profilePath:t}=await $r(e);return(await Gt(t)).cutoverFence??null}var De,P,jr,Fr,Zs,ea,ta,Hr,le=p(()=>{"use strict";De=require("node:fs/promises"),P=require("node:path");E();F();Wt();Be();q();be();jr=f("RepoProfile"),Fr="profile.json",Zs="jollimemory",ea="backfill-card-dismissed",ta="disabled-by-user";Hr=new Set});function Br(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var Gr=p(()=>{"use strict"});var Kr,qr,Jr,Xr,Yr,Vr,zr,Qr,Zr,eo,Kt,to,no,ro,oo,Ye=p(()=>{"use strict";Kr=`
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
`,qr=`
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
`,Jr=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,Xr=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,Yr=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,Vr=`
CREATE TABLE session_usage_events (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  -- The response's identity, or 'line:<n>' when the source cannot name one.
  dedup_key        TEXT NOT NULL,
  -- THIS response's instant. The column the whole table exists for; named for
  -- what it IS rather than what reads do with it, because those bucket it by a
  -- timezone the table deliberately does not store.
  responded_at_ms  INTEGER NOT NULL,
  -- Empty string when the transcript recorded usage without naming a model,
  -- matching how the whole-slice aggregate buckets those.
  model            TEXT NOT NULL,
  input_tokens     INTEGER NOT NULL DEFAULT 0,
  output_tokens    INTEGER NOT NULL DEFAULT 0,
  cached_tokens    INTEGER NOT NULL DEFAULT 0,
  est_cost_usd     REAL,
  -- Sync stamp, same rule as SYNC_STAMP_DDL's columns: bumped on every write,
  -- never a business time. See that constant for why the two cannot be one.
  updated_at_ms    INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, dedup_key)
) STRICT, WITHOUT ROWID;
-- Every read is "this window", and the window is on the RESPONSE's own time
-- rather than its session's \u2014 which is the point of the table.
CREATE INDEX ix_sue_at ON session_usage_events(responded_at_ms);
CREATE INDEX ix_sue_sync ON session_usage_events(updated_at_ms);
`,zr=`
ALTER TABLE sessions            ADD COLUMN written_at_ms INTEGER NOT NULL DEFAULT 0;
ALTER TABLE session_model_usage ADD COLUMN updated_at_ms INTEGER NOT NULL DEFAULT 0;
ALTER TABLE session_tool_use    ADD COLUMN updated_at_ms INTEGER NOT NULL DEFAULT 0;
ALTER TABLE recall_receipts     ADD COLUMN updated_at_ms INTEGER NOT NULL DEFAULT 0;

UPDATE sessions        SET written_at_ms = updated_at_ms WHERE written_at_ms = 0;
UPDATE recall_receipts SET updated_at_ms = at_ms         WHERE updated_at_ms = 0;
-- COALESCE is load-bearing twice over: the column is NOT NULL, so a child row
-- whose parent session is missing would abort the migration outright \u2014 and 0 is
-- the right value for it anyway, matching a row that predates the column.
UPDATE session_model_usage
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_model_usage.session_event_id), 0)
 WHERE updated_at_ms = 0;
UPDATE session_tool_use
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_tool_use.session_event_id), 0)
 WHERE updated_at_ms = 0;
`,Qr=`
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
`,Zr=`
DROP TRIGGER IF EXISTS repos_no_delete;
`,eo=`
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
`,Kt=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,to=`
ALTER TABLE commits ADD COLUMN written_at_ms INTEGER NOT NULL DEFAULT 0;

-- IF NOT EXISTS because an earlier, unreleased build of this branch already
-- created this table on some machines (a developer's own among them) under a
-- migration name this log has no row for. Without the guard, such a database
-- re-runs the entry, dies on "table stats_daily already exists", and every open
-- after that fails until 'doctor --mark-migration' is run by hand.
--
-- The ALTER above cannot be guarded the same way -- SQLite has no
-- ADD COLUMN IF NOT EXISTS -- so a database that also already has that column
-- still needs that repair, which is precisely the state 'doctor
-- --mark-migration' documents itself as existing for. The two statements are
-- deliberately NOT split into separate entries to make each independently
-- markable: the split would leave a machine that has ALREADY applied this entry
-- under this name re-running the ALTER from a new slot, turning a repair anyone
-- can do into a failure everyone gets.
CREATE TABLE IF NOT EXISTS stats_daily (
  -- 0 on the 'built' sentinel, which speaks for the whole day rather than for
  -- one repo; a real repos.id on every data row. No foreign key, for that
  -- reason and because nothing here should cascade: this table is rebuilt, not
  -- maintained, and its delete path is explicit.
  repo_id       INTEGER NOT NULL,
  -- IANA zone the day was cut in. In the key because a day boundary is a
  -- property of the asker: a reader in another zone misses and builds its own
  -- rows rather than reading someone else's days as if they were its own.
  tz            TEXT NOT NULL,
  day           TEXT NOT NULL,           -- local calendar day, YYYY-MM-DD
  -- One of the spend axes, or 'tokens', or the 'built' sentinel.
  --
  -- The sentinel is what separates "this day was computed and had no activity"
  -- from "this day was never computed". Without it every quiet day misses
  -- forever and is recomputed on every request \u2014 the days most likely to be
  -- quiet being exactly the ones a wide range is full of. It is stored ONCE per
  -- day rather than once per repo so that a repo added later cannot leave old
  -- days permanently unavailable: a repo that did not exist contributed
  -- nothing, and when it does contribute, its own write stamp marks the day
  -- stale and the day is rebuilt.
  kind          TEXT NOT NULL,
  -- The series within the kind: a model/branch/ticket name for an axis,
  -- input|output|cached for 'tokens', '' for the sentinel.
  series_key    TEXT NOT NULL,
  -- REAL, not INTEGER: the category and branch axes apportion a commit's tokens
  -- across its topics or branches, so a day's contribution is fractional. The
  -- read path rounds at emission exactly as the live path does.
  value         REAL NOT NULL,
  cost_usd      REAL NOT NULL DEFAULT 0,
  -- When this day was computed. Staleness is "a source row was written after
  -- this", so it is compared against the sources' own write stamps and must
  -- never hold a business time.
  built_at_ms   INTEGER NOT NULL,
  -- Sync stamp, same rule as SYNC_STAMP_DDL's columns.
  updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, tz, day, kind, series_key)
) STRICT, WITHOUT ROWID;
${Kt}
`,no=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,ro=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,oo=`
UPDATE sessions        SET written_at_ms = COALESCE(updated_at_ms, 0) WHERE written_at_ms IS NULL;
UPDATE recall_receipts SET updated_at_ms = COALESCE(at_ms, 0)         WHERE updated_at_ms IS NULL;
UPDATE session_model_usage
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_model_usage.session_event_id), 0)
 WHERE updated_at_ms IS NULL;
UPDATE session_tool_use
   SET updated_at_ms = COALESCE(last_call_at_ms,
                                (SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_tool_use.session_event_id), 0)
 WHERE updated_at_ms IS NULL;
`});function ke(){return(0,Ve.join)(Ae(),"jollimemory.db")}function te(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>Le.major?!0:n<Le.major?!1:r>=Le.minor}function de(e){try{let t=e.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),n=Number.parseInt(t?.value??"",10);return Number.isFinite(n)?n:0}catch{return 0}}function ua(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function Xt(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=ua(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:w(t),tableConfirmed:n==="present"}}}function io(e){let t=Xt(e);return t.kind==="rows"?t.rows:void 0}function Ce(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function ma(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function pa(e){let t=new Map;for(let n of e){if(n.outcome!=="applied")continue;let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function fa(e){return ue.findIndex(t=>t.name===e)}function ga(e){let t=Xt(e);if(t.kind==="none")return;if(t.kind==="unreadable"){ce.has(so)||(ce.add(so),H.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(ue.map(o=>o.name));for(let[o,i]of ma(n))r.has(o)||ce.has(o)||(ce.add(o),H.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,i.applied_by,ye));for(let[o,i]of pa(n))r.has(o)&&(ce.has(o)||i.ddl!==ue[fa(o)].ddl&&(ce.add(o),H.warn("migration %s (slot %d) was applied by %s on %s with DIFFERENT DDL than this build (%s) carries \u2014 run `jolli doctor --schema-log` to see the log",o,i.slot,i.applied_by,new Date(i.applied_at_ms).toISOString().slice(0,10),ye)))}function ha(e,t={}){let n=t.now??Date.now,r=t.appliedBy??ye,o=de(e),i=Xt(e),s=new Set,a=[];if(i.kind==="rows")for(let d of i.rows)(d.outcome==="applied"||d.outcome==="baseline")&&s.add(d.name);else{let d=Math.min(o,ue.length),g=ue.slice(0,d).map((T,y)=>({slot:y,name:T.name,ddl:T.ddl}));for(let T of g)s.add(T.name);i.kind==="none"?a=g:H.warn(i.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 migrating from the version stamp and recording nothing":"the database could not be queried for its migration log (%s) \u2014 migrating from the version stamp and recording nothing",i.reason)}let l=ue.map((d,g)=>({m:d,slot:g})).filter(({m:d})=>!s.has(d.name));if(l.length===0)return;let c=[],m=()=>{for(let d of a)Ce(e,{...d,outcome:"baseline",appliedBy:r,atMs:n(),durationMs:0});a=[];for(let d of c)Ce(e,d);c.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:d,slot:g}of l){let T=n();e.exec("BEGIN IMMEDIATE");try{let y=io(e);if(y?.some(h=>h.name===d.name&&(h.outcome==="applied"||h.outcome==="baseline"))){m(),Ce(e,{slot:g,name:d.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:d.ddl}),e.exec("COMMIT");continue}if(!y&&de(e)>g){e.exec("COMMIT");continue}e.exec(d.ddl);let u={slot:g,name:d.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-T,ddl:d.ddl};io(e)?(m(),Ce(e,u)):c.push(u);let _=Math.max(de(e),g+1);ya(e,"schema_version",String(_)),e.exec("COMMIT")}catch(y){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(d.name),Ce(e,{slot:g,name:d.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-T,ddl:d.ddl})}catch(u){H.debug("could not record the failed migration %s: %s",d.name,w(u))}throw y}}}finally{e.exec("PRAGMA foreign_keys = ON")}H.info("dashboard schema migrated %d \u2192 %d (%s)",o,de(e),l.map(({m:d})=>d.name).join(", "))}function ya(e,t,n){e.prepare(`INSERT INTO schema_meta (key, value) VALUES (?, ?)
		 ON CONFLICT(key) DO UPDATE SET value = excluded.value`).run(t,n)}function _a(e){ao!==e&&(ao=e,H.warn("database is at format v%d, this build (%s) reads v%d \u2014 data written by newer builds is not visible here",e,ye,Jt))}function Ea(e){let t=(0,Ve.dirname)(e);try{(0,U.mkdirSync)(t,{recursive:!0,mode:448}),((0,U.statSync)(t).mode&511)!==448&&(0,U.chmodSync)(t,448)}catch(n){H.warn("could not restrict %s to owner-only: %s",t,w(n))}}function Sa(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,U.statSync)(t).mode&511)!==384&&(0,U.chmodSync)(t,384)}catch(n){ut(n)||H.warn("could not restrict %s to 0600: %s",t,w(n))}}async function lo(e,t){if(!te())throw new qt(process.versions.node);let n=t.dbPath??ke(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||Ea(n);let{DatabaseSync:i}=await import("node:sqlite");for(let s=1;;s++){let a;try{a=new i(n,{readOnly:e});for(let l of e?ca:la)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??da}`),e||Sa(n),a}catch(l){try{a?.close()}catch{}if(Br(l)?.kind!=="locked"||s>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(s-1)))}}}async function co(e,t={}){let n=await lo(!1,t);try{let r=de(n);return r>Jt&&_a(r),ga(n),ha(n),await e(n)}finally{n.close()}}async function Yt(e,t={}){let n=await lo(!0,t);try{return await e(n)}finally{n.close()}}function ze(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var U,Ve,H,Jt,Le,qt,la,ca,da,ue,ce,so,ao,V=p(()=>{"use strict";U=require("node:fs"),Ve=require("node:path");ct();xe();Gr();E();Ye();H=f("DashboardDb"),Jt=8,Le={major:22,minor:13};qt=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${Le.major}.${Le.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},la=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],ca=["PRAGMA foreign_keys = ON"],da=2e3,ue=[{name:"BASELINE_DDL",ddl:Kr+`
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
`+eo},{name:"RECALL_RECEIPTS_DDL",ddl:qr},{name:"SKILL_CONTEXT_KIND_DDL",ddl:Jr},{name:"EVENT_FAILED_KIND_DDL",ddl:Xr},{name:"TOOL_CALL_TIME_DDL",ddl:Yr},{name:"SCHEMA_MIGRATIONS_DDL",ddl:Qr},{name:"REPOS_DELETE_ALLOWED_DDL",ddl:Zr},{name:"SESSION_STATS_SYNC_DDL",ddl:zr+Vr+to+Kt+no+ro+oo}];ce=new Set,so="\0unreadable-log";ao=0});function Vt(e){let t=i=>{try{return(0,ve.statSync)(`${e}${i}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var ve,Nu,zt=p(()=>{"use strict";ve=require("node:fs");E();Nu=f("DbDetection")});var uo=p(()=>{"use strict";F()});var Fu,mo=p(()=>{"use strict";E();uo();K();Fu=f("MetadataManager")});var $u,po=p(()=>{"use strict";E();F();$u=f("SshAliasResolver")});var zu,fo,go=p(()=>{"use strict";E();F();mo();K();po();zu=f("KBPathResolver"),fo=new Set(["github.com","gitlab.com","bitbucket.org"])});async function _o(e){let t=await N(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?Ie(e):Ta(n,e)}function Ta(e,t){let n=e.trim();if(n.length===0)return Ie(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let s=r[2].toLowerCase(),a=yo(s,ho(r[3]));return`https://${s}/${a}`}let o;try{o=new URL(n)}catch{return Ie(t)}let i=o.protocol.replace(/:$/,"").toLowerCase();if(i==="ssh"||i==="git"||i==="http"||i==="https"){let s=o.hostname.toLowerCase(),a=yo(s,ho(o.pathname.replace(/^\/+/,""))),l=Ra(i,o.port);return`https://${s}${l}/${a}`}return Ie(i==="file"?o.pathname:t)}function Ie(e){let t=Ee(Z(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function ho(e){let t=Ee(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),Ee(t)}function yo(e,t){return fo.has(e)?t.toLowerCase():t}function Ra(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===ba[e]?"":`:${t}`:`:${t}`}var ba,Eo=p(()=>{"use strict";q();go();K();ba={ssh:"22",git:"9418"}});async function xa(e){try{let n=await _o(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){wa.debug("no canonical remote for %s (%s) \u2014 using path identity",e,w(n))}let t=(0,So.createHash)("sha256").update(Z(e)).digest("hex").slice(0,32);return{identity:`${Aa}${t}`}}async function Oe(e){return xa(await Kn(e))}var So,wa,Aa,Pe=p(()=>{"use strict";So=require("node:crypto");Wt();q();Eo();be();K();le();xe();E();wa=f("RepoRegistry"),Aa="local:"});var bo={};at(bo,{hasCutoverRow:()=>La,resetCutoverRouterCaches:()=>Na,resolveCutoverRoute:()=>Zt});function Na(){Qt.clear()}async function Ca(e){let t=Qt.get(e);if(t!==void 0)return t;let{identity:n}=await Oe(e);return Qt.set(e,n),n}async function To(e,t){if(!te())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=Vt(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let i=await Ca(e),s=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(i);if(!s)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(s.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:w(r)}}}async function La(e,t={}){return(await To(e,t.dbPath??ke())).kind==="row"}async function Zt(e,t={}){let n=await Ne(e).catch(()=>null),r=await To(e,t.dbPath??ke());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(Da.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var Da,Qt,en=p(()=>{"use strict";le();E();V();zt();Pe();Da=f("CutoverRouter"),Qt=new Map});function ni(){return"0.99.13"}function Zo(e){return/^\d/.test(e)}function ri(e,t){if(!Zo(e)||!Zo(t))return!1;let n=i=>i.split(".").map(s=>Number.parseInt(s,10)||0),r=n(e),o=n(t);for(let i=0;i<Math.max(r.length,o.length);i++){let s=r[i]??0,a=o[i]??0;if(s!==a)return s>a}return!1}function nt(e,t=ml){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,i=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",s),e.removeListener("close",a),e.removeListener("error",a),n(c))},s=c=>{r=Buffer.concat([r,c]);let m=r.indexOf(10);if(m===-1){r.length>pl&&i(void 0);return}i({line:r.subarray(0,m).toString("utf8"),rest:r.subarray(m+1)})},a=()=>i(void 0),l=setTimeout(()=>i(void 0),t);l.unref?.(),e.on("data",s),e.once("close",a),e.once("error",a)})}function oi(e,t){return(0,ge.join)((0,ei.tmpdir)(),`.jolli-${e}-${t}`)}function dn(e){return`${JSON.stringify(e)}
`}var cn,ei,ge,ti,ln,ml,pl,un=p(()=>{"use strict";cn=require("node:fs"),ei=require("node:os"),ge=require("node:path"),ti=require("node:url");K();ml=1e4,pl=4096});function hl(e){let t=(0,re.join)((0,re.dirname)((0,pn.fileURLToPath)(e)),fl);return(0,mn.existsSync)(t)?t:void 0}function fn(e,t=process.argv[1],n=process.execArgv){let r=hl(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,re.dirname)((0,pn.fileURLToPath)(e)),i=(0,re.join)((0,re.dirname)(o),gl);if(t?.endsWith(".ts")&&(0,mn.existsSync)(i))return{entry:i,nodeArgs:n}}var mn,re,pn,fl,gl,ii=p(()=>{"use strict";mn=require("node:fs"),re=require("node:path"),pn=require("node:url"),fl="Cli.js",gl="Cli.ts"});function _l(e){return oi("global",e)}function El(e=(0,ai.homedir)()){return(0,si.createHash)("sha256").update(qe(e,"win32")).digest("hex").slice(0,16)}function rt(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${El(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,li.join)(_l(n),"daemon.sock")}function yn(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:i,startedAt:s}=t;if(!(n!=="hello"||r!==yl)&&!(typeof o!="string"||typeof i!="number"||typeof s!="number"))return{t:"hello",protocol:r,version:o,pid:i,startedAt:s}}var si,ai,li,yl,gn,hn,ci=p(()=>{"use strict";si=require("node:crypto"),ai=require("node:os"),li=require("node:path");un();K();yl=1,gn="global-daemon",hn=300});var mi={};at(mi,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>En,ensureGlobalDaemon:()=>Rl,probeGlobalDaemon:()=>xl,retireGlobalDaemon:()=>Al,shouldSkipGlobalDaemon:()=>Sn,triggerEnsureGlobalDaemon:()=>wl});function Sn(e){return e!==null&&Tl.has(e)}function Tn(e){return new Promise(t=>{let n=!1,r=(0,ui.connect)(e),o=s=>{n||(n=!0,clearTimeout(i),r.removeAllListeners("connect"),s.socket===void 0&&r.destroy(),t(s))},i=setTimeout(()=>o({socket:void 0}),Sl);i.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",s=>{if(n){k.warn("global daemon socket error after connect: %s",w(s));return}o({socket:void 0,code:s.code})})})}async function bl(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,di.unlink)(e)}catch{}}async function Rl(e={}){try{if(Sn(e.command??null))return"skipped-excluded-command";if(!te(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??rt(),{socket:n,code:r}=await Tn(t);if(!n)return r==="ECONNREFUSED"&&await bl(t),(e.spawnDaemon??Dl)(t),"spawned";try{let o=await nt(n,e.helloTimeoutMs??hn),i=o?yn(o.line):void 0;if(!i)return"already-running";let s=e.ownVersion??ni();return ri(s,i.version)?(n.write(dn({t:"retire"})),k.info("retiring global daemon pid %d (v%s < v%s)",i.pid,i.version,s),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return k.warn("could not ensure the global daemon: %s",w(t)),"failed"}}function wl(e={}){try{return Sn(e.command??null)||!te(e.nodeVersion??process.versions.node)?!1:(Nl(e.socketPath),!0)}catch(t){return k.warn("could not trigger the global daemon ensure helper: %s",w(t)),!1}}async function Al(e={}){try{let{socket:t}=await Tn(e.socketPath??rt());return t?(await nt(t,hn),t.write(dn({t:"retire"})),t.end(),!0):!1}catch(t){return k.warn("could not retire the global daemon: %s",w(t)),!1}}async function xl(e){try{let{socket:t}=await Tn(e??rt());if(!t)return;try{let n=await nt(t,5e3);return n?yn(n.line):void 0}finally{t.end()}}catch{return}}function Dl(e){let t=fn(__jmImportMetaUrl);if(!t){k.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=Q(process.execPath,[...t.nodeArgs,t.entry,gn,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,_n.homedir)()});n.on("error",r=>k.warn("global daemon failed to spawn: %s",w(r))),n.unref(),k.info("spawned global daemon (pid %d)",n.pid??-1)}function Nl(e){let t=fn(__jmImportMetaUrl);if(!t){k.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,En];e&&n.push("--socket",e);let r=Q(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,_n.homedir)()});r.on("error",o=>k.warn("global daemon ensure helper failed to start: %s",w(o))),r.unref(),k.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var di,ui,_n,k,En,Sl,Tl,pi=p(()=>{"use strict";di=require("node:fs/promises"),ui=require("node:net"),_n=require("node:os");un();V();E();ii();F();ci();k=f("EnsureGlobalDaemon"),En="global-daemon-ensure",Sl=200,Tl=new Set([gn,En,"mcp","mcp-serve","daemon","uninstall","disable"])});var Kl={};at(Kl,{armSessionStartDeadline:()=>hi,buildSessionStartContext:()=>Ri,computeLoginReminder:()=>_i,ensurePluginDefaultProvider:()=>vl,formatRecallSuggestion:()=>Ai,getAuthFailureReminder:()=>Ti,getLoginReminder:()=>Ei,main:()=>bi,warmBriefingCache:()=>Ol});module.exports=Oi(Kl);var D=require("node:fs"),v=require("node:path"),gi=require("node:url");var he=require("node:fs");var An=require("node:path"),Pi="JOLLI_LOCAL_AGENT_CHILD",Mi=".jolli-local-agent-child";function xn(e=process.env,t){return e[Pi]==="1"?!0:t!==void 0&&(0,he.existsSync)((0,An.join)(t,Mi))}ct();Be();q();function Xn(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}xe();var Ht={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},cu=Object.keys(Ht);function Ut(e){return e===void 0?void 0:Ht[e]?.localAgentTool}function jt(e,t){return(e===void 0?void 0:Ht[e]?.skillInvocation)?.replace("<name>",t)}le();xe();en();Pe();E();q();le();var me=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return gt(W,t,this.cwd)}async batchReadFiles(t){return ht(W,t,this.cwd)}async writeFiles(t,n){if(ae())return;if(await Ne(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Error("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(en(),bo));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Error("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Gn(W,t,n,this.cwd)}async listFiles(t){return[...await yt(W,t,this.cwd)]}async exists(){return pt(W,this.cwd)}async ensure(){await ft(W,this.cwd)}};var Ko=require("node:zlib");V();var Bo=require("node:zlib");we();function Ro(e){return e.version>=4}function ka(e){return[...e??[]].reverse()}function Me(e){let t=ka(e.children).flatMap(Me),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function tn(e){return Ro(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):Me(e)}function nn(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...nn(n));return t}function pe(e,t){return e.transcripts!==void 0?e.transcripts:nn(e).filter(n=>t.has(n))}E();V();q();E();E();_t();q();be();Rt();we();var va="local-agent-auth";function wo(e){return e.summaryError===va}var Ao="sonnet",xo="inherit",Qe={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:Ao,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:Ao,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:xo,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:xo,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function Ze(e){return Qe[e]?.label??"Local agent"}function Do(e){return Qe[e]?.loginHint??"Sign in to your local agent CLI."}function No(e){let t=Qe[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}var Cm=[...new Set(Object.values(Qe).flatMap(e=>(e.models??[]).map(t=>t.id)))];Ct();function M(e){return e.generatedAt||e.commitDate}kt();var Ia;async function Oa(e){let t=await Lo(e);return t.ok?t.storage:(rn.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new me(e))}async function Pa(e,t){return e??Ia??await Oa(t)}var rn=f("SummaryStore"),Ma="index.json";async function et(e,t){return Fa(e,t)}async function Fa(e,t){let n=await Pa(t,e),r=await n.readFile(Ma);if(!r)return rn.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return rn.error("Failed to parse index.json: %s",o.message),null}}function Co(e){let t=tn(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}var xp=f("ProcessedSourceStore");le();we();E();var Lp=f("TopicIndexStore");var Ha=new Set(["index","processed"]);function Io(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!Ha.has(t)}var Oo=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",Io]],vp=Oo.map(([e])=>e),Ip=Object.fromEntries(Oo);E();var Hp=f("TopicPageStore");E();V();bt();E();V();zt();Pe();var Kp=f("ImportState");var qp=10*6e4;Pe();Ye();E();V();E();var Yp=f("DashboardScope");var Po=new Map;function Ua(e){let t=Po.get(e);return t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),Po.set(e,t)),t}function ja(e,t){let n=Ua(t).formatToParts(e),r=o=>Number.parseInt(n.find(i=>i.type===o)?.value??"0",10);return{year:r("year"),month:r("month"),day:r("day"),hour:r("hour"),minute:r("minute")}}function Mo(e,t){let n=ja(e,t);return`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`}var Fo=`EXISTS (SELECT 1 FROM session_usage_events e0
	                                   WHERE e0.session_event_id = s.event_id)
	                         AND (SELECT COALESCE(SUM(e2.input_tokens + e2.output_tokens + e2.cached_tokens), 0)
	                                FROM session_usage_events e2
	                               WHERE e2.session_event_id = s.event_id)
	                             >= s.input_tokens + s.output_tokens + s.cached_tokens`,Zp=`(${Fo})`,ef=`NOT (${Fo})`,on=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,sn="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",tf=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${sn} AS at_ms
	  FROM memories m
	  ${on}
	 WHERE m.parent_hash IS NULL
)`,Fe=`SELECT ${sn} AS at_ms
	  FROM memories m
	  ${on}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`;var gf=f("StatsRollup"),Ba={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},Ga=Object.keys(Ba),Ka="built",qa="tokens";var hf=[...Ga,qa,Ka];function He(e,t){if(t.length===0)return;let n=e.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(n.length!==0)for(let{tz:r}of n){let o=[...new Set(t.map(i=>Mo(i,r)))];e.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(r,...o)}}var Ja=f("SotImport");function j(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function Ho(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}var Xa=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function Uo(e,t,n){for(let{path:r,accepts:o}of Xa){let i=e;for(let a of r){if(i==null||typeof i!="object"){i=void 0;break}i=i[a]}i==null||(o==="integer"?Number.isInteger(i):typeof i=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof i} (${JSON.stringify(i)}) \u2014 column reads NULL`)}}function jo(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function $o(e,t,n,r,o){let i=e.prepare(Fe),s=e.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(t,n)?.target_hash,a=s!==void 0&&s!==r?[r,s]:[r],l=d=>i.get(t,d)?.at_ms??void 0,c=[],m=!1;for(let d of a){let g=i.get(t,d);d===r&&(m=g!==void 0),g?.at_ms!=null&&c.push(g.at_ms)}if(!m)return{stored:!1,days:[]};e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
		 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,n,r,o);for(let d of a){let g=l(d);g!==void 0&&c.push(g)}return s!==void 0&&s!==r&&Ja.info("alias %s retargeted %s -> %s",n,s,r),{stored:!0,days:c}}function Wo(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let i=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),s=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:m}=o.shift();a++;let d=s.get(l);(d.root_hash!==c||d.depth!==m)&&i.run(c,m,t,l);for(let g of r.get(l)??[])o.push({hash:g,root:c,depth:m+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}Ye();var ne=f("SotWrite"),Ya={plans:"plan",notes:"note",references:"reference",skills:"skill"};function Va(e){let t=[],n=(r,o,i)=>{t.push({hash:r.commitHash,parentInFile:o,pos:i,summary:r}),(r.children??[]).forEach((s,a)=>{n(s,r.commitHash,a)})};return n(e,null,null),t}function za(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=j(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push(Va(c));continue}if(n.path==="index.json"){if(r)continue;let c=j(n.content);for(let m of c?.entries??[])m.treeHash&&t.treeHashes.set(m.commitHash,m.treeHash);for(let[m,d]of Object.entries(c?.commitAliases??{}))t.aliases.set(m,d);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=j(n.content);for(let m of c?.topics??[])m.stableSlug&&m.summary!==void 0&&t.topicSummaries.set(m.stableSlug,m.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let i=n.path.match(/^transcripts\/(.+)\.json$/);if(i){r?t.transcriptDeletes.push(i[1]):t.transcriptWrites.push({id:i[1],content:n.content});continue}let s=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(s){let c=Ya[s[1]];r?t.contextDeletes.push({kind:c,key:s[2]}):t.contextWrites.push({kind:c,key:s[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function Ue(e,t){ne.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function Qa(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function Za(e,t,n,r){let o=[];for(let y of n.summaryDeletes){let u=e.prepare(Fe).get(t,y);u?.at_ms!=null&&o.push(u.at_ms),e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,y)}if(He(e,o),n.summaryTrees.length===0)return;let i=new Set;for(let y of n.summaryTrees)for(let u of y)"children"in u.summary&&i.add(u.hash);let s=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let y of i)s.run(t,y);let a=new Map;for(let y of n.summaryTrees)for(let u of y){if(u.parentInFile===null||u.pos===null)continue;let _=a.get(u.parentInFile)??new Map;_.set(u.hash,u.pos),a.set(u.parentInFile,_)}let l=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),c=(y,u)=>ne.info("write degraded a value: %s %s",y,u);for(let y of n.summaryTrees)for(let u of y){let _=u.parentInFile,h=u.pos;if(u.parentInFile===null){let b=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,u.hash);b&&(_=b.parent_hash,h=b.child_pos,h!==null&&h>=1e6&&((_===null?void 0:a.get(_))?.has(u.hash)||(_=null,h=null)))}let S=JSON.stringify("children"in u.summary?{...u.summary,children:[]}:u.summary);l.run(t,u.hash,_,h,u.hash,0,S,n.treeHashes.get(u.hash)??null,r,r,jo(u.summary,u.hash,r,c)),Uo(u.summary,u.hash,c),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,u.hash);let x=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(u.summary.topics??[]).forEach((b,$)=>{if(!b.title){c("topic",`${u.hash}[${$}] has no title`);return}x.run(t,u.hash,$,b.category??null,b.importance??null,b.title)})}let m=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`),d=[],g=e.prepare(`SELECT m.commit_hash FROM memories m
		  WHERE m.repo_id = ? AND m.parent_hash = ? AND m.child_pos >= ${1e6}`),T=e.prepare(Fe);for(let y of i){for(let{commit_hash:u}of g.all(t,y)){let _=T.get(t,u);_?.at_ms!=null&&d.push(_.at_ms)}m.run(t,y)}He(e,d),Wo(e,t)}function el(e,t,n,r){let o=[];for(let[i,s]of n.aliases){let a=$o(e,t,i,s,r);if(!a.stored){ne.info("dropping alias %s -> %s (no such memory row)",i,s);continue}o.push(...a.days)}He(e,o)}function tl(e,t,n,r){let o=new Set;for(let i of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,i),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,i),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,i);for(let{id:i,content:s}of n.transcriptWrites){let a=j(s);if(!a||!Array.isArray(a.sessions)){Ue("transcript",i);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,i,(0,Bo.deflateSync)(Buffer.from(s,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,i);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,i,l.sessionId,l.source??null);o.add(i)}return o}function nl(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),i=new Set(n.summaryTrees.flat().flatMap(c=>[...pe(c.summary,r)])),s=[...r].filter(c=>!i.has(c));if(s.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of s){let m=a.all(t,`%${c}%`);for(let d of m){if(o.has(d.commit_hash))continue;let g=j(d.summary_json);g&&pe(g,r).includes(c)&&(l.run(t,d.commit_hash,c),ne.info("linked stored transcript %s to memory %s written earlier",c,d.commit_hash))}}}function rl(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let i of o){let s=[...new Set(pe(i.summary,r).filter(a=>r.has(a)))];for(let a of i.summary.transcripts??[])r.has(a)||ne.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",i.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,i.hash);for(let a of s)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,i.hash,a)}}function ol(e,t,n,r){for(let{kind:i,key:s}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,i,s);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:i,key:s,body:a}of n.contextWrites){if(i==="reference"){let m=Lt(a);if(!m){Ue("reference frontmatter",`references/${s}.md`);continue}o.run(t,i,s,m.source,m.nativeId,m.toolName,m.referencedAt,null,null,m.title,m.url??null,a,r,r);continue}let l=i==="plan"||i==="note"?Qa(e,t,s):null,c=i==="plan"&&l!==null?s.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,i,s,null,null,null,null,c,l,Ho(a),null,a,r,r)}}function il(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:i}of n.progressWrites){let s=j(i);if(!s){Ue("plan-progress",`plan-progress/${o}.json`);continue}let a=s.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){ne.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,i,r)}}function sl(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:i}of n.topicPageWrites){let s=j(i);if(!s?.stableSlug||s.title===void 0||s.content===void 0||!s.lastUpdatedAt){Ue("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,s.stableSlug,s.title,n.topicSummaries.get(s.stableSlug)??null,s.content,JSON.stringify(s.relatedBranches??[]),s.lastUpdatedAt,s.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,s.stableSlug),(s.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,s.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,i]of n.topicSummaries){let s=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(i,t,o);Number(s.changes)===0&&ne.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=j(n.processedSet);if(!o?.processed)Ue("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let i=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[s,a]of Object.entries(o.processed))for(let l of a)i.run(t,s,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function Go(e,t,n,r){let o=za(n);ze(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),Za(e,t,o,r),el(e,t,o,r);let i=tl(e,t,o,r);rl(e,t,o),nl(e,t,o,i),ol(e,t,o,r),il(e,t,o,r),sl(e,t,o,r)})}E();function qo(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function an(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>an(e,r))),n}function al(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),i=o.find(s=>s.commit_hash===n);return i?an(qo(o),i):void 0}function ll(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var tt=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return Yt(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return Yt(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let i of t)o.set(i,this.readOne(n,r,i));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=al(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let i=r.match(/^topics\/([^/]+)\.json$/);if(i)return this.synthTopicPage(t,n,i[1]);let s=r.match(/^transcripts\/(.+)\.json$/);if(s){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,s[1]);return c?(0,Ko.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),i=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...ll(a.diff_stats_json)}})),s=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:i,...s.length>0&&{commitAliases:Object.fromEntries(s.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=qo(r),i=r.filter(s=>s.parent_hash===null).map(s=>Co(an(o,s)));return JSON.stringify({version:1,entries:i},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(i=>({type:i.ref_type,id:i.ref_id,timestamp:i.ts,...i.branch!==null&&{branch:i.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(i=>({stableSlug:i.stable_slug,title:i.title,...i.summary!==null&&{summary:i.summary},relatedBranches:JSON.parse(i.related_branches_json),sourceRefs:this.topicRefs(t,n,i.stable_slug),lastUpdatedAt:i.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let i of r)o[i.source_type].push(i.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(s,a)=>n.prepare(s).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",s=>`summaries/${s}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",s=>`transcripts/${s}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",s=>`plans/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",s=>`notes/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",s=>`references/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",s=>`skills/${s}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",s=>`plan-progress/${s}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",s=>`topics/${s}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",s=>s)].filter(s=>s.startsWith(t)).sort()},[])}async writeFiles(t,n){ae()||await co(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);Go(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(i=>i.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(i=>({commitHash:i.commit_hash,parentCommitHash:null,...i.tree_hash!==null?{treeHash:i.tree_hash}:{},...i.commit_type!==null?{commitType:i.commit_type}:{},commitMessage:i.commit_message??"",commitDate:i.commit_date??"",branch:i.branch??"",generatedAt:i.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let i of r){let s=o.get(i.commit_hash)??[];s.push(i.title),o.set(i.commit_hash,s)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),i=new Map;for(let s of o){let a=i.get(s.stable_slug)??[];a.push(s.ref_type),i.set(s.stable_slug,a)}return r.map(s=>({stableSlug:s.stable_slug,title:s.title,summary:s.summary,content:s.content_md,relatedBranches:JSON.parse(s.related_branches_json),lastUpdatedAt:s.last_updated_at,refTypes:i.get(s.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var cl=3e3,Jo=new Map;async function Xo(e){let t=Date.now(),n=Jo.get(e);if(n&&t-n.at<cl)return n.route;let r=await Zt(e);return Jo.set(e,{route:r,at:t}),r}async function Yo(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await Oe(t);return new tt(r)}return new me(e)}async function Vo(e){let t=e??process.cwd(),n=await Xo(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return Yo(e,t,n)}async function Lo(e){let t=e??process.cwd(),n;try{n=await Xo(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await Yo(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}E();F();function dl(e){return[`1) Re-authenticate ${Ze(e)}:  ${Do(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function ul(e,t){let n=No(e);return n===null?[]:[`${t}${n}`]}function zo(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${Ze(e)} authentication expired or is unavailable.`,...ul(e,""),"\u2192 Fix with either:",...dl(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}function Qo(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var C=f("SessionStartHook"),Cl=new Set(["main","master","develop","development","staging","production"]),ot=500,Ll=250;function hi(e=ot+Ll){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var yi="login-reminder-dismissed";function kl(e){let t=jt(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${yi}.)`].join(`
`)}function _i(e,t,n){return t||n?null:kl(e)}async function vl(e,t){let n=Ut(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{let r=await Mt(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:n}:{}},result:o.localAgentTool??n}:{update:null,result:void 0});return r===void 0?(C.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1):(C.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,e),!0)}catch(r){return C.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function Ei(e,t=lt()){let n=await Ft(),r=Xn(n),o=(0,v.join)(e,".jolli","jollimemory",yi),i=(0,D.existsSync)(o);if(r&&i)try{(0,D.rmSync)(o)}catch{}return _i(t,r,i)}async function Si(e,t){return(await Vo(t)).readFile(`summaries/${e}.json`)}async function Il(e,t){try{let n=await Si(e,t);return n?wo(JSON.parse(n)):!1}catch(n){return C.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function Ti(e,t=lt()){let n=Ut(t);if(n===void 0)return null;let r=Ni(e);if(!r)return null;let o=await et(e);if(!o)return null;let i=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(i.length===0)return null;let s=[...i].sort((l,c)=>new Date(M(c)).getTime()-new Date(M(l)).getTime())[0];if(!await Il(s.commitHash,e))return null;let a=await Ft();return zo(a.localAgentTool??n)}async function bi(){if(xn()){C.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await Qo(),{cwd:t}=JSON.parse(e),n=Bn(t??process.cwd());if(Fn(n),C.info("SessionStartHook invoked (cwd=%s)",n),await Wr(n)){C.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await Ri(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):C.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(pi(),mi));o()}catch(e){C.info("SessionStartHook failed: %s",e.message)}}async function Ri(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[i,s,a]=await Promise.all([r?Promise.race([wi(e,t),bn(ot)]):Promise.resolve(null),o?Promise.race([Ti(e,t),bn(ot)]):Promise.resolve(null),o?Promise.race([Ei(e,t),bn(ot)]):Promise.resolve(null)]),l=[s,a,i].filter(c=>!!c);return l.length===0?null:(C.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function Ol(e,t="shared"){try{return await wi(e,t)===null?(C.info("Briefing cache not warmed \u2014 nothing to brief on this branch"),!1):(C.info("Briefing cache warmed for the next session start"),!0)}catch(n){return C.info("Briefing cache warm-up failed (non-fatal): %s",n.message),!1}}async function wi(e,t){let n=it(e),r=Ni(e,n);if(!r||Cl.has(r))return null;let o=jl(e,r,t,n);if(o)return o;let i=await et(e);if(!i)return null;let s=i.entries.filter(u=>u.branch===r&&(u.parentCommitHash===null||u.parentCommitHash===void 0));if(s.length===0)return null;let a=[...s].sort((u,_)=>new Date(M(_)).getTime()-new Date(M(u)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&Wl(M(l)))return null;let m=await Pl(l.commitHash,e),d=Ml(e,r),g=Fl(a),T=Hl(r,a,l,c,m,d,g,t),y=Di(e,n);return $l(e,r,y??l.commitHash,T,t),T}async function Pl(e,t){try{let n=await Si(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=Me(r),i=o.length>0?o[o.length-1].title:null,s=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&s.push(a.decisions);return{lastTopicTitle:i,keyDecisions:s}}catch(n){return C.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function Ml(e,t){try{let n=(0,v.join)(e,".jolli","jollimemory","plans.json");if(!(0,D.existsSync)(n))return[];let r=JSON.parse((0,D.readFileSync)(n,"utf-8")),o=Pr(r).registry,i=[];for(let s of Object.values(o.plans))!s.commitHash&&s.title&&i.push(s.title);return i}catch{return[]}}function Fl(e){let t=0,n=0,r=0,o=!1;for(let i of e)i.diffStats&&(t+=i.diffStats.filesChanged,n+=i.diffStats.insertions,r+=i.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function Hl(e,t,n,r,o,i,s,a){let l=t.length,c=fi(M(r)),m=fi(M(n)),d=Bl(M(n),new Date().toISOString()),g=[];g.push(`[Jolli Memory \u2014 ${e}]`);let T=`${l} commits (${c} ~ ${m})`;s&&(T+=` | ${s.filesChanged} files, +${s.insertions} -${s.deletions}`),g.push(T);let y=o.lastTopicTitle??n.commitMessage;if(g.push(`Last: ${y} (${m})`),o.keyDecisions.length>0){let _=Ul(o.keyDecisions);g.push(`Decisions: ${_}`)}i.length>0&&g.push(`Plans: ${i.join("; ")}`);let u=Ai(d,a);return u&&g.push(u),g.join(`
`)}function Ai(e,t){if(e<=0)return null;let n=jt(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function Ul(e){let n=[],r=0;for(let o of e){let i=o.replace(/[.;]\s*$/,"").trim();if(i.length>200&&(i=`${i.slice(0,199)}\u2026`),r+i.length>200&&n.length>0)break;n.push(i),r+=i.length+2}return n.join("; ")}function xi(e){return(0,v.join)(e,".jolli","jollimemory","briefing-cache.json")}function jl(e,t,n,r=it(e)){let o=xi(e);if(!(0,D.existsSync)(o))return null;try{let i=JSON.parse((0,D.readFileSync)(o,"utf-8"));if(i.branch!==t||i.clientKind!==n)return null;let s=Di(e,r);return!s||i.lastCommitHash!==s?null:i.briefingText}catch{return null}}function $l(e,t,n,r,o){let i=xi(e),s={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,v.dirname)(i);(0,D.existsSync)(a)||(0,D.mkdirSync)(a,{recursive:!0});let l=`${i}.${process.pid}.tmp`;(0,D.writeFileSync)(l,JSON.stringify(s,null,"	"),"utf-8"),(0,D.renameSync)(l,i)}catch{}}function it(e){return ie(e)}function Di(e,t=it(e)){let n=t?Ln(t):null;if(n)return n;try{return G("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function Ni(e,t=it(e)){let n=t?Cn(t):null;if(n)return n;if(t)return null;try{return G("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function bn(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function Wl(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function Bl(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function fi(e){return e?e.split("T")[0]:"unknown"}function Gl(){let e=process.argv[1];if(process.env.VITEST||!e||(0,v.resolve)(e)!==(0,v.resolve)((0,gi.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,v.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}Gl()&&(hi(),bi());0&&(module.exports={armSessionStartDeadline,buildSessionStartContext,computeLoginReminder,ensurePluginDefaultProvider,formatRecallSuggestion,getAuthFailureReminder,getLoginReminder,main,warmBriefingCache});
