#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var vh=Object.create;var nn=Object.defineProperty;var Ch=Object.getOwnPropertyDescriptor;var xh=Object.getOwnPropertyNames;var Ph=Object.getPrototypeOf,Ah=Object.prototype.hasOwnProperty;var b=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var k=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},Oa=(t,e)=>{for(var r in e)nn(t,r,{get:e[r],enumerable:!0})},La=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of xh(e))!Ah.call(t,o)&&o!==r&&nn(t,o,{get:()=>e[o],enumerable:!(n=Ch(e,o))||n.enumerable});return t};var kt=(t,e,r)=>(r=t!=null?vh(Ph(t)):{},La(e||!t||!t.__esModule?nn(r,"default",{value:t,enumerable:!0}):r,t)),Ih=t=>La(nn({},"__esModule",{value:!0}),t);function Ho(){return Oh.getStore()?.traceId}var $a,lR,Oh,Uo=b(()=>{"use strict";$a=require("node:async_hooks"),lR="0".repeat(32),Oh=new $a.AsyncLocalStorage});function x(t){return t instanceof Error?t.message:String(t)}function Rt(t){return t instanceof Error&&t.code==="ENOENT"}function sn(t){Ha=t}function he(){return Ua}function Uh(t,e){let r=Fh[e]??jh;return ja[t]>=ja[r]}function Jh(t,e,r,n,o){let i=new Date().toISOString(),s=t.toUpperCase().padEnd(5),a=r,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=n.length)return d;let u=n[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${i}] ${s} [${e}]${c} ${a}`}function K(t){let e=t??Ha??process.cwd();return(0,_t.join)(e,Lh,Mh)}function nr(t){return String(t).padStart(2,"0")}async function Gh(t,e){let r=new Date,n=`${r.getUTCFullYear()}-${nr(r.getUTCMonth()+1)}-${nr(r.getUTCDate())}_${nr(r.getUTCHours())}-${nr(r.getUTCMinutes())}-${nr(r.getUTCSeconds())}`;try{let o=(0,_t.join)(t,`debug_${n}.log`);for(let i=1;await Kh(o);i++)o=(0,_t.join)(t,`debug_${n}_${i}.log`);await(0,le.rename)(e,o)}catch{return}try{let o=(await(0,le.readdir)(t)).filter(i=>qh.test(i)).sort();for(let i=0;i<o.length-Bh;i++)await(0,le.unlink)((0,_t.join)(t,o[i])).catch(()=>{})}catch{}}async function Kh(t){try{return await(0,le.stat)(t),!0}catch{return!1}}function Vh(t){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Ua||(Fa=Fa.then(async()=>{try{let e=K(),r=(0,_t.join)(e,$h);await(0,le.stat)(e);try{(await(0,le.stat)(r)).size>Wh&&await Gh(e,r)}catch{}await(0,le.appendFile)(r,`${t}
`,"utf-8")}catch{}}))}function p(t){function e(r,n,o){let i=Jh(r,t,n,o,Ho());Hh&&(r==="info"||r==="debug")||(r==="warn"?console.warn(i):console.error(i)),Uh(r,t)&&Vh(i)}return{debug(r,...n){e("debug",r,n)},info(r,...n){e("info",r,n)},warn(r,...n){e("warn",r,n)},error(r,...n){e("error",r,n)}}}var le,_t,Lh,Mh,$h,fe,Ha,Ua,ja,jh,Fh,Hh,Fa,Wh,Bh,qh,h=b(()=>{"use strict";le=require("node:fs/promises"),_t=require("node:path");Uo();Lh=".jolli",Mh="jollimemory",$h="debug.log";fe="jollimemory/summaries/v3";Ua=!1;ja={debug:0,info:1,warn:2,error:3},jh="info",Fh={},Hh=!0;Fa=Promise.resolve(),Wh=2*1024*1024,Bh=10,qh=/^debug_.*\.log$/});function Tt(t,e,r){return(0,Ja.promisify)(Me.execFile)(t,e,{...or,...r??{}})}function be(t,e,r){return(0,Me.execFileSync)(t,e,{...or,...r??{}})}function Wa(t,e,r){return(0,Me.spawnSync)(t,e,{...or,...r??{}})}var Me,Ja,or,ir,ke=b(()=>{"use strict";Me=require("node:child_process"),Ja=require("node:util"),or={windowsHide:!0};ir=((t,e,r)=>Array.isArray(e)?(0,Me.spawn)(t,e,{...or,...r??{}}):(0,Me.spawn)(t,{...or,...e??{}}))});function Va(t){let e=Ba.get(t);if(e!==void 0)return e;let r=t;try{let n=be("git",["rev-parse","--show-toplevel"],{cwd:t,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();n&&(r=n)}catch{}return Ba.set(t,r),r}async function j(t,e){W.debug("git %s%s",e?`[cwd=${e}] `:"",t.join(" "));try{let{stdout:r,stderr:n}=await Tt("git",t,{maxBuffer:Yh,env:{...process.env,LC_ALL:"C"},...e!==void 0&&{cwd:e}});return{stdout:r.trimEnd(),stderr:n.trim(),exitCode:0}}catch(r){let n=r,o=typeof n.code=="number"?n.code:n.code==="ENOENT"?127:1,i={stdout:(n.stdout??"").trimEnd(),stderr:(n.stderr??n.message??"").trim(),exitCode:o};return W.debug("git command failed (exit: %d, stderr: %s)",o,i.stderr.substring(0,200)),i}}async function Jo(t,e){return(await j(["rev-parse","--verify",`refs/heads/${t}`],e)).exitCode===0}async function Wo(t,e){if(await Jo(t,e))return;W.info("Creating orphan branch '%s' using plumbing commands",t);let r=JSON.stringify({version:1,entries:[]},null,"	"),n=await tg(r,e);W.debug("Created blob: %s",n);let o=`100644 blob ${n}	index.json
`,i=await og(o,e);W.debug("Created tree: %s",i);let s=await j(["commit-tree",i,"-m","Initialize Jolli Memory summaries"],e);if(s.exitCode!==0)throw new Error(`Failed to create commit: ${s.stderr}`);let a=s.stdout.trim();W.debug("Created commit: %s",a);let l=await j(["update-ref",`refs/heads/${t}`,a],e);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);W.info("Orphan branch '%s' created successfully",t)}function Zh(t){let e=t.toLowerCase();return Qh.some(r=>e.includes(r))}async function Bo(t,e,r){W.debug("Reading file from branch: %s:%s",t,e);let n=await j(["show",`${t}:${e}`],r);return n.exitCode!==0?(Zh(n.stderr)?W.debug("File not found: %s:%s",t,e):W.warn("Read failed for %s:%s (git exit %d): %s",t,e,n.exitCode,n.stderr||"(no stderr)"),null):n.stdout}async function qo(t,e,r){let n=new Map;if(e.length===0)return n;let o=["cat-file","--batch"];return W.debug("git (cat-file --batch stream) %s%s for %d paths",r?`[cwd=${r}] `:"",o.join(" "),e.length),new Promise((i,s)=>{let a=ir("git",o,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),l="",c=Buffer.alloc(0),d=!0,u=0,f=[],m=!1,w=0,C=!1,T=S=>{C||(C=!0,S?s(S):i(n))};a.stderr.on("data",S=>{l+=S.toString()}),a.stdout.on("data",S=>{for(c=Buffer.concat([c,S]);!C;){if(d){let D=c.indexOf(10);if(D<0)return;let O=c.subarray(0,D).toString("utf8");if(c=c.subarray(D+1),w>=e.length){T(new Error(`git cat-file --batch returned extra response: ${O}`));return}let J=e[w];if(w++,O.endsWith(" missing")){n.set(J,null);continue}let Ee=O.substring(O.lastIndexOf(" ")+1),Y=Number.parseInt(Ee,10);if(!Number.isFinite(Y)||Y<0){T(new Error(`Unexpected cat-file --batch header for ${J}: ${O}`));return}u=Y,f=[],d=!1,m=!0}if(u>0){if(c.length===0)return;let D=Math.min(u,c.length);if(f.push(c.subarray(0,D)),c=c.subarray(D),u-=D,u>0)return}if(m){if(c.length<1)return;c=c.subarray(1),m=!1;let D=e[w-1];n.set(D,Buffer.concat(f).toString("utf8")),f=[],d=!0}}}),a.on("close",S=>{if(S!==0){T(new Error(`git cat-file --batch failed (exit ${S}): ${l.trim()}`));return}if(w<e.length){T(new Error(`git cat-file --batch returned ${w} of ${e.length} expected responses; stderr=${l.trim()}`));return}T(null)}),a.on("error",S=>{T(S)}),a.stdin.on("error",S=>{T(S)});for(let S of e)a.stdin.write(`${t}:${S}
`);a.stdin.end()})}async function Xa(t,e,r,n){await Wo(t,n);let o=await j(["rev-parse",`refs/heads/${t}`],n);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let i=o.stdout.trim();await rg(t,i,r,e,n);let s=e.filter(l=>!l.delete).length,a=e.filter(l=>l.delete).length;W.info("Updated branch '%s': %d written, %d deleted (via fast-import)",t,s,a)}async function Go(t,e,r){W.debug("Listing files in branch %s under prefix '%s'",t,e);let n=await j(["ls-tree","-z","-r","--name-only",t,e],r);if(n.exitCode!==0)return W.debug("Failed to list files (branch may not exist): %s",n.stderr),[];let o=n.stdout.split(zh).filter(i=>i.length>0);return W.debug("Found %d files",o.length),o}async function eg(t){let e=await j(["rev-parse","--git-common-dir"],t);if(e.exitCode!==0)throw new Error(`Failed to get git common dir: ${e.stderr}`);let r=e.stdout.trim();return(0,_e.resolve)(t,r)}async function Ko(t){let e=await eg(t);return(0,_e.dirname)(e)}async function ln(t){return(await j(["rev-parse","--git-dir"],t)).exitCode===0}async function vt(t){let e=await j(["worktree","list","--porcelain"],t);if(e.exitCode!==0)throw new Error(`Failed to list worktrees: ${e.stderr}`);return e.stdout.split(`
`).filter(n=>n.startsWith("worktree ")).map(n=>n.slice(9).trim())}async function Ct(t){let e=(0,_e.join)(t,".git");if((await(0,an.stat)(e)).isDirectory())return(0,_e.join)(e,"hooks");let n=await(0,an.readFile)(e,"utf-8"),o=n.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${n.trim()}`);let i=o[1].trim(),s=(0,_e.resolve)(t,i),a=s.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=s.substring(0,a);return(0,_e.join)(l,"hooks")}return(0,_e.join)(s,"hooks")}function Ya(t,e,r){return W.debug("git (stdin) %s%s",r?`[cwd=${r}] `:"",t.join(" ")),new Promise((n,o)=>{let i=ir("git",t,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),s="",a="";i.stdout.on("data",l=>{s+=l.toString()}),i.stderr.on("data",l=>{a+=l.toString()}),i.on("close",l=>{l!==0?o(new Error(`git ${t[0]} failed (exit ${l}): ${a.trim()}`)):n(s.trim())}),i.on("error",l=>{o(l)}),i.stdin.write(e),i.stdin.end()})}async function tg(t,e){return Ya(["hash-object","-w","--stdin"],t,e)}async function qa(t,e){let r=await j(["var",t],e);if(r.exitCode!==0)throw new Error(`Failed to read ${t}: ${r.stderr}`);return r.stdout.trim()}async function rg(t,e,r,n,o){let i=await qa("GIT_AUTHOR_IDENT",o),s=await qa("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];W.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=n.filter(d=>!d.delete),c=n.filter(d=>d.delete);return new Promise((d,u)=>{let f=ir("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),m="";f.stderr.on("data",S=>{m+=S.toString()}),f.on("close",S=>{S!==0?u(new Error(`git fast-import failed (exit ${S}): ${m.trim()}`)):d()}),f.on("error",S=>{u(S)});let w=f.stdin;w.on("error",S=>{u(S)});let C=[];l.forEach((S,D)=>{let O=D+1,J=Buffer.from(S.content,"utf8");C.push(`blob
mark :${O}
data ${J.length}
`,J,`
`)});let T=Buffer.from(r,"utf8");C.push(`commit refs/heads/${t}
`,`author ${i}
`,`committer ${s}
`,`data ${T.length}
`,T,`
`,`from ${e}
`),l.forEach((S,D)=>{C.push(`M 100644 :${D+1} ${Ga(S.path)}
`)});for(let S of c)C.push(`D ${Ga(S.path)}
`);C.push(`done
`),ng(w,C).then(()=>{w.end()},S=>{u(S)})})}async function ng(t,e){for(let r of e)t.write(r)||await(0,Ka.once)(t,"drain")}function Ga(t){return/["\\\n\r]/.test(t)?`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:t}async function og(t,e){return Ya(["mktree"],t,e)}var Ka,an,_e,Yh,zh,W,Ba,Qh,oe=b(()=>{"use strict";Ka=require("node:events"),an=require("node:fs/promises"),_e=require("node:path");h();ke();Yh=10*1024*1024,zh="\0",W=p("GitOps"),Ba=new Map;Qh=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function ig(t){return new Promise(e=>setTimeout(e,t))}function Qa(t){let e=Number(t);if(!Number.isInteger(e)||e<=0)return!1;if(e===process.pid)return!0;try{return process.kill(e,0),!0}catch(r){return r.code!=="ESRCH"}}async function Vo(t){try{let e=await(0,Re.stat)(t),r=Date.now()-e.mtimeMs,n=await Za(t),o=n!==null&&!Qa(n);if(!o&&r<za)return!1;o?sr.warn("Removing orphaned lock %s (PID %s no longer running)",t,n):sr.warn("Removing stale lock file %s (age: %dms)",t,r),await(0,Re.rm)(t,{force:!0})}catch(e){if(e.code!=="ENOENT")return sr.error("Failed to check lock file %s: %s",t,e.message),!1}try{return await(0,Re.writeFile)(t,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function Za(t){try{let r=(await(0,Re.readFile)(t,"utf-8")).trim();return r.length>0?r:null}catch{return null}}async function xt(t,e){let r=await Za(t);if(r!==null&&r!==String(process.pid)){sr.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",e,r,process.pid);return}try{await(0,Re.rm)(t,{force:!0})}catch(n){sr.error("Failed to release %s: %s",e,n.message)}}async function Pt(t,e){if(e.timeoutMs<=0)return Vo(t);let r=Date.now()+e.timeoutMs;for(;;){if(await Vo(t))return!0;if(Date.now()>=r)return!1;await ig(e.pollMs)}}var Re,sr,za,Xo=b(()=>{"use strict";Re=require("node:fs/promises");h();sr=p("LockPrimitives"),za=300*1e3});function rl(t){return(0,tl.resolve)(t??process.cwd())}function cn(t){return Yo.getStore()?.has(rl(t))===!0}function un(t,e){let r=new Set(Yo.getStore()??[]);return r.add(rl(t)),Yo.run(r,e)}var el,tl,Yo,dn=b(()=>{"use strict";el=require("node:async_hooks"),tl=require("node:path"),Yo=new el.AsyncLocalStorage});function sg(t){return Tt("git",["rev-parse","--git-common-dir"],{cwd:t})}async function ul(t){let e=t??process.cwd(),r=sl.get(e);if(r!==void 0)return r;let n;try{let{stdout:o}=await sg(e),i=o.trim(),s=(0,ie.isAbsolute)(i)?i:(0,ie.resolve)(e,i);n=(0,ie.join)(s,"jollimemory")}catch{ll.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",e),n=K(e)}return sl.set(e,n),n}async function zo(t){let e=await ul(t);return await(0,ar.mkdir)(e,{recursive:!0}),e}async function Qo(t,e={}){let r=e.timeoutMs??lg,n=e.pollMs??cg,o=await zo(t);return Pt((0,ie.join)(o,cl),{timeoutMs:r,pollMs:n})}async function Zo(t){let e=await ul(t);await xt((0,ie.join)(e,cl),"orphan-write.lock")}async function fg(t,e,r,n){let o=n.timeoutMs??dg,i=n.pollMs??pn;await(0,ar.mkdir)(t,{recursive:!0});let s=(0,ie.join)(t,e),a=await Pt(s,{timeoutMs:o,pollMs:i});a||ll.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",e,o);try{return await r()}finally{a&&await xt(s,e)}}async function ei(t,e,r={}){return fg(t,ag,e,r)}async function lr(t,e={}){let r=e.timeoutMs??pg,n=e.pollMs??pn,o=await zo(t),i=(0,ie.join)(o,ol);return await Pt(i,{timeoutMs:r,pollMs:n})?{release:()=>xt(i,ol)}:null}async function ti(t,e,r={}){let n=await lr(t,r);if(!n)return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await n.release()}}async function ri(t,e,r={}){let n=r.timeoutMs??ug,o=r.pollMs??pn,i=await zo(t),s=(0,ie.join)(i,nl);if(!await Pt(s,{timeoutMs:n,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await xt(s,nl)}}async function ni(t,e={}){let r=e.timeoutMs??mg,n=e.pollMs??pn,o=e.globalDir??(0,ie.join)((0,al.homedir)(),".jolli","jollimemory");await(0,ar.mkdir)(o,{recursive:!0});let i=(0,ie.join)(o,il);if(!await Pt(i,{timeoutMs:r,pollMs:n}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await xt(i,il)}}var ar,al,ie,ll,cl,nl,ag,ol,il,lg,cg,ug,pn,dg,pg,mg,sl,Te=b(()=>{"use strict";ar=require("node:fs/promises"),al=require("node:os"),ie=require("node:path");h();ke();Xo();dn();ll=p("Locks");cl="orphan-write.lock",nl="profile.lock",ag="config.lock",ol="repo-hooks.lock",il="runtime-registry.lock",lg=1e3,cg=50,ug=5e3,pn=25,dg=5e3,pg=5e3,mg=5e3,sl=new Map});function Ye(t){return hg(t,process.platform)}function hg(t,e){let r=cr(t.replace(/\\/g,"/"));return e==="win32"||e==="darwin"?r.toLowerCase():r}function cr(t){let e=t.length;for(;e>0&&t[e-1]==="/";)e--;return e===t.length?t:t.slice(0,e)}function oi(t,e){let r=Ye(t),n=Ye(e);return r===n||r.startsWith(`${n}/`)}function ze(t){return t.replace(/\\/g,"/")}var ge=b(()=>{"use strict"});async function ii(t,e,r={}){await(0,Qe.mkdir)((0,pl.dirname)(t),{recursive:!0});let n=`${t}.${process.pid}.tmp`;await(0,Qe.writeFile)(n,e,r.mode!==void 0?{encoding:"utf-8",mode:r.mode}:"utf-8");try{await(0,Qe.rename)(n,t)}catch(o){throw await(0,Qe.unlink)(n).catch(()=>{}),o}}var Qe,pl,si=b(()=>{"use strict";Qe=require("node:fs/promises"),pl=require("node:path")});function hl(t){return{...t,manuallyDisabled:t.userDisabled===!0||t.cutoverFence!==void 0}}async function ai(t){let e=await j(["rev-parse","--git-common-dir"],t),r=e.exitCode===0?e.stdout.trim():"";if(!r)return{profilePath:(0,ve.join)(K(t),ml),legacyMarkerPath:null};let n=(0,ve.isAbsolute)(r)?r:(0,ve.join)(t,r),o=(0,ve.dirname)(n);return{profilePath:(0,ve.join)(K(o),ml),legacyMarkerPath:(0,ve.join)(n,yg,wg)}}async function mn(t){try{let e=await(0,ur.readFile)(t,"utf-8"),r=JSON.parse(e);return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}catch{return{}}}async function Eg(t){try{return await(0,ur.stat)(t),!0}catch{return!1}}async function gl(t,e){await ii(t,`${JSON.stringify(e,null,"	")}
`)}async function bg(t){let e;try{e=await vt(t)}catch{e=[t]}for(let r of e)if(await Eg((0,ve.join)(K(r),Sg)))return!0;return!1}async function Ze(t){let{profilePath:e}=await ai(t),r=await mn(e);if(r.userDisabled!==void 0)return r.userDisabled===!0;if(r.manuallyDisabled!==void 0)return fl(t,e,r.manuallyDisabled===!0);let n=await bg(t);return fl(t,e,n)}async function fl(t,e,r){let n=await ri(t,async()=>{let o=await mn(e);return o.userDisabled!==void 0?o.userDisabled===!0:(await gl(e,hl({...o,userDisabled:r})),r)}).catch(()=>{});return n?.acquired&&n.value!==void 0?n.value:r}async function li(t,e){let{profilePath:r}=await ai(t);if(!(await ri(t,async()=>{let o=await mn(r);await gl(r,hl({...o,userDisabled:e}))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function dr(t){let{profilePath:e}=await ai(t);return(await mn(e)).cutoverFence??null}var ur,ve,ml,yg,wg,Sg,et=b(()=>{"use strict";ur=require("node:fs/promises"),ve=require("node:path");h();ke();si();oe();Te();ml="profile.json",yg="jollimemory",wg="backfill-card-dismissed",Sg="disabled-by-user"});var ci=b(()=>{"use strict"});async function P(t,e,r){let n=`${t}.${process.pid}.${(0,yl.randomUUID)()}.tmp`;await(0,st.writeFile)(n,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r});try{await(0,st.rename)(n,t)}catch(o){let i=o.code;if(i==="EPERM"||i==="EACCES")await(0,st.writeFile)(t,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r}),await(0,st.rm)(n,{force:!0});else throw o}}var yl,st,te=b(()=>{"use strict";yl=require("node:crypto"),st=require("node:fs/promises")});function V(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var pr=b(()=>{"use strict"});var wl=b(()=>{"use strict"});var Sl=b(()=>{"use strict"});function El(t){return Number.isFinite(t)&&t>=0&&t<=1114111&&!(t>=55296&&t<=57343)}function bl(t){return t.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(e,r)=>{if(r.startsWith("#x")){let o=Number.parseInt(r.slice(2),16);return El(o)?String.fromCodePoint(o):e}if(r.startsWith("#")){let o=Number.parseInt(r.slice(1),10);return El(o)?String.fromCodePoint(o):e}let n=kg[r];return typeof n=="string"?n:e})}var kg,kl=b(()=>{"use strict";kg={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var _g,_l,Rl=b(()=>{"use strict";wl();pr();Sl();kl();_g={decodeHtmlEntities:bl,lowercase:t=>t.toLowerCase()},_l=new Set(Object.keys(_g))});var Rg,Tl,vl=b(()=>{"use strict";Rg="^https://app\\.asana\\.com/",Tl={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:Rg,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Tg,Cl,xl=b(()=>{"use strict";Tg="^https://[^/]+/wiki/",Cl={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:Tg},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var vg,Pl,Al=b(()=>{"use strict";vg="^/[^/\\s]+/[^/\\s]+",Pl={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:vg},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var ui,Cg,di,QR,Il=b(()=>{"use strict";pr();ui=["mcp__Figma__","mcp__figma__"],Cg={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},di=Object.keys(Cg),QR=new Set(di)});var xg,Pg,Dl,Nl=b(()=>{"use strict";Il();xg="^[0-9a-zA-Z]{22,128}$",Pg=ui.flatMap(t=>di.map(e=>`${t}${e}`)),Dl={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...ui],exact:Pg}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:xg},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Ag,Ig,Ol,Ll=b(()=>{"use strict";Ag="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",Ig="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",Ol={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:Ag,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:Ig,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Dg,Ml,$l=b(()=>{"use strict";Dg="^[A-Z][A-Z0-9_]*-\\d+$",Ml={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:Dg},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var jl,Fl=b(()=>{"use strict";jl={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var Ng,Hl,Ul=b(()=>{"use strict";Ng="^[A-Z][A-Z0-9_]*-\\d+$",Hl={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:Ng},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Jl,Wl=b(()=>{"use strict";Jl={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Og,Lg,Mg,Bl,ql=b(()=>{"use strict";Og="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",Lg="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[A-Za-z0-9.-]+\\.notion\\.site)/",Mg="<content\\b[^>]*>([\\s\\S]*?)</content>",Bl={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:Og,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:Lg,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:Mg,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var pi,$g,jg,mi,cT,Gl=b(()=>{"use strict";pr();pi=["mcp__Sentry__","mcp__sentry__"],$g="get_sentry_resource",jg="analyze_issue_with_seer",mi=[$g,jg],cT=new Set(mi)});var Fg,Hg,Ug,Kl,Vl=b(()=>{"use strict";Gl();Fg=pi.flatMap(t=>mi.map(e=>`${t}${e}`)),Hg="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",Ug="^Issue [A-Za-z0-9_-]{1,128}$",Kl={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:Ug,match:{claude:{prefixes:[...pi],exact:Fg}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:Hg},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Xl,Yl=b(()=>{"use strict";Xl={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var Jg,fi,hi,zl,Ql=b(()=>{"use strict";Jg="^dpl_[A-Za-z0-9]+$",fi=[{op:"coalesce",of:[[{op:"path",path:"readyState"}],[{op:"path",path:"state"}]]}],hi=[{op:"template",template:"https://{host}",from:{host:[{op:"path",path:"url"}]}}],zl={id:"vercel",label:"Vercel",icon:"rocket",trackOnly:!0,match:{claude:{prefixes:["mcp__claude_ai_Vercel__","mcp__vercel__"],acceptSuffix:"get_deployment"}},wrapperKeys:["deployment"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:Jg},title:{pipe:[{op:"coalesce",of:[[{op:"template",template:"{name} ({state})",from:{name:[{op:"path",path:"name"}],state:fi}}],[{op:"path",path:"name"}]]}],require:".+"},url:{pipe:hi,require:"^https://[A-Za-z0-9.-]+\\.vercel\\.app$",requireFlags:"i"},description:{pipe:[{op:"coalesce",of:[[{op:"path",path:"errorMessage"}],[{op:"template",template:"Deployment {state} \xB7 {target} \xB7 {url}",from:{state:fi,target:[{op:"path",path:"target"}],url:hi}}],[{op:"template",template:"Deployment {state} \xB7 {url}",from:{state:fi,url:hi}}]]}],optional:!0}},fields:[{key:"target",label:"Target",icon:"rocket",pipe:[{op:"path",path:"target"}]},{key:"framework",label:"Framework",icon:"symbol-property",pipe:[{op:"path",path:"project.framework"}]},{key:"error-code",label:"Error",icon:"error",pipe:[{op:"path",path:"errorCode"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"vercel-deployments",itemTag:"deployment",bodyTag:"content",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Zl,ec=b(()=>{"use strict";Zl={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var tc,rc=b(()=>{"use strict";tc={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var nc,oc=b(()=>{"use strict";vl();xl();Al();Nl();Ll();$l();Fl();Ul();Wl();ql();Vl();Yl();Ql();ec();rc();nc=[Hl,Cl,Ml,Ol,Bl,Xl,tc,Zl,Tl,Jl,Pl,jl,zl,Dl,Kl]});function Bg(t,e,r){if(!V(t))return"op must be an object";if(r.opCount++,r.opCount>ic)return`pipe exceeds ${ic} ops`;let n=t.op;if(typeof n!="string"||!Wg.has(n))return`unknown op: ${String(n)}`;switch(n){case"path":return typeof t.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof t.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof t.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof t.pattern!="string"?"regex op requires a string 'pattern'":t.extract!==void 0&&typeof t.extract!="string"?"regex.extract must be a string":t.lastMatch!==void 0&&typeof t.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof t.fn!="string"?"transform op requires a string 'fn'":_l.has(t.fn)?void 0:`unknown transform: ${t.fn}`;case"coalesce":{if(e+1>fn)return`nesting depth exceeds ${fn}`;if(!Array.isArray(t.of))return"coalesce op requires an array 'of'";for(let o of t.of){let i=gi(o,e+1,r);if(i!==void 0)return i}return}case"template":{if(e+1>fn)return`nesting depth exceeds ${fn}`;if(typeof t.template!="string")return"template op requires a string 'template'";if(!V(t.from))return"template op requires an object 'from'";for(let o of Object.values(t.from)){let i=gi(o,e+1,r);if(i!==void 0)return i}return}}}function gi(t,e,r){if(!Array.isArray(t))return"pipe must be an array";for(let n of t){let o=Bg(n,e,r);if(o!==void 0)return o}}function mr(t,e){let r=gi(t,0,{opCount:0});return r===void 0?void 0:`${e}: ${r}`}function qg(t){if(!V(t))return{ok:!1,error:"definition must be an object"};if(typeof t.id!="string"||t.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof t.label!="string"||t.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof t.icon!="string"||t.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(t.titleFallbackPattern!==void 0){if(typeof t.titleFallbackPattern!="string"||t.titleFallbackPattern.length===0)return{ok:!1,error:"titleFallbackPattern must be a non-empty string"};try{new RegExp(t.titleFallbackPattern)}catch(r){return{ok:!1,error:`titleFallbackPattern is not a valid regex: ${r.message}`}}}if(!V(t.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(t.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!V(t.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(t.fields))return{ok:!1,error:"fields must be an array"};if(!V(t.storage))return{ok:!1,error:"storage must be an object"};if(!V(t.render))return{ok:!1,error:"render must be an object"};let e=t.reference;for(let r of["nativeId","title"]){let n=e[r];if(!V(n))return{ok:!1,error:`reference.${r} is required`};let o=mr(n.pipe,`reference.${r}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(e.url!==void 0){if(!V(e.url))return{ok:!1,error:"reference.url must be an object"};let r=mr(e.url.pipe,"reference.url.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.description!==void 0){if(!V(e.description))return{ok:!1,error:"reference.description must be an object"};let r=mr(e.description.pipe,"reference.description.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.guard!==void 0){if(!V(e.guard))return{ok:!1,error:"reference.guard must be an object"};let r=mr(e.guard.pipe,"reference.guard.pipe");if(r!==void 0)return{ok:!1,error:r}}for(let[r,n]of t.fields.entries()){if(!V(n))return{ok:!1,error:`fields[${r}] must be an object`};if(typeof n.key!="string"||!sc.test(n.key))return{ok:!1,error:`fields[${r}].key must match ${sc}`};if(typeof n.label!="string"||n.label.length===0)return{ok:!1,error:`fields[${r}].label must be a non-empty string`};let o=mr(n.pipe,`fields[${r}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:t}}function gn(){if(hn!==void 0)return hn;let t=[];for(let e of nc){let r=qg(e);if(!r.ok)throw new Error(`invalid built-in source definition '${e.id}': ${r.error}`);t.push(r.def)}return hn=new yi(t),hn}var ic,fn,Wg,sc,yi,hn,yn=b(()=>{"use strict";pr();Rl();oc();ic=64,fn=8,Wg=new Set(["path","coalesce","regex","template","join","const","transform"]);sc=/^[\w-]+$/;yi=class{constructor(e){this.definitions=e}all(){return this.definitions}byId(e){return this.definitions.find(r=>r.id===e)}match(e,r,n,o){return e==="claude"?this.definitions.find(i=>{let s=i.match.claude;return!(s===void 0||!s.prefixes.some(a=>r.startsWith(a))||s.exact!==void 0&&!s.exact.includes(r)||s.acceptSuffix!==void 0&&!r.endsWith(s.acceptSuffix)||s.denySuffixes?.some(a=>r.endsWith(a)))}):n!==void 0?this.definitions.find(i=>{let s=i.match.codex;return s!==void 0&&s.namespaceSuffix===n&&s.functionCallNames.includes(r)}):this.definitions.find(i=>{let s=i.match.codex;return s===void 0||!s.invocationTools.includes(r)?!1:s.invocationServer===void 0||s.invocationServer===o})}}});function wi(t){return Xg(t)}function Gg(t){return t.replace(/^\n+/,"").replace(/\n+$/,"")}function Kg(t){let e=t.indexOf(Vg);return e===-1?t:t.slice(0,e)}function Xg(t){if(typeof t!="string")return null;let e=t.split(`
`);if(e[0]?.trim()!=="---")return null;let r=-1;for(let D=1;D<e.length;D++)if(e[D].trim()==="---"){r=D;break}if(r===-1)return null;let n=e.slice(1,r),o=Gg(Kg(e.slice(r+1).join(`
`))),i={},s=[],a=!1;for(let D of n){if(a){let J=/^\s+- (.+)$/.exec(D);if(J){try{let Ee=JSON.parse(J[1]);Yg(Ee)&&s.push(Ee)}catch{}continue}a=!1}if(D.trim()==="fields:"){a=!0;continue}let O=/^([a-zA-Z]+):\s*(.+)$/.exec(D);O&&(i[O[1]]=O[2])}let l=D=>{let O=i[D];if(O!==void 0)try{let J=JSON.parse(O);return typeof J=="string"?J:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!zg(c))return null;let u=c,f=d,m=l("title"),w=l("url"),C=l("referencedAt"),T=l("sourceToolName");return!m||C===void 0||!T?null:{mapKey:`${u}:${f}`,source:u,nativeId:f,title:m,referencedAt:C,toolName:T,...w!==void 0?{url:w}:{},...s.length>0?{fields:s}:{},...o.length>0?{description:o}:{}}}function Yg(t){if(typeof t!="object"||t===null)return!1;let e=t;return!(typeof e.key!="string"||typeof e.label!="string"||typeof e.value!="string"||!/^[\w-]+$/.test(e.key)||e.icon!==void 0&&typeof e.icon!="string")}function zg(t){return t.length>0&&/^[\w-]+$/.test(t)}var FT,Vg,fr=b(()=>{"use strict";h();yn();FT=p("ReferenceStore");Vg="<!-- jolli:auto-note -->"});function Qg(t){return`${t.source}:${t.skill}`}function Zg(t,e){if(t===void 0)return e;let r=t.usage===void 0||e.usage===void 0?t.usage??e.usage:{input:t.usage.input+e.usage.input,output:t.usage.output+e.usage.output,cached:t.usage.cached+e.usage.cached,confidence:t.usage.confidence==="attributed"&&e.usage.confidence==="attributed"?"attributed":"estimated"},n=[t,e].filter(l=>l.usage!==void 0),o=ty(n),{usageBySession:i,supersededDocIds:s,...a}=t;return{...a,invocationCount:t.invocationCount+e.invocationCount,...r!==void 0?{usage:r}:{},...o!==void 0?{usageBySession:o}:{},...t.detection==="heuristic"||e.detection==="heuristic"?{detection:"heuristic"}:{},...t.jolliDocId===void 0&&e.jolliDocId!==void 0?{jolliDocId:e.jolliDocId,jolliDocUrl:e.jolliDocUrl}:{},...ey(t,e)}}function ey(t,e){let r=new Set([...t.supersededDocIds??[],...e.supersededDocIds??[]]);t.jolliDocId!==void 0&&e.jolliDocId!==void 0&&r.add(e.jolliDocId);let n=t.jolliDocId??e.jolliDocId;return n!==void 0&&r.delete(n),r.size>0?{supersededDocIds:[...r]}:{}}function ac(t){if(t.supersededDocIds===void 0)return t;let{supersededDocIds:e,...r}=t;return r}function ty(t){if(t.length===0)return;let e=[];for(let n of t){if(n.usageBySession===void 0)return;e.push(n.usageBySession)}let r={};for(let n of e)for(let[o,i]of Object.entries(n)){let s=r[o];r[o]=s===void 0?i:{input:s.input+i.input,cached:s.cached+i.cached,output:s.output+i.output,confidence:s.confidence==="attributed"&&i.confidence==="attributed"?"attributed":"estimated"}}return r}function lc(t){let e=new Map;for(let n of t)e.has(n.archivedKey)||e.set(n.archivedKey,n);let r=new Map;for(let n of e.values()){let o=Qg(n);r.set(o,Zg(r.get(o),n))}return[...r.values()]}var Si=b(()=>{"use strict"});var WT,cc=b(()=>{"use strict";h();WT=p("SkillStore")});async function ki(t){let e=K(t);return await(0,$e.mkdir)(e,{recursive:!0}),e}function re(){return(0,wn.join)((0,uc.homedir)(),".jolli","jollimemory")}async function At(t){let e=(0,wn.join)(t,dc);try{let r=await(0,$e.readFile)(e,"utf-8"),n=JSON.parse(r);return ry(n)}catch{return Sn.debug("No config file found in %s, using defaults",t),{}}}function ry(t){if(t.syncEnabled===void 0)return t;let{syncEnabled:e,...r}=t;return r.autoSyncEnabled===void 0?{...r,autoSyncEnabled:e}:r}function ny(t,e){return!("localAgentTool"in e)||"localAgentPath"in e||(t.localAgentTool??"claude-code")===(e.localAgentTool??"claude-code")||t.localAgentPath===void 0?e:(Sn.info("Clearing localAgentPath (was set for %s, switching to %s)",t.localAgentTool??"claude-code",e.localAgentTool),{...e,localAgentPath:void 0})}async function En(t,e){await ei(e,async()=>{await pc(t,e)}),Sn.info("Config saved to %s",e)}async function bn(t){return oy(t,re())}async function oy(t,e){return ei(e,async()=>{let{update:r,result:n}=t(await At(e));return r!==null&&(await pc(r,e),Sn.info("Config saved to %s",e)),n})}async function pc(t,e){let r=await At(e),n={...r,...ny(r,t)};await P((0,wn.join)(e,dc),JSON.stringify(n,null,"	"))}async function Ce(){return At(re())}async function at(t){return En(t,re())}function Ei(t,e){let r={...t},n=!1;for(let o of e)o in r&&(delete r[o],n=!0);return{value:r,changed:n}}function mc(t){let e=!1,r={};for(let[s,a]of Object.entries(t.plans??{})){if(a.ignored===!0){e=!0;continue}let l=Ei(a,iy);l.changed&&(e=!0),r[s]=l.value}let n;if(t.notes!==void 0){n={};for(let[s,a]of Object.entries(t.notes)){if(a.ignored===!0){e=!0;continue}let l=Ei(a,sy);l.changed&&(e=!0),n[s]=l.value}}let o;if(t.references!==void 0){o={};for(let[s,a]of Object.entries(t.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){e=!0;continue}let c=Ei(a,ay);c.changed&&(e=!0),o[s]=c.value}}return{registry:{version:1,plans:r,...n!==void 0?{notes:n}:{},...o!==void 0?{references:o}:{},...t.skills!==void 0?{skills:t.skills}:{}},changed:e}}var bi,$e,uc,wn,Sn,dc,sv,av,lv,cv,iy,sy,ay,ce=b(()=>{"use strict";bi=require("node:crypto"),$e=require("node:fs/promises"),uc=require("node:os"),wn=require("node:path");h();ci();te();Te();fr();Si();cc();Sn=p("SessionTracker"),dc="config.json",sv=2880*60*1e3;av=2880*60*1e3,lv=10080*60*1e3,cv=(0,bi.randomBytes)(4).toString("hex"),iy=["ignored","branch","editCount"],sy=["ignored","branch"],ay=["ignored","branch","commitHash","contentHashAtCommit"]});function He(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Fe.major?!0:r<Fe.major?!1:n>=Fe.minor}function ct(t){let e=t,r=e?.message??String(t),n=e?.code;return n==="ENOENT"?null:n==="EACCES"||n==="EPERM"?{kind:"permission",message:r}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(r)?{kind:"corrupt",message:r}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(r)?{kind:"locked",message:r}:/no such table|no such column/i.test(r)?{kind:"schema",message:r}:/SQLITE_CANTOPEN|unable to open/i.test(r)?{kind:"permission",message:r}:{kind:"unknown",message:r}}var Fe,xe=b(()=>{"use strict";Fe={major:22,minor:13}});function wu(t){if((0,yu.platform)()==="win32")try{Wa("attrib",["+h",t],{timeout:2e3})}catch{}}var yu,Su=b(()=>{"use strict";yu=require("node:os");ke()});var Eu,F,se,Lt,z,Wn=b(()=>{"use strict";Eu=require("node:crypto"),F=require("node:fs"),se=require("node:path");h();Su();ge();Lt=p("MetadataManager"),z=class t{constructor(e){this.jolliDir=e;this.manifestPath=(0,se.join)(e,"manifest.json"),this.branchesPath=(0,se.join)(e,"branches.json"),this.configPath=(0,se.join)(e,"config.json"),this.migrationPath=(0,se.join)(e,"migration.json"),this.indexPath=(0,se.join)(e,"index.json")}ensure(){(0,F.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&wu(this.jolliDir),(0,F.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,F.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,F.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e.fileId);n.push(e),this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Lt.info("Manifest updated: %s (%s)",e.path,e.type)}removeFromManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e);return n.length===r.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),!0)}unregisterFilesByType(e){let r=this.readManifest(),n=r.files.filter(i=>i.type!==e),o=r.files.length-n.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Lt.info("Manifest unregistered %d entries of type=%s",o,e),o)}replaceFiles(e){let r=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:[...e]},null,"	"))}findByPath(e){return this.readManifest().files.find(r=>r.path===e)}findById(e){return this.readManifest().files.find(r=>r.fileId===e)}updatePath(e,r){let n=this.readManifest();if(!n.files.find(s=>s.fileId===e))return!1;let i=n.files.map(s=>s.fileId===e?{...s,path:r}:s);return this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:i},null,"	")),!0}resolveFolderForBranch(e){let r=this.readBranches(),n=r.mappings.find(a=>a.branch===e);if(n)return n.folder;let o=t.transcodeBranchName(e),i={folder:o,branch:e,createdAt:new Date().toISOString()},s={...r,mappings:[...r.mappings,i]};return this.atomicWrite(this.branchesPath,JSON.stringify(s,null,"	")),Lt.info("Branch mapping created: %s \u2192 %s",e,o),o}removeBranchMapping(e){let r=this.readBranches(),n=r.mappings.filter(o=>o.branch!==e);return n.length===r.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:n},null,"	")),Lt.info("Branch mapping removed: %s (no remaining head)",e),!0)}renameBranchFolder(e,r){let n=this.readBranches(),o=n.mappings.map(l=>l.folder===e?{...l,folder:r}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	"));let i=this.readManifest(),s=0,a=i.files.map(l=>l.path.startsWith(`${e}/`)?(s++,{...l,path:l.path.replace(`${e}/`,`${r}/`)}):l);return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...i,files:a},null,"	")),s}removeBranchFolder(e){let r=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:r.mappings.filter(s=>s.folder!==e)},null,"	"));let n=this.readManifest(),o=n.files.filter(s=>!s.path.startsWith(`${e}/`)),i=n.files.length-o.length;return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:o},null,"	")),i}unregisterBranches(e){let r=new Set(e);if(r.size===0)return 0;let n=this.readBranches(),o=n.mappings.filter(s=>!r.has(s.branch)),i=n.mappings.length-o.length;return i===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	")),Lt.info("Branch mappings unregistered: %d",i),i)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(e){try{return this.listBranchMappings().find(r=>r.folder===e)?.branch??e}catch{return e}}listIndexHeads(){let e=this.readJson(this.indexPath);return!e||!Array.isArray(e.entries)?[]:e.entries.filter(r=>typeof r?.commitHash=="string"&&typeof r.branch=="string"&&(r.parentCommitHash===null||typeof r.parentCommitHash=="string")&&r.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(e){this.atomicWrite(this.configPath,JSON.stringify(e,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(e){this.atomicWrite(this.migrationPath,JSON.stringify(e,null,"	"))}reconcile(e){let r=this.readManifest();if(r.files.length===0||!r.files.some(a=>!(0,F.existsSync)((0,se.join)(e,a.path))))return 0;let o=new Map;try{this.walkDir(e,e,o)}catch{}let i=0,s=[];for(let a of r.files){let l=(0,se.join)(e,a.path);if((0,F.existsSync)(l))s.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(s.push({...a,path:c}),i++):(Lt.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),s.push(a))}}return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:s},null,"	")),i}walkDir(e,r,n){for(let o of(0,F.readdirSync)(e,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let i=(0,se.join)(e,o.name);if(o.isDirectory())this.walkDir(i,r,n);else if(o.name.endsWith(".md"))try{let s=(0,F.readFileSync)(i,"utf-8"),a=t.sha256(s);n.set(a,ze((0,se.relative)(r,i)))}catch{}}}static transcodeBranchName(e){let r=e.replace(/[/\\:*?~^]/g,"-");return r=r.replace(/-{3,}/g,"-"),r=r.replace(/\.\./g,"--"),r=r.replace(/^[.-]+|[.-]+$/g,""),r||"default"}static sha256(e){return(0,Eu.createHash)("sha256").update(e,"utf-8").digest("hex")}readJson(e){if(!(0,F.existsSync)(e))return null;try{return JSON.parse((0,F.readFileSync)(e,"utf-8"))}catch{return null}}atomicWrite(e,r){let n=(0,se.dirname)(e);(0,F.mkdirSync)(n,{recursive:!0});let o=`${e}.tmp`;(0,F.writeFileSync)(o,r,"utf-8"),(0,F.renameSync)(o,e)}}});function Gy(t){if(process.env.VITEST)return null;try{return be("ssh",["-G",t],{encoding:"utf-8",timeout:By,stdio:["ignore","pipe","pipe"]})}catch(e){return Wy.debug("ssh -G %s failed: %s",t,e instanceof Error?e.message:String(e)),null}}function Ky(t){for(let e of t.split(/\r?\n/)){let r=e.match(/^hostname\s+(\S+)/i);if(r?.[1])return r[1]}return null}function Bn(t){if(!t)return t;let e=bu.get(t);if(e!==void 0)return e;let r=t,n=qy(t);if(n){let o=Ky(n);o&&(r=o)}return bu.set(t,r),r}var Wy,By,bu,qy,ku=b(()=>{"use strict";h();ke();Wy=p("SshAliasResolver"),By=5e3,bu=new Map,qy=Gy});function _u(){return(0,B.join)((0,Cu.homedir)(),"Documents","jolli")}function Ki(t){return t?Xy(t)?t:(Vy.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",t),_u()):_u()}function Xy(t){return t?(0,B.isAbsolute)(t)&&!t.includes(".."):!0}function xu(t,e,r){let n=Ki(r),o=(0,B.join)(n,t);if(!(0,rt.existsSync)(o)){let s=Mu(n,t,e).match;return s||(Gi(o,t,e),o)}let i=ju(o);return i&&Nu(i,e,t)?o:i&&$u(o,i)?(Gi(o,t,e),o):Zy(n,t,e)}function Pu(t){let e=Xi(t,["config","--get","remote.origin.url"]);if(e){let n=e.match(/\/([^/]+?)(?:\.git)?$/);if(n?.[1])return n[1]}let r=Au(t);return r?(0,B.basename)(r):(0,B.basename)(t)||"unknown"}function Au(t){let e=Xi(t,["rev-parse","--git-common-dir"]);if(!e)return null;let r=(0,B.isAbsolute)(e)?e:(0,B.join)(t,e),n=(0,B.dirname)(r);return n&&n!=="/"&&n!=="."?n:null}function Yy(t,e){if(!(0,B.basename)(t))return{claimable:!1,blocker:"not-a-project"};let r=Au(t);if(!r)return{claimable:!1,blocker:"not-a-project"};let n;try{n=Ki(e)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return oi(n,r)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function Vi(t,e){return Yy(t,e).claimable}function Iu(){let t=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(t)&&t>0?t:3e4}function zy(){return Math.min(Iu(),5e3)}function Qy(t){return typeof t=="object"&&t!==null&&t.code==="ETIMEDOUT"}function Ru(t,e,r=Iu()){return be("git",e,{cwd:t,encoding:"utf-8",timeout:r,stdio:["ignore","pipe","pipe"]}).trim()||null}function Xi(t,e){try{return Ru(t,e)}catch(r){if(!Qy(r))return null;try{return Ru(t,e,zy())}catch{return null}}}function Du(t){return Xi(t,["remote","get-url","origin"])}function Nu(t,e,r){return t.remoteUrl&&e?Tu(t.remoteUrl)===Tu(e):!t.remoteUrl&&!e?t.repoName==null||t.repoName===r:!1}function Tu(t){return Lu(t).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function Lu(t){let e=t.match(/^(?:git\+)?ssh:\/\/(?:[^@/]+@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(e)return`https://${Bn(e[1])}${vu(e[2],"22")}/${e[3]}`;let r=t.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(r)return`https://${Bn(r[1])}${vu(r[2],"9418")}/${r[3]}`;let n=t.match(/^[^@/:]+@([^/:]+):(.+)$/);return n?`https://${Bn(n[1])}/${n[2]}`:t}function vu(t,e){return t===void 0||t===e?"":`:${t}`}function Mu(t,e,r){let n=null,o=null,i=null;for(let s=2;s<=99;s++){let a=(0,B.join)(t,`${e}-${s}`);if(!(0,rt.existsSync)(a)){i===null&&(i=a);continue}let l=ju(a);if(l&&Nu(l,r,e)){n=a;break}l&&o===null&&$u(a,l)&&(o=a)}return{match:n,stub:o,firstUnused:i}}function Zy(t,e,r){let n=Mu(t,e,r);if(n.match)return n.match;let o=n.stub??n.firstUnused??(0,B.join)(t,`${e}-${Date.now()}`);return Gi(o,e,r),o}function Gi(t,e,r){if(he())return;let n=new z((0,B.join)(t,".jolli"));n.ensure();let o=n.readConfig();n.saveConfig({...o,remoteUrl:r??void 0,repoName:e})}function $u(t,e){return e.remoteUrl==null&&e.repoName==null}function ju(t){let e=(0,B.join)(t,".jolli","config.json");if(!(0,rt.existsSync)(e))return null;try{return JSON.parse((0,rt.readFileSync)(e,"utf-8"))}catch{return null}}var rt,Cu,B,Vy,Ou,kr=b(()=>{"use strict";rt=require("node:fs"),Cu=require("node:os"),B=require("node:path");h();ke();Wn();ge();ku();Vy=p("KBPathResolver");Ou=new Set(["github.com","gitlab.com","bitbucket.org"])});async function es(t){let e=await j(["config","--get","remote.origin.url"],t),r=e.exitCode===0?e.stdout.trim():"";return r.length===0?Rr(t):Yu(r,t)}function Yu(t,e){let r=t.trim();if(r.length===0)return Rr(e);let n=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(r);if(n&&!r.includes("://")){let s=n[2].toLowerCase(),a=Xu(s,Vu(n[3]));return`https://${s}/${a}`}let o;try{o=new URL(r)}catch{return Rr(e)}let i=o.protocol.replace(/:$/,"").toLowerCase();if(i==="ssh"||i==="git"||i==="http"||i==="https"){let s=o.hostname.toLowerCase(),a=Xu(s,Vu(o.pathname.replace(/^\/+/,""))),l=sw(i,o.port);return`https://${s}${l}/${a}`}return Rr(i==="file"?o.pathname:e)}function Rr(t){let e=cr(ze(t));return e.length===0?"file:///":e.startsWith("/")?`file://${e}`:`file:///${e}`}function Vu(t){let e=cr(t);return e.toLowerCase().endsWith(".git")&&(e=e.slice(0,-4)),cr(e)}function Xu(t,e){return Ou.has(t)?e.toLowerCase():e}function sw(t,e){return e.length===0?"":t==="ssh"||t==="git"?e===iw[t]?"":`:${e}`:`:${e}`}var iw,Xn=b(()=>{"use strict";oe();kr();ge();iw={ssh:"22",git:"9418"}});var Qu,Zu,ed,td,rd,nd,Yn=b(()=>{"use strict";Qu=`
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
`,Zu=`
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
`,ed=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,td=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,rd=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,nd=`
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
`});function Mt(){return(0,zn.join)(re(),"jollimemory.db")}function Qn(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Tr.major?!0:r<Tr.major?!1:n>=Tr.minor}function ns(t){try{let e=t.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),r=Number.parseInt(e?.value??"",10);return Number.isFinite(r)?r:0}catch{return 0}}function pw(t){let e=ns(t);if(!(e>=Je)){t.exec("PRAGMA foreign_keys = OFF");try{for(let r=e;r<Je;r++){t.exec("BEGIN IMMEDIATE");try{if(ns(t)>r){t.exec("COMMIT");continue}t.exec(dw[r]),t.exec(`INSERT INTO schema_meta (key, value) VALUES ('schema_version', '${r+1}')
					 ON CONFLICT(key) DO UPDATE SET value = excluded.value`),t.exec("COMMIT")}catch(n){try{t.exec("ROLLBACK")}catch{}throw n}}}finally{t.exec("PRAGMA foreign_keys = ON")}is.info("dashboard schema migrated %d \u2192 %d",e,Je)}}function mw(t){let e=(0,zn.dirname)(t);try{(0,We.mkdirSync)(e,{recursive:!0,mode:448}),((0,We.statSync)(e).mode&511)!==448&&(0,We.chmodSync)(e,448)}catch(r){is.warn("could not restrict %s to owner-only: %s",e,x(r))}}function fw(t){for(let e of[t,`${t}-wal`,`${t}-shm`])try{((0,We.statSync)(e).mode&511)!==384&&(0,We.chmodSync)(e,384)}catch(r){Rt(r)||is.warn("could not restrict %s to 0600: %s",e,x(r))}}async function od(t,e){if(!Qn())throw new rs(process.versions.node);let r=e.dbPath??Mt(),n=e.maxAttempts??4,o=e.baseDelayMs??50;t||mw(r);let{DatabaseSync:i}=await import("node:sqlite");for(let s=1;;s++){let a;try{a=new i(r,{readOnly:t});for(let l of t?cw:lw)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${e.busyTimeoutMs??uw}`),t||fw(r),a}catch(l){try{a?.close()}catch{}if(ct(l)?.kind!=="locked"||s>=n)throw l;await new Promise(c=>setTimeout(c,o*2**(s-1)))}}}async function id(t,e={}){let r=await od(!1,e);try{let n=ns(r);if(n>Je)throw new os(n,e.dbPath??Mt());return pw(r),await t(r)}finally{r.close()}}async function ss(t,e={}){let r=await od(!0,e);try{return await t(r)}finally{r.close()}}function as(t,e){t.exec("BEGIN IMMEDIATE");try{let r=e();return t.exec("COMMIT"),r}catch(r){try{t.exec("ROLLBACK")}catch{}throw r}}var We,zn,is,Je,Tr,rs,lw,cw,uw,dw,os,$t=b(()=>{"use strict";We=require("node:fs"),zn=require("node:path");ce();xe();h();Yn();is=p("DashboardDb"),Je=5,Tr={major:22,minor:13};rs=class extends Error{constructor(e){super(`The Jolli dashboard needs Node >= ${Tr.major}.${Tr.minor} for built-in SQLite (running ${e}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},lw=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],cw=["PRAGMA foreign_keys = ON"],uw=2e3,dw=[Qu+`
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
`+nd,Zu,ed,td,rd];os=class extends Error{constructor(e,r){super(`${r} uses dashboard schema v${e}, newer than this build's v${Je}. Upgrade Jolli, or delete that file to rebuild the dashboard from scratch.`),this.name="DashboardSchemaAheadError"}}});function ls(t){let e=i=>{try{return(0,vr.statSync)(`${t}${i}`),!0}catch{return!1}},r=e(""),n=e("-wal"),o=e("-shm");return r?n&&o?"healthy-active":n?"healthy-recoverable":"healthy-clean":n||o?"alarm-sidecars-only":"absent"}var vr,ZP,cs=b(()=>{"use strict";vr=require("node:fs");h();ZP=p("DbDetection")});async function gw(t){try{let r=await es(t);if(r&&!r.startsWith("file:"))return{identity:r,remoteUrl:r}}catch(r){hw.debug("no canonical remote for %s (%s) \u2014 using path identity",t,x(r))}return{identity:`local:${(0,sd.createHash)("sha256").update(ze(t)).digest("hex").slice(0,32)}`}}async function dt(t){return gw(await Ko(t))}var sd,hw,jt=b(()=>{"use strict";sd=require("node:crypto");si();oe();Xn();Te();ge();ce();h();hw=p("RepoRegistry")});var ld={};Oa(ld,{hasCutoverRow:()=>Ew,resetCutoverRouterCaches:()=>ww,resolveCutoverRoute:()=>Cr});function ww(){us.clear()}async function Sw(t){let e=us.get(t);if(e!==void 0)return e;let{identity:r}=await dt(t);return us.set(t,r),r}async function ad(t,e){if(!Qn())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let r=ls(e);if(r==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(r==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:n}=await import("node:sqlite"),o=new n(e,{readOnly:!0});try{let i=o.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get();if(i&&Number(i.value)>Je)return{kind:"unavailable",reason:`database schema v${i.value} is newer than this build's v${Je} \u2014 upgrade this surface`};let s=await Sw(t),a=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!a)return{kind:"no-row"};let l=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(a.id);return l?{kind:"row",record:JSON.parse(l.value)}:{kind:"no-row"}}finally{o.close()}}catch(n){return{kind:"unavailable",reason:x(n)}}}async function Ew(t,e={}){return(await ad(t,e.dbPath??Mt())).kind==="row"}async function Cr(t,e={}){let r=await dr(t).catch(()=>null),n=await ad(t,e.dbPath??Mt());return n.kind==="row"?{state:"cutover",record:n.record}:r!==null?n.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:n.reason}:n.kind==="unavailable"?(yw.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",n.reason),{state:"uncutover",warning:n.reason}):{state:"uncutover"}}var yw,us,Zn=b(()=>{"use strict";et();h();$t();cs();jt();yw=p("CutoverRouter"),us=new Map});var Wt=k((bN,Sp)=>{"use strict";var TS="2.0.0",vS=Number.MAX_SAFE_INTEGER||9007199254740991,CS=16,xS=250,PS=["major","premajor","minor","preminor","patch","prepatch","prerelease"];Sp.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:CS,MAX_SAFE_BUILD_LENGTH:xS,MAX_SAFE_INTEGER:vS,RELEASE_TYPES:PS,SEMVER_SPEC_VERSION:TS,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var $r=k((kN,Ep)=>{"use strict";var AS=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};Ep.exports=AS});var Bt=k((Ae,bp)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:Ps,MAX_SAFE_BUILD_LENGTH:IS,MAX_LENGTH:DS}=Wt(),NS=$r();Ae=bp.exports={};var OS=Ae.re=[],LS=Ae.safeRe=[],g=Ae.src=[],MS=Ae.safeSrc=[],y=Ae.t={},$S=0,As="[a-zA-Z0-9-]",jS=[["\\s",1],["\\d",DS],[As,IS]],FS=t=>{for(let[e,r]of jS)t=t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);return t},R=(t,e,r)=>{let n=FS(e),o=$S++;NS(t,o,e),y[t]=o,g[o]=e,MS[o]=n,OS[o]=new RegExp(e,r?"g":void 0),LS[o]=new RegExp(n,r?"g":void 0)};R("NUMERICIDENTIFIER","0|[1-9]\\d*");R("NUMERICIDENTIFIERLOOSE","\\d+");R("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${As}*`);R("MAINVERSION",`(${g[y.NUMERICIDENTIFIER]})\\.(${g[y.NUMERICIDENTIFIER]})\\.(${g[y.NUMERICIDENTIFIER]})`);R("MAINVERSIONLOOSE",`(${g[y.NUMERICIDENTIFIERLOOSE]})\\.(${g[y.NUMERICIDENTIFIERLOOSE]})\\.(${g[y.NUMERICIDENTIFIERLOOSE]})`);R("PRERELEASEIDENTIFIER",`(?:${g[y.NONNUMERICIDENTIFIER]}|${g[y.NUMERICIDENTIFIER]})`);R("PRERELEASEIDENTIFIERLOOSE",`(?:${g[y.NONNUMERICIDENTIFIER]}|${g[y.NUMERICIDENTIFIERLOOSE]})`);R("PRERELEASE",`(?:-(${g[y.PRERELEASEIDENTIFIER]}(?:\\.${g[y.PRERELEASEIDENTIFIER]})*))`);R("PRERELEASELOOSE",`(?:-?(${g[y.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${g[y.PRERELEASEIDENTIFIERLOOSE]})*))`);R("BUILDIDENTIFIER",`${As}+`);R("BUILD",`(?:\\+(${g[y.BUILDIDENTIFIER]}(?:\\.${g[y.BUILDIDENTIFIER]})*))`);R("FULLPLAIN",`v?${g[y.MAINVERSION]}${g[y.PRERELEASE]}?${g[y.BUILD]}?`);R("FULL",`^${g[y.FULLPLAIN]}$`);R("LOOSEPLAIN",`[v=\\s]*${g[y.MAINVERSIONLOOSE]}${g[y.PRERELEASELOOSE]}?${g[y.BUILD]}?`);R("LOOSE",`^${g[y.LOOSEPLAIN]}$`);R("GTLT","((?:<|>)?=?)");R("XRANGEIDENTIFIERLOOSE",`${g[y.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);R("XRANGEIDENTIFIER",`${g[y.NUMERICIDENTIFIER]}|x|X|\\*`);R("XRANGEPLAIN",`[v=\\s]*(${g[y.XRANGEIDENTIFIER]})(?:\\.(${g[y.XRANGEIDENTIFIER]})(?:\\.(${g[y.XRANGEIDENTIFIER]})(?:${g[y.PRERELEASE]})?${g[y.BUILD]}?)?)?`);R("XRANGEPLAINLOOSE",`[v=\\s]*(${g[y.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[y.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[y.XRANGEIDENTIFIERLOOSE]})(?:${g[y.PRERELEASELOOSE]})?${g[y.BUILD]}?)?)?`);R("XRANGE",`^${g[y.GTLT]}\\s*${g[y.XRANGEPLAIN]}$`);R("XRANGELOOSE",`^${g[y.GTLT]}\\s*${g[y.XRANGEPLAINLOOSE]}$`);R("COERCEPLAIN",`(^|[^\\d])(\\d{1,${Ps}})(?:\\.(\\d{1,${Ps}}))?(?:\\.(\\d{1,${Ps}}))?`);R("COERCE",`${g[y.COERCEPLAIN]}(?:$|[^\\d])`);R("COERCEFULL",g[y.COERCEPLAIN]+`(?:${g[y.PRERELEASE]})?(?:${g[y.BUILD]})?(?:$|[^\\d])`);R("COERCERTL",g[y.COERCE],!0);R("COERCERTLFULL",g[y.COERCEFULL],!0);R("LONETILDE","(?:~>?)");R("TILDETRIM",`(\\s*)${g[y.LONETILDE]}\\s+`,!0);Ae.tildeTrimReplace="$1~";R("TILDE",`^${g[y.LONETILDE]}${g[y.XRANGEPLAIN]}$`);R("TILDELOOSE",`^${g[y.LONETILDE]}${g[y.XRANGEPLAINLOOSE]}$`);R("LONECARET","(?:\\^)");R("CARETTRIM",`(\\s*)${g[y.LONECARET]}\\s+`,!0);Ae.caretTrimReplace="$1^";R("CARET",`^${g[y.LONECARET]}${g[y.XRANGEPLAIN]}$`);R("CARETLOOSE",`^${g[y.LONECARET]}${g[y.XRANGEPLAINLOOSE]}$`);R("COMPARATORLOOSE",`^${g[y.GTLT]}\\s*(${g[y.LOOSEPLAIN]})$|^$`);R("COMPARATOR",`^${g[y.GTLT]}\\s*(${g[y.FULLPLAIN]})$|^$`);R("COMPARATORTRIM",`(\\s*)${g[y.GTLT]}\\s*(${g[y.LOOSEPLAIN]}|${g[y.XRANGEPLAIN]})`,!0);Ae.comparatorTrimReplace="$1$2$3";R("HYPHENRANGE",`^\\s*(${g[y.XRANGEPLAIN]})\\s+-\\s+(${g[y.XRANGEPLAIN]})\\s*$`);R("HYPHENRANGELOOSE",`^\\s*(${g[y.XRANGEPLAINLOOSE]})\\s+-\\s+(${g[y.XRANGEPLAINLOOSE]})\\s*$`);R("STAR","(<|>)?=?\\s*\\*");R("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");R("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var po=k((_N,kp)=>{"use strict";var HS=Object.freeze({loose:!0}),US=Object.freeze({}),JS=t=>t?typeof t!="object"?HS:t:US;kp.exports=JS});var Is=k((RN,Tp)=>{"use strict";var _p=/^[0-9]+$/,Rp=(t,e)=>{if(typeof t=="number"&&typeof e=="number")return t===e?0:t<e?-1:1;let r=_p.test(t),n=_p.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},WS=(t,e)=>Rp(e,t);Tp.exports={compareIdentifiers:Rp,rcompareIdentifiers:WS}});var q=k((TN,Cp)=>{"use strict";var mo=$r(),{MAX_LENGTH:vp,MAX_SAFE_INTEGER:fo}=Wt(),{safeRe:ho,t:go}=Bt(),BS=po(),{compareIdentifiers:Ds}=Is(),Ns=class t{constructor(e,r){if(r=BS(r),e instanceof t){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>vp)throw new TypeError(`version is longer than ${vp} characters`);mo("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=e.trim().match(r.loose?ho[go.LOOSE]:ho[go.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>fo||this.major<0)throw new TypeError("Invalid major version");if(this.minor>fo||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>fo||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let i=+o;if(i>=0&&i<fo)return i}return o}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(mo("SemVer.compare",this.version,this.options,e),!(e instanceof t)){if(typeof e=="string"&&e===this.version)return 0;e=new t(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof t||(e=new t(e,this.options)),this.major<e.major?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:this.patch>e.patch?1:0}comparePre(e){if(e instanceof t||(e=new t(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],o=e.prerelease[r];if(mo("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return Ds(n,o)}while(++r)}compareBuild(e){e instanceof t||(e=new t(e,this.options));let r=0;do{let n=this.build[r],o=e.build[r];if(mo("build compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return Ds(n,o)}while(++r)}inc(e,r,n){if(e.startsWith("pre")){if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(r){let o=`-${r}`.match(this.options.loose?ho[go.PRERELEASELOOSE]:ho[go.PRERELEASE]);if(!o||o[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let i=this.prerelease.length;for(;--i>=0;)typeof this.prerelease[i]=="number"&&(this.prerelease[i]++,i=-2);if(i===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let i=[r,o];n===!1&&(i=[r]),Ds(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=i):this.prerelease=i}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Cp.exports=Ns});var ot=k((vN,Pp)=>{"use strict";var xp=q(),qS=(t,e,r=!1)=>{if(t instanceof xp)return t;try{return new xp(t,e)}catch(n){if(!r)return null;throw n}};Pp.exports=qS});var Ip=k((CN,Ap)=>{"use strict";var GS=ot(),KS=(t,e)=>{let r=GS(t,e);return r?r.version:null};Ap.exports=KS});var Np=k((xN,Dp)=>{"use strict";var VS=ot(),XS=(t,e)=>{let r=VS(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};Dp.exports=XS});var Mp=k((PN,Lp)=>{"use strict";var Op=q(),YS=(t,e,r,n,o)=>{typeof r=="string"&&(o=n,n=r,r=void 0);try{return new Op(t instanceof Op?t.version:t,r).inc(e,n,o).version}catch{return null}};Lp.exports=YS});var Fp=k((AN,jp)=>{"use strict";var $p=ot(),zS=(t,e)=>{let r=$p(t,null,!0),n=$p(e,null,!0),o=r.compare(n);if(o===0)return null;let i=o>0,s=i?r:n,a=i?n:r,l=!!s.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(s)===0)return a.minor&&!a.patch?"minor":"patch"}let d=l?"pre":"";return r.major!==n.major?d+"major":r.minor!==n.minor?d+"minor":r.patch!==n.patch?d+"patch":"prerelease"};jp.exports=zS});var Up=k((IN,Hp)=>{"use strict";var QS=q(),ZS=(t,e)=>new QS(t,e).major;Hp.exports=ZS});var Wp=k((DN,Jp)=>{"use strict";var eE=q(),tE=(t,e)=>new eE(t,e).minor;Jp.exports=tE});var qp=k((NN,Bp)=>{"use strict";var rE=q(),nE=(t,e)=>new rE(t,e).patch;Bp.exports=nE});var Kp=k((ON,Gp)=>{"use strict";var oE=ot(),iE=(t,e)=>{let r=oE(t,e);return r&&r.prerelease.length?r.prerelease:null};Gp.exports=iE});var de=k((LN,Xp)=>{"use strict";var Vp=q(),sE=(t,e,r)=>new Vp(t,r).compare(new Vp(e,r));Xp.exports=sE});var zp=k((MN,Yp)=>{"use strict";var aE=de(),lE=(t,e,r)=>aE(e,t,r);Yp.exports=lE});var Zp=k(($N,Qp)=>{"use strict";var cE=de(),uE=(t,e)=>cE(t,e,!0);Qp.exports=uE});var yo=k((jN,tm)=>{"use strict";var em=q(),dE=(t,e,r)=>{let n=new em(t,r),o=new em(e,r);return n.compare(o)||n.compareBuild(o)};tm.exports=dE});var nm=k((FN,rm)=>{"use strict";var pE=yo(),mE=(t,e)=>t.sort((r,n)=>pE(r,n,e));rm.exports=mE});var im=k((HN,om)=>{"use strict";var fE=yo(),hE=(t,e)=>t.sort((r,n)=>fE(n,r,e));om.exports=hE});var jr=k((UN,sm)=>{"use strict";var gE=de(),yE=(t,e,r)=>gE(t,e,r)>0;sm.exports=yE});var wo=k((JN,am)=>{"use strict";var wE=de(),SE=(t,e,r)=>wE(t,e,r)<0;am.exports=SE});var Os=k((WN,lm)=>{"use strict";var EE=de(),bE=(t,e,r)=>EE(t,e,r)===0;lm.exports=bE});var Ls=k((BN,cm)=>{"use strict";var kE=de(),_E=(t,e,r)=>kE(t,e,r)!==0;cm.exports=_E});var So=k((qN,um)=>{"use strict";var RE=de(),TE=(t,e,r)=>RE(t,e,r)>=0;um.exports=TE});var Eo=k((GN,dm)=>{"use strict";var vE=de(),CE=(t,e,r)=>vE(t,e,r)<=0;dm.exports=CE});var Ms=k((KN,pm)=>{"use strict";var xE=Os(),PE=Ls(),AE=jr(),IE=So(),DE=wo(),NE=Eo(),OE=(t,e,r,n)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return xE(t,r,n);case"!=":return PE(t,r,n);case">":return AE(t,r,n);case">=":return IE(t,r,n);case"<":return DE(t,r,n);case"<=":return NE(t,r,n);default:throw new TypeError(`Invalid operator: ${e}`)}};pm.exports=OE});var fm=k((VN,mm)=>{"use strict";var LE=q(),ME=ot(),{safeRe:bo,t:ko}=Bt(),$E=(t,e)=>{if(t instanceof LE)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(e.includePrerelease?bo[ko.COERCEFULL]:bo[ko.COERCE]);else{let l=e.includePrerelease?bo[ko.COERCERTLFULL]:bo[ko.COERCERTL],c;for(;(c=l.exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||c.index+c[0].length!==r.index+r[0].length)&&(r=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(r===null)return null;let n=r[2],o=r[3]||"0",i=r[4]||"0",s=e.includePrerelease&&r[5]?`-${r[5]}`:"",a=e.includePrerelease&&r[6]?`+${r[6]}`:"";return ME(`${n}.${o}.${i}${s}${a}`,e)};mm.exports=$E});var gm=k((XN,hm)=>{"use strict";var jE=ot(),FE=Wt(),HE=q(),UE=(t,e,r)=>{if(!FE.RELEASE_TYPES.includes(e))return null;let n=JE(t,r);return n&&WE(n,e)},JE=(t,e)=>{let r=t instanceof HE?t.version:t;return jE(r,e)},WE=(t,e)=>{if(BE(e))return t.version;switch(t.prerelease=[],e){case"major":t.minor=0,t.patch=0;break;case"minor":t.patch=0;break}return t.format()},BE=t=>t.startsWith("pre");hm.exports=UE});var wm=k((YN,ym)=>{"use strict";var $s=class{constructor(){this.max=1e3,this.map=new Map}get(e){let r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(e,r)}return this}};ym.exports=$s});var pe=k((zN,km)=>{"use strict";var qE=/\s+/g,js=class t{constructor(e,r){if(r=KE(r),e instanceof t)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new t(e.raw,r);if(e instanceof Fs)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e.trim().replace(qE," "),this.set=this.raw.split("||").map(n=>this.parseRange(n.trim())).filter(n=>n.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let n=this.set[0];if(this.set=this.set.filter(o=>!Em(o[0])),this.set.length===0)this.set=[n];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&rb(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let r=this.set[e];for(let n=0;n<r.length;n++)n>0&&(this.formatted+=" "),this.formatted+=r[n].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(tb,"");let n=((this.options.includePrerelease&&ZE)|(this.options.loose&&eb))+":"+e,o=Sm.get(n);if(o)return o;let i=this.options.loose,s=i?Q[G.HYPHENRANGELOOSE]:Q[G.HYPHENRANGE];e=e.replace(s,pb(this.options.includePrerelease)),L("hyphen replace",e),e=e.replace(Q[G.COMPARATORTRIM],YE),L("comparator trim",e),e=e.replace(Q[G.TILDETRIM],zE),L("tilde trim",e),e=e.replace(Q[G.CARETTRIM],QE),L("caret trim",e);let a=e.split(" ").map(u=>nb(u,this.options)).join(" ").split(/\s+/).map(u=>db(u,this.options));i&&(a=a.filter(u=>(L("loose invalid filter",u,this.options),!!u.match(Q[G.COMPARATORLOOSE])))),L("range list",a);let l=new Map,c=a.map(u=>new Fs(u,this.options));for(let u of c){if(Em(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return Sm.set(n,d),d}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Range is required");return this.set.some(n=>bm(n,r)&&e.set.some(o=>bm(o,r)&&n.every(i=>o.every(s=>i.intersects(s,r)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new VE(e,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(mb(this.set[r],e,this.options))return!0;return!1}};km.exports=js;var GE=wm(),Sm=new GE,KE=po(),Fs=Fr(),L=$r(),VE=q(),{safeRe:Q,src:XE,t:G,comparatorTrimReplace:YE,tildeTrimReplace:zE,caretTrimReplace:QE}=Bt(),{FLAG_INCLUDE_PRERELEASE:ZE,FLAG_LOOSE:eb}=Wt(),tb=new RegExp(XE[G.BUILD],"g"),Em=t=>t.value==="<0.0.0-0",rb=t=>t.value==="",bm=(t,e)=>{let r=!0,n=t.slice(),o=n.pop();for(;r&&n.length;)r=n.every(i=>o.intersects(i,e)),o=n.pop();return r},nb=(t,e)=>(t=t.replace(Q[G.BUILD],""),L("comp",t,e),t=sb(t,e),L("caret",t),t=ob(t,e),L("tildes",t),t=lb(t,e),L("xrange",t),t=ub(t,e),L("stars",t),t),Z=t=>!t||t.toLowerCase()==="x"||t==="*",ob=(t,e)=>t.trim().split(/\s+/).map(r=>ib(r,e)).join(" "),ib=(t,e)=>{let r=e.loose?Q[G.TILDELOOSE]:Q[G.TILDE];return t.replace(r,(n,o,i,s,a)=>{L("tilde",t,n,o,i,s,a);let l;return Z(o)?l="":Z(i)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:Z(s)?l=`>=${o}.${i}.0 <${o}.${+i+1}.0-0`:a?(L("replaceTilde pr",a),l=`>=${o}.${i}.${s}-${a} <${o}.${+i+1}.0-0`):l=`>=${o}.${i}.${s} <${o}.${+i+1}.0-0`,L("tilde return",l),l})},sb=(t,e)=>t.trim().split(/\s+/).map(r=>ab(r,e)).join(" "),ab=(t,e)=>{L("caret",t,e);let r=e.loose?Q[G.CARETLOOSE]:Q[G.CARET],n=e.includePrerelease?"-0":"";return t.replace(r,(o,i,s,a,l)=>{L("caret",t,o,i,s,a,l);let c;return Z(i)?c="":Z(s)?c=`>=${i}.0.0${n} <${+i+1}.0.0-0`:Z(a)?i==="0"?c=`>=${i}.${s}.0${n} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.0${n} <${+i+1}.0.0-0`:l?(L("replaceCaret pr",l),i==="0"?s==="0"?c=`>=${i}.${s}.${a}-${l} <${i}.${s}.${+a+1}-0`:c=`>=${i}.${s}.${a}-${l} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.${a}-${l} <${+i+1}.0.0-0`):(L("no pr"),i==="0"?s==="0"?c=`>=${i}.${s}.${a}${n} <${i}.${s}.${+a+1}-0`:c=`>=${i}.${s}.${a}${n} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.${a} <${+i+1}.0.0-0`),L("caret return",c),c})},lb=(t,e)=>(L("replaceXRanges",t,e),t.split(/\s+/).map(r=>cb(r,e)).join(" ")),cb=(t,e)=>{t=t.trim();let r=e.loose?Q[G.XRANGELOOSE]:Q[G.XRANGE];return t.replace(r,(n,o,i,s,a,l)=>{L("xRange",t,n,o,i,s,a,l);let c=Z(i),d=c||Z(s),u=d||Z(a),f=u;return o==="="&&f&&(o=""),l=e.includePrerelease?"-0":"",c?o===">"||o==="<"?n="<0.0.0-0":n="*":o&&f?(d&&(s=0),a=0,o===">"?(o=">=",d?(i=+i+1,s=0,a=0):(s=+s+1,a=0)):o==="<="&&(o="<",d?i=+i+1:s=+s+1),o==="<"&&(l="-0"),n=`${o+i}.${s}.${a}${l}`):d?n=`>=${i}.0.0${l} <${+i+1}.0.0-0`:u&&(n=`>=${i}.${s}.0${l} <${i}.${+s+1}.0-0`),L("xRange return",n),n})},ub=(t,e)=>(L("replaceStars",t,e),t.trim().replace(Q[G.STAR],"")),db=(t,e)=>(L("replaceGTE0",t,e),t.trim().replace(Q[e.includePrerelease?G.GTE0PRE:G.GTE0],"")),pb=t=>(e,r,n,o,i,s,a,l,c,d,u,f)=>(Z(n)?r="":Z(o)?r=`>=${n}.0.0${t?"-0":""}`:Z(i)?r=`>=${n}.${o}.0${t?"-0":""}`:s?r=`>=${r}`:r=`>=${r}${t?"-0":""}`,Z(c)?l="":Z(d)?l=`<${+c+1}.0.0-0`:Z(u)?l=`<${c}.${+d+1}.0-0`:f?l=`<=${c}.${d}.${u}-${f}`:t?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${r} ${l}`.trim()),mb=(t,e,r)=>{for(let n=0;n<t.length;n++)if(!t[n].test(e))return!1;if(e.prerelease.length&&!r.includePrerelease){for(let n=0;n<t.length;n++)if(L(t[n].semver),t[n].semver!==Fs.ANY&&t[n].semver.prerelease.length>0){let o=t[n].semver;if(o.major===e.major&&o.minor===e.minor&&o.patch===e.patch)return!0}return!1}return!0}});var Fr=k((QN,xm)=>{"use strict";var Hr=Symbol("SemVer ANY"),Js=class t{static get ANY(){return Hr}constructor(e,r){if(r=_m(r),e instanceof t){if(e.loose===!!r.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),Us("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===Hr?this.value="":this.value=this.operator+this.semver.version,Us("comp",this)}parse(e){let r=this.options.loose?Rm[Tm.COMPARATORLOOSE]:Rm[Tm.COMPARATOR],n=e.match(r);if(!n)throw new TypeError(`Invalid comparator: ${e}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new vm(n[2],this.options.loose):this.semver=Hr}toString(){return this.value}test(e){if(Us("Comparator.test",e,this.options.loose),this.semver===Hr||e===Hr)return!0;if(typeof e=="string")try{e=new vm(e,this.options)}catch{return!1}return Hs(e,this.operator,this.semver,this.options)}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new Cm(e.value,r).test(this.value):e.operator===""?e.value===""?!0:new Cm(this.value,r).test(e.semver):(r=_m(r),r.includePrerelease&&(this.value==="<0.0.0-0"||e.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||Hs(this.semver,"<",e.semver,r)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||Hs(this.semver,">",e.semver,r)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}};xm.exports=Js;var _m=po(),{safeRe:Rm,t:Tm}=Bt(),Hs=Ms(),Us=$r(),vm=q(),Cm=pe()});var Ur=k((ZN,Pm)=>{"use strict";var fb=pe(),hb=(t,e,r)=>{try{e=new fb(e,r)}catch{return!1}return e.test(t)};Pm.exports=hb});var Im=k((eO,Am)=>{"use strict";var gb=pe(),yb=(t,e)=>new gb(t,e).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));Am.exports=yb});var Nm=k((tO,Dm)=>{"use strict";var wb=q(),Sb=pe(),Eb=(t,e,r)=>{let n=null,o=null,i=null;try{i=new Sb(e,r)}catch{return null}return t.forEach(s=>{i.test(s)&&(!n||o.compare(s)===-1)&&(n=s,o=new wb(n,r))}),n};Dm.exports=Eb});var Lm=k((rO,Om)=>{"use strict";var bb=q(),kb=pe(),_b=(t,e,r)=>{let n=null,o=null,i=null;try{i=new kb(e,r)}catch{return null}return t.forEach(s=>{i.test(s)&&(!n||o.compare(s)===1)&&(n=s,o=new bb(n,r))}),n};Om.exports=_b});var jm=k((nO,$m)=>{"use strict";var Ws=q(),Rb=pe(),Mm=jr(),Tb=(t,e)=>{t=new Rb(t,e);let r=new Ws("0.0.0");if(t.test(r)||(r=new Ws("0.0.0-0"),t.test(r)))return r;r=null;for(let n=0;n<t.set.length;++n){let o=t.set[n],i=null;o.forEach(s=>{let a=new Ws(s.semver.version);switch(s.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!i||Mm(a,i))&&(i=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${s.operator}`)}}),i&&(!r||Mm(r,i))&&(r=i)}return r&&t.test(r)?r:null};$m.exports=Tb});var Hm=k((oO,Fm)=>{"use strict";var vb=pe(),Cb=(t,e)=>{try{return new vb(t,e).range||"*"}catch{return null}};Fm.exports=Cb});var _o=k((iO,Bm)=>{"use strict";var xb=q(),Wm=Fr(),{ANY:Pb}=Wm,Ab=pe(),Ib=Ur(),Um=jr(),Jm=wo(),Db=Eo(),Nb=So(),Ob=(t,e,r,n)=>{t=new xb(t,n),e=new Ab(e,n);let o,i,s,a,l;switch(r){case">":o=Um,i=Db,s=Jm,a=">",l=">=";break;case"<":o=Jm,i=Nb,s=Um,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Ib(t,e,n))return!1;for(let c=0;c<e.set.length;++c){let d=e.set[c],u=null,f=null;if(d.forEach(m=>{m.semver===Pb&&(m=new Wm(">=0.0.0")),u=u||m,f=f||m,o(m.semver,u.semver,n)?u=m:s(m.semver,f.semver,n)&&(f=m)}),u.operator===a||u.operator===l||(!f.operator||f.operator===a)&&i(t,f.semver))return!1;if(f.operator===l&&s(t,f.semver))return!1}return!0};Bm.exports=Ob});var Gm=k((sO,qm)=>{"use strict";var Lb=_o(),Mb=(t,e,r)=>Lb(t,e,">",r);qm.exports=Mb});var Vm=k((aO,Km)=>{"use strict";var $b=_o(),jb=(t,e,r)=>$b(t,e,"<",r);Km.exports=jb});var zm=k((lO,Ym)=>{"use strict";var Xm=pe(),Fb=(t,e,r)=>(t=new Xm(t,r),e=new Xm(e,r),t.intersects(e,r));Ym.exports=Fb});var Zm=k((cO,Qm)=>{"use strict";var Hb=Ur(),Ub=de();Qm.exports=(t,e,r)=>{let n=[],o=null,i=null,s=t.sort((d,u)=>Ub(d,u,r));for(let d of s)Hb(d,e,r)?(i=d,o||(o=d)):(i&&n.push([o,i]),i=null,o=null);o&&n.push([o,null]);let a=[];for(let[d,u]of n)d===u?a.push(d):!u&&d===s[0]?a.push("*"):u?d===s[0]?a.push(`<=${u}`):a.push(`${d} - ${u}`):a.push(`>=${d}`);let l=a.join(" || "),c=typeof e.raw=="string"?e.raw:String(e);return l.length<c.length?l:e}});var sf=k((uO,of)=>{"use strict";var ef=pe(),Gs=Fr(),{ANY:Bs}=Gs,qs=Ur(),Ks=de(),Jb=(t,e,r={})=>{if(t===e)return!0;t=new ef(t,r),e=new ef(e,r);let n=!1;e:for(let o of t.set){for(let i of e.set){let s=Bb(o,i,r);if(n=n||s!==null,s)continue e}if(n)return!1}return!0},Wb=[new Gs(">=0.0.0-0")],tf=[new Gs(">=0.0.0")],Bb=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===Bs){if(e.length===1&&e[0].semver===Bs)return!0;r.includePrerelease?t=Wb:t=tf}if(e.length===1&&e[0].semver===Bs){if(r.includePrerelease)return!0;e=tf}let n=new Set,o,i;for(let m of t)m.operator===">"||m.operator===">="?o=rf(o,m,r):m.operator==="<"||m.operator==="<="?i=nf(i,m,r):n.add(m.semver);if(n.size>1)return null;let s;if(o&&i){if(s=Ks(o.semver,i.semver,r),s>0)return null;if(s===0&&(o.operator!==">="||i.operator!=="<="))return null}for(let m of n){if(o&&!qs(m,String(o),r)||i&&!qs(m,String(i),r))return null;for(let w of e)if(!qs(m,String(w),r))return!1;return!0}let a,l,c,d,u=i&&!r.includePrerelease&&i.semver.prerelease.length?i.semver:!1,f=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1;u&&u.prerelease.length===1&&i.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let m of e){if(d=d||m.operator===">"||m.operator===">=",c=c||m.operator==="<"||m.operator==="<=",o){if(f&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===f.major&&m.semver.minor===f.minor&&m.semver.patch===f.patch&&(f=!1),m.operator===">"||m.operator===">="){if(a=rf(o,m,r),a===m&&a!==o)return!1}else if(o.operator===">="&&!m.test(o.semver))return!1}if(i){if(u&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===u.major&&m.semver.minor===u.minor&&m.semver.patch===u.patch&&(u=!1),m.operator==="<"||m.operator==="<="){if(l=nf(i,m,r),l===m&&l!==i)return!1}else if(i.operator==="<="&&!m.test(i.semver))return!1}if(!m.operator&&(i||o)&&s!==0)return!1}return!(o&&c&&!i&&s!==0||i&&d&&!o&&s!==0||f||u)},rf=(t,e,r)=>{if(!t)return e;let n=Ks(t.semver,e.semver,r);return n>0?t:n<0||e.operator===">"&&t.operator===">="?e:t},nf=(t,e,r)=>{if(!t)return e;let n=Ks(t.semver,e.semver,r);return n<0?t:n>0||e.operator==="<"&&t.operator==="<="?e:t};of.exports=Jb});var uf=k((dO,cf)=>{"use strict";var Vs=Bt(),af=Wt(),qb=q(),lf=Is(),Gb=ot(),Kb=Ip(),Vb=Np(),Xb=Mp(),Yb=Fp(),zb=Up(),Qb=Wp(),Zb=qp(),ek=Kp(),tk=de(),rk=zp(),nk=Zp(),ok=yo(),ik=nm(),sk=im(),ak=jr(),lk=wo(),ck=Os(),uk=Ls(),dk=So(),pk=Eo(),mk=Ms(),fk=fm(),hk=gm(),gk=Fr(),yk=pe(),wk=Ur(),Sk=Im(),Ek=Nm(),bk=Lm(),kk=jm(),_k=Hm(),Rk=_o(),Tk=Gm(),vk=Vm(),Ck=zm(),xk=Zm(),Pk=sf();cf.exports={parse:Gb,valid:Kb,clean:Vb,inc:Xb,diff:Yb,major:zb,minor:Qb,patch:Zb,prerelease:ek,compare:tk,rcompare:rk,compareLoose:nk,compareBuild:ok,sort:ik,rsort:sk,gt:ak,lt:lk,eq:ck,neq:uk,gte:dk,lte:pk,cmp:mk,coerce:fk,truncate:hk,Comparator:gk,Range:yk,satisfies:wk,toComparators:Sk,maxSatisfying:Ek,minSatisfying:bk,minVersion:kk,validRange:_k,outside:Rk,gtr:Tk,ltr:vk,intersects:Ck,simplifyRange:xk,subset:Pk,SemVer:qb,re:Vs.re,src:Vs.src,tokens:Vs.t,SEMVER_SPEC_VERSION:af.SEMVER_SPEC_VERSION,RELEASE_TYPES:af.RELEASE_TYPES,compareIdentifiers:lf.compareIdentifiers,rcompareIdentifiers:lf.rcompareIdentifiers}});var nR={};Oa(nR,{buildCursorBootstrapOutput:()=>Sh,main:()=>kh,resolveCursorProjectDir:()=>Eh,runCursorPluginBootstrap:()=>bh});module.exports=Ih(nR);var Yr=require("node:path"),wh=require("node:url");var rr=require("node:fs");var Ma=require("node:path"),Dh="JOLLI_LOCAL_AGENT_CHILD",Nh=".jolli-local-agent-child";function on(t=process.env,e){return t[Dh]==="1"?!0:e!==void 0&&(0,rr.existsSync)((0,Ma.join)(e,Nh))}oe();Te();ge();var gg=["/.codex/plugins/","/.claude/plugins/","/.cursor/plugins/"];function dl(t){let e=Ye(t);return gg.some(r=>e.includes(r))}et();ce();var H=require("node:fs/promises"),Dt=require("node:path");te();oe();h();var ly='"$HOME/.jolli/jollimemory/run-hook"';function je(t,e=""){let r=e?` ${e}`:"";return`${ly} ${t}${r}`}var _i=["run-hook","StopHook","jollimemory-hooks.jar"],kn=["run-hook","SessionStartHook"],_n=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"];function hr(t,e){let r=typeof e=="string"?[e]:e;return t.some(n=>{let o=n.hooks;return Array.isArray(o)?o.some(i=>typeof i.command=="string"&&r.some(s=>i.command.includes(s))):!1})}function lt(t,e){let r=typeof e=="string"?[e]:e,n=[];for(let o of t){let i=o.hooks;if(!Array.isArray(i)){n.push(o);continue}let s=i.filter(a=>!(typeof a.command=="string"&&r.some(l=>a.command.includes(l))));s.length>0&&n.push({...o,hooks:s})}return n}function Ri(t){return hr(t,_i)}function Rn(t){return lt(t,_i)}var Tn=p("GitHookInstaller"),It="# >>> JolliMemory post-commit hook >>>",Ti="# <<< JolliMemory post-commit hook <<<",vn="# >>> JolliMemory post-rewrite hook >>>",fc="# <<< JolliMemory post-rewrite hook <<<",Cn="# >>> JolliMemory prepare-commit-msg hook >>>",hc="# <<< JolliMemory prepare-commit-msg hook <<<",xn="# >>> JolliMemory post-merge hook >>>",gc="# <<< JolliMemory post-merge hook <<<",Pn="# >>> JolliMemory pre-push hook >>>",yc="# <<< JolliMemory pre-push hook <<<";async function wc(t){let e=await Ct(t),r=(0,Dt.join)(e,"post-commit"),n=je("post-commit"),o=[It,n,Ti].join(`
`),i,s="";try{if(s=await(0,H.readFile)(r,"utf-8"),s.includes(It)){let l=new RegExp(`\\n*${tt(It)}[\\s\\S]*?${tt(Ti)}\\n*`,"g"),d=`${s.replace(l,`
`).trimEnd()}

${o}
`;return s===d?(await Dn(r),{path:r}):(await P(r,d),await(0,H.chmod)(r,493),{path:r})}i="Existing post-commit hook found \u2014 Jolli Memory section appended",Tn.warn(i)}catch{}let a;s?a=`${s}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,H.mkdir)(e,{recursive:!0}),await P(r,a);try{await(0,H.chmod)(r,493)}catch{}return Tn.info("Git post-commit hook installed"),{warning:i,path:r}}async function Sc(t){let e=je("post-rewrite",'"$1"'),r=[vn,e,fc].join(`
`);return An(t,"post-rewrite",r,vn)}async function Ec(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${e} ]; then ${e} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),n=[Cn,r,hc].join(`
`);return An(t,"prepare-commit-msg",n,Cn)}async function bc(t){let e=je("post-merge"),r=[xn,e,gc].join(`
`);return An(t,"post-merge",r,xn)}async function kc(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_pre_push_previous_status=$?",`if [ -x ${e} ]; then ${e} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),n=[Pn,r,yc].join(`
`);return An(t,"pre-push",n,Pn)}async function An(t,e,r,n){let o=r.slice(r.lastIndexOf(`
`)+1),i=await Ct(t),s=(0,Dt.join)(i,e),a,l="";try{if(l=await(0,H.readFile)(s,"utf-8"),l.includes(n)){let d=new RegExp(`\\n*${tt(n)}[\\s\\S]*?${tt(o)}\\n*`,"g"),f=`${l.replace(d,`
`).trimEnd()}

${r}
`;return l===f?(await Dn(s),{path:s}):(await P(s,f),await(0,H.chmod)(s,493),{path:s})}a=`Existing ${e} hook found \u2014 Jolli Memory section appended`,Tn.warn(a)}catch{}let c;l?c=`${l}

${r}
`:c=`#!/bin/sh

${r}
`,await(0,H.mkdir)(i,{recursive:!0}),await P(s,c);try{await(0,H.chmod)(s,493)}catch{}return Tn.info("Git %s hook installed",e),{warning:a,path:s}}async function _c(t){let e;try{let i=await Ct(t);e=(0,Dt.join)(i,"post-commit")}catch{return{}}let r;try{r=await(0,H.readFile)(e,"utf-8")}catch{return{}}if(!r.includes(It))return{};let n=new RegExp(`\\n*${tt(It)}[\\s\\S]*?${tt(Ti)}\\n*`,"g"),o=r.replace(n,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:i}=await import("node:fs/promises");await i(e,{force:!0})}else await P(e,o),await Dn(e);return{}}async function Rc(t){await In(t,"post-rewrite",vn,fc)}async function Tc(t){await In(t,"prepare-commit-msg",Cn,hc)}async function vc(t){await In(t,"post-merge",xn,gc)}async function Cc(t){await In(t,"pre-push",Pn,yc)}async function In(t,e,r,n){let o;try{o=await Ct(t)}catch{return}let i=(0,Dt.join)(o,e),s;try{s=await(0,H.readFile)(i,"utf-8")}catch{return}if(!s.includes(r))return;let a=new RegExp(`\\n*${tt(r)}[\\s\\S]*?${tt(n)}\\n*`,"g"),l=s.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(i,{force:!0})}else await P(i,l),await Dn(i)}async function vi(t){return xc(t,"post-commit",It)}async function xc(t,e,r){try{let n=await Ct(t),o=(0,Dt.join)(n,e);return(await(0,H.readFile)(o,"utf-8")).includes(r)?process.platform==="win32"?!0:((await(0,H.stat)(o)).mode&73)!==0:!1}catch{return!1}}function tt(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function Dn(t){try{((await(0,H.stat)(t)).mode&73)===0&&await(0,H.chmod)(t,493)}catch{}}var Mo=require("node:fs/promises"),wt=require("node:path"),oh=require("node:url");var Ci=require("node:fs"),Pc=require("node:fs/promises"),xi=require("node:os"),gr=require("node:path");h();xe();var Ev=p("AntigravityDetector"),Ac=["antigravity","antigravity-ide","antigravity-cli"];function Ic(t=(0,xi.homedir)()){let e=[];for(let r of Ac){let n=(0,gr.join)(t,".gemini",r),o=(0,gr.join)(n,"conversations");(0,Ci.existsSync)(o)&&e.push({variant:r,root:n,conversationsDir:o,brainDir:(0,gr.join)(n,"brain")})}return e}async function cy(t){for(let e of Ic(t))try{if((await(0,Pc.readdir)(e.conversationsDir)).some(r=>r.endsWith(".db")))return!0}catch{}return!1}async function Dc(t=(0,xi.homedir)()){return await cy(t)?!0:Ac.some(e=>(0,Ci.existsSync)((0,gr.join)(t,".gemini",e)))}h();var Nn="mcp__";function yr(t){return{name:t,kind:"builtin",calls:0}}function Pi(t){return{name:t,kind:"skill",calls:0}}function Nt(t,e){return{name:e?`${t}.${e}`:t,kind:"mcp",server:t,calls:0}}function On(t){if(!t.startsWith(Nn))return yr(t);let e=t.slice(Nn.length),r=e.indexOf("__");return r===-1?Nt(e,""):Nt(e.slice(0,r),e.slice(r+2))}function Nc(t,e){if(e===void 0||e.length===0)return yr(t);if(!e.startsWith(Nn))return Nt(e,t);let r=e.slice(Nn.length).split("__"),n=r[r.length-1]||r[0]||e;return Nt(n,t)}function uy(t,e){let r=Math.max(t.lastCallAtMs??Number.NEGATIVE_INFINITY,e.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(r)?{lastCallAtMs:r}:{}}var ut=class{constructor(){this.byKey=new Map;this.seen=new Set}add(e,r=1){let n=`${e.kind}:${e.name}`,o=this.byKey.get(n);if(!o){this.byKey.set(n,{...e,calls:r});return}this.byKey.set(n,{...o,calls:o.calls+r,...uy(o,e)})}addOnce(e,r){if(e!==void 0){if(this.seen.has(e))return;this.seen.add(e)}this.add(r)}hasSeen(e){return this.seen.has(e)}values(){return[...this.byKey.values()]}};h();h();function Di(t){if(t===void 0)return;let e=Date.parse(t);return Number.isFinite(e)?e:void 0}function Oc(...t){let e=t.filter(r=>r!==void 0);return e.length>0?{lastCallAtMs:Math.max(...e)}:{}}var jc=p("TranscriptParser"),Ln=class{parseLine(e,r){return Hc(e,r)}parseUsageTokens(e,r){let n=$c(e);return n?{input:n.input,output:n.output,cached:n.cached,...n.id&&{dedupKey:n.id}}:{input:0,output:0,cached:0}}parseUsageByModel(e){let r=new Map,n=new Set;for(let o of e){let i=$c(o);if(!i)continue;if(i.id){if(n.has(i.id))continue;n.add(i.id)}let s=r.get(i.model);s?r.set(i.model,{...s,input:s.input+i.input,output:s.output+i.output,cached:s.cached+i.cached}):r.set(i.model,{model:i.model,provider:"anthropic",input:i.input,output:i.output,cached:i.cached})}return[...r.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(e){let r=new ut;for(let n of e){let o;try{o=JSON.parse(n)}catch{continue}let i=o?.message?.content;if(!Array.isArray(i))continue;let s=Di(this.parseTimestamp(n));for(let a of i){let l=a;l.type!=="tool_use"||typeof l.name!="string"||r.addOnce(typeof l.id=="string"?l.id:void 0,{...l.name==="Skill"&&typeof l.input?.skill=="string"?Pi(l.input.skill):On(l.name),...s!==void 0&&{lastCallAtMs:s}})}}return r.values()}parseTimestamp(e,r){try{let n=JSON.parse(e);return typeof n.timestamp=="string"?n.timestamp:void 0}catch{return}}},Ai=class{parseLine(e,r){try{let n=JSON.parse(e),o=typeof n.timestamp=="string"?n.timestamp:void 0;if(n.type!=="event_msg")return null;let s=n.payload;if(!s||typeof s!="object")return null;let a=s.type;return a==="user_message"?fy(s,o):a==="agent_message"?hy(s,o):null}catch(n){return jc.debug("Failed to parse Codex transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new Map,n=[];for(let i of e){let s;try{s=JSON.parse(i)}catch{continue}let a=s?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!dy.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,d=typeof l.invocation?.server=="string"?l.invocation.server:"",u;if(c!==void 0)u=d?Nt(d,c):yr(c);else if(typeof l.name=="string"&&l.name.length>0)u=Nc(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let f=s.timestamp,m=Di(typeof f=="string"?f:void 0),w={...u,...m!==void 0&&{lastCallAtMs:m}},C=typeof l.call_id=="string"?l.call_id:void 0;if(C===void 0){n.push(w);continue}let T=r.get(C),S=T===void 0||T.kind!=="mcp"&&w.kind==="mcp"?w:T;r.set(C,{...S,...T?Oc(T.lastCallAtMs,w.lastCallAtMs):Oc(w.lastCallAtMs)})}let o=new ut;for(let i of[...r.values(),...n])o.add(i);return o.values()}},dy=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),Ii=class{parseLine(e,r){try{let n=JSON.parse(e),o=n.type,i=Mc(n);if(o==="turn.prompt"){let a=Fc(n.input)?.trim();return a?{role:"human",content:a,timestamp:i}:null}let s=my(n);if(s&&s.type==="text"){let a=typeof s.text=="string"?s.text.trim():"";return a?{role:"assistant",content:a,timestamp:i}:null}return null}catch(n){return jc.debug("Failed to parse Kimi transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new ut;for(let n of e){if(!n.includes(Lc))continue;let o;try{o=JSON.parse(n)}catch{continue}if(o.type!==Lc)continue;let i=o.event;if(i===null||typeof i!="object"||i.type!=="tool.call"||typeof i.name!="string")continue;let s=Di(this.parseTimestamp(n));r.addOnce(typeof i.toolCallId=="string"?i.toolCallId:void 0,{...i.name===py&&typeof i.args?.skill=="string"?Pi(i.args.skill):On(i.name),...s!==void 0&&{lastCallAtMs:s}})}return r.values()}parseTimestamp(e,r){try{return Mc(JSON.parse(e))}catch{return}}},Lc="context.append_loop_event",py="Skill";function my(t){if(t.type==="context.append_loop_event"){let e=t.event;return e?.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}return t.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}function Mc(t){let e=t.time??t.timestamp;return typeof e=="number"&&Number.isFinite(e)?new Date(e).toISOString():typeof e=="string"&&e.length>0?e:void 0}function Fc(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t){let n=Fc(r);n&&e.push(n)}return e.length>0?e.join(`
`):null}if(t!==null&&typeof t=="object"){let e=t;if((e.type==="text"||e.type===void 0)&&typeof e.text=="string"&&e.text.length>0)return e.text}return null}function fy(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"human",content:r.trim(),timestamp:e}}function hy(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"assistant",content:r.trim(),timestamp:e}}function $c(t){try{return yy(JSON.parse(t))}catch{return null}}function gy(t){return t.startsWith("<")&&t.endsWith(">")}function yy(t){let e=t,r=e?.message?.usage??e?.usage;if(!r||typeof r!="object")return null;let n=s=>typeof r[s]=="number"?r[s]:0,o=e?.message?.model??e?.model,i=e?.message?.id;return{id:typeof i=="string"?i:"",model:typeof o=="string"&&!gy(o)?o:"",input:n("input_tokens"),output:n("output_tokens"),cached:n("cache_creation_input_tokens")}}var wy=new Ln,Sy=new Ai,Ey=new Ii;function by(t){switch(t){case"codex":return Sy;case"kimi":return Ey;case"claude":return wy}}var ky=["claude","codex","kimi"],_y=["gemini","opencode","antigravity","cursor-cli","cline-cli","devin"],vv=new Set([...ky.filter(t=>by(t).parseToolUse!==void 0),..._y]);var Ni=p("TranscriptReader");var Ry=["Base directory for this skill:","[Request interrupted by user"],Ty=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function Hc(t,e){try{let r=JSON.parse(t);if(r.isCompactSummary===!0)return Ni.debug("Skipping compaction summary at line %d",e),null;if(!r.message||typeof r.message!="object")return null;let n=r.message,o=n.role,i=typeof r.timestamp=="string"?r.timestamp:void 0;if(o==="user")return vy(n,i,e);if(o==="assistant"){let s=Uc(n.content)?.trim();return s?{role:"assistant",content:s,timestamp:i}:null}return null}catch(r){return Ni.debug("Failed to parse transcript line %d: %s",e,r.message),null}}function vy(t,e,r){let n=Uc(t.content);if(!n)return null;let o=Cy(n);return o.length===0?null:Ry.some(i=>o.startsWith(i))?(Ni.debug("Skipping filtered user message at line %d",r),null):{role:"human",content:o,timestamp:e}}function Cy(t){return t.replace(Ty,"").trim()}function Uc(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t)if(r!==null&&typeof r=="object"){let n=r;n.type==="text"&&typeof n.text=="string"&&e.push(n.text)}return e.length>0?e.join(`
`):null}return null}oe();ge();xe();var qv=p("AntigravityDiscoverer"),Gv=2880*60*1e3;var Jc=require("node:fs/promises"),$n=require("node:os"),Oi=require("node:path");function xy(t=(0,$n.homedir)()){return(0,Oi.join)(t,".cline","data")}function Wc(t=(0,$n.homedir)()){return(0,Oi.join)(xy(t),"sessions")}async function Bc(t=(0,$n.homedir)()){try{return await(0,Jc.access)(Wc(t)),!0}catch{return!1}}h();ge();var Zv=p("ClineCliDiscoverer"),eC=2880*60*1e3;var Li=require("node:fs/promises"),Er=require("node:os"),Fn=require("node:path");var jn=require("node:os"),Sr=require("node:path");h();var nC=p("VscodeWorkspaceLocator"),qc=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function Ue(t,e=(0,jn.homedir)()){switch((0,jn.platform)()){case"darwin":return(0,Sr.join)(e,"Library","Application Support",t);case"win32":return(0,Sr.join)(process.env.APPDATA??(0,Sr.join)(e,"AppData","Roaming"),t);default:return(0,Sr.join)(e,".config",t)}}var Py="saoudrizwan.claude-dev";function Ay(t,e){return(0,Fn.join)(Ue(t,e),"User","globalStorage",Py)}function br(t=(0,Er.homedir)()){return qc.map(e=>Ay(e,t))}function Hn(t){return(0,Fn.join)(t,"settings","cline_mcp_settings.json")}async function Gc(t=(0,Er.homedir)()){for(let e of br(t))try{return await(0,Li.access)((0,Fn.join)(e,"state","taskHistory.json")),!0}catch{}return!1}async function Mi(t=(0,Er.homedir)()){let e=[];for(let r of br(t))try{await(0,Li.access)(Hn(r)),e.push(r)}catch{}return e}async function Kc(t=(0,Er.homedir)()){return(await Mi(t)).length>0}h();ge();var uC=p("ClineDiscoverer"),dC=2880*60*1e3;var $i=require("node:fs/promises"),Vc=require("node:os"),ji=require("node:path");h();var hC=p("CodexDiscoverer"),gC=2880*60*1e3,Iy=".codex";async function Fi(){let t=(0,ji.join)((0,Vc.homedir)(),Iy);try{return(await(0,$i.stat)(t)).isDirectory()}catch{return!1}}var Yc=require("node:fs/promises"),zc=require("node:os"),Hi=require("node:path");h();var Dy=p("CopilotChatDetector");function Ny(t){return(0,Hi.join)(Ue("Code",t),"User","globalStorage","github.copilot-chat")}function Oy(t=(0,zc.homedir)()){return(0,Hi.join)(t,".copilot","session-state")}async function Xc(t){try{return(await(0,Yc.stat)(t)).isDirectory()}catch(e){let r=e.code;return r!=="ENOENT"&&Dy.warn("Copilot Chat probe stat failed for %s (%s): %s",t,r??"unknown",e.message),!1}}async function Qc(){let[t,e]=await Promise.all([Xc(Ny()),Xc(Oy())]);return t||e}h();var RC=p("CopilotChatDiscoverer"),TC=2880*60*1e3;var eu=require("node:fs/promises"),tu=require("node:os"),ru=require("node:path");h();xe();var nu=p("CopilotDetector");function ou(){return(0,ru.join)((0,tu.homedir)(),".copilot","session-store.db")}async function iu(){return He()?Ui():(nu.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Fe.major,Fe.minor),!1)}async function Ui(){let t=ou();try{return(await(0,eu.stat)(t)).isFile()}catch(e){let r=e.code;return r!=="ENOENT"&&nu.warn("Copilot DB stat failed (%s): %s",r??"unknown",e.message),!1}}h();xe();var OC=p("CopilotDiscoverer"),LC=2880*60*1e3;var Un=require("node:fs/promises"),Jn=require("node:os"),Ji=require("node:path");h();ge();var FC=p("CursorCliDiscoverer"),HC=2880*60*1e3;function My(t=(0,Jn.homedir)()){return(0,Ji.join)(t,".cursor")}function $y(t=(0,Jn.homedir)()){return(0,Ji.join)(My(t),"chats")}async function su(t=(0,Jn.homedir)()){try{return(await(0,Un.stat)($y(t))).isDirectory()}catch{return!1}}var au=require("node:fs/promises"),lu=require("node:path");h();xe();var jy=p("CursorDetector");function cu(t){return(0,lu.join)(Ue("Cursor",t),"User","globalStorage","state.vscdb")}async function uu(){return He()?Wi():(jy.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function Wi(){let t=cu();try{return(await(0,au.stat)(t)).isFile()}catch{return!1}}h();xe();var YC=p("CursorDiscoverer"),zC=2880*60*1e3;var Bi=require("node:fs/promises"),du=require("node:os"),Ot=require("node:path");h();xe();var rx=p("DevinDiscoverer"),nx=2880*60*1e3;function pu(t){let e=t??(0,du.homedir)();if(process.platform==="win32")return(0,Ot.join)(process.env.APPDATA??(0,Ot.join)(e,"AppData","Roaming"),"devin","cli");let r=process.env.XDG_DATA_HOME,n=r&&r.length>0?r:(0,Ot.join)(e,".local","share");return(0,Ot.join)(n,"devin","cli")}function Fy(t){return(0,Ot.join)(pu(t),"sessions.db")}async function Hy(){try{return(await(0,Bi.stat)(Fy())).isFile()}catch{return!1}}async function mu(){if(await Hy())return!0;try{return(await(0,Bi.stat)(pu())).isDirectory()}catch{return!1}}var fu=require("node:fs/promises"),hu=require("node:os"),gu=require("node:path");h();var Uy=p("GeminiDetector"),Jy=".gemini";async function qi(){let t=(0,gu.join)((0,hu.homedir)(),Jy);try{return(await(0,fu.stat)(t)).isDirectory()}catch{return Uy.debug("Gemini directory not found: %s",t),!1}}oe();kr();var qn=require("node:fs/promises"),Fu=require("node:os"),Yi=require("node:path");h();var Rx=p("KimiDiscoverer"),Tx=2880*60*1e3,ew=".kimi-code";function Gn(){return process.env.KIMI_CODE_HOME||(0,Yi.join)((0,Fu.homedir)(),ew)}async function Hu(){let t=Gn();try{return(await(0,qn.stat)(t)).isDirectory()}catch{return!1}}Te();ce();var Kn={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},xx=Object.keys(Kn);function Vn(t){return t===void 0?void 0:Kn[t]?.localAgentTool}function zi(t,e){return(t===void 0?void 0:Kn[t]?.skillInvocation)?.replace("<name>",e)}function Uu(t){return(t===void 0?void 0:Kn[t]?.host)??"claude"}async function Ju(t,e){let r=Vn(t);return r===void 0?null:e.localAgentTool===r&&e.aiProvider!==void 0?{tool:r,changedTool:!1,seededProvider:!1}:bn(n=>{let o=n.localAgentTool,i=o!==r,s=n.aiProvider===void 0;return!i&&!s?{update:null,result:{tool:r,changedTool:!1,seededProvider:!1}}:{update:s?{aiProvider:"local-agent",localAgentTool:r}:{localAgentTool:r},result:{tool:r,changedTool:i,previousTool:o,seededProvider:s}}})}var _r={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop"},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app"},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function Pe(t){return _r[t]?.label??"Local agent"}function Wu(t){return _r[t]?.loginHint??"Sign in to your local agent CLI."}function Bu(t){let e=_r[t]?.separateDesktopApp;return e===void 0?null:`(This login is SEPARATE from ${e} \u2014 ${e} stays signed in on its own.)`}var qu=require("node:fs/promises"),Gu=require("node:os"),Qi=require("node:path");h();xe();var tw=p("OpenCodeDiscoverer"),Ox=2880*60*1e3;function rw(){return process.env.XDG_DATA_HOME||(0,Qi.join)((0,Gu.homedir)(),".local","share")}function nw(){return(0,Qi.join)(rw(),"opencode","opencode.db")}async function Ku(){return He()?Zi():(tw.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Fe.major,Fe.minor),!1)}async function Zi(){let t=nw();try{return(await(0,qu.stat)(t)).isFile()}catch{return!1}}h();te();Te();ce();var Ux=p("PushPendingStore");var Jx=10080*60*1e3;var ow=300*1e3,Wx=Math.floor(ow/3);Uo();h();ke();var zx=p("PushCompensation");h();Xn();h();kr();var iP=p("KBRepoDiscoverer");h();te();Xn();Te();ce();var mP=p("PushControlStore");et();function ts(){return"cursor-plugin"}h();te();var aw={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms. MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var EP=new Set(Object.keys(aw));var BP=p("PushControl");et();h();oe();Te();dn();Zn();jt();h();oe();et();var Be=class{constructor(e){this.cwd=e;this.kind="orphan-branch"}async readFile(e){return Bo(fe,e,this.cwd)}async batchReadFiles(e){return qo(fe,e,this.cwd)}async writeFiles(e,r){if(he())return;if(await dr(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Error("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(Zn(),ld));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Error("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Xa(fe,e,r,this.cwd)}async listFiles(e){return[...await Go(fe,e,this.cwd)]}async exists(){return Jo(fe,this.cwd)}async ensure(){await Wo(fe,this.cwd)}};var Bd=require("node:zlib");$t();var Jd=require("node:zlib");fr();function eo(t){return t.version>=4}function bw(t){return[...t??[]].reverse()}function Ft(t){let e=bw(t.children).flatMap(Ft),r=(t.topics??[]).map(n=>({...n,commitDate:t.commitDate,generatedAt:t.generatedAt}));return[...e,...r]}function cd(t){let e=t.stats,r=e?.filesChanged??0,n=e?.insertions??0,o=e?.deletions??0;for(let i of t.children??[]){let s=cd(i);r+=s.filesChanged,n+=s.insertions,o+=s.deletions}return{filesChanged:r,insertions:n,deletions:o}}function xr(t){return t.diffStats?t.diffStats:(t.children?.length??0)>0?cd(t):t.stats??{filesChanged:0,insertions:0,deletions:0}}function ds(t){let e=t.conversationTurns??0,r=(t.children??[]).reduce((n,o)=>n+ds(o),0);return e+r}function ps(t){let e=t.conversationTokens??0,r=(t.children??[]).reduce((n,o)=>n+ps(o),0);return e+r}function ms(t){let e=t.conversationTokenBreakdown,r={input:e?.input??0,output:e?.output??0,cached:e?.cached??0};return(t.children??[]).reduce((n,o)=>{let i=ms(o);return{input:n.input+i.input,output:n.output+i.output,cached:n.cached+i.cached}},{input:r.input,output:r.output,cached:r.cached})}function to(t){let e=[],r=n=>{if(!n.children?.length)e.push(n);else for(let o of n.children)r(o)};for(let n of t.children??[])r(n);return e}function ro(t){return eo(t)?(t.topics??[]).map(e=>({...e,commitDate:t.commitDate,generatedAt:t.generatedAt})):Ft(t)}function Pr(t){let e=[t.commitHash];for(let r of t.children??[])e.push(...Pr(r));return e}function Ht(t,e){return t.transcripts!==void 0?t.transcripts:Pr(t).filter(r=>e.has(r))}function kw(t){let e=to(t);return e.length<=1?1:new Set(e.map(n=>new Date(n.generatedAt||n.commitDate).toISOString().substring(0,10))).size}function ud(t){let e=kw(t),r=e===1?"1 day":`${e} days`,n=to(t);if(n.length<=1)return r;let o=n.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),i=new Date(Math.min(...o)),s=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${r} (${a(i)} \u2014 ${a(s)})`}h();$t();oe();h();h();ci();oe();Te();dn();var dd=/-[0-9a-f]{8}$/;fr();var _w="local-agent-auth";function pd(t){return t.summaryError===_w}yn();var Rw=new Set(["linear","jira","github"]);function Tw(t){return Rw.has(t)}function fs(t){return Tw(t.source)?`${t.nativeId} \u2014 ${t.title}`:t.title}function X(t){return t.generatedAt||t.commitDate}function fd(t){try{return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function hs(t){try{return new Date(t).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return t}}function md(t){return t.substring(0,10)}function vw(t){return[...t].sort((e,r)=>{let n=md(e.generatedAt||e.commitDate||""),o=md(r.generatedAt||r.commitDate||"");if(n!==o)return n>o?-1:1;let i=e.importance==="minor"?1:0,s=r.importance==="minor"?1:0;return i-s})}function hd(t){return String(t+1).padStart(2,"0")}var Cw={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};function xw(t,e){return e==="local-agent"?t.localAgentTool?`Local agent - ${Pe(t.localAgentTool)}`:"Local agent":Cw[e]}function gd(t){let e=new Set,r=o=>{let i=o.llm;i?.source&&e.add(xw(i,i.source));for(let s of o.children??[])r(s)};r(t);let n=[...e];if(n.length!==0)return n.length===1?n[0]:`mixed: ${n.join(", ")}`}function yd(t){let e=to(t),r=ro(t);return{topics:vw(r.map((o,i)=>({...o,treeIndex:i}))),sourceNodes:e}}Si();var Pw=/^transcripts\/(.+)\.json$/;function gs(t){return Pw.exec(t)?.[1]??null}var Aw;async function Iw(t){let e=await oo(t);return e.ok?e.storage:(ys.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",e.reason,t),new Be(t))}async function Dw(t,e){return t??Aw??await Iw(e)}var ys=p("SummaryStore"),Nw="index.json";function wd(t){let e=[];for(let r of t)r.e2eTestGuide&&e.push(...r.e2eTestGuide),r.children&&e.push(...wd(r.children));return e}function Sd(t){let{e2eTestGuide:e,...r}=t;return r.children?{...r,children:r.children.map(Sd)}:r}function Ed(t){let e=new Map;for(let r of t){if(r.plans)for(let n of r.plans){let o=n.slug,i=e.get(o);(!i||n.updatedAt>i.updatedAt)&&e.set(o,n)}if(r.children)for(let n of Ed(r.children)){let o=e.get(n.slug);(!o||n.updatedAt>o.updatedAt)&&e.set(n.slug,n)}}return[...e.values()]}function bd(t){let{plans:e,...r}=t;return r.children?{...r,children:r.children.map(bd)}:r}function kd(t){let e=new Map;for(let r of t){if(r.notes)for(let n of r.notes){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}if(r.children)for(let n of kd(r.children)){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}}return[...e.values()]}function _d(t){let{notes:e,...r}=t;return r.children?{...r,children:r.children.map(_d)}:r}function Rd(t){let{references:e,...r}=t;return r.children?{...r,children:r.children.map(Rd)}:r}function Td(t){let e=new Map;for(let r of t){let n=r.references??[];for(let o of n){let i=e.get(o.archivedKey);(!i||o.referencedAt>i.referencedAt)&&e.set(o.archivedKey,o)}if(r.children)for(let o of Td(r.children)){let i=e.get(o.archivedKey);(!i||o.referencedAt>i.referencedAt)&&e.set(o.archivedKey,o)}}return[...e.values()]}function vd(t){let e=[];for(let r of t)e.push(...r.skills??[]),r.children&&e.push(...vd(r.children));return lc(e)}function Cd(t){let{jolliDocId:e,jolliDocUrl:r,jolliSkillsDocId:n,jolliSkillsDocUrl:o,orphanedDocIds:i,unresolvedOrphanHashes:s,...a}=t;return a.children?{...a,children:a.children.map(Cd)}:a}function xd(t){let e=[];for(let o of t){let i=o.jolliDocUrl;if(o.jolliDocId&&i&&e.push({jolliDocId:o.jolliDocId,jolliDocUrl:i,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let s=xd(o.children);s.winner&&e.push({...s.winner})}}if(e.length===0)return{winner:null,orphanedDocIds:[]};e.sort((o,i)=>new Date(X(i)).getTime()-new Date(X(o)).getTime());let r=e[0],n=e.slice(1).map(o=>o.jolliDocId);return{winner:r,orphanedDocIds:n}}function Pd(t){let e=[];for(let r of t??[])r.orphanedDocIds&&e.push(...r.orphanedDocIds),e.push(...Pd(r.children));return e}function Ad(t){let e=[];for(let r of t??[])r.unresolvedOrphanHashes&&e.push(...r.unresolvedOrphanHashes),e.push(...Ad(r.children));return e}function Id(t){if(t.version>=4)return t;let e=wd([t]),r=Ed([t]),n=kd([t]),o=Td([t]),i=vd([t]),s=i.map(ac),a=xd([t]),l=Array.from(new Set([...a.orphanedDocIds,...t.orphanedDocIds??[],...Pd(t.children),...i.flatMap(C=>C.supersededDocIds??[])])),c=Array.from(new Set([...t.unresolvedOrphanHashes??[],...Ad(t.children)])),d=Ow(t),u=Lw(t),f=t.diffStats===void 0&&t.stats!==void 0?xr(t):void 0,{stats:m,...w}=t;return{...w,version:4,topics:d,...u!==void 0?{recap:u}:{},...f!==void 0?{diffStats:f}:{},...e.length>0?{e2eTestGuide:e}:{},...r.length>0?{plans:r}:{},...n.length>0?{notes:n}:{},...o.length>0?{references:o}:{},...s.length>0?{skills:s}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...t.children!==void 0?{children:t.children.map($w)}:{}}}function Dd(t){let{topics:e,...r}=t;return r.children?{...r,children:r.children.map(Dd)}:r}function Nd(t){let{recap:e,...r}=t;return r.children?{...r,children:r.children.map(Nd)}:r}function Ow(t){return eo(t)?t.topics??[]:Ft(t).map(({commitDate:e,generatedAt:r,treeIndex:n,...o})=>o)}function Lw(t){return eo(t)||t.recap?t.recap:Mw(t.children)}function Mw(t){if(!t||t.length===0)return;let e=[];if(Od(t,e),e.length!==0)return e.sort((r,n)=>new Date(n.date).getTime()-new Date(r.date).getTime()),e[0]?.recap}function Od(t,e){for(let r of t)r.recap&&e.push({recap:r.recap,date:X(r)}),r.children&&Od(r.children,e)}function $w(t){return Cd(Rd(_d(bd(Sd(Dd(Nd(t)))))))}async function no(t,e){return jw(t,e)}async function jw(t,e){let r=await Dw(e,t),n=await r.readFile(Nw);if(!n)return ys.debug("loadIndex: no index.json in %s storage",r.kind??"unknown"),null;try{return JSON.parse(n)}catch(o){return ys.error("Failed to parse index.json: %s",o.message),null}}function Ld(t){let e=ro(t).map(r=>({title:r.title,...r.decisions!==void 0&&{decisions:r.decisions},...r.category!==void 0&&{category:r.category},...r.importance!==void 0&&{importance:r.importance},...r.filesAffected&&r.filesAffected.length>0&&{filesAffected:r.filesAffected}}));return{commitHash:t.commitHash,...t.recap!==void 0&&{recap:t.recap},...t.ticketId!==void 0&&{ticketId:t.ticketId},...e.length>0&&{topics:e}}}var dI=p("ProcessedSourceStore");et();fr();h();var hI=p("TopicIndexStore");h();var SI=p("TopicPageStore");h();$t();Xo();h();$t();cs();jt();var vI=p("ImportState");var CI=10*6e4;jt();Yn();var QI=p("SotImport");function qe(t){if(t==null)return null;try{return JSON.parse(t)}catch{return null}}function jd(t){let e=/^#\s+(.+)$/m.exec(t);return e?e[1].trim():null}var Fw=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function Fd(t,e,r){for(let{path:n,accepts:o}of Fw){let i=t;for(let a of n){if(i==null||typeof i!="object"){i=void 0;break}i=i[a]}i==null||(o==="integer"?Number.isInteger(i):typeof i=="number")||r("off-type numeric",`${e}.${n.join(".")} is ${typeof i} (${JSON.stringify(i)}) \u2014 column reads NULL`)}}function Hd(t,e,r,n){let o=Date.parse(t.commitDate??"");return Number.isFinite(o)?o:(n("commit date",`${e} has no parsable commitDate \u2014 falling back to first-seen time`),r)}function Ud(t,e){let r=t.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(e),n=new Map,o=[];for(let l of r)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=n.get(l.parent_hash)??[];c.push(l.commit_hash),n.set(l.parent_hash,c)}let i=t.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),s=new Map(r.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let u=s.get(l);(u.root_hash!==c||u.depth!==d)&&i.run(c,d,e,l);for(let f of n.get(l)??[])o.push({hash:f,root:c,depth:d+1})}if(a!==r.length)throw new Error(`remountRepo: ${r.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}Yn();var pt=p("SotWrite"),Hw={plans:"plan",notes:"note",references:"reference",skills:"skill"};function Uw(t){let e=[],r=(n,o,i)=>{e.push({hash:n.commitHash,parentInFile:o,pos:i,summary:n}),(n.children??[]).forEach((s,a)=>{r(s,n.commitHash,a)})};return r(t,null,null),e}function Jw(t){let e={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let r of t){let n=r.delete===!0,o=r.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(n){e.summaryDeletes.push(o[1]);continue}let c=qe(r.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${r.path}`);e.summaryTrees.push(Uw(c));continue}if(r.path==="index.json"){if(n)continue;let c=qe(r.content);for(let d of c?.entries??[])d.treeHash&&e.treeHashes.set(d.commitHash,d.treeHash);for(let[d,u]of Object.entries(c?.commitAliases??{}))e.aliases.set(d,u);continue}if(r.path==="catalog.json")continue;if(r.path==="topics/index.json"){if(n)continue;let c=qe(r.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&e.topicSummaries.set(d.stableSlug,d.summary);continue}if(r.path==="topics/processed.json"){e.processedSet=n?null:r.content;continue}if(r.path==="schema-v5-migration.json"){n||(e.v5State=r.content);continue}let i=r.path.match(/^transcripts\/(.+)\.json$/);if(i){n?e.transcriptDeletes.push(i[1]):e.transcriptWrites.push({id:i[1],content:r.content});continue}let s=r.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(s){let c=Hw[s[1]];n?e.contextDeletes.push({kind:c,key:s[2]}):e.contextWrites.push({kind:c,key:s[2],body:r.content});continue}let a=r.path.match(/^plan-progress\/(.+)\.json$/);if(a){n?e.progressDeletes.push(a[1]):e.progressWrites.push({pathSlug:a[1],content:r.content});continue}let l=r.path.match(/^topics\/([^/]+)\.json$/);if(l){n?e.topicPageDeletes.push(l[1]):e.topicPageWrites.push({slug:l[1],content:r.content});continue}throw new Error(`SotWrite: no table backs path ${r.path}`)}return e}function Ir(t,e){pt.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",t,e)}function Ww(t,e,r){let n=/-([0-9a-f]{8})$/.exec(r);return n?t.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(e,n[1])?.branch??null:null}function Bw(t,e,r,n){for(let d of r.summaryDeletes)t.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(e,d);if(r.summaryTrees.length===0)return;let o=new Set;for(let d of r.summaryTrees)for(let u of d)"children"in u.summary&&o.add(u.hash);let i=t.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let d of o)i.run(e,d);let s=new Map;for(let d of r.summaryTrees)for(let u of d){if(u.parentInFile===null||u.pos===null)continue;let f=s.get(u.parentInFile)??new Map;f.set(u.hash,u.pos),s.set(u.parentInFile,f)}let a=t.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),l=(d,u)=>pt.info("write degraded a value: %s %s",d,u);for(let d of r.summaryTrees)for(let u of d){let f=u.parentInFile,m=u.pos;if(u.parentInFile===null){let T=t.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,u.hash);T&&(f=T.parent_hash,m=T.child_pos,m!==null&&m>=1e6&&((f===null?void 0:s.get(f))?.has(u.hash)||(f=null,m=null)))}let w=JSON.stringify("children"in u.summary?{...u.summary,children:[]}:u.summary);a.run(e,u.hash,f,m,u.hash,0,w,r.treeHashes.get(u.hash)??null,n,n,Hd(u.summary,u.hash,n,l)),Fd(u.summary,u.hash,l),t.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(e,u.hash);let C=t.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(u.summary.topics??[]).forEach((T,S)=>{if(!T.title){l("topic",`${u.hash}[${S}] has no title`);return}C.run(e,u.hash,S,T.category??null,T.importance??null,T.title)})}let c=t.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`);for(let d of o)c.run(e,d);Ud(t,e)}function qw(t,e,r,n){for(let[o,i]of r.aliases){if(!t.prepare("SELECT 1 AS ok FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,i)){pt.info("dropping alias %s -> %s (no such memory row)",o,i);continue}t.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(e,o,i,n)}}function Gw(t,e,r,n){let o=new Set;for(let i of r.transcriptDeletes)t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,i),t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,i),t.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,i);for(let{id:i,content:s}of r.transcriptWrites){let a=qe(s);if(!a||!Array.isArray(a.sessions)){Ir("transcript",i);continue}t.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(e,i,(0,Jd.deflateSync)(Buffer.from(s,"utf8")),n),t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,i);for(let l of a.sessions)l.sessionId&&t.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(e,i,l.sessionId,l.source??null);o.add(i)}return o}function Kw(t,e,r,n){if(n.size===0)return;let o=new Set(r.summaryTrees.flat().map(c=>c.hash)),i=new Set(r.summaryTrees.flat().flatMap(c=>[...Ht(c.summary,n)])),s=[...n].filter(c=>!i.has(c));if(s.length===0)return;let a=t.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=t.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of s){let d=a.all(e,`%${c}%`);for(let u of d){if(o.has(u.commit_hash))continue;let f=qe(u.summary_json);f&&Ht(f,n).includes(c)&&(l.run(e,u.commit_hash,c),pt.info("linked stored transcript %s to memory %s written earlier",c,u.commit_hash))}}}function Vw(t,e,r){if(r.summaryTrees.length===0)return;let n=new Set(t.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(e).map(o=>o.transcript_id));for(let o of r.summaryTrees)for(let i of o){let s=[...new Set(Ht(i.summary,n).filter(a=>n.has(a)))];for(let a of i.summary.transcripts??[])n.has(a)||pt.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",i.hash,a);t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(e,i.hash);for(let a of s)t.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(e,i.hash,a)}}function Xw(t,e,r,n){for(let{kind:i,key:s}of r.contextDeletes)t.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(e,i,s);let o=t.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:i,key:s,body:a}of r.contextWrites){if(i==="reference"){let d=wi(a);if(!d){Ir("reference frontmatter",`references/${s}.md`);continue}o.run(e,i,s,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,n,n);continue}let l=i==="plan"||i==="note"?Ww(t,e,s):null,c=i==="plan"&&l!==null?s.replace(/-[0-9a-f]{8}$/,""):null;o.run(e,i,s,null,null,null,null,c,l,jd(a),null,a,n,n)}}function Yw(t,e,r,n){for(let o of r.progressDeletes)t.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(e,o);for(let{pathSlug:o,content:i}of r.progressWrites){let s=qe(i);if(!s){Ir("plan-progress",`plan-progress/${o}.json`);continue}let a=s.planSlug??o;if(!t.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(e,a)){pt.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}t.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(e,a,i,n)}}function zw(t,e,r,n){for(let o of r.topicPageDeletes)t.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(e,o);for(let{slug:o,content:i}of r.topicPageWrites){let s=qe(i);if(!s?.stableSlug||s.title===void 0||s.content===void 0||!s.lastUpdatedAt){Ir("topic page",`topics/${o}.json`);continue}t.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(e,s.stableSlug,s.title,r.topicSummaries.get(s.stableSlug)??null,s.content,JSON.stringify(s.relatedBranches??[]),s.lastUpdatedAt,s.schemaVersion??1),t.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(e,s.stableSlug),(s.sourceRefs??[]).forEach((a,l)=>{t.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(e,s.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,i]of r.topicSummaries){let s=t.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(i,e,o);Number(s.changes)===0&&pt.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(r.processedSet!==null){let o=qe(r.processedSet);if(!o?.processed)Ir("processed set","topics/processed.json");else{t.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(e);let i=t.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[s,a]of Object.entries(o.processed))for(let l of a)i.run(e,s,l)}}r.v5State!==null&&t.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(e,r.v5State)}function Wd(t,e,r,n){let o=Jw(r);as(t,()=>{t.exec("PRAGMA defer_foreign_keys = ON"),Bw(t,e,o,n),qw(t,e,o,n);let i=Gw(t,e,o,n);Vw(t,e,o),Kw(t,e,o,i),Xw(t,e,o,n),Yw(t,e,o,n),zw(t,e,o,n)})}h();function qd(t){let e=new Map;for(let r of t){if(r.parent_hash==null)continue;let n=e.get(r.parent_hash)??[];n.push(r),e.set(r.parent_hash,n)}for(let r of e.values())r.sort((n,o)=>Number(n.child_pos)-Number(o.child_pos));return e}function ws(t,e){let r=JSON.parse(e.summary_json);return"children"in r&&(r.children=(t.get(e.commit_hash)??[]).map(n=>ws(t,n))),r}function Qw(t,e,r){let n=t.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,r);if(!n)return;let o=(n.parent_hash===null?t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):t.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(e,n.parent_hash===null?n.root_hash:r),i=o.find(s=>s.commit_hash===r);return i?ws(qd(o),i):void 0}function Zw(t){if(t===null)return{};try{return{diffStats:JSON.parse(t)}}catch{return{}}}var Ut=class{constructor(e,r){this.repoIdentity=e;this.dbPath=r;this.kind="sqlite"}async withDb(e){return ss(r=>{let n=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!n)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return e(r,n.id)},{dbPath:this.dbPath})}async withDbOrAbsent(e,r){return ss(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?e(n,o.id):r},{dbPath:this.dbPath})}async readFile(e){return this.withDbOrAbsent((r,n)=>this.readOne(r,n,e),null)}async batchReadFiles(e){return this.withDbOrAbsent((r,n)=>{let o=new Map;for(let i of e)o.set(i,this.readOne(r,n,i));return o},new Map(e.map(r=>[r,null])))}readOne(e,r,n){let o=n.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=Qw(e,r,o[1]);return c?JSON.stringify(c,null,"	"):null}if(n==="index.json")return this.synthIndex(e,r);if(n==="catalog.json")return this.synthCatalog(e,r);if(n==="topics/index.json")return this.synthTopicIndex(e,r);if(n==="topics/processed.json")return this.synthProcessed(e,r);if(n==="schema-v5-migration.json")return e.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(r)?.value??null;let i=n.match(/^topics\/([^/]+)\.json$/);if(i)return this.synthTopicPage(e,r,i[1]);let s=n.match(/^transcripts\/(.+)\.json$/);if(s){let c=e.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(r,s[1]);return c?(0,Bd.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=n.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return e.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(r,c,a[2])?.body_md??null}let l=n.match(/^plan-progress\/(.+)\.json$/);return l?e.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(r,l[1])?.artifact_json??null:null}allMemories(e,r){return e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r)}synthIndex(e,r){let n=e.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=new Map(e.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(r).map(a=>[a.root,a.n])),i=n.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...Zw(a.diff_stats_json)}})),s=e.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(r);return JSON.stringify({version:3,entries:i,...s.length>0&&{commitAliases:Object.fromEntries(s.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(e,r){let n=this.allMemories(e,r);if(n.length===0)return null;let o=qd(n),i=n.filter(s=>s.parent_hash===null).map(s=>Ld(ws(o,s)));return JSON.stringify({version:1,entries:i},null,"	")}topicRefs(e,r,n){return e.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(r,n).map(i=>({type:i.ref_type,id:i.ref_id,timestamp:i.ts,...i.branch!==null&&{branch:i.branch}}))}synthTopicPage(e,r,n){let o=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(r,n);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(e,r,n),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(e,r){let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=n.map(i=>({stableSlug:i.stable_slug,title:i.title,...i.summary!==null&&{summary:i.summary},relatedBranches:JSON.parse(i.related_branches_json),sourceRefs:this.topicRefs(e,r,i.stable_slug),lastUpdatedAt:i.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(e,r){let n=e.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(r);if(n.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let i of n)o[i.source_type].push(i.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(e){return this.withDbOrAbsent((r,n)=>{let o=(s,a)=>r.prepare(s).all(n).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",s=>`summaries/${s}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",s=>`transcripts/${s}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",s=>`plans/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",s=>`notes/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",s=>`references/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",s=>`skills/${s}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",s=>`plan-progress/${s}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",s=>`topics/${s}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",s=>s)].filter(s=>s.startsWith(e)).sort()},[])}async writeFiles(e,r){he()||await id(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);Wd(n,o.id,e,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(r),o=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(r);return{memoriesCount:n.n,memoriesNewestMs:n.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(e){return this.withDbOrAbsent((r,n)=>r.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(n,e)?.target_hash??null,null)}async findShallowestByTreeHash(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(n,e)?.commit_hash??null,null)}async findHashesByPrefix(e){return/^[0-9a-f]+$/.test(e)?this.withDbOrAbsent((r,n)=>r.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(n,e).map(i=>i.commit_hash),[]):[]}async listHeadEntries(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${e!==void 0?" AND branch = ?":""}`).all(...e!==void 0?[n,e]:[n]).map(i=>({commitHash:i.commit_hash,parentCommitHash:null,...i.tree_hash!==null?{treeHash:i.tree_hash}:{},...i.commit_type!==null?{commitType:i.commit_type}:{},commitMessage:i.commit_message??"",commitDate:i.commit_date??"",branch:i.branch??"",generatedAt:i.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(r),o=new Map;for(let i of n){let s=o.get(i.commit_hash)??[];s.push(i.title),o.set(i.commit_hash,s)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(r),o=e.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(r),i=new Map;for(let s of o){let a=i.get(s.stable_slug)??[];a.push(s.ref_type),i.set(s.stable_slug,a)}return n.map(s=>({stableSlug:s.stable_slug,title:s.title,summary:s.summary,content:s.content_md,relatedBranches:JSON.parse(s.related_branches_json),lastUpdatedAt:s.last_updated_at,refTypes:i.get(s.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((e,r)=>e.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(r).map(o=>this.readOne(e,r,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var eS=3e3,Gd=new Map;async function Kd(t){let e=Date.now(),r=Gd.get(t);if(r&&e-r.at<eS)return r.route;let n=await Cr(t);return Gd.set(t,{route:n,at:e}),n}async function Vd(t,e,r){if(r.state==="legacy-fenced"||r.state==="cutover"){let{identity:n}=await dt(e);return new Ut(n)}return new Be(t)}async function Xd(t){let e=t??process.cwd(),r=await Kd(e);if(r.state==="blocked")throw new Error(`storage unavailable: ${r.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return Vd(t,e,r)}async function oo(t){let e=t??process.cwd(),r;try{r=await Kd(e)}catch(n){return{ok:!1,reason:n.message}}if(r.state==="blocked")return{ok:!1,reason:r.reason};try{return{ok:!0,state:r.state,storage:await Vd(t,e,r)}}catch(n){return{ok:!1,reason:n.message}}}var up=require("node:path");Zn();jt();h();h();var nt=p("DualWriteStorage"),Dr=class{constructor(e,r){this.primary=e;this.shadow=r;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(e){return this.primary.readFile(e)}async batchReadFiles(e){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await this.primary.readFile(n));return r}async writeFiles(e,r){if(!he()){await this.primary.writeFiles(e,r);try{await this.shadow.writeFiles(e,r),this.shadow.clearDirty?.()}catch(n){nt.warn("Shadow write failed (folder storage): %s",n instanceof Error?n.message:String(n)),this.shadow.markDirty?.(r)}}}async deleteVisibleMarkdown(e){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return nt.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,x(r)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${e.branch}/${n}`),!1}}async regenerateVisibleMarkdown(e){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return nt.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,x(r)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${e.branch}/${n}`),!1}}async deletePlanVisible(e,r){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(e,r)}catch(n){nt.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",e,r,x(n)),this.shadow.markDirty?.(`deletePlanVisible ${r}/${e}`)}}async deleteNoteVisible(e,r){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(e,r)}catch(n){nt.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",e,r,x(n)),this.shadow.markDirty?.(`deleteNoteVisible ${r}/${e}`)}}async pruneBranchMappings(e){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(e)}catch(r){return nt.warn("Shadow pruneBranchMappings failed (folder storage): %s",x(r)),this.shadow.markDirty?.(`pruneBranchMappings ${e.length}`),0}}async healMissingVisibleMarkdown(e){let r=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!r)return{healed:0,skipped:0,failed:0};let n=e?.dropOrphanedManifestEntries??!0,o=r===this.shadow?"shadow":"primary";try{return await r.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:n})??{healed:0,skipped:0,failed:0}}catch(i){let s=i?.code,a=s?`[${s}] ${x(i)}`:x(i);return nt.warn("%s healMissingVisibleMarkdown failed: %s",o,a),r.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(e){return this.primary.listFiles(e)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(e){nt.warn("Shadow ensure failed: %s",e instanceof Error?e.message:String(e))}}async renderTopicWiki(e){await this.shadow.renderTopicWiki?.(e)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var v=require("node:fs"),lp=require("node:fs/promises"),A=require("node:path");h();var U=require("node:fs");var ye=require("node:path");h();var tS=p("Sync:VaultSymlinkGuard");function rS(t,e){if(!(0,ye.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${e}`);if(!(0,ye.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${t}`);let r=(0,ye.relative)(t,e);if(r===""||r.startsWith("..")||(0,ye.isAbsolute)(r))throw new Error(`assertNoSymlinksInPathSync: target ${e} is not inside vault ${t}`);let n=r.split(ye.sep),o=t;for(let i=0;i<n.length-1;i++){let s=n[i];if(s===void 0||s.length===0)continue;o=`${o}${ye.sep}${s}`;let a;try{a=(0,U.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw tS.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${e}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${e}).`)}}function Ss(t,e,r){rS(t,e),(0,U.mkdirSync)((0,ye.dirname)(e),{recursive:!0});let n=`${e}.tmp`,o=U.constants.O_WRONLY|U.constants.O_CREAT|U.constants.O_TRUNC|U.constants.O_NOFOLLOW,i=(0,U.openSync)(n,o,420);try{typeof r=="string"?(0,U.writeSync)(i,r,void 0,"utf-8"):(0,U.writeSync)(i,r)}finally{(0,U.closeSync)(i)}(0,U.renameSync)(n,e)}Wn();ge();function nS(t){return`skills--${t}`}function io(t){return`${nS(t)}.md`}function Yd(t){let e=["| Skill | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|"],r=[...t].sort((o,i)=>{let s=Es(i)-Es(o);return s!==0?s:o.skill<i.skill?-1:o.skill>i.skill?1:0}),n=!1;for(let o of r){let i=o.detection==="heuristic"?" \u2020":"";i!==""&&(n=!0),e.push(`| ${oS(o.skill)}${i} | ${o.invocationCount} | ${iS(o).join(" | ")} |`)}return n&&e.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),e}function zd(t){let e=`${t.length} skill${t.length===1?"":"s"}`,r=0,n=!1,o=!1;for(let i of t)i.usage!==void 0&&(n=!0,r+=i.usage.input+i.usage.cached+i.usage.output,i.usage.confidence!=="attributed"&&(o=!0));return n?`${e} \xB7 ${Zd(r,o?"~":"")} tokens`:e}function Qd(t,e){let r=t.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${t.commitHash}`,`branch: ${t.branch}`,`generatedAt: ${t.generatedAt}`,"---","",`# Skills used \u2014 ${r}`,"",`_${t.commitMessage}_`,"",...Yd(e),""].join(`
`)}
`}function oS(t){return t.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function Es(t){let e=t.usage;return e===void 0?0:e.input+e.cached+e.output}function iS(t){let e=t.usage;if(e===void 0)return["\u2014","\u2014","\u2014","\u2014"];let r=e.confidence==="attributed"?"":"~";return[Es(t),e.input,e.output,e.cached].map(n=>Zd(n,r))}function Zd(t,e){return t<1e3?`${e}${t}`:`${e}${(t/1e3).toFixed(1)}k`}function Ge(t){return t.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function ep(t){return t.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function so(t){return t.replace(/[()\s<>"]/g,e=>e==="("?"%28":e===")"?"%29":encodeURIComponent(e))}yn();var tp=3/1e6,sS=15/1e6,aS=3.75/1e6;function Nr(t){return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function rp(t){return t>=.01?`$${t.toFixed(2)}`:t>=5e-5?`$${t.toFixed(4)}`:t>0?"<$0.0001":"$0.00"}function np(t,e){return t?t.input*tp+t.output*sS+t.cached*aS:e*tp}function _s(t){let{topics:e,sourceNodes:r}=yd(t),n=[];return lS(n,t),pS(n,t,{withRelevance:!0}),cS(n,t),mS(n,t.e2eTestGuide),fS(n,r),gS(n,e,hS),yS(n),n.join(`
`)}function lS(t,e){let r=xr(e),n=r.filesChanged,o=ds(e),i=`${n} file${n!==1?"s":""} changed, +${r.insertions} insertions, \u2212${r.deletions} deletions`,s=hs(X(e));t.push(`# ${e.commitMessage}`,"",`- **Commit:** \`${e.commitHash}\``,`- **Branch:** \`${e.branch}\``,`- **Author:** ${e.commitAuthor}`,`- **Date:** ${s}`,`- **Duration:** ${ud(e)}`,`- **Changes:** ${i}`),o>0&&t.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=ps(e);if(a>0){let c=ms(e),d=c.input>0||c.output>0||c.cached>0?c:void 0,u=rp(np(d,a)),f=d?` (${Nr(d.input)} input, ${Nr(d.output)} output, ${Nr(d.cached)} cached)`:"";t.push(`- **Task usage:** ${Nr(a)} tokens \xB7 ${u}${f}`)}let l=e.jolliDocUrl;l&&t.push(`- **Jolli Memory:** [${l}](${l})`),t.push("","---")}function cS(t,e){let r=e.recap?.trim();r&&t.push("","## Quick recap","",r,"","---")}function uS(t){let e=new Map;for(let o of t){let i=e.get(o.source)??[];i.push(o),e.set(o.source,i)}let r=gn().all().map(o=>o.id),n=[];for(let o of r){let i=e.get(o);i&&(n.push(...i),e.delete(o))}for(let o of e.values())n.push(...o);return n}function bs(t,e,r){return t.get(`${e}:${r}`)??t.get(`${e}:${r.replace(dd,"")}`)}var dS={high:"High",mid:"Med",low:"Low"};function ks(t){return!t||t.reason===""?"":` \u2014 ${dS[t.tier]} \xB7 ${Ge(t.reason)}`}function pS(t,e,r){let n=e.plans??[],o=e.notes??[],i=r?.includeReferences?e.references??[]:[],s=r?.withRelevance?e.excludedContext??[]:[],a=new Map;if(r?.withRelevance)for(let u of e.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=e.skills??[],c=n.length+o.length+i.length+(l.length>0?1:0);if(c===0&&s.length===0)return;let d=c>1?` (${c})`:"";t.push("",`## Context${d}`,"");for(let u of n){let f=u.jolliPlanDocUrl,m=ks(bs(a,"plan",u.slug));t.push((f?`- [${Ge(u.title)}](${so(f)})`:`- ${Ge(u.title)}`)+m)}for(let u of o){let f=u.jolliNoteDocUrl,m=ks(bs(a,"note",u.id));t.push((f?`- [${Ge(u.title)}](${so(f)})`:`- ${Ge(u.title)}`)+m)}for(let u of uS(i)){let f=Ge(fs(u)),m=u.jolliReferenceDocUrl??u.url,w=ks(bs(a,"reference",`${u.source}:${u.nativeId}`));t.push((m?`- [${f}](${so(m)})`:`- ${f}`)+w)}if(l.length>0){let u=l.some(f=>f.detection==="heuristic")?" \xB7 some inferred":"";t.push(`- Skills used \u2014 ${Ge(zd(l))}${u}`)}for(let u of s)t.push(`- ~~${ep(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${Ge(u.reason)}`:""}`)}function mS(t,e){if(!(!e||e.length===0)){t.push("",`## E2E Test (${e.length})`);for(let r=0;r<e.length;r++){let n=e[r];t.push("",`### ${r+1}. ${n.title}`),n.preconditions&&t.push("",`**Preconditions:** ${n.preconditions}`),t.push("","**Steps:**");for(let o=0;o<n.steps.length;o++)t.push(`${o+1}. ${n.steps[o]}`);t.push("","**Expected Results:**");for(let o of n.expectedResults)t.push(`- ${o}`)}t.push("","---")}}function fS(t,e){if(!(e.length<=1)){t.push("",`## Source Commits (${e.length})`);for(let r of e){let n=xr(r),o=r.conversationTurns?` \xB7 ${r.conversationTurns} turns`:"";t.push(`- \`${r.commitHash.substring(0,8)}\` ${r.commitMessage}  _(+${n.insertions} \u2212${n.deletions}${o} \xB7 ${fd(X(r))})_`)}t.push("","---")}}function hS(t,e){if(t.push("","**\u26A1 Why This Change**","",e.trigger),t.push("","**\u{1F4A1} Decisions Behind the Code**","",e.decisions),t.push("","**\u2705 What Was Implemented**","",e.response),e.todo&&t.push("","**\u{1F4CB} Future Enhancements**","",e.todo),e.filesAffected&&e.filesAffected.length>0){t.push("","**\u{1F4C1} FILES**");for(let r of e.filesAffected)t.push(`- \`${r}\``)}}function gS(t,e,r,n={singular:"Summary",plural:"Summaries"}){if(e.length!==0){t.push("",`## ${e.length===1?n.singular:n.plural} (${e.length})`);for(let o=0;o<e.length;o++){let i=e[o],s=i.category?` \`${i.category}\``:"";t.push("",`### ${hd(o)} \xB7 ${i.title}${s}`),r(t,i)}}}function yS(t,e){let r=hs(new Date().toISOString()),n=e?gd(e):void 0,o=n?` \xB7 via ${n}`:"";t.push("","---","",`*Generated by Jolli Memory \xB7 ${r}${o}*`)}var op="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function ip(t,e,r,n){let o=[];if(o.push(`# ${t.title}`),o.push(""),o.push(op),o.push(""),o.push(`> **Source branches:** ${e.join(", ")}`),o.push(`> **Merged:** ${r}`),o.push(`> **Topic slug:** \`${t.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(t.content.trim()),o.push(""),t.keyDecisions&&t.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let i of t.keyDecisions)o.push(`- ${i}`);o.push("")}if(t.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let i of t.sourceCommits){let s=i.substring(0,8),a=n.resolveCommitVisiblePath(s),l=n.resolveCommitMessage(s);a&&l?o.push(`- ${Rs(s,wS(a))} \u2014 ${l}`):l?o.push(`- \`${s}\` \u2014 ${l}`):o.push(`- \`${s}\``)}o.push("")}if(t.relatedBranches&&t.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let i of t.relatedBranches){let s=n.resolveBranchFolder(i);s?o.push(`- ${Rs(i,`../${s}/`)}`):o.push(`- \`${i}\``)}o.push("")}return o.join(`
`)}function sp(t){return{title:t.title,stableSlug:t.stableSlug,content:t.content,...t.relatedBranches.length>0&&{relatedBranches:[...t.relatedBranches]},sourceCommits:t.sourceRefs.filter(e=>e.type==="summary").map(e=>e.id)}}function ap(t,e){let r=[];if(r.push(`# ${e.repoName} \xB7 Knowledge Wiki`),r.push(""),r.push(op),r.push(""),r.push(`> **${t.length} topics** in the knowledge base`),r.push(""),t.length>0){r.push("## Topics"),r.push("");for(let n of t)r.push(`- ${Rs(n.title,`topic--${n.stableSlug}.md`)}`);r.push("")}return r.join(`
`)}function wS(t){return t.startsWith("./")?t.substring(2):t}function Rs(t,e){let r=t.replace(/[\\[\]]/g,"\\$&"),n=e.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${r}](${n})`}var _=p("FolderStorage"),ao=class t{constructor(e,r){this.rootPath=e;this.metadataManager=r;this.kind="folder"}get vaultRoot(){return(0,A.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(e){let r=(0,A.join)(this.rootPath,".jolli",e);try{return(0,v.readFileSync)(r,"utf-8")}catch(n){let o=n.code;return o==="ENOENT"||o==="ENOTDIR"||_.warn("readFile failed for %s: %s",r,x(n)),null}}async writeFiles(e,r){if(he())return;await this.ensure();let n=0,o=0;for(let i of e)i.delete?this.deleteHiddenFile(i.path)&&o++:(this.writeHiddenFile(i.path,i.content),n++,i.path.startsWith("summaries/")&&i.path.endsWith(".json")&&this.generateSummaryMarkdown(i.content),i.path.startsWith("plans/")&&i.path.endsWith(".md")&&this.generatePlanMarkdown(i.path,i.content,i.branch),i.path.startsWith("notes/")&&i.path.endsWith(".md")&&this.generateNoteMarkdown(i.path,i.content,i.branch));_.info("Wrote %d files, deleted %d (%s)",n,o,r)}async listFiles(e){let r=(0,A.join)(this.rootPath,".jolli",e);if(!(0,v.existsSync)(r))return[];let n=(0,A.join)(this.rootPath,".jolli"),o=[];return this.walkDir(r,n,o),o.sort()}async exists(){return(0,v.existsSync)(this.rootPath)}async ensure(){(0,v.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(e){let r=(0,A.join)(this.rootPath,".jolli","shadow-status.json"),n={dirty:!0,lastFailedAt:new Date().toISOString(),message:e};try{Ss(this.vaultRoot,r,JSON.stringify(n,null,"	"))}catch(o){_.warn("markDirty suppressed: %s",x(o))}}clearDirty(){let e=(0,A.join)(this.rootPath,".jolli","shadow-status.json");try{(0,v.existsSync)(e)&&(0,v.unlinkSync)(e)}catch{}}isDirty(){let e=(0,A.join)(this.rootPath,".jolli","shadow-status.json");return(0,v.existsSync)(e)}async deleteVisibleMarkdown(e){let r=t.slugify(e.commitMessage),n=e.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${e.commitHash}`,e.branch,io(n))}catch(o){_.warn("Failed to delete skills aggregate for %s: %s",n,String(o))}return this.deleteVisibleArtifact(e.commitHash,e.branch,`${r}-${n}.md`)}async deletePlanVisible(e,r){await this.deleteVisibleArtifact(`plan:${e}`,r,`plan--${e}.md`)}async deleteNoteVisible(e,r){await this.deleteVisibleArtifact(`note:${e}`,r,`note--${e}.md`)}async pruneBranchMappings(e){let r=new Map,n=new Set(e);for(let i of this.metadataManager.listBranchMappings())n.has(i.branch)&&r.set(i.branch,i.folder);let o=this.metadataManager.unregisterBranches(e);return o===0?0:(await Promise.all([...r.values()].map(i=>this.rmdirIfEmpty((0,A.join)(this.rootPath,i)))),o)}async rmdirIfEmpty(e){try{await(0,lp.rmdir)(e)}catch(r){let n=r.code;if(n==="ENOENT"||n==="ENOTEMPTY"||n==="EEXIST")return;_.warn("rmdir(%s) failed (non-fatal): %s",e,x(r))}}resolveBranchForFolder(e){return this.metadataManager.listBranchMappings().find(n=>n.folder===e)?.branch??null}async deleteVisibleArtifact(e,r,n){let o=this.metadataManager.findById(e),i=this.metadataManager.resolveFolderForBranch(r),s=o?.path??`${i}/${n}`,a=(0,A.join)(this.rootPath,s);if(!(0,v.existsSync)(a))return o&&this.metadataManager.removeFromManifest(e),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return _.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s),!1;try{return(0,v.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(e),_.info("Deleted visible MD: %s",s),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(e),!1;throw l}}async forceRegenerateVisibleMarkdown(e){let r=await this.readFile(`summaries/${e.commitHash}.json`);if(!r)return _.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",e.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(r)}catch(c){return _.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",e.commitHash.substring(0,8),x(c)),{ok:!1,reason:"malformed"}}let n=this.metadataManager.resolveFolderForBranch(e.branch),o=t.slugify(e.commitMessage),i=e.commitHash.substring(0,8),s=`${n}/${o}-${i}.md`,a=(0,A.join)(this.rootPath,s);if((0,v.existsSync)(a))try{(0,v.unlinkSync)(a)}catch(c){return _.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",s,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(e)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(e){let r=this.metadataManager.resolveFolderForBranch(e.branch),n=t.slugify(e.commitMessage),o=e.commitHash.substring(0,8),i=`${r}/${n}-${o}.md`,s=(0,A.join)(this.rootPath,i);if((0,v.existsSync)(s))return await this.healSkillsAggregate(e,r,o),!0;let a=await this.readFile(`summaries/${e.commitHash}.json`);if(!a)return _.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",e.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(w){return _.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",e.commitHash.substring(0,8),x(w)),!1}let c=this.buildYamlFrontmatter(l),d=_s(l),u=`${c}
${d}`;this.atomicWrite(s,u);let f=this.metadataManager.findById(e.commitHash),m=z.sha256(u);return this.metadataManager.updateManifest({path:i,fileId:l.commitHash,type:"commit",fingerprint:m,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:f?.title??l.commitMessage}),this.generateSkillsAggregate(l,r,o),_.info("Regenerated visible MD: %s",i),!0}async healMissingVisibleMarkdown(e){let n=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,i=0,s=0,a=[];for(let c of n){let d=(0,A.join)(this.rootPath,c.path);if((0,v.existsSync)(d)){i++;continue}let u=(0,A.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),f;try{f=(0,v.readFileSync)(u,"utf-8")}catch(O){let J=O.code;if(J==="ENOENT"){s++,e?.dropOrphanedManifestEntries?(a.push(c.fileId),_.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):_.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}s++,_.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),J??"?",x(O));continue}let m;try{m=JSON.parse(f)}catch(O){s++,_.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),x(O));continue}let w=this.metadataManager.resolveFolderForBranch(m.branch),C=t.slugify(m.commitMessage),T=m.commitHash.substring(0,8),S=`${w}/${C}-${T}.md`;if(S!==c.path){i++,_.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,S);continue}let D={commitHash:m.commitHash,parentCommitHash:null,commitMessage:m.commitMessage,commitDate:m.commitDate,branch:m.branch,generatedAt:m.generatedAt};try{await this.regenerateVisibleMarkdown(D)?o++:(s++,_.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(O){s++,_.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),x(O))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||s>0)&&_.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,i,s,l.length),l.length>0?{healed:o,skipped:i,failed:s,droppedIds:l}:{healed:o,skipped:i,failed:s}}dropManifestEntries(e){if(e.length===0)return[];let r=new Set(e),n=this.metadataManager.readManifest(),o=n.files.filter(s=>r.has(s.fileId)).map(s=>s.fileId);if(o.length===0)return[];let i=n.files.filter(s=>!r.has(s.fileId));return this.metadataManager.replaceFiles(i),o}isUserEditedOnDisk(e,r){if(!(0,v.existsSync)(e)||!r)return!1;let n;try{n=z.sha256((0,v.readFileSync)(e,"utf-8"))}catch(o){return _.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",e,String(o)),!0}return n!==r}generateSummaryMarkdown(e){let r;try{r=JSON.parse(e)}catch{return}let n=this.metadataManager.resolveFolderForBranch(r.branch),o=t.slugify(r.commitMessage),i=r.commitHash.substring(0,8),s=`${o}-${i}.md`,a=`${n}/${s}`,l=this.buildYamlFrontmatter(r),c=_s(r),d=`${l}
${c}`,u=(0,A.join)(this.rootPath,a),f=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,f?.fingerprint)){_.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,d);let m=z.sha256(d);this.metadataManager.updateManifest({path:a,fileId:r.commitHash,type:"commit",fingerprint:m,source:{commitHash:r.commitHash,branch:r.branch,generatedAt:r.generatedAt},title:r.commitMessage}),_.info("Markdown generated: %s",a),this.generateSkillsAggregate(r,n,i),r.children&&r.children.length>0&&this.cleanupSupersededDescendants(r.children,a)}async healSkillsAggregate(e,r,n){if((0,v.existsSync)((0,A.join)(this.rootPath,r,io(n))))return;let o=await this.readFile(`summaries/${e.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),r,n)}catch{}}generateSkillsAggregate(e,r,n){let o=e.skills;if(o===void 0||o.length===0)return;let i=`${r}/${io(n)}`,s=(0,A.join)(this.rootPath,i),a=this.metadataManager.findByPath(i);if(this.isUserEditedOnDisk(s,a?.fingerprint)){_.info("FolderStorage: skip overwrite of user-edited %s",i);return}let l=Qd(e,o);this.atomicWrite(s,l),this.metadataManager.updateManifest({path:i,fileId:`skill:${e.commitHash}`,type:"skill",fingerprint:z.sha256(l),source:{commitHash:e.commitHash,branch:e.branch,generatedAt:e.generatedAt},title:`Skills used \u2014 ${n}`}),_.info("Skills aggregate generated: %s",i)}cleanupSupersededDescendants(e,r){let n=[];t.collectDescendantHashes(e,n);for(let o of n){let i=this.metadataManager.findById(o);if(!i||i.type!=="commit"||i.path===r)continue;let s=(0,A.join)(this.rootPath,i.path);if(!(0,v.existsSync)(s)){this.metadataManager.removeFromManifest(o);continue}if(!i.fingerprint){_.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",i.path);continue}if(this.isUserEditedOnDisk(s,i.fingerprint)){_.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i.path);continue}try{(0,v.unlinkSync)(s),this.metadataManager.removeFromManifest(o),_.info("Cleaned up superseded MD: %s",i.path)}catch(a){_.warn("Failed to delete superseded MD %s: %s",i.path,String(a))}}}static collectDescendantHashes(e,r){for(let n of e)r.push(n.commitHash),n.children&&n.children.length>0&&t.collectDescendantHashes(n.children,r)}buildYamlFrontmatter(e){let r=["---"];return r.push(`commitHash: ${e.commitHash}`),r.push(`branch: ${e.branch}`),r.push(`author: ${e.commitAuthor}`),r.push(`date: ${e.commitDate}`),r.push("type: commit"),e.commitType&&r.push(`commitType: ${e.commitType}`),e.stats&&(r.push(`filesChanged: ${e.stats.filesChanged}`),r.push(`insertions: ${e.stats.insertions}`),r.push(`deletions: ${e.stats.deletions}`)),r.push("---"),r.join(`
`)}async regenerateVisiblePlan(e,r){let n=await this.readFile(`plans/${e}.md`);if(!n)return _.warn("regenerateVisiblePlan: hidden plans/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),i=(0,A.join)(this.rootPath,o,`plan--${e}.md`);if((0,v.existsSync)(i))try{(0,v.unlinkSync)(i)}catch(s){return _.warn("regenerateVisiblePlan: cannot unlink %s [%s]",i,String(s)),!1}return this.generatePlanMarkdown(`plans/${e}.md`,n,r),!0}generatePlanMarkdown(e,r,n){let o=e.replace(/^plans\//,"").replace(/\.md$/,""),i=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),s=`plan--${o}.md`,a=`${i}/${s}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${r}`,d=(0,A.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){_.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let f=z.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:f,updatedAt:new Date().toISOString(),source:n?{branch:n}:{},title:this.extractTitle(r)??o}),_.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(e,r){let n=await this.readFile(`notes/${e}.md`);if(!n)return _.warn("regenerateVisibleNote: hidden notes/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),i=(0,A.join)(this.rootPath,o,`note--${e}.md`);if((0,v.existsSync)(i))try{(0,v.unlinkSync)(i)}catch(s){return _.warn("regenerateVisibleNote: cannot unlink %s [%s]",i,String(s)),!1}return this.generateNoteMarkdown(`notes/${e}.md`,n,r),!0}generateNoteMarkdown(e,r,n){let o=e.replace(/^notes\//,"").replace(/\.md$/,""),i=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),s=`note--${o}.md`,a=`${i}/${s}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${r}`,d=(0,A.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){_.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let f=z.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:f,source:n?{branch:n}:{},title:this.extractTitle(r)??o,updatedAt:new Date().toISOString()}),_.info("Note markdown generated: %s",a)}resolveBranchFromSlug(e){let r=e.split("-").at(-1);if(r.length>=7){let o=this.metadataManager.readManifest().files.find(s=>s.type==="commit"&&s.source?.commitHash?.startsWith(r));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let i=(0,A.join)(this.rootPath,".jolli","index.json");if((0,v.existsSync)(i))try{let a=JSON.parse((0,v.readFileSync)(i,"utf-8")).entries.find(l=>l.commitHash.startsWith(r));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(e){let r=e.match(/^#\s+(.+)/m);return r?r[1].trim():null}writeHiddenFile(e,r){let n=(0,A.join)(this.rootPath,".jolli",e);this.atomicWrite(n,r)}deleteHiddenFile(e){let r=(0,A.join)(this.rootPath,".jolli",e);if(!(0,v.existsSync)(r))return!1;try{return(0,v.unlinkSync)(r),!0}catch{return!1}}walkDir(e,r,n){for(let o of(0,v.readdirSync)(e,{withFileTypes:!0})){let i=(0,A.join)(e,o.name);o.isDirectory()?this.walkDir(i,r,n):n.push(ze((0,A.relative)(r,i)))}}async renderTopicWiki(e){let r=(0,A.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(r);let n=this.buildWikiRenderContext();(0,v.mkdirSync)(r,{recursive:!0});let o=[];for(let i of e)try{let s=sp(i);o.push(s);let a=`_wiki/topic--${s.stableSlug}.md`,l=ip(s,i.relatedBranches,i.lastUpdatedAt,n);this.atomicWrite((0,A.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${s.stableSlug}`,type:"wiki",fingerprint:z.sha256(l),source:{generatedAt:i.lastUpdatedAt},title:s.title})}catch(s){_.warn("renderTopicWiki: failed to render topic %s: %s",i.stableSlug,x(s))}try{let i=ap(o,n),s="_wiki/_index.md";this.atomicWrite((0,A.join)(this.rootPath,s),i),this.metadataManager.updateManifest({path:s,fileId:"wiki-index",type:"wiki",fingerprint:z.sha256(i),source:{generatedAt:new Date().toISOString()},title:`${n.repoName} Knowledge Wiki`})}catch(i){_.warn("renderTopicWiki: failed to render index: %s",x(i))}_.info("Topic-KB wiki regenerated: %d topics under %s",e.length,r)}isTopicWikiPresent(){return(0,v.existsSync)((0,A.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(e){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,v.existsSync)(e))try{for(let r of(0,v.readdirSync)(e))if(r.endsWith(".md"))try{(0,v.unlinkSync)((0,A.join)(e,r))}catch(n){_.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",r,x(n))}}catch(r){_.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",e,x(r))}}buildWikiRenderContext(){let e=this.metadataManager.readConfig(),r=this.metadataManager.listBranchMappings(),n=new Map(r.map(s=>[s.branch,s.folder])),o=this.metadataManager.readManifest(),i=new Map;for(let s of o.files)s.type==="commit"&&s.source.commitHash&&i.set(s.source.commitHash.substring(0,8),s);return{repoName:e.repoName??"Memory Bank",resolveCommitVisiblePath:s=>{let a=i.get(s);return a?`../${a.path}`:null},resolveBranchFolder:s=>n.get(s)??null,resolveCommitMessage:s=>i.get(s)?.title??null}}atomicWrite(e,r){Ss(this.vaultRoot,e,r)}static slugify(e){let r=e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return r.length>50&&(r=r.substring(0,50).replace(/-+$/,"")),r||"untitled"}};kr();Wn();ce();var lo=p("StorageFactory");async function Ts(t,e){let r;try{r=await Ce()}catch(a){lo.warn("Failed to load config, falling back to defaults: %s",a.message),r={}}r.storageMode!==void 0&&lo.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",r.storageMode);let n=r.localFolder,o=await Cr(t);if(lo.info("StorageFactory.create: route=%s, projectPath=%s",o.state,t),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await dt(t),l=new Ut(a);return Vi(t,n)?new Dr(l,cp(t,n)):l}if(!Vi(t,n))return lo.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",t),new Be(e);let i=new Be(e),s=cp(t,n);return new Dr(i,s)}function cp(t,e){let r=Pu(t),n=Du(t),o=xu(r,n,e),i=new z((0,up.join)(o,".jolli"));return new ao(o,i)}var ue=p("SchemaV5Migration"),pp="schema-v5-migration.json",dp=3e4;async function vs(t,e){let n=await(e??await Ts(t??process.cwd(),t)).readFile(pp);if(!n)return null;try{return JSON.parse(n)}catch(o){return ue.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function SS(t,e,r){if(cn(t))return await r();if(!await Qo(t,{timeoutMs:dp}))throw new Error(`${e}: could not acquire orphan-write lock within ${dp}ms`);try{return await un(t,r)}finally{await Zo(t)}}async function mp(t){let e=await Ts(t??process.cwd(),t),r=await vs(t,e);return r?.status==="completed"?(ue.info("Schema v5 migration already completed at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0}):await e.exists()?SS(t,"migrateSchemaToV5",()=>bS(t,e)):(ue.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function ES(t,e){if(e.length===0)return new Map;if(t.batchReadFiles)return t.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await t.readFile(n));return r}async function bS(t,e){let r=await vs(t,e);if(r?.status==="completed")return ue.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0};let n=new Date().toISOString(),o=await oo(t),i=o.ok&&o.state==="uncutover"?await j(["rev-parse",`refs/heads/${fe}`],t).then(Y=>Y.stdout.trim()).catch(()=>null):null,s=await e.listFiles("summaries/");ue.info("Found %d summary files to inspect",s.length);let a=await e.listFiles("transcripts/"),l=new Set;for(let Y of a){let Xe=gs(Y);Xe&&l.add(Xe)}ue.info("Reading %d summaries...",s.length);let c=Date.now(),d=await ES(e,s);ue.info("Read %d summaries in %d ms",d.size,Date.now()-c);let u=[],f=[],m=0,w=0;for(let Y of s){let Xe=d.get(Y);if(Xe===void 0)throw new Error(`readSummaries omitted ${Y} \u2014 protocol contract violation (expected one entry per request)`);if(Xe===null){w++;continue}let Et;try{Et=JSON.parse(Xe)}catch(zr){ue.warn("Skipping unparseable summary %s: %s",Y,zr.message),w++;continue}let Zt=kS(Et,l),er=JSON.stringify(Zt,null,"	");if(f.push({path:Y,content:er}),Zt===Et){w++;continue}u.push({path:Y,content:er}),m++}let C=s.length===0,T=m===0&&w>0,S=T?f:u,D=C?"Schema v5 migration: no pre-v5 data found":T?`Schema v5 migration: re-pushing ${w} v5 summaries to heal storage shadow`:`Schema v5 migration: ${m} upgraded, ${w} skipped`,O=Date.now();if(S.length>0&&(ue.info("Writing %d summary file(s) via active storage...",S.length),await e.writeFiles(S,D)),e.isDirty?.()??!1)return ue.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",m,w,Date.now()-O),{migrated:m,skipped:w,fresh:C,alreadyDone:!1};let Ee={version:1,status:"completed",startedAt:n,completedAt:new Date().toISOString(),migratedCount:m,skippedCount:w,fresh:C};return await e.writeFiles([{path:pp,content:JSON.stringify(Ee,null,"	")}],D),ue.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",m,w,C,T,Date.now()-O),i&&ue.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",i),{migrated:m,skipped:w,fresh:C,alreadyDone:!1}}function kS(t,e){if(t.version>=5&&t.transcripts!==void 0)return t;let r=Id(t);if(r.transcripts!==void 0)return{...r,version:5};let o=Pr(r).filter(s=>e.has(s));return{...r,version:5,transcripts:o}}ce();h();var Jt=require("node:fs/promises"),Or=require("node:path");te();async function Cs(t){let e=(0,Or.join)(t,".claude"),r=(0,Or.join)(e,"settings.local.json"),n=je("stop"),o=je("session-start");await fp(t);let i={},s;try{s=await(0,Jt.readFile)(r,"utf-8"),i=JSON.parse(s)}catch(m){if(m.code!=="ENOENT")throw m}let a=i.hooks??{},l=a.Stop??[],c=a.SessionStart??[],d=Rn(l);d.push({hooks:[{type:"command",command:n,async:!0}]});let u=lt(c,kn);u.push({hooks:[{type:"command",command:o}]}),a.Stop=d,a.SessionStart=u,i.hooks=a;let f=JSON.stringify(i,null,"	");return s===f?{path:r}:(await(0,Jt.mkdir)(e,{recursive:!0}),await P(r,f),{path:r})}async function fp(t){let e=(0,Or.join)(t,".claude","settings.json"),r;try{let s=await(0,Jt.readFile)(e,"utf-8");r=JSON.parse(s)}catch{return}let n=r.hooks;if(!n)return;let o=n.Stop??[];if(!Ri(o))return;let i=Rn(o);i.length===0?delete n.Stop:n.Stop=i,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	"))}async function xs(t){await fp(t);let e=(0,Or.join)(t,".claude","settings.local.json"),r;try{let l=await(0,Jt.readFile)(e,"utf-8");r=JSON.parse(l)}catch{return{}}let n=r.hooks;if(!n)return{};let o=n.Stop??[],i=Ri(o);if(i){let l=Rn(o);l.length===0?delete n.Stop:n.Stop=l}let s=n.SessionStart??[],a=hr(s,kn);if(a){let l=lt(s,kn);l.length===0?delete n.SessionStart:n.SessionStart=l}return!i&&!a?{}:(Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	")),{})}var ht=require("node:fs/promises"),gf=require("node:os"),Jr=require("node:path");te();h();var df=require("node:crypto"),Gt=require("node:fs"),Ys=require("node:fs/promises"),To=require("node:os"),Ke=require("node:path");h();var gp=require("node:fs"),uo=require("node:fs/promises"),yp=require("node:os"),mt=require("node:path"),wp=require("node:url");te();h();var _S=/^[a-z0-9][a-z0-9-]*$/;function Lr(t){return _S.test(t)}var co=p("DistPathWriter");async function Mr(t,e,r,n){if(!Lr(t))return co.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(t)),!1;let o=e??(0,mt.dirname)((0,wp.fileURLToPath)(__jmImportMetaUrl)),i=r??"0.99.11",s=(0,mt.join)(n??(0,mt.join)((0,yp.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,mt.join)(s,t);try{await(0,uo.mkdir)(s,{recursive:!0});let l=`${i}
${o}`,c;try{c=await(0,uo.readFile)(a,"utf-8")}catch{}if(c){let[d,u]=c.split(`
`);if(!!(d&&u&&hp(u))&&!hp(o))return co.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",t,d,o),!0}return c!==l&&await P(a,l),co.info("Wrote dist-paths/%s (version=%s, distDir=%s)",t,i,o),!0}catch(l){return co.warn("Failed to write dist-paths/%s: %s",t,l.message),!1}}var RS=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function hp(t){return RS.every(e=>(0,gp.existsSync)((0,mt.join)(t,e)))}var qt=kt(uf(),1);function Ro(t,e){if(t.includes("-")||t.includes("+")||e.includes("-")||e.includes("+")){let s=c=>{let d=(0,qt.valid)(c);return d||(/^\d+(\.\d+)*$/.test(c)?(0,qt.coerce)(c)?.version??null:null)},a=s(t),l=s(e);if(a&&l)return(0,qt.compare)(a,l);if(a)return 1;if(l)return-1}let r=/^\d+(\.\d+)*$/.test(t),n=/^\d+(\.\d+)*$/.test(e);if(!r&&!n)return 0;if(!r)return-1;if(!n)return 1;let o=t.split(".").map(Number),i=e.split(".").map(Number);for(let s=0;s<Math.max(o.length,i.length);s++){let a=(o[s]??0)-(i[s]??0);if(a!==0)return a}return 0}var Xs=p("DistPathResolver"),Ak=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function zs(t){let e=t.replace(/\\/g,"/");for(let[n,o]of Ak)if(e.includes(n))return o;let r=e.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return r?.[1]?r[1].toLowerCase():(0,df.createHash)("sha256").update(t).digest("hex").slice(0,8)}function pf(t){try{let r=(0,Gt.readFileSync)(t,"utf-8").trim().split(`
`).map(i=>i.trim());if(r.length<2)return null;let n=r[0],o=r[r.length-1];if(!o)return null;if(n.startsWith("source=")){let i=n.slice(7),s=i.indexOf("@");return s===-1?{source:i,version:"unknown",distDir:o}:{source:i.slice(0,s),version:i.slice(s+1),distDir:o}}return{source:"",version:n,distDir:o}}catch{return null}}function ft(t){let e=(0,Ke.join)(t??(0,Ke.join)((0,To.homedir)(),".jolli","jollimemory"),"dist-paths"),r;try{r=(0,Gt.readdirSync)(e).sort()}catch{return[]}let n=[];for(let o of r){let i=(0,Ke.join)(e,o),s=pf(i);s&&n.push({source:o,version:s.version,distDir:s.distDir,available:(0,Gt.existsSync)(s.distDir)})}return n}async function mf(t){let e=(0,Ke.join)(t??(0,Ke.join)((0,To.homedir)(),".jolli","jollimemory"),"dist-paths"),r=[];for(let n of ft(t))if(!n.available)try{await(0,Ys.unlink)((0,Ke.join)(e,n.source)),r.push(n.source),Xs.info("Pruned stale dist-paths/%s (dir gone: %s)",n.source,n.distDir)}catch(o){Xs.warn("Failed to prune stale dist-paths/%s: %s",n.source,o.message)}return r}var Qs=["cli","vscode","cursor"];function vo(t){let e=t.filter(o=>o.available);if(e.length===0)return;let r=e[0];for(let o=1;o<e.length;o++)Ro(e[o].version,r.version)>0&&(r=e[o]);let n=e.filter(o=>Ro(o.version,r.version)===0);for(let o of Qs){let i=n.find(s=>s.source===o);if(i)return i}return r}async function ff(){let t=(0,Ke.join)((0,To.homedir)(),".jolli","jollimemory"),e=(0,Ke.join)(t,"dist-path"),r=pf(e);if(!r)return!1;let n;if(r.source==="cli")n="cli";else{let o=zs(r.distDir);n=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return n==="vscode-extension"&&(n="vscode"),await Mr(n,r.distDir,r.version),await(0,Ys.unlink)(e).catch(()=>{}),Xs.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",n,r.version,r.distDir),!0}var hf=p("DispatchScripts"),Ik=`#!/bin/bash
# JolliMemory dist-path resolver.
# Outputs the absolute path to the current winning dist directory: the highest
# core version across all registered sources whose path exists. Ties (same core
# version) are broken by a preference list (cli > vscode > cursor > \u2026) because
# the bundled @jolli.ai/cli core is identical at equal versions \u2014 the tie-break
# only makes the winner deterministic and favours the canonical CLI build.
#
# When JOLLI_DIST_PREFER_SOURCE is set (for example by Claude Plugin CLI
# commands), that source is SOFT-preferred: it wins a
# version TIE \u2014 selected only if present, complete, and already at the top version
# BEST_VER \u2014 but never beats a strictly-higher version from another source, and a
# missing / incomplete / older prefer silently falls through to normal cross-source
# selection below. This replaces the former hard pin (resolve-only-that-source-or-
# fail) so every install source competes on version.
#
# Optional arg $1 = a required script filename (e.g. "PrepareMsgHook.js"). When
# given, a candidate dist is eligible ONLY if it actually contains that file, so
# an INCOMPLETE source that wins on version is skipped and resolution falls
# through to the next-best complete source. Without this, a source registered
# with a partial dist (e.g. the Claude Code plugin before it bundled the git-hook
# scripts) would win, and run-hook would 'node <dist>/PrepareMsgHook.js' a
# missing file \u2014 non-zero exit that BLOCKS the commit. Callers that don't care
# (run-cli baking, external tools) omit the arg and get the legacy dir-only check.
#
# Stable public API: run-hook, run-cli, legacy hooks still on disk, and
# third-party tools all rely on this script's "output a path, exit 0/1"
# contract.

DIR="$HOME/.jolli/jollimemory"
REQUIRED="$1"
PREFER="$JOLLI_DIST_PREFER_SOURCE"
BEST_PATH=""
BEST_VER="0.0.0"

# has_required <distDir> \u2014 true when no file is required, or the required file
# exists inside the candidate dist. Keeps the eligibility test in one place so
# both passes stay in lockstep.
has_required() {
  [ -z "$REQUIRED" ] && return 0
  [ -f "$1/$REQUIRED" ]
}

# Pass 1 \u2014 highest core version wins. Selection uses 'sort -V', which agrees with
# the in-process compareSemver (cli/src/install/DistPathResolver.ts) on every
# non-prerelease comparison. The comparison is STRICT greater-than: an equal
# version does NOT overwrite, so enumeration (alphabetical) order never decides a
# tie. (Known sort -V divergence: it ranks 1.0.0-rc.1 ABOVE 1.0.0; compareSemver
# follows semver and ranks it below. Too rare to hand-roll in POSIX sh.)
if [ -d "$DIR/dist-paths" ]; then
  for f in "$DIR/dist-paths"/*; do
    [ -f "$f" ] || continue
    VER=$(sed -n '1p' "$f")
    CANDIDATE=$(sed -n '2p' "$f")
    [ -z "$VER" ] && continue
    [ -d "$CANDIDATE" ] || continue
    has_required "$CANDIDATE" || continue
    case "$VER" in
      dev|unknown) VER_CMP="0.0.0" ;;
      *)           VER_CMP="$VER" ;;
    esac
    if [ -z "$BEST_PATH" ]; then
      BEST_PATH="$CANDIDATE"
      BEST_VER="$VER_CMP"
    elif [ "$VER_CMP" != "$BEST_VER" ] && \\
         printf '%s\\n%s' "$BEST_VER" "$VER_CMP" | sort -V | tail -1 | grep -qxF "$VER_CMP"; then
      BEST_PATH="$CANDIDATE"
      BEST_VER="$VER_CMP"
    fi
  done
fi

# Soft prefer \u2014 when JOLLI_DIST_PREFER_SOURCE names a source (the Claude Code
# plugin sets it to "claude-plugin" for its CLI recipes), that source WINS a
# version tie ahead of the global preference order below: it is chosen only if it is
# present, complete, AND already at the top version BEST_VER. A strictly-higher
# version elsewhere has already won BEST_VER in Pass 1, so prefer never overrides it;
# a missing / incomplete / older prefer falls through to Pass 2. This is the soft
# replacement for the former hard pin \u2014 every source still competes on version.
if [ -n "$BEST_PATH" ] && [ -n "$PREFER" ]; then
  pf="$DIR/dist-paths/$PREFER"
  if [ -f "$pf" ]; then
    PVER=$(sed -n '1p' "$pf")
    PPATH=$(sed -n '2p' "$pf")
    case "$PVER" in dev|unknown) PVER="0.0.0" ;; esac
    if [ -d "$PPATH" ] && has_required "$PPATH" && [ "$PVER" = "$BEST_VER" ]; then
      echo "$PPATH"
      exit 0
    fi
  fi
fi

# Pass 2 \u2014 among sources tied at BEST_VER, prefer the order below (kept in lockstep
# with SOURCE_PREFERENCE_ORDER in DistPathResolver.ts). Only overrides when the
# preferred source carries the same top version AND is itself complete (has the
# required file, if any) \u2014 a preferred-but-incomplete source must not displace the
# complete pass-1 winner.
if [ -n "$BEST_PATH" ]; then
  for pref in ${Qs.join(" ")}; do
    pf="$DIR/dist-paths/$pref"
    [ -f "$pf" ] || continue
    PVER=$(sed -n '1p' "$pf")
    PPATH=$(sed -n '2p' "$pf")
    [ -d "$PPATH" ] || continue
    has_required "$PPATH" || continue
    case "$PVER" in dev|unknown) PVER="0.0.0" ;; esac
    if [ "$PVER" = "$BEST_VER" ]; then
      BEST_PATH="$PPATH"
      break
    fi
  done
fi

if [ -n "$BEST_PATH" ]; then
  echo "$BEST_PATH"
else
  echo "ERROR: No valid Jolli Memory dist-path found. Run 'jolli enable' to fix." >&2
  exit 1
fi
`,Dk=`#!/bin/bash
# JolliMemory hook runner.
# Takes a hook-type argument; execs the corresponding node hook entry in the
# winning dist (selected by resolve-dist-path).
#
# The hook-type \u2192 script name is resolved FIRST, then passed to resolve-dist-path
# so it can skip any winning-but-incomplete dist that lacks this specific script
# and fall through to a complete source. This is what stops a partial source
# (e.g. a plugin bundle missing PrepareMsgHook.js) from turning a commit hook into
# 'node <missing file>' \u2014 a non-zero exit that would BLOCK the git operation.

HOOK_TYPE="$1"
shift

# Both failure exits below are otherwise completely silent by design (hooks must
# never block git), which means a dispatch failure \u2014 e.g. a dist mid-reinstall
# and briefly missing a required script \u2014 leaves no trace anywhere: no debug.log
# entry (Node never starts), no queue file, nothing. This breadcrumb is the one
# place such a failure becomes visible after the fact. It's overwritten on every
# invocation (last-failure only, not an append log) and cleared on the next
# successful dispatch, so its mere existence means "the most recent hook run
# failed," not "a hook failed at some point in history."
BREADCRUMB="$HOME/.jolli/jollimemory/last-hook-dispatch-failure"
write_dispatch_failure() {
  printf '%s %s %s cwd=%s\\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$1" "$2" "$PWD" > "$BREADCRUMB"
}

case "$HOOK_TYPE" in
  post-commit)        SCRIPT="PostCommitHook.js" ;;
  post-merge)         SCRIPT="PostMergeHook.js" ;;
  post-rewrite)       SCRIPT="PostRewriteHook.js" ;;
  prepare-commit-msg) SCRIPT="PrepareMsgHook.js" ;;
  pre-push)           SCRIPT="PrePushHook.js" ;;
  stop)               SCRIPT="StopHook.js" ;;
  session-start)      SCRIPT="SessionStartHook.js" ;;
  gemini-after-agent) SCRIPT="GeminiAfterAgentHook.js" ;;
  *)                  echo "ERROR: unknown hook type '$HOOK_TYPE'" >&2; exit 0 ;;
esac

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" "$SCRIPT") || {
  write_dispatch_failure "$HOOK_TYPE" "no-valid-dist"
  exit 0
}

# Resolve a usable node binary. The caller's PATH comes first so interactive
# shells keep their own version-manager choice (nvm/volta/fnm/\u2026). GUI git
# clients launch git with a minimal PATH that lacks those locations, so when
# PATH has no node, fall back to the runtime the IDE detected and recorded in
# node-path (one absolute path per line; its writer already proved the binary
# runs and meets the minimum version, so an -x check is enough here \u2014 never
# spawn 'node --version' on this path: prepare-commit-msg is blocking).
NODE_BIN=""
if command -v node >/dev/null 2>&1; then
  NODE_BIN="node"
else
  # tr -d '\r' strips a CR the file might have picked up from a Windows-side
  # sync (iCloud/Dropbox/OneDrive) or Notepad round-trip: without it, [ -x
  # "/abs/path\r" ] would fail and the dispatcher would silently no-op on a
  # machine that clearly has Node \u2014 a debug hazard with no user-visible error.
  RECORDED=$(sed -n '1p' "$HOME/.jolli/jollimemory/node-path" 2>/dev/null | tr -d '\r')
  if [ -n "$RECORDED" ] && [ -x "$RECORDED" ]; then
    NODE_BIN="$RECORDED"
  fi
fi

if [ -z "$NODE_BIN" ]; then
  echo "ERROR: node runtime not found. Jolli Memory hooks require Node.js." >&2
  write_dispatch_failure "$HOOK_TYPE" "no-node-runtime"
  exit 0
fi

# Guarded on existence because rm is NOT a shell builtin: unconditional, this
# costs a fork+exec on EVERY dispatch, including prepare-commit-msg, which runs
# on the blocking commit path this file is otherwise careful to keep spawn-free.
# The test operator IS a builtin, so the common case (no prior failure) now
# costs nothing, and the || : keeps a failed removal from ending the script
# non-zero. exec follows immediately, so the guard's own false exit status
# (1, when no breadcrumb exists) is never observable.
[ -e "$BREADCRUMB" ] && { rm -f "$BREADCRUMB" || :; }
exec "$NODE_BIN" "$DIST/$SCRIPT" "$@"
`,Nk=`#!/bin/bash
# JolliMemory CLI runner.
# Execs node on the winning dist's Cli.js with all args passed through.
# Requires the winning dist to actually contain Cli.js (every real dist does),
# so a partial source can't win run-cli either.

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" Cli.js) || exit 1

# Node resolution mirrors run-hook: PATH first (respects the user's own
# version-manager choice), then the IDE-recorded runtime for GUI clients
# whose minimal PATH lacks node. See run-hook for the full rationale.
NODE_BIN=""
if command -v node >/dev/null 2>&1; then
  NODE_BIN="node"
else
  # tr -d '\r' strips a CR the file might have picked up from a Windows-side
  # sync (iCloud/Dropbox/OneDrive) or Notepad round-trip: without it, [ -x
  # "/abs/path\r" ] would fail and the dispatcher would silently no-op on a
  # machine that clearly has Node \u2014 a debug hazard with no user-visible error.
  RECORDED=$(sed -n '1p' "$HOME/.jolli/jollimemory/node-path" 2>/dev/null | tr -d '\r')
  if [ -n "$RECORDED" ] && [ -x "$RECORDED" ]; then
    NODE_BIN="$RECORDED"
  fi
fi

if [ -z "$NODE_BIN" ]; then
  echo "ERROR: node runtime not found. Jolli Memory CLI requires Node.js." >&2
  exit 1
fi

exec "$NODE_BIN" "$DIST/Cli.js" "$@"
`;async function Zs(t,e){let r=!1;try{r=await(0,ht.readFile)(t,"utf-8")===e}catch{}if(r){await(0,ht.chmod)(t,493);return}await P(t,e),await(0,ht.chmod)(t,493)}async function ea(){let t=(0,Jr.join)((0,gf.homedir)(),".jolli","jollimemory");try{return await(0,ht.mkdir)(t,{recursive:!0}),await Zs((0,Jr.join)(t,"resolve-dist-path"),Ik),await Zs((0,Jr.join)(t,"run-hook"),Dk),await Zs((0,Jr.join)(t,"run-cli"),Nk),hf.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",t),!0}catch(e){return hf.warn("Failed to write resolve scripts: %s",e.message),!1}}var Wr=require("node:fs/promises"),Co=require("node:path");te();h();var yf=p("GeminiHookInstaller");async function ta(t){let e=(0,Co.join)(t,".gemini"),r=(0,Co.join)(e,"settings.json"),n=je("gemini-after-agent"),o={},i;try{i=await(0,Wr.readFile)(r,"utf-8"),o=JSON.parse(i)}catch(d){if(d.code!=="ENOENT")throw d}let s=o.hooks??{},a=s.AfterAgent??[],l=lt(a,_n);l.push({hooks:[{type:"command",command:n,name:"jolli-session-tracker"}]}),s.AfterAgent=l,o.hooks=s;let c=JSON.stringify(o,null,"	");return i===c?{path:r}:(await(0,Wr.mkdir)(e,{recursive:!0}),await P(r,c),yf.info("Gemini AfterAgent hook installed"),{path:r})}async function ra(t){let e=(0,Co.join)(t,".gemini","settings.json"),r;try{let s=await(0,Wr.readFile)(e,"utf-8");r=JSON.parse(s)}catch{return}let n=r.hooks;if(!n)return;let o=n.AfterAgent??[];if(!hr(o,_n))return;let i=lt(o,_n);i.length===0?delete n.AfterAgent:n.AfterAgent=i,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	")),yf.info("Gemini AfterAgent hook removed")}var gt=require("node:fs/promises"),Ve=require("node:path");te();h();ke();var me=p("GitExclude"),Br="# >>> jolli skill exclude >>>",qr="# <<< jolli skill exclude <<<";function Ok(t,e){return Ve.win32.isAbsolute(t)||Ve.posix.isAbsolute(t)?t:(0,Ve.join)(e,t)}async function na(t){try{let{stdout:e}=await Tt("git",["rev-parse","--git-path","info/exclude"],{cwd:t}),r=e.trim();return r.length===0?null:Ok(r,t)}catch{return null}}async function wf(t,e){let r=await na(t);if(!r)return me.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,gt.readFile)(r,"utf-8")}catch(s){if(s.code!=="ENOENT")return me.warn("Failed to read %s: %s \u2014 skipping update",r,s.message),!1}let o=Ef(e),i=bf(n,o);if(i===n)return!0;try{return await(0,gt.mkdir)((0,Ve.dirname)(r),{recursive:!0}),await P(r,i),me.info("Updated %s with %d Jolli skill exclude paths",r,e.length),!0}catch(s){return me.warn("Failed to write %s: %s",r,s.message),!1}}async function oa(t,e){let r=await na(t);if(!r)return me.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,gt.readFile)(r,"utf-8")}catch(i){if(i.code!=="ENOENT")return me.warn("Failed to read %s: %s \u2014 skipping update",r,i.message),!1}let o=Lk(n,e);if(o===n)return!0;try{return await(0,gt.mkdir)((0,Ve.dirname)(r),{recursive:!0}),await P(r,o),me.info("Merged %d Jolli skill exclude path(s) into %s",e.length,r),!0}catch(i){return me.warn("Failed to write %s: %s",r,i.message),!1}}async function Sf(t,e){let r=await na(t);if(!r)return me.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",t),!1;let n;try{n=await(0,gt.readFile)(r,"utf-8")}catch(i){return i.code==="ENOENT"?!0:(me.warn("Failed to read %s: %s \u2014 skipping cleanup",r,i.message),!1)}let o=Mk(n,e);if(o===n)return!0;try{return await P(r,o),me.info("Removed %d Jolli exclude path(s) from %s",e.length,r),!0}catch(i){return me.warn("Failed to write %s: %s",r,i.message),!1}}function Ef(t){return`${[Br,...t,qr].join(`
`)}
`}function bf(t,e){let r=t.split(`
`),n=r.indexOf(Br),o=r.indexOf(qr),i=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...i,...r.slice(o+1)].join(`
`);if(t.length===0)return e;let s=t.endsWith(`
`)?"":`
`;return`${t}${s}${e}`}function Lk(t,e){let r=t.split(`
`),n=r.indexOf(Br),o=r.indexOf(qr),i=n!==-1&&o!==-1&&o>n?r.slice(n+1,o):[],s=new Set(i),a=[...i];for(let l of e)s.has(l)||(s.add(l),a.push(l));return bf(t,Ef(a))}function Mk(t,e){let r=t.split(`
`),n=r.indexOf(Br),o=r.indexOf(qr);if(n===-1||o===-1||o<=n)return t;let i=new Set(e),s=r.slice(n+1,o).filter(c=>!i.has(c)),a=r.slice(0,n),l=r.slice(o+1);return s.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,Br,...s,qr,...l].join(`
`)}var it=require("node:fs/promises"),ia=require("node:os"),Gr=require("node:path");h();var Kt=p("GlobalInstructionsInstaller"),sa="<!-- >>> jolli memory instructions >>> -->",aa="<!-- <<< jolli memory instructions <<< -->",kf="## Jolli Memory",_f=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function $k(){return`${[sa,kf,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",aa].join(`
`)}
`}function Rf(t){return t==="enabled"?{write:!0}:t==="disabled"?{write:!1,remove:!0}:{write:!1}}function jk(t,e){let r=t.split(`
`),n=r.indexOf(sa),o=r.indexOf(aa),i=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...i,...r.slice(o+1)].join(`
`);let s=r.indexOf(kf);if(s!==-1){let l=r.length;for(let u=s+1;u<r.length;u++)if(/^#{1,2} /.test(r[u])){l=u;break}let c=r.slice(0,s).join(`
`),d=r.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${e}${d}`}if(t.length===0)return e;let a=t.endsWith(`
`)?"":`
`;return`${t}${a}${e}`}async function Fk(t,e){let r="";try{r=await(0,it.readFile)(t,"utf-8")}catch(o){if(o.code!=="ENOENT"){Kt.warn("Failed to read %s: %s \u2014 skipping",t,o.message);return}}let n=jk(r,e);if(n!==r)try{await(0,it.mkdir)((0,Gr.dirname)(t),{recursive:!0}),await(0,it.writeFile)(t,n,"utf-8"),Kt.info("Updated %s with Jolli Memory instructions",t)}catch(o){Kt.warn("Failed to write %s: %s",t,o.message)}}async function Tf(t){let e=$k(),r=(0,ia.homedir)();for(let n of _f)t[n.host]&&await Fk((0,Gr.join)(r,...n.relPath),e)}function Hk(t){let e=t.split(`
`),r=e.indexOf(sa),n=e.indexOf(aa);if(r===-1||n===-1||n<r)return t;let o=r>0&&e[r-1]===""?r-1:r;return[...e.slice(0,o),...e.slice(n+1)].join(`
`)}async function Uk(t){let e;try{e=await(0,it.readFile)(t,"utf-8")}catch(n){n.code!=="ENOENT"&&Kt.warn("Failed to read %s: %s \u2014 skipping",t,n.message);return}let r=Hk(e);if(r!==e)try{await(0,it.writeFile)(t,r,"utf-8"),Kt.info("Removed Jolli Memory instructions from %s",t)}catch(n){Kt.warn("Failed to write %s: %s",t,n.message)}}async function vf(){let t=(0,ia.homedir)();for(let e of _f)await Uk((0,Gr.join)(t,...e.relPath))}var ae=require("node:os"),$=require("node:path");ce();h();var Cf=require("node:fs"),Xt=require("node:fs/promises"),Vt=require("node:path");ce();h();var la=p("McpRegistration"),ca="jollimemory";function Jk(t,e,r,n){return t==="win32"&&r?{command:"node",args:[r,...n]}:{command:e,args:[...n]}}function ua(t,e,r){return Jk(t,e,r,["mcp"])}function da(t){let e=vo(ft(t));return e?(0,Vt.join)(e.distDir,"Cli.js"):void 0}function xf(t){let e=vo(ft(t));if(!e)return;let r=(0,Vt.join)(e.distDir,"McpLauncher.js");return(0,Cf.existsSync)(r)?r:void 0}var Pf="/.mcp.json";async function Af(t){let e=(0,Vt.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,Xt.readFile)(e,"utf-8"))}catch(l){if(l.code!=="ENOENT"){la.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",e,String(l));return}r={}}let n=r.mcpServers??{},o=re(),i=(0,Vt.join)(o,"run-cli"),s=process.platform==="win32"?da(o):void 0;n[ca]=ua(process.platform,i,s);let a={...r,mcpServers:n};await(0,Xt.writeFile)(e,`${JSON.stringify(a,null,2)}
`,"utf-8"),la.info("Registered MCP server in %s",e)}async function If(t){let e=(0,Vt.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,Xt.readFile)(e,"utf-8"))}catch{return}r.mcpServers?.[ca]&&(delete r.mcpServers[ca],await(0,Xt.writeFile)(e,`${JSON.stringify(r,null,2)}
`,"utf-8"),la.info("Removed MCP server from %s",e))}var yt=require("node:fs/promises"),Nf=require("node:path");te();h();var xo=p("CodexTomlWriter"),Po="[mcp_servers.jollimemory]";async function Of(t){try{return(await(0,yt.stat)(t)).mode&511}catch{return 384}}function Df(t){return`${Po}
command = ${JSON.stringify(t.command)}
args = ${JSON.stringify(t.args??[])}
`}function Lf(t){if(t.startsWith(Po))return 0;let e=t.indexOf(`
${Po}`);return e===-1?-1:e+1}function Mf(t){let e=Lf(t);if(e===-1)return t;let r=t.indexOf(`
[`,e+Po.length),n=r===-1?t.length:r+1,o=t.slice(0,e),i=t.slice(n);return o===""||i===""?o+i:`${o.replace(/\n+$/,"")}

${i}`}async function $f(t,e){let r="";try{r=await(0,yt.readFile)(t,"utf-8")}catch(s){if(s.code!=="ENOENT"){xo.warn("Skipping Codex MCP: %s unreadable (%s)",t,String(s));return}}let n=Mf(r).replace(/\s*$/,""),o=n.length===0?Df(e):`${n}

${Df(e)}`;if(o===r){xo.info("Codex MCP server already registered in %s \u2014 no write needed",t);return}await(0,yt.mkdir)((0,Nf.dirname)(t),{recursive:!0});let i=await Of(t);await P(t,o,i),xo.info("Registered Codex MCP server in %s",t)}async function jf(t){let e;try{e=await(0,yt.readFile)(t,"utf-8")}catch{return}Lf(e)!==-1&&(await P(t,`${Mf(e).replace(/\s*$/,"")}
`,await Of(t)),xo.info("Removed Codex MCP server from %s",t))}var Kr=require("node:fs/promises"),Ff=require("node:path");te();h();var Ao=p("JsonMcpWriter"),pa="jollimemory",Hf="mcpServers";async function Ie(t,e,r=Hf){let n,o="";try{let c=await(0,Kr.readFile)(t,"utf-8");o=c,n=c.trim()===""?{}:JSON.parse(c)}catch(c){if(c.code!=="ENOENT"){Ao.warn("Skipping MCP registration: %s unreadable/invalid (%s)",t,String(c));return}n={}}let i=n[r]??{},s=()=>`${JSON.stringify({...n,[r]:i},null,2)}
`,a=s();i[pa]=e;let l=s();if(l===o||l===a){Ao.info("MCP server already registered in %s \u2014 no write needed",t);return}await(0,Kr.mkdir)((0,Ff.dirname)(t),{recursive:!0}),await P(t,l),Ao.info("Registered MCP server in %s",t)}async function De(t,e=Hf){let r;try{r=JSON.parse(await(0,Kr.readFile)(t,"utf-8"))}catch{return}let n=r[e];n?.[pa]&&(delete n[pa],await P(t,`${JSON.stringify(r,null,2)}
`),Ao.info("Removed MCP server from %s",t))}var Wk=p("HostRegistrars"),Bk={host:"claude",scope:"repo",register:Af,remove:If,gitExcludePaths:()=>[Pf]};function Ne(){let t=re(),e=process.platform==="win32"?da(t):void 0;return ua(process.platform,(0,$.join)(t,"run-cli"),e)}function qk(){let t=Ne();if(process.platform!=="win32")return t;let e=xf(re());return e?{command:"node",args:[e]}:t}var Gk={host:"cursor",scope:"repo",register:t=>Ie((0,$.join)(t,".cursor","mcp.json"),{...Ne()}),remove:t=>De((0,$.join)(t,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},Kk={host:"gemini",scope:"global",register:()=>Ie((0,$.join)((0,ae.homedir)(),".gemini","settings.json"),{...Ne()}),remove:()=>De((0,$.join)((0,ae.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},Vk={host:"codex",scope:"global",register:()=>$f((0,$.join)((0,ae.homedir)(),".codex","config.toml"),qk()),remove:()=>jf((0,$.join)((0,ae.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},Xk={host:"opencode",scope:"global",register:()=>{let t=Ne(),e={type:"local",command:[t.command,...t.args],enabled:!0};return Ie((0,$.join)((0,ae.homedir)(),".config","opencode","opencode.json"),e,"mcp")},remove:()=>De((0,$.join)((0,ae.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},Yk={host:"copilot",scope:"global",register:()=>Ie((0,$.join)((0,ae.homedir)(),".copilot","mcp-config.json"),{...Ne()}),remove:()=>De((0,$.join)((0,ae.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},zk={host:"copilotChat",scope:"global",register:()=>{let t=Ne(),e={type:"stdio",command:t.command,args:t.args};return Ie((0,$.join)(Ue("Code"),"User","mcp.json"),e,"servers")},remove:()=>De((0,$.join)(Ue("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},Qk={host:"cline",scope:"global",register:async()=>{for(let t of await Mi())await Ie(Hn(t),{...Ne()})},remove:async()=>{for(let t of br())await De(Hn(t))},gitExcludePaths:()=>[]},Zk={host:"devin",scope:"global",register:()=>Ie((0,$.join)((0,ae.homedir)(),".config","devin","config.json"),{...Ne(),transport:"stdio"}),remove:()=>De((0,$.join)((0,ae.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},e_={host:"antigravity",scope:"global",register:()=>Ie((0,$.join)((0,ae.homedir)(),".gemini","config","mcp_config.json"),{...Ne()}),remove:()=>De((0,$.join)((0,ae.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},t_={host:"kimi",scope:"global",register:()=>Ie((0,$.join)(Gn(),"mcp.json"),{...Ne()}),remove:()=>De((0,$.join)(Gn(),"mcp.json")),gitExcludePaths:()=>[]};function Yt(t){let e=[];return t.claude&&e.push(Bk),t.cursor&&e.push(Gk),t.gemini&&e.push(Kk),t.codex&&e.push(Vk),t.opencode&&e.push(Xk),t.copilot&&e.push(Yk),t.copilotChat&&e.push(zk),t.cline&&e.push(Qk),t.devin&&e.push(Zk),t.antigravity&&e.push(e_),t.kimi&&e.push(t_),e}var r_={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0};async function ma(t,e,r,n){for(let o of t)try{await n(o)}catch(i){Wk.warn("MCP %s failed for %s in %s (non-fatal): %s",r,o.host,e,String(i))}}async function fa(t,e){let r=Yt(e).filter(n=>n.scope==="repo");await ma(r,t,"registration",n=>n.register(t))}async function Uf(t){let e=Yt(t).filter(r=>r.scope==="global");await ma(e,"(global)","registration",r=>r.register(""))}async function ha(t){let e=Yt(r_).filter(r=>r.scope==="repo");await ma(e,t,"removal",r=>r.remove(t))}var M=require("node:fs/promises"),Io=require("node:os"),I=require("node:path");te();h();var Oe='"$HOME/.jolli/jollimemory/run-cli"',n_="1.0.0";function o_(){let t=Object.keys(_r),r=[...t.filter(n=>n==="cursor-agent"),...t.filter(n=>n!=="cursor-agent")].map(Pe);return`${r.slice(0,-1).join(", ")}, or ${r[r.length-1]}`}function Jf(){return`---
name: jolli
description: State-aware front door for Jolli Memory in Cursor \u2014 reads how Jolli is set up in this repository, guides first-time setup through jolli-init, reminds the user to sign in when memories cannot sync yet, then routes to recall, search, status, timeline, push, PR, or workflow actions. Use when the user invokes Jolli or asks what Jolli can do.
metadata:
  version: "${n_}"
  revision: 1
  vendor: "jolli.ai"
---

# Jolli Memory

The single front door for Jolli in Cursor. Rather than printing a static list, it
reads how Jolli is set up in THIS repository and guides the next step: incomplete
setup goes to \`/jolli-init\`; memories that are captured but cannot be shared yet
get a sign-in reminder; a healthy repo gets a short snapshot and a routed action.

It **never** re-implements another skill's workflow \u2014 it only reads state and
invokes an existing skill or an existing Jolli Memory tool.

## Step 0 \u2014 confirm this menu can route

This menu lives in \`~/.cursor/skills/jolli/\`, OUTSIDE the Jolli plugin, so that it
is reachable from Cursor's chat-first window \u2014 which starts conversations without
naming a workspace, and therefore cannot be given a per-repository copy. Being
outside the plugin, it can also linger after the plugin has been uninstalled. It can
only route to targets that exist in THIS session, so before doing anything else
confirm at least one is available. The menu can route if **either** holds:

- one or more Jolli Memory MCP tools are available this session, **or**
- the bundled CLI dispatcher exists:

  \`\`\`bash
  test -f "$HOME/.jolli/jollimemory/run-cli" && echo present
  \`\`\`

If **either** holds, proceed to Step 1.

The dispatcher alone is enough to run every step below \u2014 each one names a CLI
fallback. If ONLY the dispatcher is present, use it and mention once that the MCP
tools appear after the user enables the \`jollimemory\` server in **Customize**:
Cursor notices \`.cursor/mcp.json\` within a second of it being written, but a newly
discovered project server stays disconnected until it is switched on.
That is expected, not a fault.

If **neither** holds, do **not** build the menu and do **not** invoke any
\`/jolli-*\` skill \u2014 they share this session's plumbing and the call will fail. This
alone does NOT mean Jolli is gone: the Jolli CLI installs a memory pipeline that runs
independently of this plugin (git hooks that generate memories on every commit). The
dispatcher check above already tells the two apart:

- **dispatcher present** \u2192 Jolli still works; only this session's plumbing is
  missing. Tell the user plainly: commits still generate memories, and they can run
  \`jolli recall\` / \`jolli search\` directly. Reloading the window and starting a new
  chat re-runs the Jolli \`sessionStart\` hook, which restores it.
- **dispatcher absent** \u2192 Jolli is no longer installed on this machine, and this
  \`/jolli\` is a stale leftover from a previous plugin install. They can remove it
  with \`rm -rf ~/.cursor/skills/jolli\`, and reinstall the Jolli plugin to bring the
  menu back.

Either way, then stop \u2014 do not continue to Step 1. Do not guess at install paths.

## Step 1 \u2014 read how Jolli is set up

**Preferred (MCP):** call the Jolli Memory \`status\` tool with no arguments and
read:

- \`enabled\` \u2014 are Jolli's git hooks installed in this repository (is memory
  capture on)?
- \`account.signedIn\` \u2014 is the user signed in to Jolli?
- \`account.jolliApiKeyConfigured\` \u2014 is a stored Jolli API key present? Surfaced
  ONLY when signed OUT (a sign-in already implies a Jolli credential).
- \`account.anthropicKeyConfigured\` \u2014 surfaced ONLY when
  \`account.aiProvider === "anthropic"\`; omitted for every other provider.
- \`account.aiProvider\` \u2014 \`"local-agent"\` | \`"jolli"\` | \`"anthropic"\` | \`null\`.
- \`account.localAgentTool\` \u2014 label of the local agent CLI that generates
  summaries (e.g. "Cursor"). Surfaced ONLY when \`aiProvider\` is \`local-agent\`.
- \`account.site\` \u2014 the Jolli site host, for the snapshot line.
- \`storedMemories\` \u2014 how many memories this repository already has.
- \`space\` \u2014 the bound Jolli Space (\`{ name }\`), or \`null\` when unbound.

**Fallback (CLI):** if the \`status\` tool is unavailable, read the same facts from

\`\`\`bash
${Oe} status
\`\`\`

If neither can be reached, skip the state-based guidance and go straight to
Step 3's menu, presented without a snapshot.

## Step 2 \u2014 guide by state (the front door)

Derive three things, mirroring the CLI's guided front door:

- **can generate memories** \u2014 provider-AWARE, NOT a blind OR of every credential:
  - \`local-agent\` \u2192 **yes**; summaries generate by driving the local agent CLI
    named by \`account.localAgentTool\` (the user's own Cursor login), with no API
    key and no Jolli sign-in. This is the plugin's default, so a freshly installed
    repo can already generate.
  - \`jolli\` \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  - \`anthropic\` \u2192 yes only if \`account.anthropicKeyConfigured\`; a Jolli sign-in
    alone does NOT count.
  - \`null\` / unset \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
- **can sync memories** = \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  Provider-independent: sharing to a Jolli Space always needs a **Jolli**
  credential, so an Anthropic key never satisfies it. Orthogonal to generation \u2014
  the default \`local-agent\` repo generates fine while unable to sync.
- **enabled** = the \`enabled\` flag.

Then take exactly one branch:

- **Not fully set up** \u2014 \`enabled\` is false, OR memories can't be generated: lead
  with SETUP, not the menu. State in one line what is missing, then invoke the
  \`jolli-init\` skill, which owns enable \u2192 sign-in \u2192 bind a Space. Do not
  hand-roll those steps here. (Exception: if the user named a different specific
  action, honor that instead \u2014 see Step 3.)

- **Fully set up** \u2014 enabled AND generation possible: print a short snapshot, then
  continue to Step 3.

  \`\`\`
  \u2713 signed in \xB7 <account.site> \xB7 summaries via <account.localAgentTool>
  \u2713 enabled \xB7 <storedMemories> memories
  \u2713 syncing \xB7 Space "<space.name>"    (ONLY when \`space\` is non-null; omit the whole line otherwise)

  Jolli is listening \u2014 last memory saved.
  \`\`\`

  Pick the FIRST line by state, mirroring the CLI front door's wording exactly:

  - signed in \u2192 \`\u2713 signed in \xB7 <account.site>\`, plus \` \xB7 summaries via
    <account.localAgentTool>\` when \`aiProvider\` is \`local-agent\`. Drop the
    \`\xB7 <site>\` segment when \`account.site\` is null.
  - not signed in, \`local-agent\` \u2192 \`\u2713 local agent set (not signed in to Jolli)\`.
  - not signed in, \`jolli\` \u2192 \`\u2713 Jolli API key set (not signed in to Jolli)\`.
  - not signed in, \`anthropic\` \u2192 \`\u2713 Anthropic API key set (not signed in to Jolli)\`.

  Render the \`\u2713 syncing \xB7 Space "<space.name>"\` line **only when \`space\` is
  non-null**; it means a \`git push\` auto-publishes this branch's memories to that
  Space. When \`space\` is null, drop the line entirely \u2014 do not print a "not bound"
  line here (binding is \`jolli-init\`'s job).

  The closing \`Jolli is listening \u2014 \u2026\` line uses **"last memory saved."** when
  \`storedMemories\` > 0, or **"your next commit is your first memory"** when it
  is 0.

### Sign-in nudge \u2014 only when **can sync** is false

Generation working does not mean memories are shared. When the user can generate
but **can sync** is false (the normal state of a fresh \`local-agent\` install),
add ONE line under the snapshot, mirroring the CLI front door's optional sign-in
step:

\`\`\`
Sign in to Jolli to sync memories to a Space? (/jolli-login \u2014 memory generation keeps running locally either way)
\`\`\`

Rules for the nudge:

- It is **non-blocking**. Never withhold the Step 3 menu waiting for an answer,
  and never report "not signed in" as broken \u2014 the repository is capturing
  memories.
- Offer it **once** per invocation. If the user declines, drop it for the rest of
  the session.
- If the user accepts, invoke the \`jolli-login\` skill (or \`jolli-init\` when they
  also want to bind a Space in the same pass). Never run \`auth login\` yourself
  here, and never ask for a password, token, or callback URL.
- Skip it when **can sync** is true, and inside the "Not fully set up" branch \u2014
  there \`jolli-init\` already walks sign-in.

## Step 3 \u2014 route the request / present the menu

This skill takes one optional free-text argument.

- **Argument provided** \u2192 match it to exactly one action below and invoke that
  action directly, regardless of the Step 2 state \u2014 a specific request wins over
  the setup nudge. The invoked skill handles its own preconditions (for example
  \`jolli-push\` offers to bind a Space when the repo is unbound). Ask the user to
  choose only when the request is ambiguous or matches no action.
- **Argument absent** \u2192 after the Step 2 guidance, list the actions as plain text
  and ask the user to pick one. Bias the ordering to the state: when
  \`storedMemories\` is 0, lead with \`jolli-init\` as the FIRST option and demote
  recall / search below it, since on a fresh repo both would only return empty.
  When memories exist, lead with recall / search. Keep \`jolli-init\` available
  either way for re-running setup or re-binding a Space.

### Jolli skills

- \`/jolli-init\` \u2014 finish setup, or change the bound Space.
- \`/jolli-recall\` \u2014 recall current-branch context.
- \`/jolli-search\` \u2014 search decisions across branches.
- \`/jolli-status\` \u2014 inspect installation and queue health.
- \`/jolli-timeline\` \u2014 show a decision topic's history.
- \`/jolli-push\` \u2014 publish this branch's memories to a Space.
- \`/jolli-login\` \u2014 sign in to Jolli so memories can sync to a Space. Surface this
  whenever **can sync** is false, even if the user did not pick it.
- \`/jolli-logout\` \u2014 clear the stored Jolli credentials.
- \`/jolli-local-run\` / \`/jolli-remote-run\` \u2014 run a Jolli workflow locally or on
  the Jolli backend.

Route a choice by invoking that skill; do not restate its steps here.

**If \`/jolli-recall\`, \`/jolli-search\`, \`/jolli-local-run\` or \`/jolli-remote-run\`
is not offered this session**, it is not missing \u2014 those four live in the repository
rather than in the plugin (so they appear exactly once instead of twice), and this
repository has not had them placed yet. That happens on the first session after the
plugin is installed; if the session hook did not run, \`/jolli-init\` places them.
Say so in one line and offer \`/jolli-init\`, rather than reporting the skill as
unavailable. The CLI fallback below works either way.

### Jolli Memory tools (whatever is registered this session)

Surface the Jolli Memory MCP tools actually available this session \u2014 do not assume
a fixed list. Route a choice by calling the matching tool. One combination is worth
offering explicitly:

- **PR description** \u2014 call \`queue_status\` first, then \`get_pr_description\`, so
  the description covers memories that are still being generated.

If no Jolli Memory tools are registered, present just the skills above.
`}function i_(){return`---
name: jolli-init
description: "Set up Jolli Memory for the current repository in Cursor: verify the plugin hook, enable memory generation through Cursor, sign in to Jolli when sharing is requested, and bind the repo to a Jolli Space. Use for first-time setup, repair, enablement, or Space binding."
---

# Jolli Init

Complete the steps in order. Stop when a required step fails.

## 1. Inspect state

Call the Jolli Memory \`status\` tool. If unavailable, run \`${Oe} status\`.
If the dispatcher is missing, ask the user to run **Developer: Reload Window** and
start a new chat so the Jolli \`sessionStart\` hook runs, then retry.

## 2. Enable local memory generation

Run:

\`\`\`bash
${Oe} enable --repo-hooks-only --source-tag cursor-plugin
\`\`\`

This explicit setup records \`cursor-agent\` as the local-agent tool while
preserving an existing paid provider choice. It also writes this workspace's
\`.cursor/mcp.json\`, and places \`/jolli-recall\`, \`/jolli-search\`,
\`/jolli-local-run\` and \`/jolli-remote-run\` into this repository \u2014 those four are
not bundled with the plugin, so that they appear once in the menu rather than twice
in a repository that also ran a full \`jolli enable\`. If they were already present
this step changes nothing. Cursor notices that file within a second \u2014 no reload needed \u2014
but registers the server **disconnected**, so tell the user to open **Customize** in
the sidebar and enable \`jollimemory\` to get the MCP tools. Everything below works
without them either way. If the command reports that the repository is manually
disabled, explain that an explicit full \`jolli enable\` is required to clear the
opt-out; do not silently override it.

## 3. Decide whether Jolli sign-in is needed

Local memory generation uses the user's Cursor login and needs no Jolli account.
Jolli sign-in is required to bind and share with a Space.

If the user only wants local memory, skip to Step 5. Otherwise, when status shows
neither a Jolli sign-in nor a Jolli API key, run and wait for:

\`\`\`bash
${Oe} auth login
\`\`\`

The command opens the browser and waits for a loopback callback. Never ask for a
password, token, or callback URL.

## 4. Bind a Space

Call \`list_spaces\`. Match a Space named by the user by id, slug, or exact name.
Otherwise present the available Spaces and ask them to choose, offering the default
first when one exists. Call \`bind_space\` with the selected value. Treat
\`already_bound\` as success.

If the Space tools are unavailable, run \`${Oe} spaces --format json\`,
present only the returned Spaces, then bind the selected id or slug with
\`${Oe} bind --space <id-or-slug> --format json\`. Never put free-typed
user text directly into this command.

## 5. Verify and report

Call \`status\` again (or \`${Oe} status\` when the tool is not registered yet).
Report:

- memory generation enabled or the exact remaining problem;
- summaries run through Cursor when provider is \`local-agent\`;
- Jolli sign-in and bound Space when sharing was configured;
- a normal commit captures memory and \`git push\` publishes to the bound Space;
- when the MCP tools were unavailable, that enabling \`jollimemory\` in **Customize**
  turns them on (a reload is not required).
`}function s_(){return`---
name: jolli-login
description: Sign in to Jolli from Cursor so the repository can bind to a Jolli Space and share memories. Use when the user asks to log in, authenticate Jolli, connect an account, or fix missing Jolli credentials.
---

# Jolli Login

Run and wait for the interactive browser flow:

\`\`\`bash
${Oe} auth login
\`\`\`

Never ask the user for passwords, API keys, callback URLs, or browser tokens.

On success, say that Jolli credentials were saved and offer \`/jolli-init\` to bind
the repository to a Space. Clarify that local memory generation still uses the
configured local agent unless the user explicitly changes providers. On failure,
surface the command's reason and suggest retrying; if the browser did not open,
point out the login URL printed by the command. If the dispatcher does not exist,
ask the user to run **Developer: Reload Window**, start a new chat so the Jolli
\`sessionStart\` hook runs, and retry.
`}function a_(){return`---
name: jolli-logout
description: Sign out of Jolli from Cursor by clearing the stored Jolli auth token and Jolli API key while preserving other provider credentials. Use when the user asks to log out, disconnect Jolli, or remove Jolli account credentials.
---

# Jolli Logout

Run:

\`\`\`bash
${Oe} auth logout
\`\`\`

Report the command output, then call the Jolli Memory \`status\` tool when
available. Explain the provider-aware result:

- Space binding and cloud sharing require a future Jolli sign-in.
- \`local-agent\` memory generation continues through the configured
  ${o_()} login.
- \`anthropic\` generation continues when its preserved Anthropic key exists.
- \`jolli\` generation stops unless another Jolli API key remains configured.

If the dispatcher does not exist, ask the user to run **Developer: Reload Window**,
start a new chat so the Jolli \`sessionStart\` hook runs, and retry.
`}function l_(){return`---
name: jolli-status
description: Diagnose Jolli Memory installation, provider, account, hooks, queue, integrations, stored memories, and Space binding for the current repository. Use for status, health checks, missing or stale memories, setup verification, or troubleshooting.
---

# Jolli Status

1. Call the Jolli Memory \`status\` tool.
2. Call \`queue_status\` without waiting.
3. Render a compact Markdown table containing version/enabled, hooks/runtime,
   migration, provider/local agent, account credentials, bound Space, and stored
   memories. Omit unavailable optional fields.
4. List detected AI integrations below the table using their returned status text.
5. State whether memory generation is idle or still running.
6. Give a provider-aware verdict:
   - \`local-agent\`: ready when its tool is configured; if an auth failure is
     reported, use that tool's login remedy.
   - \`jolli\`: requires Jolli sign-in or a Jolli API key.
   - \`anthropic\`: requires an Anthropic API key.
   - unset: requires a usable provider credential.

If \`status\` is unavailable, run \`${Oe} status\` and summarize it. Do not
list branch memories; route those requests to \`/jolli-recall\` or \`/jolli-search\`.
`}function c_(){return`---
name: jolli-timeline
description: Show the chronological evolution of a Jolli Memory decision topic. Use when the user asks for a topic timeline, how a decision changed over time, or provides a Jolli topic slug.
---

# Jolli Decision Timeline

Obtain the topic slug from the request. If it is missing or ambiguous, call the
Jolli Memory \`search\` tool and let the user choose the matching topic.

Call \`get_decision_timeline\` with the selected slug. Render source events
oldest-first as a concise chronological narrative, grounding each transition in
the returned commit or source metadata. If the slug is unknown, search again
instead of inventing a timeline.
`}function u_(){return`---
name: jolli-push
description: Publish the current branch's Jolli memories to a Jolli Space. Use when the user asks to push, publish, share, or sync memories or decisions with a team.
---

# Jolli Push

1. Call \`queue_status\` with waiting enabled so newly committed memories are ready.
2. Call \`push_memory\` for the current branch.
3. If it returns \`binding_required\`, present the returned Spaces, ask the user to
   choose one, then call \`push_memory\` again with that Space. If authentication is
   missing, route to \`/jolli-login\` and stop; never request credentials in chat.
4. On success, report the Space and article links. Offer to open links when the host
   provides a browser action.
5. On partial or failed publication, report the exact result and do not claim all
   memories were shared.
`}var d_=[{name:"jolli-init",build:i_},{name:"jolli-login",build:s_},{name:"jolli-logout",build:a_},{name:"jolli-status",build:l_},{name:"jolli-timeline",build:c_},{name:"jolli-push",build:u_}],nL=d_.map(t=>t.name);var Vr=require("node:os"),zt=require("node:path");h();var p_=p("CursorSettings"),m_="cursor/thirdPartyExtensibilityEnabled";function f_(t=process.env){let e=(0,Vr.homedir)();if((0,Vr.platform)()==="win32"){let r=t.APPDATA??(0,zt.join)(e,"AppData","Roaming");return(0,zt.join)(r,"Cursor","User","globalStorage","state.vscdb")}return(0,Vr.platform)()==="darwin"?(0,zt.join)(e,"Library","Application Support","Cursor","User","globalStorage","state.vscdb"):(0,zt.join)(t.XDG_CONFIG_HOME??(0,zt.join)(e,".config"),"Cursor","User","globalStorage","state.vscdb")}async function Wf(t=process.env,e=f_(t)){try{let{DatabaseSync:r}=await import("node:sqlite"),n=new r(e,{readOnly:!0});try{let o=n.prepare("SELECT value FROM ItemTable WHERE key = ?").get(m_);if(o?.value===void 0)return!0;let i=String(o.value).trim().replace(/^"|"$/gu,"");return i!=="false"&&i!=="0"}finally{n.close()}}catch(r){return p_.info("Could not read Cursor's third-party-extensibility setting (assuming enabled): %s",r.message),!0}}var ee=p("SkillInstaller"),Qt="1.0.0",qf=["jollimemory-recall","jolli-memory-recall"],Xr=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],ga=[".claude","skills"],Do=[{name:"jolli-recall",build:T_},{name:"jolli-search",build:v_},{name:"jolli-local-run",build:C_},{name:"jolli-remote-run",build:x_},{name:"jolli",build:P_}],Gf=["jolli-pr"],Kf=Xr.flatMap(t=>Do.map(e=>`/${t.relativeDir.join("/")}/${e.name}/`)),No=["/.claude/skills/jolli/"],Vf=[...Xr.map(t=>`/${t.relativeDir.join("/")}/jolli/`),...No];async function h_(t,e={}){for(let r of qf)await Oo((0,I.join)(t,".claude","skills",r),"legacy");await ya(t);for(let r of Xr){if(!r.enabled(e))continue;let n=(0,I.join)(t,...r.relativeDir);for(let o of Do)await ka(n,o.name,o.build())}await Ea(t)}async function ya(t){for(let e of Xr){let r=(0,I.join)(t,...e.relativeDir);for(let n of Gf)await Oo((0,I.join)(r,n),"retired")}}async function Oo(t,e){let r=(0,I.join)(t,"SKILL.md"),n;try{n=await(0,M.readFile)(r,"utf-8")}catch{return}if(!ba(n)){ee.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",t);return}try{await(0,M.rm)(t,{recursive:!0,force:!0}),ee.info("Removed %s Jolli skill at %s",e,t)}catch(o){ee.warn("Failed to remove %s skill at %s: %s",e,t,o.message)}}async function Xf(t,e={}){return h_(t,e)}async function Yf(t){let e=(0,I.join)(t,...ga),r=(0,I.join)(e,"jolli","SKILL.md");try{if(!(await(0,M.readFile)(r,"utf-8")).includes('vendor: "jolli.ai"')){ee.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",r);return}}catch{}await ka(e,"jolli",A_())}var wa=[".cursor","skills"],Sa=Do.filter(t=>t.name!=="jolli"),zf=[".cursor","skills"],Qf=Sa.map(t=>`/${wa.join("/")}/${t.name}/`);async function Ea(t){let e=(0,I.join)(t,...wa),r=g_(),n=await S_(t);r===void 0&&await E_();for(let o of Sa){let i=(0,I.join)(e,o.name);if(!await y_(i))continue;if(await b_(n,o.name)||r===void 0){await(0,M.rm)(i,{recursive:!0,force:!0});continue}await w_(i,(0,I.join)(r,o.name))}}function g_(){let t=ft().find(e=>e.source==="cursor-plugin"&&e.available);return t?(0,I.join)((0,I.dirname)(t.distDir),"mirror"):void 0}async function y_(t){try{return(await(0,M.lstat)(t)).isSymbolicLink()}catch{return!0}}async function w_(t,e){await(0,M.rm)(t,{recursive:!0,force:!0}),await(0,M.mkdir)((0,I.dirname)(t),{recursive:!0});try{await(0,M.symlink)(e,t,"dir");return}catch(r){ee.info("Symlink unavailable for %s (%s) \u2014 copying instead",t,r.message)}try{let r=await(0,M.readFile)((0,I.join)(e,"SKILL.md"),"utf-8");await(0,M.mkdir)(t,{recursive:!0}),await P((0,I.join)(t,"SKILL.md"),r)}catch(r){ee.warn("Could not place %s: %s",t,r.message)}}async function S_(t){let e=(0,Io.homedir)(),r=[(0,I.join)(t,".agents","skills"),(0,I.join)(e,".agents","skills")];return await Wf()&&r.push((0,I.join)(t,".claude","skills"),(0,I.join)(e,".claude","skills"),(0,I.join)(t,".codex","skills"),(0,I.join)(e,".codex","skills")),r}async function Zf(t=(0,Io.homedir)()){await ka((0,I.join)(t,...zf),"jolli",Jf())}async function E_(t=(0,Io.homedir)()){await Oo((0,I.join)(t,...zf,"jolli"),"cursor global menu")}async function eh(t){let e=(0,I.join)(t,...wa);for(let r of Sa){let n=(0,I.join)(e,r.name),o=!1;try{o=(await(0,M.lstat)(n)).isSymbolicLink()}catch{continue}if(o){await(0,M.rm)(n,{recursive:!0,force:!0}),ee.info("Removed cursor mirror symlink at %s",n);continue}await Oo(n,"cursor mirror")}}async function b_(t,e){for(let r of t)try{return await(0,M.readFile)((0,I.join)(r,e,"SKILL.md"),"utf-8"),!0}catch{}return!1}async function th(t){let e=[...Xr.map(r=>r.relativeDir),ga];for(let r of e){let n=(0,I.join)(t,...r,"jolli"),o=(0,I.join)(n,"SKILL.md"),i;try{i=await(0,M.readFile)(o,"utf-8")}catch{continue}if(i.includes('vendor: "jolli.ai"'))try{await(0,M.rm)(n,{recursive:!0,force:!0}),ee.info("Removed Jolli umbrella menu at %s",n)}catch(s){ee.warn("Failed to remove umbrella at %s: %s",n,s.message)}}}var k_=[...Do.filter(t=>t.name!=="jolli").map(t=>t.name),...Gf,...qf];async function rh(t){for(let e of k_){let r=(0,I.join)(t,...ga,e),n=(0,I.join)(r,"SKILL.md"),o;try{o=await(0,M.readFile)(n,"utf-8")}catch{continue}if(!ba(o)){ee.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",r);continue}try{await(0,M.rm)(r,{recursive:!0,force:!0}),ee.info("Removed legacy Jolli skill at %s",r)}catch(i){ee.warn("Failed to remove legacy skill at %s: %s",r,i.message)}}}var __=/(?:^|\n)[ \t]*revision:\s*(\d+)/,R_=-1;function Bf(t){let e=t.match(__),r=e?Number.parseInt(e[1],10):Number.NaN;return Number.isFinite(r)?r:R_}function ba(t){return t.includes('vendor: "jolli.ai"')||t.includes("jolli-skill-version:")}async function ka(t,e,r){let n=(0,I.join)(t,e),o=(0,I.join)(n,"SKILL.md"),i=Bf(r);try{let s=await(0,M.readFile)(o,"utf-8");if(!ba(s)){ee.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",e);return}if(Bf(s)>=i)return}catch{}try{await(0,M.mkdir)(n,{recursive:!0}),await P(o,r),ee.info("Wrote SKILL.md (revision %d) to %s",i,o)}catch(s){ee.warn("Failed to write %s SKILL.md: %s",e,s.message)}}var Lo=`### Shell prerequisite

This block requires a POSIX bash shell. On Linux/macOS the system bash works.
**On Windows, use Git Bash** (the bash bundled with Git for Windows). Other
Windows "bash" options \u2014 \`C:\\Windows\\System32\\bash.exe\`, the WindowsApps
alias, or any WSL bash \u2014 see a separate Linux home directory and will not
find the Jolli entry script that lives under \`%USERPROFILE%\`.

If Git Bash is not available on Windows, STOP and tell the user:
"Jolli skill needs Git Bash on Windows. Install Git for Windows from
https://git-scm.com/download/win and retry."

Do NOT fall back to \`npm run\`, \`npx\`, \`node\` directly, PowerShell-native
commands, WSL bash, or any workspace-local script \u2014 those bypass the
security recipe and the dist resolver and will not produce valid output.`;function nh(t,e){return`${Lo}

### Invocation

Generate a fresh random 16-character hex string (the "delimiter token") for
this invocation \u2014 e.g. \`3f8a9b2c5d7e1f4a\`. Quickly scan the user's argument:
if the argument text contains a line that is exactly \`JOLLI_ARG_<delimiter
token>_END\`, regenerate the delimiter token and re-check.

Then run this Bash, replacing the two \`<DELIM>\` occurrences with your
delimiter token and replacing \`<user-arg>\` with the user's input verbatim:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" ${t} --arg-stdin${e} <<'JOLLI_ARG_<DELIM>_END'
<user-arg>
JOLLI_ARG_<DELIM>_END
\`\`\`

If you cannot follow the above structure (e.g., your environment doesn't
support here-docs), STOP and tell the user "Jolli skill cannot run safely
in this environment." DO NOT attempt to interpolate the argument into argv
or any double-quoted shell string \u2014 that path has a known shell injection
vector.`}function T_(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${Qt}"
  revision: 2
  vendor: "jolli.ai"
---

# Jolli Recall

> Every commit deserves a Memory. Every memory deserves a Recall.

Load the structured development context for a branch \u2014 commits with their
distilled topics (trigger / response / decisions / files), plus any plans
and notes that the work referenced. Synthesize a grounded answer to the
user's prompt about that branch.

## Step 1: Load the recall result

\`<user-arg>\` is a branch name (exact or fragment) or empty (current branch).

### Preferred: MCP tool

If the \`recall\` tool from the \`jollimemory\` MCP server is available, call it with
\`{ "branch": "<user-arg>" }\` (omit \`branch\` when \`<user-arg>\` is empty). It
returns a \`type\`-tagged object \u2014 \`recall\` / \`catalog\` / \`error\` \u2014 identical to
the CLI fallback below.

Match that tool by what it DOES, not by one host's spelling of it: Claude Code
prefixes it as \`mcp__jollimemory__recall\`, while Codex exposes a bare \`recall\`
inside the \`mcp__jollimemory\` namespace and loads MCP tools lazily \u2014 so an empty
first look is not proof it is absent.

### Fallback: CLI here-doc

Only if the jollimemory MCP server is not registered at all \u2014 NOT merely because
one spelling of the tool name is absent from your tool list. Then use:

${nh("recall"," --format json")}

If \`~/.jolli/jollimemory/run-cli\` does not exist, tell the user:
"Jolli not installed. Please install via \`npm install -g @jolli.ai/cli && jolli enable\` or install the Jolli VS Code extension."
Do not attempt further processing.

Both the MCP tool and the CLI fallback return the same \`type\`-tagged union.
Handle the result using Step 2 regardless of which path was used.

## Step 2: Handle the result by \`type\`

The result (from either the MCP tool or the CLI) is a \`type\`-tagged object:

- \`type:"recall"\` \u2192 render Part A + Part B below.
- \`type:"catalog"\` \u2192 semantic-match \`<user-arg>\` against \`branches[].branch\` /
  \`commitMessages\` / \`topicTitles\`. One match \u2192 repeat Step 1 with that branch.
  Many \u2192 list and ask. None \u2192 show catalog, ask to clarify.
- \`type:"error"\` \u2192 surface \`message\` verbatim (translated); for "no records",
  suggest \`jolli enable\`. Never fabricate.

### type: "recall" \u2014 full payload returned

You have a \`RecallPayload\` with these fields:

- \`branch\`, \`period: { start, end }\`, \`commitCount\`, \`totalFilesChanged\`,
  \`totalInsertions\`, \`totalDeletions\` \u2014 branch-level facts.
- \`commits[]\` \u2014 per-commit projection. Each carries:
  - identity (always present): \`hash\` (8-char display), \`fullHash\`, \`branch\`,
    \`commitDate\`, \`commitAuthor\`, \`commitMessage\`; optional \`commitType?\`,
    \`ticketId?\`.
  - \`diffStats?\` \u2014 \`{ filesChanged, insertions, deletions }\`.
  - \`recap?\` \u2014 1-3 paragraphs of plain-English narrative.
  - \`topics[]\` \u2014 each with **always present**: \`title\`, **\`decisions\` (\u2605)**;
    **may be absent**: \`trigger?\`, \`response?\`, \`todo?\`, \`filesAffected?\`,
    \`category?\`, \`importance?\`. Trimming rules differ by field:
    - \`response\` is **policy-trimmed unconditionally** when the branch
      ships more than 8 kept commits \u2014 raising \`--budget\` will not bring
      it back. Additionally, on tight budgets it may be dropped
      oldest-first on shorter branches.
    - \`trigger\` is only dropped by \`--budget\` (oldest-first); raising
      \`--budget\` can restore it.
    - \`decisions\` is never dropped from a kept commit (if the budget
      can't fit it, the whole commit is omitted from \`commits[]\`).
  - \`plans?\` \u2014 \`{ slug, title }[]\` refs only; \`slug\` is the **normalized
    base slug** that always resolves to an entry in payload-level \`plans\`.
  - \`notes?\` \u2014 \`{ id, title }[]\` refs only; \`id\` always resolves to an
    entry in payload-level \`notes\`. (Notes use \`id\`, not \`slug\` \u2014 they
    have no archive-suffix mechanism.)
- \`plans[]\` \u2014 branch-deduplicated plan bodies: \`{ slug, title, content? }\`.
  \`content\` may be absent under tight budget \u2014 when absent, the entry is
  still a valid grounding anchor but you can't quote from it.
- \`notes[]\` \u2014 same shape and trimming rule as plans.
- \`stats\`, \`estimatedTokens\`, \`truncated?\`.

Render in two parts (in order):

#### Part A \u2014 Forced fact opener (no paraphrase, no interpretation)

Render the loaded confirmation as a heading + bullet block (not a prose
line). **Facts only \u2014 do not interpret what the branch is "about" here.**
The mandated shape:

\`\`\`markdown
### Loaded \`feature/auth\`

- **Period:** 2026-04-10 \u2192 2026-04-15 (5 days)
- **Commits:** 8 (+312 \u221289, 24 files)
- **Captured:** 12 topics, 5 key decisions, 2 plans, 3 notes
\`\`\`

The heading + bullet shape is required \u2014 a single prose line blends into
the synthesis below and the user loses the visual anchor for verification.
Save interpretation for Part B.

#### Part B \u2014 Free-form synthesis

Pick whatever shape best serves the user's prompt: prose narrative,
chronological timeline, decision-focused bullet list, per-theme
\`###\` sections, side-by-side comparison, mixed. When multiple
distinct themes emerge across the commits, prefer \`###\` per theme \u2014
inline-bold paragraph prefixes blend into a wall under markdown
rendering. The principles below are the only constraints.

#### Universal principles (apply regardless of shape)

1. **Lead with the answer.** No "Let me analyze..." or "Found N commits..."
   preamble.

2. **Ground every concrete claim** to a hash and/or file. Use \`(abc12345)\`
   for hashes and \`[middleware/auth.ts](middleware/auth.ts)\` for files.

3. **Synthesize, don't dump \u2014 but DO use verbatim quotes from stored
   data.** Read everything; fold into coherent prose or bullets.
   Whenever a phrase from \`decisions\` / \`recap\` / \`plans[].content\` /
   \`notes[].content\` captures the answer more compactly than your
   paraphrase, quote it verbatim in **bold** with attribution.

   Quote **complete clauses (typically 10-30 words)** \u2014 not 2-3 word
   fragments that depend on your surrounding paraphrase to mean
   anything. The reader should be able to skim the bold quote alone
   and understand its claim. Format, embedded in narrative:

   *The design chose JWT because* **"the stateless model lets us scale
   horizontally without a shared session store across regions"**
   *(decisions, abc12345)*; *per the auth-redesign plan,* **"all session
   tokens must be opaque, with no client-readable claims, so rotation
   never breaks the API"** *(plan: auth-redesign)*.

   **Bold = verbatim from stored data.** Never use bold for general
   emphasis. Quotes belong inside running prose or bullets that carry
   their own narrative \u2014 never as bare bullets stripped of context.
   Stringing bare quotes is the wall-of-fragments failure mode.

4. **Reply in the user's language.** Template is English; user-visible
   output matches the user.

5. **Don't expose machinery.** No "RecallPayload" / "commits array" /
   "JSON field" / "SearchHit" mentions.

6. **Brief by default \u2014 synthesize, don't dump every commit.** Skip
   routine commits and merge overlapping themes; aim for ~500 words
   on a typical branch, but favor section structure over compression.
   Never collapse \`###\` themes into inline-bold paragraph prefixes
   just to hit a word count \u2014 that produces a wall and defeats the
   structure's purpose. Branches with many distinct themes may
   legitimately run longer; a "deep dive" on a specific theme is
   opt-in.

#### Plan / note stubs on commits

When a commit carries \`plans?\` / \`notes?\` stubs, use the stub title as a
grounding anchor for narrative ("the auth-redesign plan guides this work").

**To quote from a plan or note body**, look up the matching entry in the
top-level \`plans\` / \`notes\` array by its \`slug\` (plans) or \`id\` (notes):

- If the entry has \`content\`: quote verbatim with \`(plan: <slug>)\` /
  \`(note: <id>)\` attribution if relevant to the user's prompt.
- If \`content\` is absent (budget trimming dropped the body): use **only**
  the title as a citation anchor \u2014 never fabricate a quote from a body
  you cannot see.

#### Empty / partial handling

- Empty \`commits\`: tell the user no records were found; suggest running
  \`jolli enable\` if they expected records.
- \`truncated: true\`: policy trims or budget enforcement dropped fields
  or commits. Policy trims drop \`importance: "minor"\` topics (and any
  commit whose every topic is minor) and drop \`topic.response\` when the
  branch ships more than 8 commits; budget trims drop oldest-first
  \`response\` / \`trigger\` / plan / note content. Mention it with a
  one-liner if the user asks for deeper detail; otherwise stay silent.

### type: "catalog" \u2014 branch lookup needed

Returned when no exact branch match was found. Has a \`branches[]\` array
with \`branch\`, \`commitCount\`, \`period\`, \`commitMessages\`, \`topicTitles?\`.
If a \`query\` field is present, semantic-match the user's input against
\`branch\`, \`commitMessages\`, and \`topicTitles\` (the highest-signal source);
support cross-language matching and time-relative queries.

- One match: re-run Step 1 with the chosen branch as the user-arg and
  continue from Step 2.
- Multiple matches: list candidates, ask user to choose.
- No matches: show the catalog, ask user to clarify.

### type: "error" \u2014 CLI returned a hard error

Has a \`message\` string. Common cases:

- Branch matched but its summaries failed to load.
- No records in the repo at all.
- Invalid argument or internal failure.

Surface the message verbatim to the user (translated into their language if
non-English). For "no records in this repo" specifically, suggest running
\`jolli enable\` if they expected records. Do NOT retry or fabricate a recall
payload from nothing.
`}function v_(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${Qt}"
  revision: 2
  vendor: "jolli.ai"
---

# Jolli Search

Search structured commit memories across every branch in this repo.
Lightweight BM25 index returns relevance-ranked hits \u2014 no two-phase catalog
scan required. For full context of a known branch, use jolli-recall instead.

## When to use

- "Has anyone dealt with X before?" / "How have we handled Y previously?"
- Looking for a past decision: "why did we choose X over Y?"
- Finding the commit related to a half-remembered ticket / file / topic.

## When NOT to use

- Need full context of a known branch \u2192 run jolli-recall.
- Looking at the current code \u2192 grep / read files directly.
- Need deep rationale/decisions for a specific branch \u2192 run jolli-recall on
  that branch (search hits are lightweight; full decisions live in recall).

## Step 1: Parse the query

Extract the natural-language query (any language). Optional: \`limit\` (integer,
default 20). Note: time/budget filters (\`--since\`, \`--budget\`) are not supported
on the search path \u2014 point users at jolli-recall for a full branch when they
need depth.

## Step 2: Get hits

### Preferred: MCP tool

If the \`search\` tool from the \`jollimemory\` MCP server is available, call it with:

\`\`\`json
{ "query": "<query>", "limit": 20 }
\`\`\`

Returns \`{ "hits": [ { type, title, snippet, branch, commitDate, slug, hash, score } ] }\`,
relevance-ranked (BM25). Proceed to Step 3 with these hits.

Match that tool by what it DOES, not by one host's spelling of it: Claude Code
prefixes it as \`mcp__jollimemory__search\`, while Codex exposes a bare \`search\`
inside the \`mcp__jollimemory\` namespace and loads MCP tools lazily \u2014 so an empty
first look is not proof it is absent.

### Fallback: CLI here-doc

Only if the jollimemory MCP server is not registered at all \u2014 NOT merely because
one spelling of the tool name is absent from your tool list. Prefer the MCP tool:
in a sandboxed agent this CLI path cannot write its search index cache, so it
rebuilds the whole index on every call. Then use:

${nh("search"," --format json")}

The CLI returns the same \`{ hits }\` envelope as the MCP tool.

**Failure handling**:
- If \`~/.jolli/jollimemory/run-cli\` does not exist: tell the user
  "Jolli not installed. Please install via \`npm install -g @jolli.ai/cli && jolli enable\`
  or install the Jolli VS Code extension." Do not attempt further processing.
- If the command output starts with \`error:\` or contains \`unknown command 'search'\`:
  the installed CLI is older than this skill. Tell the user
  "Your installed Jolli CLI is older than this skill \u2014 please run
  \`npm update -g @jolli.ai/cli\` (or update your VS Code extension), then retry."
  Do not attempt further processing.

Both paths produce the same \`{ hits }\` shape. Proceed to Step 3 regardless of
which path was used.

## Step 3: Render

\`hits\` are lightweight \u2014 no full decisions/recap per hit. For each relevant
hit you have:

- \`type\` \u2014 \`"commit"\` or \`"topic"\`
- \`title\` \u2014 one-sentence label
- \`snippet\` \u2014 short excerpt from the matching content
- \`branch\` \u2014 branch the hit belongs to
- \`commitDate\` \u2014 ISO 8601 date
- \`slug\` \u2014 human-readable identifier (for topics)
- \`hash\` \u2014 8-char short SHA (for commits)
- \`score\` \u2014 BM25 relevance score (internal; do not expose to the user)

**Universal principles** (apply regardless of shape):

1. **Lead with the answer.** No "Let me analyze..." or "Found N commits..." preamble.

2. **Ground every concrete claim** to its \`hash\` (commit hits) or \`slug\` +
   \`branch\` (topic hits). Use \`(abc12345)\` for hashes.

3. **Synthesize, don't dump \u2014 but DO use verbatim quotes from stored data.**
   Read everything; fold into coherent prose or bullets. Whenever a phrase from
   \`snippet\` captures the answer more compactly than your paraphrase, quote it
   verbatim in **bold** with attribution.

   Quote **complete clauses (typically 10-30 words)** \u2014 not 2-3 word fragments
   that depend on your surrounding paraphrase to mean anything. The reader
   should be able to skim the bold quote alone and understand its claim.
   Format, embedded in narrative: *the design chose JWT because*
   **"the stateless model lets us scale horizontally without a shared session store across regions"**
   *(snippet, abc12345)*.

   **Bold = verbatim from stored data.** Never use bold for general emphasis.
   Quotes belong inside running prose or bullets that carry their own narrative
   \u2014 never as bare bullets stripped of context. Stringing bare quotes is the
   wall-of-fragments failure mode.

4. **Reply in the user's language.** Template is English; user-visible output
   matches the user.

5. **Don't expose machinery.** No "BM25" / "SearchHit" / "hits array" / "score"
   mentions. Don't expose \`slug\` or internal field names either.

6. **Output shape is entirely your call.** Prose, compact list, timeline,
   per-theme sections \u2014 pick whatever serves the query. Every concrete claim
   must be groundable to a hash or branch.

7. **If the user needs the full decisions/rationale behind a hit**, tell them
   to run jolli-recall on that hit's \`branch\`.

**Empty hits** \u2192 tell the user nothing matched; suggest broader keywords or a
different phrasing. Do NOT mention BM25 or index internals.
`}function C_(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${Qt}"
  revision: 5
  vendor: "jolli.ai"
---

# Jolli Local Run

Run a Jolli **workflow** locally: *your* agent executes the workflow's recipe on
this machine (so it spends no Jolli LLM budget), Jolli supplies the recipe and
tracks the run, and the workflow's file writes are published to a git-backed
Jolli Space through an agent branch + pull request that space-cli commits and
pushes locally.

A workflow can be run locally only when its destination Space is **git-backed**
AND already **cloned** on this machine. Before starting, the user is told whether
the resulting PR will **auto-merge** or **open for team review**.

Drive the steps below in order. Prefer the Jolli MCP tools for the run lifecycle;
the eligibility check and the git operations go through the \`jolli\` CLI (via the
run-cli entry script the sibling skills also use).

${Lo}

## Step 1 \u2014 discover the runnable workflows

Run the eligibility helper and read its JSON:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" workflow local-run
\`\`\`

- \`{ "type": "workflows", "workflows": [ { "id": 7, "name": "Impact Analysis", "autoMerges": true|false }, ... ] }\`
  \u2014 the workflows runnable right now. **Offer only these.** Present each one to
  the user by its \`name\` (fall back to the \`id\` when \`name\` is absent), and tell
  them up front whether it will **auto-merge** the PR (\`autoMerges: true\`) or
  **open the PR for team review** (\`autoMerges: false\`). If the array is empty,
  tell the user there are no locally-runnable workflows (a workflow's destination
  must be a git-backed, already-cloned Space) and stop.
- \`{ "type": "workflow_cli_required", "installHint": "..." }\` \u2014 the workflow-cli
  plugin is missing. Tell the user to install it (run the \`installHint\`) and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
  \`\`\`

- \`{ "type": "space_cli_required", ... }\` \u2014 the space-cli plugin is missing. Tell
  the user to install it and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/space-cli
  \`\`\`

- \`{ "type": "error", "message": "..." }\` \u2014 report the message and stop.

Have the user pick one workflow \u2014 list them by \`name\` (use your host's
interactive single-select tool if it has one \u2014 e.g. AskUserQuestion on Claude
Code \u2014 otherwise list them as text). Keep the chosen workflow's \`id\` for Step 2.

## Step 2 \u2014 start the run

Call the \`start_local_run\` tool (on Claude Code
\`mcp__jollimemory__start_local_run\`) with the chosen workflow's id, passed
**exactly as the helper returned it** \u2014 the backend's id is a number, so it stays
an unquoted number: \`{ "id": <workflow id> }\` (a string id/slug stays quoted).
Capture from its result:

- \`runId\` \u2014 the run handle for every later call.
- \`plan\` \u2014 the recipe steps your agent will execute.
- \`writeTarget\` \u2014 carries the server-derived \`workBranch\`, the destination Space,
  and the destination folder. Refer to the destination in user-facing prose by its
  **Space name / folder** only. Do **not** announce a backing repo \`owner/name\`, and
  do **not** present the \`workBranch\` as "the write target" \u2014 those are internal
  plumbing, not the destination's identity. The \`workBranch\` is passed verbatim to
  \`docs pull --branch\` in Step 3, but keep it framed as an internal detail. Do not
  inspect the clone's git remotes to name the destination. \`writeTarget.repo\` may be
  **empty** for a private Jolli-managed destination \u2014 that is normal, never an error,
  and never something to look up or narrate.

## Step 3 \u2014 check out the agent branch

Pull the destination clone onto the server-derived work branch:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" docs pull --branch <writeTarget.workBranch>
\`\`\`

**Always \`--branch\`. NEVER \`--agent\`.** The \`--agent\` mode runs a destructive
\`git clean -fdx\` that wipes untracked files; \`--branch\` checks out the
server-derived branch without cleaning. Do not substitute \`--agent\` under any
circumstances. \`docs pull\` fetches the destination write token internally \u2014 you
do **not** fetch or handle any token yourself.

## Step 4 \u2014 write the workflow's output

Execute the workflow's \`plan\` from Step 2, writing the output files under the
destination folder from \`writeTarget\`, inside the checked-out clone.

## Step 5 \u2014 local review gate (with heartbeats)

Nothing is committed or pushed until the human explicitly approves.

1. Send a heartbeat so the run's lease stays alive while the human reviews: call
   \`report_local_run_progress\` (on Claude Code
   \`mcp__jollimemory__report_local_run_progress\`) with \`{ "runId": "<runId>" }\`.
2. Show the working-tree diff of what the workflow wrote, and ask the user to
   review, edit if needed, and **explicitly approve** (or cancel).
3. When the user answers, send \`report_local_run_progress\` again.

Send the heartbeat **immediately before** asking and **immediately after** the
answer. Your turn is blocked while you wait for the human, so you cannot
heartbeat *during* the review \u2014 bracketing the approval prompt keeps the lease
fresh across the wait.

## Step 6 \u2014 on approval: publish and complete

1. Publish the branch as a pull request and capture the machine-readable result:

   \`\`\`bash
   "$HOME/.jolli/jollimemory/run-cli" docs publish --json
   \`\`\`

   \`--json\` prints exactly one JSON object on stdout (all human-readable progress
   goes to stderr) \u2014 parse that object; never scrape the human log for a PR number.
2. Verify the pull request landed on the server-derived work branch. \`docs publish\`
   reports the branch the PR was actually opened on as \`headBranch\` (present on both
   the public and the private/withheld paths); the run's server work branch is
   \`writeTarget.workBranch\` from Step 2. **When \`pushed\` is true, cross-check them
   deterministically** \u2014 do not eyeball it yourself:

   \`\`\`bash
   "$HOME/.jolli/jollimemory/run-cli" space verify-publish-branch <writeTarget.workBranch> <headBranch>
   \`\`\`

   It prints \`{ "match": true|false, "expected": "...", "actual": "..." }\` and exits
   non-zero when the branches differ or \`headBranch\` is missing. **If \`match\` is
   false, STOP** \u2014 the PR was opened on the wrong branch (usually because \`docs pull
   --branch <workBranch>\` in Step 3 was skipped, so space-cli generated its own
   \`jolli-<hex>\` branch). The backend cannot link the run to that PR, so it will
   **not** auto-merge and the articles will **never** publish. Tell the user the
   run-to-PR link is broken (published on \`<actual>\` instead of the expected
   \`<expected>\`) and **do NOT call \`complete_local_run\` as if the run succeeded** \u2014
   release the run with \`abandon_local_run\` (Step 7) or ask the user how to proceed.
   Skip this check only when \`pushed\` is false (nothing was published).
3. Call \`complete_local_run\` (on Claude Code
   \`mcp__jollimemory__complete_local_run\`), branching on what the publish JSON
   contained:
   - **PR refs present** (the JSON has a \`prNumber\` \u2014 a user-accessible
     destination): pass them through \u2014
     \`{ "runId": "<runId>", "prNumber": <prNumber>, "prUrl": "<prUrl>" }\`.
   - **PR refs withheld** (the JSON is \`"private": true\` with no \`prNumber\` \u2014 a
     private Jolli-managed destination whose backing repo the user cannot access):
     complete WITHOUT a PR reference \u2014 \`{ "runId": "<runId>" }\`. Do not invent,
     guess, or look up a \`prNumber\`; the run already knows its destination is private.
   - **Nothing published** (\`"pushed": false\`, e.g. \`"reason": "no-changes"\`): no PR
     was opened, so there is nothing to complete \u2014 tell the user the workflow produced
     no changes and release the run with \`abandon_local_run\` (Step 7).
4. Read the outcome and its links off \`complete_local_run\`'s result and report them.
   Every URL is read **verbatim** off the result \u2014 never construct, guess, or look up
   one. The result carries \`willAutoMerge\`, \`workflowUrl\`, \`runUrl\`, and (auto-apply
   ON only) a \`writtenArticles\` list of \`{ operation, path, url, active, ... }\`.
   - **Auto-apply on** (\`willAutoMerge: true\`): the destination auto-applies, so the PR
     is **set to auto-merge** and \u2014 once it does \u2014 the created/edited **articles are the
     artifact**. Treat \`willAutoMerge: true\` as the destination's *intent*, NOT a
     confirmation that the merge already completed \u2014 so do **not** flatly tell the user
     "PR auto-merged". Report what actually published, judged by each article's own state:
     for every \`writtenArticles\` entry that is still openable (\`active: true\` **and** a
     non-null \`url\`), present its URL as a published article. If an article is
     \`active: false\` or has \`url: null\`, publishing has **not** completed yet (the
     auto-merge and reindex may still be in progress) \u2014 tell the user that article is
     **not yet available**, never invent a URL, and note they can re-check shortly via the
     run URL or by re-running \`workflow run-status <runId>\`. Then present the workflow URL
     (\`workflowUrl\`) and the run URL (\`runUrl\`).
   - **PR left open for team review** (\`willAutoMerge: false\` \u2014 auto-apply off): the
     open **PR is the artifact**. Tell the user "PR left open for team review" and
     present the PR URL (\`prUrl\`), the workflow URL (\`workflowUrl\`), and the run URL
     (\`runUrl\`).
   - **Private Jolli-managed destination** (the result carries no \`prUrl\`): present the
     **article URLs only** (same \`active: true\` + non-null \`url\` rule) plus the workflow
     URL and run URL \u2014 never surface a repo or PR link the result did not carry. As with
     any auto-apply run, an article that is not yet \`active\` / lacks a \`url\` is **not yet
     available** (publishing still completing), not an error \u2014 say it will appear once
     published and offer the run URL to re-check.
5. Offer to open any reported URL in the user's default browser. For each URL the user
   chooses, shell:

   \`\`\`bash
   "$HOME/.jolli/jollimemory/run-cli" open-url <url>
   \`\`\`

   It prints one JSON line \`{ "opened": true|false, "url": "..." }\`. When \`opened\` is
   \`false\` (headless / no browser available) the URL is printed for the user to copy
   instead \u2014 that is normal, not a failure. Only \`https\` URLs are accepted. A URL
   whose origin is off Jolli's allowlist is refused (never launched) and printed
   instead \u2014 the result carries \`"refused": true\`; surface that URL for the user to
   open manually, not as an error.

## Step 7 \u2014 on cancel: abandon

If the user cancels at the review gate (or you must abort), release the run: call
\`abandon_local_run\` (on Claude Code \`mcp__jollimemory__abandon_local_run\`) with
\`{ "runId": "<runId>" }\`.

## If space-cli is missing at any point

Any \`docs\` command that prints an install hint (or the eligibility helper's
\`space_cli_required\` result) means the space-cli plugin is not installed. Tell the
user to install it and stop:

\`\`\`bash
npm i -g @jolli.ai/cli @jolli.ai/space-cli
\`\`\`
`}function x_(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${Qt}"
  revision: 4
  vendor: "jolli.ai"
---

# Jolli Remote Run

Run a Jolli **workflow** remotely: the Jolli backend executes the workflow
server-side (it spends Jolli LLM budget, unlike a local run), and this recipe
triggers the run, monitors it to a terminal state, and reports what it produced \u2014
the still-active article URLs, the pull-request URL when the destination is
git-backed, and the workflow/run deep-links \u2014 then offers to open any of them.

Drive the steps below in order. Prefer the Jolli MCP tools for the run lifecycle \u2014
the run tools (\`run_remote_workflow\`, \`cancel_remote_workflow\`) have **no CLI
mirror** \u2014 and shell the \`jolli\` CLI (via the run-cli entry script the sibling
skills also use) only for the deterministic monitor and the browser-open helper.

Every URL is read **verbatim** off the run report \u2014 never construct, guess, or
look one up. A link that is not in the report was withheld on purpose (for
example, a private Jolli-managed destination omits the PR link but keeps the
article URLs); treat its absence as normal, never an error.

${Lo}

## Step 1 \u2014 identify the workflow to run

Determine which workflow the user wants to run and keep its numeric \`id\`.

- If the \`list_workflows\` tool is registered this session (on Claude Code
  \`mcp__jollimemory__list_workflows\`), call it to list the available workflows and
  present them to the user by \`name\` (use your host's interactive single-select
  tool if it has one \u2014 e.g. AskUserQuestion on Claude Code \u2014 otherwise list them as
  text). Keep the chosen workflow's \`id\`.
- Otherwise, ask the user which workflow to run and get its numeric \`id\`.

## Step 2 \u2014 confirm the run monitor is installed (before triggering)

The run trigger (\`run_remote_workflow\`) is a Jolli **backend** tool: it creates a
real, budget-spending run **even when the deterministic monitor is not installed**.
The monitor (\`workflow run-status\`, Step 4) is provided by the
\`@jolli.ai/workflow-cli\` plugin. So confirm that plugin is present **before**
triggering \u2014 otherwise a missing monitor would leave the run you are about to
create orphaned (still running server-side, with no way for this recipe to report
its outcome).

Run the plugin's eligibility helper purely as a presence probe and read its JSON:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" workflow local-run
\`\`\`

- \`{ "type": "workflow_cli_required", "installHint": "..." }\` \u2014 the workflow-cli
  plugin is **not installed**. Do **not** trigger the run. Tell the user to install
  it (run the \`installHint\`) and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
  \`\`\`

- **any other result** (\`workflows\`, \`space_cli_required\`, or \`error\`) \u2014 the plugin
  **is** installed (only its stub ever emits \`workflow_cli_required\`), so the monitor
  is available. Ignore the rest of this probe's output \u2014 it reports *local*-run
  eligibility, which does not gate a remote run \u2014 and proceed to Step 3.

## Step 3 \u2014 trigger the remote run

Call the \`run_remote_workflow\` tool (on Claude Code
\`mcp__jollimemory__run_remote_workflow\`) with the chosen workflow's id, passed as
an **unquoted number**: \`{ "id": <workflow id> }\` (add \`templateVariables\` only if
the workflow needs them). Capture \`runId\` from its result (\`{ "runId": "..." }\`) \u2014
that handle drives the monitor in Step 4.

## Step 4 \u2014 monitor the run to completion

Shell the deterministic monitor with the captured \`runId\`:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" workflow run-status <runId>
\`\`\`

It polls the run to a terminal state (with backoff, so you do not drive the poll
loop yourself) and prints exactly one JSON line \u2014 the run report. Parse it:

- \`status\` \u2014 one of \`"succeeded"\`, \`"failed"\`, \`"cancelled"\`, \`"running"\`.
- \`openableUrls\` \u2014 an array of \`{ "kind": "workflow" | "run" | "article" | "pr", "url": "...", "label": "..." }\`.
  Only openable URLs appear here (active articles with a non-null url, a PR only
  when the payload carried one) \u2014 present exactly these, nothing more.
- \`cancel\` (cancelled runs) \u2014 \`{ "by": "...", "at": "..." }\` when known.
- \`troubleshooting\` (failed runs) \u2014 the actionable error detail.
- \`timedOut\` \u2014 \`true\` when the monitor stopped polling before the run reached a
  terminal state (see the "still running" case below).

If the command instead prints \`{ "type": "error", "message": "..." }\` (the run
could not be reached \u2014 platform tools off, or a transport failure), tell the user
the run status could not be retrieved and stop. That is a degraded outcome, not a
crash \u2014 the run may still be progressing server-side.

If instead the command exits non-zero and prints a prose install hint naming
\`@jolli.ai/workflow-cli\` (rather than a JSON report line), the workflow-cli plugin
is not installed. Tell the user to install it and stop:

\`\`\`bash
npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
\`\`\`

## Step 5 \u2014 report the outcome

Report based on \`status\`:

- **succeeded** (\`status: "succeeded"\`): the run finished. Present the \`article\`
  URLs from \`openableUrls\` (each by its \`label\`), the \`pr\` URL if one is present,
  and the \`workflow\` and \`run\` deep-links. Never surface a link that is not in
  \`openableUrls\` \u2014 a missing PR link means the destination withheld it (a private
  Jolli-managed destination), which is normal.
- **failed** (\`status: "failed"\`): the run failed. Present the \`troubleshooting\`
  detail (the actionable error) and the \`workflow\` URL.
- **cancelled** (\`status: "cancelled"\`): the run was cancelled. Report who
  (\`cancel.by\`) and when (\`cancel.at\`) when present, plus the \`workflow\` URL.
- **still running** (\`status: "running"\` with \`timedOut: true\`): the monitor
  stopped polling before the run reached a terminal state \u2014 the run is **still
  running server-side**, not failed. Tell the user it is still in progress, present
  the \`workflow\` URL so they can watch it, and note they can re-check later by
  re-running \`workflow run-status <runId>\`.

## Step 6 \u2014 offer to open any reported URL

Offer to open any URL from the report in the user's default browser. For each URL
the user chooses, shell:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" open-url <url>
\`\`\`

It prints one JSON line \`{ "opened": true|false, "url": "..." }\`. When \`opened\` is
\`false\` (headless / no browser available) the URL is printed for the user to copy
instead \u2014 that is normal, not a failure. Only \`https\` URLs are accepted. A URL whose
origin is off Jolli's allowlist is refused (never launched) and printed instead \u2014 the
result carries \`"refused": true\`; surface that URL for the user to open manually, not
as an error.

## Cancelling an in-flight run

While a remote run is still in progress, the user can stop it: call
\`cancel_remote_workflow\` (on Claude Code
\`mcp__jollimemory__cancel_remote_workflow\`) with the workflow's numeric id \u2014
\`{ "id": <workflow id> }\`. After cancelling, re-run \`workflow run-status <runId>\`
to report the cancelled outcome (who/when + workflow URL).
`}function P_(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills available in this session (recall, search, run a workflow local or remote, workflow history, plus any setup and account skills a Jolli plugin adds) and the Jolli MCP tools, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${Qt}"
  revision: 7
  vendor: "jolli.ai"
---

# Jolli

The single umbrella action menu for Jolli. It ties together the standalone Jolli
skills and whatever Jolli MCP tools are registered in this session, and routes the
user's choice to the right one. It is a friendly front door \u2014 it **never**
re-implements any action, it only invokes an existing skill or an existing MCP
tool. The standalone \`/jolli-recall\`, \`/jolli-search\` commands and
the \`/mcp__jollimemory__jolli\` prompt all keep working unchanged; this is layered
on top of them, not a replacement.

The **Workflow history** action below shells the \`jolli\` CLI (via the run-cli
entry script), so the shell prerequisite applies when that action is used.

${Lo}

## Step 1 \u2014 build the unified menu

Assemble ONE combined list of actions from two sources.

### Local Jolli skills

Offer the \`jolli-*\` skills that are ACTUALLY AVAILABLE in this session, not a
fixed list \u2014 exactly as with the MCP tools below. The four described here ship
everywhere, so they are documented in full; a host that also has a Jolli plugin
installed (Cursor, Codex, Claude Code) additionally exposes setup and account
skills such as \`jolli-init\`, \`jolli-login\`, \`jolli-logout\`, \`jolli-status\`,
\`jolli-timeline\` and \`jolli-push\`. Include whichever of those exist, named as
this host invokes them, and route by invoking the skill rather than restating its
steps. If the user asks for something one of them owns \u2014 setting Jolli up, signing
in, checking installation health, publishing this branch's memories \u2014 route there
instead of answering that the menu has no such action.

- **jolli-recall** \u2014 Recall prior development context for the current branch.
  Route by invoking the \`jolli-recall\` skill.
- **jolli-search** \u2014 Search structured commit memories across branches
  (decisions, topics, files). Route by invoking the \`jolli-search\` skill.
- **Run a workflow** \u2014 Run a Jolli workflow. When the user picks this, ask them
  **local vs remote**, defaulting to **local**:
  - **local (default)** \u2014 your agent executes the workflow's recipe on this
    machine (no Jolli LLM budget); the writes land in a git-backed Space via a
    branch + PR. Route by invoking the \`jolli-local-run\` skill.
  - **remote** \u2014 the Jolli backend executes the workflow server-side, and the run
    is monitored to completion and its result reported. Route by invoking the
    \`jolli-remote-run\` skill (which drives the \`run_remote_workflow\` tool for
    you) \u2014 not by calling the raw tool.

  A running **remote** run can be canceled with the \`cancel_remote_workflow\` MCP
  tool (\`mcp__jollimemory__cancel_remote_workflow\`) \u2014 offer this if the user
  wants to stop an in-flight remote run.
- **Workflow history** \u2014 Show a workflow's past runs. When the user picks this,
  identify the workflow's numeric id (if the \`list_workflows\` tool is registered
  this session, use it to let the user pick one by name; otherwise ask for the
  id), then shell:

  \`\`\`bash
  "$HOME/.jolli/jollimemory/run-cli" workflow runs <workflowId>
  \`\`\`

  It prints \`{ "type": "runs", "runs": [ ... ] }\` \u2014 one entry per run with its
  \`status\`, \`timestamp\`, and any \`workflowUrl\` / \`runUrl\` / \`prUrl\` /
  \`articleUrls\`. An empty \`runs\` list is the normal "no history yet" outcome, not
  an error. If instead the command exits non-zero and prints an install hint naming
  \`@jolli.ai/workflow-cli\` (rather than the JSON above), the workflow-cli plugin is
  not installed \u2014 tell the user to install it (\`npm i -g @jolli.ai/cli @jolli.ai/workflow-cli\`)
  and stop. Offer to open any listed URL via the \`open-url\` helper:

  \`\`\`bash
  "$HOME/.jolli/jollimemory/run-cli" open-url <url>
  \`\`\`

  (\`{ "opened": true|false, "url": "..." }\`; \`opened: false\` on a headless host
  just prints the URL \u2014 normal, not a failure. Only \`https\` URLs are accepted. A URL
  whose origin is off Jolli's allowlist is refused (never launched) and printed \u2014 the
  result carries \`"refused": true\`; surface it for the user to open manually.)

Route a local, remote, or history choice by invoking that skill through your
host's skill-invocation mechanism (for example, the Skill tool in Claude Code);
the Workflow history action runs its \`run-cli\` commands directly as shown above.

### Jolli MCP tools (whatever is registered this session)

Surface every jollimemory MCP tool registered in the current session \u2014 for example
\`recall\`, \`search\`, \`get_pr_description\`, \`queue_status\`, and any
manifest-driven platform tools (space, article, and the like). Route a choice by
calling the matching tool.

**How to find them depends on the host.** On Claude Code they are prefixed, so
match names starting with \`mcp__jollimemory__\`. On Codex the same tools are BARE
names inside the \`mcp__jollimemory\` namespace, so a prefix match finds nothing \u2014
look for the namespace instead, and note that Codex loads MCP tools lazily, so
search your available tools before concluding none are registered.

**Exclusions \u2014 do NOT surface these as standalone menu items:**

- \`list_workflow_definitions\` \u2014 discovery/plumbing, not a human quick-action.
- \`run_remote_workflow\` and \`cancel_remote_workflow\` \u2014 these are already covered
  by the **Run a workflow** action above (its *remote* path and its cancellation
  option); don't list them again as raw tools.

Do NOT assume a fixed list \u2014 enumerate the Jolli MCP tools that are actually
registered right now, minus the exclusions above. Do NOT try to fetch or
re-derive any backend "menu" curation; a skill cannot read the manifest, so
simply surface the Jolli MCP tools present in the session. If no Jolli MCP tools
are registered, present just the local skills above.

## Step 2 \u2014 route the request

This skill takes one optional free-text argument.

- **Argument provided** \u2192 match it to exactly one menu action and invoke that
  action directly (invoke the skill, or call the MCP tool). Only ask the user to
  choose if the request is ambiguous or matches no menu action.
- **Argument absent** \u2192 present the unified menu and let the user pick one, using
  an interactive single-select tool if your host provides one (for example
  AskUserQuestion in Claude Code); otherwise list the options as plain text and
  ask the user to choose. After the user selects, invoke the corresponding skill
  or MCP tool.

Host-agnostic by design: the AskUserQuestion mention is only an example; the
text-list fallback keeps \`/jolli\` usable on every host that loads skills.
`}function A_(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${Qt}"
  revision: 8
  vendor: "jolli.ai"
---

# Jolli

The single front door for Jolli. Rather than dumping a static list, it reads how
Jolli is set up in THIS repo and guides the next step: if setup is incomplete it
walks the user into \`/jolli:init\`; if memories are being captured but cannot be
shared yet it reminds the user to sign in; once everything is wired it shows a
short status snapshot and routes the user's choice to the right skill or Jolli
MCP tool. It is a friendly front door \u2014 it **never** re-implements any action, it
only reads status and invokes an existing skill or an existing MCP tool. The
standalone \`/jolli:init\`, \`/jolli:recall\`, \`/jolli:search\`, \`/jolli:push\`,
\`/jolli:login\`, \`/jolli:logout\`, \`/jolli:status\` and \`/jolli:timeline\`
entry points all keep working unchanged; this is layered on top of them, not a
replacement.

## Step 0 \u2014 confirm this menu can route

This menu is a project skill written OUTSIDE the Jolli plugin (a plugin skill
could only ever be \`/jolli:<name>\`, never a bare \`/jolli\`), so it can linger
in \`.claude/skills/jolli/\` after the plugin has been uninstalled. It can only
route to targets that exist in THIS session, so before doing anything else
confirm at least one routing target is available. The menu can route if
**either** of these holds:

- one or more MCP tools whose name contains \`jollimemory\` are registered, **or**
- the plugin's own namespaced skills (\`jolli:init\` / \`jolli:recall\` /
  \`jolli:search\` / \`jolli:push\`) are invocable this session.

If **either** holds, proceed to Step 1.

If **neither** holds, do **not** build the menu and do **not** invoke any
\`/jolli:*\` skill \u2014 it is not registered and the call will fail. But this alone
does NOT mean Jolli is gone: the Jolli CLI installs a memory pipeline that runs
independently of this plugin (git hooks that generate memories on every commit).
So distinguish the two cases \u2014 check whether the bundled CLI dispatch exists by
running \`test -f "$HOME/.jolli/jollimemory/run-cli" && echo present\`:

- **CLI present** \u2192 Jolli still works; only the plugin's interactive menu is not
  loaded in this session. Tell the user plainly: the Jolli plugin menu isn't
  loaded here, but the Jolli CLI is still installed \u2014 commits still generate
  memories, and they can run \`jolli recall\` / \`jolli search\` directly. This
  \`/jolli\` file is a leftover from a previous plugin install; they can remove
  it with \`rm -rf .claude/skills/jolli\`, and reinstall the Jolli plugin to
  bring the menu back.
- **CLI absent** \u2192 Jolli is no longer installed at all. Tell the user this
  \`/jolli\` menu is a stale leftover; they can remove it with
  \`rm -rf .claude/skills/jolli\`, and (re)install Jolli to bring it back.

Either way, then stop \u2014 do not continue to Step 1.

## Step 1 \u2014 read how Jolli is set up

Before deciding what to show, read the current state so you can guide instead of
guessing. This is the state-aware front door \u2014 not a static list.

**Preferred (MCP):** call the \`status\` tool (on Claude Code
\`mcp__jollimemory__status\`) with no arguments. From its result read:

- \`enabled\` \u2014 are Jolli's git hooks installed in this repo (is memory
  generation on)?
- \`account.signedIn\` \u2014 is the user signed in to Jolli?
- \`account.jolliApiKeyConfigured\` \u2014 is a stored Jolli API key present? Surfaced
  ONLY when signed OUT (a sign-in already implies a Jolli credential, so the field
  is omitted once \`account.signedIn\` is true).
- \`account.anthropicKeyConfigured\` \u2014 is an Anthropic key present? Surfaced ONLY
  when \`account.aiProvider === "anthropic"\`; omitted for every other provider.
- \`account.aiProvider\` \u2014 \`"local-agent"\` | \`"jolli"\` | \`"anthropic"\` | \`null\`.
  Drives the provider-aware generation check in Step 2.
- \`account.localAgentTool\` \u2014 label of the local agent CLI that generates
  summaries (e.g. "Claude Code"). Surfaced ONLY when
  \`account.aiProvider === "local-agent"\`; feeds the snapshot's engine suffix.
- \`account.site\` \u2014 the Jolli site host, for the snapshot line.
- \`storedMemories\` \u2014 how many memories this repo already has.
- \`space\` \u2014 the bound Jolli Space (\`{ name }\`) this repo's memories sync to, or
  \`null\` when the repo isn't bound yet. Drives the \`syncing \xB7 Space\` snapshot line.

**Fallback (CLI):** if the \`status\` MCP tool is unavailable (an older Jolli),
run the bundled CLI through its stable dispatch script and read the same facts
from its printed output:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" status
\`\`\`

If neither the tool nor the CLI can be reached at all, skip the state-based
guidance and go straight to Step 3's menu (present it without a snapshot).

Note: \`status.space\` is display-only \u2014 it names the bound Space for the snapshot
but does NOT confirm push health. Full binding management (picking / re-binding a
Space) stays \`/jolli:init\`'s and \`/jolli:push\`'s job; do not try to (re)bind here.

## Step 2 \u2014 guide by state (the front door)

Derive two capabilities from Step 1, mirroring the CLI's guided front door:

- **can generate memories** \u2014 provider-AWARE, NOT a blind OR of every field.
  Read \`account.aiProvider\` and decide:
  - \`local-agent\` \u2192 **yes** (memories generate through the user's local agent CLI
    named by \`account.localAgentTool\` \u2014 no API key and no Jolli sign-in required).
    This is the plugin's default, so a freshly-installed plugin repo can already
    generate.
  - \`jolli\` \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  - \`anthropic\` \u2192 yes only if \`account.anthropicKeyConfigured\`.
  - \`null\` / unset \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.

  (For the Jolli proxy a sign-in DOES carry a generation credential \u2014 signing in
  mints a Jolli API key \u2014 which is why \`jolliApiKeyConfigured\` is omitted once
  signed in. For the \`anthropic\` provider, sign-in alone does NOT count.)
- **can sync memories** = \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  Provider-independent: syncing to a Jolli Space always needs a **Jolli**
  credential, so an Anthropic key never satisfies it. This axis is orthogonal to
  generation \u2014 the default \`local-agent\` repo generates fine while unable to
  sync, which is exactly the state the Step 2 sign-in nudge below exists for.
- **enabled** = the \`enabled\` flag.

Then take exactly one branch:

- **Not fully set up** \u2014 \`enabled\` is false, OR memories can't be generated:
  memory generation isn't wired yet, so lead with SETUP, not the action menu.
  State in one line what's missing (for example "not signed in, and memory
  generation is off for this repo"), then invoke the \`jolli:init\` skill through
  the Skill tool \u2014 it walks sign-in \u2192 enable \u2192 bind a Space in one guided pass.
  Do NOT hand-roll those steps here; \`/jolli:init\` owns them. (Exception: if the
  user gave an argument in Step 3 that clearly names a different action, honor
  that instead \u2014 see Step 3.)

- **Fully set up** \u2014 enabled AND a credential present: print a short snapshot,
  then continue to Step 3 to present the action menu.

  \`\`\`
  \u2713 signed in \xB7 <account.site> \xB7 summaries via <account.localAgentTool>
  \u2713 enabled \xB7 <storedMemories> memories
  \u2713 syncing \xB7 Space "<space.name>"    (ONLY when \`space\` is non-null; omit the whole line otherwise)

  Jolli is listening \u2014 last memory saved.
  \`\`\`

  Pick the FIRST line by state, mirroring the CLI front door's wording exactly:

  - signed in \u2192 \`\u2713 signed in \xB7 <account.site>\`, plus \` \xB7 summaries via
    <account.localAgentTool>\` when \`account.aiProvider\` is \`local-agent\`. Drop
    the \`\xB7 <site>\` segment when \`account.site\` is null.
  - not signed in, \`local-agent\` \u2192 \`\u2713 local agent set (not signed in to Jolli)\`.
  - not signed in, \`jolli\` \u2192 \`\u2713 Jolli API key set (not signed in to Jolli)\`.
  - not signed in, \`anthropic\` \u2192 \`\u2713 Anthropic API key set (not signed in to Jolli)\`.

  Render the \`\u2713 syncing \xB7 Space "<space.name>"\` line **only when \`space\` is
  non-null** \u2014 it means a \`git push\` auto-publishes this branch's memories to that
  Space (the pre-push hook does it). When \`space\` is null, drop that line entirely;
  do not print a "not bound" line here (binding is \`/jolli:init\`'s job).

  The closing \`Jolli is listening \u2014 \u2026\` line mirrors the CLI front door: use
  **"last memory saved."** when \`storedMemories\` > 0, or **"your next commit is your
  first memory"** when \`storedMemories\` is 0.

  If \`storedMemories\` is 0, still show the menu, but Step 3 leads it with
  \`/jolli:init\` (on a fresh repo recall / search would only return empty, so
  they must not be the default action).

### Sign-in nudge \u2014 only when **can sync** is false

Generation working does not mean memories are shared. When the user can generate
but **can sync** is false (the normal state of a fresh \`local-agent\` install),
add ONE line under the snapshot, mirroring the CLI front door's optional
sign-in step:

\`\`\`
Sign in to Jolli to sync memories to a Space? (/jolli:login \u2014 memory generation keeps running locally either way)
\`\`\`

Rules for the nudge:

- It is **non-blocking**. Never withhold the Step 3 menu waiting for an answer,
  and never treat "not signed in" as broken \u2014 the repo is capturing memories.
- Offer it **once** per invocation. If the user declines, drop it for the rest of
  the session and do not repeat it after later actions.
- If the user accepts, hand off to the existing login flow: tell them to run
  \`/jolli:login\` (a skill cannot invoke a slash command for them), or invoke
  \`jolli:init\` when they also want to bind a Space in the same pass. Do NOT run
  \`auth login\` yourself here \u2014 \`/jolli:login\` owns that flow.
- Skip the nudge entirely when **can sync** is true, and inside the "Not fully
  set up" branch (there \`/jolli:init\` already walks sign-in).

## Step 3 \u2014 route the request / present the menu

This skill takes one optional free-text argument.

- **Argument provided** \u2192 match it to exactly one action below and invoke that
  action directly (invoke the skill, or call the Jolli MCP tool), regardless of
  the Step 2 state \u2014 a specific request wins over the setup nudge. The invoked
  skill handles its own preconditions (for example \`/jolli:push\` will offer to
  bind a Space if the repo isn't bound). Only ask the user to choose if the
  request is ambiguous or matches no action.
- **Argument absent** \u2192 after the Step 2 guidance, present the action menu and
  let the user pick, using an interactive single-select tool if your host
  provides one (for example AskUserQuestion in Claude Code); otherwise list the
  options as plain text and ask. Bias the ordering to the state: when
  \`storedMemories\` is 0, lead with \`/jolli:init\` as the FIRST (default)
  option \u2014 finish setup / bind a Space, or just make the first commit \u2014 and
  demote recall / search below it, since on a fresh repo both would only
  return empty. When memories exist, lead instead with recall / search. Either
  way keep \`/jolli:init\` available for re-running setup or re-binding a Space.
  After the user selects, invoke the corresponding skill or MCP tool.

### Jolli plugin skills

List a plugin skill only if it was confirmed available in Step 0.

- **/jolli:init** \u2014 Set up Jolli for this repo: sign in if needed, enable memory
  generation, and bind the repo to a Jolli Space. Route by invoking the
  \`jolli:init\` skill.
- **/jolli:recall** \u2014 Recall prior development context for the current branch.
  Route by invoking the \`jolli:recall\` skill.
- **/jolli:search** \u2014 Search structured commit memories across branches
  (decisions, topics, files). Route by invoking the \`jolli:search\` skill.
- **/jolli:push** \u2014 Publish this branch's memories to a Jolli Space. Route by
  invoking the \`jolli:push\` skill.

Route a local choice by invoking that skill through the Skill tool.

### Jolli plugin commands

The plugin also ships these as slash **commands**, so they belong in the menu \u2014
but a skill cannot invoke a command. Route a choice by telling the user to run
it (one line, with the command spelled out), or by calling the equivalent Jolli
MCP tool when one exists.

- **/jolli:login** \u2014 Sign in to Jolli so this repo can bind a Space and share
  memories. Surface this whenever **can sync** is false, even if the user did not
  pick it. Generation is unaffected by signing in.
- **/jolli:logout** \u2014 Clear the stored Jolli credentials.
- **/jolli:status** \u2014 Full installation / queue health. Prefer the \`status\` MCP
  tool when it is registered.
- **/jolli:timeline** \u2014 How one decision topic evolved. Prefer the
  \`get_decision_timeline\` MCP tool when it is registered.

### Jolli MCP tools (whatever is registered this session)

Surface every tool whose name contains \`jollimemory\` that is available in the
current session \u2014 for example \`recall\`, \`search\`, \`get_pr_description\`,
\`queue_status\`, \`status\`, and the Jolli Space tools (\`list_spaces\`,
\`bind_space\`, \`push_memory\`). Route a choice by calling the matching Jolli
MCP tool.

Do NOT assume a fixed list \u2014 enumerate the Jolli MCP tools that are actually
registered right now. If no Jolli MCP tools are registered, present just the
plugin skills above.
`}var N=p("Installer");function D_(t,e){return process.platform==="linux"?t===e:t.toLowerCase()===e.toLowerCase()}async function N_(t){let e=await Ce(),r=Rf(e.globalInstructions);if(r.write){let n=t?.codexDetected??await Fi(),o=t?.geminiDetected??await qi();await Tf({claude:e.claudeEnabled!==!1,gemini:o&&e.geminiEnabled!==!1,codex:n&&e.codexEnabled!==!1})}else r.remove&&await vf()}async function ih(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0,i=e?.repoHooksOnly===!0;if(o&&i)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:n};if(!await ln(r))return N.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",r),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${r})`,warnings:n};N.info(i?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let s=null;try{let a=await Ce(),l=e?.automatic?[r]:await vt(r),c=e?.automatic?{timeoutMs:200,pollMs:25}:void 0,d=(0,wt.dirname)((0,oh.fileURLToPath)(__jmImportMetaUrl)),u=e?.source??"cli",f=e?.sourceTag??(u==="vscode-extension"?zs(d):"cli");if(!Lr(f))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(f)}`,warnings:n};let m=Uu(f),w=async()=>{if(!await ea())return!1;try{await ff()}catch(E){N.warn("Legacy dist-path migration failed (non-fatal): %s",E.message)}if(!await Mr(f,e?.distDir))return!1;try{let E=await mf();E.length>0&&N.info("Pruned stale dist-paths entries: %s",E.join(", "))}catch(E){N.warn("Pruning stale dist-paths failed (non-fatal): %s",E.message)}return!0},C=c?await ni(w,c):await ni(w);if(!C.acquired||C.value!==!0)return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:n};if(!o){if(s=c?await lr(r,c):await lr(r),!s)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};if(e?.respectManualDisable&&await Ze(r))return{success:!0,message:"Repository remains manually disabled",warnings:n,manuallyDisabled:!0};if(!e?.automatic)try{let E=await Ju(f,a);E!==null&&(E.changedTool||E.seededProvider)&&(N.info("Plugin init recorded localAgentTool=%s (source %s, previous %s, seededProvider=%s)",E.tool,f,E.previousTool??"unset",E.seededProvider),E.changedTool&&E.previousTool!==void 0&&n.push(`Recorded ${Pe(E.tool)} as the local agent for memory generation (was: ${Pe(E.previousTool)}). Change it back with jolli configure --set localAgentTool=${E.previousTool}`))}catch(E){n.push(`Could not record the local agent tool for this host: ${E.message}`)}}let T=i?!1:await Fi(),S=i?!1:await qi(),D=i?!1:await uu(),O=i?!1:await Ku(),J=i?!1:await iu(),Ee=i?!1:await Qc(),Y=i?!1:await Gc()||await Bc(),Xe=i?!1:await Wi(),Et=i?!1:await Zi(),Zt=i?!1:await Ui(),er=i?!1:await Kc(),zr=i?!1:await mu(),Ca=i?!1:await Dc(),xa=i?!1:await Hu(),tr={};for(let E of l){let bt=await ki(E),Rh=(0,wt.join)(bt,"sessions.json");try{await(0,Mo.writeFile)(Rh,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(Le){Le.code!=="EEXIST"&&N.warn("Failed to bootstrap sessions.json in %s: %s",E,Le.message)}if(i){if(await ya(E),m==="claude"){if(await Yf(E),await rh(E),await oa(E,[...No]),a.claudeEnabled!==!1){let Le=await Cs(E);(E===r||tr.path===void 0)&&(tr=Le)}}else if(m==="cursor"){let Le={claude:!1,codex:!1,cursor:!0,gemini:!1,opencode:!1,copilot:!1,copilotChat:!1,cline:!1,devin:!1,antigravity:!1,kimi:!1};await fa(E,Le),await oa(E,[...Yt(Le).flatMap(Th=>Th.gitExcludePaths()),...Qf])}await Ea(E);continue}await Xf(E,{claudeEnabled:a.claudeEnabled});let Na={claude:a.claudeEnabled!==!1,codex:T,cursor:Xe,gemini:S,opencode:Et,copilot:Zt,copilotChat:Ee,cline:er,devin:zr,antigravity:Ca,kimi:xa};if(await wf(E,[...Kf,...No,...Yt(Na).flatMap(Le=>Le.gitExcludePaths())]),await fa(E,Na),o||a.claudeEnabled===!1)continue;let Fo=await Cs(E);Fo.warning&&n.push(Fo.warning),(E===r||tr.path===void 0)&&(tr=Fo)}await Uf({claude:!1,cursor:!1,codex:T||i&&m==="codex",gemini:S,opencode:Et,copilot:Zt,copilotChat:Ee,cline:er,devin:zr,antigravity:Ca,kimi:xa}),i||await N_({codexDetected:T,geminiDetected:S});let Qr={},Zr={},en={},tn={},rn={};o||(Qr=await wc(r),Qr.warning&&n.push(Qr.warning),Zr=await Sc(r),Zr.warning&&n.push(Zr.warning),en=await Ec(r),en.warning&&n.push(en.warning),tn=await bc(r),tn.warning&&n.push(tn.warning),rn=await kc(r),rn.warning&&n.push(rn.warning)),T&&a.codexEnabled===void 0&&(await at({codexEnabled:!0}),N.info("Codex detected \u2014 enabled Codex session discovery"));let jo;if(S&&a.geminiEnabled!==!1){if(!o)for(let E of l){let bt=await ta(E);(E===r||jo===void 0)&&(jo=bt.path)}a.geminiEnabled===void 0&&(await at({geminiEnabled:!0}),N.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&O&&a.openCodeEnabled===void 0&&(await at({openCodeEnabled:!0}),N.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let _h=i?!1:await su(),Pa=a.cursorEnabled!==!1&&D,Aa=a.cursorEnabled!==!1&&_h;(Pa||Aa)&&a.cursorEnabled===void 0&&(await at({cursorEnabled:!0}),N.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",Pa,Aa));let Ia=a.copilotEnabled!==!1&&J,Da=a.copilotEnabled!==!1&&Ee;if((Ia||Da)&&a.copilotEnabled===void 0&&(await at({copilotEnabled:!0}),N.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",Ia,Da)),Y&&a.clineEnabled===void 0&&(await at({clineEnabled:!0}),N.info("Cline detected \u2014 enabled Cline session discovery")),!i)for(let E of l)await O_(E);if(e?.source==="vscode-extension")N.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(i)N.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let E=await mp(r);N.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",E.alreadyDone,E.fresh,E.migrated,E.skipped)}catch(E){N.warn("Schema v5 migration failed (non-fatal): %s",E.message)}if(e?.clearManualDisableOnSuccess&&!o)try{await li(r,!1)}catch(E){let bt=E.message;n.push(`Enabled, but could not clear the manual-disable opt-out (${bt}). Run enable again to clear it.`),N.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",bt)}return N.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:n,claudeSettingsPath:tr.path,gitHookPath:Qr.path,postRewriteHookPath:Zr.path,prepareMsgHookPath:en.path,postMergeHookPath:tn.path,prePushHookPath:rn.path,geminiSettingsPath:jo}}catch(a){let l=`Installation failed: ${a.message}`;return N.error(l),{success:!1,message:l,warnings:n}}finally{s&&await s.release()}}async function O_(t){let e=K(t);try{await(0,Mo.stat)(e)}catch{return}let r=re();if(D_((0,wt.resolve)(e),(0,wt.resolve)(r)))return;let n=await At(e),o={};for(let[c,d]of Object.entries(n))d!==void 0&&(o[c]=d);if(Object.keys(o).length===0)return;let i=await At(r),s={};for(let[c,d]of Object.entries(o))i[c]===void 0&&(s[c]=d);Object.keys(s).length>0&&await En(s,r);let a={};for(let c of Object.keys(s))a[c]=void 0;Object.keys(a).length>0&&await En(a,e);let l=Object.keys(o).filter(c=>!(c in s));for(let c of l)N.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",t,c,String(o[c]),String(i[c]));N.info("Migrated %d config fields from worktree %s to global",Object.keys(s).length,t)}async function sh(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0;N.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let i=null;try{if(!o&&!e?.repoLockHeld&&(i=await lr(r),!i))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};!o&&e?.persistManualDisable&&await li(r,!0);let s;try{s=await vt(r)}catch{s=[r]}if(o){for(let l of s)try{await ha(l)}catch(c){N.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return N.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:n}}for(let l of s){let c=await xs(l);c.warning&&n.push(c.warning),await ra(l);try{await ha(l)}catch(d){N.warn("MCP removal failed in %s (non-fatal): %s",l,d.message)}e?.preserveMenu||await th(l),await eh(l)}let a=await _c(r);return a.warning&&n.push(a.warning),await Rc(r),await Tc(r),await vc(r),await Cc(r),e?.preserveMenu||await Sf(r,Vf),n.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),N.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:n}}catch(s){let a=`Uninstallation failed: ${s.message}`;return N.error(a),{success:!1,message:a,warnings:n}}finally{i&&await i.release()}}h();function $o(){return new Promise((t,e)=>{let r=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",n=>r.push(n)),process.stdin.on("end",()=>{process.stdin.destroy(),t(r.join(""))}),process.stdin.on("error",e)})}var ne=require("node:fs"),Se=require("node:path"),uh=require("node:url");oe();function ah(t){return t.aiProvider==="local-agent"?!0:t.aiProvider==="jolli"?!!t.jolliApiKey:t.aiProvider==="anthropic"?!!(t.apiKey||process.env.ANTHROPIC_API_KEY):!!(t.apiKey||process.env.ANTHROPIC_API_KEY||t.jolliApiKey)}et();ce();h();ke();function L_(t){return[`1) Re-authenticate ${Pe(t)}:  ${Wu(t)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function M_(t,e){let r=Bu(t);return r===null?[]:[`${e}${r}`]}function lh(t){return[`[Jolli Memory] Memory generation failed for a recent commit: ${Pe(t)} authentication expired or is unavailable.`,...M_(t,""),"\u2192 Fix with either:",...L_(t).map(e=>`    ${e}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var we=p("SessionStartHook"),$_=new Set(["main","master","develop","development","staging","production"]),_a=500,dh="login-reminder-dismissed";function j_(t){let e=zi(t,"init");return e===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${e} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${dh}.)`].join(`
`)}function F_(t,e,r){return e||r?null:j_(t)}async function ph(t,e){let r=Vn(t);if(r===void 0||e.aiProvider!==void 0)return!1;try{return await bn(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",localAgentTool:r},result:!0}:{update:null,result:!1})?(we.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,t),!0):(we.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",t),!1)}catch(n){return we.info("Failed to seed default local-agent provider: %s",n.message),!1}}async function H_(t,e=ts()){let r=await Ce(),n=ah(r),o=(0,Se.join)(t,".jolli","jollimemory",dh),i=(0,ne.existsSync)(o);if(n&&i)try{(0,ne.rmSync)(o)}catch{}return F_(e,n,i)}async function mh(t,e){return(await Xd(e)).readFile(`summaries/${t}.json`)}async function U_(t,e){try{let r=await mh(t,e);return r?pd(JSON.parse(r)):!1}catch(r){return we.info("Failed to check auth-failure state for %s: %s",t.substring(0,8),r.message),!1}}async function J_(t,e=ts()){let r=Vn(e);if(r===void 0)return null;let n=gh(t);if(!n)return null;let o=await no(t);if(!o)return null;let i=o.entries.filter(l=>l.branch===n&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(i.length===0)return null;let s=[...i].sort((l,c)=>new Date(X(c)).getTime()-new Date(X(l)).getTime())[0];if(!await U_(s.commitHash,t))return null;let a=await Ce();return lh(a.localAgentTool??r)}async function W_(){if(on()){we.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await $o(),{cwd:e}=JSON.parse(t),r=Va(e??process.cwd());if(sn(r),we.info("SessionStartHook invoked (cwd=%s)",r),await Ze(r)){we.info("SessionStart hook skipped \u2014 repository manually disabled");return}let n=await Ta(r,"shared",{includeBriefing:!0,includePluginReminders:!1});n?process.stdout.write(n):we.info("No briefing or reminder generated (skipped or timed out)")}catch(t){we.info("SessionStartHook failed: %s",t.message)}}async function Ta(t,e,r={}){let n=r.includeBriefing!==!1,o=r.includePluginReminders!==!1,[i,s,a]=await Promise.all([n?Promise.race([B_(t,e),Ra(_a)]):Promise.resolve(null),o?Promise.race([J_(t,e),Ra(_a)]):Promise.resolve(null),o?Promise.race([H_(t,e),Ra(_a)]):Promise.resolve(null)]),l=[s,a,i].filter(c=>!!c);return l.length===0?null:(we.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function B_(t,e){let r=gh(t);if(!r||$_.has(r))return null;let n=z_(t,r,e);if(n)return n;let o=await no(t);if(!o)return null;let i=o.entries.filter(w=>w.branch===r&&(w.parentCommitHash===null||w.parentCommitHash===void 0));if(i.length===0)return null;let s=[...i].sort((w,C)=>new Date(X(C)).getTime()-new Date(X(w)).getTime()),a=s[0],l=s[s.length-1];if(s.length===1&&Z_(X(a)))return null;let c=await q_(a.commitHash,t),d=G_(t,r),u=K_(s),f=V_(r,s,a,l,c,d,u,e),m=hh(t);return Q_(t,r,m??a.commitHash,f,e),f}async function q_(t,e){try{let r=await mh(t,e);if(!r)return{lastTopicTitle:null,keyDecisions:[]};let n=JSON.parse(r),o=Ft(n),i=o.length>0?o[o.length-1].title:null,s=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&s.push(a.decisions);return{lastTopicTitle:i,keyDecisions:s}}catch(r){return we.info("Failed to load last summary: %s",r.message),{lastTopicTitle:null,keyDecisions:[]}}}function G_(t,e){try{let r=(0,Se.join)(t,".jolli","jollimemory","plans.json");if(!(0,ne.existsSync)(r))return[];let n=JSON.parse((0,ne.readFileSync)(r,"utf-8")),o=mc(n).registry,i=[];for(let s of Object.values(o.plans))!s.commitHash&&s.title&&i.push(s.title);return i}catch{return[]}}function K_(t){let e=0,r=0,n=0,o=!1;for(let i of t)i.diffStats&&(e+=i.diffStats.filesChanged,r+=i.diffStats.insertions,n+=i.diffStats.deletions,o=!0);return o?{filesChanged:e,insertions:r,deletions:n}:null}function V_(t,e,r,n,o,i,s,a){let l=e.length,c=ch(X(n)),d=ch(X(r)),u=eR(X(r),new Date().toISOString()),f=[];f.push(`[Jolli Memory \u2014 ${t}]`);let m=`${l} commits (${c} ~ ${d})`;s&&(m+=` | ${s.filesChanged} files, +${s.insertions} -${s.deletions}`),f.push(m);let w=o.lastTopicTitle??r.commitMessage;if(f.push(`Last: ${w} (${d})`),o.keyDecisions.length>0){let T=Y_(o.keyDecisions);f.push(`Decisions: ${T}`)}i.length>0&&f.push(`Plans: ${i.join("; ")}`);let C=X_(u,a);return C&&f.push(C),f.join(`
`)}function X_(t,e){if(t<=0)return null;let r=zi(e,"recall")??"`jolli recall`";return t>3?`Warning: ${t} days since last commit. Run ${r} for full context.`:`Tip: run ${r} for full context`}function Y_(t){let r=[],n=0;for(let o of t){let i=o.replace(/[.;]\s*$/,"").trim();if(i.length>200&&(i=`${i.slice(0,199)}\u2026`),n+i.length>200&&r.length>0)break;r.push(i),n+=i.length+2}return r.join("; ")}function fh(t){return(0,Se.join)(t,".jolli","jollimemory","briefing-cache.json")}function z_(t,e,r){let n=fh(t);if(!(0,ne.existsSync)(n))return null;try{let o=JSON.parse((0,ne.readFileSync)(n,"utf-8"));if(o.branch!==e||o.clientKind!==r)return null;let i=hh(t);return!i||o.lastCommitHash!==i?null:o.briefingText}catch{return null}}function Q_(t,e,r,n,o){let i=fh(t),s={branch:e,lastCommitHash:r,briefingText:n,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,Se.dirname)(i);(0,ne.existsSync)(a)||(0,ne.mkdirSync)(a,{recursive:!0}),(0,ne.writeFileSync)(i,JSON.stringify(s,null,"	"),"utf-8")}catch{}}function hh(t){try{return be("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function gh(t){try{return be("git",["branch","--show-current"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function Ra(t){return new Promise(e=>{setTimeout(()=>e(null),t).unref()})}function Z_(t){let e=new Date(t),r=new Date;return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}function eR(t,e){let r=new Date(t).getTime(),n=new Date(e).getTime();return Math.floor(Math.abs(n-r)/(1e3*60*60*24))}function ch(t){return t?t.split("T")[0]:"unknown"}function tR(){let t=process.argv[1];if(process.env.VITEST||!t||(0,Se.resolve)(t)!==(0,Se.resolve)((0,uh.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,Se.basename)(t).toLowerCase();return e==="sessionstarthook.js"||e==="sessionstarthook.ts"}tR()&&W_();var St=p("CursorPluginBootstrapHook"),va="cursor-plugin",yh={timeoutMs:200,pollMs:25};function Sh(t){return t?{additional_context:t}:null}function Eh(t,e){let r=t.workspace_roots,n=[Array.isArray(r)?r.find(o=>typeof o=="string"&&o.trim().length>0):void 0,e.CURSOR_PROJECT_DIR,process.cwd()];for(let o of n)if(!(o===void 0||o.trim().length===0)&&!dl(o))return o;return null}async function bh(t){if(!await ln(t))return null;let e=await j(["rev-parse","--show-toplevel"],t);if(e.exitCode!==0||!e.stdout.trim())return null;let r=e.stdout.trim();sn(r);let n=!1;if(!(await ti(r,async()=>{n=await Ze(r),n&&await sh(r,{preserveMenu:!0,repoLockHeld:!0})},yh)).acquired)return St.info("Cursor plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy"),null;if(n)return null;if(!await vi(r))return St.info("Cursor plugin bootstrap: %s has not opted in \u2014 leaving it untouched",r),null;let i=await ih(r,{repoHooksOnly:!0,sourceTag:va,respectManualDisable:!0,automatic:!0});if(!i.success)return St.warn("Cursor plugin repo-hook reconciliation failed: %s",i.message),null;let s=null;return(await ti(r,async()=>{if(await Ze(r))return;let l=await Ce();l.cursorEnabled!==!1&&(await ph(va,l),s=await Ta(r,va,{includeBriefing:!0,includePluginReminders:!0}))},yh)).acquired||St.info("Cursor plugin context deferred \u2014 repo hook lifecycle lock is busy"),Sh(s)}async function kh(){if(on()){St.info("Cursor plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await $o(),e=t.trim()?JSON.parse(t):{};await Zf();let r=Eh(e,process.env);if(r===null){St.info("Cursor plugin bootstrap: no workspace named \u2014 global /jolli menu ensured, nothing repo-scoped to do");return}let n=await bh(r);n&&process.stdout.write(JSON.stringify(n))}catch(t){St.info("Cursor plugin bootstrap failed: %s",t.message)}}function rR(){let t=process.argv[1];if(process.env.VITEST||!t||(0,Yr.resolve)(t)!==(0,Yr.resolve)((0,wh.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,Yr.basename)(t).toLowerCase();return e==="cursorpluginbootstraphook.js"||e==="cursorpluginbootstraphook.ts"}rR()&&kh();0&&(module.exports={buildCursorBootstrapOutput,main,resolveCursorProjectDir,runCursorPluginBootstrap});
