#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var uy=Object.create;var Rn=Object.defineProperty;var py=Object.getOwnPropertyDescriptor;var my=Object.getOwnPropertyNames;var fy=Object.getPrototypeOf,hy=Object.prototype.hasOwnProperty;var E=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var _=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},ms=(t,e)=>{for(var r in e)Rn(t,r,{get:e[r],enumerable:!0})},Al=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of my(e))!hy.call(t,o)&&o!==r&&Rn(t,o,{get:()=>e[o],enumerable:!(n=py(e,o))||n.enumerable});return t};var Ot=(t,e,r)=>(r=t!=null?uy(fy(t)):{},Al(e||!t||!t.__esModule?Rn(r,"default",{value:t,enumerable:!0}):r,t)),gy=t=>Al(Rn({},"__esModule",{value:!0}),t);function fs(){return Sy.getStore()?.traceId}var Il,$v,Sy,hs=E(()=>{"use strict";Il=require("node:async_hooks"),$v="0".repeat(32),Sy=new Il.AsyncLocalStorage});function R(t){return t instanceof Error?t.message:String(t)}function mt(t){return t instanceof Error&&t.code==="ENOENT"}function Mt(t){Nl=t}function Se(){return Ol}function vy(t,e){let r=ky[e]??Ry;return Pl[t]>=Pl[r]}function Cy(t,e,r,n,o){let s=new Date().toISOString(),i=t.toUpperCase().padEnd(5),a=r,l=0;a=a.replace(/%[sdj]/g,u=>{if(l>=n.length)return u;let d=n[l++];return u==="%d"?String(Number(d)):u==="%j"?JSON.stringify(d):String(d)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${e}]${c} ${a}`}function X(t){let e=t??Nl??process.cwd();return(0,Lt.join)(e,Ey,by)}function _r(t){return String(t).padStart(2,"0")}async function Py(t,e){let r=new Date,n=`${r.getUTCFullYear()}-${_r(r.getUTCMonth()+1)}-${_r(r.getUTCDate())}_${_r(r.getUTCHours())}-${_r(r.getUTCMinutes())}-${_r(r.getUTCSeconds())}`;try{let o=(0,Lt.join)(t,`debug_${n}.log`);for(let s=1;await Dy(o);s++)o=(0,Lt.join)(t,`debug_${n}_${s}.log`);await(0,ue.rename)(e,o)}catch{return}try{let o=(await(0,ue.readdir)(t)).filter(s=>Iy.test(s)).sort();for(let s=0;s<o.length-xy;s++)await(0,ue.unlink)((0,Lt.join)(t,o[s])).catch(()=>{})}catch{}}async function Dy(t){try{return await(0,ue.stat)(t),!0}catch{return!1}}function Ny(t){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Ol||(Dl=Dl.then(async()=>{try{let e=X(),r=(0,Lt.join)(e,_y);await(0,ue.stat)(e);try{(await(0,ue.stat)(r)).size>Ay&&await Py(e,r)}catch{}await(0,ue.appendFile)(r,`${t}
`,"utf-8")}catch{}}))}function p(t){function e(r,n,o){let s=Cy(r,t,n,o,fs());Ty&&(r==="info"||r==="debug")||(r==="warn"?console.warn(s):console.error(s)),vy(r,t)&&Ny(s)}return{debug(r,...n){e("debug",r,n)},info(r,...n){e("info",r,n)},warn(r,...n){e("warn",r,n)},error(r,...n){e("error",r,n)}}}var ue,Lt,Ey,by,_y,we,Nl,Ol,Pl,Ry,ky,Ty,Dl,Ay,xy,Iy,y=E(()=>{"use strict";ue=require("node:fs/promises"),Lt=require("node:path");hs();Ey=".jolli",by="jollimemory",_y="debug.log";we="jollimemory/summaries/v3";Ol=!1;Pl={debug:0,info:1,warn:2,error:3},Ry="info",ky={},Ty=!0;Dl=Promise.resolve(),Ay=2*1024*1024,xy=10,Iy=/^debug_.*\.log$/});function $t(t,e,r){return(0,Ll.promisify)(He.execFile)(t,e,{...Rr,...r??{}})}function ve(t,e,r){return(0,He.execFileSync)(t,e,{...Rr,...r??{}})}function Ml(t,e,r){return(0,He.spawnSync)(t,e,{...Rr,...r??{}})}var He,Ll,Rr,et,Ee=E(()=>{"use strict";He=require("node:child_process"),Ll=require("node:util"),Rr={windowsHide:!0};et=((t,e,r)=>Array.isArray(e)?(0,He.spawn)(t,e,{...Rr,...r??{}}):(0,He.spawn)(t,{...Rr,...e??{}}))});function My(t){return Ly.some(e=>(t[e]??"")!=="")}function ft(t){try{return(0,jt.readFileSync)(t,"utf-8")}catch{return null}}function gs(t){try{return(0,jt.realpathSync)(t)}catch{return(0,j.resolve)(t)}}function Tn(t){try{return(0,jt.statSync)(t).isDirectory()}catch{return!1}}function $l(t,e){let r=ft((0,j.join)(t,"HEAD"))?.trim();return!r||!(vn.test(r)||$y.test(r))?!1:Tn((0,j.join)(e,"objects"))&&Tn((0,j.join)(e,"refs"))}function jy(t,e,r){let n=/^gitdir:\s*(.+)$/m.exec(e);if(!n)return null;let o=n[1].trim();if(!o)return null;let s=(0,j.isAbsolute)(o)?o:(0,j.resolve)(t,o);return Tn(s)?r?gs(s):s:null}function jl(t,e){let r=ft((0,j.join)(t,"commondir"))?.trim();if(!r)return t;let n=(0,j.isAbsolute)(r)?r:(0,j.resolve)(t,r);return e?gs(n):n}function ht(t,e={}){let{env:r=process.env,realpath:n=!1}=e;if(My(r))return null;let o=n?gs(t):(0,j.resolve)(t);for(;;){let s=(0,j.join)(o,".git");if(Tn(s)){let l=jl(s,n);return $l(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=ft(s);if(i!==null){let l=jy(o,i,n);if(l===null)return null;let c=jl(l,n);return $l(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,j.dirname)(o);if(a===o)return null;o=a}}function Fl(t){let e=ft((0,j.join)(t.gitDir,"HEAD"))?.trim();if(!e)return null;let r=/^ref:\s*refs\/heads\/(.+)$/.exec(e);return r&&r[1].trim()||null}function Hy(t){return Fy.test(t)&&!t.split("/").includes("..")}function Uy(t,e){let r=ft((0,j.join)(t,"packed-refs"));if(r===null)return null;for(let n of r.split(`
`)){if(!n||n.startsWith("#")||n.startsWith("^"))continue;let o=n.indexOf(" ");if(!(o<=0)&&n.slice(o+1).trim()===e){let s=n.slice(0,o).trim();return vn.test(s)?s:null}}return null}function Hl(t){let e=ft((0,j.join)(t.gitDir,"HEAD"))?.trim();if(!e)return null;if(vn.test(e))return e;let r=/^ref:\s*(.+)$/.exec(e);if(!r)return null;let n=r[1].trim();if(!Hy(n))return null;for(let o of t.gitDir===t.commonDir?[t.gitDir]:[t.gitDir,t.commonDir]){let s=ft((0,j.join)(o,n))?.trim();if(s&&vn.test(s))return s;let i=Uy(o,n);if(i)return i}return null}var jt,j,Ly,vn,$y,Fy,Cn=E(()=>{"use strict";jt=require("node:fs"),j=require("node:path"),Ly=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];vn=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,$y=/^ref:\s*refs\//;Fy=/^refs\/[A-Za-z0-9._\-/]+$/});function tt(t){return kr(t,process.platform)}function kr(t,e){let r=Tr(t.replace(/\\/g,"/"));return e==="win32"||e==="darwin"?r.toLowerCase():r}function Tr(t){let e=t.length;for(;e>0&&t[e-1]==="/";)e--;return e===t.length?t:t.slice(0,e)}function ys(t,e){let r=tt(t),n=tt(e);return r===n||r.startsWith(`${n}/`)}function be(t){return t.replace(/\\/g,"/")}var ee=E(()=>{"use strict"});function Bl(t){let e=ws.get(t);if(e!==void 0)return e;let r=ht(t,{realpath:!0})?.worktreeRoot;if(r){let o=be(r);return ws.set(t,o),o}let n=t;try{let o=ve("git",["rev-parse","--show-toplevel"],{cwd:t,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();o&&(n=o)}catch{}return ws.set(t,n),n}async function H(t,e){B.debug("git %s%s",e?`[cwd=${e}] `:"",t.join(" "));try{let{stdout:r,stderr:n}=await $t("git",t,{maxBuffer:Jy,env:{...process.env,LC_ALL:"C"},...e!==void 0&&{cwd:e}});return{stdout:r.trimEnd(),stderr:n.trim(),exitCode:0}}catch(r){let n=r,o=typeof n.code=="number"?n.code:n.code==="ENOENT"?127:1,s={stdout:(n.stdout??"").trimEnd(),stderr:(n.stderr??n.message??"").trim(),exitCode:o};return B.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}async function Ss(t,e){return(await H(["rev-parse","--verify",`refs/heads/${t}`],e)).exitCode===0}async function Es(t,e){if(await Ss(t,e))return;B.info("Creating orphan branch '%s' using plumbing commands",t);let r=JSON.stringify({version:1,entries:[]},null,"	"),n=await Ky(r,e);B.debug("Created blob: %s",n);let o=`100644 blob ${n}	index.json
`,s=await Yy(o,e);B.debug("Created tree: %s",s);let i=await H(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],e);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();B.debug("Created commit: %s",a);let l=await H(["update-ref",`refs/heads/${t}`,a],e);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);B.info("Orphan branch '%s' created successfully",t)}function Gy(t){let e=t.toLowerCase();return By.some(r=>e.includes(r))}async function bs(t,e,r){B.debug("Reading file from branch: %s:%s",t,e);let n=await H(["show",`${t}:${e}`],r);return n.exitCode!==0?(Gy(n.stderr)?B.debug("File not found: %s:%s",t,e):B.warn("Read failed for %s:%s (git exit %d): %s",t,e,n.exitCode,n.stderr||"(no stderr)"),null):n.stdout}async function _s(t,e,r){let n=new Map;if(e.length===0)return n;let o=["cat-file","--batch"];return B.debug("git (cat-file --batch stream) %s%s for %d paths",r?`[cwd=${r}] `:"",o.join(" "),e.length),new Promise((s,i)=>{let a=et("git",o,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),l="",c=Buffer.alloc(0),u=!0,d=0,m=[],f=!1,g=0,h=!1,k=b=>{h||(h=!0,b?i(b):s(n))};a.stderr.on("data",b=>{l+=b.toString()}),a.stdout.on("data",b=>{for(c=Buffer.concat([c,b]);!h;){if(u){let D=c.indexOf(10);if(D<0)return;let O=c.subarray(0,D).toString("utf8");if(c=c.subarray(D+1),g>=e.length){k(new Error(`git cat-file --batch returned extra response: ${O}`));return}let M=e[g];if(g++,O.endsWith(" missing")){n.set(M,null);continue}let de=O.substring(O.lastIndexOf(" ")+1),V=Number.parseInt(de,10);if(!Number.isFinite(V)||V<0){k(new Error(`Unexpected cat-file --batch header for ${M}: ${O}`));return}d=V,m=[],u=!1,f=!0}if(d>0){if(c.length===0)return;let D=Math.min(d,c.length);if(m.push(c.subarray(0,D)),c=c.subarray(D),d-=D,d>0)return}if(f){if(c.length<1)return;c=c.subarray(1),f=!1;let D=e[g-1];n.set(D,Buffer.concat(m).toString("utf8")),m=[],u=!0}}}),a.on("close",b=>{if(b!==0){k(new Error(`git cat-file --batch failed (exit ${b}): ${l.trim()}`));return}if(g<e.length){k(new Error(`git cat-file --batch returned ${g} of ${e.length} expected responses; stderr=${l.trim()}`));return}k(null)}),a.on("error",b=>{k(b)}),a.stdin.on("error",b=>{k(b)});for(let b of e)a.stdin.write(`${t}:${b}
`);a.stdin.end()})}async function Gl(t,e,r,n){await Es(t,n);let o=await H(["rev-parse",`refs/heads/${t}`],n);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await Vy(t,s,r,e,n);let i=e.filter(l=>!l.delete).length,a=e.filter(l=>l.delete).length;B.info("Updated branch '%s': %d written, %d deleted (via fast-import)",t,i,a)}async function Rs(t,e,r){B.debug("Listing files in branch %s under prefix '%s'",t,e);let n=await H(["ls-tree","-z","-r","--name-only",t,e],r);if(n.exitCode!==0)return B.debug("Failed to list files (branch may not exist): %s",n.stderr),[];let o=n.stdout.split(Wy).filter(s=>s.length>0);return B.debug("Found %d files",o.length),o}async function qy(t){let e=await H(["rev-parse","--git-common-dir"],t);if(e.exitCode!==0)throw new Error(`Failed to get git common dir: ${e.stderr}`);let r=e.stdout.trim();return(0,Ce.resolve)(t,r)}async function ks(t){let e=await qy(t);return(0,Ce.dirname)(e)}async function xn(t){return ht(t)!==null?!0:(await H(["rev-parse","--git-dir"],t)).exitCode===0}async function Ft(t){let e=await H(["worktree","list","--porcelain"],t);if(e.exitCode!==0)throw new Error(`Failed to list worktrees: ${e.stderr}`);return e.stdout.split(`
`).filter(n=>n.startsWith("worktree ")).map(n=>n.slice(9).trim())}async function Ht(t){let e=(0,Ce.join)(t,".git");if((await(0,An.stat)(e)).isDirectory())return(0,Ce.join)(e,"hooks");let n=await(0,An.readFile)(e,"utf-8"),o=n.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${n.trim()}`);let s=o[1].trim(),i=(0,Ce.resolve)(t,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,Ce.join)(l,"hooks")}return(0,Ce.join)(i,"hooks")}function ql(t,e,r){return B.debug("git (stdin) %s%s",r?`[cwd=${r}] `:"",t.join(" ")),new Promise((n,o)=>{let s=et("git",t,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${t[0]} failed (exit ${l}): ${a.trim()}`)):n(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(e),s.stdin.end()})}async function Ky(t,e){return ql(["hash-object","-w","--stdin"],t,e)}async function Ul(t,e){let r=await H(["var",t],e);if(r.exitCode!==0)throw new Error(`Failed to read ${t}: ${r.stderr}`);return r.stdout.trim()}async function Vy(t,e,r,n,o){let s=await Ul("GIT_AUTHOR_IDENT",o),i=await Ul("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];B.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=n.filter(u=>!u.delete),c=n.filter(u=>u.delete);return new Promise((u,d)=>{let m=et("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),f="";m.stderr.on("data",b=>{f+=b.toString()}),m.on("close",b=>{b!==0?d(new Error(`git fast-import failed (exit ${b}): ${f.trim()}`)):u()}),m.on("error",b=>{d(b)});let g=m.stdin;g.on("error",b=>{d(b)});let h=[];l.forEach((b,D)=>{let O=D+1,M=Buffer.from(b.content,"utf8");h.push(`blob
mark :${O}
data ${M.length}
`,M,`
`)});let k=Buffer.from(r,"utf8");h.push(`commit refs/heads/${t}
`,`author ${s}
`,`committer ${i}
`,`data ${k.length}
`,k,`
`,`from ${e}
`),l.forEach((b,D)=>{h.push(`M 100644 :${D+1} ${Jl(b.path)}
`)});for(let b of c)h.push(`D ${Jl(b.path)}
`);h.push(`done
`),Xy(g,h).then(()=>{g.end()},b=>{d(b)})})}async function Xy(t,e){for(let r of e)t.write(r)||await(0,Wl.once)(t,"drain")}function Jl(t){return/["\\\n\r]/.test(t)?`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:t}async function Yy(t,e){return ql(["mktree"],t,e)}var Wl,An,Ce,Jy,Wy,B,ws,By,ie=E(()=>{"use strict";Wl=require("node:events"),An=require("node:fs/promises"),Ce=require("node:path");y();Ee();Cn();ee();Jy=10*1024*1024,Wy="\0",B=p("GitOps"),ws=new Map;By=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function zy(t){return new Promise(e=>setTimeout(e,t))}function Vl(t){let e=Number(t);if(!Number.isInteger(e)||e<=0)return!1;if(e===process.pid)return!0;try{return process.kill(e,0),!0}catch(r){return r.code!=="ESRCH"}}async function Ts(t){try{let e=await(0,Ae.stat)(t),r=Date.now()-e.mtimeMs,n=await Xl(t),o=n!==null&&!Vl(n);if(!o&&r<Kl)return!1;o?vr.warn("Removing orphaned lock %s (PID %s no longer running)",t,n):vr.warn("Removing stale lock file %s (age: %dms)",t,r),await(0,Ae.rm)(t,{force:!0})}catch(e){if(e.code!=="ENOENT")return vr.error("Failed to check lock file %s: %s",t,e.message),!1}try{return await(0,Ae.writeFile)(t,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function Xl(t){try{let r=(await(0,Ae.readFile)(t,"utf-8")).trim();return r.length>0?r:null}catch{return null}}async function Ut(t,e){let r=await Xl(t);if(r!==null&&r!==String(process.pid)){vr.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",e,r,process.pid);return}try{await(0,Ae.rm)(t,{force:!0})}catch(n){vr.error("Failed to release %s: %s",e,n.message)}}async function Jt(t,e){if(e.timeoutMs<=0)return Ts(t);let r=Date.now()+e.timeoutMs;for(;;){if(await Ts(t))return!0;if(Date.now()>=r)return!1;await zy(e.pollMs)}}var Ae,vr,Kl,vs=E(()=>{"use strict";Ae=require("node:fs/promises");y();vr=p("LockPrimitives"),Kl=300*1e3});function Ql(t){return(0,zl.resolve)(t??process.cwd())}function In(t){return Cs.getStore()?.has(Ql(t))===!0}function Pn(t,e){let r=new Set(Cs.getStore()??[]);return r.add(Ql(t)),Cs.run(r,e)}var Yl,zl,Cs,Dn=E(()=>{"use strict";Yl=require("node:async_hooks"),zl=require("node:path"),Cs=new Yl.AsyncLocalStorage});function Qy(t){return $t("git",["rev-parse","--git-common-dir"],{cwd:t})}async function ic(t){let e=t??process.cwd(),r=rc.get(e);if(r!==void 0)return r;let n;try{let{stdout:o}=await Qy(e),s=o.trim(),i=(0,ae.isAbsolute)(s)?s:(0,ae.resolve)(e,s);n=(0,ae.join)(i,"jollimemory")}catch{oc.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",e),n=X(e)}return rc.set(e,n),n}async function As(t){let e=await ic(t);return await(0,Cr.mkdir)(e,{recursive:!0}),e}async function xs(t,e={}){let r=e.timeoutMs??ew,n=e.pollMs??tw,o=await As(t);return Jt((0,ae.join)(o,sc),{timeoutMs:r,pollMs:n})}async function Is(t){let e=await ic(t);await Ut((0,ae.join)(e,sc),"orphan-write.lock")}async function iw(t,e,r,n){let o=n.timeoutMs??nw,s=n.pollMs??Nn;await(0,Cr.mkdir)(t,{recursive:!0});let i=(0,ae.join)(t,e),a=await Jt(i,{timeoutMs:o,pollMs:s});a||oc.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",e,o);try{return await r()}finally{a&&await Ut(i,e)}}async function Ps(t,e,r={}){return iw(t,Zy,e,r)}async function Ar(t,e={}){let r=e.timeoutMs??ow,n=e.pollMs??Nn,o=await As(t),s=(0,ae.join)(o,ec);return await Jt(s,{timeoutMs:r,pollMs:n})?{release:()=>Ut(s,ec)}:null}async function Ds(t,e,r={}){let n=await Ar(t,r);if(!n)return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await n.release()}}async function Ns(t,e,r={}){let n=r.timeoutMs??rw,o=r.pollMs??Nn,s=await As(t),i=(0,ae.join)(s,Zl);if(!await Jt(i,{timeoutMs:n,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await Ut(i,Zl)}}async function Os(t,e={}){let r=e.timeoutMs??sw,n=e.pollMs??Nn,o=e.globalDir??(0,ae.join)((0,nc.homedir)(),".jolli","jollimemory");await(0,Cr.mkdir)(o,{recursive:!0});let s=(0,ae.join)(o,tc);if(!await Jt(s,{timeoutMs:r,pollMs:n}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await Ut(s,tc)}}var Cr,nc,ae,oc,sc,Zl,Zy,ec,tc,ew,tw,rw,Nn,nw,ow,sw,rc,xe=E(()=>{"use strict";Cr=require("node:fs/promises"),nc=require("node:os"),ae=require("node:path");y();Ee();vs();Dn();oc=p("Locks");sc="orphan-write.lock",Zl="profile.lock",Zy="config.lock",ec="repo-hooks.lock",tc="runtime-registry.lock",ew=1e3,tw=50,rw=5e3,Nn=25,nw=5e3,ow=5e3,sw=5e3,rc=new Map});async function Ls(t,e,r={}){await(0,rt.mkdir)((0,lc.dirname)(t),{recursive:!0});let n=`${t}.${process.pid}.tmp`;await(0,rt.writeFile)(n,e,r.mode!==void 0?{encoding:"utf-8",mode:r.mode}:"utf-8");try{await(0,rt.rename)(n,t)}catch(o){throw await(0,rt.unlink)(n).catch(()=>{}),o}}var rt,lc,Ms=E(()=>{"use strict";rt=require("node:fs/promises"),lc=require("node:path")});function pc(t,e){let r={...t,manuallyDisabled:e};return delete r.userDisabled,r}async function uw(t){let e=ht(t)?.commonDir;if(e)return e;let r=await H(["rev-parse","--git-common-dir"],t),n=r.exitCode===0?r.stdout.trim():"";return n?(0,Ie.isAbsolute)(n)?n:(0,Ie.join)(t,n):null}async function js(t){let e=await uw(t);if(e===null)return{profilePath:(0,Ie.join)(X(t),cc),legacyMarkerPath:null};let r=(0,Ie.dirname)(e);return{profilePath:(0,Ie.join)(X(r),cc),legacyMarkerPath:(0,Ie.join)(e,lw,cw)}}async function Ln(t){try{let e=await(0,xr.readFile)(t,"utf-8"),r=JSON.parse(e);return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}catch{return{}}}async function pw(t){try{return await(0,xr.stat)(t),!0}catch{return!1}}async function mc(t,e){await Ls(t,`${JSON.stringify(e,null,"	")}
`)}function On(t,e,r,n,o,s){if(t==="read"){let i=`${o}|${e}|${r}`;if(dc.has(i))return r;dc.add(i)}return $s.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",t,r,e,process.pid,n,o,String(s.userDisabled),String(s.manuallyDisabled),s.cutoverFence?s.cutoverFence.at:"none"),r}function fc(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function mw(t){let e;try{e=await Ft(t)}catch{e=[t]}for(let r of e)if(await pw((0,Ie.join)(X(r),dw)))return!0;return!1}async function nt(t){let{profilePath:e}=await js(t),r=await Ln(e);if(r.userDisabled!==void 0){let s=await uc(t,e,r.userDisabled===!0);return On("read","migrate:userDisabled",s,t,e,r)}if(r.manuallyDisabled!==void 0)return On("read","manuallyDisabled",r.manuallyDisabled===!0,t,e,r);let n=await mw(t),o=await uc(t,e,n);return On("read","migrate:legacy-marker",o,t,e,r)}async function uc(t,e,r){let n=await Ns(t,async()=>{let o=await Ln(e),s=o.userDisabled??o.manuallyDisabled,i=s===void 0?r:s===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||($s.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",i,process.pid,e,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",fc()),await mc(e,pc(o,i))),i}).catch(()=>{});return n?.acquired&&n.value!==void 0?n.value:r}async function Fs(t,e){let{profilePath:r}=await js(t);if($s.info("manual-disable WRITE %s (pid=%d, cwd=%s, profile=%s) \u2190 %s",e,process.pid,t,r,fc()),!(await Ns(t,async()=>{let o=await Ln(r);On("write",`explicit:${e}`,e,t,r,o),await mc(r,pc(o,e))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function Ir(t){let{profilePath:e}=await js(t);return(await Ln(e)).cutoverFence??null}var xr,Ie,$s,cc,lw,cw,dw,dc,Ue=E(()=>{"use strict";xr=require("node:fs/promises"),Ie=require("node:path");y();Ee();Ms();Cn();ie();xe();$s=p("RepoProfile"),cc="profile.json",lw="jollimemory",cw="backfill-card-dismissed",dw="disabled-by-user";dc=new Set});var Hs=E(()=>{"use strict"});async function I(t,e,r){let n=`${t}.${process.pid}.${(0,hc.randomUUID)()}.tmp`;await(0,gt.writeFile)(n,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r});try{await(0,gt.rename)(n,t)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,gt.writeFile)(t,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r}),await(0,gt.rm)(n,{force:!0});else throw o}}var hc,gt,oe=E(()=>{"use strict";hc=require("node:crypto"),gt=require("node:fs/promises")});function Y(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var Pr=E(()=>{"use strict"});var gc=E(()=>{"use strict"});var yc=E(()=>{"use strict"});function wc(t){return Number.isFinite(t)&&t>=0&&t<=1114111&&!(t>=55296&&t<=57343)}function Sc(t){return t.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(e,r)=>{if(r.startsWith("#x")){let o=Number.parseInt(r.slice(2),16);return wc(o)?String.fromCodePoint(o):e}if(r.startsWith("#")){let o=Number.parseInt(r.slice(1),10);return wc(o)?String.fromCodePoint(o):e}let n=fw[r];return typeof n=="string"?n:e})}var fw,Ec=E(()=>{"use strict";fw={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var hw,bc,_c=E(()=>{"use strict";gc();Pr();yc();Ec();hw={decodeHtmlEntities:Sc,lowercase:t=>t.toLowerCase()},bc=new Set(Object.keys(hw))});var gw,Rc,kc=E(()=>{"use strict";gw="^https://app\\.asana\\.com/",Rc={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:gw,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var yw,Tc,vc=E(()=>{"use strict";yw="^https://[^/]+/wiki/",Tc={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:yw},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var ww,Cc,Ac=E(()=>{"use strict";ww="^/[^/\\s]+/[^/\\s]+",Cc={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:ww},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Us,Sw,Js,PC,xc=E(()=>{"use strict";Pr();Us=["mcp__Figma__","mcp__figma__"],Sw={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},Js=Object.keys(Sw),PC=new Set(Js)});var Ew,bw,Ic,Pc=E(()=>{"use strict";xc();Ew="^[0-9a-zA-Z]{22,128}$",bw=Us.flatMap(t=>Js.map(e=>`${t}${e}`)),Ic={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...Us],exact:bw}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:Ew},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var _w,Rw,Dc,Nc=E(()=>{"use strict";_w="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",Rw="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",Dc={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:_w,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:Rw,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var kw,Oc,Lc=E(()=>{"use strict";kw="^[A-Z][A-Z0-9_]*-\\d+$",Oc={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:kw},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Mc,$c=E(()=>{"use strict";Mc={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var Tw,jc,Fc=E(()=>{"use strict";Tw="^[A-Z][A-Z0-9_]*-\\d+$",jc={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:Tw},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Hc,Uc=E(()=>{"use strict";Hc={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var vw,Cw,Aw,Jc,Wc=E(()=>{"use strict";vw="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",Cw="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[A-Za-z0-9.-]+\\.notion\\.site)/",Aw="<content\\b[^>]*>([\\s\\S]*?)</content>",Jc={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:vw,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:Cw,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:Aw,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Ws,xw,Iw,Bs,JC,Bc=E(()=>{"use strict";Pr();Ws=["mcp__Sentry__","mcp__sentry__"],xw="get_sentry_resource",Iw="analyze_issue_with_seer",Bs=[xw,Iw],JC=new Set(Bs)});var Pw,Dw,Nw,Ow,Gc,qc=E(()=>{"use strict";Bc();Pw=Ws.flatMap(t=>Bs.map(e=>`${t}${e}`)),Dw="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",Nw="^Issue [A-Za-z0-9_-]{1,128}$",Ow="^Issue [0-9]{1,128}$",Gc={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:Nw,titleFallbackPoorestPattern:Ow,match:{claude:{prefixes:[...Ws],exact:Pw}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:Dw},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Kc,Vc=E(()=>{"use strict";Kc={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var Lw,Gs,qs,Xc,Yc=E(()=>{"use strict";Lw="^dpl_[A-Za-z0-9]+$",Gs=[{op:"coalesce",of:[[{op:"path",path:"readyState"}],[{op:"path",path:"state"}]]}],qs=[{op:"template",template:"https://{host}",from:{host:[{op:"path",path:"url"}]}}],Xc={id:"vercel",label:"Vercel",icon:"rocket",trackOnly:!0,match:{claude:{prefixes:["mcp__claude_ai_Vercel__","mcp__vercel__"],acceptSuffix:"get_deployment"}},wrapperKeys:["deployment"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:Lw},title:{pipe:[{op:"coalesce",of:[[{op:"template",template:"{name} ({state})",from:{name:[{op:"path",path:"name"}],state:Gs}}],[{op:"path",path:"name"}]]}],require:".+"},url:{pipe:qs,require:"^https://[A-Za-z0-9.-]+\\.vercel\\.app$",requireFlags:"i"},description:{pipe:[{op:"coalesce",of:[[{op:"path",path:"errorMessage"}],[{op:"template",template:"Deployment {state} \xB7 {target} \xB7 {url}",from:{state:Gs,target:[{op:"path",path:"target"}],url:qs}}],[{op:"template",template:"Deployment {state} \xB7 {url}",from:{state:Gs,url:qs}}]]}],optional:!0}},fields:[{key:"target",label:"Target",icon:"rocket",pipe:[{op:"path",path:"target"}]},{key:"framework",label:"Framework",icon:"symbol-property",pipe:[{op:"path",path:"project.framework"}]},{key:"error-code",label:"Error",icon:"error",pipe:[{op:"path",path:"errorCode"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"vercel-deployments",itemTag:"deployment",bodyTag:"content",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var zc,Qc=E(()=>{"use strict";zc={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Zc,ed=E(()=>{"use strict";Zc={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var td,rd=E(()=>{"use strict";kc();vc();Ac();Pc();Nc();Lc();$c();Fc();Uc();Wc();qc();Vc();Yc();Qc();ed();td=[jc,Tc,Oc,Dc,Jc,Kc,Zc,zc,Rc,Hc,Cc,Mc,Xc,Ic,Gc]});function $w(t,e,r){if(!Y(t))return"op must be an object";if(r.opCount++,r.opCount>nd)return`pipe exceeds ${nd} ops`;let n=t.op;if(typeof n!="string"||!Mw.has(n))return`unknown op: ${String(n)}`;switch(n){case"path":return typeof t.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof t.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof t.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof t.pattern!="string"?"regex op requires a string 'pattern'":t.extract!==void 0&&typeof t.extract!="string"?"regex.extract must be a string":t.lastMatch!==void 0&&typeof t.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof t.fn!="string"?"transform op requires a string 'fn'":bc.has(t.fn)?void 0:`unknown transform: ${t.fn}`;case"coalesce":{if(e+1>Mn)return`nesting depth exceeds ${Mn}`;if(!Array.isArray(t.of))return"coalesce op requires an array 'of'";for(let o of t.of){let s=Ks(o,e+1,r);if(s!==void 0)return s}return}case"template":{if(e+1>Mn)return`nesting depth exceeds ${Mn}`;if(typeof t.template!="string")return"template op requires a string 'template'";if(!Y(t.from))return"template op requires an object 'from'";for(let o of Object.values(t.from)){let s=Ks(o,e+1,r);if(s!==void 0)return s}return}}}function Ks(t,e,r){if(!Array.isArray(t))return"pipe must be an array";for(let n of t){let o=$w(n,e,r);if(o!==void 0)return o}}function Dr(t,e){let r=Ks(t,0,{opCount:0});return r===void 0?void 0:`${e}: ${r}`}function jw(t){if(!Y(t))return{ok:!1,error:"definition must be an object"};if(typeof t.id!="string"||t.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof t.label!="string"||t.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof t.icon!="string"||t.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(t.titleFallbackPattern!==void 0){if(typeof t.titleFallbackPattern!="string"||t.titleFallbackPattern.length===0)return{ok:!1,error:"titleFallbackPattern must be a non-empty string"};try{new RegExp(t.titleFallbackPattern)}catch(r){return{ok:!1,error:`titleFallbackPattern is not a valid regex: ${r.message}`}}}if(t.titleFallbackPoorestPattern!==void 0){if(typeof t.titleFallbackPoorestPattern!="string"||t.titleFallbackPoorestPattern.length===0)return{ok:!1,error:"titleFallbackPoorestPattern must be a non-empty string"};try{new RegExp(t.titleFallbackPoorestPattern)}catch(r){return{ok:!1,error:`titleFallbackPoorestPattern is not a valid regex: ${r.message}`}}if(t.titleFallbackPattern===void 0)return{ok:!1,error:"titleFallbackPoorestPattern requires titleFallbackPattern"}}if(!Y(t.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(t.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!Y(t.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(t.fields))return{ok:!1,error:"fields must be an array"};if(!Y(t.storage))return{ok:!1,error:"storage must be an object"};if(!Y(t.render))return{ok:!1,error:"render must be an object"};let e=t.reference;for(let r of["nativeId","title"]){let n=e[r];if(!Y(n))return{ok:!1,error:`reference.${r} is required`};let o=Dr(n.pipe,`reference.${r}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(e.url!==void 0){if(!Y(e.url))return{ok:!1,error:"reference.url must be an object"};let r=Dr(e.url.pipe,"reference.url.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.description!==void 0){if(!Y(e.description))return{ok:!1,error:"reference.description must be an object"};let r=Dr(e.description.pipe,"reference.description.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.guard!==void 0){if(!Y(e.guard))return{ok:!1,error:"reference.guard must be an object"};let r=Dr(e.guard.pipe,"reference.guard.pipe");if(r!==void 0)return{ok:!1,error:r}}for(let[r,n]of t.fields.entries()){if(!Y(n))return{ok:!1,error:`fields[${r}] must be an object`};if(typeof n.key!="string"||!od.test(n.key))return{ok:!1,error:`fields[${r}].key must match ${od}`};if(typeof n.label!="string"||n.label.length===0)return{ok:!1,error:`fields[${r}].label must be a non-empty string`};let o=Dr(n.pipe,`fields[${r}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:t}}function jn(){if($n!==void 0)return $n;let t=[];for(let e of td){let r=jw(e);if(!r.ok)throw new Error(`invalid built-in source definition '${e.id}': ${r.error}`);t.push(r.def)}return $n=new Vs(t),$n}var nd,Mn,Mw,od,Vs,$n,Fn=E(()=>{"use strict";Pr();_c();rd();nd=64,Mn=8,Mw=new Set(["path","coalesce","regex","template","join","const","transform"]);od=/^[\w-]+$/;Vs=class{constructor(e){this.definitions=e}all(){return this.definitions}byId(e){return this.definitions.find(r=>r.id===e)}match(e,r,n,o){return e==="claude"?this.definitions.find(s=>{let i=s.match.claude;return!(i===void 0||!i.prefixes.some(a=>r.startsWith(a))||i.exact!==void 0&&!i.exact.includes(r)||i.acceptSuffix!==void 0&&!r.endsWith(i.acceptSuffix)||i.denySuffixes?.some(a=>r.endsWith(a)))}):n!==void 0?this.definitions.find(s=>{let i=s.match.codex;return i!==void 0&&i.namespaceSuffix===n&&i.functionCallNames.includes(r)}):this.definitions.find(s=>{let i=s.match.codex;return i===void 0||!i.invocationTools.includes(r)?!1:i.invocationServer===void 0||i.invocationServer===o})}}});function Xs(t){return Jw(t)}function Fw(t){return t.replace(/^\n+/,"").replace(/\n+$/,"")}function Hw(t){let e=t.indexOf(Uw);return e===-1?t:t.slice(0,e)}function Jw(t){if(typeof t!="string")return null;let e=t.split(`
`);if(e[0]?.trim()!=="---")return null;let r=-1;for(let D=1;D<e.length;D++)if(e[D].trim()==="---"){r=D;break}if(r===-1)return null;let n=e.slice(1,r),o=Fw(Hw(e.slice(r+1).join(`
`))),s={},i=[],a=!1;for(let D of n){if(a){let M=/^\s+- (.+)$/.exec(D);if(M){try{let de=JSON.parse(M[1]);Ww(de)&&i.push(de)}catch{}continue}a=!1}if(D.trim()==="fields:"){a=!0;continue}let O=/^([a-zA-Z]+):\s*(.+)$/.exec(D);O&&(s[O[1]]=O[2])}let l=D=>{let O=s[D];if(O!==void 0)try{let M=JSON.parse(O);return typeof M=="string"?M:void 0}catch{return}},c=l("source"),u=l("nativeId");if(c===void 0||u===void 0||!Bw(c))return null;let d=c,m=u,f=l("title"),g=l("url"),h=l("referencedAt"),k=l("sourceToolName");return!f||h===void 0||!k?null:{mapKey:`${d}:${m}`,source:d,nativeId:m,title:f,referencedAt:h,toolName:k,...g!==void 0?{url:g}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function Ww(t){if(typeof t!="object"||t===null)return!1;let e=t;return!(typeof e.key!="string"||typeof e.label!="string"||typeof e.value!="string"||!/^[\w-]+$/.test(e.key)||e.icon!==void 0&&typeof e.icon!="string")}function Bw(t){return t.length>0&&/^[\w-]+$/.test(t)}var wA,Uw,Nr=E(()=>{"use strict";y();Fn();wA=p("ReferenceStore");Uw="<!-- jolli:auto-note -->"});function Gw(t){return`${t.source}:${t.skill}`}function qw(t,e){if(t===void 0)return e;let r=t.usage===void 0||e.usage===void 0?t.usage??e.usage:{input:t.usage.input+e.usage.input,output:t.usage.output+e.usage.output,cached:t.usage.cached+e.usage.cached,confidence:t.usage.confidence==="attributed"&&e.usage.confidence==="attributed"?"attributed":"estimated"},n=[t,e].filter(l=>l.usage!==void 0),o=Vw(n),{usageBySession:s,supersededDocIds:i,...a}=t;return{...a,invocationCount:t.invocationCount+e.invocationCount,...r!==void 0?{usage:r}:{},...o!==void 0?{usageBySession:o}:{},...t.detection==="heuristic"||e.detection==="heuristic"?{detection:"heuristic"}:{},...t.jolliDocId===void 0&&e.jolliDocId!==void 0?{jolliDocId:e.jolliDocId,jolliDocUrl:e.jolliDocUrl}:{},...Kw(t,e)}}function Kw(t,e){let r=new Set([...t.supersededDocIds??[],...e.supersededDocIds??[]]);t.jolliDocId!==void 0&&e.jolliDocId!==void 0&&r.add(e.jolliDocId);let n=t.jolliDocId??e.jolliDocId;return n!==void 0&&r.delete(n),r.size>0?{supersededDocIds:[...r]}:{}}function sd(t){if(t.supersededDocIds===void 0)return t;let{supersededDocIds:e,...r}=t;return r}function Vw(t){if(t.length===0)return;let e=[];for(let n of t){if(n.usageBySession===void 0)return;e.push(n.usageBySession)}let r={};for(let n of e)for(let[o,s]of Object.entries(n)){let i=r[o];r[o]=i===void 0?s:{input:i.input+s.input,cached:i.cached+s.cached,output:i.output+s.output,confidence:i.confidence==="attributed"&&s.confidence==="attributed"?"attributed":"estimated"}}return r}function id(t){let e=new Map;for(let n of t)e.has(n.archivedKey)||e.set(n.archivedKey,n);let r=new Map;for(let n of e.values()){let o=Gw(n);r.set(o,qw(r.get(o),n))}return[...r.values()]}var Ys=E(()=>{"use strict"});var _A,ad=E(()=>{"use strict";y();_A=p("SkillStore")});async function Zs(t){let e=X(t);return await(0,Je.mkdir)(e,{recursive:!0}),e}function se(){return(0,Hn.join)((0,ld.homedir)(),".jolli","jollimemory")}async function Wt(t){let e=(0,Hn.join)(t,cd);try{let r=await(0,Je.readFile)(e,"utf-8"),n=JSON.parse(r);return Xw(n)}catch{return Un.debug("No config file found in %s, using defaults",t),{}}}function Xw(t){if(t.syncEnabled===void 0)return t;let{syncEnabled:e,...r}=t;return r.autoSyncEnabled===void 0?{...r,autoSyncEnabled:e}:r}function Yw(t,e){return!("localAgentTool"in e)||"localAgentPath"in e||(t.localAgentTool??"claude-code")===(e.localAgentTool??"claude-code")||t.localAgentPath===void 0?e:(Un.info("Clearing localAgentPath (was set for %s, switching to %s)",t.localAgentTool??"claude-code",e.localAgentTool),{...e,localAgentPath:void 0})}async function Jn(t,e){await Ps(e,async()=>{await dd(t,e)}),Un.info("Config saved to %s",e)}async function Wn(t){return zw(t,se())}async function zw(t,e){return Ps(e,async()=>{let{update:r,result:n}=t(await Wt(e));return r!==null&&(await dd(r,e),Un.info("Config saved to %s",e)),n})}async function dd(t,e){let r=await Wt(e),n={...r,...Yw(r,t)};await I((0,Hn.join)(e,cd),JSON.stringify(n,null,"	"))}async function Pe(){return Wt(se())}async function yt(t){return Jn(t,se())}function zs(t,e){let r={...t},n=!1;for(let o of e)o in r&&(delete r[o],n=!0);return{value:r,changed:n}}function ud(t){let e=!1,r={};for(let[i,a]of Object.entries(t.plans??{})){if(a.ignored===!0){e=!0;continue}let l=zs(a,Qw);l.changed&&(e=!0),r[i]=l.value}let n;if(t.notes!==void 0){n={};for(let[i,a]of Object.entries(t.notes)){if(a.ignored===!0){e=!0;continue}let l=zs(a,Zw);l.changed&&(e=!0),n[i]=l.value}}let o;if(t.references!==void 0){o={};for(let[i,a]of Object.entries(t.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){e=!0;continue}let c=zs(a,eS);c.changed&&(e=!0),o[i]=c.value}}return{registry:{version:1,plans:r,...n!==void 0?{notes:n}:{},...o!==void 0?{references:o}:{},...t.skills!==void 0?{skills:t.skills}:{}},changed:e}}var Qs,Je,ld,Hn,Un,cd,FA,HA,UA,JA,Qw,Zw,eS,pe=E(()=>{"use strict";Qs=require("node:crypto"),Je=require("node:fs/promises"),ld=require("node:os"),Hn=require("node:path");y();Hs();oe();xe();Nr();Ys();ad();Un=p("SessionTracker"),cd="config.json",FA=2880*60*1e3;HA=2880*60*1e3,UA=10080*60*1e3,JA=(0,Qs.randomBytes)(4).toString("hex"),Qw=["ignored","branch","editCount"],Zw=["ignored","branch"],eS=["ignored","branch","commitHash","contentHashAtCommit"]});function Ge(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Be.major?!0:r<Be.major?!1:n>=Be.minor}function St(t){let e=t,r=e?.message??String(t),n=e?.code;return n==="ENOENT"?null:n==="EACCES"||n==="EPERM"?{kind:"permission",message:r}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(r)?{kind:"corrupt",message:r}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(r)?{kind:"locked",message:r}:/no such table|no such column/i.test(r)?{kind:"schema",message:r}:/SQLITE_CANTOPEN|unable to open/i.test(r)?{kind:"permission",message:r}:{kind:"unknown",message:r}}var Be,De=E(()=>{"use strict";Be={major:22,minor:13}});function yu(t){if((0,gu.platform)()==="win32")try{Ml("attrib",["+h",t],{timeout:2e3})}catch{}}var gu,wu=E(()=>{"use strict";gu=require("node:os");Ee()});var Su,U,le,Vt,te,lo=E(()=>{"use strict";Su=require("node:crypto"),U=require("node:fs"),le=require("node:path");y();wu();ee();Vt=p("MetadataManager"),te=class t{constructor(e){this.jolliDir=e;this.manifestPath=(0,le.join)(e,"manifest.json"),this.branchesPath=(0,le.join)(e,"branches.json"),this.configPath=(0,le.join)(e,"config.json"),this.migrationPath=(0,le.join)(e,"migration.json"),this.indexPath=(0,le.join)(e,"index.json")}ensure(){(0,U.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&yu(this.jolliDir),(0,U.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,U.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,U.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e.fileId);n.push(e),this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Vt.info("Manifest updated: %s (%s)",e.path,e.type)}removeFromManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e);return n.length===r.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),!0)}unregisterFilesByType(e){let r=this.readManifest(),n=r.files.filter(s=>s.type!==e),o=r.files.length-n.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Vt.info("Manifest unregistered %d entries of type=%s",o,e),o)}replaceFiles(e){let r=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:[...e]},null,"	"))}findByPath(e){return this.readManifest().files.find(r=>r.path===e)}findById(e){return this.readManifest().files.find(r=>r.fileId===e)}updatePath(e,r){let n=this.readManifest();if(!n.files.find(i=>i.fileId===e))return!1;let s=n.files.map(i=>i.fileId===e?{...i,path:r}:i);return this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:s},null,"	")),!0}resolveFolderForBranch(e){let r=this.readBranches(),n=r.mappings.find(a=>a.branch===e);if(n)return n.folder;let o=t.transcodeBranchName(e),s={folder:o,branch:e,createdAt:new Date().toISOString()},i={...r,mappings:[...r.mappings,s]};return this.atomicWrite(this.branchesPath,JSON.stringify(i,null,"	")),Vt.info("Branch mapping created: %s \u2192 %s",e,o),o}removeBranchMapping(e){let r=this.readBranches(),n=r.mappings.filter(o=>o.branch!==e);return n.length===r.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:n},null,"	")),Vt.info("Branch mapping removed: %s (no remaining head)",e),!0)}renameBranchFolder(e,r){let n=this.readBranches(),o=n.mappings.map(l=>l.folder===e?{...l,folder:r}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	"));let s=this.readManifest(),i=0,a=s.files.map(l=>l.path.startsWith(`${e}/`)?(i++,{...l,path:l.path.replace(`${e}/`,`${r}/`)}):l);return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...s,files:a},null,"	")),i}removeBranchFolder(e){let r=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:r.mappings.filter(i=>i.folder!==e)},null,"	"));let n=this.readManifest(),o=n.files.filter(i=>!i.path.startsWith(`${e}/`)),s=n.files.length-o.length;return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:o},null,"	")),s}unregisterBranches(e){let r=new Set(e);if(r.size===0)return 0;let n=this.readBranches(),o=n.mappings.filter(i=>!r.has(i.branch)),s=n.mappings.length-o.length;return s===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	")),Vt.info("Branch mappings unregistered: %d",s),s)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(e){try{return this.listBranchMappings().find(r=>r.folder===e)?.branch??e}catch{return e}}listIndexHeads(){let e=this.readJson(this.indexPath);return!e||!Array.isArray(e.entries)?[]:e.entries.filter(r=>typeof r?.commitHash=="string"&&typeof r.branch=="string"&&(r.parentCommitHash===null||typeof r.parentCommitHash=="string")&&r.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(e){this.atomicWrite(this.configPath,JSON.stringify(e,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(e){this.atomicWrite(this.migrationPath,JSON.stringify(e,null,"	"))}reconcile(e){let r=this.readManifest();if(r.files.length===0||!r.files.some(a=>!(0,U.existsSync)((0,le.join)(e,a.path))))return 0;let o=new Map;try{this.walkDir(e,e,o)}catch{}let s=0,i=[];for(let a of r.files){let l=(0,le.join)(e,a.path);if((0,U.existsSync)(l))i.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(i.push({...a,path:c}),s++):(Vt.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),i.push(a))}}return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:i},null,"	")),s}walkDir(e,r,n){for(let o of(0,U.readdirSync)(e,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let s=(0,le.join)(e,o.name);if(o.isDirectory())this.walkDir(s,r,n);else if(o.name.endsWith(".md"))try{let i=(0,U.readFileSync)(s,"utf-8"),a=t.sha256(i);n.set(a,be((0,le.relative)(r,s)))}catch{}}}static transcodeBranchName(e){let r=e.replace(/[/\\:*?~^]/g,"-");return r=r.replace(/-{3,}/g,"-"),r=r.replace(/\.\./g,"--"),r=r.replace(/^[.-]+|[.-]+$/g,""),r||"default"}static sha256(e){return(0,Su.createHash)("sha256").update(e,"utf-8").digest("hex")}readJson(e){if(!(0,U.existsSync)(e))return null;try{return JSON.parse((0,U.readFileSync)(e,"utf-8"))}catch{return null}}atomicWrite(e,r){let n=(0,le.dirname)(e);(0,U.mkdirSync)(n,{recursive:!0});let o=`${e}.tmp`;(0,U.writeFileSync)(o,r,"utf-8"),(0,U.renameSync)(o,e)}}});function FS(t){if(process.env.VITEST)return null;try{return ve("ssh",["-G",t],{encoding:"utf-8",timeout:$S,stdio:["ignore","pipe","pipe"]})}catch(e){return MS.debug("ssh -G %s failed: %s",t,e instanceof Error?e.message:String(e)),null}}function HS(t){for(let e of t.split(/\r?\n/)){let r=e.match(/^hostname\s+(\S+)/i);if(r?.[1])return r[1]}return null}function co(t){if(!t)return t;let e=Eu.get(t);if(e!==void 0)return e;let r=t,n=jS(t);if(n){let o=HS(n);o&&(r=o)}return Eu.set(t,r),r}var MS,$S,Eu,jS,bu=E(()=>{"use strict";y();Ee();MS=p("SshAliasResolver"),$S=5e3,Eu=new Map,jS=FS});function _u(){return(0,G.join)((0,vu.homedir)(),"Documents","jolli")}function xi(t){return t?JS(t)?t:(US.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",t),_u()):_u()}function JS(t){return t?(0,G.isAbsolute)(t)&&!t.includes(".."):!0}function Cu(t,e,r){let n=xi(r),o=(0,G.join)(n,t);if(!(0,it.existsSync)(o)){let i=Lu(n,t,e).match;return i||(Ai(o,t,e),o)}let s=$u(o);return s&&Du(s,e,t)?o:s&&Mu(o,s)?(Ai(o,t,e),o):qS(n,t,e)}function Au(t){let e=Pi(t,["config","--get","remote.origin.url"]);if(e){let n=e.match(/\/([^/]+?)(?:\.git)?$/);if(n?.[1])return n[1]}let r=xu(t);return r?(0,G.basename)(r):(0,G.basename)(t)||"unknown"}function xu(t){let e=Pi(t,["rev-parse","--git-common-dir"]);if(!e)return null;let r=(0,G.isAbsolute)(e)?e:(0,G.join)(t,e),n=(0,G.dirname)(r);return n&&n!=="/"&&n!=="."?n:null}function WS(t,e){if(!(0,G.basename)(t))return{claimable:!1,blocker:"not-a-project"};let r=xu(t);if(!r)return{claimable:!1,blocker:"not-a-project"};let n;try{n=xi(e)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return ys(n,r)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function Ii(t,e){return WS(t,e).claimable}function Iu(){let t=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(t)&&t>0?t:3e4}function BS(){return Math.min(Iu(),5e3)}function GS(t){return typeof t=="object"&&t!==null&&t.code==="ETIMEDOUT"}function Ru(t,e,r=Iu()){return ve("git",e,{cwd:t,encoding:"utf-8",timeout:r,stdio:["ignore","pipe","pipe"]}).trim()||null}function Pi(t,e){try{return Ru(t,e)}catch(r){if(!GS(r))return null;try{return Ru(t,e,BS())}catch{return null}}}function Pu(t){return Pi(t,["remote","get-url","origin"])}function Du(t,e,r){return t.remoteUrl&&e?ku(t.remoteUrl)===ku(e):!t.remoteUrl&&!e?t.repoName==null||t.repoName===r:!1}function ku(t){return Ou(t).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function Ou(t){let e=t.match(/^(?:git\+)?ssh:\/\/(?:[^@/]+@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(e)return`https://${co(e[1])}${Tu(e[2],"22")}/${e[3]}`;let r=t.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(r)return`https://${co(r[1])}${Tu(r[2],"9418")}/${r[3]}`;let n=t.match(/^[^@/:]+@([^/:]+):(.+)$/);return n?`https://${co(n[1])}/${n[2]}`:t}function Tu(t,e){return t===void 0||t===e?"":`:${t}`}function Lu(t,e,r){let n=null,o=null,s=null;for(let i=2;i<=99;i++){let a=(0,G.join)(t,`${e}-${i}`);if(!(0,it.existsSync)(a)){s===null&&(s=a);continue}let l=$u(a);if(l&&Du(l,r,e)){n=a;break}l&&o===null&&Mu(a,l)&&(o=a)}return{match:n,stub:o,firstUnused:s}}function qS(t,e,r){let n=Lu(t,e,r);if(n.match)return n.match;let o=n.stub??n.firstUnused??(0,G.join)(t,`${e}-${Date.now()}`);return Ai(o,e,r),o}function Ai(t,e,r){if(Se())return;let n=new te((0,G.join)(t,".jolli"));n.ensure();let o=n.readConfig();n.saveConfig({...o,remoteUrl:r??void 0,repoName:e})}function Mu(t,e){return e.remoteUrl==null&&e.repoName==null}function $u(t){let e=(0,G.join)(t,".jolli","config.json");if(!(0,it.existsSync)(e))return null;try{return JSON.parse((0,it.readFileSync)(e,"utf-8"))}catch{return null}}var it,vu,G,US,Nu,Ur=E(()=>{"use strict";it=require("node:fs"),vu=require("node:os"),G=require("node:path");y();Ee();lo();ee();bu();US=p("KBPathResolver");Nu=new Set(["github.com","gitlab.com","bitbucket.org"])});async function Mi(t){let e=await H(["config","--get","remote.origin.url"],t),r=e.exitCode===0?e.stdout.trim():"";return r.length===0?Jr(t):Vu(r,t)}function Vu(t,e){let r=t.trim();if(r.length===0)return Jr(e);let n=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(r);if(n&&!r.includes("://")){let i=n[2].toLowerCase(),a=Ku(i,qu(n[3]));return`https://${i}/${a}`}let o;try{o=new URL(r)}catch{return Jr(e)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let i=o.hostname.toLowerCase(),a=Ku(i,qu(o.pathname.replace(/^\/+/,""))),l=ZS(s,o.port);return`https://${i}${l}/${a}`}return Jr(s==="file"?o.pathname:e)}function Jr(t){let e=Tr(be(t));return e.length===0?"file:///":e.startsWith("/")?`file://${e}`:`file:///${e}`}function qu(t){let e=Tr(t);return e.toLowerCase().endsWith(".git")&&(e=e.slice(0,-4)),Tr(e)}function Ku(t,e){return Nu.has(t)?e.toLowerCase():e}function ZS(t,e){return e.length===0?"":t==="ssh"||t==="git"?e===QS[t]?"":`:${e}`:`:${e}`}var QS,ho=E(()=>{"use strict";ie();Ur();ee();QS={ssh:"22",git:"9418"}});function $i(){return"cursor-plugin"}var Xt,go=E(()=>{"use strict";Xt="cursor-plugin/1.0.0"});var Yu,zu,Qu,Zu,ep,tp,rp,np,op,sp,ji,ip,ap,lp,cp,yo=E(()=>{"use strict";Yu=`
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
`,zu=`
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
`,Qu=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,Zu=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,ep=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,tp=`
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
`,rp=`
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
`,np=`
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
`,op=`
DROP TRIGGER IF EXISTS repos_no_delete;
`,sp=`
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
`,ji=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,ip=`
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
${ji}
`,ap=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,lp=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,cp=`
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
`});function Gr(){return(0,wo.join)(se(),"jollimemory.db")}function bt(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Br.major?!0:r<Br.major?!1:n>=Br.minor}function zt(t){try{let e=t.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),r=Number.parseInt(e?.value??"",10);return Number.isFinite(r)?r:0}catch{return 0}}function oE(t){try{return(t.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function Ui(t){try{return{kind:"rows",rows:t.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(e){let r=oE(t);return r==="absent"?{kind:"none"}:{kind:"unreadable",reason:R(e),tableConfirmed:r==="present"}}}function dp(t){let e=Ui(t);return e.kind==="rows"?e.rows:void 0}function Wr(t,e){t.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(e.slot,e.name,e.outcome,e.appliedBy,e.atMs,e.durationMs,e.ddl)}function sE(t){let e=new Map;for(let r of t){let n=e.get(r.name);(!n||r.seq>n.seq)&&e.set(r.name,r)}return e}function iE(t){let e=new Map;for(let r of t){if(r.outcome!=="applied")continue;let n=e.get(r.name);(!n||r.seq>n.seq)&&e.set(r.name,r)}return e}function aE(t){return Qt.findIndex(e=>e.name===t)}function lE(t){let e=Ui(t);if(e.kind==="none")return;if(e.kind==="unreadable"){Yt.has(up)||(Yt.add(up),Ke.warn(e.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",e.reason));return}let r=e.rows,n=new Set(Qt.map(o=>o.name));for(let[o,s]of sE(r))n.has(o)||Yt.has(o)||(Yt.add(o),Ke.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,Xt));for(let[o,s]of iE(r))n.has(o)&&(Yt.has(o)||s.ddl!==Qt[aE(o)].ddl&&(Yt.add(o),Ke.warn("migration %s (slot %d) was applied by %s on %s with DIFFERENT DDL than this build (%s) carries \u2014 run `jolli doctor --schema-log` to see the log",o,s.slot,s.applied_by,new Date(s.applied_at_ms).toISOString().slice(0,10),Xt)))}function cE(t,e={}){let r=e.now??Date.now,n=e.appliedBy??Xt,o=zt(t),s=Ui(t),i=new Set,a=[];if(s.kind==="rows")for(let d of s.rows)(d.outcome==="applied"||d.outcome==="baseline")&&i.add(d.name);else{let d=Math.min(o,Qt.length),m=Qt.slice(0,d).map((f,g)=>({slot:g,name:f.name,ddl:f.ddl}));for(let f of m)i.add(f.name);s.kind==="none"?a=m:Ke.warn(s.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 migrating from the version stamp and recording nothing":"the database could not be queried for its migration log (%s) \u2014 migrating from the version stamp and recording nothing",s.reason)}let l=Qt.map((d,m)=>({m:d,slot:m})).filter(({m:d})=>!i.has(d.name));if(l.length===0)return;let c=[],u=()=>{for(let d of a)Wr(t,{...d,outcome:"baseline",appliedBy:n,atMs:r(),durationMs:0});a=[];for(let d of c)Wr(t,d);c.length=0};t.exec("PRAGMA foreign_keys = OFF");try{for(let{m:d,slot:m}of l){let f=r();t.exec("BEGIN IMMEDIATE");try{let g=dp(t);if(g?.some(b=>b.name===d.name&&(b.outcome==="applied"||b.outcome==="baseline"))){u(),Wr(t,{slot:m,name:d.name,outcome:"skipped",appliedBy:n,atMs:r(),durationMs:0,ddl:d.ddl}),t.exec("COMMIT");continue}if(!g&&zt(t)>m){t.exec("COMMIT");continue}t.exec(d.ddl);let h={slot:m,name:d.name,outcome:"applied",appliedBy:n,atMs:r(),durationMs:r()-f,ddl:d.ddl};dp(t)?(u(),Wr(t,h)):c.push(h);let k=Math.max(zt(t),m+1);dE(t,"schema_version",String(k)),t.exec("COMMIT")}catch(g){try{t.exec("ROLLBACK")}catch{}try{t.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(d.name),Wr(t,{slot:m,name:d.name,outcome:"failed",appliedBy:n,atMs:r(),durationMs:r()-f,ddl:d.ddl})}catch(h){Ke.debug("could not record the failed migration %s: %s",d.name,R(h))}throw g}}}finally{t.exec("PRAGMA foreign_keys = ON")}Ke.info("dashboard schema migrated %d \u2192 %d (%s)",o,zt(t),l.map(({m:d})=>d.name).join(", "))}function dE(t,e,r){t.prepare(`INSERT INTO schema_meta (key, value) VALUES (?, ?)
		 ON CONFLICT(key) DO UPDATE SET value = excluded.value`).run(e,r)}function uE(t){pp!==t&&(pp=t,Ke.warn("database is at format v%d, this build (%s) reads v%d \u2014 data written by newer builds is not visible here",t,Xt,Hi))}function pE(t){let e=(0,wo.dirname)(t);try{(0,Ve.mkdirSync)(e,{recursive:!0,mode:448}),((0,Ve.statSync)(e).mode&511)!==448&&(0,Ve.chmodSync)(e,448)}catch(r){Ke.warn("could not restrict %s to owner-only: %s",e,R(r))}}function mE(t){for(let e of[t,`${t}-wal`,`${t}-shm`])try{((0,Ve.statSync)(e).mode&511)!==384&&(0,Ve.chmodSync)(e,384)}catch(r){mt(r)||Ke.warn("could not restrict %s to 0600: %s",e,R(r))}}async function mp(t,e){if(!bt())throw new Fi(process.versions.node);let r=e.dbPath??Gr(),n=e.maxAttempts??4,o=e.baseDelayMs??50;t||pE(r);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(r,{readOnly:t});for(let l of t?rE:tE)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${e.busyTimeoutMs??nE}`),t||mE(r),a}catch(l){try{a?.close()}catch{}if(St(l)?.kind!=="locked"||i>=n)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function fp(t,e={}){let r=await mp(!1,e);try{let n=zt(r);return n>Hi&&uE(n),lE(r),cE(r),await t(r)}finally{r.close()}}async function Ji(t,e={}){let r=await mp(!0,e);try{return await t(r)}finally{r.close()}}function So(t,e){t.exec("BEGIN IMMEDIATE");try{let r=e();return t.exec("COMMIT"),r}catch(r){try{t.exec("ROLLBACK")}catch{}throw r}}var Ve,wo,Ke,Hi,Br,Fi,tE,rE,nE,Qt,Yt,up,pp,at=E(()=>{"use strict";Ve=require("node:fs"),wo=require("node:path");go();pe();De();y();yo();Ke=p("DashboardDb"),Hi=8,Br={major:22,minor:13};Fi=class extends Error{constructor(e){super(`The Jolli dashboard needs Node >= ${Br.major}.${Br.minor} for built-in SQLite (running ${e}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},tE=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],rE=["PRAGMA foreign_keys = ON"],nE=2e3,Qt=[{name:"BASELINE_DDL",ddl:Yu+`
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
`+sp},{name:"RECALL_RECEIPTS_DDL",ddl:zu},{name:"SKILL_CONTEXT_KIND_DDL",ddl:Qu},{name:"EVENT_FAILED_KIND_DDL",ddl:Zu},{name:"TOOL_CALL_TIME_DDL",ddl:ep},{name:"SCHEMA_MIGRATIONS_DDL",ddl:np},{name:"REPOS_DELETE_ALLOWED_DDL",ddl:op},{name:"SESSION_STATS_SYNC_DDL",ddl:rp+tp+ip+ji+ap+lp+cp}];Yt=new Set,up="\0unreadable-log";pp=0});function Wi(t){let e=s=>{try{return(0,qr.statSync)(`${t}${s}`),!0}catch{return!1}},r=e(""),n=e("-wal"),o=e("-shm");return r?n&&o?"healthy-active":n?"healthy-recoverable":"healthy-clean":n||o?"alarm-sidecars-only":"absent"}var qr,eN,Bi=E(()=>{"use strict";qr=require("node:fs");y();eN=p("DbDetection")});async function gE(t){try{let r=await Mi(t);if(r&&!r.startsWith("file:"))return{identity:r,remoteUrl:r}}catch(r){fE.debug("no canonical remote for %s (%s) \u2014 using path identity",t,R(r))}let e=(0,hp.createHash)("sha256").update(be(t)).digest("hex").slice(0,32);return{identity:`${hE}${e}`}}async function _t(t){return gE(await ks(t))}var hp,fE,hE,Zt=E(()=>{"use strict";hp=require("node:crypto");Ms();ie();ho();xe();ee();Ue();pe();y();fE=p("RepoRegistry"),hE="local:"});var yp={};ms(yp,{hasCutoverRow:()=>EE,resetCutoverRouterCaches:()=>wE,resolveCutoverRoute:()=>Kr});function wE(){Gi.clear()}async function SE(t){let e=Gi.get(t);if(e!==void 0)return e;let{identity:r}=await _t(t);return Gi.set(t,r),r}async function gp(t,e){if(!bt())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let r=Wi(e);if(r==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(r==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:n}=await import("node:sqlite"),o=new n(e,{readOnly:!0});try{let s=await SE(t),i=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!i)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(i.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(n){return{kind:"unavailable",reason:R(n)}}}async function EE(t,e={}){return(await gp(t,e.dbPath??Gr())).kind==="row"}async function Kr(t,e={}){let r=await Ir(t).catch(()=>null),n=await gp(t,e.dbPath??Gr());return n.kind==="row"?{state:"cutover",record:n.record}:r!==null?n.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:n.reason}:n.kind==="unavailable"?(yE.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",n.reason),{state:"uncutover",warning:n.reason}):{state:"uncutover"}}var yE,Gi,Eo=E(()=>{"use strict";Ue();y();at();Bi();Zt();yE=p("CutoverRouter"),Gi=new Map});var ir=_((oM,jm)=>{"use strict";var Lb="2.0.0",Mb=Number.MAX_SAFE_INTEGER||9007199254740991,$b=16,jb=250,Fb=["major","premajor","minor","preminor","patch","prepatch","prerelease"];jm.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:$b,MAX_SAFE_BUILD_LENGTH:jb,MAX_SAFE_INTEGER:Mb,RELEASE_TYPES:Fb,SEMVER_SPEC_VERSION:Lb,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var on=_((sM,Fm)=>{"use strict";var Hb=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};Fm.exports=Hb});var ar=_((Ne,Hm)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:pa,MAX_SAFE_BUILD_LENGTH:Ub,MAX_LENGTH:Jb}=ir(),Wb=on();Ne=Hm.exports={};var Bb=Ne.re=[],Gb=Ne.safeRe=[],w=Ne.src=[],qb=Ne.safeSrc=[],S=Ne.t={},Kb=0,ma="[a-zA-Z0-9-]",Vb=[["\\s",1],["\\d",Jb],[ma,Ub]],Xb=t=>{for(let[e,r]of Vb)t=t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);return t},C=(t,e,r)=>{let n=Xb(e),o=Kb++;Wb(t,o,e),S[t]=o,w[o]=e,qb[o]=n,Bb[o]=new RegExp(e,r?"g":void 0),Gb[o]=new RegExp(n,r?"g":void 0)};C("NUMERICIDENTIFIER","0|[1-9]\\d*");C("NUMERICIDENTIFIERLOOSE","\\d+");C("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${ma}*`);C("MAINVERSION",`(${w[S.NUMERICIDENTIFIER]})\\.(${w[S.NUMERICIDENTIFIER]})\\.(${w[S.NUMERICIDENTIFIER]})`);C("MAINVERSIONLOOSE",`(${w[S.NUMERICIDENTIFIERLOOSE]})\\.(${w[S.NUMERICIDENTIFIERLOOSE]})\\.(${w[S.NUMERICIDENTIFIERLOOSE]})`);C("PRERELEASEIDENTIFIER",`(?:${w[S.NONNUMERICIDENTIFIER]}|${w[S.NUMERICIDENTIFIER]})`);C("PRERELEASEIDENTIFIERLOOSE",`(?:${w[S.NONNUMERICIDENTIFIER]}|${w[S.NUMERICIDENTIFIERLOOSE]})`);C("PRERELEASE",`(?:-(${w[S.PRERELEASEIDENTIFIER]}(?:\\.${w[S.PRERELEASEIDENTIFIER]})*))`);C("PRERELEASELOOSE",`(?:-?(${w[S.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${w[S.PRERELEASEIDENTIFIERLOOSE]})*))`);C("BUILDIDENTIFIER",`${ma}+`);C("BUILD",`(?:\\+(${w[S.BUILDIDENTIFIER]}(?:\\.${w[S.BUILDIDENTIFIER]})*))`);C("FULLPLAIN",`v?${w[S.MAINVERSION]}${w[S.PRERELEASE]}?${w[S.BUILD]}?`);C("FULL",`^${w[S.FULLPLAIN]}$`);C("LOOSEPLAIN",`[v=\\s]*${w[S.MAINVERSIONLOOSE]}${w[S.PRERELEASELOOSE]}?${w[S.BUILD]}?`);C("LOOSE",`^${w[S.LOOSEPLAIN]}$`);C("GTLT","((?:<|>)?=?)");C("XRANGEIDENTIFIERLOOSE",`${w[S.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);C("XRANGEIDENTIFIER",`${w[S.NUMERICIDENTIFIER]}|x|X|\\*`);C("XRANGEPLAIN",`[v=\\s]*(${w[S.XRANGEIDENTIFIER]})(?:\\.(${w[S.XRANGEIDENTIFIER]})(?:\\.(${w[S.XRANGEIDENTIFIER]})(?:${w[S.PRERELEASE]})?${w[S.BUILD]}?)?)?`);C("XRANGEPLAINLOOSE",`[v=\\s]*(${w[S.XRANGEIDENTIFIERLOOSE]})(?:\\.(${w[S.XRANGEIDENTIFIERLOOSE]})(?:\\.(${w[S.XRANGEIDENTIFIERLOOSE]})(?:${w[S.PRERELEASELOOSE]})?${w[S.BUILD]}?)?)?`);C("XRANGE",`^${w[S.GTLT]}\\s*${w[S.XRANGEPLAIN]}$`);C("XRANGELOOSE",`^${w[S.GTLT]}\\s*${w[S.XRANGEPLAINLOOSE]}$`);C("COERCEPLAIN",`(^|[^\\d])(\\d{1,${pa}})(?:\\.(\\d{1,${pa}}))?(?:\\.(\\d{1,${pa}}))?`);C("COERCE",`${w[S.COERCEPLAIN]}(?:$|[^\\d])`);C("COERCEFULL",w[S.COERCEPLAIN]+`(?:${w[S.PRERELEASE]})?(?:${w[S.BUILD]})?(?:$|[^\\d])`);C("COERCERTL",w[S.COERCE],!0);C("COERCERTLFULL",w[S.COERCEFULL],!0);C("LONETILDE","(?:~>?)");C("TILDETRIM",`(\\s*)${w[S.LONETILDE]}\\s+`,!0);Ne.tildeTrimReplace="$1~";C("TILDE",`^${w[S.LONETILDE]}${w[S.XRANGEPLAIN]}$`);C("TILDELOOSE",`^${w[S.LONETILDE]}${w[S.XRANGEPLAINLOOSE]}$`);C("LONECARET","(?:\\^)");C("CARETTRIM",`(\\s*)${w[S.LONECARET]}\\s+`,!0);Ne.caretTrimReplace="$1^";C("CARET",`^${w[S.LONECARET]}${w[S.XRANGEPLAIN]}$`);C("CARETLOOSE",`^${w[S.LONECARET]}${w[S.XRANGEPLAINLOOSE]}$`);C("COMPARATORLOOSE",`^${w[S.GTLT]}\\s*(${w[S.LOOSEPLAIN]})$|^$`);C("COMPARATOR",`^${w[S.GTLT]}\\s*(${w[S.FULLPLAIN]})$|^$`);C("COMPARATORTRIM",`(\\s*)${w[S.GTLT]}\\s*(${w[S.LOOSEPLAIN]}|${w[S.XRANGEPLAIN]})`,!0);Ne.comparatorTrimReplace="$1$2$3";C("HYPHENRANGE",`^\\s*(${w[S.XRANGEPLAIN]})\\s+-\\s+(${w[S.XRANGEPLAIN]})\\s*$`);C("HYPHENRANGELOOSE",`^\\s*(${w[S.XRANGEPLAINLOOSE]})\\s+-\\s+(${w[S.XRANGEPLAINLOOSE]})\\s*$`);C("STAR","(<|>)?=?\\s*\\*");C("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");C("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Do=_((iM,Um)=>{"use strict";var Yb=Object.freeze({loose:!0}),zb=Object.freeze({}),Qb=t=>t?typeof t!="object"?Yb:t:zb;Um.exports=Qb});var fa=_((aM,Bm)=>{"use strict";var Jm=/^[0-9]+$/,Wm=(t,e)=>{if(typeof t=="number"&&typeof e=="number")return t===e?0:t<e?-1:1;let r=Jm.test(t),n=Jm.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},Zb=(t,e)=>Wm(e,t);Bm.exports={compareIdentifiers:Wm,rcompareIdentifiers:Zb}});var q=_((lM,qm)=>{"use strict";var No=on(),{MAX_LENGTH:Gm,MAX_SAFE_INTEGER:Oo}=ir(),{safeRe:Lo,t:Mo}=ar(),e_=Do(),{compareIdentifiers:ha}=fa(),ga=class t{constructor(e,r){if(r=e_(r),e instanceof t){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>Gm)throw new TypeError(`version is longer than ${Gm} characters`);No("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=e.trim().match(r.loose?Lo[Mo.LOOSE]:Lo[Mo.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Oo||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Oo||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Oo||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<Oo)return s}return o}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(No("SemVer.compare",this.version,this.options,e),!(e instanceof t)){if(typeof e=="string"&&e===this.version)return 0;e=new t(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof t||(e=new t(e,this.options)),this.major<e.major?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:this.patch>e.patch?1:0}comparePre(e){if(e instanceof t||(e=new t(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],o=e.prerelease[r];if(No("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return ha(n,o)}while(++r)}compareBuild(e){e instanceof t||(e=new t(e,this.options));let r=0;do{let n=this.build[r],o=e.build[r];if(No("build compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return ha(n,o)}while(++r)}inc(e,r,n){if(e.startsWith("pre")){if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(r){let o=`-${r}`.match(this.options.loose?Lo[Mo.PRERELEASELOOSE]:Lo[Mo.PRERELEASE]);if(!o||o[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let s=[r,o];n===!1&&(s=[r]),ha(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};qm.exports=ga});var ct=_((cM,Vm)=>{"use strict";var Km=q(),t_=(t,e,r=!1)=>{if(t instanceof Km)return t;try{return new Km(t,e)}catch(n){if(!r)return null;throw n}};Vm.exports=t_});var Ym=_((dM,Xm)=>{"use strict";var r_=ct(),n_=(t,e)=>{let r=r_(t,e);return r?r.version:null};Xm.exports=n_});var Qm=_((uM,zm)=>{"use strict";var o_=ct(),s_=(t,e)=>{let r=o_(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};zm.exports=s_});var tf=_((pM,ef)=>{"use strict";var Zm=q(),i_=(t,e,r,n,o)=>{typeof r=="string"&&(o=n,n=r,r=void 0);try{return new Zm(t instanceof Zm?t.version:t,r).inc(e,n,o).version}catch{return null}};ef.exports=i_});var of=_((mM,nf)=>{"use strict";var rf=ct(),a_=(t,e)=>{let r=rf(t,null,!0),n=rf(e,null,!0),o=r.compare(n);if(o===0)return null;let s=o>0,i=s?r:n,a=s?n:r,l=!!i.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(i)===0)return a.minor&&!a.patch?"minor":"patch"}let u=l?"pre":"";return r.major!==n.major?u+"major":r.minor!==n.minor?u+"minor":r.patch!==n.patch?u+"patch":"prerelease"};nf.exports=a_});var af=_((fM,sf)=>{"use strict";var l_=q(),c_=(t,e)=>new l_(t,e).major;sf.exports=c_});var cf=_((hM,lf)=>{"use strict";var d_=q(),u_=(t,e)=>new d_(t,e).minor;lf.exports=u_});var uf=_((gM,df)=>{"use strict";var p_=q(),m_=(t,e)=>new p_(t,e).patch;df.exports=m_});var mf=_((yM,pf)=>{"use strict";var f_=ct(),h_=(t,e)=>{let r=f_(t,e);return r&&r.prerelease.length?r.prerelease:null};pf.exports=h_});var fe=_((wM,hf)=>{"use strict";var ff=q(),g_=(t,e,r)=>new ff(t,r).compare(new ff(e,r));hf.exports=g_});var yf=_((SM,gf)=>{"use strict";var y_=fe(),w_=(t,e,r)=>y_(e,t,r);gf.exports=w_});var Sf=_((EM,wf)=>{"use strict";var S_=fe(),E_=(t,e)=>S_(t,e,!0);wf.exports=E_});var $o=_((bM,bf)=>{"use strict";var Ef=q(),b_=(t,e,r)=>{let n=new Ef(t,r),o=new Ef(e,r);return n.compare(o)||n.compareBuild(o)};bf.exports=b_});var Rf=_((_M,_f)=>{"use strict";var __=$o(),R_=(t,e)=>t.sort((r,n)=>__(r,n,e));_f.exports=R_});var Tf=_((RM,kf)=>{"use strict";var k_=$o(),T_=(t,e)=>t.sort((r,n)=>k_(n,r,e));kf.exports=T_});var sn=_((kM,vf)=>{"use strict";var v_=fe(),C_=(t,e,r)=>v_(t,e,r)>0;vf.exports=C_});var jo=_((TM,Cf)=>{"use strict";var A_=fe(),x_=(t,e,r)=>A_(t,e,r)<0;Cf.exports=x_});var ya=_((vM,Af)=>{"use strict";var I_=fe(),P_=(t,e,r)=>I_(t,e,r)===0;Af.exports=P_});var wa=_((CM,xf)=>{"use strict";var D_=fe(),N_=(t,e,r)=>D_(t,e,r)!==0;xf.exports=N_});var Fo=_((AM,If)=>{"use strict";var O_=fe(),L_=(t,e,r)=>O_(t,e,r)>=0;If.exports=L_});var Ho=_((xM,Pf)=>{"use strict";var M_=fe(),$_=(t,e,r)=>M_(t,e,r)<=0;Pf.exports=$_});var Sa=_((IM,Df)=>{"use strict";var j_=ya(),F_=wa(),H_=sn(),U_=Fo(),J_=jo(),W_=Ho(),B_=(t,e,r,n)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return j_(t,r,n);case"!=":return F_(t,r,n);case">":return H_(t,r,n);case">=":return U_(t,r,n);case"<":return J_(t,r,n);case"<=":return W_(t,r,n);default:throw new TypeError(`Invalid operator: ${e}`)}};Df.exports=B_});var Of=_((PM,Nf)=>{"use strict";var G_=q(),q_=ct(),{safeRe:Uo,t:Jo}=ar(),K_=(t,e)=>{if(t instanceof G_)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(e.includePrerelease?Uo[Jo.COERCEFULL]:Uo[Jo.COERCE]);else{let l=e.includePrerelease?Uo[Jo.COERCERTLFULL]:Uo[Jo.COERCERTL],c;for(;(c=l.exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||c.index+c[0].length!==r.index+r[0].length)&&(r=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(r===null)return null;let n=r[2],o=r[3]||"0",s=r[4]||"0",i=e.includePrerelease&&r[5]?`-${r[5]}`:"",a=e.includePrerelease&&r[6]?`+${r[6]}`:"";return q_(`${n}.${o}.${s}${i}${a}`,e)};Nf.exports=K_});var Mf=_((DM,Lf)=>{"use strict";var V_=ct(),X_=ir(),Y_=q(),z_=(t,e,r)=>{if(!X_.RELEASE_TYPES.includes(e))return null;let n=Q_(t,r);return n&&Z_(n,e)},Q_=(t,e)=>{let r=t instanceof Y_?t.version:t;return V_(r,e)},Z_=(t,e)=>{if(eR(e))return t.version;switch(t.prerelease=[],e){case"major":t.minor=0,t.patch=0;break;case"minor":t.patch=0;break}return t.format()},eR=t=>t.startsWith("pre");Lf.exports=z_});var jf=_((NM,$f)=>{"use strict";var Ea=class{constructor(){this.max=1e3,this.map=new Map}get(e){let r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(e,r)}return this}};$f.exports=Ea});var he=_((OM,Jf)=>{"use strict";var tR=/\s+/g,ba=class t{constructor(e,r){if(r=nR(r),e instanceof t)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new t(e.raw,r);if(e instanceof _a)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e.trim().replace(tR," "),this.set=this.raw.split("||").map(n=>this.parseRange(n.trim())).filter(n=>n.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let n=this.set[0];if(this.set=this.set.filter(o=>!Hf(o[0])),this.set.length===0)this.set=[n];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&pR(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let r=this.set[e];for(let n=0;n<r.length;n++)n>0&&(this.formatted+=" "),this.formatted+=r[n].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(uR,"");let n=((this.options.includePrerelease&&cR)|(this.options.loose&&dR))+":"+e,o=Ff.get(n);if(o)return o;let s=this.options.loose,i=s?re[K.HYPHENRANGELOOSE]:re[K.HYPHENRANGE];e=e.replace(i,_R(this.options.includePrerelease)),$("hyphen replace",e),e=e.replace(re[K.COMPARATORTRIM],iR),$("comparator trim",e),e=e.replace(re[K.TILDETRIM],aR),$("tilde trim",e),e=e.replace(re[K.CARETTRIM],lR),$("caret trim",e);let a=e.split(" ").map(d=>mR(d,this.options)).join(" ").split(/\s+/).map(d=>bR(d,this.options));s&&(a=a.filter(d=>($("loose invalid filter",d,this.options),!!d.match(re[K.COMPARATORLOOSE])))),$("range list",a);let l=new Map,c=a.map(d=>new _a(d,this.options));for(let d of c){if(Hf(d))return[d];l.set(d.value,d)}l.size>1&&l.has("")&&l.delete("");let u=[...l.values()];return Ff.set(n,u),u}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Range is required");return this.set.some(n=>Uf(n,r)&&e.set.some(o=>Uf(o,r)&&n.every(s=>o.every(i=>s.intersects(i,r)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new oR(e,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(RR(this.set[r],e,this.options))return!0;return!1}};Jf.exports=ba;var rR=jf(),Ff=new rR,nR=Do(),_a=an(),$=on(),oR=q(),{safeRe:re,src:sR,t:K,comparatorTrimReplace:iR,tildeTrimReplace:aR,caretTrimReplace:lR}=ar(),{FLAG_INCLUDE_PRERELEASE:cR,FLAG_LOOSE:dR}=ir(),uR=new RegExp(sR[K.BUILD],"g"),Hf=t=>t.value==="<0.0.0-0",pR=t=>t.value==="",Uf=(t,e)=>{let r=!0,n=t.slice(),o=n.pop();for(;r&&n.length;)r=n.every(s=>o.intersects(s,e)),o=n.pop();return r},mR=(t,e)=>(t=t.replace(re[K.BUILD],""),$("comp",t,e),t=gR(t,e),$("caret",t),t=fR(t,e),$("tildes",t),t=wR(t,e),$("xrange",t),t=ER(t,e),$("stars",t),t),ne=t=>!t||t.toLowerCase()==="x"||t==="*",fR=(t,e)=>t.trim().split(/\s+/).map(r=>hR(r,e)).join(" "),hR=(t,e)=>{let r=e.loose?re[K.TILDELOOSE]:re[K.TILDE];return t.replace(r,(n,o,s,i,a)=>{$("tilde",t,n,o,s,i,a);let l;return ne(o)?l="":ne(s)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:ne(i)?l=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:a?($("replaceTilde pr",a),l=`>=${o}.${s}.${i}-${a} <${o}.${+s+1}.0-0`):l=`>=${o}.${s}.${i} <${o}.${+s+1}.0-0`,$("tilde return",l),l})},gR=(t,e)=>t.trim().split(/\s+/).map(r=>yR(r,e)).join(" "),yR=(t,e)=>{$("caret",t,e);let r=e.loose?re[K.CARETLOOSE]:re[K.CARET],n=e.includePrerelease?"-0":"";return t.replace(r,(o,s,i,a,l)=>{$("caret",t,o,s,i,a,l);let c;return ne(s)?c="":ne(i)?c=`>=${s}.0.0${n} <${+s+1}.0.0-0`:ne(a)?s==="0"?c=`>=${s}.${i}.0${n} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.0${n} <${+s+1}.0.0-0`:l?($("replaceCaret pr",l),s==="0"?i==="0"?c=`>=${s}.${i}.${a}-${l} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}-${l} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a}-${l} <${+s+1}.0.0-0`):($("no pr"),s==="0"?i==="0"?c=`>=${s}.${i}.${a}${n} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}${n} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a} <${+s+1}.0.0-0`),$("caret return",c),c})},wR=(t,e)=>($("replaceXRanges",t,e),t.split(/\s+/).map(r=>SR(r,e)).join(" ")),SR=(t,e)=>{t=t.trim();let r=e.loose?re[K.XRANGELOOSE]:re[K.XRANGE];return t.replace(r,(n,o,s,i,a,l)=>{$("xRange",t,n,o,s,i,a,l);let c=ne(s),u=c||ne(i),d=u||ne(a),m=d;return o==="="&&m&&(o=""),l=e.includePrerelease?"-0":"",c?o===">"||o==="<"?n="<0.0.0-0":n="*":o&&m?(u&&(i=0),a=0,o===">"?(o=">=",u?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):o==="<="&&(o="<",u?s=+s+1:i=+i+1),o==="<"&&(l="-0"),n=`${o+s}.${i}.${a}${l}`):u?n=`>=${s}.0.0${l} <${+s+1}.0.0-0`:d&&(n=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),$("xRange return",n),n})},ER=(t,e)=>($("replaceStars",t,e),t.trim().replace(re[K.STAR],"")),bR=(t,e)=>($("replaceGTE0",t,e),t.trim().replace(re[e.includePrerelease?K.GTE0PRE:K.GTE0],"")),_R=t=>(e,r,n,o,s,i,a,l,c,u,d,m)=>(ne(n)?r="":ne(o)?r=`>=${n}.0.0${t?"-0":""}`:ne(s)?r=`>=${n}.${o}.0${t?"-0":""}`:i?r=`>=${r}`:r=`>=${r}${t?"-0":""}`,ne(c)?l="":ne(u)?l=`<${+c+1}.0.0-0`:ne(d)?l=`<${c}.${+u+1}.0-0`:m?l=`<=${c}.${u}.${d}-${m}`:t?l=`<${c}.${u}.${+d+1}-0`:l=`<=${l}`,`${r} ${l}`.trim()),RR=(t,e,r)=>{for(let n=0;n<t.length;n++)if(!t[n].test(e))return!1;if(e.prerelease.length&&!r.includePrerelease){for(let n=0;n<t.length;n++)if($(t[n].semver),t[n].semver!==_a.ANY&&t[n].semver.prerelease.length>0){let o=t[n].semver;if(o.major===e.major&&o.minor===e.minor&&o.patch===e.patch)return!0}return!1}return!0}});var an=_((LM,Vf)=>{"use strict";var ln=Symbol("SemVer ANY"),Ta=class t{static get ANY(){return ln}constructor(e,r){if(r=Wf(r),e instanceof t){if(e.loose===!!r.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),ka("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===ln?this.value="":this.value=this.operator+this.semver.version,ka("comp",this)}parse(e){let r=this.options.loose?Bf[Gf.COMPARATORLOOSE]:Bf[Gf.COMPARATOR],n=e.match(r);if(!n)throw new TypeError(`Invalid comparator: ${e}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new qf(n[2],this.options.loose):this.semver=ln}toString(){return this.value}test(e){if(ka("Comparator.test",e,this.options.loose),this.semver===ln||e===ln)return!0;if(typeof e=="string")try{e=new qf(e,this.options)}catch{return!1}return Ra(e,this.operator,this.semver,this.options)}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new Kf(e.value,r).test(this.value):e.operator===""?e.value===""?!0:new Kf(this.value,r).test(e.semver):(r=Wf(r),r.includePrerelease&&(this.value==="<0.0.0-0"||e.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||Ra(this.semver,"<",e.semver,r)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||Ra(this.semver,">",e.semver,r)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}};Vf.exports=Ta;var Wf=Do(),{safeRe:Bf,t:Gf}=ar(),Ra=Sa(),ka=on(),qf=q(),Kf=he()});var cn=_((MM,Xf)=>{"use strict";var kR=he(),TR=(t,e,r)=>{try{e=new kR(e,r)}catch{return!1}return e.test(t)};Xf.exports=TR});var zf=_(($M,Yf)=>{"use strict";var vR=he(),CR=(t,e)=>new vR(t,e).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));Yf.exports=CR});var Zf=_((jM,Qf)=>{"use strict";var AR=q(),xR=he(),IR=(t,e,r)=>{let n=null,o=null,s=null;try{s=new xR(e,r)}catch{return null}return t.forEach(i=>{s.test(i)&&(!n||o.compare(i)===-1)&&(n=i,o=new AR(n,r))}),n};Qf.exports=IR});var th=_((FM,eh)=>{"use strict";var PR=q(),DR=he(),NR=(t,e,r)=>{let n=null,o=null,s=null;try{s=new DR(e,r)}catch{return null}return t.forEach(i=>{s.test(i)&&(!n||o.compare(i)===1)&&(n=i,o=new PR(n,r))}),n};eh.exports=NR});var oh=_((HM,nh)=>{"use strict";var va=q(),OR=he(),rh=sn(),LR=(t,e)=>{t=new OR(t,e);let r=new va("0.0.0");if(t.test(r)||(r=new va("0.0.0-0"),t.test(r)))return r;r=null;for(let n=0;n<t.set.length;++n){let o=t.set[n],s=null;o.forEach(i=>{let a=new va(i.semver.version);switch(i.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||rh(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),s&&(!r||rh(r,s))&&(r=s)}return r&&t.test(r)?r:null};nh.exports=LR});var ih=_((UM,sh)=>{"use strict";var MR=he(),$R=(t,e)=>{try{return new MR(t,e).range||"*"}catch{return null}};sh.exports=$R});var Wo=_((JM,dh)=>{"use strict";var jR=q(),ch=an(),{ANY:FR}=ch,HR=he(),UR=cn(),ah=sn(),lh=jo(),JR=Ho(),WR=Fo(),BR=(t,e,r,n)=>{t=new jR(t,n),e=new HR(e,n);let o,s,i,a,l;switch(r){case">":o=ah,s=JR,i=lh,a=">",l=">=";break;case"<":o=lh,s=WR,i=ah,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(UR(t,e,n))return!1;for(let c=0;c<e.set.length;++c){let u=e.set[c],d=null,m=null;if(u.forEach(f=>{f.semver===FR&&(f=new ch(">=0.0.0")),d=d||f,m=m||f,o(f.semver,d.semver,n)?d=f:i(f.semver,m.semver,n)&&(m=f)}),d.operator===a||d.operator===l||(!m.operator||m.operator===a)&&s(t,m.semver))return!1;if(m.operator===l&&i(t,m.semver))return!1}return!0};dh.exports=BR});var ph=_((WM,uh)=>{"use strict";var GR=Wo(),qR=(t,e,r)=>GR(t,e,">",r);uh.exports=qR});var fh=_((BM,mh)=>{"use strict";var KR=Wo(),VR=(t,e,r)=>KR(t,e,"<",r);mh.exports=VR});var yh=_((GM,gh)=>{"use strict";var hh=he(),XR=(t,e,r)=>(t=new hh(t,r),e=new hh(e,r),t.intersects(e,r));gh.exports=XR});var Sh=_((qM,wh)=>{"use strict";var YR=cn(),zR=fe();wh.exports=(t,e,r)=>{let n=[],o=null,s=null,i=t.sort((u,d)=>zR(u,d,r));for(let u of i)YR(u,e,r)?(s=u,o||(o=u)):(s&&n.push([o,s]),s=null,o=null);o&&n.push([o,null]);let a=[];for(let[u,d]of n)u===d?a.push(u):!d&&u===i[0]?a.push("*"):d?u===i[0]?a.push(`<=${d}`):a.push(`${u} - ${d}`):a.push(`>=${u}`);let l=a.join(" || "),c=typeof e.raw=="string"?e.raw:String(e);return l.length<c.length?l:e}});var Th=_((KM,kh)=>{"use strict";var Eh=he(),xa=an(),{ANY:Ca}=xa,Aa=cn(),Ia=fe(),QR=(t,e,r={})=>{if(t===e)return!0;t=new Eh(t,r),e=new Eh(e,r);let n=!1;e:for(let o of t.set){for(let s of e.set){let i=ek(o,s,r);if(n=n||i!==null,i)continue e}if(n)return!1}return!0},ZR=[new xa(">=0.0.0-0")],bh=[new xa(">=0.0.0")],ek=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===Ca){if(e.length===1&&e[0].semver===Ca)return!0;r.includePrerelease?t=ZR:t=bh}if(e.length===1&&e[0].semver===Ca){if(r.includePrerelease)return!0;e=bh}let n=new Set,o,s;for(let f of t)f.operator===">"||f.operator===">="?o=_h(o,f,r):f.operator==="<"||f.operator==="<="?s=Rh(s,f,r):n.add(f.semver);if(n.size>1)return null;let i;if(o&&s){if(i=Ia(o.semver,s.semver,r),i>0)return null;if(i===0&&(o.operator!==">="||s.operator!=="<="))return null}for(let f of n){if(o&&!Aa(f,String(o),r)||s&&!Aa(f,String(s),r))return null;for(let g of e)if(!Aa(f,String(g),r))return!1;return!0}let a,l,c,u,d=s&&!r.includePrerelease&&s.semver.prerelease.length?s.semver:!1,m=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1;d&&d.prerelease.length===1&&s.operator==="<"&&d.prerelease[0]===0&&(d=!1);for(let f of e){if(u=u||f.operator===">"||f.operator===">=",c=c||f.operator==="<"||f.operator==="<=",o){if(m&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===m.major&&f.semver.minor===m.minor&&f.semver.patch===m.patch&&(m=!1),f.operator===">"||f.operator===">="){if(a=_h(o,f,r),a===f&&a!==o)return!1}else if(o.operator===">="&&!f.test(o.semver))return!1}if(s){if(d&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===d.major&&f.semver.minor===d.minor&&f.semver.patch===d.patch&&(d=!1),f.operator==="<"||f.operator==="<="){if(l=Rh(s,f,r),l===f&&l!==s)return!1}else if(s.operator==="<="&&!f.test(s.semver))return!1}if(!f.operator&&(s||o)&&i!==0)return!1}return!(o&&c&&!s&&i!==0||s&&u&&!o&&i!==0||m||d)},_h=(t,e,r)=>{if(!t)return e;let n=Ia(t.semver,e.semver,r);return n>0?t:n<0||e.operator===">"&&t.operator===">="?e:t},Rh=(t,e,r)=>{if(!t)return e;let n=Ia(t.semver,e.semver,r);return n<0?t:n>0||e.operator==="<"&&t.operator==="<="?e:t};kh.exports=QR});var xh=_((VM,Ah)=>{"use strict";var Pa=ar(),vh=ir(),tk=q(),Ch=fa(),rk=ct(),nk=Ym(),ok=Qm(),sk=tf(),ik=of(),ak=af(),lk=cf(),ck=uf(),dk=mf(),uk=fe(),pk=yf(),mk=Sf(),fk=$o(),hk=Rf(),gk=Tf(),yk=sn(),wk=jo(),Sk=ya(),Ek=wa(),bk=Fo(),_k=Ho(),Rk=Sa(),kk=Of(),Tk=Mf(),vk=an(),Ck=he(),Ak=cn(),xk=zf(),Ik=Zf(),Pk=th(),Dk=oh(),Nk=ih(),Ok=Wo(),Lk=ph(),Mk=fh(),$k=yh(),jk=Sh(),Fk=Th();Ah.exports={parse:rk,valid:nk,clean:ok,inc:sk,diff:ik,major:ak,minor:lk,patch:ck,prerelease:dk,compare:uk,rcompare:pk,compareLoose:mk,compareBuild:fk,sort:hk,rsort:gk,gt:yk,lt:wk,eq:Sk,neq:Ek,gte:bk,lte:_k,cmp:Rk,coerce:kk,truncate:Tk,Comparator:vk,Range:Ck,satisfies:Ak,toComparators:xk,maxSatisfying:Ik,minSatisfying:Pk,minVersion:Dk,validRange:Nk,outside:Ok,gtr:Lk,ltr:Mk,intersects:$k,simplifyRange:jk,subset:Fk,SemVer:tk,re:Pa.re,src:Pa.src,tokens:Pa.t,SEMVER_SPEC_VERSION:vh.SEMVER_SPEC_VERSION,RELEASE_TYPES:vh.RELEASE_TYPES,compareIdentifiers:Ch.compareIdentifiers,rcompareIdentifiers:Ch.rcompareIdentifiers}});function jg(){return"0.99.13"}function Lg(t){return/^\d/.test(t)}function Fg(t,e){if(!Lg(t)||!Lg(e))return!1;let r=s=>s.split(".").map(i=>Number.parseInt(i,10)||0),n=r(t),o=r(e);for(let s=0;s<Math.max(n.length,o.length);s++){let i=n[s]??0,a=o[s]??0;if(i!==a)return i>a}return!1}function is(t,e=KT){return new Promise(r=>{let n=Buffer.alloc(0),o=!1,s=c=>{o||(o=!0,clearTimeout(l),t.removeListener("data",i),t.removeListener("close",a),t.removeListener("error",a),r(c))},i=c=>{n=Buffer.concat([n,c]);let u=n.indexOf(10);if(u===-1){n.length>VT&&s(void 0);return}s({line:n.subarray(0,u).toString("utf8"),rest:n.subarray(u+1)})},a=()=>s(void 0),l=setTimeout(()=>s(void 0),e);l.unref?.(),t.on("data",i),t.once("close",a),t.once("error",a)})}function Hg(t,e){return(0,gr.join)((0,Mg.tmpdir)(),`.jolli-${t}-${e}`)}function il(t){return`${JSON.stringify(t)}
`}var sl,Mg,gr,$g,ol,KT,VT,al=E(()=>{"use strict";sl=require("node:fs"),Mg=require("node:os"),gr=require("node:path"),$g=require("node:url");ee();KT=1e4,VT=4096});function zT(t){let e=(0,Pt.join)((0,Pt.dirname)((0,cl.fileURLToPath)(t)),XT);return(0,ll.existsSync)(e)?e:void 0}function dl(t,e=process.argv[1],r=process.execArgv){let n=zT(t);if(n)return{entry:n,nodeArgs:[]};let o=(0,Pt.dirname)((0,cl.fileURLToPath)(t)),s=(0,Pt.join)((0,Pt.dirname)(o),YT);if(e?.endsWith(".ts")&&(0,ll.existsSync)(s))return{entry:s,nodeArgs:r}}var ll,Pt,cl,XT,YT,Ug=E(()=>{"use strict";ll=require("node:fs"),Pt=require("node:path"),cl=require("node:url"),XT="Cli.js",YT="Cli.ts"});function ZT(t){return Hg("global",t)}function ev(t=(0,Wg.homedir)()){return(0,Jg.createHash)("sha256").update(kr(t,"win32")).digest("hex").slice(0,16)}function as(t={}){if((t.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${ev(t.home)}`;let r=t.uid??process.getuid?.()??0;return(0,Bg.join)(ZT(r),"daemon.sock")}function ml(t){let e;try{e=JSON.parse(t)}catch{return}if(typeof e!="object"||e===null)return;let{t:r,protocol:n,version:o,pid:s,startedAt:i}=e;if(!(r!=="hello"||n!==QT)&&!(typeof o!="string"||typeof s!="number"||typeof i!="number"))return{t:"hello",protocol:n,version:o,pid:s,startedAt:i}}var Jg,Wg,Bg,QT,ul,pl,Gg=E(()=>{"use strict";Jg=require("node:crypto"),Wg=require("node:os"),Bg=require("node:path");al();ee();QT=1,ul="global-daemon",pl=300});var Vg={};ms(Vg,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>hl,ensureGlobalDaemon:()=>ov,probeGlobalDaemon:()=>av,retireGlobalDaemon:()=>iv,shouldSkipGlobalDaemon:()=>gl,triggerEnsureGlobalDaemon:()=>sv});function gl(t){return t!==null&&rv.has(t)}function yl(t){return new Promise(e=>{let r=!1,n=(0,Kg.connect)(t),o=i=>{r||(r=!0,clearTimeout(s),n.removeAllListeners("connect"),i.socket===void 0&&n.destroy(),e(i))},s=setTimeout(()=>o({socket:void 0}),tv);s.unref?.(),n.once("connect",()=>o({socket:n})),n.on("error",i=>{if(r){Re.warn("global daemon socket error after connect: %s",R(i));return}o({socket:void 0,code:i.code})})})}async function nv(t){if(!t.startsWith("\\\\.\\pipe\\"))try{await(0,qg.unlink)(t)}catch{}}async function ov(t={}){try{if(gl(t.command??null))return"skipped-excluded-command";if(!bt(t.nodeVersion??process.versions.node))return"skipped-unsupported-node";let e=t.socketPath??as(),{socket:r,code:n}=await yl(e);if(!r)return n==="ECONNREFUSED"&&await nv(e),(t.spawnDaemon??lv)(e),"spawned";try{let o=await is(r,t.helloTimeoutMs??pl),s=o?ml(o.line):void 0;if(!s)return"already-running";let i=t.ownVersion??jg();return Fg(i,s.version)?(r.write(il({t:"retire"})),Re.info("retiring global daemon pid %d (v%s < v%s)",s.pid,s.version,i),"retired-incumbent"):"already-running"}finally{r.end()}}catch(e){return Re.warn("could not ensure the global daemon: %s",R(e)),"failed"}}function sv(t={}){try{return gl(t.command??null)||!bt(t.nodeVersion??process.versions.node)?!1:(cv(t.socketPath),!0)}catch(e){return Re.warn("could not trigger the global daemon ensure helper: %s",R(e)),!1}}async function iv(t={}){try{let{socket:e}=await yl(t.socketPath??as());return e?(await is(e,pl),e.write(il({t:"retire"})),e.end(),!0):!1}catch(e){return Re.warn("could not retire the global daemon: %s",R(e)),!1}}async function av(t){try{let{socket:e}=await yl(t??as());if(!e)return;try{let r=await is(e,5e3);return r?ml(r.line):void 0}finally{e.end()}}catch{return}}function lv(t){let e=dl(__jmImportMetaUrl);if(!e){Re.warn("Cannot locate the CLI entry to spawn the global daemon");return}let r=et(process.execPath,[...e.nodeArgs,e.entry,ul,"--socket",t],{detached:!0,stdio:"ignore",cwd:(0,fl.homedir)()});r.on("error",n=>Re.warn("global daemon failed to spawn: %s",R(n))),r.unref(),Re.info("spawned global daemon (pid %d)",r.pid??-1)}function cv(t){let e=dl(__jmImportMetaUrl);if(!e){Re.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let r=[...e.nodeArgs,e.entry,hl];t&&r.push("--socket",t);let n=et(process.execPath,r,{detached:!0,stdio:"ignore",cwd:(0,fl.homedir)()});n.on("error",o=>Re.warn("global daemon ensure helper failed to start: %s",R(o))),n.unref(),Re.info("spawned global daemon ensure helper (pid %d)",n.pid??-1)}var qg,Kg,fl,Re,hl,tv,rv,Xg=E(()=>{"use strict";qg=require("node:fs/promises"),Kg=require("node:net"),fl=require("node:os");al();at();y();Ug();Ee();Gg();Re=p("EnsureGlobalDaemon"),hl="global-daemon-ensure",tv=200,rv=new Set([ul,hl,"mcp","mcp-serve","daemon","uninstall","disable"])});var Dv={};ms(Dv,{buildCursorBootstrapOutput:()=>oy,main:()=>ay,resolveCursorProjectDir:()=>sy,runCursorPluginBootstrap:()=>iy});module.exports=gy(Dv);var bl=require("node:os"),yr=require("node:path"),_l=require("node:url");var br=require("node:fs");var xl=require("node:path"),yy="JOLLI_LOCAL_AGENT_CHILD",wy=".jolli-local-agent-child";function kn(t=process.env,e){return t[yy]==="1"?!0:e!==void 0&&(0,br.existsSync)((0,xl.join)(e,wy))}ie();xe();ee();var aw=["/.codex/plugins/","/.claude/plugins/","/.cursor/plugins/"];function ac(t){let e=tt(t);return aw.some(r=>e.includes(r))}Ue();pe();var J=require("node:fs/promises"),Gt=require("node:path");oe();ie();y();var tS='"$HOME/.jolli/jollimemory/run-hook"';function We(t,e=""){let r=e?` ${e}`:"";return`${tS} ${t}${r}`}var ei=["run-hook","StopHook","jollimemory-hooks.jar"],Bn=["run-hook","SessionStartHook"],Gn=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"];function Or(t,e){let r=typeof e=="string"?[e]:e;return t.some(n=>{let o=n.hooks;return Array.isArray(o)?o.some(s=>typeof s.command=="string"&&r.some(i=>s.command.includes(i))):!1})}function wt(t,e){let r=typeof e=="string"?[e]:e,n=[];for(let o of t){let s=o.hooks;if(!Array.isArray(s)){n.push(o);continue}let i=s.filter(a=>!(typeof a.command=="string"&&r.some(l=>a.command.includes(l))));i.length>0&&n.push({...o,hooks:i})}return n}function ti(t){return Or(t,ei)}function qn(t){return wt(t,ei)}var Kn=p("GitHookInstaller"),Bt="# >>> JolliMemory post-commit hook >>>",ri="# <<< JolliMemory post-commit hook <<<",ni="# >>> JolliMemory post-rewrite hook >>>",pd="# <<< JolliMemory post-rewrite hook <<<",oi="# >>> JolliMemory prepare-commit-msg hook >>>",md="# <<< JolliMemory prepare-commit-msg hook <<<",si="# >>> JolliMemory post-merge hook >>>",fd="# <<< JolliMemory post-merge hook <<<",Vn="# >>> JolliMemory pre-push hook >>>",hd="# <<< JolliMemory pre-push hook <<<";async function gd(t){let e=await Ht(t),r=(0,Gt.join)(e,"post-commit"),n=We("post-commit"),o=[Bt,n,ri].join(`
`),s,i="";try{if(i=await(0,J.readFile)(r,"utf-8"),i.includes(Bt)){let l=new RegExp(`\\n*${ot(Bt)}[\\s\\S]*?${ot(ri)}\\n*`,"g"),u=`${i.replace(l,`
`).trimEnd()}

${o}
`;return i===u?(await zn(r),{path:r}):(await I(r,u),await(0,J.chmod)(r,493),{path:r})}s="Existing post-commit hook found \u2014 Jolli Memory section appended",Kn.warn(s)}catch{}let a;i?a=`${i}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,J.mkdir)(e,{recursive:!0}),await I(r,a);try{await(0,J.chmod)(r,493)}catch{}return Kn.info("Git post-commit hook installed"),{warning:s,path:r}}async function yd(t){let e=We("post-rewrite",'"$1"'),r=[ni,e,pd].join(`
`);return Xn(t,"post-rewrite",r,ni)}async function wd(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${e} ]; then ${e} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),n=[oi,r,md].join(`
`);return Xn(t,"prepare-commit-msg",n,oi)}async function Sd(t){let e=We("post-merge"),r=[si,e,fd].join(`
`);return Xn(t,"post-merge",r,si)}async function Ed(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_pre_push_previous_status=$?",`if [ -x ${e} ]; then ${e} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),n=[Vn,r,hd].join(`
`);return Xn(t,"pre-push",n,Vn)}async function Xn(t,e,r,n){let o=r.slice(r.lastIndexOf(`
`)+1),s=await Ht(t),i=(0,Gt.join)(s,e),a,l="";try{if(l=await(0,J.readFile)(i,"utf-8"),l.includes(n)){let u=new RegExp(`\\n*${ot(n)}[\\s\\S]*?${ot(o)}\\n*`,"g"),m=`${l.replace(u,`
`).trimEnd()}

${r}
`;return l===m?(await zn(i),{path:i}):(await I(i,m),await(0,J.chmod)(i,493),{path:i})}a=`Existing ${e} hook found \u2014 Jolli Memory section appended`,Kn.warn(a)}catch{}let c;l?c=`${l}

${r}
`:c=`#!/bin/sh

${r}
`,await(0,J.mkdir)(s,{recursive:!0}),await I(i,c);try{await(0,J.chmod)(i,493)}catch{}return Kn.info("Git %s hook installed",e),{warning:a,path:i}}async function bd(t){let e;try{let s=await Ht(t);e=(0,Gt.join)(s,"post-commit")}catch{return{}}let r;try{r=await(0,J.readFile)(e,"utf-8")}catch{return{}}if(!r.includes(Bt))return{};let n=new RegExp(`\\n*${ot(Bt)}[\\s\\S]*?${ot(ri)}\\n*`,"g"),o=r.replace(n,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:s}=await import("node:fs/promises");await s(e,{force:!0})}else await I(e,o),await zn(e);return{}}async function _d(t){await Yn(t,"post-rewrite",ni,pd)}async function Rd(t){await Yn(t,"prepare-commit-msg",oi,md)}async function kd(t){await Yn(t,"post-merge",si,fd)}async function Td(t){await Yn(t,"pre-push",Vn,hd)}async function Yn(t,e,r,n){let o;try{o=await Ht(t)}catch{return}let s=(0,Gt.join)(o,e),i;try{i=await(0,J.readFile)(s,"utf-8")}catch{return}if(!i.includes(r))return;let a=new RegExp(`\\n*${ot(r)}[\\s\\S]*?${ot(n)}\\n*`,"g"),l=i.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(s,{force:!0})}else await I(s,l),await zn(s)}async function vd(t){return Cd(t,"post-commit",Bt)}async function Cd(t,e,r){try{let n=await Ht(t),o=(0,Gt.join)(n,e);return(await(0,J.readFile)(o,"utf-8")).includes(r)?process.platform==="win32"?!0:((await(0,J.stat)(o)).mode&73)!==0:!1}catch{return!1}}function ot(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function zn(t){try{((await(0,J.stat)(t)).mode&73)===0&&await(0,J.chmod)(t,493)}catch{}}var os=require("node:fs/promises"),It=require("node:path"),Ig=require("node:url");var ii=require("node:fs"),Ad=require("node:fs/promises"),ai=require("node:os"),Lr=require("node:path");y();De();var ZA=p("AntigravityDetector"),xd=["antigravity","antigravity-ide","antigravity-cli"];function Id(t=(0,ai.homedir)()){let e=[];for(let r of xd){let n=(0,Lr.join)(t,".gemini",r),o=(0,Lr.join)(n,"conversations");(0,ii.existsSync)(o)&&e.push({variant:r,root:n,conversationsDir:o,brainDir:(0,Lr.join)(n,"brain")})}return e}async function rS(t){for(let e of Id(t))try{if((await(0,Ad.readdir)(e.conversationsDir)).some(r=>r.endsWith(".db")))return!0}catch{}return!1}async function Pd(t=(0,ai.homedir)()){return await rS(t)?!0:xd.some(e=>(0,ii.existsSync)((0,Lr.join)(t,".gemini",e)))}y();var li=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(e){e.slots!==void 0&&(this.slots=Math.max(1,Math.floor(e.slots))),e.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(e.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(e,r){let n=await this.acquire(Math.max(0,e));try{return await r()}finally{this.slotsInUse--,this.bytesInUse-=n,this.pump()}}clamp(e){return Math.min(e,this.bytesCap)}fits(e){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(e)<=this.bytesCap}acquire(e){return this.waiting.length===0&&this.fits(e)?Promise.resolve(this.take(e)):new Promise(r=>{this.waiting.push({want:e,wake:r})})}take(e){let r=this.clamp(e);return this.slotsInUse++,this.bytesInUse+=r,r}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let e=this.waiting.shift();e.wake(this.take(e.want))}}},tx=new li;var Qn="mcp__";function Mr(t){return{name:t,kind:"builtin",calls:0}}function ci(t){return{name:t,kind:"skill",calls:0}}function qt(t,e){return{name:e?`${t}.${e}`:t,kind:"mcp",server:t,calls:0}}function Zn(t){if(!t.startsWith(Qn))return Mr(t);let e=t.slice(Qn.length),r=e.indexOf("__");return r===-1?qt(e,""):qt(e.slice(0,r),e.slice(r+2))}function Dd(t,e){if(e===void 0||e.length===0)return Mr(t);if(!e.startsWith(Qn))return qt(e,t);let r=e.slice(Qn.length).split("__"),n=r[r.length-1]||r[0]||e;return qt(n,t)}function nS(t,e){let r=Math.max(t.lastCallAtMs??Number.NEGATIVE_INFINITY,e.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(r)?{lastCallAtMs:r}:{}}var Et=class{constructor(){this.byKey=new Map;this.seen=new Set}add(e,r=1){let n=`${e.kind}:${e.name}`,o=this.byKey.get(n);if(!o){this.byKey.set(n,{...e,calls:r});return}this.byKey.set(n,{...o,calls:o.calls+r,...nS(o,e)})}addOnce(e,r){if(e!==void 0){if(this.seen.has(e))return;this.seen.add(e)}this.add(r)}hasSeen(e){return this.seen.has(e)}values(){return[...this.byKey.values()]}};y();y();function pi(t){if(t===void 0)return;let e=Date.parse(t);return Number.isFinite(e)?e:void 0}function Nd(...t){let e=t.filter(r=>r!==void 0);return e.length>0?{lastCallAtMs:Math.max(...e)}:{}}function oS(t){let e=0;for(let r of t)r.type==="tool_result"&&e++;return e}var $d=p("TranscriptParser"),eo=class{parseLine(e,r){return Fd(e,r)}parseUsageTokens(e,r){let n=Md(e);return n?{input:n.input,output:n.output,cached:n.cached,...n.id&&{dedupKey:n.id},...n.model&&{model:n.model}}:{input:0,output:0,cached:0}}parseUsageByModel(e){let r=new Map,n=new Set;for(let o of e){let s=Md(o);if(!s)continue;if(s.id){if(n.has(s.id))continue;n.add(s.id)}let i=r.get(s.model);i?r.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):r.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...r.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(e){let r=new Et,n=[],o=new Map;for(let s of e){let i;try{i=JSON.parse(s)}catch{continue}let a=i,l=a?.message?.content;if(!Array.isArray(l))continue;let c=a.toolUseResult?.commandName,u=typeof c=="string"&&c.length>0?c:void 0,d=oS(l)===1,m=pi(this.parseTimestamp(s));for(let f of l){let g=f;if(g.type==="tool_result"){u!==void 0&&d&&typeof g.tool_use_id=="string"&&o.set(g.tool_use_id,u);continue}if(g.type!=="tool_use"||typeof g.name!="string")continue;let h=typeof g.id=="string"?g.id:void 0;if(g.name==="Skill"&&typeof g.input?.skill=="string"){n.push({...h!==void 0?{id:h}:{},requested:g.input.skill,...m!==void 0?{atMs:m}:{}});continue}r.addOnce(h,{...Zn(g.name),...m!==void 0&&{lastCallAtMs:m}})}}for(let s of n)r.addOnce(s.id,{...ci((s.id!==void 0?o.get(s.id):void 0)??s.requested),...s.atMs!==void 0&&{lastCallAtMs:s.atMs}});return r.values()}parseTimestamp(e,r){try{let n=JSON.parse(e);return typeof n.timestamp=="string"?n.timestamp:void 0}catch{return}}},di=class{parseLine(e,r){try{let n=JSON.parse(e),o=typeof n.timestamp=="string"?n.timestamp:void 0;if(n.type!=="event_msg")return null;let i=n.payload;if(!i||typeof i!="object")return null;let a=i.type;return a==="user_message"?lS(i,o):a==="agent_message"?cS(i,o):null}catch(n){return $d.debug("Failed to parse Codex transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new Map,n=[];for(let s of e){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!sS.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,u=typeof l.invocation?.server=="string"?l.invocation.server:"",d;if(c!==void 0)d=u?qt(u,c):Mr(c);else if(typeof l.name=="string"&&l.name.length>0)d=Dd(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let m=i.timestamp,f=pi(typeof m=="string"?m:void 0),g={...d,...f!==void 0&&{lastCallAtMs:f}},h=typeof l.call_id=="string"?l.call_id:void 0;if(h===void 0){n.push(g);continue}let k=r.get(h),b=k===void 0||k.kind!=="mcp"&&g.kind==="mcp"?g:k;r.set(h,{...b,...k?Nd(k.lastCallAtMs,g.lastCallAtMs):Nd(g.lastCallAtMs)})}let o=new Et;for(let s of[...r.values(),...n])o.add(s);return o.values()}},sS=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),ui=class{parseLine(e,r){try{let n=JSON.parse(e),o=n.type,s=Ld(n);if(o==="turn.prompt"){let a=jd(n.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=aS(n);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(n){return $d.debug("Failed to parse Kimi transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new Et;for(let n of e){if(!n.includes(Od))continue;let o;try{o=JSON.parse(n)}catch{continue}if(o.type!==Od)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=pi(this.parseTimestamp(n));r.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===iS&&typeof s.args?.skill=="string"?ci(s.args.skill):Zn(s.name),...i!==void 0&&{lastCallAtMs:i}})}return r.values()}parseTimestamp(e,r){try{return Ld(JSON.parse(e))}catch{return}}},Od="context.append_loop_event",iS="Skill";function aS(t){if(t.type==="context.append_loop_event"){let e=t.event;return e?.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}return t.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}function Ld(t){let e=t.time??t.timestamp;return typeof e=="number"&&Number.isFinite(e)?new Date(e).toISOString():typeof e=="string"&&e.length>0?e:void 0}function jd(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t){let n=jd(r);n&&e.push(n)}return e.length>0?e.join(`
`):null}if(t!==null&&typeof t=="object"){let e=t;if((e.type==="text"||e.type===void 0)&&typeof e.text=="string"&&e.text.length>0)return e.text}return null}function lS(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"human",content:r.trim(),timestamp:e}}function cS(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"assistant",content:r.trim(),timestamp:e}}function Md(t){try{return uS(JSON.parse(t))}catch{return null}}function dS(t){return t.startsWith("<")&&t.endsWith(">")}function uS(t){let e=t,r=e?.message?.usage??e?.usage;if(!r||typeof r!="object")return null;let n=i=>typeof r[i]=="number"?r[i]:0,o=e?.message?.model??e?.model,s=e?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!dS(o)?o:"",input:n("input_tokens"),output:n("output_tokens"),cached:n("cache_creation_input_tokens")}}var pS=new eo,mS=new di,fS=new ui;function hS(t){switch(t){case"codex":return mS;case"kimi":return fS;case"claude":return pS}}var gS=["claude","codex","kimi"],yS=["gemini","opencode","antigravity","cursor-cli","cline-cli","devin"],ax=new Set([...gS.filter(t=>hS(t).parseToolUse!==void 0),...yS]);var mi=p("TranscriptReader");var wS=["Base directory for this skill:","[Request interrupted by user"],SS=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function Fd(t,e){try{let r=JSON.parse(t);if(r.isCompactSummary===!0)return mi.debug("Skipping compaction summary at line %d",e),null;if(!r.message||typeof r.message!="object")return null;let n=r.message,o=n.role,s=typeof r.timestamp=="string"?r.timestamp:void 0;if(o==="user")return ES(n,s,e);if(o==="assistant"){let i=Hd(n.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(r){return mi.debug("Failed to parse transcript line %d: %s",e,r.message),null}}function ES(t,e,r){let n=Hd(t.content);if(!n)return null;let o=bS(n);return o.length===0?null:wS.some(s=>o.startsWith(s))?(mi.debug("Skipping filtered user message at line %d",r),null):{role:"human",content:o,timestamp:e}}function bS(t){return t.replace(SS,"").trim()}function Hd(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t)if(r!==null&&typeof r=="object"){let n=r;n.type==="text"&&typeof n.text=="string"&&e.push(n.text)}return e.length>0?e.join(`
`):null}return null}ie();ee();De();var xx=p("AntigravityDiscoverer"),Ix=2880*60*1e3;var Ud=require("node:fs/promises"),ro=require("node:os"),gi=require("node:path");function _S(t=(0,ro.homedir)()){return(0,gi.join)(t,".cline","data")}function Jd(t=(0,ro.homedir)()){return(0,gi.join)(_S(t),"sessions")}async function Wd(t=(0,ro.homedir)()){try{return await(0,Ud.access)(Jd(t)),!0}catch{return!1}}y();ee();var jx=p("ClineCliDiscoverer"),Fx=2880*60*1e3;var yi=require("node:fs/promises"),Fr=require("node:os"),oo=require("node:path");var no=require("node:os"),jr=require("node:path");y();var Jx=p("VscodeWorkspaceLocator"),Bd=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function qe(t,e=(0,no.homedir)()){switch((0,no.platform)()){case"darwin":return(0,jr.join)(e,"Library","Application Support",t);case"win32":return(0,jr.join)(process.env.APPDATA??(0,jr.join)(e,"AppData","Roaming"),t);default:return(0,jr.join)(e,".config",t)}}var RS="saoudrizwan.claude-dev";function kS(t,e){return(0,oo.join)(qe(t,e),"User","globalStorage",RS)}function Hr(t=(0,Fr.homedir)()){return Bd.map(e=>kS(e,t))}function so(t){return(0,oo.join)(t,"settings","cline_mcp_settings.json")}async function Gd(t=(0,Fr.homedir)()){for(let e of Hr(t))try{return await(0,yi.access)((0,oo.join)(e,"state","taskHistory.json")),!0}catch{}return!1}async function wi(t=(0,Fr.homedir)()){let e=[];for(let r of Hr(t))try{await(0,yi.access)(so(r)),e.push(r)}catch{}return e}async function qd(t=(0,Fr.homedir)()){return(await wi(t)).length>0}y();ee();var Yx=p("ClineDiscoverer"),zx=2880*60*1e3;var Si=require("node:fs/promises"),Kd=require("node:os"),Ei=require("node:path");y();ee();var iI=p("CodexDiscoverer"),aI=2880*60*1e3,TS=".codex";async function bi(){let t=(0,Ei.join)((0,Kd.homedir)(),TS);try{return(await(0,Si.stat)(t)).isDirectory()}catch{return!1}}var lI=1440*60*1e3;var Xd=require("node:fs/promises"),Yd=require("node:os"),_i=require("node:path");y();var vS=p("CopilotChatDetector");function CS(t){return(0,_i.join)(qe("Code",t),"User","globalStorage","github.copilot-chat")}function AS(t=(0,Yd.homedir)()){return(0,_i.join)(t,".copilot","session-state")}async function Vd(t){try{return(await(0,Xd.stat)(t)).isDirectory()}catch(e){let r=e.code;return r!=="ENOENT"&&vS.warn("Copilot Chat probe stat failed for %s (%s): %s",t,r??"unknown",e.message),!1}}async function zd(){let[t,e]=await Promise.all([Vd(CS()),Vd(AS())]);return t||e}y();var SI=p("CopilotChatDiscoverer"),EI=2880*60*1e3;var Zd=require("node:fs/promises"),eu=require("node:os"),tu=require("node:path");y();De();var ru=p("CopilotDetector");function nu(){return(0,tu.join)((0,eu.homedir)(),".copilot","session-store.db")}async function ou(){return Ge()?Ri():(ru.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Be.major,Be.minor),!1)}async function Ri(){let t=nu();try{return(await(0,Zd.stat)(t)).isFile()}catch(e){let r=e.code;return r!=="ENOENT"&&ru.warn("Copilot DB stat failed (%s): %s",r??"unknown",e.message),!1}}y();De();var II=p("CopilotDiscoverer"),PI=2880*60*1e3;var io=require("node:fs/promises"),ao=require("node:os"),ki=require("node:path");y();ee();var MI=p("CursorCliDiscoverer"),$I=2880*60*1e3;function xS(t=(0,ao.homedir)()){return(0,ki.join)(t,".cursor")}function IS(t=(0,ao.homedir)()){return(0,ki.join)(xS(t),"chats")}async function su(t=(0,ao.homedir)()){try{return(await(0,io.stat)(IS(t))).isDirectory()}catch{return!1}}var iu=require("node:fs/promises"),au=require("node:path");y();De();var PS=p("CursorDetector");function lu(t){return(0,au.join)(qe("Cursor",t),"User","globalStorage","state.vscdb")}async function cu(){return Ge()?Ti():(PS.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function Ti(){let t=lu();try{return(await(0,iu.stat)(t)).isFile()}catch{return!1}}y();De();var VI=p("CursorDiscoverer"),XI=2880*60*1e3;var vi=require("node:fs/promises"),du=require("node:os"),Kt=require("node:path");y();De();var tP=p("DevinDiscoverer"),rP=2880*60*1e3;function uu(t){let e=t??(0,du.homedir)();if(process.platform==="win32")return(0,Kt.join)(process.env.APPDATA??(0,Kt.join)(e,"AppData","Roaming"),"devin","cli");let r=process.env.XDG_DATA_HOME,n=r&&r.length>0?r:(0,Kt.join)(e,".local","share");return(0,Kt.join)(n,"devin","cli")}function DS(t){return(0,Kt.join)(uu(t),"sessions.db")}async function NS(){try{return(await(0,vi.stat)(DS())).isFile()}catch{return!1}}async function pu(){if(await NS())return!0;try{return(await(0,vi.stat)(uu())).isDirectory()}catch{return!1}}var mu=require("node:fs/promises"),fu=require("node:os"),hu=require("node:path");y();var OS=p("GeminiDetector"),LS=".gemini";async function Ci(){let t=(0,hu.join)((0,fu.homedir)(),LS);try{return(await(0,mu.stat)(t)).isDirectory()}catch{return OS.debug("Gemini directory not found: %s",t),!1}}ie();Ur();var uo=require("node:fs/promises"),ju=require("node:os"),Di=require("node:path");y();var TP=p("KimiDiscoverer"),vP=2880*60*1e3,KS=".kimi-code";function po(){return process.env.KIMI_CODE_HOME||(0,Di.join)((0,ju.homedir)(),KS)}async function Fu(){let t=po();try{return(await(0,uo.stat)(t)).isDirectory()}catch{return!1}}xe();pe();var mo={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},xP=Object.keys(mo);function fo(t){return t===void 0?void 0:mo[t]?.localAgentTool}function Ni(t,e){return(t===void 0?void 0:mo[t]?.skillInvocation)?.replace("<name>",e)}function Uu(t){return(t===void 0?void 0:mo[t]?.host)??"claude"}function Hu(t,e){return t===void 0||t===e?void 0:t}async function Ju(t,e){let r=fo(t);return r===void 0?null:e.localAgentTool!==void 0&&e.aiProvider!==void 0?{tool:r,seededTool:!1,keptTool:Hu(e.localAgentTool,r),seededProvider:!1}:Wn(n=>{let o=n.localAgentTool===void 0,s=n.aiProvider===void 0,i={tool:r,seededTool:o,keptTool:Hu(n.localAgentTool,r),seededProvider:s};return!o&&!s?{update:null,result:i}:{update:{...s?{aiProvider:"local-agent"}:{},...o?{localAgentTool:r}:{}},result:i}})}var Wu=require("node:fs/promises"),Bu=require("node:os"),Oi=require("node:path");y();De();var VS=p("OpenCodeDiscoverer"),LP=2880*60*1e3;function XS(){return process.env.XDG_DATA_HOME||(0,Oi.join)((0,Bu.homedir)(),".local","share")}function YS(){return(0,Oi.join)(XS(),"opencode","opencode.db")}async function Gu(){return Ge()?Li():(VS.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Be.major,Be.minor),!1)}async function Li(){let t=YS();try{return(await(0,Wu.stat)(t)).isFile()}catch{return!1}}y();oe();xe();pe();var JP=p("PushPendingStore");var WP=10080*60*1e3;var zS=300*1e3,BP=Math.floor(zS/3);hs();y();Ee();var QP=p("PushCompensation");y();ho();y();Ur();var iD=p("KBRepoDiscoverer");y();oe();ho();xe();pe();var fD=p("PushControlStore");Ue();go();y();oe();var eE={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms. MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var bD=new Set(Object.keys(eE));var BD=p("PushControl");Ue();y();ie();xe();Dn();Eo();Zt();y();ie();Ue();var Xe=class{constructor(e){this.cwd=e;this.kind="orphan-branch"}async readFile(e){return bs(we,e,this.cwd)}async batchReadFiles(e){return _s(we,e,this.cwd)}async writeFiles(e,r){if(Se())return;if(await Ir(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Error("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(Eo(),yp));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Error("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Gl(we,e,r,this.cwd)}async listFiles(e){return[...await Rs(we,e,this.cwd)]}async exists(){return Ss(we,this.cwd)}async ensure(){await Es(we,this.cwd)}};var cm=require("node:zlib");at();var am=require("node:zlib");Nr();function bo(t){return t.version>=4}function bE(t){return[...t??[]].reverse()}function er(t){let e=bE(t.children).flatMap(er),r=(t.topics??[]).map(n=>({...n,commitDate:t.commitDate,generatedAt:t.generatedAt}));return[...e,...r]}function wp(t){let e=t.stats,r=e?.filesChanged??0,n=e?.insertions??0,o=e?.deletions??0;for(let s of t.children??[]){let i=wp(s);r+=i.filesChanged,n+=i.insertions,o+=i.deletions}return{filesChanged:r,insertions:n,deletions:o}}function Vr(t){return t.diffStats?t.diffStats:(t.children?.length??0)>0?wp(t):t.stats??{filesChanged:0,insertions:0,deletions:0}}function qi(t){let e=t.conversationTurns??0,r=(t.children??[]).reduce((n,o)=>n+qi(o),0);return e+r}function Ki(t){let e=t.conversationTokens??0,r=(t.children??[]).reduce((n,o)=>n+Ki(o),0);return e+r}function Vi(t){let e=t.conversationTokenBreakdown,r={input:e?.input??0,output:e?.output??0,cached:e?.cached??0};return(t.children??[]).reduce((n,o)=>{let s=Vi(o);return{input:n.input+s.input,output:n.output+s.output,cached:n.cached+s.cached}},{input:r.input,output:r.output,cached:r.cached})}function _o(t){let e=[],r=n=>{if(!n.children?.length)e.push(n);else for(let o of n.children)r(o)};for(let n of t.children??[])r(n);return e}function Ro(t){return bo(t)?(t.topics??[]).map(e=>({...e,commitDate:t.commitDate,generatedAt:t.generatedAt})):er(t)}function Xr(t){let e=[t.commitHash];for(let r of t.children??[])e.push(...Xr(r));return e}function tr(t,e){return t.transcripts!==void 0?t.transcripts:Xr(t).filter(r=>e.has(r))}function _E(t){let e=_o(t);return e.length<=1?1:new Set(e.map(n=>new Date(n.generatedAt||n.commitDate).toISOString().substring(0,10))).size}function Sp(t){let e=_E(t),r=e===1?"1 day":`${e} days`,n=_o(t);if(n.length<=1)return r;let o=n.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),s=new Date(Math.min(...o)),i=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${r} (${a(s)} \u2014 ${a(i)})`}y();at();ie();y();y();Hs();ie();xe();Dn();var Ep=/-[0-9a-f]{8}$/;Nr();var RE="local-agent-auth";function bp(t){return t.summaryError===RE}var _p="sonnet",Rp="inherit",rr={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:_p,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:_p,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:Rp,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:Rp,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function Rt(t){return rr[t]?.label??"Local agent"}function kp(t){return rr[t]?.loginHint??"Sign in to your local agent CLI."}function Tp(t){let e=rr[t]?.separateDesktopApp;return e===void 0?null:`(This login is SEPARATE from ${e} \u2014 ${e} stays signed in on its own.)`}var CN=[...new Set(Object.values(rr).flatMap(t=>(t.models??[]).map(e=>e.id)))];Fn();var kE=new Set(["linear","jira","github"]);function TE(t){return kE.has(t)}function Xi(t){return TE(t.source)?`${t.nativeId} \u2014 ${t.title}`:t.title}function z(t){return t.generatedAt||t.commitDate}function Cp(t){try{return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function Yi(t){try{return new Date(t).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return t}}function vp(t){return t.substring(0,10)}function vE(t){return[...t].sort((e,r)=>{let n=vp(e.generatedAt||e.commitDate||""),o=vp(r.generatedAt||r.commitDate||"");if(n!==o)return n>o?-1:1;let s=e.importance==="minor"?1:0,i=r.importance==="minor"?1:0;return s-i})}function Ap(t){return String(t+1).padStart(2,"0")}var CE={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};function AE(t,e){return e==="local-agent"?t.localAgentTool?`Local agent - ${Rt(t.localAgentTool)}`:"Local agent":CE[e]}function xp(t){let e=new Set,r=o=>{let s=o.llm;s?.source&&e.add(AE(s,s.source));for(let i of o.children??[])r(i)};r(t);let n=[...e];if(n.length!==0)return n.length===1?n[0]:`mixed: ${n.join(", ")}`}function Ip(t){let e=_o(t),r=Ro(t);return{topics:vE(r.map((o,s)=>({...o,treeIndex:s}))),sourceNodes:e}}Ys();var xE=/^transcripts\/(.+)\.json$/;function zi(t){return xE.exec(t)?.[1]??null}var IE;async function PE(t){let e=await To(t);return e.ok?e.storage:(Qi.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",e.reason,t),new Xe(t))}async function DE(t,e){return t??IE??await PE(e)}var Qi=p("SummaryStore"),NE="index.json";function Pp(t){let e=[];for(let r of t)r.e2eTestGuide&&e.push(...r.e2eTestGuide),r.children&&e.push(...Pp(r.children));return e}function Dp(t){let{e2eTestGuide:e,...r}=t;return r.children?{...r,children:r.children.map(Dp)}:r}function Np(t){let e=new Map;for(let r of t){if(r.plans)for(let n of r.plans){let o=n.slug,s=e.get(o);(!s||n.updatedAt>s.updatedAt)&&e.set(o,n)}if(r.children)for(let n of Np(r.children)){let o=e.get(n.slug);(!o||n.updatedAt>o.updatedAt)&&e.set(n.slug,n)}}return[...e.values()]}function Op(t){let{plans:e,...r}=t;return r.children?{...r,children:r.children.map(Op)}:r}function Lp(t){let e=new Map;for(let r of t){if(r.notes)for(let n of r.notes){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}if(r.children)for(let n of Lp(r.children)){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}}return[...e.values()]}function Mp(t){let{notes:e,...r}=t;return r.children?{...r,children:r.children.map(Mp)}:r}function $p(t){let{references:e,...r}=t;return r.children?{...r,children:r.children.map($p)}:r}function jp(t){let e=new Map;for(let r of t){let n=r.references??[];for(let o of n){let s=e.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&e.set(o.archivedKey,o)}if(r.children)for(let o of jp(r.children)){let s=e.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&e.set(o.archivedKey,o)}}return[...e.values()]}function Fp(t){let e=[];for(let r of t)e.push(...r.skills??[]),r.children&&e.push(...Fp(r.children));return id(e)}function Hp(t){let{jolliDocId:e,jolliDocUrl:r,jolliSkillsDocId:n,jolliSkillsDocUrl:o,orphanedDocIds:s,unresolvedOrphanHashes:i,...a}=t;return a.children?{...a,children:a.children.map(Hp)}:a}function Up(t){let e=[];for(let o of t){let s=o.jolliDocUrl;if(o.jolliDocId&&s&&e.push({jolliDocId:o.jolliDocId,jolliDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=Up(o.children);i.winner&&e.push({...i.winner})}}if(e.length===0)return{winner:null,orphanedDocIds:[]};e.sort((o,s)=>new Date(z(s)).getTime()-new Date(z(o)).getTime());let r=e[0],n=e.slice(1).map(o=>o.jolliDocId);return{winner:r,orphanedDocIds:n}}function Jp(t){let e=[];for(let r of t??[])r.orphanedDocIds&&e.push(...r.orphanedDocIds),e.push(...Jp(r.children));return e}function Wp(t){let e=[];for(let r of t??[])r.unresolvedOrphanHashes&&e.push(...r.unresolvedOrphanHashes),e.push(...Wp(r.children));return e}function Bp(t){if(t.version>=4)return t;let e=Pp([t]),r=Np([t]),n=Lp([t]),o=jp([t]),s=Fp([t]),i=s.map(sd),a=Up([t]),l=Array.from(new Set([...a.orphanedDocIds,...t.orphanedDocIds??[],...Jp(t.children),...s.flatMap(h=>h.supersededDocIds??[])])),c=Array.from(new Set([...t.unresolvedOrphanHashes??[],...Wp(t.children)])),u=OE(t),d=LE(t),m=t.diffStats===void 0&&t.stats!==void 0?Vr(t):void 0,{stats:f,...g}=t;return{...g,version:4,topics:u,...d!==void 0?{recap:d}:{},...m!==void 0?{diffStats:m}:{},...e.length>0?{e2eTestGuide:e}:{},...r.length>0?{plans:r}:{},...n.length>0?{notes:n}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...t.children!==void 0?{children:t.children.map($E)}:{}}}function Gp(t){let{topics:e,...r}=t;return r.children?{...r,children:r.children.map(Gp)}:r}function qp(t){let{recap:e,...r}=t;return r.children?{...r,children:r.children.map(qp)}:r}function OE(t){return bo(t)?t.topics??[]:er(t).map(({commitDate:e,generatedAt:r,treeIndex:n,...o})=>o)}function LE(t){return bo(t)||t.recap?t.recap:ME(t.children)}function ME(t){if(!t||t.length===0)return;let e=[];if(Kp(t,e),e.length!==0)return e.sort((r,n)=>new Date(n.date).getTime()-new Date(r.date).getTime()),e[0]?.recap}function Kp(t,e){for(let r of t)r.recap&&e.push({recap:r.recap,date:z(r)}),r.children&&Kp(r.children,e)}function $E(t){return Hp($p(Mp(Op(Dp(Gp(qp(t)))))))}async function ko(t,e){return jE(t,e)}async function jE(t,e){let r=await DE(e,t),n=await r.readFile(NE);if(!n)return Qi.debug("loadIndex: no index.json in %s storage",r.kind??"unknown"),null;try{return JSON.parse(n)}catch(o){return Qi.error("Failed to parse index.json: %s",o.message),null}}function Vp(t){let e=Ro(t).map(r=>({title:r.title,...r.decisions!==void 0&&{decisions:r.decisions},...r.category!==void 0&&{category:r.category},...r.importance!==void 0&&{importance:r.importance},...r.filesAffected&&r.filesAffected.length>0&&{filesAffected:r.filesAffected}}));return{commitHash:t.commitHash,...t.recap!==void 0&&{recap:t.recap},...t.ticketId!==void 0&&{ticketId:t.ticketId},...e.length>0&&{topics:e}}}var gO=p("ProcessedSourceStore");Ue();Nr();y();var EO=p("TopicIndexStore");var FE=new Set(["index","processed"]);function zp(t){if(!t.startsWith("topics/")||!t.endsWith(".json"))return!1;let e=t.slice(7,-5);return e.length>0&&!e.includes("/")&&!FE.has(e)}var Qp=[["summaries/",t=>t.endsWith(".json")],["transcripts/",t=>t.endsWith(".json")],["plans/",t=>t.endsWith(".md")],["notes/",t=>t.endsWith(".md")],["references/",t=>t.endsWith(".md")],["skills/",t=>t.endsWith(".md")],["plan-progress/",t=>t.endsWith(".json")],["topics/",zp]],_O=Qp.map(([t])=>t),RO=Object.fromEntries(Qp);y();var AO=p("TopicPageStore");y();at();vs();y();at();Bi();Zt();var LO=p("ImportState");var MO=10*6e4;Zt();yo();y();at();y();var FO=p("DashboardScope");var Zp=new Map;function HE(t){let e=Zp.get(t);return e||(e=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),Zp.set(t,e)),e}function UE(t,e){let r=HE(e).formatToParts(t),n=o=>Number.parseInt(r.find(s=>s.type===o)?.value??"0",10);return{year:n("year"),month:n("month"),day:n("day"),hour:n("hour"),minute:n("minute")}}function em(t,e){let r=UE(t,e);return`${r.year}-${String(r.month).padStart(2,"0")}-${String(r.day).padStart(2,"0")}`}var tm=`EXISTS (SELECT 1 FROM session_usage_events e0
	                                   WHERE e0.session_event_id = s.event_id)
	                         AND (SELECT COALESCE(SUM(e2.input_tokens + e2.output_tokens + e2.cached_tokens), 0)
	                                FROM session_usage_events e2
	                               WHERE e2.session_event_id = s.event_id)
	                             >= s.input_tokens + s.output_tokens + s.cached_tokens`,WO=`(${tm})`,BO=`NOT (${tm})`,Zi=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,ea="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",GO=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${ea} AS at_ms
	  FROM memories m
	  ${Zi}
	 WHERE m.parent_hash IS NULL
)`,Yr=`SELECT ${ea} AS at_ms
	  FROM memories m
	  ${Zi}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`;var oL=p("StatsRollup"),BE={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},GE=Object.keys(BE),qE="built",KE="tokens";var sL=[...GE,KE,qE];function zr(t,e){if(e.length===0)return;let r=t.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(r.length!==0)for(let{tz:n}of r){let o=[...new Set(e.map(s=>em(s,n)))];t.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(n,...o)}}var VE=p("SotImport");function Ye(t){if(t==null)return null;try{return JSON.parse(t)}catch{return null}}function rm(t){let e=/^#\s+(.+)$/m.exec(t);return e?e[1].trim():null}var XE=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function nm(t,e,r){for(let{path:n,accepts:o}of XE){let s=t;for(let a of n){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||r("off-type numeric",`${e}.${n.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function om(t,e,r,n){let o=Date.parse(t.commitDate??"");return Number.isFinite(o)?o:(n("commit date",`${e} has no parsable commitDate \u2014 falling back to first-seen time`),r)}function sm(t,e,r,n,o){let s=t.prepare(Yr),i=t.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(e,r)?.target_hash,a=i!==void 0&&i!==n?[n,i]:[n],l=d=>s.get(e,d)?.at_ms??void 0,c=[],u=!1;for(let d of a){let m=s.get(e,d);d===n&&(u=m!==void 0),m?.at_ms!=null&&c.push(m.at_ms)}if(!u)return{stored:!1,days:[]};t.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
		 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(e,r,n,o);for(let d of a){let m=l(d);m!==void 0&&c.push(m)}return i!==void 0&&i!==n&&VE.info("alias %s retargeted %s -> %s",r,i,n),{stored:!0,days:c}}function im(t,e){let r=t.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(e),n=new Map,o=[];for(let l of r)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=n.get(l.parent_hash)??[];c.push(l.commit_hash),n.set(l.parent_hash,c)}let s=t.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(r.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:u}=o.shift();a++;let d=i.get(l);(d.root_hash!==c||d.depth!==u)&&s.run(c,u,e,l);for(let m of n.get(l)??[])o.push({hash:m,root:c,depth:u+1})}if(a!==r.length)throw new Error(`remountRepo: ${r.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}yo();var kt=p("SotWrite"),YE={plans:"plan",notes:"note",references:"reference",skills:"skill"};function zE(t){let e=[],r=(n,o,s)=>{e.push({hash:n.commitHash,parentInFile:o,pos:s,summary:n}),(n.children??[]).forEach((i,a)=>{r(i,n.commitHash,a)})};return r(t,null,null),e}function QE(t){let e={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let r of t){let n=r.delete===!0,o=r.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(n){e.summaryDeletes.push(o[1]);continue}let c=Ye(r.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${r.path}`);e.summaryTrees.push(zE(c));continue}if(r.path==="index.json"){if(n)continue;let c=Ye(r.content);for(let u of c?.entries??[])u.treeHash&&e.treeHashes.set(u.commitHash,u.treeHash);for(let[u,d]of Object.entries(c?.commitAliases??{}))e.aliases.set(u,d);continue}if(r.path==="catalog.json")continue;if(r.path==="topics/index.json"){if(n)continue;let c=Ye(r.content);for(let u of c?.topics??[])u.stableSlug&&u.summary!==void 0&&e.topicSummaries.set(u.stableSlug,u.summary);continue}if(r.path==="topics/processed.json"){e.processedSet=n?null:r.content;continue}if(r.path==="schema-v5-migration.json"){n||(e.v5State=r.content);continue}let s=r.path.match(/^transcripts\/(.+)\.json$/);if(s){n?e.transcriptDeletes.push(s[1]):e.transcriptWrites.push({id:s[1],content:r.content});continue}let i=r.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=YE[i[1]];n?e.contextDeletes.push({kind:c,key:i[2]}):e.contextWrites.push({kind:c,key:i[2],body:r.content});continue}let a=r.path.match(/^plan-progress\/(.+)\.json$/);if(a){n?e.progressDeletes.push(a[1]):e.progressWrites.push({pathSlug:a[1],content:r.content});continue}let l=r.path.match(/^topics\/([^/]+)\.json$/);if(l){n?e.topicPageDeletes.push(l[1]):e.topicPageWrites.push({slug:l[1],content:r.content});continue}throw new Error(`SotWrite: no table backs path ${r.path}`)}return e}function Qr(t,e){kt.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",t,e)}function ZE(t,e,r){let n=/-([0-9a-f]{8})$/.exec(r);return n?t.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(e,n[1])?.branch??null:null}function eb(t,e,r,n){let o=[];for(let g of r.summaryDeletes){let h=t.prepare(Yr).get(e,g);h?.at_ms!=null&&o.push(h.at_ms),t.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(e,g)}if(zr(t,o),r.summaryTrees.length===0)return;let s=new Set;for(let g of r.summaryTrees)for(let h of g)"children"in h.summary&&s.add(h.hash);let i=t.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let g of s)i.run(e,g);let a=new Map;for(let g of r.summaryTrees)for(let h of g){if(h.parentInFile===null||h.pos===null)continue;let k=a.get(h.parentInFile)??new Map;k.set(h.hash,h.pos),a.set(h.parentInFile,k)}let l=t.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),c=(g,h)=>kt.info("write degraded a value: %s %s",g,h);for(let g of r.summaryTrees)for(let h of g){let k=h.parentInFile,b=h.pos;if(h.parentInFile===null){let M=t.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,h.hash);M&&(k=M.parent_hash,b=M.child_pos,b!==null&&b>=1e6&&((k===null?void 0:a.get(k))?.has(h.hash)||(k=null,b=null)))}let D=JSON.stringify("children"in h.summary?{...h.summary,children:[]}:h.summary);l.run(e,h.hash,k,b,h.hash,0,D,r.treeHashes.get(h.hash)??null,n,n,om(h.summary,h.hash,n,c)),nm(h.summary,h.hash,c),t.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(e,h.hash);let O=t.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(h.summary.topics??[]).forEach((M,de)=>{if(!M.title){c("topic",`${h.hash}[${de}] has no title`);return}O.run(e,h.hash,de,M.category??null,M.importance??null,M.title)})}let u=t.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`),d=[],m=t.prepare(`SELECT m.commit_hash FROM memories m
		  WHERE m.repo_id = ? AND m.parent_hash = ? AND m.child_pos >= ${1e6}`),f=t.prepare(Yr);for(let g of s){for(let{commit_hash:h}of m.all(e,g)){let k=f.get(e,h);k?.at_ms!=null&&d.push(k.at_ms)}u.run(e,g)}zr(t,d),im(t,e)}function tb(t,e,r,n){let o=[];for(let[s,i]of r.aliases){let a=sm(t,e,s,i,n);if(!a.stored){kt.info("dropping alias %s -> %s (no such memory row)",s,i);continue}o.push(...a.days)}zr(t,o)}function rb(t,e,r,n){let o=new Set;for(let s of r.transcriptDeletes)t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,s),t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,s),t.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,s);for(let{id:s,content:i}of r.transcriptWrites){let a=Ye(i);if(!a||!Array.isArray(a.sessions)){Qr("transcript",s);continue}t.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(e,s,(0,am.deflateSync)(Buffer.from(i,"utf8")),n),t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,s);for(let l of a.sessions)l.sessionId&&t.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(e,s,l.sessionId,l.source??null);o.add(s)}return o}function nb(t,e,r,n){if(n.size===0)return;let o=new Set(r.summaryTrees.flat().map(c=>c.hash)),s=new Set(r.summaryTrees.flat().flatMap(c=>[...tr(c.summary,n)])),i=[...n].filter(c=>!s.has(c));if(i.length===0)return;let a=t.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=t.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let u=a.all(e,`%${c}%`);for(let d of u){if(o.has(d.commit_hash))continue;let m=Ye(d.summary_json);m&&tr(m,n).includes(c)&&(l.run(e,d.commit_hash,c),kt.info("linked stored transcript %s to memory %s written earlier",c,d.commit_hash))}}}function ob(t,e,r){if(r.summaryTrees.length===0)return;let n=new Set(t.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(e).map(o=>o.transcript_id));for(let o of r.summaryTrees)for(let s of o){let i=[...new Set(tr(s.summary,n).filter(a=>n.has(a)))];for(let a of s.summary.transcripts??[])n.has(a)||kt.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(e,s.hash);for(let a of i)t.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(e,s.hash,a)}}function sb(t,e,r,n){for(let{kind:s,key:i}of r.contextDeletes)t.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(e,s,i);let o=t.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of r.contextWrites){if(s==="reference"){let u=Xs(a);if(!u){Qr("reference frontmatter",`references/${i}.md`);continue}o.run(e,s,i,u.source,u.nativeId,u.toolName,u.referencedAt,null,null,u.title,u.url??null,a,n,n);continue}let l=s==="plan"||s==="note"?ZE(t,e,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(e,s,i,null,null,null,null,c,l,rm(a),null,a,n,n)}}function ib(t,e,r,n){for(let o of r.progressDeletes)t.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(e,o);for(let{pathSlug:o,content:s}of r.progressWrites){let i=Ye(s);if(!i){Qr("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!t.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(e,a)){kt.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}t.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(e,a,s,n)}}function ab(t,e,r,n){for(let o of r.topicPageDeletes)t.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(e,o);for(let{slug:o,content:s}of r.topicPageWrites){let i=Ye(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){Qr("topic page",`topics/${o}.json`);continue}t.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(e,i.stableSlug,i.title,r.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),t.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(e,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{t.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(e,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of r.topicSummaries){let i=t.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,e,o);Number(i.changes)===0&&kt.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(r.processedSet!==null){let o=Ye(r.processedSet);if(!o?.processed)Qr("processed set","topics/processed.json");else{t.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(e);let s=t.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(e,i,l)}}r.v5State!==null&&t.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(e,r.v5State)}function lm(t,e,r,n){let o=QE(r);So(t,()=>{t.exec("PRAGMA defer_foreign_keys = ON"),eb(t,e,o,n),tb(t,e,o,n);let s=rb(t,e,o,n);ob(t,e,o),nb(t,e,o,s),sb(t,e,o,n),ib(t,e,o,n),ab(t,e,o,n)})}y();function dm(t){let e=new Map;for(let r of t){if(r.parent_hash==null)continue;let n=e.get(r.parent_hash)??[];n.push(r),e.set(r.parent_hash,n)}for(let r of e.values())r.sort((n,o)=>Number(n.child_pos)-Number(o.child_pos));return e}function ta(t,e){let r=JSON.parse(e.summary_json);return"children"in r&&(r.children=(t.get(e.commit_hash)??[]).map(n=>ta(t,n))),r}function lb(t,e,r){let n=t.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,r);if(!n)return;let o=(n.parent_hash===null?t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):t.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(e,n.parent_hash===null?n.root_hash:r),s=o.find(i=>i.commit_hash===r);return s?ta(dm(o),s):void 0}function cb(t){if(t===null)return{};try{return{diffStats:JSON.parse(t)}}catch{return{}}}var or=class{constructor(e,r){this.repoIdentity=e;this.dbPath=r;this.kind="sqlite"}async withDb(e){return Ji(r=>{let n=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!n)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return e(r,n.id)},{dbPath:this.dbPath})}async withDbOrAbsent(e,r){return Ji(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?e(n,o.id):r},{dbPath:this.dbPath})}async readFile(e){return this.withDbOrAbsent((r,n)=>this.readOne(r,n,e),null)}async batchReadFiles(e){return this.withDbOrAbsent((r,n)=>{let o=new Map;for(let s of e)o.set(s,this.readOne(r,n,s));return o},new Map(e.map(r=>[r,null])))}readOne(e,r,n){let o=n.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=lb(e,r,o[1]);return c?JSON.stringify(c,null,"	"):null}if(n==="index.json")return this.synthIndex(e,r);if(n==="catalog.json")return this.synthCatalog(e,r);if(n==="topics/index.json")return this.synthTopicIndex(e,r);if(n==="topics/processed.json")return this.synthProcessed(e,r);if(n==="schema-v5-migration.json")return e.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(r)?.value??null;let s=n.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(e,r,s[1]);let i=n.match(/^transcripts\/(.+)\.json$/);if(i){let c=e.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(r,i[1]);return c?(0,cm.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=n.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return e.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(r,c,a[2])?.body_md??null}let l=n.match(/^plan-progress\/(.+)\.json$/);return l?e.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(r,l[1])?.artifact_json??null:null}allMemories(e,r){return e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r)}synthIndex(e,r){let n=e.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=new Map(e.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(r).map(a=>[a.root,a.n])),s=n.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...cb(a.diff_stats_json)}})),i=e.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(r);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(e,r){let n=this.allMemories(e,r);if(n.length===0)return null;let o=dm(n),s=n.filter(i=>i.parent_hash===null).map(i=>Vp(ta(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(e,r,n){return e.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(r,n).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(e,r,n){let o=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(r,n);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(e,r,n),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(e,r){let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=n.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(e,r,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(e,r){let n=e.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(r);if(n.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of n)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(e){return this.withDbOrAbsent((r,n)=>{let o=(i,a)=>r.prepare(i).all(n).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(e)).sort()},[])}async writeFiles(e,r){Se()||await fp(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);lm(n,o.id,e,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(r),o=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(r);return{memoriesCount:n.n,memoriesNewestMs:n.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(e){return this.withDbOrAbsent((r,n)=>r.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(n,e)?.target_hash??null,null)}async findShallowestByTreeHash(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(n,e)?.commit_hash??null,null)}async findHashesByPrefix(e){return/^[0-9a-f]+$/.test(e)?this.withDbOrAbsent((r,n)=>r.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(n,e).map(s=>s.commit_hash),[]):[]}async listHeadEntries(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${e!==void 0?" AND branch = ?":""}`).all(...e!==void 0?[n,e]:[n]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(r),o=new Map;for(let s of n){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(r),o=e.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(r),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return n.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((e,r)=>e.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(r).map(o=>this.readOne(e,r,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var db=3e3,um=new Map;async function pm(t){let e=Date.now(),r=um.get(t);if(r&&e-r.at<db)return r.route;let n=await Kr(t);return um.set(t,{route:n,at:e}),n}async function mm(t,e,r){if(r.state==="legacy-fenced"||r.state==="cutover"){let{identity:n}=await _t(e);return new or(n)}return new Xe(t)}async function fm(t){let e=t??process.cwd(),r=await pm(e);if(r.state==="blocked")throw new Error(`storage unavailable: ${r.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return mm(t,e,r)}async function To(t){let e=t??process.cwd(),r;try{r=await pm(e)}catch(n){return{ok:!1,reason:n.message}}if(r.state==="blocked")return{ok:!1,reason:r.reason};try{return{ok:!0,state:r.state,storage:await mm(t,e,r)}}catch(n){return{ok:!1,reason:n.message}}}var xm=require("node:path");Eo();Zt();y();y();var lt=p("DualWriteStorage"),Zr=class{constructor(e,r){this.primary=e;this.shadow=r;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(e){return this.primary.readFile(e)}async batchReadFiles(e){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await this.primary.readFile(n));return r}async writeFiles(e,r){if(!Se()){await this.primary.writeFiles(e,r);try{await this.shadow.writeFiles(e,r),this.shadow.clearDirty?.()}catch(n){lt.warn("Shadow write failed (folder storage): %s",n instanceof Error?n.message:String(n)),this.shadow.markDirty?.(r)}}}async deleteVisibleMarkdown(e){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return lt.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,R(r)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${e.branch}/${n}`),!1}}async regenerateVisibleMarkdown(e){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return lt.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,R(r)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${e.branch}/${n}`),!1}}async deletePlanVisible(e,r){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(e,r)}catch(n){lt.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",e,r,R(n)),this.shadow.markDirty?.(`deletePlanVisible ${r}/${e}`)}}async deleteNoteVisible(e,r){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(e,r)}catch(n){lt.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",e,r,R(n)),this.shadow.markDirty?.(`deleteNoteVisible ${r}/${e}`)}}async pruneBranchMappings(e){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(e)}catch(r){return lt.warn("Shadow pruneBranchMappings failed (folder storage): %s",R(r)),this.shadow.markDirty?.(`pruneBranchMappings ${e.length}`),0}}async healMissingVisibleMarkdown(e){let r=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!r)return{healed:0,skipped:0,failed:0};let n=e?.dropOrphanedManifestEntries??!0,o=r===this.shadow?"shadow":"primary";try{return await r.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:n})??{healed:0,skipped:0,failed:0}}catch(s){let i=s?.code,a=i?`[${i}] ${R(s)}`:R(s);return lt.warn("%s healMissingVisibleMarkdown failed: %s",o,a),r.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(e){return this.primary.listFiles(e)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(e){lt.warn("Shadow ensure failed: %s",e instanceof Error?e.message:String(e))}}async renderTopicWiki(e){await this.shadow.renderTopicWiki?.(e)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var x=require("node:fs"),Cm=require("node:fs/promises"),P=require("node:path");y();var W=require("node:fs");var _e=require("node:path");y();var ub=p("Sync:VaultSymlinkGuard");function pb(t,e){if(!(0,_e.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${e}`);if(!(0,_e.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${t}`);let r=(0,_e.relative)(t,e);if(r===""||r.startsWith("..")||(0,_e.isAbsolute)(r))throw new Error(`assertNoSymlinksInPathSync: target ${e} is not inside vault ${t}`);let n=r.split(_e.sep),o=t;for(let s=0;s<n.length-1;s++){let i=n[s];if(i===void 0||i.length===0)continue;o=`${o}${_e.sep}${i}`;let a;try{a=(0,W.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw ub.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${e}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${e}).`)}}function ra(t,e,r){pb(t,e),(0,W.mkdirSync)((0,_e.dirname)(e),{recursive:!0});let n=`${e}.tmp`,o=W.constants.O_WRONLY|W.constants.O_CREAT|W.constants.O_TRUNC|W.constants.O_NOFOLLOW,s=(0,W.openSync)(n,o,420);try{typeof r=="string"?(0,W.writeSync)(s,r,void 0,"utf-8"):(0,W.writeSync)(s,r)}finally{(0,W.closeSync)(s)}(0,W.renameSync)(n,e)}lo();ee();function mb(t){return`skills--${t}`}function vo(t){return`${mb(t)}.md`}function hm(t){let e=["| Skill | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|"],r=[...t].sort((o,s)=>{let i=na(s)-na(o);return i!==0?i:o.skill<s.skill?-1:o.skill>s.skill?1:0}),n=!1;for(let o of r){let s=o.detection==="heuristic"?" \u2020":"";s!==""&&(n=!0),e.push(`| ${fb(o.skill)}${s} | ${o.invocationCount} | ${hb(o).join(" | ")} |`)}return n&&e.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),e}function gm(t){let e=`${t.length} skill${t.length===1?"":"s"}`,r=0,n=!1,o=!1;for(let s of t)s.usage!==void 0&&(n=!0,r+=s.usage.input+s.usage.cached+s.usage.output,s.usage.confidence!=="attributed"&&(o=!0));return n?`${e} \xB7 ${wm(r,o?"~":"")} tokens`:e}function ym(t,e){let r=t.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${t.commitHash}`,`branch: ${t.branch}`,`generatedAt: ${t.generatedAt}`,"---","",`# Skills used \u2014 ${r}`,"",`_${t.commitMessage}_`,"",...hm(e),""].join(`
`)}
`}function fb(t){return t.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function na(t){let e=t.usage;return e===void 0?0:e.input+e.cached+e.output}function hb(t){let e=t.usage;if(e===void 0)return["\u2014","\u2014","\u2014","\u2014"];let r=e.confidence==="attributed"?"":"~";return[na(t),e.input,e.output,e.cached].map(n=>wm(n,r))}function wm(t,e){return t<1e3?`${e}${t}`:`${e}${(t/1e3).toFixed(1)}k`}function ze(t){return t.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function Sm(t){return t.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function Co(t){return t.replace(/[()\s<>"]/g,e=>e==="("?"%28":e===")"?"%29":encodeURIComponent(e))}Fn();var Em=3/1e6,gb=15/1e6,yb=3.75/1e6;function en(t){return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function bm(t){return t>=.01?`$${t.toFixed(2)}`:t>=5e-5?`$${t.toFixed(4)}`:t>0?"<$0.0001":"$0.00"}function _m(t,e){return t?t.input*Em+t.output*gb+t.cached*yb:e*Em}function ia(t){let{topics:e,sourceNodes:r}=Ip(t),n=[];return wb(n,t),_b(n,t,{withRelevance:!0}),Sb(n,t),Rb(n,t.e2eTestGuide),kb(n,r),vb(n,e,Tb),Cb(n),n.join(`
`)}function wb(t,e){let r=Vr(e),n=r.filesChanged,o=qi(e),s=`${n} file${n!==1?"s":""} changed, +${r.insertions} insertions, \u2212${r.deletions} deletions`,i=Yi(z(e));t.push(`# ${e.commitMessage}`,"",`- **Commit:** \`${e.commitHash}\``,`- **Branch:** \`${e.branch}\``,`- **Author:** ${e.commitAuthor}`,`- **Date:** ${i}`,`- **Duration:** ${Sp(e)}`,`- **Changes:** ${s}`),o>0&&t.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=Ki(e);if(a>0){let c=Vi(e),u=c.input>0||c.output>0||c.cached>0?c:void 0,d=bm(_m(u,a)),m=u?` (${en(u.input)} input, ${en(u.output)} output, ${en(u.cached)} cached)`:"";t.push(`- **Task usage:** ${en(a)} tokens \xB7 ${d}${m}`)}let l=e.jolliDocUrl;l&&t.push(`- **Jolli Memory:** [${l}](${l})`),t.push("","---")}function Sb(t,e){let r=e.recap?.trim();r&&t.push("","## Quick recap","",r,"","---")}function Eb(t){let e=new Map;for(let o of t){let s=e.get(o.source)??[];s.push(o),e.set(o.source,s)}let r=jn().all().map(o=>o.id),n=[];for(let o of r){let s=e.get(o);s&&(n.push(...s),e.delete(o))}for(let o of e.values())n.push(...o);return n}function oa(t,e,r){return t.get(`${e}:${r}`)??t.get(`${e}:${r.replace(Ep,"")}`)}var bb={high:"High",mid:"Med",low:"Low"};function sa(t){return!t||t.reason===""?"":` \u2014 ${bb[t.tier]} \xB7 ${ze(t.reason)}`}function _b(t,e,r){let n=e.plans??[],o=e.notes??[],s=r?.includeReferences?e.references??[]:[],i=r?.withRelevance?e.excludedContext??[]:[],a=new Map;if(r?.withRelevance)for(let d of e.contextRelevance??[])a.set(`${d.kind}:${d.key}`,{tier:d.tier,reason:d.reason});let l=e.skills??[],c=n.length+o.length+s.length+(l.length>0?1:0);if(c===0&&i.length===0)return;let u=c>1?` (${c})`:"";t.push("",`## Context${u}`,"");for(let d of n){let m=d.jolliPlanDocUrl,f=sa(oa(a,"plan",d.slug));t.push((m?`- [${ze(d.title)}](${Co(m)})`:`- ${ze(d.title)}`)+f)}for(let d of o){let m=d.jolliNoteDocUrl,f=sa(oa(a,"note",d.id));t.push((m?`- [${ze(d.title)}](${Co(m)})`:`- ${ze(d.title)}`)+f)}for(let d of Eb(s)){let m=ze(Xi(d)),f=d.jolliReferenceDocUrl??d.url,g=sa(oa(a,"reference",`${d.source}:${d.nativeId}`));t.push((f?`- [${m}](${Co(f)})`:`- ${m}`)+g)}if(l.length>0){let d=l.some(m=>m.detection==="heuristic")?" \xB7 some inferred":"";t.push(`- Skills used \u2014 ${ze(gm(l))}${d}`)}for(let d of i)t.push(`- ~~${Sm(d.title)}~~ \u2014 Excluded${d.reason?` \xB7 ${ze(d.reason)}`:""}`)}function Rb(t,e){if(!(!e||e.length===0)){t.push("",`## E2E Test (${e.length})`);for(let r=0;r<e.length;r++){let n=e[r];t.push("",`### ${r+1}. ${n.title}`),n.preconditions&&t.push("",`**Preconditions:** ${n.preconditions}`),t.push("","**Steps:**");for(let o=0;o<n.steps.length;o++)t.push(`${o+1}. ${n.steps[o]}`);t.push("","**Expected Results:**");for(let o of n.expectedResults)t.push(`- ${o}`)}t.push("","---")}}function kb(t,e){if(!(e.length<=1)){t.push("",`## Source Commits (${e.length})`);for(let r of e){let n=Vr(r),o=r.conversationTurns?` \xB7 ${r.conversationTurns} turns`:"";t.push(`- \`${r.commitHash.substring(0,8)}\` ${r.commitMessage}  _(+${n.insertions} \u2212${n.deletions}${o} \xB7 ${Cp(z(r))})_`)}t.push("","---")}}function Tb(t,e){if(t.push("","**\u26A1 Why This Change**","",e.trigger),t.push("","**\u{1F4A1} Decisions Behind the Code**","",e.decisions),t.push("","**\u2705 What Was Implemented**","",e.response),e.todo&&t.push("","**\u{1F4CB} Future Enhancements**","",e.todo),e.filesAffected&&e.filesAffected.length>0){t.push("","**\u{1F4C1} FILES**");for(let r of e.filesAffected)t.push(`- \`${r}\``)}}function vb(t,e,r,n={singular:"Summary",plural:"Summaries"}){if(e.length!==0){t.push("",`## ${e.length===1?n.singular:n.plural} (${e.length})`);for(let o=0;o<e.length;o++){let s=e[o],i=s.category?` \`${s.category}\``:"";t.push("",`### ${Ap(o)} \xB7 ${s.title}${i}`),r(t,s)}}}function Cb(t,e){let r=Yi(new Date().toISOString()),n=e?xp(e):void 0,o=n?` \xB7 via ${n}`:"";t.push("","---","",`*Generated by Jolli Memory \xB7 ${r}${o}*`)}var Rm="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function km(t,e,r,n){let o=[];if(o.push(`# ${t.title}`),o.push(""),o.push(Rm),o.push(""),o.push(`> **Source branches:** ${e.join(", ")}`),o.push(`> **Merged:** ${r}`),o.push(`> **Topic slug:** \`${t.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(t.content.trim()),o.push(""),t.keyDecisions&&t.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let s of t.keyDecisions)o.push(`- ${s}`);o.push("")}if(t.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let s of t.sourceCommits){let i=s.substring(0,8),a=n.resolveCommitVisiblePath(i),l=n.resolveCommitMessage(i);a&&l?o.push(`- ${aa(i,Ab(a))} \u2014 ${l}`):l?o.push(`- \`${i}\` \u2014 ${l}`):o.push(`- \`${i}\``)}o.push("")}if(t.relatedBranches&&t.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let s of t.relatedBranches){let i=n.resolveBranchFolder(s);i?o.push(`- ${aa(s,`../${i}/`)}`):o.push(`- \`${s}\``)}o.push("")}return o.join(`
`)}function Tm(t){return{title:t.title,stableSlug:t.stableSlug,content:t.content,...t.relatedBranches.length>0&&{relatedBranches:[...t.relatedBranches]},sourceCommits:t.sourceRefs.filter(e=>e.type==="summary").map(e=>e.id)}}function vm(t,e){let r=[];if(r.push(`# ${e.repoName} \xB7 Knowledge Wiki`),r.push(""),r.push(Rm),r.push(""),r.push(`> **${t.length} topics** in the knowledge base`),r.push(""),t.length>0){r.push("## Topics"),r.push("");for(let n of t)r.push(`- ${aa(n.title,`topic--${n.stableSlug}.md`)}`);r.push("")}return r.join(`
`)}function Ab(t){return t.startsWith("./")?t.substring(2):t}function aa(t,e){let r=t.replace(/[\\[\]]/g,"\\$&"),n=e.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${r}](${n})`}var v=p("FolderStorage"),Ao=class t{constructor(e,r){this.rootPath=e;this.metadataManager=r;this.kind="folder"}get vaultRoot(){return(0,P.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(e){let r=(0,P.join)(this.rootPath,".jolli",e);try{return(0,x.readFileSync)(r,"utf-8")}catch(n){let o=n.code;return o==="ENOENT"||o==="ENOTDIR"||v.warn("readFile failed for %s: %s",r,R(n)),null}}async writeFiles(e,r){if(Se())return;await this.ensure();let n=0,o=0;for(let s of e)s.delete?this.deleteHiddenFile(s.path)&&o++:(this.writeHiddenFile(s.path,s.content),n++,s.path.startsWith("summaries/")&&s.path.endsWith(".json")&&this.generateSummaryMarkdown(s.content),s.path.startsWith("plans/")&&s.path.endsWith(".md")&&this.generatePlanMarkdown(s.path,s.content,s.branch),s.path.startsWith("notes/")&&s.path.endsWith(".md")&&this.generateNoteMarkdown(s.path,s.content,s.branch));v.info("Wrote %d files, deleted %d (%s)",n,o,r)}async listFiles(e){let r=(0,P.join)(this.rootPath,".jolli",e);if(!(0,x.existsSync)(r))return[];let n=(0,P.join)(this.rootPath,".jolli"),o=[];return this.walkDir(r,n,o),o.sort()}async exists(){return(0,x.existsSync)(this.rootPath)}async ensure(){(0,x.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(e){let r=(0,P.join)(this.rootPath,".jolli","shadow-status.json"),n={dirty:!0,lastFailedAt:new Date().toISOString(),message:e};try{ra(this.vaultRoot,r,JSON.stringify(n,null,"	"))}catch(o){v.warn("markDirty suppressed: %s",R(o))}}clearDirty(){let e=(0,P.join)(this.rootPath,".jolli","shadow-status.json");try{(0,x.existsSync)(e)&&(0,x.unlinkSync)(e)}catch{}}isDirty(){let e=(0,P.join)(this.rootPath,".jolli","shadow-status.json");return(0,x.existsSync)(e)}async deleteVisibleMarkdown(e){let r=t.slugify(e.commitMessage),n=e.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${e.commitHash}`,e.branch,vo(n))}catch(o){v.warn("Failed to delete skills aggregate for %s: %s",n,String(o))}return this.deleteVisibleArtifact(e.commitHash,e.branch,`${r}-${n}.md`)}async deletePlanVisible(e,r){await this.deleteVisibleArtifact(`plan:${e}`,r,`plan--${e}.md`)}async deleteNoteVisible(e,r){await this.deleteVisibleArtifact(`note:${e}`,r,`note--${e}.md`)}async pruneBranchMappings(e){let r=new Map,n=new Set(e);for(let s of this.metadataManager.listBranchMappings())n.has(s.branch)&&r.set(s.branch,s.folder);let o=this.metadataManager.unregisterBranches(e);return o===0?0:(await Promise.all([...r.values()].map(s=>this.rmdirIfEmpty((0,P.join)(this.rootPath,s)))),o)}async rmdirIfEmpty(e){try{await(0,Cm.rmdir)(e)}catch(r){let n=r.code;if(n==="ENOENT"||n==="ENOTEMPTY"||n==="EEXIST")return;v.warn("rmdir(%s) failed (non-fatal): %s",e,R(r))}}resolveBranchForFolder(e){return this.metadataManager.listBranchMappings().find(n=>n.folder===e)?.branch??null}async deleteVisibleArtifact(e,r,n){let o=this.metadataManager.findById(e),s=this.metadataManager.resolveFolderForBranch(r),i=o?.path??`${s}/${n}`,a=(0,P.join)(this.rootPath,i);if(!(0,x.existsSync)(a))return o&&this.metadataManager.removeFromManifest(e),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return v.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i),!1;try{return(0,x.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(e),v.info("Deleted visible MD: %s",i),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(e),!1;throw l}}async forceRegenerateVisibleMarkdown(e){let r=await this.readFile(`summaries/${e.commitHash}.json`);if(!r)return v.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",e.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(r)}catch(c){return v.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",e.commitHash.substring(0,8),R(c)),{ok:!1,reason:"malformed"}}let n=this.metadataManager.resolveFolderForBranch(e.branch),o=t.slugify(e.commitMessage),s=e.commitHash.substring(0,8),i=`${n}/${o}-${s}.md`,a=(0,P.join)(this.rootPath,i);if((0,x.existsSync)(a))try{(0,x.unlinkSync)(a)}catch(c){return v.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",i,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(e)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(e){let r=this.metadataManager.resolveFolderForBranch(e.branch),n=t.slugify(e.commitMessage),o=e.commitHash.substring(0,8),s=`${r}/${n}-${o}.md`,i=(0,P.join)(this.rootPath,s);if((0,x.existsSync)(i))return await this.healSkillsAggregate(e,r,o),!0;let a=await this.readFile(`summaries/${e.commitHash}.json`);if(!a)return v.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",e.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(g){return v.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",e.commitHash.substring(0,8),R(g)),!1}let c=this.buildYamlFrontmatter(l),u=ia(l),d=`${c}
${u}`;this.atomicWrite(i,d);let m=this.metadataManager.findById(e.commitHash),f=te.sha256(d);return this.metadataManager.updateManifest({path:s,fileId:l.commitHash,type:"commit",fingerprint:f,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:m?.title??l.commitMessage}),this.generateSkillsAggregate(l,r,o),v.info("Regenerated visible MD: %s",s),!0}async healMissingVisibleMarkdown(e){let n=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,s=0,i=0,a=[];for(let c of n){let u=(0,P.join)(this.rootPath,c.path);if((0,x.existsSync)(u)){s++;continue}let d=(0,P.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),m;try{m=(0,x.readFileSync)(d,"utf-8")}catch(O){let M=O.code;if(M==="ENOENT"){i++,e?.dropOrphanedManifestEntries?(a.push(c.fileId),v.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):v.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}i++,v.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),M??"?",R(O));continue}let f;try{f=JSON.parse(m)}catch(O){i++,v.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),R(O));continue}let g=this.metadataManager.resolveFolderForBranch(f.branch),h=t.slugify(f.commitMessage),k=f.commitHash.substring(0,8),b=`${g}/${h}-${k}.md`;if(b!==c.path){s++,v.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,b);continue}let D={commitHash:f.commitHash,parentCommitHash:null,commitMessage:f.commitMessage,commitDate:f.commitDate,branch:f.branch,generatedAt:f.generatedAt};try{await this.regenerateVisibleMarkdown(D)?o++:(i++,v.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(O){i++,v.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),R(O))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||i>0)&&v.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,s,i,l.length),l.length>0?{healed:o,skipped:s,failed:i,droppedIds:l}:{healed:o,skipped:s,failed:i}}dropManifestEntries(e){if(e.length===0)return[];let r=new Set(e),n=this.metadataManager.readManifest(),o=n.files.filter(i=>r.has(i.fileId)).map(i=>i.fileId);if(o.length===0)return[];let s=n.files.filter(i=>!r.has(i.fileId));return this.metadataManager.replaceFiles(s),o}isUserEditedOnDisk(e,r){if(!(0,x.existsSync)(e)||!r)return!1;let n;try{n=te.sha256((0,x.readFileSync)(e,"utf-8"))}catch(o){return v.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",e,String(o)),!0}return n!==r}generateSummaryMarkdown(e){let r;try{r=JSON.parse(e)}catch{return}let n=this.metadataManager.resolveFolderForBranch(r.branch),o=t.slugify(r.commitMessage),s=r.commitHash.substring(0,8),i=`${o}-${s}.md`,a=`${n}/${i}`,l=this.buildYamlFrontmatter(r),c=ia(r),u=`${l}
${c}`,d=(0,P.join)(this.rootPath,a),m=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,m?.fingerprint)){v.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,u);let f=te.sha256(u);this.metadataManager.updateManifest({path:a,fileId:r.commitHash,type:"commit",fingerprint:f,source:{commitHash:r.commitHash,branch:r.branch,generatedAt:r.generatedAt},title:r.commitMessage}),v.info("Markdown generated: %s",a),this.generateSkillsAggregate(r,n,s),r.children&&r.children.length>0&&this.cleanupSupersededDescendants(r.children,a)}async healSkillsAggregate(e,r,n){if((0,x.existsSync)((0,P.join)(this.rootPath,r,vo(n))))return;let o=await this.readFile(`summaries/${e.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),r,n)}catch{}}generateSkillsAggregate(e,r,n){let o=e.skills;if(o===void 0||o.length===0)return;let s=`${r}/${vo(n)}`,i=(0,P.join)(this.rootPath,s),a=this.metadataManager.findByPath(s);if(this.isUserEditedOnDisk(i,a?.fingerprint)){v.info("FolderStorage: skip overwrite of user-edited %s",s);return}let l=ym(e,o);this.atomicWrite(i,l),this.metadataManager.updateManifest({path:s,fileId:`skill:${e.commitHash}`,type:"skill",fingerprint:te.sha256(l),source:{commitHash:e.commitHash,branch:e.branch,generatedAt:e.generatedAt},title:`Skills used \u2014 ${n}`}),v.info("Skills aggregate generated: %s",s)}cleanupSupersededDescendants(e,r){let n=[];t.collectDescendantHashes(e,n);for(let o of n){let s=this.metadataManager.findById(o);if(!s||s.type!=="commit"||s.path===r)continue;let i=(0,P.join)(this.rootPath,s.path);if(!(0,x.existsSync)(i)){this.metadataManager.removeFromManifest(o);continue}if(!s.fingerprint){v.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",s.path);continue}if(this.isUserEditedOnDisk(i,s.fingerprint)){v.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s.path);continue}try{(0,x.unlinkSync)(i),this.metadataManager.removeFromManifest(o),v.info("Cleaned up superseded MD: %s",s.path)}catch(a){v.warn("Failed to delete superseded MD %s: %s",s.path,String(a))}}}static collectDescendantHashes(e,r){for(let n of e)r.push(n.commitHash),n.children&&n.children.length>0&&t.collectDescendantHashes(n.children,r)}buildYamlFrontmatter(e){let r=["---"];return r.push(`commitHash: ${e.commitHash}`),r.push(`branch: ${e.branch}`),r.push(`author: ${e.commitAuthor}`),r.push(`date: ${e.commitDate}`),r.push("type: commit"),e.commitType&&r.push(`commitType: ${e.commitType}`),e.stats&&(r.push(`filesChanged: ${e.stats.filesChanged}`),r.push(`insertions: ${e.stats.insertions}`),r.push(`deletions: ${e.stats.deletions}`)),r.push("---"),r.join(`
`)}async regenerateVisiblePlan(e,r){let n=await this.readFile(`plans/${e}.md`);if(!n)return v.warn("regenerateVisiblePlan: hidden plans/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),s=(0,P.join)(this.rootPath,o,`plan--${e}.md`);if((0,x.existsSync)(s))try{(0,x.unlinkSync)(s)}catch(i){return v.warn("regenerateVisiblePlan: cannot unlink %s [%s]",s,String(i)),!1}return this.generatePlanMarkdown(`plans/${e}.md`,n,r),!0}generatePlanMarkdown(e,r,n){let o=e.replace(/^plans\//,"").replace(/\.md$/,""),s=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),i=`plan--${o}.md`,a=`${s}/${i}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${r}`,u=(0,P.join)(this.rootPath,a),d=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,d?.fingerprint)){v.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,c);let m=te.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:m,updatedAt:new Date().toISOString(),source:n?{branch:n}:{},title:this.extractTitle(r)??o}),v.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(e,r){let n=await this.readFile(`notes/${e}.md`);if(!n)return v.warn("regenerateVisibleNote: hidden notes/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),s=(0,P.join)(this.rootPath,o,`note--${e}.md`);if((0,x.existsSync)(s))try{(0,x.unlinkSync)(s)}catch(i){return v.warn("regenerateVisibleNote: cannot unlink %s [%s]",s,String(i)),!1}return this.generateNoteMarkdown(`notes/${e}.md`,n,r),!0}generateNoteMarkdown(e,r,n){let o=e.replace(/^notes\//,"").replace(/\.md$/,""),s=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),i=`note--${o}.md`,a=`${s}/${i}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${r}`,u=(0,P.join)(this.rootPath,a),d=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,d?.fingerprint)){v.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,c);let m=te.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:m,source:n?{branch:n}:{},title:this.extractTitle(r)??o,updatedAt:new Date().toISOString()}),v.info("Note markdown generated: %s",a)}resolveBranchFromSlug(e){let r=e.split("-").at(-1);if(r.length>=7){let o=this.metadataManager.readManifest().files.find(i=>i.type==="commit"&&i.source?.commitHash?.startsWith(r));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let s=(0,P.join)(this.rootPath,".jolli","index.json");if((0,x.existsSync)(s))try{let a=JSON.parse((0,x.readFileSync)(s,"utf-8")).entries.find(l=>l.commitHash.startsWith(r));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(e){let r=e.match(/^#\s+(.+)/m);return r?r[1].trim():null}writeHiddenFile(e,r){let n=(0,P.join)(this.rootPath,".jolli",e);this.atomicWrite(n,r)}deleteHiddenFile(e){let r=(0,P.join)(this.rootPath,".jolli",e);if(!(0,x.existsSync)(r))return!1;try{return(0,x.unlinkSync)(r),!0}catch{return!1}}walkDir(e,r,n){for(let o of(0,x.readdirSync)(e,{withFileTypes:!0})){let s=(0,P.join)(e,o.name);o.isDirectory()?this.walkDir(s,r,n):n.push(be((0,P.relative)(r,s)))}}async renderTopicWiki(e){let r=(0,P.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(r);let n=this.buildWikiRenderContext();(0,x.mkdirSync)(r,{recursive:!0});let o=[];for(let s of e)try{let i=Tm(s);o.push(i);let a=`_wiki/topic--${i.stableSlug}.md`,l=km(i,s.relatedBranches,s.lastUpdatedAt,n);this.atomicWrite((0,P.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${i.stableSlug}`,type:"wiki",fingerprint:te.sha256(l),source:{generatedAt:s.lastUpdatedAt},title:i.title})}catch(i){v.warn("renderTopicWiki: failed to render topic %s: %s",s.stableSlug,R(i))}try{let s=vm(o,n),i="_wiki/_index.md";this.atomicWrite((0,P.join)(this.rootPath,i),s),this.metadataManager.updateManifest({path:i,fileId:"wiki-index",type:"wiki",fingerprint:te.sha256(s),source:{generatedAt:new Date().toISOString()},title:`${n.repoName} Knowledge Wiki`})}catch(s){v.warn("renderTopicWiki: failed to render index: %s",R(s))}v.info("Topic-KB wiki regenerated: %d topics under %s",e.length,r)}isTopicWikiPresent(){return(0,x.existsSync)((0,P.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(e){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,x.existsSync)(e))try{for(let r of(0,x.readdirSync)(e))if(r.endsWith(".md"))try{(0,x.unlinkSync)((0,P.join)(e,r))}catch(n){v.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",r,R(n))}}catch(r){v.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",e,R(r))}}buildWikiRenderContext(){let e=this.metadataManager.readConfig(),r=this.metadataManager.listBranchMappings(),n=new Map(r.map(i=>[i.branch,i.folder])),o=this.metadataManager.readManifest(),s=new Map;for(let i of o.files)i.type==="commit"&&i.source.commitHash&&s.set(i.source.commitHash.substring(0,8),i);return{repoName:e.repoName??"Memory Bank",resolveCommitVisiblePath:i=>{let a=s.get(i);return a?`../${a.path}`:null},resolveBranchFolder:i=>n.get(i)??null,resolveCommitMessage:i=>s.get(i)?.title??null}}atomicWrite(e,r){ra(this.vaultRoot,e,r)}static slugify(e){let r=e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return r.length>50&&(r=r.substring(0,50).replace(/-+$/,"")),r||"untitled"}};Ur();lo();pe();var xo=p("StorageFactory");async function la(t,e){let r;try{r=await Pe()}catch(a){xo.warn("Failed to load config, falling back to defaults: %s",a.message),r={}}r.storageMode!==void 0&&xo.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",r.storageMode);let n=r.localFolder,o=await Kr(t);if(xo.info("StorageFactory.create: route=%s, projectPath=%s",o.state,t),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await _t(t),l=new or(a);return Ii(t,n)?new Zr(l,Am(t,n)):l}if(!Ii(t,n))return xo.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",t),new Xe(e);let s=new Xe(e),i=Am(t,n);return new Zr(s,i)}function Am(t,e){let r=Au(t),n=Pu(t),o=Cu(r,n,e),s=new te((0,xm.join)(o,".jolli"));return new Ao(o,s)}var me=p("SchemaV5Migration"),Pm="schema-v5-migration.json",Im=3e4;async function ca(t,e){let n=await(e??await la(t??process.cwd(),t)).readFile(Pm);if(!n)return null;try{return JSON.parse(n)}catch(o){return me.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function xb(t,e,r){if(In(t))return await r();if(!await xs(t,{timeoutMs:Im}))throw new Error(`${e}: could not acquire orphan-write lock within ${Im}ms`);try{return await Pn(t,r)}finally{await Is(t)}}async function Dm(t){let e=await la(t??process.cwd(),t),r=await ca(t,e);return r?.status==="completed"?(me.info("Schema v5 migration already completed at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0}):await e.exists()?xb(t,"migrateSchemaToV5",()=>Pb(t,e)):(me.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function Ib(t,e){if(e.length===0)return new Map;if(t.batchReadFiles)return t.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await t.readFile(n));return r}async function Pb(t,e){let r=await ca(t,e);if(r?.status==="completed")return me.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0};let n=new Date().toISOString(),o=await To(t),s=o.ok&&o.state==="uncutover"?await H(["rev-parse",`refs/heads/${we}`],t).then(V=>V.stdout.trim()).catch(()=>null):null,i=await e.listFiles("summaries/");me.info("Found %d summary files to inspect",i.length);let a=await e.listFiles("transcripts/"),l=new Set;for(let V of a){let je=zi(V);je&&l.add(je)}me.info("Reading %d summaries...",i.length);let c=Date.now(),u=await Ib(e,i);me.info("Read %d summaries in %d ms",u.size,Date.now()-c);let d=[],m=[],f=0,g=0;for(let V of i){let je=u.get(V);if(je===void 0)throw new Error(`readSummaries omitted ${V} \u2014 protocol contract violation (expected one entry per request)`);if(je===null){g++;continue}let Dt;try{Dt=JSON.parse(je)}catch(yn){me.warn("Skipping unparseable summary %s: %s",V,yn.message),g++;continue}let wr=Db(Dt,l),Sr=JSON.stringify(wr,null,"	");if(m.push({path:V,content:Sr}),wr===Dt){g++;continue}d.push({path:V,content:Sr}),f++}let h=i.length===0,k=f===0&&g>0,b=k?m:d,D=h?"Schema v5 migration: no pre-v5 data found":k?`Schema v5 migration: re-pushing ${g} v5 summaries to heal storage shadow`:`Schema v5 migration: ${f} upgraded, ${g} skipped`,O=Date.now();if(b.length>0&&(me.info("Writing %d summary file(s) via active storage...",b.length),await e.writeFiles(b,D)),e.isDirty?.()??!1)return me.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",f,g,Date.now()-O),{migrated:f,skipped:g,fresh:h,alreadyDone:!1};let de={version:1,status:"completed",startedAt:n,completedAt:new Date().toISOString(),migratedCount:f,skippedCount:g,fresh:h};return await e.writeFiles([{path:Pm,content:JSON.stringify(de,null,"	")}],D),me.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",f,g,h,k,Date.now()-O),s&&me.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",s),{migrated:f,skipped:g,fresh:h,alreadyDone:!1}}function Db(t,e){if(t.version>=5&&t.transcripts!==void 0)return t;let r=Bp(t);if(r.transcripts!==void 0)return{...r,version:5};let o=Xr(r).filter(i=>e.has(i));return{...r,version:5,transcripts:o}}pe();y();var sr=require("node:fs/promises"),tn=require("node:path");oe();async function da(t){let e=(0,tn.join)(t,".claude"),r=(0,tn.join)(e,"settings.local.json"),n=We("stop"),o=We("session-start");await Nm(t);let s={},i;try{i=await(0,sr.readFile)(r,"utf-8"),s=JSON.parse(i)}catch(f){if(f.code!=="ENOENT")throw f}let a=s.hooks??{},l=a.Stop??[],c=a.SessionStart??[],u=qn(l);u.push({hooks:[{type:"command",command:n,async:!0}]});let d=wt(c,Bn);d.push({hooks:[{type:"command",command:o}]}),a.Stop=u,a.SessionStart=d,s.hooks=a;let m=JSON.stringify(s,null,"	");return i===m?{path:r}:(await(0,sr.mkdir)(e,{recursive:!0}),await I(r,m),{path:r})}async function Nm(t){let e=(0,tn.join)(t,".claude","settings.json"),r;try{let i=await(0,sr.readFile)(e,"utf-8");r=JSON.parse(i)}catch{return}let n=r.hooks;if(!n)return;let o=n.Stop??[];if(!ti(o))return;let s=qn(o);s.length===0?delete n.Stop:n.Stop=s,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await I(e,JSON.stringify(r,null,"	"))}async function ua(t){await Nm(t);let e=(0,tn.join)(t,".claude","settings.local.json"),r;try{let l=await(0,sr.readFile)(e,"utf-8");r=JSON.parse(l)}catch{return{}}let n=r.hooks;if(!n)return{};let o=n.Stop??[],s=ti(o);if(s){let l=qn(o);l.length===0?delete n.Stop:n.Stop=l}let i=n.SessionStart??[],a=Or(i,Bn);if(a){let l=wt(i,Bn);l.length===0?delete n.SessionStart:n.SessionStart=l}return!s&&!a?{}:(Object.keys(n).length===0?delete r.hooks:r.hooks=n,await I(e,JSON.stringify(r,null,"	")),{})}var vt=require("node:fs/promises"),Lh=require("node:os"),un=require("node:path");oe();y();var Ih=require("node:crypto"),cr=require("node:fs"),Na=require("node:fs/promises"),Go=require("node:os"),Qe=require("node:path");y();var Lm=require("node:fs"),Po=require("node:fs/promises"),Mm=require("node:os"),Tt=require("node:path"),$m=require("node:url");oe();y();var Nb=/^[a-z0-9][a-z0-9-]*$/;function rn(t){return Nb.test(t)}var Io=p("DistPathWriter");async function nn(t,e,r,n){if(!rn(t))return Io.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(t)),!1;let o=e??(0,Tt.dirname)((0,$m.fileURLToPath)(__jmImportMetaUrl)),s=r??"0.99.13",i=(0,Tt.join)(n??(0,Tt.join)((0,Mm.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,Tt.join)(i,t);try{await(0,Po.mkdir)(i,{recursive:!0});let l=`${s}
${o}`,c;try{c=await(0,Po.readFile)(a,"utf-8")}catch{}if(c){let[u,d]=c.split(`
`);if(!!(u&&d&&Om(d))&&!Om(o))return Io.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",t,u,o),!0}return c!==l&&await I(a,l),Io.info("Wrote dist-paths/%s (version=%s, distDir=%s)",t,s,o),!0}catch(l){return Io.warn("Failed to write dist-paths/%s: %s",t,l.message),!1}}var Ob=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function Om(t){return Ob.every(e=>(0,Lm.existsSync)((0,Tt.join)(t,e)))}var lr=Ot(xh(),1);function Bo(t,e){if(t.includes("-")||t.includes("+")||e.includes("-")||e.includes("+")){let i=c=>{let u=(0,lr.valid)(c);return u||(/^\d+(\.\d+)*$/.test(c)?(0,lr.coerce)(c)?.version??null:null)},a=i(t),l=i(e);if(a&&l)return(0,lr.compare)(a,l);if(a)return 1;if(l)return-1}let r=/^\d+(\.\d+)*$/.test(t),n=/^\d+(\.\d+)*$/.test(e);if(!r&&!n)return 0;if(!r)return-1;if(!n)return 1;let o=t.split(".").map(Number),s=e.split(".").map(Number);for(let i=0;i<Math.max(o.length,s.length);i++){let a=(o[i]??0)-(s[i]??0);if(a!==0)return a}return 0}var Da=p("DistPathResolver"),Hk=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function Oa(t){let e=t.replace(/\\/g,"/");for(let[n,o]of Hk)if(e.includes(n))return o;let r=e.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return r?.[1]?r[1].toLowerCase():(0,Ih.createHash)("sha256").update(t).digest("hex").slice(0,8)}function Ph(t){try{let r=(0,cr.readFileSync)(t,"utf-8").trim().split(`
`).map(s=>s.trim());if(r.length<2)return null;let n=r[0],o=r[r.length-1];if(!o)return null;if(n.startsWith("source=")){let s=n.slice(7),i=s.indexOf("@");return i===-1?{source:s,version:"unknown",distDir:o}:{source:s.slice(0,i),version:s.slice(i+1),distDir:o}}return{source:"",version:n,distDir:o}}catch{return null}}function dn(t){let e=(0,Qe.join)(t??(0,Qe.join)((0,Go.homedir)(),".jolli","jollimemory"),"dist-paths"),r;try{r=(0,cr.readdirSync)(e).sort()}catch{return[]}let n=[];for(let o of r){let s=(0,Qe.join)(e,o),i=Ph(s);i&&n.push({source:o,version:i.version,distDir:i.distDir,available:(0,cr.existsSync)(i.distDir)})}return n}async function Dh(t){let e=(0,Qe.join)(t??(0,Qe.join)((0,Go.homedir)(),".jolli","jollimemory"),"dist-paths"),r=[];for(let n of dn(t))if(!n.available)try{await(0,Na.unlink)((0,Qe.join)(e,n.source)),r.push(n.source),Da.info("Pruned stale dist-paths/%s (dir gone: %s)",n.source,n.distDir)}catch(o){Da.warn("Failed to prune stale dist-paths/%s: %s",n.source,o.message)}return r}var La=["cli","vscode","cursor"];function qo(t){let e=t.filter(o=>o.available);if(e.length===0)return;let r=e[0];for(let o=1;o<e.length;o++)Bo(e[o].version,r.version)>0&&(r=e[o]);let n=e.filter(o=>Bo(o.version,r.version)===0);for(let o of La){let s=n.find(i=>i.source===o);if(s)return s}return r}async function Nh(){let t=(0,Qe.join)((0,Go.homedir)(),".jolli","jollimemory"),e=(0,Qe.join)(t,"dist-path"),r=Ph(e);if(!r)return!1;let n;if(r.source==="cli")n="cli";else{let o=Oa(r.distDir);n=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return n==="vscode-extension"&&(n="vscode"),await nn(n,r.distDir,r.version),await(0,Na.unlink)(e).catch(()=>{}),Da.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",n,r.version,r.distDir),!0}var Oh=p("DispatchScripts"),Uk=`#!/bin/bash
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
#
# EVERY command below is a bash builtin \u2014 no sed, no sort, no grep. This script
# runs on the front of every hook dispatch, including the SessionStart hook a user
# waits on before Claude Code gives them a prompt. The previous form spent two
# 'sed' processes per registered source plus a four-process 'printf | sort -V |
# tail | grep' pipeline per version comparison: ~40 processes and ~60 ms of pure
# fork/exec to read a dozen two-line files. It is now ~5 ms. Keep it fork-free \u2014
# a single innocuous-looking pipeline here is paid by every git hook and every
# session start.

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

# read_entry <file> \u2014 sets ENTRY_VER / ENTRY_PATH from a two-line registration.
# 'read' is a builtin, so this replaces two 'sed' processes per source. A final
# line with no trailing newline (which is how these files are actually written)
# still populates the variable even though 'read' reports failure, hence the
# unconditional 'return 0'. The CR strip mirrors run-hook's node-path reader: a
# file round-tripped through a Windows-side sync would otherwise fail the -d test
# with no diagnostic anywhere.
read_entry() {
  ENTRY_VER=""
  ENTRY_PATH=""
  [ -f "$1" ] || return 1
  { IFS= read -r ENTRY_VER; IFS= read -r ENTRY_PATH; } < "$1"
  ENTRY_VER="\${ENTRY_VER%$'\\r'}"
  ENTRY_PATH="\${ENTRY_PATH%$'\\r'}"
  return 0
}

# ver_gt <a> <b> \u2014 true when version <a> sorts strictly ABOVE <b>.
#
# Replaces 'sort -V' with dotted-numeric comparison over the first three fields,
# which is the shape every version here has (dev/unknown are normalised to 0.0.0
# by the caller). It also CLOSES a documented divergence rather than adding one:
# 'sort -V' ranks 1.0.0-rc.1 above 1.0.0, while semver \u2014 and the in-process
# compareSemver in cli/src/install/DistPathResolver.ts this script must agree
# with \u2014 rank a prerelease below its own release.
#
# The prerelease tail is compared too, not stripped. Dropping it would make
# 1.0.0-rc.1 and 1.0.0-rc.2 compare EQUAL in both directions, and since an equal
# version never displaces the incumbent, the winner would fall out of readdir
# order \u2014 hooks silently routed to the older of two prereleases. Rules are
# semver's: identifier by identifier, numerically when both are numeric, and a
# longer identifier list wins when every shared one is equal.
#
# Build metadata is stripped FIRST, which is both what semver requires (it takes
# no part in precedence) and the only way the numeric scrub below stays honest:
# the third field of 1.0.0+b1 is '0+b1', and scrubbing non-digits out of that
# yields '01' \u2014 so without this the version compared EQUAL to 1.0.1 and ABOVE a
# plain 1.0.0, where compareSemver says below and equal. That is exactly the
# equal-compare shape described above, with readdir order deciding the winner.
ver_gt() {
  # LC_ALL is local so the string comparison below is byte order everywhere. It is
  # an assignment, not a subprocess: bash re-inits its collation on it and restores
  # the caller's on return.
  local av="\${1%%+*}" bv="\${2%%+*}" a b apre="" bpre="" i x y ap bp ai bi LC_ALL=C
  a="\${av%%-*}"
  b="\${bv%%-*}"
  [ "$a" != "$av" ] && apre=1
  [ "$b" != "$bv" ] && bpre=1
  for i in 1 2 3; do
    x="\${a%%.*}"
    y="\${b%%.*}"
    # Backstop for anything else non-numeric that reaches a field (a hand-edited
    # registration, a tag we do not know); build metadata is already gone by here.
    x="\${x//[!0-9]/}"
    y="\${y//[!0-9]/}"
    [ -z "$x" ] && x=0
    [ -z "$y" ] && y=0
    [ "$x" -gt "$y" ] && return 0
    [ "$x" -lt "$y" ] && return 1
    case "$a" in *.*) a="\${a#*.}" ;; *) a=0 ;; esac
    case "$b" in *.*) b="\${b#*.}" ;; *) b=0 ;; esac
  done
  # Numerically equal. A release outranks its own prerelease; two releases are
  # equal; two prereleases fall through to their identifiers.
  [ -z "$apre" ] && [ -n "$bpre" ] && return 0
  [ -n "$apre" ] && [ -z "$bpre" ] && return 1
  [ -z "$apre" ] && return 1
  ap="\${av#*-}"
  bp="\${bv#*-}"
  while [ -n "$ap" ] || [ -n "$bp" ]; do
    ai="\${ap%%.*}"
    bi="\${bp%%.*}"
    # Ran out of identifiers: the shorter list is the lower version (rc < rc.1).
    [ -z "$ai" ] && return 1
    [ -z "$bi" ] && return 0
    case "$ai$bi" in
      # Either side non-numeric: byte order, which puts digits below letters and
      # so agrees with semver's "numeric identifiers rank below alphanumeric".
      *[!0-9]*)
        [[ "$ai" > "$bi" ]] && return 0
        [[ "$ai" < "$bi" ]] && return 1
        ;;
      *)
        [ "$ai" -gt "$bi" ] && return 0
        [ "$ai" -lt "$bi" ] && return 1
        ;;
    esac
    case "$ap" in *.*) ap="\${ap#*.}" ;; *) ap="" ;; esac
    case "$bp" in *.*) bp="\${bp#*.}" ;; *) bp="" ;; esac
  done
  return 1
}

# Pass 1 \u2014 highest core version wins. The comparison is STRICT greater-than: an
# equal version does NOT overwrite, so enumeration (alphabetical) order never
# decides a tie.
if [ -d "$DIR/dist-paths" ]; then
  for f in "$DIR/dist-paths"/*; do
    read_entry "$f" || continue
    VER="$ENTRY_VER"
    CANDIDATE="$ENTRY_PATH"
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
    elif ver_gt "$VER_CMP" "$BEST_VER"; then
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
  if read_entry "$DIR/dist-paths/$PREFER"; then
    PVER="$ENTRY_VER"
    PPATH="$ENTRY_PATH"
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
  for pref in ${La.join(" ")}; do
    read_entry "$DIR/dist-paths/$pref" || continue
    PVER="$ENTRY_VER"
    PPATH="$ENTRY_PATH"
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
`,Jk=`#!/bin/bash
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
`,Wk=`#!/bin/bash
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
`;async function Ma(t,e){let r=!1;try{r=await(0,vt.readFile)(t,"utf-8")===e}catch{}if(r){await(0,vt.chmod)(t,493);return}await I(t,e),await(0,vt.chmod)(t,493)}async function $a(){let t=(0,un.join)((0,Lh.homedir)(),".jolli","jollimemory");try{return await(0,vt.mkdir)(t,{recursive:!0}),await Ma((0,un.join)(t,"resolve-dist-path"),Uk),await Ma((0,un.join)(t,"run-hook"),Jk),await Ma((0,un.join)(t,"run-cli"),Wk),Oh.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",t),!0}catch(e){return Oh.warn("Failed to write resolve scripts: %s",e.message),!1}}var pn=require("node:fs/promises"),Ko=require("node:path");oe();y();var Mh=p("GeminiHookInstaller");async function ja(t){let e=(0,Ko.join)(t,".gemini"),r=(0,Ko.join)(e,"settings.json"),n=We("gemini-after-agent"),o={},s;try{s=await(0,pn.readFile)(r,"utf-8"),o=JSON.parse(s)}catch(u){if(u.code!=="ENOENT")throw u}let i=o.hooks??{},a=i.AfterAgent??[],l=wt(a,Gn);l.push({hooks:[{type:"command",command:n,name:"jolli-session-tracker"}]}),i.AfterAgent=l,o.hooks=i;let c=JSON.stringify(o,null,"	");return s===c?{path:r}:(await(0,pn.mkdir)(e,{recursive:!0}),await I(r,c),Mh.info("Gemini AfterAgent hook installed"),{path:r})}async function Fa(t){let e=(0,Ko.join)(t,".gemini","settings.json"),r;try{let i=await(0,pn.readFile)(e,"utf-8");r=JSON.parse(i)}catch{return}let n=r.hooks;if(!n)return;let o=n.AfterAgent??[];if(!Or(o,Gn))return;let s=wt(o,Gn);s.length===0?delete n.AfterAgent:n.AfterAgent=s,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await I(e,JSON.stringify(r,null,"	")),Mh.info("Gemini AfterAgent hook removed")}var Ct=require("node:fs/promises"),Ze=require("node:path");oe();y();Ee();var ge=p("GitExclude"),mn="# >>> jolli skill exclude >>>",fn="# <<< jolli skill exclude <<<";function Bk(t,e){return Ze.win32.isAbsolute(t)||Ze.posix.isAbsolute(t)?t:(0,Ze.join)(e,t)}var $h=new Map;async function Ha(t){let e=$h.get(t);if(e!==void 0)return e;try{let{stdout:r}=await $t("git",["rev-parse","--git-path","info/exclude"],{cwd:t}),n=r.trim();if(n.length===0)return null;let o=Bk(n,t);return $h.set(t,o),o}catch{return null}}async function jh(t,e){let r=await Ha(t);if(!r)return ge.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,Ct.readFile)(r,"utf-8")}catch(i){if(i.code!=="ENOENT")return ge.warn("Failed to read %s: %s \u2014 skipping update",r,i.message),!1}let o=Hh(e),s=Uh(n,o);if(s===n)return!0;try{return await(0,Ct.mkdir)((0,Ze.dirname)(r),{recursive:!0}),await I(r,s),ge.info("Updated %s with %d Jolli skill exclude paths",r,e.length),!0}catch(i){return ge.warn("Failed to write %s: %s",r,i.message),!1}}async function Vo(t,e){let r=await Ha(t);if(!r)return ge.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,Ct.readFile)(r,"utf-8")}catch(s){if(s.code!=="ENOENT")return ge.warn("Failed to read %s: %s \u2014 skipping update",r,s.message),!1}let o=Gk(n,e);if(o===n)return!0;try{return await(0,Ct.mkdir)((0,Ze.dirname)(r),{recursive:!0}),await I(r,o),ge.info("Merged %d Jolli skill exclude path(s) into %s",e.length,r),!0}catch(s){return ge.warn("Failed to write %s: %s",r,s.message),!1}}async function Fh(t,e){let r=await Ha(t);if(!r)return ge.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",t),!1;let n;try{n=await(0,Ct.readFile)(r,"utf-8")}catch(s){return s.code==="ENOENT"?!0:(ge.warn("Failed to read %s: %s \u2014 skipping cleanup",r,s.message),!1)}let o=qk(n,e);if(o===n)return!0;try{return await I(r,o),ge.info("Removed %d Jolli exclude path(s) from %s",e.length,r),!0}catch(s){return ge.warn("Failed to write %s: %s",r,s.message),!1}}function Hh(t){return`${[mn,...t,fn].join(`
`)}
`}function Uh(t,e){let r=t.split(`
`),n=r.indexOf(mn),o=r.indexOf(fn),s=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...s,...r.slice(o+1)].join(`
`);if(t.length===0)return e;let i=t.endsWith(`
`)?"":`
`;return`${t}${i}${e}`}function Gk(t,e){let r=t.split(`
`),n=r.indexOf(mn),o=r.indexOf(fn),s=n!==-1&&o!==-1&&o>n?r.slice(n+1,o):[],i=new Set(s),a=[...s];for(let l of e)i.has(l)||(i.add(l),a.push(l));return Uh(t,Hh(a))}function qk(t,e){let r=t.split(`
`),n=r.indexOf(mn),o=r.indexOf(fn);if(n===-1||o===-1||o<=n)return t;let s=new Set(e),i=r.slice(n+1,o).filter(c=>!s.has(c)),a=r.slice(0,n),l=r.slice(o+1);return i.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,mn,...i,fn,...l].join(`
`)}var dt=require("node:fs/promises"),Ua=require("node:os"),hn=require("node:path");y();var dr=p("GlobalInstructionsInstaller"),Ja="<!-- >>> jolli memory instructions >>> -->",Wa="<!-- <<< jolli memory instructions <<< -->",Jh="## Jolli Memory",Wh=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function Kk(){return`${[Ja,Jh,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",Wa].join(`
`)}
`}function Bh(t){return t==="enabled"?{write:!0}:t==="disabled"?{write:!1,remove:!0}:{write:!1}}function Vk(t,e){let r=t.split(`
`),n=r.indexOf(Ja),o=r.indexOf(Wa),s=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...s,...r.slice(o+1)].join(`
`);let i=r.indexOf(Jh);if(i!==-1){let l=r.length;for(let d=i+1;d<r.length;d++)if(/^#{1,2} /.test(r[d])){l=d;break}let c=r.slice(0,i).join(`
`),u=r.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${e}${u}`}if(t.length===0)return e;let a=t.endsWith(`
`)?"":`
`;return`${t}${a}${e}`}async function Xk(t,e){let r="";try{r=await(0,dt.readFile)(t,"utf-8")}catch(o){if(o.code!=="ENOENT"){dr.warn("Failed to read %s: %s \u2014 skipping",t,o.message);return}}let n=Vk(r,e);if(n!==r)try{await(0,dt.mkdir)((0,hn.dirname)(t),{recursive:!0}),await(0,dt.writeFile)(t,n,"utf-8"),dr.info("Updated %s with Jolli Memory instructions",t)}catch(o){dr.warn("Failed to write %s: %s",t,o.message)}}async function Gh(t){let e=Kk(),r=(0,Ua.homedir)();for(let n of Wh)t[n.host]&&await Xk((0,hn.join)(r,...n.relPath),e)}function Yk(t){let e=t.split(`
`),r=e.indexOf(Ja),n=e.indexOf(Wa);if(r===-1||n===-1||n<r)return t;let o=r>0&&e[r-1]===""?r-1:r;return[...e.slice(0,o),...e.slice(n+1)].join(`
`)}async function zk(t){let e;try{e=await(0,dt.readFile)(t,"utf-8")}catch(n){n.code!=="ENOENT"&&dr.warn("Failed to read %s: %s \u2014 skipping",t,n.message);return}let r=Yk(e);if(r!==e)try{await(0,dt.writeFile)(t,r,"utf-8"),dr.info("Removed Jolli Memory instructions from %s",t)}catch(n){dr.warn("Failed to write %s: %s",t,n.message)}}async function qh(){let t=(0,Ua.homedir)();for(let e of Wh)await zk((0,hn.join)(t,...e.relPath))}var ce=require("node:os"),F=require("node:path");pe();y();var Kh=require("node:fs"),pr=require("node:fs/promises"),ur=require("node:path");pe();y();var Ba=p("McpRegistration"),Ga="jollimemory";function Qk(t,e,r,n){return t==="win32"&&r?{command:"node",args:[r,...n]}:{command:e,args:[...n]}}function qa(t,e,r){return Qk(t,e,r,["mcp"])}function Ka(t){let e=qo(dn(t));return e?(0,ur.join)(e.distDir,"Cli.js"):void 0}function Vh(t){let e=qo(dn(t));if(!e)return;let r=(0,ur.join)(e.distDir,"McpLauncher.js");return(0,Kh.existsSync)(r)?r:void 0}var Xh="/.mcp.json";async function Yh(t){let e=(0,ur.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,pr.readFile)(e,"utf-8"))}catch(l){if(l.code!=="ENOENT"){Ba.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",e,String(l));return}r={}}let n=r.mcpServers??{},o=se(),s=(0,ur.join)(o,"run-cli"),i=process.platform==="win32"?Ka(o):void 0;n[Ga]=qa(process.platform,s,i);let a={...r,mcpServers:n};await(0,pr.writeFile)(e,`${JSON.stringify(a,null,2)}
`,"utf-8"),Ba.info("Registered MCP server in %s",e)}async function zh(t){let e=(0,ur.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,pr.readFile)(e,"utf-8"))}catch{return}r.mcpServers?.[Ga]&&(delete r.mcpServers[Ga],await(0,pr.writeFile)(e,`${JSON.stringify(r,null,2)}
`,"utf-8"),Ba.info("Removed MCP server from %s",e))}var At=require("node:fs/promises"),Zh=require("node:path");oe();y();var Xo=p("CodexTomlWriter"),Yo="[mcp_servers.jollimemory]";async function eg(t){try{return(await(0,At.stat)(t)).mode&511}catch{return 384}}function Qh(t){return`${Yo}
command = ${JSON.stringify(t.command)}
args = ${JSON.stringify(t.args??[])}
`}function tg(t){if(t.startsWith(Yo))return 0;let e=t.indexOf(`
${Yo}`);return e===-1?-1:e+1}function rg(t){let e=tg(t);if(e===-1)return t;let r=t.indexOf(`
[`,e+Yo.length),n=r===-1?t.length:r+1,o=t.slice(0,e),s=t.slice(n);return o===""||s===""?o+s:`${o.replace(/\n+$/,"")}

${s}`}async function ng(t,e){let r="";try{r=await(0,At.readFile)(t,"utf-8")}catch(i){if(i.code!=="ENOENT"){Xo.warn("Skipping Codex MCP: %s unreadable (%s)",t,String(i));return}}let n=rg(r).replace(/\s*$/,""),o=n.length===0?Qh(e):`${n}

${Qh(e)}`;if(o===r){Xo.info("Codex MCP server already registered in %s \u2014 no write needed",t);return}await(0,At.mkdir)((0,Zh.dirname)(t),{recursive:!0});let s=await eg(t);await I(t,o,s),Xo.info("Registered Codex MCP server in %s",t)}async function og(t){let e;try{e=await(0,At.readFile)(t,"utf-8")}catch{return}tg(e)!==-1&&(await I(t,`${rg(e).replace(/\s*$/,"")}
`,await eg(t)),Xo.info("Removed Codex MCP server from %s",t))}var xt=require("node:fs/promises"),sg=require("node:path");oe();y();var zo=p("JsonMcpWriter"),Va="jollimemory",ig="mcpServers";async function ag(t){try{return(await(0,xt.stat)(t)).mode&511}catch{return}}async function Oe(t,e,r=ig){let n,o="";try{let c=await(0,xt.readFile)(t,"utf-8");o=c,n=c.trim()===""?{}:JSON.parse(c)}catch(c){if(c.code!=="ENOENT"){zo.warn("Skipping MCP registration: %s unreadable/invalid (%s)",t,String(c));return}n={}}let s=n[r]??{},i=()=>`${JSON.stringify({...n,[r]:s},null,2)}
`,a=i();s[Va]=e;let l=i();if(l===o||l===a){zo.info("MCP server already registered in %s \u2014 no write needed",t);return}await(0,xt.mkdir)((0,sg.dirname)(t),{recursive:!0}),await I(t,l,await ag(t)),zo.info("Registered MCP server in %s",t)}async function Le(t,e=ig){let r;try{r=JSON.parse(await(0,xt.readFile)(t,"utf-8"))}catch{return}let n=r[e];n?.[Va]&&(delete n[Va],await I(t,`${JSON.stringify(r,null,2)}
`,await ag(t)),zo.info("Removed MCP server from %s",t))}var Zk=p("HostRegistrars"),eT={host:"claude",scope:"repo",register:Yh,remove:zh,gitExcludePaths:()=>[Xh]};function Me(){let t=se(),e=process.platform==="win32"?Ka(t):void 0;return qa(process.platform,(0,F.join)(t,"run-cli"),e)}function tT(){let t=Me();if(process.platform!=="win32")return t;let e=Vh(se());return e?{command:"node",args:[e]}:t}var rT={host:"cursor",scope:"repo",register:t=>Oe((0,F.join)(t,".cursor","mcp.json"),{...Me()}),remove:t=>Le((0,F.join)(t,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},nT={host:"gemini",scope:"global",register:()=>Oe((0,F.join)((0,ce.homedir)(),".gemini","settings.json"),{...Me()}),remove:()=>Le((0,F.join)((0,ce.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},oT={host:"codex",scope:"global",register:()=>ng((0,F.join)((0,ce.homedir)(),".codex","config.toml"),tT()),remove:()=>og((0,F.join)((0,ce.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},sT={host:"opencode",scope:"global",register:()=>{let t=Me(),e={type:"local",command:[t.command,...t.args],enabled:!0};return Oe((0,F.join)((0,ce.homedir)(),".config","opencode","opencode.json"),e,"mcp")},remove:()=>Le((0,F.join)((0,ce.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},iT={host:"copilot",scope:"global",register:()=>Oe((0,F.join)((0,ce.homedir)(),".copilot","mcp-config.json"),{...Me()}),remove:()=>Le((0,F.join)((0,ce.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},aT={host:"copilotChat",scope:"global",register:()=>{let t=Me(),e={type:"stdio",command:t.command,args:t.args};return Oe((0,F.join)(qe("Code"),"User","mcp.json"),e,"servers")},remove:()=>Le((0,F.join)(qe("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},lT={host:"cline",scope:"global",register:async()=>{for(let t of await wi())await Oe(so(t),{...Me()})},remove:async()=>{for(let t of Hr())await Le(so(t))},gitExcludePaths:()=>[]},cT={host:"devin",scope:"global",register:()=>Oe((0,F.join)((0,ce.homedir)(),".config","devin","config.json"),{...Me(),transport:"stdio"}),remove:()=>Le((0,F.join)((0,ce.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},dT={host:"antigravity",scope:"global",register:()=>Oe((0,F.join)((0,ce.homedir)(),".gemini","config","mcp_config.json"),{...Me()}),remove:()=>Le((0,F.join)((0,ce.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},uT={host:"kimi",scope:"global",register:()=>Oe((0,F.join)(po(),"mcp.json"),{...Me()}),remove:()=>Le((0,F.join)(po(),"mcp.json")),gitExcludePaths:()=>[]};function mr(t){let e=[];return t.claude&&e.push(eT),t.cursor&&e.push(rT),t.gemini&&e.push(nT),t.codex&&e.push(oT),t.opencode&&e.push(sT),t.copilot&&e.push(iT),t.copilotChat&&e.push(aT),t.cline&&e.push(lT),t.devin&&e.push(cT),t.antigravity&&e.push(dT),t.kimi&&e.push(uT),e}var pT={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0};async function Xa(t,e,r,n){for(let o of t)try{await n(o)}catch(s){Zk.warn("MCP %s failed for %s in %s (non-fatal): %s",r,o.host,e,String(s))}}async function Ya(t,e){let r=mr(e).filter(n=>n.scope==="repo");await Xa(r,t,"registration",n=>n.register(t))}async function lg(t){let e=mr(t).filter(r=>r.scope==="global");await Xa(e,"(global)","registration",r=>r.register(""))}async function za(t){let e=mr(pT).filter(r=>r.scope==="repo");await Xa(e,t,"removal",r=>r.remove(t))}var N=require("node:fs/promises"),fr=require("node:os"),A=require("node:path");oe();y();var ye=`### Shell prerequisite

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
security recipe and the dist resolver and will not produce valid output.`;function cg(){return`---
name: jolli-dashboard
description: Open the local Jolli dashboard in a browser \u2014 the machine-wide view of memories, agent sessions, token spend and knowledge across every repository Jolli tracks, plus the daily standup page. Use when the user asks for the Jolli dashboard, stats, usage, standup, or wants to browse their memories in a UI.
---

# Jolli Dashboard

Serve the local Jolli dashboard and get the user in front of it.

The dashboard is **machine-level**: it aggregates every repository Jolli has
registered on this machine, so it opens from any directory \u2014 including one that is
not a git repository, and one where Jolli Memory is switched off (that repo is
simply absent from the page).

${ye}

## Step 1 \u2014 read the argument, if there is one

This skill takes one optional free-text argument. Recognise exactly three things in
it and ignore the rest:

- **a port** \u2014 only when the argument contains a bare run of digits (e.g. \`3000\`).
  Pass it as \`--port <digits>\`. Never interpolate any other part of the argument
  into the command line.
- **"url only" / "don't open" / "no browser"** \u2014 add \`--no-open\`, and report the
  URL instead of opening it. Prefer this whenever you know the host has no desktop
  session.
- **a page name** \u2014 \`standup\`, \`memories\`, \`knowledge\` or \`graph\`. This does not
  change the command; it changes which path you report in Step 3.

## Step 2 \u2014 start it in the BACKGROUND, then wait for its URL

\`jolli dashboard\` binds a loopback port and then **serves until it is stopped** \u2014
it is not a command that prints something and exits. Run it in the foreground and
your tool call never returns: the harness eventually kills it, and the dashboard
dies with it. So start it detached, and additionally use your host's
"run in background" mode for shell commands when it has one.

Run this as ONE command \u2014 it launches the server, then waits for the line the
server prints once it is listening:

\`\`\`bash
LOG="\${TMPDIR:-/tmp}/jolli-dashboard.log"
nohup "$HOME/.jolli/jollimemory/run-cli" dashboard >"$LOG" 2>&1 &
echo "PID $!"
for _ in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15; do
	URL=$(grep -o 'http://127\\.0\\.0\\.1:[0-9]*/dashboard' "$LOG" | head -1)
	[ -n "$URL" ] && break
	sleep 1
done
if [ -n "$URL" ]; then echo "READY $URL"; else echo "NOT READY"; cat "$LOG"; fi
\`\`\`

Add \`--port <digits>\` and/or \`--no-open\` from Step 1 after \`dashboard\`.

Read the URL out of that log rather than assuming a port: the server prefers
**1818**, falls back to **18118**, and then to any free port the OS gives it.

Only one dashboard serves at a time \u2014 a fresh launch reclaims the port from an
older Jolli dashboard and replaces it. So do not look for a running one first, and
do not clean anything up afterwards.

## Step 3 \u2014 report, or diagnose

**\`READY <url>\`** \u2014 the dashboard is up. Unless \`--no-open\` was used it has
already opened the user's default browser itself; say so in one line and give the
URL as well, so they can open it by hand if no window appeared. When the user named
a page in Step 1, give them that page's URL instead of the bare one, keeping the
port you just read:

| page | path |
| --- | --- |
| stats (default) | \`/dashboard\` |
| standup | \`/dashboard/standup\` |
| memories | \`/memories\` |
| knowledge | \`/knowledge\` |
| graph | \`/graph\` |

Mention once that it keeps serving in the background after this turn, and that
\`kill <PID>\` (the pid echoed above) stops it.

**\`NOT READY\`** \u2014 do NOT re-launch it blind. The log printed with it names the
cause in almost every case:

- \`ERROR: node runtime not found.\` \u2014 the dispatcher found neither a \`node\` on
  \`PATH\` nor an IDE-recorded runtime. Report that and stop.
- \`Error: the dashboard needs Node >= 22.13 \u2026\` \u2014 the runtime is too old for
  \`node:sqlite\`. Report the version it names and stop; nothing about this skill can
  work around it.
- \`Error: could not create the dashboard database \u2026\` or
  \`could not start the dashboard \u2026\` \u2014 report the reason verbatim and stop.
- **an empty log** \u2014 it may simply still be starting (a first run migrates the
  database and imports history). Re-run just the wait loop once more \u2014 assigning
  \`LOG\` again first, since every command runs in a fresh shell \u2014 before concluding
  anything.

If \`$HOME/.jolli/jollimemory/run-cli\` does not exist at all, the bundled dispatcher
has not been written yet \u2014 the plugin's session-start bootstrap is what writes it.
Tell the user to start a fresh session and retry, and stop; do not guess at other
paths, and do not run \`node\` or \`npx\` against a workspace-local file.
`}var $e='"$HOME/.jolli/jollimemory/run-cli"',mT="1.0.0";function fT(){let t=Object.keys(rr),r=[...t.filter(n=>n==="cursor-agent"),...t.filter(n=>n!=="cursor-agent")].map(Rt);return`${r.slice(0,-1).join(", ")}, or ${r[r.length-1]}`}function dg(){return`---
name: jolli
description: State-aware front door for Jolli Memory in Cursor \u2014 reads how Jolli is set up in this repository, guides first-time setup through jolli-init, reminds the user to sign in when memories cannot sync yet, then routes to recall, search, status, timeline, push, PR, or workflow actions. Use when the user invokes Jolli or asks what Jolli can do.
metadata:
  version: "${mT}"
  revision: 4
  vendor: "jolli.ai"
---

# Jolli Memory

The single front door for Jolli in Cursor. Rather than printing a static list, it
reads how Jolli is set up in THIS repository and guides the next step: incomplete
setup goes to \`/jolli-init\`; memories that are captured but cannot be shared yet
get a sign-in reminder; a healthy repo gets a short snapshot and a routed action.

It **never** re-implements another skill's workflow \u2014 it only reads state and
invokes an existing skill or an existing Jolli Memory tool.

${ye}

Getting this wrong is worse here than in the other skills: Step 0 reads a failed
\`test -f\` as "Jolli is not installed on this machine" and offers to delete this
menu. Run the check in the wrong shell and that verdict is simply false.

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
${$e} status
\`\`\`

If neither can be reached, skip the state-based guidance and go straight to
Step 3's menu, presented without a snapshot.

## Step 2 \u2014 guide by state (the front door)

Derive three things, mirroring the CLI's guided front door:

- **can generate memories** \u2014 provider-AWARE, NOT a blind OR of every credential:
  - \`local-agent\` \u2192 **yes**; summaries generate by driving the local agent CLI
    named by \`account.localAgentTool\` \u2014 the user's own login for whatever agent
    that field names, Cursor's on a fresh setup \u2014 with no API key and no Jolli
    sign-in. This is the plugin's default, so a freshly installed repo can already
    generate. Report the field, never assume Cursor: an agent tool the user had
    already configured is kept as-is.
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
- \`/jolli-dashboard\` \u2014 open the local dashboard in a browser (machine-wide
  memories, sessions, token spend, knowledge).
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
`}function hT(){return`---
name: jolli-init
description: "Set up Jolli Memory for the current repository in Cursor: verify the plugin hook, enable memory generation through Cursor, sign in to Jolli when sharing is requested, and bind the repo to a Jolli Space. Use for first-time setup, repair, enablement, or Space binding."
---

# Jolli Init

Complete the steps in order. Stop when a required step fails.

${ye}

## 1. Inspect state

Call the Jolli Memory \`status\` tool. If unavailable, run \`${$e} status\`.
If the dispatcher is missing, ask the user to run **Developer: Reload Window** and
start a new chat so the Jolli \`sessionStart\` hook runs, then retry.

## 2. Enable local memory generation

Run:

\`\`\`bash
${$e} enable --repo-hooks-only --source-tag cursor-plugin
\`\`\`

This explicit setup records \`cursor-agent\` as the local-agent tool only when none
is configured yet \u2014 an agent tool and a paid provider already on disk are both left
exactly as they are. It also writes this workspace's
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
${$e} auth login
\`\`\`

The command opens the browser and waits for a loopback callback. Never ask for a
password, token, or callback URL.

## 4. Bind a Space

Call \`list_spaces\`. Match a Space named by the user by id, slug, or exact name.
Otherwise present the available Spaces and ask them to choose, offering the default
first when one exists. Call \`bind_space\` with the selected value. Treat
\`already_bound\` as success.

If the Space tools are unavailable, run \`${$e} spaces --format json\`,
present only the returned Spaces, then bind the selected id or slug with
\`${$e} bind --space <id-or-slug> --format json\`. Never put free-typed
user text directly into this command.

## 5. Verify and report

Call \`status\` again (or \`${$e} status\` when the tool is not registered yet).
Report:

- memory generation enabled or the exact remaining problem;
- which agent generates summaries when provider is \`local-agent\` \u2014 name
  \`localAgentTool\` from \`status\` rather than assuming Cursor, since a tool that
  was already configured is left alone;
- Jolli sign-in and bound Space when sharing was configured;
- a normal commit captures memory and \`git push\` publishes to the bound Space;
- when the MCP tools were unavailable, that enabling \`jollimemory\` in **Customize**
  turns them on (a reload is not required).
`}function gT(){return`---
name: jolli-login
description: Sign in to Jolli from Cursor so the repository can bind to a Jolli Space and share memories. Use when the user asks to log in, authenticate Jolli, connect an account, or fix missing Jolli credentials.
---

# Jolli Login

${ye}

Run and wait for the interactive browser flow:

\`\`\`bash
${$e} auth login
\`\`\`

Never ask the user for passwords, API keys, callback URLs, or browser tokens.

On success, say that Jolli credentials were saved and offer \`/jolli-init\` to bind
the repository to a Space. Clarify that local memory generation still uses the
configured local agent unless the user explicitly changes providers. On failure,
surface the command's reason and suggest retrying; if the browser did not open,
point out the login URL printed by the command. If the dispatcher does not exist,
ask the user to run **Developer: Reload Window**, start a new chat so the Jolli
\`sessionStart\` hook runs, and retry.
`}function yT(){return`---
name: jolli-logout
description: Sign out of Jolli from Cursor by clearing the stored Jolli auth token and Jolli API key while preserving other provider credentials. Use when the user asks to log out, disconnect Jolli, or remove Jolli account credentials.
---

# Jolli Logout

${ye}

Run:

\`\`\`bash
${$e} auth logout
\`\`\`

Report the command output, then call the Jolli Memory \`status\` tool when
available. Explain the provider-aware result:

- Space binding and cloud sharing require a future Jolli sign-in.
- \`local-agent\` memory generation continues through the configured
  ${fT()} login.
- \`anthropic\` generation continues when its preserved Anthropic key exists.
- \`jolli\` generation stops unless another Jolli API key remains configured.

If the dispatcher does not exist, ask the user to run **Developer: Reload Window**,
start a new chat so the Jolli \`sessionStart\` hook runs, and retry.
`}function wT(){return`---
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

If \`status\` is unavailable, run \`${$e} status\` and summarize it. Do not
list branch memories; route those requests to \`/jolli-recall\` or \`/jolli-search\`.

${ye}
`}function ST(){return`---
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
`}function ET(){return`---
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
`}var bT=[{name:"jolli-init",build:hT},{name:"jolli-login",build:gT},{name:"jolli-logout",build:yT},{name:"jolli-status",build:wT},{name:"jolli-dashboard",build:cg},{name:"jolli-timeline",build:ST},{name:"jolli-push",build:ET}],H$=bT.map(t=>t.name);var Qo=require("node:os"),ut=require("node:path");y();var _T=p("CursorSettings"),RT="cursor/thirdPartyExtensibilityEnabled";function ug(t){let e=t?.trim();return e!==void 0&&e!==""&&(0,ut.isAbsolute)(e)?e:void 0}function kT(t=process.env,e=(0,Qo.platform)()){let r=(0,Qo.homedir)();if(e==="win32"){let n=ug(t.APPDATA)??(0,ut.join)(r,"AppData","Roaming");return(0,ut.join)(n,"Cursor","User","globalStorage","state.vscdb")}return e==="darwin"?(0,ut.join)(r,"Library","Application Support","Cursor","User","globalStorage","state.vscdb"):(0,ut.join)(ug(t.XDG_CONFIG_HOME)??(0,ut.join)(r,".config"),"Cursor","User","globalStorage","state.vscdb")}async function pg(t=process.env,e=kT(t)){try{let{DatabaseSync:r}=await import("node:sqlite"),n=new r(e,{readOnly:!0});try{let o=n.prepare("SELECT value FROM ItemTable WHERE key = ?").get(RT);if(o?.value===void 0)return!0;let s=String(o.value).trim().replace(/^"|"$/gu,"");return s!=="false"&&s!=="0"}finally{n.close()}}catch(r){return _T.info("Could not read Cursor's third-party-extensibility setting (assuming enabled): %s",r.message),!0}}var Q=p("SkillInstaller"),hr="1.0.0",hg=["jollimemory-recall","jolli-memory-recall"],gn=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],Qa=[".claude","skills"],es=[{name:"jolli-recall",build:LT},{name:"jolli-search",build:MT},{name:"jolli-local-run",build:$T},{name:"jolli-remote-run",build:jT},{name:"jolli",build:FT}],gg=["jolli-pr"],yg=gn.flatMap(t=>es.map(e=>`/${t.relativeDir.join("/")}/${e.name}/`)),ts=["/.claude/skills/jolli/"],wg=[...gn.map(t=>`/${t.relativeDir.join("/")}/jolli/`),...ts];async function TT(t,e={}){for(let r of hg)await rs((0,A.join)(t,".claude","skills",r),"legacy");await Za(t);for(let r of gn){if(!r.enabled(e))continue;let n=(0,A.join)(t,...r.relativeDir);for(let o of es)await rl(n,o.name,o.build())}await tl(t)}async function Za(t){for(let e of gn){let r=(0,A.join)(t,...e.relativeDir);for(let n of gg)await rs((0,A.join)(r,n),"retired")}}async function rs(t,e){let r=(0,A.join)(t,"SKILL.md"),n;try{n=await(0,N.readFile)(r,"utf-8")}catch{return}if(!ns(n)){Q.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",t);return}try{await(0,N.rm)(t,{recursive:!0,force:!0}),Q.info("Removed %s Jolli skill at %s",e,t)}catch(o){Q.warn("Failed to remove %s skill at %s: %s",e,t,o.message)}}async function Sg(t,e={}){return TT(t,e)}async function Eg(t){let e=(0,A.join)(t,...Qa),r=(0,A.join)(e,"jolli","SKILL.md");try{if(!(await(0,N.readFile)(r,"utf-8")).includes('vendor: "jolli.ai"')){Q.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",r);return}}catch{}await rl(e,"jolli",HT())}var Zo=[".cursor","skills"],el=es.filter(t=>t.name!=="jolli"),bg=[".cursor","skills"],_g=[`/${Zo.join("/")}/`,...el.map(t=>`/${Zo.join("/")}/${t.name}/`)];async function tl(t){let e=(0,A.join)(t,...Zo),r=await vT(),n=r===void 0?[]:await xT(t);r===void 0&&await IT();for(let o of el){let s=(0,A.join)(e,o.name);if(!await CT(s))continue;if(await PT(n,o.name)||r===void 0){await(0,N.rm)(s,{recursive:!0,force:!0});continue}await AT(s,(0,A.join)(r,o.name))}}var Rg="cursor-plugin-root";async function kg(t){try{let e=(0,A.join)((0,fr.homedir)(),".jolli","jollimemory");await(0,N.mkdir)(e,{recursive:!0}),await I((0,A.join)(e,Rg),`${t}
`)}catch(e){Q.info("Could not record the Cursor plugin root: %s",e.message)}}async function vT(){try{let e=(await(0,N.readFile)((0,A.join)((0,fr.homedir)(),".jolli","jollimemory",Rg),"utf-8")).split(`
`)[0]?.trim();if(!e)return;let r=(0,A.join)(e,"mirror");return await(0,N.lstat)(r),r}catch{return}}async function CT(t){let e;try{e=await(0,N.lstat)(t)}catch{return!0}if(e.isSymbolicLink())return!0;if(!e.isDirectory())return!1;try{return ns(await(0,N.readFile)((0,A.join)(t,"SKILL.md"),"utf-8"))}catch{return!1}}async function mg(t,e){try{if((await(0,N.lstat)(t)).isSymbolicLink())return await(0,N.readlink)(t)===e;let[n,o]=await Promise.all([(0,N.readFile)((0,A.join)(t,"SKILL.md"),"utf-8"),(0,N.readFile)((0,A.join)(e,"SKILL.md"),"utf-8")]);return n===o}catch{return!1}}async function AT(t,e){if(!await mg(t,e)){await(0,N.rm)(t,{recursive:!0,force:!0}),await(0,N.mkdir)((0,A.dirname)(t),{recursive:!0});try{await(0,N.symlink)(e,t,"dir");return}catch(r){if(await mg(t,e))return;Q.info("Symlink unavailable for %s (%s) \u2014 copying instead",t,r.message)}try{let r=await(0,N.readFile)((0,A.join)(e,"SKILL.md"),"utf-8");await(0,N.mkdir)(t,{recursive:!0}),await I((0,A.join)(t,"SKILL.md"),r)}catch(r){Q.warn("Could not place %s: %s",t,r.message)}}}async function xT(t){let e=(0,fr.homedir)(),r=[(0,A.join)(t,".agents","skills"),(0,A.join)(e,".agents","skills")];return await pg()&&r.push((0,A.join)(t,".claude","skills"),(0,A.join)(e,".claude","skills"),(0,A.join)(t,".codex","skills"),(0,A.join)(e,".codex","skills")),r}async function Tg(t=(0,fr.homedir)()){await rl((0,A.join)(t,...bg),"jolli",dg())}async function IT(t=(0,fr.homedir)()){await rs((0,A.join)(t,...bg,"jolli"),"cursor global menu")}async function vg(t){let e=(0,A.join)(t,...Zo);for(let r of el){let n=(0,A.join)(e,r.name),o=!1;try{o=(await(0,N.lstat)(n)).isSymbolicLink()}catch{continue}if(o){await(0,N.rm)(n,{recursive:!0,force:!0}),Q.info("Removed cursor mirror symlink at %s",n);continue}await rs(n,"cursor mirror")}}async function PT(t,e){for(let r of t)try{return await(0,N.readFile)((0,A.join)(r,e,"SKILL.md"),"utf-8"),!0}catch{}return!1}async function Cg(t){let e=[...gn.map(r=>r.relativeDir),Qa];for(let r of e){let n=(0,A.join)(t,...r,"jolli"),o=(0,A.join)(n,"SKILL.md"),s;try{s=await(0,N.readFile)(o,"utf-8")}catch{continue}if(s.includes('vendor: "jolli.ai"'))try{await(0,N.rm)(n,{recursive:!0,force:!0}),Q.info("Removed Jolli umbrella menu at %s",n)}catch(i){Q.warn("Failed to remove umbrella at %s: %s",n,i.message)}}}var DT=[...es.filter(t=>t.name!=="jolli").map(t=>t.name),...gg,...hg];async function Ag(t){for(let e of DT){let r=(0,A.join)(t,...Qa,e),n=(0,A.join)(r,"SKILL.md"),o;try{o=await(0,N.readFile)(n,"utf-8")}catch{continue}if(!ns(o)){Q.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",r);continue}try{await(0,N.rm)(r,{recursive:!0,force:!0}),Q.info("Removed legacy Jolli skill at %s",r)}catch(s){Q.warn("Failed to remove legacy skill at %s: %s",r,s.message)}}}var NT=/(?:^|\n)[ \t]*revision:\s*(\d+)/,OT=-1;function fg(t){let e=t.match(NT),r=e?Number.parseInt(e[1],10):Number.NaN;return Number.isFinite(r)?r:OT}function ns(t){return t.includes('vendor: "jolli.ai"')||t.includes("jolli-skill-version:")}async function rl(t,e,r){let n=(0,A.join)(t,e),o=(0,A.join)(n,"SKILL.md"),s=fg(r);try{let i=await(0,N.readFile)(o,"utf-8");if(!ns(i)){Q.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",e);return}if(fg(i)>=s)return}catch{}try{await(0,N.mkdir)(n,{recursive:!0}),await I(o,r),Q.info("Wrote SKILL.md (revision %d) to %s",s,o)}catch(i){Q.warn("Failed to write %s SKILL.md: %s",e,i.message)}}function xg(t,e){return`${ye}

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
vector.`}function LT(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${hr}"
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

${xg("recall"," --format json")}

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
`}function MT(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${hr}"
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

${xg("search"," --format json")}

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
`}function $T(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${hr}"
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

${ye}

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
`}function jT(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${hr}"
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

${ye}

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
`}function FT(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills available in this session (recall, search, run a workflow local or remote, workflow history, plus any setup and account skills a Jolli plugin adds) and the Jolli MCP tools, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${hr}"
  revision: 8
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

${ye}

## Step 1 \u2014 build the unified menu

Assemble ONE combined list of actions from two sources.

### Local Jolli skills

Offer the \`jolli-*\` skills that are ACTUALLY AVAILABLE in this session, not a
fixed list \u2014 exactly as with the MCP tools below. The four described here ship
everywhere, so they are documented in full; a host that also has a Jolli plugin
installed (Cursor, Codex, Claude Code) additionally exposes setup, account and
dashboard skills such as \`jolli-init\`, \`jolli-login\`, \`jolli-logout\`,
\`jolli-status\`, \`jolli-dashboard\`, \`jolli-timeline\` and \`jolli-push\`.
Include whichever of those exist, named as this host invokes them, and route by
invoking the skill rather than restating its steps. If the user asks for something
one of them owns \u2014 setting Jolli up, signing in, checking installation health,
publishing this branch's memories \u2014 route there instead of answering that the menu
has no such action.

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
`}function HT(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${hr}"
  revision: 9
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
\`/jolli:dashboard\`, \`/jolli:login\`, \`/jolli:logout\`, \`/jolli:status\` and
\`/jolli:timeline\` entry points all keep working unchanged; this is layered on
top of them, not a replacement.

## Step 0 \u2014 confirm this menu can route

This menu is a project skill written OUTSIDE the Jolli plugin (a plugin skill
could only ever be \`/jolli:<name>\`, never a bare \`/jolli\`), so it can linger
in \`.claude/skills/jolli/\` after the plugin has been uninstalled. It can only
route to targets that exist in THIS session, so before doing anything else
confirm at least one routing target is available. The menu can route if
**either** of these holds:

- one or more MCP tools whose name contains \`jollimemory\` are registered, **or**
- the plugin's own namespaced skills (\`jolli:init\` / \`jolli:recall\` /
  \`jolli:search\` / \`jolli:push\` / \`jolli:dashboard\`) are invocable this
  session.

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
- **/jolli:dashboard** \u2014 Open the local Jolli dashboard in a browser: the
  machine-wide view of memories, agent sessions, token spend and knowledge across
  every repository on this machine, plus the standup page. Route by invoking the
  \`jolli:dashboard\` skill. Machine-level, so it is worth offering even when THIS
  repo has no memories yet.

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
`}var L=p("Installer");function JT(t,e){return process.platform==="linux"?t===e:t.toLowerCase()===e.toLowerCase()}async function WT(t){let e=await Pe(),r=Bh(e.globalInstructions);if(r.write){let n=t?.codexDetected??await bi(),o=t?.geminiDetected??await Ci();await Gh({claude:e.claudeEnabled!==!1,gemini:o&&e.geminiEnabled!==!1,codex:n&&e.codexEnabled!==!1})}else r.remove&&await qh()}async function nl(t,e,r){let n=async()=>{if(!await $a())return!1;try{await Nh()}catch(s){L.warn("Legacy dist-path migration failed (non-fatal): %s",s.message)}if(!await nn(t,e))return!1;try{let s=await Dh();s.length>0&&L.info("Pruned stale dist-paths entries: %s",s.join(", "))}catch(s){L.warn("Pruning stale dist-paths failed (non-fatal): %s",s.message)}return!0},o=r?await Os(n,r):await Os(n);return o.acquired&&o.value===!0}async function Pg(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0,s=e?.repoHooksOnly===!0;if(o&&s)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:n};if(!await xn(r))return L.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",r),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${r})`,warnings:n};L.info(s?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let i=null;try{let a=await Pe(),l=e?.automatic?[r]:await Ft(r),c=e?.automatic?{timeoutMs:200,pollMs:25}:void 0,u=(0,It.dirname)((0,Ig.fileURLToPath)(__jmImportMetaUrl)),d=e?.source??"cli",m=e?.sourceTag??(d==="vscode-extension"?Oa(u):"cli");if(!rn(m))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(m)}`,warnings:n};let f=Uu(m);if(!await nl(m,e?.distDir,c))return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:n};if(!o){if(i=c?await Ar(r,c):await Ar(r),!i)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};if(e?.respectManualDisable&&await nt(r))return{success:!0,message:"Repository remains manually disabled",warnings:n,manuallyDisabled:!0};if(!e?.automatic)try{let T=await Ju(m,a);T!==null&&(T.seededTool||T.seededProvider)&&L.info("Plugin init seeded localAgentTool=%s (source %s, seededTool=%s, seededProvider=%s)",T.tool,m,T.seededTool,T.seededProvider),T?.keptTool!==void 0&&L.info("Plugin init kept localAgentTool=%s (source %s drives %s; left alone)",T.keptTool,m,T.tool)}catch(T){n.push(`Could not record the local agent tool for this host: ${T.message}`)}}let g=s?!1:await bi(),h=s?!1:await Ci(),k=s?!1:await cu(),b=s?!1:await Gu(),D=s?!1:await ou(),O=s?!1:await zd(),M=s?!1:await Gd()||await Wd(),de=s?!1:await Ti(),V=s?!1:await Li(),je=s?!1:await Ri(),Dt=s?!1:await qd(),wr=s?!1:await pu(),Sr=s?!1:await Pd(),yn=s?!1:await Fu(),Er={};for(let T of l){let Nt=await Zs(T),cy=(0,It.join)(Nt,"sessions.json");try{await(0,os.writeFile)(cy,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(Fe){Fe.code!=="EEXIST"&&L.warn("Failed to bootstrap sessions.json in %s: %s",T,Fe.message)}if(s){if(await Za(T),f==="claude"){if(await Eg(T),await Ag(T),await Vo(T,[...ts]),a.claudeEnabled!==!1){let Fe=await da(T);(T===r||Er.path===void 0)&&(Er=Fe)}}else if(f==="cursor"){let Fe={claude:!1,codex:!1,cursor:!0,gemini:!1,opencode:!1,copilot:!1,copilotChat:!1,cline:!1,devin:!1,antigravity:!1,kimi:!1};await Ya(T,Fe),await Vo(T,mr(Fe).flatMap(dy=>dy.gitExcludePaths()))}await tl(T),await Vo(T,[..._g]);continue}await Sg(T,{claudeEnabled:a.claudeEnabled});let Cl={claude:a.claudeEnabled!==!1,codex:g,cursor:de,gemini:h,opencode:V,copilot:je,copilotChat:O,cline:Dt,devin:wr,antigravity:Sr,kimi:yn};if(await jh(T,[...yg,...ts,...mr(Cl).flatMap(Fe=>Fe.gitExcludePaths())]),await Ya(T,Cl),o||a.claudeEnabled===!1)continue;let ps=await da(T);ps.warning&&n.push(ps.warning),(T===r||Er.path===void 0)&&(Er=ps)}await lg({claude:!1,cursor:!1,codex:g||s&&f==="codex",gemini:h,opencode:V,copilot:je,copilotChat:O,cline:Dt,devin:wr,antigravity:Sr,kimi:yn}),s||await WT({codexDetected:g,geminiDetected:h});let wn={},Sn={},En={},bn={},_n={};o||(wn=await gd(r),wn.warning&&n.push(wn.warning),Sn=await yd(r),Sn.warning&&n.push(Sn.warning),En=await wd(r),En.warning&&n.push(En.warning),bn=await Sd(r),bn.warning&&n.push(bn.warning),_n=await Ed(r),_n.warning&&n.push(_n.warning)),g&&a.codexEnabled===void 0&&(await yt({codexEnabled:!0}),L.info("Codex detected \u2014 enabled Codex session discovery"));let us;if(h&&a.geminiEnabled!==!1){if(!o)for(let T of l){let Nt=await ja(T);(T===r||us===void 0)&&(us=Nt.path)}a.geminiEnabled===void 0&&(await yt({geminiEnabled:!0}),L.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&b&&a.openCodeEnabled===void 0&&(await yt({openCodeEnabled:!0}),L.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let ly=s?!1:await su(),Rl=a.cursorEnabled!==!1&&k,kl=a.cursorEnabled!==!1&&ly;(Rl||kl)&&a.cursorEnabled===void 0&&(await yt({cursorEnabled:!0}),L.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",Rl,kl));let Tl=a.copilotEnabled!==!1&&D,vl=a.copilotEnabled!==!1&&O;if((Tl||vl)&&a.copilotEnabled===void 0&&(await yt({copilotEnabled:!0}),L.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",Tl,vl)),M&&a.clineEnabled===void 0&&(await yt({clineEnabled:!0}),L.info("Cline detected \u2014 enabled Cline session discovery")),!s)for(let T of l)await BT(T);if(e?.source==="vscode-extension")L.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(s)L.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let T=await Dm(r);L.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",T.alreadyDone,T.fresh,T.migrated,T.skipped)}catch(T){L.warn("Schema v5 migration failed (non-fatal): %s",T.message)}if(e?.clearManualDisableOnSuccess&&!o)try{await Fs(r,!1)}catch(T){let Nt=T.message;n.push(`Enabled, but could not clear the manual-disable opt-out (${Nt}). Run enable again to clear it.`),L.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",Nt)}return L.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:n,claudeSettingsPath:Er.path,gitHookPath:wn.path,postRewriteHookPath:Sn.path,prepareMsgHookPath:En.path,postMergeHookPath:bn.path,prePushHookPath:_n.path,geminiSettingsPath:us}}catch(a){let l=`Installation failed: ${a.message}`;return L.error(l),{success:!1,message:l,warnings:n}}finally{i&&await i.release()}}async function BT(t){let e=X(t);try{await(0,os.stat)(e)}catch{return}let r=se();if(JT((0,It.resolve)(e),(0,It.resolve)(r)))return;let n=await Wt(e),o={};for(let[c,u]of Object.entries(n))u!==void 0&&(o[c]=u);if(Object.keys(o).length===0)return;let s=await Wt(r),i={};for(let[c,u]of Object.entries(o))s[c]===void 0&&(i[c]=u);Object.keys(i).length>0&&await Jn(i,r);let a={};for(let c of Object.keys(i))a[c]=void 0;Object.keys(a).length>0&&await Jn(a,e);let l=Object.keys(o).filter(c=>!(c in i));for(let c of l)L.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",t,c,String(o[c]),String(s[c]));L.info("Migrated %d config fields from worktree %s to global",Object.keys(i).length,t)}async function Dg(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0;L.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let s=null;try{if(!o&&!e?.repoLockHeld&&(s=await Ar(r),!s))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};!o&&e?.persistManualDisable&&await Fs(r,!0);let i;try{i=await Ft(r)}catch{i=[r]}if(o){for(let l of i)try{await za(l)}catch(c){L.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return L.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:n}}for(let l of i){let c=await ua(l);c.warning&&n.push(c.warning),await Fa(l);try{await za(l)}catch(u){L.warn("MCP removal failed in %s (non-fatal): %s",l,u.message)}e?.preserveMenu||await Cg(l),await vg(l)}let a=await bd(r);return a.warning&&n.push(a.warning),await _d(r),await Rd(r),await kd(r),await Td(r),e?.preserveMenu||await Fh(r,wg),n.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),L.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:n}}catch(i){let a=`Uninstallation failed: ${i.message}`;return L.error(a),{success:!1,message:a,warnings:n}}finally{s&&await s.release()}}y();function ss(){return new Promise((t,e)=>{let r=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",n=>r.push(n)),process.stdin.on("end",()=>{process.stdin.destroy(),t(r.join(""))}),process.stdin.on("error",e)})}var Z=require("node:fs"),Te=require("node:path"),zg=require("node:url");go();Cn();ie();function Ng(t){return t.aiProvider==="local-agent"?!0:t.aiProvider==="jolli"?!!t.jolliApiKey:t.aiProvider==="anthropic"?!!(t.apiKey||process.env.ANTHROPIC_API_KEY):!!(t.apiKey||process.env.ANTHROPIC_API_KEY||t.jolliApiKey)}Ue();pe();y();Ee();function GT(t){return[`1) Re-authenticate ${Rt(t)}:  ${kp(t)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function qT(t,e){let r=Tp(t);return r===null?[]:[`${e}${r}`]}function Og(t){return[`[Jolli Memory] Memory generation failed for a recent commit: ${Rt(t)} authentication expired or is unavailable.`,...qT(t,""),"\u2192 Fix with either:",...GT(t).map(e=>`    ${e}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var ke=p("SessionStartHook"),dv=new Set(["main","master","develop","development","staging","production"]),ls=500,uv=250;function pv(t=ls+uv){let e=setTimeout(()=>process.exit(0),t);return e.unref(),e}var Qg="login-reminder-dismissed";function mv(t){let e=Ni(t,"init");return e===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${e} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Qg}.)`].join(`
`)}function fv(t,e,r){return e||r?null:mv(t)}async function Zg(t,e){let r=fo(t);if(r===void 0||e.aiProvider!==void 0)return!1;try{let n=await Wn(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:r}:{}},result:o.localAgentTool??r}:{update:null,result:void 0});return n===void 0?(ke.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",t),!1):(ke.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",n,t),!0)}catch(n){return ke.info("Failed to seed default local-agent provider: %s",n.message),!1}}async function hv(t,e=$i()){let r=await Pe(),n=Ng(r),o=(0,Te.join)(t,".jolli","jollimemory",Qg),s=(0,Z.existsSync)(o);if(n&&s)try{(0,Z.rmSync)(o)}catch{}return fv(e,n,s)}async function ey(t,e){return(await fm(e)).readFile(`summaries/${t}.json`)}async function gv(t,e){try{let r=await ey(t,e);return r?bp(JSON.parse(r)):!1}catch(r){return ke.info("Failed to check auth-failure state for %s: %s",t.substring(0,8),r.message),!1}}async function yv(t,e=$i()){let r=fo(e);if(r===void 0)return null;let n=ny(t);if(!n)return null;let o=await ko(t);if(!o)return null;let s=o.entries.filter(l=>l.branch===n&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(z(c)).getTime()-new Date(z(l)).getTime())[0];if(!await gv(i.commitHash,t))return null;let a=await Pe();return Og(a.localAgentTool??r)}async function wv(){if(kn()){ke.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await ss(),{cwd:e}=JSON.parse(t),r=Bl(e??process.cwd());if(Mt(r),ke.info("SessionStartHook invoked (cwd=%s)",r),await nt(r)){ke.info("SessionStart hook skipped \u2014 repository manually disabled");return}let n=await Sl(r,"shared",{includeBriefing:!0,includePluginReminders:!1});n?process.stdout.write(n):ke.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(Xg(),Vg));o()}catch(t){ke.info("SessionStartHook failed: %s",t.message)}}async function Sl(t,e,r={}){let n=r.includeBriefing!==!1,o=r.includePluginReminders!==!1,[s,i,a]=await Promise.all([n?Promise.race([Sv(t,e),wl(ls)]):Promise.resolve(null),o?Promise.race([yv(t,e),wl(ls)]):Promise.resolve(null),o?Promise.race([hv(t,e),wl(ls)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(ke.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function Sv(t,e){let r=cs(t),n=ny(t,r);if(!n||dv.has(n))return null;let o=vv(t,n,e,r);if(o)return o;let s=await ko(t);if(!s)return null;let i=s.entries.filter(h=>h.branch===n&&(h.parentCommitHash===null||h.parentCommitHash===void 0));if(i.length===0)return null;let a=[...i].sort((h,k)=>new Date(z(k)).getTime()-new Date(z(h)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&Av(z(l)))return null;let u=await Ev(l.commitHash,t),d=bv(t,n),m=_v(a),f=Rv(n,a,l,c,u,d,m,e),g=ry(t,r);return Cv(t,n,g??l.commitHash,f,e),f}async function Ev(t,e){try{let r=await ey(t,e);if(!r)return{lastTopicTitle:null,keyDecisions:[]};let n=JSON.parse(r),o=er(n),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(r){return ke.info("Failed to load last summary: %s",r.message),{lastTopicTitle:null,keyDecisions:[]}}}function bv(t,e){try{let r=(0,Te.join)(t,".jolli","jollimemory","plans.json");if(!(0,Z.existsSync)(r))return[];let n=JSON.parse((0,Z.readFileSync)(r,"utf-8")),o=ud(n).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function _v(t){let e=0,r=0,n=0,o=!1;for(let s of t)s.diffStats&&(e+=s.diffStats.filesChanged,r+=s.diffStats.insertions,n+=s.diffStats.deletions,o=!0);return o?{filesChanged:e,insertions:r,deletions:n}:null}function Rv(t,e,r,n,o,s,i,a){let l=e.length,c=Yg(z(n)),u=Yg(z(r)),d=xv(z(r),new Date().toISOString()),m=[];m.push(`[Jolli Memory \u2014 ${t}]`);let f=`${l} commits (${c} ~ ${u})`;i&&(f+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),m.push(f);let g=o.lastTopicTitle??r.commitMessage;if(m.push(`Last: ${g} (${u})`),o.keyDecisions.length>0){let k=Tv(o.keyDecisions);m.push(`Decisions: ${k}`)}s.length>0&&m.push(`Plans: ${s.join("; ")}`);let h=kv(d,a);return h&&m.push(h),m.join(`
`)}function kv(t,e){if(t<=0)return null;let r=Ni(e,"recall")??"`jolli recall`";return t>3?`Warning: ${t} days since last commit. Run ${r} for full context.`:`Tip: run ${r} for full context`}function Tv(t){let r=[],n=0;for(let o of t){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),n+s.length>200&&r.length>0)break;r.push(s),n+=s.length+2}return r.join("; ")}function ty(t){return(0,Te.join)(t,".jolli","jollimemory","briefing-cache.json")}function vv(t,e,r,n=cs(t)){let o=ty(t);if(!(0,Z.existsSync)(o))return null;try{let s=JSON.parse((0,Z.readFileSync)(o,"utf-8"));if(s.branch!==e||s.clientKind!==r)return null;let i=ry(t,n);return!i||s.lastCommitHash!==i?null:s.briefingText}catch{return null}}function Cv(t,e,r,n,o){let s=ty(t),i={branch:e,lastCommitHash:r,briefingText:n,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,Te.dirname)(s);(0,Z.existsSync)(a)||(0,Z.mkdirSync)(a,{recursive:!0});let l=`${s}.${process.pid}.tmp`;(0,Z.writeFileSync)(l,JSON.stringify(i,null,"	"),"utf-8"),(0,Z.renameSync)(l,s)}catch{}}function cs(t){return ht(t)}function ry(t,e=cs(t)){let r=e?Hl(e):null;if(r)return r;try{return ve("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function ny(t,e=cs(t)){let r=e?Fl(e):null;if(r)return r;if(e)return null;try{return ve("git",["branch","--show-current"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function wl(t){return new Promise(e=>{setTimeout(()=>e(null),t).unref()})}function Av(t){let e=new Date(t),r=new Date;return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}function xv(t,e){let r=new Date(t).getTime(),n=new Date(e).getTime();return Math.floor(Math.abs(n-r)/(1e3*60*60*24))}function Yg(t){return t?t.split("T")[0]:"unknown"}function Iv(){let t=process.argv[1];if(process.env.VITEST||!t||(0,Te.resolve)(t)!==(0,Te.resolve)((0,zg.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,Te.basename)(t).toLowerCase();return e==="sessionstarthook.js"||e==="sessionstarthook.ts"}Iv()&&(pv(),wv());var pt=p("CursorPluginBootstrapHook"),ds="cursor-plugin",El={timeoutMs:200,pollMs:25};function oy(t){return t?{additional_context:t}:null}function sy(t,e){let r=t.workspace_roots,n=[Array.isArray(r)?r.find(o=>typeof o=="string"&&o.trim().length>0):void 0,e.CURSOR_PROJECT_DIR,process.cwd()];for(let o of n)if(!(o===void 0||o.trim().length===0)&&!ac(o))return o;return null}async function iy(t){if(!await xn(t))return null;let e=await H(["rev-parse","--show-toplevel"],t);if(e.exitCode!==0||!e.stdout.trim())return null;let r=e.stdout.trim();if(!await vd(r))return Mt((0,bl.homedir)()),pt.info("Cursor plugin bootstrap: %s has not opted in \u2014 leaving it untouched",r),null;Mt(r);let n=!1;if(!(await Ds(r,async()=>{n=await nt(r),n&&await Dg(r,{preserveMenu:!0,repoLockHeld:!0})},El)).acquired)return pt.info("Cursor plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy"),null;if(n)return null;let s=await Pg(r,{repoHooksOnly:!0,sourceTag:ds,respectManualDisable:!0,automatic:!0});if(!s.success)return pt.warn("Cursor plugin repo-hook reconciliation failed: %s",s.message),null;let i=null;return(await Ds(r,async()=>{if(await nt(r))return;let l=await Pe();l.cursorEnabled!==!1&&(await Zg(ds,l),i=await Sl(r,ds,{includeBriefing:!0,includePluginReminders:!0}))},El)).acquired||pt.info("Cursor plugin context deferred \u2014 repo hook lifecycle lock is busy"),oy(i)}async function ay(){if(kn()){pt.info("Cursor plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await ss(),e=t.trim()?JSON.parse(t):{};Mt((0,bl.homedir)()),await Tg(),await kg((0,yr.resolve)((0,_l.fileURLToPath)(__jmImportMetaUrl),"..","..")),await nl(ds,void 0,El)||pt.info("Cursor plugin runtime registration deferred \u2014 run-cli may be unavailable this session");let r=sy(e,process.env);if(r===null){pt.info("Cursor plugin bootstrap: no workspace named \u2014 global /jolli menu ensured, nothing repo-scoped to do");return}let n=await iy(r);n&&process.stdout.write(JSON.stringify(n))}catch(t){pt.info("Cursor plugin bootstrap failed: %s",t.message)}}function Pv(){let t=process.argv[1];if(process.env.VITEST||!t||(0,yr.resolve)(t)!==(0,yr.resolve)((0,_l.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,yr.basename)(t).toLowerCase();return e==="cursorpluginbootstraphook.js"||e==="cursorpluginbootstraphook.ts"}Pv()&&ay();0&&(module.exports={buildCursorBootstrapOutput,main,resolveCursorProjectDir,runCursorPluginBootstrap});
