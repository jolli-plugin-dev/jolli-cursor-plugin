#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var Fg=Object.create;var En=Object.defineProperty;var Hg=Object.getOwnPropertyDescriptor;var Ug=Object.getOwnPropertyNames;var Jg=Object.getPrototypeOf,Bg=Object.prototype.hasOwnProperty;var w=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var T=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},ui=(t,e)=>{for(var r in e)En(t,r,{get:e[r],enumerable:!0})},Sl=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Ug(e))!Bg.call(t,o)&&o!==r&&En(t,o,{get:()=>e[o],enumerable:!(n=Hg(e,o))||n.enumerable});return t};var At=(t,e,r)=>(r=t!=null?Fg(Jg(t)):{},Sl(e||!t||!t.__esModule?En(r,"default",{value:t,enumerable:!0}):r,t)),Wg=t=>Sl(En({},"__esModule",{value:!0}),t);function di(){return Kg.getStore()?.traceId}var El,YR,Kg,pi=w(()=>{"use strict";El=require("node:async_hooks"),YR="0".repeat(32),Kg=new El.AsyncLocalStorage});function _(t){return t instanceof Error?t.message:String(t)}function Dt(t){return t instanceof Error&&t.code==="ENOENT"}function Nt(t){Tl=t}function ye(){return Rl}function ey(t,e){let r=Qg[e]??zg;return kl[t]>=kl[r]}function ty(t,e,r,n,o){let i=new Date().toISOString(),s=t.toUpperCase().padEnd(5),a=r,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=n.length)return d;let u=n[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${i}] ${s} [${e}]${c} ${a}`}function V(t){let e=t??Tl??process.cwd();return(0,It.join)(e,Vg,Xg)}function wr(t){return String(t).padStart(2,"0")}async function iy(t,e){let r=new Date,n=`${r.getUTCFullYear()}-${wr(r.getUTCMonth()+1)}-${wr(r.getUTCDate())}_${wr(r.getUTCHours())}-${wr(r.getUTCMinutes())}-${wr(r.getUTCSeconds())}`;try{let o=(0,It.join)(t,`debug_${n}.log`);for(let i=1;await sy(o);i++)o=(0,It.join)(t,`debug_${n}_${i}.log`);await(0,de.rename)(e,o)}catch{return}try{let o=(await(0,de.readdir)(t)).filter(i=>oy.test(i)).sort();for(let i=0;i<o.length-ny;i++)await(0,de.unlink)((0,It.join)(t,o[i])).catch(()=>{})}catch{}}async function sy(t){try{return await(0,de.stat)(t),!0}catch{return!1}}function ay(t){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Rl||(_l=_l.then(async()=>{try{let e=V(),r=(0,It.join)(e,Yg);await(0,de.stat)(e);try{(await(0,de.stat)(r)).size>ry&&await iy(e,r)}catch{}await(0,de.appendFile)(r,`${t}
`,"utf-8")}catch{}}))}function p(t){function e(r,n,o){let i=ty(r,t,n,o,di());Zg&&(r==="info"||r==="debug")||(r==="warn"?console.warn(i):console.error(i)),ey(r,t)&&ay(i)}return{debug(r,...n){e("debug",r,n)},info(r,...n){e("info",r,n)},warn(r,...n){e("warn",r,n)},error(r,...n){e("error",r,n)}}}var de,It,Vg,Xg,Yg,ge,Tl,Rl,kl,zg,Qg,Zg,_l,ry,ny,oy,h=w(()=>{"use strict";de=require("node:fs/promises"),It=require("node:path");pi();Vg=".jolli",Xg="jollimemory",Yg="debug.log";ge="jollimemory/summaries/v3";Rl=!1;kl={debug:0,info:1,warn:2,error:3},zg="info",Qg={},Zg=!0;_l=Promise.resolve(),ry=2*1024*1024,ny=10,oy=/^debug_.*\.log$/});function Ot(t,e,r){return(0,vl.promisify)(Fe.execFile)(t,e,{...Sr,...r??{}})}function Re(t,e,r){return(0,Fe.execFileSync)(t,e,{...Sr,...r??{}})}function xl(t,e,r){return(0,Fe.spawnSync)(t,e,{...Sr,...r??{}})}var Fe,vl,Sr,Ze,we=w(()=>{"use strict";Fe=require("node:child_process"),vl=require("node:util"),Sr={windowsHide:!0};Ze=((t,e,r)=>Array.isArray(e)?(0,Fe.spawn)(t,e,{...Sr,...r??{}}):(0,Fe.spawn)(t,{...Sr,...e??{}}))});function uy(t){return cy.some(e=>(t[e]??"")!=="")}function dt(t){try{return(0,Lt.readFileSync)(t,"utf-8")}catch{return null}}function mi(t){try{return(0,Lt.realpathSync)(t)}catch{return(0,$.resolve)(t)}}function _n(t){try{return(0,Lt.statSync)(t).isDirectory()}catch{return!1}}function Cl(t,e){let r=dt((0,$.join)(t,"HEAD"))?.trim();return!r||!(Tn.test(r)||dy.test(r))?!1:_n((0,$.join)(e,"objects"))&&_n((0,$.join)(e,"refs"))}function py(t,e,r){let n=/^gitdir:\s*(.+)$/m.exec(e);if(!n)return null;let o=n[1].trim();if(!o)return null;let i=(0,$.isAbsolute)(o)?o:(0,$.resolve)(t,o);return _n(i)?r?mi(i):i:null}function Pl(t,e){let r=dt((0,$.join)(t,"commondir"))?.trim();if(!r)return t;let n=(0,$.isAbsolute)(r)?r:(0,$.resolve)(t,r);return e?mi(n):n}function pt(t,e={}){let{env:r=process.env,realpath:n=!1}=e;if(uy(r))return null;let o=n?mi(t):(0,$.resolve)(t);for(;;){let i=(0,$.join)(o,".git");if(_n(i)){let l=Pl(i,n);return Cl(i,l)?{worktreeRoot:o,gitDir:i,commonDir:l}:null}let s=dt(i);if(s!==null){let l=py(o,s,n);if(l===null)return null;let c=Pl(l,n);return Cl(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,$.dirname)(o);if(a===o)return null;o=a}}function Al(t){let e=dt((0,$.join)(t.gitDir,"HEAD"))?.trim();if(!e)return null;let r=/^ref:\s*refs\/heads\/(.+)$/.exec(e);return r&&r[1].trim()||null}function fy(t){return my.test(t)&&!t.split("/").includes("..")}function hy(t,e){let r=dt((0,$.join)(t,"packed-refs"));if(r===null)return null;for(let n of r.split(`
`)){if(!n||n.startsWith("#")||n.startsWith("^"))continue;let o=n.indexOf(" ");if(!(o<=0)&&n.slice(o+1).trim()===e){let i=n.slice(0,o).trim();return Tn.test(i)?i:null}}return null}function Il(t){let e=dt((0,$.join)(t.gitDir,"HEAD"))?.trim();if(!e)return null;if(Tn.test(e))return e;let r=/^ref:\s*(.+)$/.exec(e);if(!r)return null;let n=r[1].trim();if(!fy(n))return null;for(let o of t.gitDir===t.commonDir?[t.gitDir]:[t.gitDir,t.commonDir]){let i=dt((0,$.join)(o,n))?.trim();if(i&&Tn.test(i))return i;let s=hy(o,n);if(s)return s}return null}var Lt,$,cy,Tn,dy,my,Rn=w(()=>{"use strict";Lt=require("node:fs"),$=require("node:path"),cy=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];Tn=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,dy=/^ref:\s*refs\//;my=/^refs\/[A-Za-z0-9._\-/]+$/});function et(t){return vn(t,process.platform)}function vn(t,e){let r=br(t.replace(/\\/g,"/"));return e==="win32"||e==="darwin"?r.toLowerCase():r}function br(t){let e=t.length;for(;e>0&&t[e-1]==="/";)e--;return e===t.length?t:t.slice(0,e)}function fi(t,e){let r=et(t),n=et(e);return r===n||r.startsWith(`${n}/`)}function ve(t){return t.replace(/\\/g,"/")}var ne=w(()=>{"use strict"});function Ll(t){let e=hi.get(t);if(e!==void 0)return e;let r=pt(t,{realpath:!0})?.worktreeRoot;if(r){let o=ve(r);return hi.set(t,o),o}let n=t;try{let o=Re("git",["rev-parse","--show-toplevel"],{cwd:t,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();o&&(n=o)}catch{}return hi.set(t,n),n}async function j(t,e){W.debug("git %s%s",e?`[cwd=${e}] `:"",t.join(" "));try{let{stdout:r,stderr:n}=await Ot("git",t,{maxBuffer:gy,env:{...process.env,LC_ALL:"C"},...e!==void 0&&{cwd:e}});return{stdout:r.trimEnd(),stderr:n.trim(),exitCode:0}}catch(r){let n=r,o=typeof n.code=="number"?n.code:n.code==="ENOENT"?127:1,i={stdout:(n.stdout??"").trimEnd(),stderr:(n.stderr??n.message??"").trim(),exitCode:o};return W.debug("git command failed (exit: %d, stderr: %s)",o,i.stderr.substring(0,200)),i}}async function gi(t,e){return(await j(["rev-parse","--verify",`refs/heads/${t}`],e)).exitCode===0}async function yi(t,e){if(await gi(t,e))return;W.info("Creating orphan branch '%s' using plumbing commands",t);let r=JSON.stringify({version:1,entries:[]},null,"	"),n=await Ey(r,e);W.debug("Created blob: %s",n);let o=`100644 blob ${n}	index.json
`,i=await Ty(o,e);W.debug("Created tree: %s",i);let s=await j(["commit-tree",i,"-m","Initialize Jolli Memory summaries"],e);if(s.exitCode!==0)throw new Error(`Failed to create commit: ${s.stderr}`);let a=s.stdout.trim();W.debug("Created commit: %s",a);let l=await j(["update-ref",`refs/heads/${t}`,a],e);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);W.info("Orphan branch '%s' created successfully",t)}function Sy(t){let e=t.toLowerCase();return wy.some(r=>e.includes(r))}async function wi(t,e,r){W.debug("Reading file from branch: %s:%s",t,e);let n=await j(["show",`${t}:${e}`],r);return n.exitCode!==0?(Sy(n.stderr)?W.debug("File not found: %s:%s",t,e):W.warn("Read failed for %s:%s (git exit %d): %s",t,e,n.exitCode,n.stderr||"(no stderr)"),null):n.stdout}async function Si(t,e,r){let n=new Map;if(e.length===0)return n;let o=["cat-file","--batch"];return W.debug("git (cat-file --batch stream) %s%s for %d paths",r?`[cwd=${r}] `:"",o.join(" "),e.length),new Promise((i,s)=>{let a=Ze("git",o,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),l="",c=Buffer.alloc(0),d=!0,u=0,f=[],m=!1,S=0,R=!1,b=E=>{R||(R=!0,E?s(E):i(n))};a.stderr.on("data",E=>{l+=E.toString()}),a.stdout.on("data",E=>{for(c=Buffer.concat([c,E]);!R;){if(d){let D=c.indexOf(10);if(D<0)return;let O=c.subarray(0,D).toString("utf8");if(c=c.subarray(D+1),S>=e.length){b(new Error(`git cat-file --batch returned extra response: ${O}`));return}let B=e[S];if(S++,O.endsWith(" missing")){n.set(B,null);continue}let Te=O.substring(O.lastIndexOf(" ")+1),Z=Number.parseInt(Te,10);if(!Number.isFinite(Z)||Z<0){b(new Error(`Unexpected cat-file --batch header for ${B}: ${O}`));return}u=Z,f=[],d=!1,m=!0}if(u>0){if(c.length===0)return;let D=Math.min(u,c.length);if(f.push(c.subarray(0,D)),c=c.subarray(D),u-=D,u>0)return}if(m){if(c.length<1)return;c=c.subarray(1),m=!1;let D=e[S-1];n.set(D,Buffer.concat(f).toString("utf8")),f=[],d=!0}}}),a.on("close",E=>{if(E!==0){b(new Error(`git cat-file --batch failed (exit ${E}): ${l.trim()}`));return}if(S<e.length){b(new Error(`git cat-file --batch returned ${S} of ${e.length} expected responses; stderr=${l.trim()}`));return}b(null)}),a.on("error",E=>{b(E)}),a.stdin.on("error",E=>{b(E)});for(let E of e)a.stdin.write(`${t}:${E}
`);a.stdin.end()})}async function Ml(t,e,r,n){await yi(t,n);let o=await j(["rev-parse",`refs/heads/${t}`],n);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let i=o.stdout.trim();await ky(t,i,r,e,n);let s=e.filter(l=>!l.delete).length,a=e.filter(l=>l.delete).length;W.info("Updated branch '%s': %d written, %d deleted (via fast-import)",t,s,a)}async function bi(t,e,r){W.debug("Listing files in branch %s under prefix '%s'",t,e);let n=await j(["ls-tree","-z","-r","--name-only",t,e],r);if(n.exitCode!==0)return W.debug("Failed to list files (branch may not exist): %s",n.stderr),[];let o=n.stdout.split(yy).filter(i=>i.length>0);return W.debug("Found %d files",o.length),o}async function by(t){let e=await j(["rev-parse","--git-common-dir"],t);if(e.exitCode!==0)throw new Error(`Failed to get git common dir: ${e.stderr}`);let r=e.stdout.trim();return(0,xe.resolve)(t,r)}async function Ei(t){let e=await by(t);return(0,xe.dirname)(e)}async function Cn(t){return pt(t)!==null?!0:(await j(["rev-parse","--git-dir"],t)).exitCode===0}async function Mt(t){let e=await j(["worktree","list","--porcelain"],t);if(e.exitCode!==0)throw new Error(`Failed to list worktrees: ${e.stderr}`);return e.stdout.split(`
`).filter(n=>n.startsWith("worktree ")).map(n=>n.slice(9).trim())}async function $t(t){let e=(0,xe.join)(t,".git");if((await(0,xn.stat)(e)).isDirectory())return(0,xe.join)(e,"hooks");let n=await(0,xn.readFile)(e,"utf-8"),o=n.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${n.trim()}`);let i=o[1].trim(),s=(0,xe.resolve)(t,i),a=s.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=s.substring(0,a);return(0,xe.join)(l,"hooks")}return(0,xe.join)(s,"hooks")}function $l(t,e,r){return W.debug("git (stdin) %s%s",r?`[cwd=${r}] `:"",t.join(" ")),new Promise((n,o)=>{let i=Ze("git",t,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),s="",a="";i.stdout.on("data",l=>{s+=l.toString()}),i.stderr.on("data",l=>{a+=l.toString()}),i.on("close",l=>{l!==0?o(new Error(`git ${t[0]} failed (exit ${l}): ${a.trim()}`)):n(s.trim())}),i.on("error",l=>{o(l)}),i.stdin.write(e),i.stdin.end()})}async function Ey(t,e){return $l(["hash-object","-w","--stdin"],t,e)}async function Dl(t,e){let r=await j(["var",t],e);if(r.exitCode!==0)throw new Error(`Failed to read ${t}: ${r.stderr}`);return r.stdout.trim()}async function ky(t,e,r,n,o){let i=await Dl("GIT_AUTHOR_IDENT",o),s=await Dl("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];W.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=n.filter(d=>!d.delete),c=n.filter(d=>d.delete);return new Promise((d,u)=>{let f=Ze("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),m="";f.stderr.on("data",E=>{m+=E.toString()}),f.on("close",E=>{E!==0?u(new Error(`git fast-import failed (exit ${E}): ${m.trim()}`)):d()}),f.on("error",E=>{u(E)});let S=f.stdin;S.on("error",E=>{u(E)});let R=[];l.forEach((E,D)=>{let O=D+1,B=Buffer.from(E.content,"utf8");R.push(`blob
mark :${O}
data ${B.length}
`,B,`
`)});let b=Buffer.from(r,"utf8");R.push(`commit refs/heads/${t}
`,`author ${i}
`,`committer ${s}
`,`data ${b.length}
`,b,`
`,`from ${e}
`),l.forEach((E,D)=>{R.push(`M 100644 :${D+1} ${Nl(E.path)}
`)});for(let E of c)R.push(`D ${Nl(E.path)}
`);R.push(`done
`),_y(S,R).then(()=>{S.end()},E=>{u(E)})})}async function _y(t,e){for(let r of e)t.write(r)||await(0,Ol.once)(t,"drain")}function Nl(t){return/["\\\n\r]/.test(t)?`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:t}async function Ty(t,e){return $l(["mktree"],t,e)}var Ol,xn,xe,gy,yy,W,hi,wy,oe=w(()=>{"use strict";Ol=require("node:events"),xn=require("node:fs/promises"),xe=require("node:path");h();we();Rn();ne();gy=10*1024*1024,yy="\0",W=p("GitOps"),hi=new Map;wy=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function Ry(t){return new Promise(e=>setTimeout(e,t))}function Fl(t){let e=Number(t);if(!Number.isInteger(e)||e<=0)return!1;if(e===process.pid)return!0;try{return process.kill(e,0),!0}catch(r){return r.code!=="ESRCH"}}async function ki(t){try{let e=await(0,Ce.stat)(t),r=Date.now()-e.mtimeMs,n=await Hl(t),o=n!==null&&!Fl(n);if(!o&&r<jl)return!1;o?Er.warn("Removing orphaned lock %s (PID %s no longer running)",t,n):Er.warn("Removing stale lock file %s (age: %dms)",t,r),await(0,Ce.rm)(t,{force:!0})}catch(e){if(e.code!=="ENOENT")return Er.error("Failed to check lock file %s: %s",t,e.message),!1}try{return await(0,Ce.writeFile)(t,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function Hl(t){try{let r=(await(0,Ce.readFile)(t,"utf-8")).trim();return r.length>0?r:null}catch{return null}}async function jt(t,e){let r=await Hl(t);if(r!==null&&r!==String(process.pid)){Er.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",e,r,process.pid);return}try{await(0,Ce.rm)(t,{force:!0})}catch(n){Er.error("Failed to release %s: %s",e,n.message)}}async function Ft(t,e){if(e.timeoutMs<=0)return ki(t);let r=Date.now()+e.timeoutMs;for(;;){if(await ki(t))return!0;if(Date.now()>=r)return!1;await Ry(e.pollMs)}}var Ce,Er,jl,_i=w(()=>{"use strict";Ce=require("node:fs/promises");h();Er=p("LockPrimitives"),jl=300*1e3});function Bl(t){return(0,Jl.resolve)(t??process.cwd())}function Pn(t){return Ti.getStore()?.has(Bl(t))===!0}function An(t,e){let r=new Set(Ti.getStore()??[]);return r.add(Bl(t)),Ti.run(r,e)}var Ul,Jl,Ti,In=w(()=>{"use strict";Ul=require("node:async_hooks"),Jl=require("node:path"),Ti=new Ul.AsyncLocalStorage});function vy(t){return Ot("git",["rev-parse","--git-common-dir"],{cwd:t})}async function zl(t){let e=t??process.cwd(),r=Kl.get(e);if(r!==void 0)return r;let n;try{let{stdout:o}=await vy(e),i=o.trim(),s=(0,ae.isAbsolute)(i)?i:(0,ae.resolve)(e,i);n=(0,ae.join)(s,"jollimemory")}catch{Xl.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",e),n=V(e)}return Kl.set(e,n),n}async function Ri(t){let e=await zl(t);return await(0,kr.mkdir)(e,{recursive:!0}),e}async function vi(t,e={}){let r=e.timeoutMs??Cy,n=e.pollMs??Py,o=await Ri(t);return Ft((0,ae.join)(o,Yl),{timeoutMs:r,pollMs:n})}async function xi(t){let e=await zl(t);await jt((0,ae.join)(e,Yl),"orphan-write.lock")}async function Oy(t,e,r,n){let o=n.timeoutMs??Iy,i=n.pollMs??Dn;await(0,kr.mkdir)(t,{recursive:!0});let s=(0,ae.join)(t,e),a=await Ft(s,{timeoutMs:o,pollMs:i});a||Xl.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",e,o);try{return await r()}finally{a&&await jt(s,e)}}async function Ci(t,e,r={}){return Oy(t,xy,e,r)}async function _r(t,e={}){let r=e.timeoutMs??Dy,n=e.pollMs??Dn,o=await Ri(t),i=(0,ae.join)(o,Gl);return await Ft(i,{timeoutMs:r,pollMs:n})?{release:()=>jt(i,Gl)}:null}async function Pi(t,e,r={}){let n=await _r(t,r);if(!n)return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await n.release()}}async function Ai(t,e,r={}){let n=r.timeoutMs??Ay,o=r.pollMs??Dn,i=await Ri(t),s=(0,ae.join)(i,Wl);if(!await Ft(s,{timeoutMs:n,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await jt(s,Wl)}}async function Ii(t,e={}){let r=e.timeoutMs??Ny,n=e.pollMs??Dn,o=e.globalDir??(0,ae.join)((0,Vl.homedir)(),".jolli","jollimemory");await(0,kr.mkdir)(o,{recursive:!0});let i=(0,ae.join)(o,ql);if(!await Ft(i,{timeoutMs:r,pollMs:n}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await jt(i,ql)}}var kr,Vl,ae,Xl,Yl,Wl,xy,Gl,ql,Cy,Py,Ay,Dn,Iy,Dy,Ny,Kl,Pe=w(()=>{"use strict";kr=require("node:fs/promises"),Vl=require("node:os"),ae=require("node:path");h();we();_i();In();Xl=p("Locks");Yl="orphan-write.lock",Wl="profile.lock",xy="config.lock",Gl="repo-hooks.lock",ql="runtime-registry.lock",Cy=1e3,Py=50,Ay=5e3,Dn=25,Iy=5e3,Dy=5e3,Ny=5e3,Kl=new Map});async function Di(t,e,r={}){await(0,tt.mkdir)((0,Zl.dirname)(t),{recursive:!0});let n=`${t}.${process.pid}.tmp`;await(0,tt.writeFile)(n,e,r.mode!==void 0?{encoding:"utf-8",mode:r.mode}:"utf-8");try{await(0,tt.rename)(n,t)}catch(o){throw await(0,tt.unlink)(n).catch(()=>{}),o}}var tt,Zl,Ni=w(()=>{"use strict";tt=require("node:fs/promises"),Zl=require("node:path")});function rc(t){return{...t,manuallyDisabled:t.userDisabled===!0||t.cutoverFence!==void 0}}async function Fy(t){let e=pt(t)?.commonDir;if(e)return e;let r=await j(["rev-parse","--git-common-dir"],t),n=r.exitCode===0?r.stdout.trim():"";return n?(0,Ae.isAbsolute)(n)?n:(0,Ae.join)(t,n):null}async function Oi(t){let e=await Fy(t);if(e===null)return{profilePath:(0,Ae.join)(V(t),ec),legacyMarkerPath:null};let r=(0,Ae.dirname)(e);return{profilePath:(0,Ae.join)(V(r),ec),legacyMarkerPath:(0,Ae.join)(e,My,$y)}}async function Nn(t){try{let e=await(0,Tr.readFile)(t,"utf-8"),r=JSON.parse(e);return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}catch{return{}}}async function Hy(t){try{return await(0,Tr.stat)(t),!0}catch{return!1}}async function nc(t,e){await Di(t,`${JSON.stringify(e,null,"	")}
`)}async function Uy(t){let e;try{e=await Mt(t)}catch{e=[t]}for(let r of e)if(await Hy((0,Ae.join)(V(r),jy)))return!0;return!1}async function rt(t){let{profilePath:e}=await Oi(t),r=await Nn(e);if(r.userDisabled!==void 0)return r.userDisabled===!0;if(r.manuallyDisabled!==void 0)return tc(t,e,r.manuallyDisabled===!0);let n=await Uy(t);return tc(t,e,n)}async function tc(t,e,r){let n=await Ai(t,async()=>{let o=await Nn(e);return o.userDisabled!==void 0?o.userDisabled===!0:(await nc(e,rc({...o,userDisabled:r})),r)}).catch(()=>{});return n?.acquired&&n.value!==void 0?n.value:r}async function Li(t,e){let{profilePath:r}=await Oi(t);if(!(await Ai(t,async()=>{let o=await Nn(r);await nc(r,rc({...o,userDisabled:e}))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function Rr(t){let{profilePath:e}=await Oi(t);return(await Nn(e)).cutoverFence??null}var Tr,Ae,ec,My,$y,jy,nt=w(()=>{"use strict";Tr=require("node:fs/promises"),Ae=require("node:path");h();we();Ni();Rn();oe();Pe();ec="profile.json",My="jollimemory",$y="backfill-card-dismissed",jy="disabled-by-user"});var Mi=w(()=>{"use strict"});async function P(t,e,r){let n=`${t}.${process.pid}.${(0,oc.randomUUID)()}.tmp`;await(0,mt.writeFile)(n,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r});try{await(0,mt.rename)(n,t)}catch(o){let i=o.code;if(i==="EPERM"||i==="EACCES")await(0,mt.writeFile)(t,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r}),await(0,mt.rm)(n,{force:!0});else throw o}}var oc,mt,ie=w(()=>{"use strict";oc=require("node:crypto"),mt=require("node:fs/promises")});function X(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var vr=w(()=>{"use strict"});var ic=w(()=>{"use strict"});var sc=w(()=>{"use strict"});function ac(t){return Number.isFinite(t)&&t>=0&&t<=1114111&&!(t>=55296&&t<=57343)}function lc(t){return t.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(e,r)=>{if(r.startsWith("#x")){let o=Number.parseInt(r.slice(2),16);return ac(o)?String.fromCodePoint(o):e}if(r.startsWith("#")){let o=Number.parseInt(r.slice(1),10);return ac(o)?String.fromCodePoint(o):e}let n=Jy[r];return typeof n=="string"?n:e})}var Jy,cc=w(()=>{"use strict";Jy={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var By,uc,dc=w(()=>{"use strict";ic();vr();sc();cc();By={decodeHtmlEntities:lc,lowercase:t=>t.toLowerCase()},uc=new Set(Object.keys(By))});var Wy,pc,mc=w(()=>{"use strict";Wy="^https://app\\.asana\\.com/",pc={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:Wy,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Gy,fc,hc=w(()=>{"use strict";Gy="^https://[^/]+/wiki/",fc={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:Gy},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var qy,gc,yc=w(()=>{"use strict";qy="^/[^/\\s]+/[^/\\s]+",gc={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:qy},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var $i,Ky,ji,Wv,wc=w(()=>{"use strict";vr();$i=["mcp__Figma__","mcp__figma__"],Ky={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},ji=Object.keys(Ky),Wv=new Set(ji)});var Vy,Xy,Sc,bc=w(()=>{"use strict";wc();Vy="^[0-9a-zA-Z]{22,128}$",Xy=$i.flatMap(t=>ji.map(e=>`${t}${e}`)),Sc={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...$i],exact:Xy}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:Vy},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Yy,zy,Ec,kc=w(()=>{"use strict";Yy="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",zy="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",Ec={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:Yy,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:zy,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Qy,_c,Tc=w(()=>{"use strict";Qy="^[A-Z][A-Z0-9_]*-\\d+$",_c={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:Qy},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Rc,vc=w(()=>{"use strict";Rc={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var Zy,xc,Cc=w(()=>{"use strict";Zy="^[A-Z][A-Z0-9_]*-\\d+$",xc={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:Zy},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Pc,Ac=w(()=>{"use strict";Pc={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var ew,tw,rw,Ic,Dc=w(()=>{"use strict";ew="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",tw="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[A-Za-z0-9.-]+\\.notion\\.site)/",rw="<content\\b[^>]*>([\\s\\S]*?)</content>",Ic={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:ew,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:tw,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:rw,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Fi,nw,ow,Hi,tx,Nc=w(()=>{"use strict";vr();Fi=["mcp__Sentry__","mcp__sentry__"],nw="get_sentry_resource",ow="analyze_issue_with_seer",Hi=[nw,ow],tx=new Set(Hi)});var iw,sw,aw,Oc,Lc=w(()=>{"use strict";Nc();iw=Fi.flatMap(t=>Hi.map(e=>`${t}${e}`)),sw="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",aw="^Issue [A-Za-z0-9_-]{1,128}$",Oc={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:aw,match:{claude:{prefixes:[...Fi],exact:iw}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:sw},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Mc,$c=w(()=>{"use strict";Mc={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var lw,Ui,Ji,jc,Fc=w(()=>{"use strict";lw="^dpl_[A-Za-z0-9]+$",Ui=[{op:"coalesce",of:[[{op:"path",path:"readyState"}],[{op:"path",path:"state"}]]}],Ji=[{op:"template",template:"https://{host}",from:{host:[{op:"path",path:"url"}]}}],jc={id:"vercel",label:"Vercel",icon:"rocket",trackOnly:!0,match:{claude:{prefixes:["mcp__claude_ai_Vercel__","mcp__vercel__"],acceptSuffix:"get_deployment"}},wrapperKeys:["deployment"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:lw},title:{pipe:[{op:"coalesce",of:[[{op:"template",template:"{name} ({state})",from:{name:[{op:"path",path:"name"}],state:Ui}}],[{op:"path",path:"name"}]]}],require:".+"},url:{pipe:Ji,require:"^https://[A-Za-z0-9.-]+\\.vercel\\.app$",requireFlags:"i"},description:{pipe:[{op:"coalesce",of:[[{op:"path",path:"errorMessage"}],[{op:"template",template:"Deployment {state} \xB7 {target} \xB7 {url}",from:{state:Ui,target:[{op:"path",path:"target"}],url:Ji}}],[{op:"template",template:"Deployment {state} \xB7 {url}",from:{state:Ui,url:Ji}}]]}],optional:!0}},fields:[{key:"target",label:"Target",icon:"rocket",pipe:[{op:"path",path:"target"}]},{key:"framework",label:"Framework",icon:"symbol-property",pipe:[{op:"path",path:"project.framework"}]},{key:"error-code",label:"Error",icon:"error",pipe:[{op:"path",path:"errorCode"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"vercel-deployments",itemTag:"deployment",bodyTag:"content",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Hc,Uc=w(()=>{"use strict";Hc={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Jc,Bc=w(()=>{"use strict";Jc={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var Wc,Gc=w(()=>{"use strict";mc();hc();yc();bc();kc();Tc();vc();Cc();Ac();Dc();Lc();$c();Fc();Uc();Bc();Wc=[xc,fc,_c,Ec,Ic,Mc,Jc,Hc,pc,Pc,gc,Rc,jc,Sc,Oc]});function uw(t,e,r){if(!X(t))return"op must be an object";if(r.opCount++,r.opCount>qc)return`pipe exceeds ${qc} ops`;let n=t.op;if(typeof n!="string"||!cw.has(n))return`unknown op: ${String(n)}`;switch(n){case"path":return typeof t.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof t.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof t.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof t.pattern!="string"?"regex op requires a string 'pattern'":t.extract!==void 0&&typeof t.extract!="string"?"regex.extract must be a string":t.lastMatch!==void 0&&typeof t.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof t.fn!="string"?"transform op requires a string 'fn'":uc.has(t.fn)?void 0:`unknown transform: ${t.fn}`;case"coalesce":{if(e+1>On)return`nesting depth exceeds ${On}`;if(!Array.isArray(t.of))return"coalesce op requires an array 'of'";for(let o of t.of){let i=Bi(o,e+1,r);if(i!==void 0)return i}return}case"template":{if(e+1>On)return`nesting depth exceeds ${On}`;if(typeof t.template!="string")return"template op requires a string 'template'";if(!X(t.from))return"template op requires an object 'from'";for(let o of Object.values(t.from)){let i=Bi(o,e+1,r);if(i!==void 0)return i}return}}}function Bi(t,e,r){if(!Array.isArray(t))return"pipe must be an array";for(let n of t){let o=uw(n,e,r);if(o!==void 0)return o}}function xr(t,e){let r=Bi(t,0,{opCount:0});return r===void 0?void 0:`${e}: ${r}`}function dw(t){if(!X(t))return{ok:!1,error:"definition must be an object"};if(typeof t.id!="string"||t.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof t.label!="string"||t.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof t.icon!="string"||t.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(t.titleFallbackPattern!==void 0){if(typeof t.titleFallbackPattern!="string"||t.titleFallbackPattern.length===0)return{ok:!1,error:"titleFallbackPattern must be a non-empty string"};try{new RegExp(t.titleFallbackPattern)}catch(r){return{ok:!1,error:`titleFallbackPattern is not a valid regex: ${r.message}`}}}if(!X(t.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(t.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!X(t.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(t.fields))return{ok:!1,error:"fields must be an array"};if(!X(t.storage))return{ok:!1,error:"storage must be an object"};if(!X(t.render))return{ok:!1,error:"render must be an object"};let e=t.reference;for(let r of["nativeId","title"]){let n=e[r];if(!X(n))return{ok:!1,error:`reference.${r} is required`};let o=xr(n.pipe,`reference.${r}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(e.url!==void 0){if(!X(e.url))return{ok:!1,error:"reference.url must be an object"};let r=xr(e.url.pipe,"reference.url.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.description!==void 0){if(!X(e.description))return{ok:!1,error:"reference.description must be an object"};let r=xr(e.description.pipe,"reference.description.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.guard!==void 0){if(!X(e.guard))return{ok:!1,error:"reference.guard must be an object"};let r=xr(e.guard.pipe,"reference.guard.pipe");if(r!==void 0)return{ok:!1,error:r}}for(let[r,n]of t.fields.entries()){if(!X(n))return{ok:!1,error:`fields[${r}] must be an object`};if(typeof n.key!="string"||!Kc.test(n.key))return{ok:!1,error:`fields[${r}].key must match ${Kc}`};if(typeof n.label!="string"||n.label.length===0)return{ok:!1,error:`fields[${r}].label must be a non-empty string`};let o=xr(n.pipe,`fields[${r}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:t}}function Mn(){if(Ln!==void 0)return Ln;let t=[];for(let e of Wc){let r=dw(e);if(!r.ok)throw new Error(`invalid built-in source definition '${e.id}': ${r.error}`);t.push(r.def)}return Ln=new Wi(t),Ln}var qc,On,cw,Kc,Wi,Ln,$n=w(()=>{"use strict";vr();dc();Gc();qc=64,On=8,cw=new Set(["path","coalesce","regex","template","join","const","transform"]);Kc=/^[\w-]+$/;Wi=class{constructor(e){this.definitions=e}all(){return this.definitions}byId(e){return this.definitions.find(r=>r.id===e)}match(e,r,n,o){return e==="claude"?this.definitions.find(i=>{let s=i.match.claude;return!(s===void 0||!s.prefixes.some(a=>r.startsWith(a))||s.exact!==void 0&&!s.exact.includes(r)||s.acceptSuffix!==void 0&&!r.endsWith(s.acceptSuffix)||s.denySuffixes?.some(a=>r.endsWith(a)))}):n!==void 0?this.definitions.find(i=>{let s=i.match.codex;return s!==void 0&&s.namespaceSuffix===n&&s.functionCallNames.includes(r)}):this.definitions.find(i=>{let s=i.match.codex;return s===void 0||!s.invocationTools.includes(r)?!1:s.invocationServer===void 0||s.invocationServer===o})}}});function Gi(t){return hw(t)}function pw(t){return t.replace(/^\n+/,"").replace(/\n+$/,"")}function mw(t){let e=t.indexOf(fw);return e===-1?t:t.slice(0,e)}function hw(t){if(typeof t!="string")return null;let e=t.split(`
`);if(e[0]?.trim()!=="---")return null;let r=-1;for(let D=1;D<e.length;D++)if(e[D].trim()==="---"){r=D;break}if(r===-1)return null;let n=e.slice(1,r),o=pw(mw(e.slice(r+1).join(`
`))),i={},s=[],a=!1;for(let D of n){if(a){let B=/^\s+- (.+)$/.exec(D);if(B){try{let Te=JSON.parse(B[1]);gw(Te)&&s.push(Te)}catch{}continue}a=!1}if(D.trim()==="fields:"){a=!0;continue}let O=/^([a-zA-Z]+):\s*(.+)$/.exec(D);O&&(i[O[1]]=O[2])}let l=D=>{let O=i[D];if(O!==void 0)try{let B=JSON.parse(O);return typeof B=="string"?B:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!yw(c))return null;let u=c,f=d,m=l("title"),S=l("url"),R=l("referencedAt"),b=l("sourceToolName");return!m||R===void 0||!b?null:{mapKey:`${u}:${f}`,source:u,nativeId:f,title:m,referencedAt:R,toolName:b,...S!==void 0?{url:S}:{},...s.length>0?{fields:s}:{},...o.length>0?{description:o}:{}}}function gw(t){if(typeof t!="object"||t===null)return!1;let e=t;return!(typeof e.key!="string"||typeof e.label!="string"||typeof e.value!="string"||!/^[\w-]+$/.test(e.key)||e.icon!==void 0&&typeof e.icon!="string")}function yw(t){return t.length>0&&/^[\w-]+$/.test(t)}var Ix,fw,Cr=w(()=>{"use strict";h();$n();Ix=p("ReferenceStore");fw="<!-- jolli:auto-note -->"});function ww(t){return`${t.source}:${t.skill}`}function Sw(t,e){if(t===void 0)return e;let r=t.usage===void 0||e.usage===void 0?t.usage??e.usage:{input:t.usage.input+e.usage.input,output:t.usage.output+e.usage.output,cached:t.usage.cached+e.usage.cached,confidence:t.usage.confidence==="attributed"&&e.usage.confidence==="attributed"?"attributed":"estimated"},n=[t,e].filter(l=>l.usage!==void 0),o=Ew(n),{usageBySession:i,supersededDocIds:s,...a}=t;return{...a,invocationCount:t.invocationCount+e.invocationCount,...r!==void 0?{usage:r}:{},...o!==void 0?{usageBySession:o}:{},...t.detection==="heuristic"||e.detection==="heuristic"?{detection:"heuristic"}:{},...t.jolliDocId===void 0&&e.jolliDocId!==void 0?{jolliDocId:e.jolliDocId,jolliDocUrl:e.jolliDocUrl}:{},...bw(t,e)}}function bw(t,e){let r=new Set([...t.supersededDocIds??[],...e.supersededDocIds??[]]);t.jolliDocId!==void 0&&e.jolliDocId!==void 0&&r.add(e.jolliDocId);let n=t.jolliDocId??e.jolliDocId;return n!==void 0&&r.delete(n),r.size>0?{supersededDocIds:[...r]}:{}}function Vc(t){if(t.supersededDocIds===void 0)return t;let{supersededDocIds:e,...r}=t;return r}function Ew(t){if(t.length===0)return;let e=[];for(let n of t){if(n.usageBySession===void 0)return;e.push(n.usageBySession)}let r={};for(let n of e)for(let[o,i]of Object.entries(n)){let s=r[o];r[o]=s===void 0?i:{input:s.input+i.input,cached:s.cached+i.cached,output:s.output+i.output,confidence:s.confidence==="attributed"&&i.confidence==="attributed"?"attributed":"estimated"}}return r}function Xc(t){let e=new Map;for(let n of t)e.has(n.archivedKey)||e.set(n.archivedKey,n);let r=new Map;for(let n of e.values()){let o=ww(n);r.set(o,Sw(r.get(o),n))}return[...r.values()]}var qi=w(()=>{"use strict"});var Lx,Yc=w(()=>{"use strict";h();Lx=p("SkillStore")});async function Xi(t){let e=V(t);return await(0,He.mkdir)(e,{recursive:!0}),e}function se(){return(0,jn.join)((0,zc.homedir)(),".jolli","jollimemory")}async function Ht(t){let e=(0,jn.join)(t,Qc);try{let r=await(0,He.readFile)(e,"utf-8"),n=JSON.parse(r);return kw(n)}catch{return Fn.debug("No config file found in %s, using defaults",t),{}}}function kw(t){if(t.syncEnabled===void 0)return t;let{syncEnabled:e,...r}=t;return r.autoSyncEnabled===void 0?{...r,autoSyncEnabled:e}:r}function _w(t,e){return!("localAgentTool"in e)||"localAgentPath"in e||(t.localAgentTool??"claude-code")===(e.localAgentTool??"claude-code")||t.localAgentPath===void 0?e:(Fn.info("Clearing localAgentPath (was set for %s, switching to %s)",t.localAgentTool??"claude-code",e.localAgentTool),{...e,localAgentPath:void 0})}async function Hn(t,e){await Ci(e,async()=>{await Zc(t,e)}),Fn.info("Config saved to %s",e)}async function Un(t){return Tw(t,se())}async function Tw(t,e){return Ci(e,async()=>{let{update:r,result:n}=t(await Ht(e));return r!==null&&(await Zc(r,e),Fn.info("Config saved to %s",e)),n})}async function Zc(t,e){let r=await Ht(e),n={...r,..._w(r,t)};await P((0,jn.join)(e,Qc),JSON.stringify(n,null,"	"))}async function Se(){return Ht(se())}async function ft(t){return Hn(t,se())}function Ki(t,e){let r={...t},n=!1;for(let o of e)o in r&&(delete r[o],n=!0);return{value:r,changed:n}}function eu(t){let e=!1,r={};for(let[s,a]of Object.entries(t.plans??{})){if(a.ignored===!0){e=!0;continue}let l=Ki(a,Rw);l.changed&&(e=!0),r[s]=l.value}let n;if(t.notes!==void 0){n={};for(let[s,a]of Object.entries(t.notes)){if(a.ignored===!0){e=!0;continue}let l=Ki(a,vw);l.changed&&(e=!0),n[s]=l.value}}let o;if(t.references!==void 0){o={};for(let[s,a]of Object.entries(t.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){e=!0;continue}let c=Ki(a,xw);c.changed&&(e=!0),o[s]=c.value}}return{registry:{version:1,plans:r,...n!==void 0?{notes:n}:{},...o!==void 0?{references:o}:{},...t.skills!==void 0?{skills:t.skills}:{}},changed:e}}var Vi,He,zc,jn,Fn,Qc,Qx,Zx,eC,tC,Rw,vw,xw,le=w(()=>{"use strict";Vi=require("node:crypto"),He=require("node:fs/promises"),zc=require("node:os"),jn=require("node:path");h();Mi();ie();Pe();Cr();qi();Yc();Fn=p("SessionTracker"),Qc="config.json",Qx=2880*60*1e3;Zx=2880*60*1e3,eC=10080*60*1e3,tC=(0,Vi.randomBytes)(4).toString("hex"),Rw=["ignored","branch","editCount"],vw=["ignored","branch"],xw=["ignored","branch","commitHash","contentHashAtCommit"]});function Be(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Je.major?!0:r<Je.major?!1:n>=Je.minor}function gt(t){let e=t,r=e?.message??String(t),n=e?.code;return n==="ENOENT"?null:n==="EACCES"||n==="EPERM"?{kind:"permission",message:r}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(r)?{kind:"corrupt",message:r}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(r)?{kind:"locked",message:r}:/no such table|no such column/i.test(r)?{kind:"schema",message:r}:/SQLITE_CANTOPEN|unable to open/i.test(r)?{kind:"permission",message:r}:{kind:"unknown",message:r}}var Je,Ie=w(()=>{"use strict";Je={major:22,minor:13}});function id(t){if((0,od.platform)()==="win32")try{xl("attrib",["+h",t],{timeout:2e3})}catch{}}var od,sd=w(()=>{"use strict";od=require("node:os");we()});var ad,H,ce,Gt,ee,co=w(()=>{"use strict";ad=require("node:crypto"),H=require("node:fs"),ce=require("node:path");h();sd();ne();Gt=p("MetadataManager"),ee=class t{constructor(e){this.jolliDir=e;this.manifestPath=(0,ce.join)(e,"manifest.json"),this.branchesPath=(0,ce.join)(e,"branches.json"),this.configPath=(0,ce.join)(e,"config.json"),this.migrationPath=(0,ce.join)(e,"migration.json"),this.indexPath=(0,ce.join)(e,"index.json")}ensure(){(0,H.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&id(this.jolliDir),(0,H.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,H.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,H.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e.fileId);n.push(e),this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Gt.info("Manifest updated: %s (%s)",e.path,e.type)}removeFromManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e);return n.length===r.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),!0)}unregisterFilesByType(e){let r=this.readManifest(),n=r.files.filter(i=>i.type!==e),o=r.files.length-n.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Gt.info("Manifest unregistered %d entries of type=%s",o,e),o)}replaceFiles(e){let r=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:[...e]},null,"	"))}findByPath(e){return this.readManifest().files.find(r=>r.path===e)}findById(e){return this.readManifest().files.find(r=>r.fileId===e)}updatePath(e,r){let n=this.readManifest();if(!n.files.find(s=>s.fileId===e))return!1;let i=n.files.map(s=>s.fileId===e?{...s,path:r}:s);return this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:i},null,"	")),!0}resolveFolderForBranch(e){let r=this.readBranches(),n=r.mappings.find(a=>a.branch===e);if(n)return n.folder;let o=t.transcodeBranchName(e),i={folder:o,branch:e,createdAt:new Date().toISOString()},s={...r,mappings:[...r.mappings,i]};return this.atomicWrite(this.branchesPath,JSON.stringify(s,null,"	")),Gt.info("Branch mapping created: %s \u2192 %s",e,o),o}removeBranchMapping(e){let r=this.readBranches(),n=r.mappings.filter(o=>o.branch!==e);return n.length===r.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:n},null,"	")),Gt.info("Branch mapping removed: %s (no remaining head)",e),!0)}renameBranchFolder(e,r){let n=this.readBranches(),o=n.mappings.map(l=>l.folder===e?{...l,folder:r}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	"));let i=this.readManifest(),s=0,a=i.files.map(l=>l.path.startsWith(`${e}/`)?(s++,{...l,path:l.path.replace(`${e}/`,`${r}/`)}):l);return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...i,files:a},null,"	")),s}removeBranchFolder(e){let r=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:r.mappings.filter(s=>s.folder!==e)},null,"	"));let n=this.readManifest(),o=n.files.filter(s=>!s.path.startsWith(`${e}/`)),i=n.files.length-o.length;return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:o},null,"	")),i}unregisterBranches(e){let r=new Set(e);if(r.size===0)return 0;let n=this.readBranches(),o=n.mappings.filter(s=>!r.has(s.branch)),i=n.mappings.length-o.length;return i===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	")),Gt.info("Branch mappings unregistered: %d",i),i)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(e){try{return this.listBranchMappings().find(r=>r.folder===e)?.branch??e}catch{return e}}listIndexHeads(){let e=this.readJson(this.indexPath);return!e||!Array.isArray(e.entries)?[]:e.entries.filter(r=>typeof r?.commitHash=="string"&&typeof r.branch=="string"&&(r.parentCommitHash===null||typeof r.parentCommitHash=="string")&&r.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(e){this.atomicWrite(this.configPath,JSON.stringify(e,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(e){this.atomicWrite(this.migrationPath,JSON.stringify(e,null,"	"))}reconcile(e){let r=this.readManifest();if(r.files.length===0||!r.files.some(a=>!(0,H.existsSync)((0,ce.join)(e,a.path))))return 0;let o=new Map;try{this.walkDir(e,e,o)}catch{}let i=0,s=[];for(let a of r.files){let l=(0,ce.join)(e,a.path);if((0,H.existsSync)(l))s.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(s.push({...a,path:c}),i++):(Gt.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),s.push(a))}}return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:s},null,"	")),i}walkDir(e,r,n){for(let o of(0,H.readdirSync)(e,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let i=(0,ce.join)(e,o.name);if(o.isDirectory())this.walkDir(i,r,n);else if(o.name.endsWith(".md"))try{let s=(0,H.readFileSync)(i,"utf-8"),a=t.sha256(s);n.set(a,ve((0,ce.relative)(r,i)))}catch{}}}static transcodeBranchName(e){let r=e.replace(/[/\\:*?~^]/g,"-");return r=r.replace(/-{3,}/g,"-"),r=r.replace(/\.\./g,"--"),r=r.replace(/^[.-]+|[.-]+$/g,""),r||"default"}static sha256(e){return(0,ad.createHash)("sha256").update(e,"utf-8").digest("hex")}readJson(e){if(!(0,H.existsSync)(e))return null;try{return JSON.parse((0,H.readFileSync)(e,"utf-8"))}catch{return null}}atomicWrite(e,r){let n=(0,ce.dirname)(e);(0,H.mkdirSync)(n,{recursive:!0});let o=`${e}.tmp`;(0,H.writeFileSync)(o,r,"utf-8"),(0,H.renameSync)(o,e)}}});function pS(t){if(process.env.VITEST)return null;try{return Re("ssh",["-G",t],{encoding:"utf-8",timeout:uS,stdio:["ignore","pipe","pipe"]})}catch(e){return cS.debug("ssh -G %s failed: %s",t,e instanceof Error?e.message:String(e)),null}}function mS(t){for(let e of t.split(/\r?\n/)){let r=e.match(/^hostname\s+(\S+)/i);if(r?.[1])return r[1]}return null}function uo(t){if(!t)return t;let e=ld.get(t);if(e!==void 0)return e;let r=t,n=dS(t);if(n){let o=mS(n);o&&(r=o)}return ld.set(t,r),r}var cS,uS,ld,dS,cd=w(()=>{"use strict";h();we();cS=p("SshAliasResolver"),uS=5e3,ld=new Map,dS=pS});function ud(){return(0,G.join)((0,fd.homedir)(),"Documents","jolli")}function bs(t){return t?hd(t)?t:(fS.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",t),ud()):ud()}function hd(t){return t?(0,G.isAbsolute)(t)&&!t.includes(".."):!0}function gd(t,e,r){let n=bs(r),o=(0,G.join)(n,t);if(!(0,it.existsSync)(o)){let s=Td(n,t,e).match;return s||(Ss(o,t,e),o)}let i=vd(o);return i&&Ed(i,e,t)?o:i&&Rd(o,i)?(Ss(o,t,e),o):wS(n,t,e)}function yd(t){let e=ks(t,["config","--get","remote.origin.url"]);if(e){let n=e.match(/\/([^/]+?)(?:\.git)?$/);if(n?.[1])return n[1]}let r=wd(t);return r?(0,G.basename)(r):(0,G.basename)(t)||"unknown"}function wd(t){let e=ks(t,["rev-parse","--git-common-dir"]);if(!e)return null;let r=(0,G.isAbsolute)(e)?e:(0,G.join)(t,e),n=(0,G.dirname)(r);return n&&n!=="/"&&n!=="."?n:null}function hS(t,e){if(!(0,G.basename)(t))return{claimable:!1,blocker:"not-a-project"};let r=wd(t);if(!r)return{claimable:!1,blocker:"not-a-project"};let n;try{n=bs(e)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return fi(n,r)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function Es(t,e){return hS(t,e).claimable}function Sd(){let t=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(t)&&t>0?t:3e4}function gS(){return Math.min(Sd(),5e3)}function yS(t){return typeof t=="object"&&t!==null&&t.code==="ETIMEDOUT"}function dd(t,e,r=Sd()){return Re("git",e,{cwd:t,encoding:"utf-8",timeout:r,stdio:["ignore","pipe","pipe"]}).trim()||null}function ks(t,e){try{return dd(t,e)}catch(r){if(!yS(r))return null;try{return dd(t,e,gS())}catch{return null}}}function bd(t){return ks(t,["remote","get-url","origin"])}function Ed(t,e,r){return t.remoteUrl&&e?pd(t.remoteUrl)===pd(e):!t.remoteUrl&&!e?t.repoName==null||t.repoName===r:!1}function pd(t){return _d(t).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function _d(t){let e=t.match(/^(?:git\+)?ssh:\/\/(?:[^@/]+@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(e)return`https://${uo(e[1])}${md(e[2],"22")}/${e[3]}`;let r=t.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(r)return`https://${uo(r[1])}${md(r[2],"9418")}/${r[3]}`;let n=t.match(/^[^@/:]+@([^/:]+):(.+)$/);return n?`https://${uo(n[1])}/${n[2]}`:t}function md(t,e){return t===void 0||t===e?"":`:${t}`}function Td(t,e,r){let n=null,o=null,i=null;for(let s=2;s<=99;s++){let a=(0,G.join)(t,`${e}-${s}`);if(!(0,it.existsSync)(a)){i===null&&(i=a);continue}let l=vd(a);if(l&&Ed(l,r,e)){n=a;break}l&&o===null&&Rd(a,l)&&(o=a)}return{match:n,stub:o,firstUnused:i}}function wS(t,e,r){let n=Td(t,e,r);if(n.match)return n.match;let o=n.stub??n.firstUnused??(0,G.join)(t,`${e}-${Date.now()}`);return Ss(o,e,r),o}function Ss(t,e,r){if(ye())return;let n=new ee((0,G.join)(t,".jolli"));n.ensure();let o=n.readConfig();n.saveConfig({...o,remoteUrl:r??void 0,repoName:e})}function Rd(t,e){return e.remoteUrl==null&&e.repoName==null}function vd(t){let e=(0,G.join)(t,".jolli","config.json");if(!(0,it.existsSync)(e))return null;try{return JSON.parse((0,it.readFileSync)(e,"utf-8"))}catch{return null}}var it,fd,G,fS,kd,qt=w(()=>{"use strict";it=require("node:fs"),fd=require("node:os"),G=require("node:path");h();we();co();ne();cd();fS=p("KBPathResolver");kd=new Set(["github.com","gitlab.com","bitbucket.org"])});async function xs(t){let e=await j(["config","--get","remote.origin.url"],t),r=e.exitCode===0?e.stdout.trim():"";return r.length===0?$r(t):jd(r,t)}function jd(t,e){let r=t.trim();if(r.length===0)return $r(e);let n=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(r);if(n&&!r.includes("://")){let s=n[2].toLowerCase(),a=$d(s,Md(n[3]));return`https://${s}/${a}`}let o;try{o=new URL(r)}catch{return $r(e)}let i=o.protocol.replace(/:$/,"").toLowerCase();if(i==="ssh"||i==="git"||i==="http"||i==="https"){let s=o.hostname.toLowerCase(),a=$d(s,Md(o.pathname.replace(/^\/+/,""))),l=RS(i,o.port);return`https://${s}${l}/${a}`}return $r(i==="file"?o.pathname:e)}function $r(t){let e=br(ve(t));return e.length===0?"file:///":e.startsWith("/")?`file://${e}`:`file:///${e}`}function Md(t){let e=br(t);return e.toLowerCase().endsWith(".git")&&(e=e.slice(0,-4)),br(e)}function $d(t,e){return kd.has(t)?e.toLowerCase():e}function RS(t,e){return e.length===0?"":t==="ssh"||t==="git"?e===TS[t]?"":`:${e}`:`:${e}`}var TS,go=w(()=>{"use strict";oe();qt();ne();TS={ssh:"22",git:"9418"}});function Cs(){return"cursor-plugin"}var Kt,yo=w(()=>{"use strict";Kt="cursor-plugin/1.0.0"});var Hd,Ud,Jd,Bd,Wd,Gd,qd,wo=w(()=>{"use strict";Hd=`
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
`,Ud=`
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
`,Jd=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,Bd=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,Wd=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,Gd=`
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
`,qd=`
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
`});function Yt(){return(0,So.join)(se(),"jollimemory.db")}function st(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Hr.major?!0:r<Hr.major?!1:n>=Hr.minor}function Fr(t){try{let e=t.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),r=Number.parseInt(e?.value??"",10);return Number.isFinite(r)?r:0}catch{return 0}}function AS(t){try{return(t.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function As(t){try{return{kind:"rows",rows:t.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(e){let r=AS(t);return r==="absent"?{kind:"none"}:{kind:"unreadable",reason:_(e),tableConfirmed:r==="present"}}}function Kd(t){let e=As(t);return e.kind==="rows"?e.rows:void 0}function jr(t,e){t.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(e.slot,e.name,e.outcome,e.appliedBy,e.atMs,e.durationMs,e.ddl)}function IS(t){let e=new Map;for(let r of t){let n=e.get(r.name);(!n||r.seq>n.seq)&&e.set(r.name,r)}return e}function DS(t){let e=new Map;for(let r of t){if(r.outcome!=="applied")continue;let n=e.get(r.name);(!n||r.seq>n.seq)&&e.set(r.name,r)}return e}function NS(t){return Xt.findIndex(e=>e.name===t)}function OS(t){let e=As(t);if(e.kind==="none")return;if(e.kind==="unreadable"){Vt.has(Vd)||(Vt.add(Vd),Ge.warn(e.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",e.reason));return}let r=e.rows,n=new Set(Xt.map(o=>o.name));for(let[o,i]of IS(r))n.has(o)||Vt.has(o)||(Vt.add(o),Ge.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,i.applied_by,Kt));for(let[o,i]of DS(r))n.has(o)&&(Vt.has(o)||i.ddl!==Xt[NS(o)].ddl&&(Vt.add(o),Ge.warn("migration %s (slot %d) was applied by %s on %s with DIFFERENT DDL than this build (%s) carries \u2014 run `jolli doctor --schema-log` to see the log",o,i.slot,i.applied_by,new Date(i.applied_at_ms).toISOString().slice(0,10),Kt)))}function LS(t,e={}){let r=e.now??Date.now,n=e.appliedBy??Kt,o=Fr(t),i=As(t),s=new Set,a=[];if(i.kind==="rows")for(let d of i.rows)(d.outcome==="applied"||d.outcome==="baseline")&&s.add(d.name);else{let d=Math.min(o,Xt.length),u=Xt.slice(0,d).map((f,m)=>({slot:m,name:f.name,ddl:f.ddl}));for(let f of u)s.add(f.name);i.kind==="none"?a=u:Ge.warn(i.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 migrating from the version stamp and recording nothing":"the database could not be queried for its migration log (%s) \u2014 migrating from the version stamp and recording nothing",i.reason)}let l=Xt.map((d,u)=>({m:d,slot:u})).filter(({m:d})=>!s.has(d.name));if(l.length===0)return;let c=[];t.exec("PRAGMA foreign_keys = OFF");try{for(let{m:d,slot:u}of l){let f=r();t.exec("BEGIN IMMEDIATE");try{let m=Kd(t);if(m?.some(b=>b.name===d.name&&(b.outcome==="applied"||b.outcome==="baseline"))){jr(t,{slot:u,name:d.name,outcome:"skipped",appliedBy:n,atMs:r(),durationMs:0,ddl:d.ddl}),t.exec("COMMIT");continue}if(!m&&Fr(t)>u){t.exec("COMMIT");continue}t.exec(d.ddl);let S={slot:u,name:d.name,outcome:"applied",appliedBy:n,atMs:r(),durationMs:r()-f,ddl:d.ddl};if(Kd(t)){for(let b of a)jr(t,{...b,outcome:"baseline",appliedBy:n,atMs:r(),durationMs:0});a=[];for(let b of c)jr(t,b);c.length=0,jr(t,S)}else c.push(S);let R=Math.max(Fr(t),u+1);MS(t,"schema_version",String(R)),t.exec("COMMIT")}catch(m){try{t.exec("ROLLBACK")}catch{}try{jr(t,{slot:u,name:d.name,outcome:"failed",appliedBy:n,atMs:r(),durationMs:r()-f,ddl:d.ddl})}catch(S){Ge.debug("could not record the failed migration %s: %s",d.name,_(S))}throw m}}}finally{t.exec("PRAGMA foreign_keys = ON")}Ge.info("dashboard schema migrated %d \u2192 %d (%s)",o,Fr(t),l.map(({m:d})=>d.name).join(", "))}function MS(t,e,r){t.prepare(`INSERT INTO schema_meta (key, value) VALUES (?, ?)
		 ON CONFLICT(key) DO UPDATE SET value = excluded.value`).run(e,r)}function $S(t){Xd!==t&&(Xd=t,Ge.warn("database is at format v%d, this build (%s) reads v%d \u2014 data written by newer builds is not visible here",t,Kt,Yd))}function jS(t){let e=(0,So.dirname)(t);try{(0,qe.mkdirSync)(e,{recursive:!0,mode:448}),((0,qe.statSync)(e).mode&511)!==448&&(0,qe.chmodSync)(e,448)}catch(r){Ge.warn("could not restrict %s to owner-only: %s",e,_(r))}}function FS(t){for(let e of[t,`${t}-wal`,`${t}-shm`])try{((0,qe.statSync)(e).mode&511)!==384&&(0,qe.chmodSync)(e,384)}catch(r){Dt(r)||Ge.warn("could not restrict %s to 0600: %s",e,_(r))}}async function zd(t,e){if(!st())throw new Ps(process.versions.node);let r=e.dbPath??Yt(),n=e.maxAttempts??4,o=e.baseDelayMs??50;t||jS(r);let{DatabaseSync:i}=await import("node:sqlite");for(let s=1;;s++){let a;try{a=new i(r,{readOnly:t});for(let l of t?CS:xS)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${e.busyTimeoutMs??PS}`),t||FS(r),a}catch(l){try{a?.close()}catch{}if(gt(l)?.kind!=="locked"||s>=n)throw l;await new Promise(c=>setTimeout(c,o*2**(s-1)))}}}async function Is(t,e={}){let r=await zd(!1,e);try{let n=Fr(r);return n>Yd&&$S(n),OS(r),LS(r),await t(r)}finally{r.close()}}async function Ds(t,e={}){let r=await zd(!0,e);try{return await t(r)}finally{r.close()}}function Ns(t,e){t.exec("BEGIN IMMEDIATE");try{let r=e();return t.exec("COMMIT"),r}catch(r){try{t.exec("ROLLBACK")}catch{}throw r}}var qe,So,Ge,Yd,Hr,Ps,xS,CS,PS,Xt,Vt,Vd,Xd,at=w(()=>{"use strict";qe=require("node:fs"),So=require("node:path");yo();le();Ie();h();wo();Ge=p("DashboardDb"),Yd=6,Hr={major:22,minor:13};Ps=class extends Error{constructor(e){super(`The Jolli dashboard needs Node >= ${Hr.major}.${Hr.minor} for built-in SQLite (running ${e}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},xS=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],CS=["PRAGMA foreign_keys = ON"],PS=2e3,Xt=[{name:"BASELINE_DDL",ddl:Hd+`
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
`+qd},{name:"RECALL_RECEIPTS_DDL",ddl:Ud},{name:"SKILL_CONTEXT_KIND_DDL",ddl:Jd},{name:"EVENT_FAILED_KIND_DDL",ddl:Bd},{name:"TOOL_CALL_TIME_DDL",ddl:Wd},{name:"SCHEMA_MIGRATIONS_DDL",ddl:Gd}];Vt=new Set,Vd="\0unreadable-log";Xd=0});function Os(t){let e=i=>{try{return(0,Ur.statSync)(`${t}${i}`),!0}catch{return!1}},r=e(""),n=e("-wal"),o=e("-shm");return r?n&&o?"healthy-active":n?"healthy-recoverable":"healthy-clean":n||o?"alarm-sidecars-only":"absent"}var Ur,GI,Ls=w(()=>{"use strict";Ur=require("node:fs");h();GI=p("DbDetection")});async function US(t){try{let r=await xs(t);if(r&&!r.startsWith("file:"))return{identity:r,remoteUrl:r}}catch(r){HS.debug("no canonical remote for %s (%s) \u2014 using path identity",t,_(r))}return{identity:`local:${(0,Qd.createHash)("sha256").update(ve(t)).digest("hex").slice(0,32)}`}}async function wt(t){return US(await Ei(t))}var Qd,HS,St=w(()=>{"use strict";Qd=require("node:crypto");Ni();oe();go();Pe();ne();le();h();HS=p("RepoRegistry")});var ep={};ui(ep,{hasCutoverRow:()=>GS,resetCutoverRouterCaches:()=>BS,resolveCutoverRoute:()=>Jr});function BS(){Ms.clear()}async function WS(t){let e=Ms.get(t);if(e!==void 0)return e;let{identity:r}=await wt(t);return Ms.set(t,r),r}async function Zd(t,e){if(!st())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let r=Os(e);if(r==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(r==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:n}=await import("node:sqlite"),o=new n(e,{readOnly:!0});try{let i=await WS(t),s=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(i);if(!s)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(s.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(n){return{kind:"unavailable",reason:_(n)}}}async function GS(t,e={}){return(await Zd(t,e.dbPath??Yt())).kind==="row"}async function Jr(t,e={}){let r=await Rr(t).catch(()=>null),n=await Zd(t,e.dbPath??Yt());return n.kind==="row"?{state:"cutover",record:n.record}:r!==null?n.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:n.reason}:n.kind==="unavailable"?(JS.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",n.reason),{state:"uncutover",warning:n.reason}):{state:"uncutover"}}var JS,Ms,bo=w(()=>{"use strict";nt();h();at();Ls();St();JS=p("CutoverRouter"),Ms=new Map});var tr=T((mL,dm)=>{"use strict";var Yb="2.0.0",zb=Number.MAX_SAFE_INTEGER||9007199254740991,Qb=16,Zb=250,eE=["major","premajor","minor","preminor","patch","prepatch","prerelease"];dm.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:Qb,MAX_SAFE_BUILD_LENGTH:Zb,MAX_SAFE_INTEGER:zb,RELEASE_TYPES:eE,SEMVER_SPEC_VERSION:Yb,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Qr=T((fL,pm)=>{"use strict";var tE=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};pm.exports=tE});var rr=T((Ne,mm)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:ta,MAX_SAFE_BUILD_LENGTH:rE,MAX_LENGTH:nE}=tr(),oE=Qr();Ne=mm.exports={};var iE=Ne.re=[],sE=Ne.safeRe=[],g=Ne.src=[],aE=Ne.safeSrc=[],y=Ne.t={},lE=0,ra="[a-zA-Z0-9-]",cE=[["\\s",1],["\\d",nE],[ra,rE]],uE=t=>{for(let[e,r]of cE)t=t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);return t},x=(t,e,r)=>{let n=uE(e),o=lE++;oE(t,o,e),y[t]=o,g[o]=e,aE[o]=n,iE[o]=new RegExp(e,r?"g":void 0),sE[o]=new RegExp(n,r?"g":void 0)};x("NUMERICIDENTIFIER","0|[1-9]\\d*");x("NUMERICIDENTIFIERLOOSE","\\d+");x("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${ra}*`);x("MAINVERSION",`(${g[y.NUMERICIDENTIFIER]})\\.(${g[y.NUMERICIDENTIFIER]})\\.(${g[y.NUMERICIDENTIFIER]})`);x("MAINVERSIONLOOSE",`(${g[y.NUMERICIDENTIFIERLOOSE]})\\.(${g[y.NUMERICIDENTIFIERLOOSE]})\\.(${g[y.NUMERICIDENTIFIERLOOSE]})`);x("PRERELEASEIDENTIFIER",`(?:${g[y.NONNUMERICIDENTIFIER]}|${g[y.NUMERICIDENTIFIER]})`);x("PRERELEASEIDENTIFIERLOOSE",`(?:${g[y.NONNUMERICIDENTIFIER]}|${g[y.NUMERICIDENTIFIERLOOSE]})`);x("PRERELEASE",`(?:-(${g[y.PRERELEASEIDENTIFIER]}(?:\\.${g[y.PRERELEASEIDENTIFIER]})*))`);x("PRERELEASELOOSE",`(?:-?(${g[y.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${g[y.PRERELEASEIDENTIFIERLOOSE]})*))`);x("BUILDIDENTIFIER",`${ra}+`);x("BUILD",`(?:\\+(${g[y.BUILDIDENTIFIER]}(?:\\.${g[y.BUILDIDENTIFIER]})*))`);x("FULLPLAIN",`v?${g[y.MAINVERSION]}${g[y.PRERELEASE]}?${g[y.BUILD]}?`);x("FULL",`^${g[y.FULLPLAIN]}$`);x("LOOSEPLAIN",`[v=\\s]*${g[y.MAINVERSIONLOOSE]}${g[y.PRERELEASELOOSE]}?${g[y.BUILD]}?`);x("LOOSE",`^${g[y.LOOSEPLAIN]}$`);x("GTLT","((?:<|>)?=?)");x("XRANGEIDENTIFIERLOOSE",`${g[y.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);x("XRANGEIDENTIFIER",`${g[y.NUMERICIDENTIFIER]}|x|X|\\*`);x("XRANGEPLAIN",`[v=\\s]*(${g[y.XRANGEIDENTIFIER]})(?:\\.(${g[y.XRANGEIDENTIFIER]})(?:\\.(${g[y.XRANGEIDENTIFIER]})(?:${g[y.PRERELEASE]})?${g[y.BUILD]}?)?)?`);x("XRANGEPLAINLOOSE",`[v=\\s]*(${g[y.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[y.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[y.XRANGEIDENTIFIERLOOSE]})(?:${g[y.PRERELEASELOOSE]})?${g[y.BUILD]}?)?)?`);x("XRANGE",`^${g[y.GTLT]}\\s*${g[y.XRANGEPLAIN]}$`);x("XRANGELOOSE",`^${g[y.GTLT]}\\s*${g[y.XRANGEPLAINLOOSE]}$`);x("COERCEPLAIN",`(^|[^\\d])(\\d{1,${ta}})(?:\\.(\\d{1,${ta}}))?(?:\\.(\\d{1,${ta}}))?`);x("COERCE",`${g[y.COERCEPLAIN]}(?:$|[^\\d])`);x("COERCEFULL",g[y.COERCEPLAIN]+`(?:${g[y.PRERELEASE]})?(?:${g[y.BUILD]})?(?:$|[^\\d])`);x("COERCERTL",g[y.COERCE],!0);x("COERCERTLFULL",g[y.COERCEFULL],!0);x("LONETILDE","(?:~>?)");x("TILDETRIM",`(\\s*)${g[y.LONETILDE]}\\s+`,!0);Ne.tildeTrimReplace="$1~";x("TILDE",`^${g[y.LONETILDE]}${g[y.XRANGEPLAIN]}$`);x("TILDELOOSE",`^${g[y.LONETILDE]}${g[y.XRANGEPLAINLOOSE]}$`);x("LONECARET","(?:\\^)");x("CARETTRIM",`(\\s*)${g[y.LONECARET]}\\s+`,!0);Ne.caretTrimReplace="$1^";x("CARET",`^${g[y.LONECARET]}${g[y.XRANGEPLAIN]}$`);x("CARETLOOSE",`^${g[y.LONECARET]}${g[y.XRANGEPLAINLOOSE]}$`);x("COMPARATORLOOSE",`^${g[y.GTLT]}\\s*(${g[y.LOOSEPLAIN]})$|^$`);x("COMPARATOR",`^${g[y.GTLT]}\\s*(${g[y.FULLPLAIN]})$|^$`);x("COMPARATORTRIM",`(\\s*)${g[y.GTLT]}\\s*(${g[y.LOOSEPLAIN]}|${g[y.XRANGEPLAIN]})`,!0);Ne.comparatorTrimReplace="$1$2$3";x("HYPHENRANGE",`^\\s*(${g[y.XRANGEPLAIN]})\\s+-\\s+(${g[y.XRANGEPLAIN]})\\s*$`);x("HYPHENRANGELOOSE",`^\\s*(${g[y.XRANGEPLAINLOOSE]})\\s+-\\s+(${g[y.XRANGEPLAINLOOSE]})\\s*$`);x("STAR","(<|>)?=?\\s*\\*");x("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");x("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Do=T((hL,fm)=>{"use strict";var dE=Object.freeze({loose:!0}),pE=Object.freeze({}),mE=t=>t?typeof t!="object"?dE:t:pE;fm.exports=mE});var na=T((gL,ym)=>{"use strict";var hm=/^[0-9]+$/,gm=(t,e)=>{if(typeof t=="number"&&typeof e=="number")return t===e?0:t<e?-1:1;let r=hm.test(t),n=hm.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},fE=(t,e)=>gm(e,t);ym.exports={compareIdentifiers:gm,rcompareIdentifiers:fE}});var q=T((yL,Sm)=>{"use strict";var No=Qr(),{MAX_LENGTH:wm,MAX_SAFE_INTEGER:Oo}=tr(),{safeRe:Lo,t:Mo}=rr(),hE=Do(),{compareIdentifiers:oa}=na(),ia=class t{constructor(e,r){if(r=hE(r),e instanceof t){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>wm)throw new TypeError(`version is longer than ${wm} characters`);No("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=e.trim().match(r.loose?Lo[Mo.LOOSE]:Lo[Mo.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Oo||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Oo||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Oo||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let i=+o;if(i>=0&&i<Oo)return i}return o}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(No("SemVer.compare",this.version,this.options,e),!(e instanceof t)){if(typeof e=="string"&&e===this.version)return 0;e=new t(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof t||(e=new t(e,this.options)),this.major<e.major?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:this.patch>e.patch?1:0}comparePre(e){if(e instanceof t||(e=new t(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],o=e.prerelease[r];if(No("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return oa(n,o)}while(++r)}compareBuild(e){e instanceof t||(e=new t(e,this.options));let r=0;do{let n=this.build[r],o=e.build[r];if(No("build compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return oa(n,o)}while(++r)}inc(e,r,n){if(e.startsWith("pre")){if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(r){let o=`-${r}`.match(this.options.loose?Lo[Mo.PRERELEASELOOSE]:Lo[Mo.PRERELEASE]);if(!o||o[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let i=this.prerelease.length;for(;--i>=0;)typeof this.prerelease[i]=="number"&&(this.prerelease[i]++,i=-2);if(i===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let i=[r,o];n===!1&&(i=[r]),oa(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=i):this.prerelease=i}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Sm.exports=ia});var ct=T((wL,Em)=>{"use strict";var bm=q(),gE=(t,e,r=!1)=>{if(t instanceof bm)return t;try{return new bm(t,e)}catch(n){if(!r)return null;throw n}};Em.exports=gE});var _m=T((SL,km)=>{"use strict";var yE=ct(),wE=(t,e)=>{let r=yE(t,e);return r?r.version:null};km.exports=wE});var Rm=T((bL,Tm)=>{"use strict";var SE=ct(),bE=(t,e)=>{let r=SE(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};Tm.exports=bE});var Cm=T((EL,xm)=>{"use strict";var vm=q(),EE=(t,e,r,n,o)=>{typeof r=="string"&&(o=n,n=r,r=void 0);try{return new vm(t instanceof vm?t.version:t,r).inc(e,n,o).version}catch{return null}};xm.exports=EE});var Im=T((kL,Am)=>{"use strict";var Pm=ct(),kE=(t,e)=>{let r=Pm(t,null,!0),n=Pm(e,null,!0),o=r.compare(n);if(o===0)return null;let i=o>0,s=i?r:n,a=i?n:r,l=!!s.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(s)===0)return a.minor&&!a.patch?"minor":"patch"}let d=l?"pre":"";return r.major!==n.major?d+"major":r.minor!==n.minor?d+"minor":r.patch!==n.patch?d+"patch":"prerelease"};Am.exports=kE});var Nm=T((_L,Dm)=>{"use strict";var _E=q(),TE=(t,e)=>new _E(t,e).major;Dm.exports=TE});var Lm=T((TL,Om)=>{"use strict";var RE=q(),vE=(t,e)=>new RE(t,e).minor;Om.exports=vE});var $m=T((RL,Mm)=>{"use strict";var xE=q(),CE=(t,e)=>new xE(t,e).patch;Mm.exports=CE});var Fm=T((vL,jm)=>{"use strict";var PE=ct(),AE=(t,e)=>{let r=PE(t,e);return r&&r.prerelease.length?r.prerelease:null};jm.exports=AE});var me=T((xL,Um)=>{"use strict";var Hm=q(),IE=(t,e,r)=>new Hm(t,r).compare(new Hm(e,r));Um.exports=IE});var Bm=T((CL,Jm)=>{"use strict";var DE=me(),NE=(t,e,r)=>DE(e,t,r);Jm.exports=NE});var Gm=T((PL,Wm)=>{"use strict";var OE=me(),LE=(t,e)=>OE(t,e,!0);Wm.exports=LE});var $o=T((AL,Km)=>{"use strict";var qm=q(),ME=(t,e,r)=>{let n=new qm(t,r),o=new qm(e,r);return n.compare(o)||n.compareBuild(o)};Km.exports=ME});var Xm=T((IL,Vm)=>{"use strict";var $E=$o(),jE=(t,e)=>t.sort((r,n)=>$E(r,n,e));Vm.exports=jE});var zm=T((DL,Ym)=>{"use strict";var FE=$o(),HE=(t,e)=>t.sort((r,n)=>FE(n,r,e));Ym.exports=HE});var Zr=T((NL,Qm)=>{"use strict";var UE=me(),JE=(t,e,r)=>UE(t,e,r)>0;Qm.exports=JE});var jo=T((OL,Zm)=>{"use strict";var BE=me(),WE=(t,e,r)=>BE(t,e,r)<0;Zm.exports=WE});var sa=T((LL,ef)=>{"use strict";var GE=me(),qE=(t,e,r)=>GE(t,e,r)===0;ef.exports=qE});var aa=T((ML,tf)=>{"use strict";var KE=me(),VE=(t,e,r)=>KE(t,e,r)!==0;tf.exports=VE});var Fo=T(($L,rf)=>{"use strict";var XE=me(),YE=(t,e,r)=>XE(t,e,r)>=0;rf.exports=YE});var Ho=T((jL,nf)=>{"use strict";var zE=me(),QE=(t,e,r)=>zE(t,e,r)<=0;nf.exports=QE});var la=T((FL,of)=>{"use strict";var ZE=sa(),ek=aa(),tk=Zr(),rk=Fo(),nk=jo(),ok=Ho(),ik=(t,e,r,n)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return ZE(t,r,n);case"!=":return ek(t,r,n);case">":return tk(t,r,n);case">=":return rk(t,r,n);case"<":return nk(t,r,n);case"<=":return ok(t,r,n);default:throw new TypeError(`Invalid operator: ${e}`)}};of.exports=ik});var af=T((HL,sf)=>{"use strict";var sk=q(),ak=ct(),{safeRe:Uo,t:Jo}=rr(),lk=(t,e)=>{if(t instanceof sk)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(e.includePrerelease?Uo[Jo.COERCEFULL]:Uo[Jo.COERCE]);else{let l=e.includePrerelease?Uo[Jo.COERCERTLFULL]:Uo[Jo.COERCERTL],c;for(;(c=l.exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||c.index+c[0].length!==r.index+r[0].length)&&(r=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(r===null)return null;let n=r[2],o=r[3]||"0",i=r[4]||"0",s=e.includePrerelease&&r[5]?`-${r[5]}`:"",a=e.includePrerelease&&r[6]?`+${r[6]}`:"";return ak(`${n}.${o}.${i}${s}${a}`,e)};sf.exports=lk});var cf=T((UL,lf)=>{"use strict";var ck=ct(),uk=tr(),dk=q(),pk=(t,e,r)=>{if(!uk.RELEASE_TYPES.includes(e))return null;let n=mk(t,r);return n&&fk(n,e)},mk=(t,e)=>{let r=t instanceof dk?t.version:t;return ck(r,e)},fk=(t,e)=>{if(hk(e))return t.version;switch(t.prerelease=[],e){case"major":t.minor=0,t.patch=0;break;case"minor":t.patch=0;break}return t.format()},hk=t=>t.startsWith("pre");lf.exports=pk});var df=T((JL,uf)=>{"use strict";var ca=class{constructor(){this.max=1e3,this.map=new Map}get(e){let r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(e,r)}return this}};uf.exports=ca});var fe=T((BL,hf)=>{"use strict";var gk=/\s+/g,ua=class t{constructor(e,r){if(r=wk(r),e instanceof t)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new t(e.raw,r);if(e instanceof da)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e.trim().replace(gk," "),this.set=this.raw.split("||").map(n=>this.parseRange(n.trim())).filter(n=>n.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let n=this.set[0];if(this.set=this.set.filter(o=>!mf(o[0])),this.set.length===0)this.set=[n];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&xk(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let r=this.set[e];for(let n=0;n<r.length;n++)n>0&&(this.formatted+=" "),this.formatted+=r[n].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(vk,"");let n=((this.options.includePrerelease&&Tk)|(this.options.loose&&Rk))+":"+e,o=pf.get(n);if(o)return o;let i=this.options.loose,s=i?te[K.HYPHENRANGELOOSE]:te[K.HYPHENRANGE];e=e.replace(s,$k(this.options.includePrerelease)),M("hyphen replace",e),e=e.replace(te[K.COMPARATORTRIM],Ek),M("comparator trim",e),e=e.replace(te[K.TILDETRIM],kk),M("tilde trim",e),e=e.replace(te[K.CARETTRIM],_k),M("caret trim",e);let a=e.split(" ").map(u=>Ck(u,this.options)).join(" ").split(/\s+/).map(u=>Mk(u,this.options));i&&(a=a.filter(u=>(M("loose invalid filter",u,this.options),!!u.match(te[K.COMPARATORLOOSE])))),M("range list",a);let l=new Map,c=a.map(u=>new da(u,this.options));for(let u of c){if(mf(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return pf.set(n,d),d}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Range is required");return this.set.some(n=>ff(n,r)&&e.set.some(o=>ff(o,r)&&n.every(i=>o.every(s=>i.intersects(s,r)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new Sk(e,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(jk(this.set[r],e,this.options))return!0;return!1}};hf.exports=ua;var yk=df(),pf=new yk,wk=Do(),da=en(),M=Qr(),Sk=q(),{safeRe:te,src:bk,t:K,comparatorTrimReplace:Ek,tildeTrimReplace:kk,caretTrimReplace:_k}=rr(),{FLAG_INCLUDE_PRERELEASE:Tk,FLAG_LOOSE:Rk}=tr(),vk=new RegExp(bk[K.BUILD],"g"),mf=t=>t.value==="<0.0.0-0",xk=t=>t.value==="",ff=(t,e)=>{let r=!0,n=t.slice(),o=n.pop();for(;r&&n.length;)r=n.every(i=>o.intersects(i,e)),o=n.pop();return r},Ck=(t,e)=>(t=t.replace(te[K.BUILD],""),M("comp",t,e),t=Ik(t,e),M("caret",t),t=Pk(t,e),M("tildes",t),t=Nk(t,e),M("xrange",t),t=Lk(t,e),M("stars",t),t),re=t=>!t||t.toLowerCase()==="x"||t==="*",Pk=(t,e)=>t.trim().split(/\s+/).map(r=>Ak(r,e)).join(" "),Ak=(t,e)=>{let r=e.loose?te[K.TILDELOOSE]:te[K.TILDE];return t.replace(r,(n,o,i,s,a)=>{M("tilde",t,n,o,i,s,a);let l;return re(o)?l="":re(i)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:re(s)?l=`>=${o}.${i}.0 <${o}.${+i+1}.0-0`:a?(M("replaceTilde pr",a),l=`>=${o}.${i}.${s}-${a} <${o}.${+i+1}.0-0`):l=`>=${o}.${i}.${s} <${o}.${+i+1}.0-0`,M("tilde return",l),l})},Ik=(t,e)=>t.trim().split(/\s+/).map(r=>Dk(r,e)).join(" "),Dk=(t,e)=>{M("caret",t,e);let r=e.loose?te[K.CARETLOOSE]:te[K.CARET],n=e.includePrerelease?"-0":"";return t.replace(r,(o,i,s,a,l)=>{M("caret",t,o,i,s,a,l);let c;return re(i)?c="":re(s)?c=`>=${i}.0.0${n} <${+i+1}.0.0-0`:re(a)?i==="0"?c=`>=${i}.${s}.0${n} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.0${n} <${+i+1}.0.0-0`:l?(M("replaceCaret pr",l),i==="0"?s==="0"?c=`>=${i}.${s}.${a}-${l} <${i}.${s}.${+a+1}-0`:c=`>=${i}.${s}.${a}-${l} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.${a}-${l} <${+i+1}.0.0-0`):(M("no pr"),i==="0"?s==="0"?c=`>=${i}.${s}.${a}${n} <${i}.${s}.${+a+1}-0`:c=`>=${i}.${s}.${a}${n} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.${a} <${+i+1}.0.0-0`),M("caret return",c),c})},Nk=(t,e)=>(M("replaceXRanges",t,e),t.split(/\s+/).map(r=>Ok(r,e)).join(" ")),Ok=(t,e)=>{t=t.trim();let r=e.loose?te[K.XRANGELOOSE]:te[K.XRANGE];return t.replace(r,(n,o,i,s,a,l)=>{M("xRange",t,n,o,i,s,a,l);let c=re(i),d=c||re(s),u=d||re(a),f=u;return o==="="&&f&&(o=""),l=e.includePrerelease?"-0":"",c?o===">"||o==="<"?n="<0.0.0-0":n="*":o&&f?(d&&(s=0),a=0,o===">"?(o=">=",d?(i=+i+1,s=0,a=0):(s=+s+1,a=0)):o==="<="&&(o="<",d?i=+i+1:s=+s+1),o==="<"&&(l="-0"),n=`${o+i}.${s}.${a}${l}`):d?n=`>=${i}.0.0${l} <${+i+1}.0.0-0`:u&&(n=`>=${i}.${s}.0${l} <${i}.${+s+1}.0-0`),M("xRange return",n),n})},Lk=(t,e)=>(M("replaceStars",t,e),t.trim().replace(te[K.STAR],"")),Mk=(t,e)=>(M("replaceGTE0",t,e),t.trim().replace(te[e.includePrerelease?K.GTE0PRE:K.GTE0],"")),$k=t=>(e,r,n,o,i,s,a,l,c,d,u,f)=>(re(n)?r="":re(o)?r=`>=${n}.0.0${t?"-0":""}`:re(i)?r=`>=${n}.${o}.0${t?"-0":""}`:s?r=`>=${r}`:r=`>=${r}${t?"-0":""}`,re(c)?l="":re(d)?l=`<${+c+1}.0.0-0`:re(u)?l=`<${c}.${+d+1}.0-0`:f?l=`<=${c}.${d}.${u}-${f}`:t?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${r} ${l}`.trim()),jk=(t,e,r)=>{for(let n=0;n<t.length;n++)if(!t[n].test(e))return!1;if(e.prerelease.length&&!r.includePrerelease){for(let n=0;n<t.length;n++)if(M(t[n].semver),t[n].semver!==da.ANY&&t[n].semver.prerelease.length>0){let o=t[n].semver;if(o.major===e.major&&o.minor===e.minor&&o.patch===e.patch)return!0}return!1}return!0}});var en=T((WL,Ef)=>{"use strict";var tn=Symbol("SemVer ANY"),fa=class t{static get ANY(){return tn}constructor(e,r){if(r=gf(r),e instanceof t){if(e.loose===!!r.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),ma("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===tn?this.value="":this.value=this.operator+this.semver.version,ma("comp",this)}parse(e){let r=this.options.loose?yf[wf.COMPARATORLOOSE]:yf[wf.COMPARATOR],n=e.match(r);if(!n)throw new TypeError(`Invalid comparator: ${e}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new Sf(n[2],this.options.loose):this.semver=tn}toString(){return this.value}test(e){if(ma("Comparator.test",e,this.options.loose),this.semver===tn||e===tn)return!0;if(typeof e=="string")try{e=new Sf(e,this.options)}catch{return!1}return pa(e,this.operator,this.semver,this.options)}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new bf(e.value,r).test(this.value):e.operator===""?e.value===""?!0:new bf(this.value,r).test(e.semver):(r=gf(r),r.includePrerelease&&(this.value==="<0.0.0-0"||e.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||pa(this.semver,"<",e.semver,r)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||pa(this.semver,">",e.semver,r)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}};Ef.exports=fa;var gf=Do(),{safeRe:yf,t:wf}=rr(),pa=la(),ma=Qr(),Sf=q(),bf=fe()});var rn=T((GL,kf)=>{"use strict";var Fk=fe(),Hk=(t,e,r)=>{try{e=new Fk(e,r)}catch{return!1}return e.test(t)};kf.exports=Hk});var Tf=T((qL,_f)=>{"use strict";var Uk=fe(),Jk=(t,e)=>new Uk(t,e).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));_f.exports=Jk});var vf=T((KL,Rf)=>{"use strict";var Bk=q(),Wk=fe(),Gk=(t,e,r)=>{let n=null,o=null,i=null;try{i=new Wk(e,r)}catch{return null}return t.forEach(s=>{i.test(s)&&(!n||o.compare(s)===-1)&&(n=s,o=new Bk(n,r))}),n};Rf.exports=Gk});var Cf=T((VL,xf)=>{"use strict";var qk=q(),Kk=fe(),Vk=(t,e,r)=>{let n=null,o=null,i=null;try{i=new Kk(e,r)}catch{return null}return t.forEach(s=>{i.test(s)&&(!n||o.compare(s)===1)&&(n=s,o=new qk(n,r))}),n};xf.exports=Vk});var If=T((XL,Af)=>{"use strict";var ha=q(),Xk=fe(),Pf=Zr(),Yk=(t,e)=>{t=new Xk(t,e);let r=new ha("0.0.0");if(t.test(r)||(r=new ha("0.0.0-0"),t.test(r)))return r;r=null;for(let n=0;n<t.set.length;++n){let o=t.set[n],i=null;o.forEach(s=>{let a=new ha(s.semver.version);switch(s.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!i||Pf(a,i))&&(i=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${s.operator}`)}}),i&&(!r||Pf(r,i))&&(r=i)}return r&&t.test(r)?r:null};Af.exports=Yk});var Nf=T((YL,Df)=>{"use strict";var zk=fe(),Qk=(t,e)=>{try{return new zk(t,e).range||"*"}catch{return null}};Df.exports=Qk});var Bo=T((zL,$f)=>{"use strict";var Zk=q(),Mf=en(),{ANY:e_}=Mf,t_=fe(),r_=rn(),Of=Zr(),Lf=jo(),n_=Ho(),o_=Fo(),i_=(t,e,r,n)=>{t=new Zk(t,n),e=new t_(e,n);let o,i,s,a,l;switch(r){case">":o=Of,i=n_,s=Lf,a=">",l=">=";break;case"<":o=Lf,i=o_,s=Of,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(r_(t,e,n))return!1;for(let c=0;c<e.set.length;++c){let d=e.set[c],u=null,f=null;if(d.forEach(m=>{m.semver===e_&&(m=new Mf(">=0.0.0")),u=u||m,f=f||m,o(m.semver,u.semver,n)?u=m:s(m.semver,f.semver,n)&&(f=m)}),u.operator===a||u.operator===l||(!f.operator||f.operator===a)&&i(t,f.semver))return!1;if(f.operator===l&&s(t,f.semver))return!1}return!0};$f.exports=i_});var Ff=T((QL,jf)=>{"use strict";var s_=Bo(),a_=(t,e,r)=>s_(t,e,">",r);jf.exports=a_});var Uf=T((ZL,Hf)=>{"use strict";var l_=Bo(),c_=(t,e,r)=>l_(t,e,"<",r);Hf.exports=c_});var Wf=T((e0,Bf)=>{"use strict";var Jf=fe(),u_=(t,e,r)=>(t=new Jf(t,r),e=new Jf(e,r),t.intersects(e,r));Bf.exports=u_});var qf=T((t0,Gf)=>{"use strict";var d_=rn(),p_=me();Gf.exports=(t,e,r)=>{let n=[],o=null,i=null,s=t.sort((d,u)=>p_(d,u,r));for(let d of s)d_(d,e,r)?(i=d,o||(o=d)):(i&&n.push([o,i]),i=null,o=null);o&&n.push([o,null]);let a=[];for(let[d,u]of n)d===u?a.push(d):!u&&d===s[0]?a.push("*"):u?d===s[0]?a.push(`<=${u}`):a.push(`${d} - ${u}`):a.push(`>=${d}`);let l=a.join(" || "),c=typeof e.raw=="string"?e.raw:String(e);return l.length<c.length?l:e}});var Qf=T((r0,zf)=>{"use strict";var Kf=fe(),wa=en(),{ANY:ga}=wa,ya=rn(),Sa=me(),m_=(t,e,r={})=>{if(t===e)return!0;t=new Kf(t,r),e=new Kf(e,r);let n=!1;e:for(let o of t.set){for(let i of e.set){let s=h_(o,i,r);if(n=n||s!==null,s)continue e}if(n)return!1}return!0},f_=[new wa(">=0.0.0-0")],Vf=[new wa(">=0.0.0")],h_=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===ga){if(e.length===1&&e[0].semver===ga)return!0;r.includePrerelease?t=f_:t=Vf}if(e.length===1&&e[0].semver===ga){if(r.includePrerelease)return!0;e=Vf}let n=new Set,o,i;for(let m of t)m.operator===">"||m.operator===">="?o=Xf(o,m,r):m.operator==="<"||m.operator==="<="?i=Yf(i,m,r):n.add(m.semver);if(n.size>1)return null;let s;if(o&&i){if(s=Sa(o.semver,i.semver,r),s>0)return null;if(s===0&&(o.operator!==">="||i.operator!=="<="))return null}for(let m of n){if(o&&!ya(m,String(o),r)||i&&!ya(m,String(i),r))return null;for(let S of e)if(!ya(m,String(S),r))return!1;return!0}let a,l,c,d,u=i&&!r.includePrerelease&&i.semver.prerelease.length?i.semver:!1,f=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1;u&&u.prerelease.length===1&&i.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let m of e){if(d=d||m.operator===">"||m.operator===">=",c=c||m.operator==="<"||m.operator==="<=",o){if(f&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===f.major&&m.semver.minor===f.minor&&m.semver.patch===f.patch&&(f=!1),m.operator===">"||m.operator===">="){if(a=Xf(o,m,r),a===m&&a!==o)return!1}else if(o.operator===">="&&!m.test(o.semver))return!1}if(i){if(u&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===u.major&&m.semver.minor===u.minor&&m.semver.patch===u.patch&&(u=!1),m.operator==="<"||m.operator==="<="){if(l=Yf(i,m,r),l===m&&l!==i)return!1}else if(i.operator==="<="&&!m.test(i.semver))return!1}if(!m.operator&&(i||o)&&s!==0)return!1}return!(o&&c&&!i&&s!==0||i&&d&&!o&&s!==0||f||u)},Xf=(t,e,r)=>{if(!t)return e;let n=Sa(t.semver,e.semver,r);return n>0?t:n<0||e.operator===">"&&t.operator===">="?e:t},Yf=(t,e,r)=>{if(!t)return e;let n=Sa(t.semver,e.semver,r);return n<0?t:n>0||e.operator==="<"&&t.operator==="<="?e:t};zf.exports=m_});var rh=T((n0,th)=>{"use strict";var ba=rr(),Zf=tr(),g_=q(),eh=na(),y_=ct(),w_=_m(),S_=Rm(),b_=Cm(),E_=Im(),k_=Nm(),__=Lm(),T_=$m(),R_=Fm(),v_=me(),x_=Bm(),C_=Gm(),P_=$o(),A_=Xm(),I_=zm(),D_=Zr(),N_=jo(),O_=sa(),L_=aa(),M_=Fo(),$_=Ho(),j_=la(),F_=af(),H_=cf(),U_=en(),J_=fe(),B_=rn(),W_=Tf(),G_=vf(),q_=Cf(),K_=If(),V_=Nf(),X_=Bo(),Y_=Ff(),z_=Uf(),Q_=Wf(),Z_=qf(),eT=Qf();th.exports={parse:y_,valid:w_,clean:S_,inc:b_,diff:E_,major:k_,minor:__,patch:T_,prerelease:R_,compare:v_,rcompare:x_,compareLoose:C_,compareBuild:P_,sort:A_,rsort:I_,gt:D_,lt:N_,eq:O_,neq:L_,gte:M_,lte:$_,cmp:j_,coerce:F_,truncate:H_,Comparator:U_,Range:J_,satisfies:B_,toComparators:W_,maxSatisfying:G_,minSatisfying:q_,minVersion:K_,validRange:V_,outside:X_,gtr:Y_,ltr:z_,intersects:Q_,simplifyRange:Z_,subset:eT,SemVer:g_,re:ba.re,src:ba.src,tokens:ba.t,SEMVER_SPEC_VERSION:Zf.SEMVER_SPEC_VERSION,RELEASE_TYPES:Zf.RELEASE_TYPES,compareIdentifiers:eh.compareIdentifiers,rcompareIdentifiers:eh.rcompareIdentifiers}});function Ya(){return"0.99.11"}function og(t){return/^\d/.test(t)}function ag(t,e){if(!og(t)||!og(e))return!1;let r=i=>i.split(".").map(s=>Number.parseInt(s,10)||0),n=r(t),o=r(e);for(let i=0;i<Math.max(n.length,o.length);i++){let s=n[i]??0,a=o[i]??0;if(s!==a)return s>a}return!1}function mn(t,e=lR){return new Promise(r=>{let n=Buffer.alloc(0),o=!1,i=c=>{o||(o=!0,clearTimeout(l),t.removeListener("data",s),t.removeListener("close",a),t.removeListener("error",a),r(c))},s=c=>{n=Buffer.concat([n,c]);let d=n.indexOf(10);if(d===-1){n.length>cR&&i(void 0);return}i({line:n.subarray(0,d).toString("utf8"),rest:n.subarray(d+1)})},a=()=>i(void 0),l=setTimeout(()=>i(void 0),e);l.unref?.(),t.on("data",s),t.once("close",a),t.once("error",a)})}function lg(t,e){return(0,pr.join)((0,ig.tmpdir)(),`.jolli-${t}-${e}`)}function oi(t){return`${JSON.stringify(t)}
`}var Xa,ig,pr,sg,Va,lR,cR,ii=w(()=>{"use strict";Xa=require("node:fs"),ig=require("node:os"),pr=require("node:path"),sg=require("node:url");ne();lR=1e4,cR=4096});function pR(t){let e=(0,vt.join)((0,vt.dirname)((0,Qa.fileURLToPath)(t)),uR);return(0,za.existsSync)(e)?e:void 0}function Za(t,e=process.argv[1],r=process.execArgv){let n=pR(t);if(n)return{entry:n,nodeArgs:[]};let o=(0,vt.dirname)((0,Qa.fileURLToPath)(t)),i=(0,vt.join)((0,vt.dirname)(o),dR);if(e?.endsWith(".ts")&&(0,za.existsSync)(i))return{entry:i,nodeArgs:r}}var za,vt,Qa,uR,dR,cg=w(()=>{"use strict";za=require("node:fs"),vt=require("node:path"),Qa=require("node:url"),uR="Cli.js",dR="Cli.ts"});var I$,D$,N$,ug=w(()=>{"use strict";oe();qt();le();h();at();St();I$=p("Backup"),D$=2*1024*1024*1024,N$=1440*60*1e3});function hg(t){return lg("global",t)}function mR(t=(0,pg.homedir)()){return(0,dg.createHash)("sha256").update(vn(t,"win32")).digest("hex").slice(0,16)}function fn(t={}){if((t.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${mR(t.home)}`;let r=t.uid??process.getuid?.()??0;return(0,mg.join)(hg(r),"daemon.sock")}function tl(t){let e;try{e=JSON.parse(t)}catch{return}if(typeof e!="object"||e===null)return;let{t:r,protocol:n,version:o,pid:i,startedAt:s}=e;if(!(r!=="hello"||n!==fg)&&!(typeof o!="string"||typeof i!="number"||typeof s!="number"))return{t:"hello",protocol:n,version:o,pid:i,startedAt:s}}var dg,pg,mg,fg,el,rl=w(()=>{"use strict";dg=require("node:crypto"),pg=require("node:os"),mg=require("node:path");ii();ne();fg=1,el=300});var F$,gg=w(()=>{"use strict";h();F$=p("TaskScheduler")});var Q$,nl,Z$,yg=w(()=>{"use strict";ii();ug();h();rl();gg();Q$=p("GlobalDaemon"),nl="global-daemon",Z$=3600*1e3});var bg={};ui(bg,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>il,ensureGlobalDaemon:()=>yR,probeGlobalDaemon:()=>bR,retireGlobalDaemon:()=>SR,shouldSkipGlobalDaemon:()=>sl,triggerEnsureGlobalDaemon:()=>wR});function sl(t){return t!==null&&hR.has(t)}function al(t){return new Promise(e=>{let r=!1,n=(0,Sg.connect)(t),o=s=>{r||(r=!0,clearTimeout(i),n.removeAllListeners("connect"),s.socket===void 0&&n.destroy(),e(s))},i=setTimeout(()=>o({socket:void 0}),fR);i.unref?.(),n.once("connect",()=>o({socket:n})),n.on("error",s=>{if(r){Ee.warn("global daemon socket error after connect: %s",_(s));return}o({socket:void 0,code:s.code})})})}async function gR(t){if(!t.startsWith("\\\\.\\pipe\\"))try{await(0,wg.unlink)(t)}catch{}}async function yR(t={}){try{if(sl(t.command??null))return"skipped-excluded-command";if(!st(t.nodeVersion??process.versions.node))return"skipped-unsupported-node";let e=t.socketPath??fn(),{socket:r,code:n}=await al(e);if(!r)return n==="ECONNREFUSED"&&await gR(e),(t.spawnDaemon??ER)(e),"spawned";try{let o=await mn(r,t.helloTimeoutMs??el),i=o?tl(o.line):void 0;if(!i)return"already-running";let s=t.ownVersion??Ya();return ag(s,i.version)?(r.write(oi({t:"retire"})),Ee.info("retiring global daemon pid %d (v%s < v%s)",i.pid,i.version,s),"retired-incumbent"):"already-running"}finally{r.end()}}catch(e){return Ee.warn("could not ensure the global daemon: %s",_(e)),"failed"}}function wR(t={}){try{return sl(t.command??null)||!st(t.nodeVersion??process.versions.node)?!1:(kR(t.socketPath),!0)}catch(e){return Ee.warn("could not trigger the global daemon ensure helper: %s",_(e)),!1}}async function SR(t={}){try{let{socket:e}=await al(t.socketPath??fn());return e?(await mn(e,el),e.write(oi({t:"retire"})),e.end(),!0):!1}catch(e){return Ee.warn("could not retire the global daemon: %s",_(e)),!1}}async function bR(t){try{let{socket:e}=await al(t??fn());if(!e)return;try{let r=await mn(e,5e3);return r?tl(r.line):void 0}finally{e.end()}}catch{return}}function ER(t){let e=Za(__jmImportMetaUrl);if(!e){Ee.warn("Cannot locate the CLI entry to spawn the global daemon");return}let r=Ze(process.execPath,[...e.nodeArgs,e.entry,nl,"--socket",t],{detached:!0,stdio:"ignore",cwd:(0,ol.homedir)()});r.on("error",n=>Ee.warn("global daemon failed to spawn: %s",_(n))),r.unref(),Ee.info("spawned global daemon (pid %d)",r.pid??-1)}function kR(t){let e=Za(__jmImportMetaUrl);if(!e){Ee.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let r=[...e.nodeArgs,e.entry,il];t&&r.push("--socket",t);let n=Ze(process.execPath,r,{detached:!0,stdio:"ignore",cwd:(0,ol.homedir)()});n.on("error",o=>Ee.warn("global daemon ensure helper failed to start: %s",_(o))),n.unref(),Ee.info("spawned global daemon ensure helper (pid %d)",n.pid??-1)}var wg,Sg,ol,Ee,il,fR,hR,Eg=w(()=>{"use strict";wg=require("node:fs/promises"),Sg=require("node:net"),ol=require("node:os");ii();at();h();cg();we();yg();rl();Ee=p("EnsureGlobalDaemon"),il="global-daemon-ensure",fR=200,hR=new Set([nl,il,"mcp","mcp-serve","daemon","uninstall","disable"])});var GR={};ui(GR,{buildCursorBootstrapOutput:()=>Dg,main:()=>Lg,resolveCursorProjectDir:()=>Ng,runCursorPluginBootstrap:()=>Og});module.exports=Wg(GR);var Ig=require("node:os"),mr=require("node:path"),dl=require("node:url");var yr=require("node:fs");var bl=require("node:path"),Gg="JOLLI_LOCAL_AGENT_CHILD",qg=".jolli-local-agent-child";function kn(t=process.env,e){return t[Gg]==="1"?!0:e!==void 0&&(0,yr.existsSync)((0,bl.join)(e,qg))}oe();Pe();ne();var Ly=["/.codex/plugins/","/.claude/plugins/","/.cursor/plugins/"];function Ql(t){let e=et(t);return Ly.some(r=>e.includes(r))}nt();le();var U=require("node:fs/promises"),Jt=require("node:path");ie();oe();h();var Cw='"$HOME/.jolli/jollimemory/run-hook"';function Ue(t,e=""){let r=e?` ${e}`:"";return`${Cw} ${t}${r}`}var Yi=["run-hook","StopHook","jollimemory-hooks.jar"],Jn=["run-hook","SessionStartHook"],Bn=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"];function Pr(t,e){let r=typeof e=="string"?[e]:e;return t.some(n=>{let o=n.hooks;return Array.isArray(o)?o.some(i=>typeof i.command=="string"&&r.some(s=>i.command.includes(s))):!1})}function ht(t,e){let r=typeof e=="string"?[e]:e,n=[];for(let o of t){let i=o.hooks;if(!Array.isArray(i)){n.push(o);continue}let s=i.filter(a=>!(typeof a.command=="string"&&r.some(l=>a.command.includes(l))));s.length>0&&n.push({...o,hooks:s})}return n}function zi(t){return Pr(t,Yi)}function Wn(t){return ht(t,Yi)}var Gn=p("GitHookInstaller"),Ut="# >>> JolliMemory post-commit hook >>>",Qi="# <<< JolliMemory post-commit hook <<<",qn="# >>> JolliMemory post-rewrite hook >>>",tu="# <<< JolliMemory post-rewrite hook <<<",Kn="# >>> JolliMemory prepare-commit-msg hook >>>",ru="# <<< JolliMemory prepare-commit-msg hook <<<",Vn="# >>> JolliMemory post-merge hook >>>",nu="# <<< JolliMemory post-merge hook <<<",Xn="# >>> JolliMemory pre-push hook >>>",ou="# <<< JolliMemory pre-push hook <<<";async function iu(t){let e=await $t(t),r=(0,Jt.join)(e,"post-commit"),n=Ue("post-commit"),o=[Ut,n,Qi].join(`
`),i,s="";try{if(s=await(0,U.readFile)(r,"utf-8"),s.includes(Ut)){let l=new RegExp(`\\n*${ot(Ut)}[\\s\\S]*?${ot(Qi)}\\n*`,"g"),d=`${s.replace(l,`
`).trimEnd()}

${o}
`;return s===d?(await Qn(r),{path:r}):(await P(r,d),await(0,U.chmod)(r,493),{path:r})}i="Existing post-commit hook found \u2014 Jolli Memory section appended",Gn.warn(i)}catch{}let a;s?a=`${s}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,U.mkdir)(e,{recursive:!0}),await P(r,a);try{await(0,U.chmod)(r,493)}catch{}return Gn.info("Git post-commit hook installed"),{warning:i,path:r}}async function su(t){let e=Ue("post-rewrite",'"$1"'),r=[qn,e,tu].join(`
`);return Yn(t,"post-rewrite",r,qn)}async function au(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${e} ]; then ${e} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),n=[Kn,r,ru].join(`
`);return Yn(t,"prepare-commit-msg",n,Kn)}async function lu(t){let e=Ue("post-merge"),r=[Vn,e,nu].join(`
`);return Yn(t,"post-merge",r,Vn)}async function cu(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_pre_push_previous_status=$?",`if [ -x ${e} ]; then ${e} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),n=[Xn,r,ou].join(`
`);return Yn(t,"pre-push",n,Xn)}async function Yn(t,e,r,n){let o=r.slice(r.lastIndexOf(`
`)+1),i=await $t(t),s=(0,Jt.join)(i,e),a,l="";try{if(l=await(0,U.readFile)(s,"utf-8"),l.includes(n)){let d=new RegExp(`\\n*${ot(n)}[\\s\\S]*?${ot(o)}\\n*`,"g"),f=`${l.replace(d,`
`).trimEnd()}

${r}
`;return l===f?(await Qn(s),{path:s}):(await P(s,f),await(0,U.chmod)(s,493),{path:s})}a=`Existing ${e} hook found \u2014 Jolli Memory section appended`,Gn.warn(a)}catch{}let c;l?c=`${l}

${r}
`:c=`#!/bin/sh

${r}
`,await(0,U.mkdir)(i,{recursive:!0}),await P(s,c);try{await(0,U.chmod)(s,493)}catch{}return Gn.info("Git %s hook installed",e),{warning:a,path:s}}async function uu(t){let e;try{let i=await $t(t);e=(0,Jt.join)(i,"post-commit")}catch{return{}}let r;try{r=await(0,U.readFile)(e,"utf-8")}catch{return{}}if(!r.includes(Ut))return{};let n=new RegExp(`\\n*${ot(Ut)}[\\s\\S]*?${ot(Qi)}\\n*`,"g"),o=r.replace(n,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:i}=await import("node:fs/promises");await i(e,{force:!0})}else await P(e,o),await Qn(e);return{}}async function du(t){await zn(t,"post-rewrite",qn,tu)}async function pu(t){await zn(t,"prepare-commit-msg",Kn,ru)}async function mu(t){await zn(t,"post-merge",Vn,nu)}async function fu(t){await zn(t,"pre-push",Xn,ou)}async function zn(t,e,r,n){let o;try{o=await $t(t)}catch{return}let i=(0,Jt.join)(o,e),s;try{s=await(0,U.readFile)(i,"utf-8")}catch{return}if(!s.includes(r))return;let a=new RegExp(`\\n*${ot(r)}[\\s\\S]*?${ot(n)}\\n*`,"g"),l=s.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(i,{force:!0})}else await P(i,l),await Qn(i)}async function Zi(t){return hu(t,"post-commit",Ut)}async function hu(t,e,r){try{let n=await $t(t),o=(0,Jt.join)(n,e);return(await(0,U.readFile)(o,"utf-8")).includes(r)?process.platform==="win32"?!0:((await(0,U.stat)(o)).mode&73)!==0:!1}catch{return!1}}function ot(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function Qn(t){try{((await(0,U.stat)(t)).mode&73)===0&&await(0,U.chmod)(t,493)}catch{}}var ri=require("node:fs/promises"),Rt=require("node:path"),Zh=require("node:url");var es=require("node:fs"),gu=require("node:fs/promises"),ts=require("node:os"),Ar=require("node:path");h();Ie();var pC=p("AntigravityDetector"),yu=["antigravity","antigravity-ide","antigravity-cli"];function wu(t=(0,ts.homedir)()){let e=[];for(let r of yu){let n=(0,Ar.join)(t,".gemini",r),o=(0,Ar.join)(n,"conversations");(0,es.existsSync)(o)&&e.push({variant:r,root:n,conversationsDir:o,brainDir:(0,Ar.join)(n,"brain")})}return e}async function Pw(t){for(let e of wu(t))try{if((await(0,gu.readdir)(e.conversationsDir)).some(r=>r.endsWith(".db")))return!0}catch{}return!1}async function Su(t=(0,ts.homedir)()){return await Pw(t)?!0:yu.some(e=>(0,es.existsSync)((0,Ar.join)(t,".gemini",e)))}h();var Zn="mcp__";function Ir(t){return{name:t,kind:"builtin",calls:0}}function rs(t){return{name:t,kind:"skill",calls:0}}function Bt(t,e){return{name:e?`${t}.${e}`:t,kind:"mcp",server:t,calls:0}}function eo(t){if(!t.startsWith(Zn))return Ir(t);let e=t.slice(Zn.length),r=e.indexOf("__");return r===-1?Bt(e,""):Bt(e.slice(0,r),e.slice(r+2))}function bu(t,e){if(e===void 0||e.length===0)return Ir(t);if(!e.startsWith(Zn))return Bt(e,t);let r=e.slice(Zn.length).split("__"),n=r[r.length-1]||r[0]||e;return Bt(n,t)}function Aw(t,e){let r=Math.max(t.lastCallAtMs??Number.NEGATIVE_INFINITY,e.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(r)?{lastCallAtMs:r}:{}}var yt=class{constructor(){this.byKey=new Map;this.seen=new Set}add(e,r=1){let n=`${e.kind}:${e.name}`,o=this.byKey.get(n);if(!o){this.byKey.set(n,{...e,calls:r});return}this.byKey.set(n,{...o,calls:o.calls+r,...Aw(o,e)})}addOnce(e,r){if(e!==void 0){if(this.seen.has(e))return;this.seen.add(e)}this.add(r)}hasSeen(e){return this.seen.has(e)}values(){return[...this.byKey.values()]}};h();h();function is(t){if(t===void 0)return;let e=Date.parse(t);return Number.isFinite(e)?e:void 0}function Eu(...t){let e=t.filter(r=>r!==void 0);return e.length>0?{lastCallAtMs:Math.max(...e)}:{}}var Ru=p("TranscriptParser"),to=class{parseLine(e,r){return xu(e,r)}parseUsageTokens(e,r){let n=Tu(e);return n?{input:n.input,output:n.output,cached:n.cached,...n.id&&{dedupKey:n.id}}:{input:0,output:0,cached:0}}parseUsageByModel(e){let r=new Map,n=new Set;for(let o of e){let i=Tu(o);if(!i)continue;if(i.id){if(n.has(i.id))continue;n.add(i.id)}let s=r.get(i.model);s?r.set(i.model,{...s,input:s.input+i.input,output:s.output+i.output,cached:s.cached+i.cached}):r.set(i.model,{model:i.model,provider:"anthropic",input:i.input,output:i.output,cached:i.cached})}return[...r.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(e){let r=new yt;for(let n of e){let o;try{o=JSON.parse(n)}catch{continue}let i=o?.message?.content;if(!Array.isArray(i))continue;let s=is(this.parseTimestamp(n));for(let a of i){let l=a;l.type!=="tool_use"||typeof l.name!="string"||r.addOnce(typeof l.id=="string"?l.id:void 0,{...l.name==="Skill"&&typeof l.input?.skill=="string"?rs(l.input.skill):eo(l.name),...s!==void 0&&{lastCallAtMs:s}})}}return r.values()}parseTimestamp(e,r){try{let n=JSON.parse(e);return typeof n.timestamp=="string"?n.timestamp:void 0}catch{return}}},ns=class{parseLine(e,r){try{let n=JSON.parse(e),o=typeof n.timestamp=="string"?n.timestamp:void 0;if(n.type!=="event_msg")return null;let s=n.payload;if(!s||typeof s!="object")return null;let a=s.type;return a==="user_message"?Ow(s,o):a==="agent_message"?Lw(s,o):null}catch(n){return Ru.debug("Failed to parse Codex transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new Map,n=[];for(let i of e){let s;try{s=JSON.parse(i)}catch{continue}let a=s?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!Iw.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,d=typeof l.invocation?.server=="string"?l.invocation.server:"",u;if(c!==void 0)u=d?Bt(d,c):Ir(c);else if(typeof l.name=="string"&&l.name.length>0)u=bu(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let f=s.timestamp,m=is(typeof f=="string"?f:void 0),S={...u,...m!==void 0&&{lastCallAtMs:m}},R=typeof l.call_id=="string"?l.call_id:void 0;if(R===void 0){n.push(S);continue}let b=r.get(R),E=b===void 0||b.kind!=="mcp"&&S.kind==="mcp"?S:b;r.set(R,{...E,...b?Eu(b.lastCallAtMs,S.lastCallAtMs):Eu(S.lastCallAtMs)})}let o=new yt;for(let i of[...r.values(),...n])o.add(i);return o.values()}},Iw=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),os=class{parseLine(e,r){try{let n=JSON.parse(e),o=n.type,i=_u(n);if(o==="turn.prompt"){let a=vu(n.input)?.trim();return a?{role:"human",content:a,timestamp:i}:null}let s=Nw(n);if(s&&s.type==="text"){let a=typeof s.text=="string"?s.text.trim():"";return a?{role:"assistant",content:a,timestamp:i}:null}return null}catch(n){return Ru.debug("Failed to parse Kimi transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new yt;for(let n of e){if(!n.includes(ku))continue;let o;try{o=JSON.parse(n)}catch{continue}if(o.type!==ku)continue;let i=o.event;if(i===null||typeof i!="object"||i.type!=="tool.call"||typeof i.name!="string")continue;let s=is(this.parseTimestamp(n));r.addOnce(typeof i.toolCallId=="string"?i.toolCallId:void 0,{...i.name===Dw&&typeof i.args?.skill=="string"?rs(i.args.skill):eo(i.name),...s!==void 0&&{lastCallAtMs:s}})}return r.values()}parseTimestamp(e,r){try{return _u(JSON.parse(e))}catch{return}}},ku="context.append_loop_event",Dw="Skill";function Nw(t){if(t.type==="context.append_loop_event"){let e=t.event;return e?.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}return t.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}function _u(t){let e=t.time??t.timestamp;return typeof e=="number"&&Number.isFinite(e)?new Date(e).toISOString():typeof e=="string"&&e.length>0?e:void 0}function vu(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t){let n=vu(r);n&&e.push(n)}return e.length>0?e.join(`
`):null}if(t!==null&&typeof t=="object"){let e=t;if((e.type==="text"||e.type===void 0)&&typeof e.text=="string"&&e.text.length>0)return e.text}return null}function Ow(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"human",content:r.trim(),timestamp:e}}function Lw(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"assistant",content:r.trim(),timestamp:e}}function Tu(t){try{return $w(JSON.parse(t))}catch{return null}}function Mw(t){return t.startsWith("<")&&t.endsWith(">")}function $w(t){let e=t,r=e?.message?.usage??e?.usage;if(!r||typeof r!="object")return null;let n=s=>typeof r[s]=="number"?r[s]:0,o=e?.message?.model??e?.model,i=e?.message?.id;return{id:typeof i=="string"?i:"",model:typeof o=="string"&&!Mw(o)?o:"",input:n("input_tokens"),output:n("output_tokens"),cached:n("cache_creation_input_tokens")}}var jw=new to,Fw=new ns,Hw=new os;function Uw(t){switch(t){case"codex":return Fw;case"kimi":return Hw;case"claude":return jw}}var Jw=["claude","codex","kimi"],Bw=["gemini","opencode","antigravity","cursor-cli","cline-cli","devin"],wC=new Set([...Jw.filter(t=>Uw(t).parseToolUse!==void 0),...Bw]);var ss=p("TranscriptReader");var Ww=["Base directory for this skill:","[Request interrupted by user"],Gw=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function xu(t,e){try{let r=JSON.parse(t);if(r.isCompactSummary===!0)return ss.debug("Skipping compaction summary at line %d",e),null;if(!r.message||typeof r.message!="object")return null;let n=r.message,o=n.role,i=typeof r.timestamp=="string"?r.timestamp:void 0;if(o==="user")return qw(n,i,e);if(o==="assistant"){let s=Cu(n.content)?.trim();return s?{role:"assistant",content:s,timestamp:i}:null}return null}catch(r){return ss.debug("Failed to parse transcript line %d: %s",e,r.message),null}}function qw(t,e,r){let n=Cu(t.content);if(!n)return null;let o=Kw(n);return o.length===0?null:Ww.some(i=>o.startsWith(i))?(ss.debug("Skipping filtered user message at line %d",r),null):{role:"human",content:o,timestamp:e}}function Kw(t){return t.replace(Gw,"").trim()}function Cu(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t)if(r!==null&&typeof r=="object"){let n=r;n.type==="text"&&typeof n.text=="string"&&e.push(n.text)}return e.length>0?e.join(`
`):null}return null}oe();ne();Ie();var $C=p("AntigravityDiscoverer"),jC=2880*60*1e3;var Pu=require("node:fs/promises"),no=require("node:os"),as=require("node:path");function Vw(t=(0,no.homedir)()){return(0,as.join)(t,".cline","data")}function Au(t=(0,no.homedir)()){return(0,as.join)(Vw(t),"sessions")}async function Iu(t=(0,no.homedir)()){try{return await(0,Pu.access)(Au(t)),!0}catch{return!1}}h();ne();var GC=p("ClineCliDiscoverer"),qC=2880*60*1e3;var ls=require("node:fs/promises"),Or=require("node:os"),io=require("node:path");var oo=require("node:os"),Nr=require("node:path");h();var XC=p("VscodeWorkspaceLocator"),Du=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function We(t,e=(0,oo.homedir)()){switch((0,oo.platform)()){case"darwin":return(0,Nr.join)(e,"Library","Application Support",t);case"win32":return(0,Nr.join)(process.env.APPDATA??(0,Nr.join)(e,"AppData","Roaming"),t);default:return(0,Nr.join)(e,".config",t)}}var Xw="saoudrizwan.claude-dev";function Yw(t,e){return(0,io.join)(We(t,e),"User","globalStorage",Xw)}function Lr(t=(0,Or.homedir)()){return Du.map(e=>Yw(e,t))}function so(t){return(0,io.join)(t,"settings","cline_mcp_settings.json")}async function Nu(t=(0,Or.homedir)()){for(let e of Lr(t))try{return await(0,ls.access)((0,io.join)(e,"state","taskHistory.json")),!0}catch{}return!1}async function cs(t=(0,Or.homedir)()){let e=[];for(let r of Lr(t))try{await(0,ls.access)(so(r)),e.push(r)}catch{}return e}async function Ou(t=(0,Or.homedir)()){return(await cs(t)).length>0}h();ne();var rP=p("ClineDiscoverer"),nP=2880*60*1e3;var us=require("node:fs/promises"),Lu=require("node:os"),ds=require("node:path");h();var aP=p("CodexDiscoverer"),lP=2880*60*1e3,zw=".codex";async function ps(){let t=(0,ds.join)((0,Lu.homedir)(),zw);try{return(await(0,us.stat)(t)).isDirectory()}catch{return!1}}var $u=require("node:fs/promises"),ju=require("node:os"),ms=require("node:path");h();var Qw=p("CopilotChatDetector");function Zw(t){return(0,ms.join)(We("Code",t),"User","globalStorage","github.copilot-chat")}function eS(t=(0,ju.homedir)()){return(0,ms.join)(t,".copilot","session-state")}async function Mu(t){try{return(await(0,$u.stat)(t)).isDirectory()}catch(e){let r=e.code;return r!=="ENOENT"&&Qw.warn("Copilot Chat probe stat failed for %s (%s): %s",t,r??"unknown",e.message),!1}}async function Fu(){let[t,e]=await Promise.all([Mu(Zw()),Mu(eS())]);return t||e}h();var gP=p("CopilotChatDiscoverer"),yP=2880*60*1e3;var Uu=require("node:fs/promises"),Ju=require("node:os"),Bu=require("node:path");h();Ie();var Wu=p("CopilotDetector");function Gu(){return(0,Bu.join)((0,Ju.homedir)(),".copilot","session-store.db")}async function qu(){return Be()?fs():(Wu.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Je.major,Je.minor),!1)}async function fs(){let t=Gu();try{return(await(0,Uu.stat)(t)).isFile()}catch(e){let r=e.code;return r!=="ENOENT"&&Wu.warn("Copilot DB stat failed (%s): %s",r??"unknown",e.message),!1}}h();Ie();var vP=p("CopilotDiscoverer"),xP=2880*60*1e3;var ao=require("node:fs/promises"),lo=require("node:os"),hs=require("node:path");h();ne();var IP=p("CursorCliDiscoverer"),DP=2880*60*1e3;function rS(t=(0,lo.homedir)()){return(0,hs.join)(t,".cursor")}function nS(t=(0,lo.homedir)()){return(0,hs.join)(rS(t),"chats")}async function Ku(t=(0,lo.homedir)()){try{return(await(0,ao.stat)(nS(t))).isDirectory()}catch{return!1}}var Vu=require("node:fs/promises"),Xu=require("node:path");h();Ie();var oS=p("CursorDetector");function Yu(t){return(0,Xu.join)(We("Cursor",t),"User","globalStorage","state.vscdb")}async function zu(){return Be()?gs():(oS.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function gs(){let t=Yu();try{return(await(0,Vu.stat)(t)).isFile()}catch{return!1}}h();Ie();var JP=p("CursorDiscoverer"),BP=2880*60*1e3;var ys=require("node:fs/promises"),Qu=require("node:os"),Wt=require("node:path");h();Ie();var VP=p("DevinDiscoverer"),XP=2880*60*1e3;function Zu(t){let e=t??(0,Qu.homedir)();if(process.platform==="win32")return(0,Wt.join)(process.env.APPDATA??(0,Wt.join)(e,"AppData","Roaming"),"devin","cli");let r=process.env.XDG_DATA_HOME,n=r&&r.length>0?r:(0,Wt.join)(e,".local","share");return(0,Wt.join)(n,"devin","cli")}function iS(t){return(0,Wt.join)(Zu(t),"sessions.db")}async function sS(){try{return(await(0,ys.stat)(iS())).isFile()}catch{return!1}}async function ed(){if(await sS())return!0;try{return(await(0,ys.stat)(Zu())).isDirectory()}catch{return!1}}var td=require("node:fs/promises"),rd=require("node:os"),nd=require("node:path");h();var aS=p("GeminiDetector"),lS=".gemini";async function ws(){let t=(0,nd.join)((0,rd.homedir)(),lS);try{return(await(0,td.stat)(t)).isDirectory()}catch{return aS.debug("Gemini directory not found: %s",t),!1}}oe();qt();var po=require("node:fs/promises"),xd=require("node:os"),_s=require("node:path");h();var gA=p("KimiDiscoverer"),yA=2880*60*1e3,SS=".kimi-code";function mo(){return process.env.KIMI_CODE_HOME||(0,_s.join)((0,xd.homedir)(),SS)}async function Cd(){let t=mo();try{return(await(0,po.stat)(t)).isDirectory()}catch{return!1}}Pe();le();var fo={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},bA=Object.keys(fo);function ho(t){return t===void 0?void 0:fo[t]?.localAgentTool}function Ts(t,e){return(t===void 0?void 0:fo[t]?.skillInvocation)?.replace("<name>",e)}function Pd(t){return(t===void 0?void 0:fo[t]?.host)??"claude"}async function Ad(t,e){let r=ho(t);return r===void 0?null:e.localAgentTool===r&&e.aiProvider!==void 0?{tool:r,changedTool:!1,seededProvider:!1}:Un(n=>{let o=n.localAgentTool,i=o!==r,s=n.aiProvider===void 0;return!i&&!s?{update:null,result:{tool:r,changedTool:!1,seededProvider:!1}}:{update:s?{aiProvider:"local-agent",localAgentTool:r}:{localAgentTool:r},result:{tool:r,changedTool:i,previousTool:o,seededProvider:s}}})}var Mr={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop"},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app"},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function De(t){return Mr[t]?.label??"Local agent"}function Id(t){return Mr[t]?.loginHint??"Sign in to your local agent CLI."}function Dd(t){let e=Mr[t]?.separateDesktopApp;return e===void 0?null:`(This login is SEPARATE from ${e} \u2014 ${e} stays signed in on its own.)`}var Nd=require("node:fs/promises"),Od=require("node:os"),Rs=require("node:path");h();Ie();var bS=p("OpenCodeDiscoverer"),vA=2880*60*1e3;function ES(){return process.env.XDG_DATA_HOME||(0,Rs.join)((0,Od.homedir)(),".local","share")}function kS(){return(0,Rs.join)(ES(),"opencode","opencode.db")}async function Ld(){return Be()?vs():(bS.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Je.major,Je.minor),!1)}async function vs(){let t=kS();try{return(await(0,Nd.stat)(t)).isFile()}catch{return!1}}h();ie();Pe();le();var NA=p("PushPendingStore");var OA=10080*60*1e3;var _S=300*1e3,LA=Math.floor(_S/3);pi();h();we();var BA=p("PushCompensation");h();go();h();qt();var zA=p("KBRepoDiscoverer");h();ie();go();Pe();le();var iI=p("PushControlStore");nt();yo();h();ie();var vS={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms. MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var pI=new Set(Object.keys(vS));var LI=p("PushControl");nt();h();oe();Pe();In();bo();St();h();oe();nt();var Ke=class{constructor(e){this.cwd=e;this.kind="orphan-branch"}async readFile(e){return wi(ge,e,this.cwd)}async batchReadFiles(e){return Si(ge,e,this.cwd)}async writeFiles(e,r){if(ye())return;if(await Rr(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Error("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(bo(),ep));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Error("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Ml(ge,e,r,this.cwd)}async listFiles(e){return[...await bi(ge,e,this.cwd)]}async exists(){return gi(ge,this.cwd)}async ensure(){await yi(ge,this.cwd)}};var Mp=require("node:zlib");at();var Op=require("node:zlib");Cr();function Eo(t){return t.version>=4}function qS(t){return[...t??[]].reverse()}function zt(t){let e=qS(t.children).flatMap(zt),r=(t.topics??[]).map(n=>({...n,commitDate:t.commitDate,generatedAt:t.generatedAt}));return[...e,...r]}function tp(t){let e=t.stats,r=e?.filesChanged??0,n=e?.insertions??0,o=e?.deletions??0;for(let i of t.children??[]){let s=tp(i);r+=s.filesChanged,n+=s.insertions,o+=s.deletions}return{filesChanged:r,insertions:n,deletions:o}}function Br(t){return t.diffStats?t.diffStats:(t.children?.length??0)>0?tp(t):t.stats??{filesChanged:0,insertions:0,deletions:0}}function $s(t){let e=t.conversationTurns??0,r=(t.children??[]).reduce((n,o)=>n+$s(o),0);return e+r}function js(t){let e=t.conversationTokens??0,r=(t.children??[]).reduce((n,o)=>n+js(o),0);return e+r}function Fs(t){let e=t.conversationTokenBreakdown,r={input:e?.input??0,output:e?.output??0,cached:e?.cached??0};return(t.children??[]).reduce((n,o)=>{let i=Fs(o);return{input:n.input+i.input,output:n.output+i.output,cached:n.cached+i.cached}},{input:r.input,output:r.output,cached:r.cached})}function ko(t){let e=[],r=n=>{if(!n.children?.length)e.push(n);else for(let o of n.children)r(o)};for(let n of t.children??[])r(n);return e}function _o(t){return Eo(t)?(t.topics??[]).map(e=>({...e,commitDate:t.commitDate,generatedAt:t.generatedAt})):zt(t)}function Wr(t){let e=[t.commitHash];for(let r of t.children??[])e.push(...Wr(r));return e}function Qt(t,e){return t.transcripts!==void 0?t.transcripts:Wr(t).filter(r=>e.has(r))}function KS(t){let e=ko(t);return e.length<=1?1:new Set(e.map(n=>new Date(n.generatedAt||n.commitDate).toISOString().substring(0,10))).size}function rp(t){let e=KS(t),r=e===1?"1 day":`${e} days`,n=ko(t);if(n.length<=1)return r;let o=n.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),i=new Date(Math.min(...o)),s=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${r} (${a(i)} \u2014 ${a(s)})`}h();at();oe();h();h();Mi();oe();Pe();In();var np=/-[0-9a-f]{8}$/;Cr();var VS="local-agent-auth";function op(t){return t.summaryError===VS}$n();var XS=new Set(["linear","jira","github"]);function YS(t){return XS.has(t)}function Hs(t){return YS(t.source)?`${t.nativeId} \u2014 ${t.title}`:t.title}function Y(t){return t.generatedAt||t.commitDate}function sp(t){try{return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function Us(t){try{return new Date(t).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return t}}function ip(t){return t.substring(0,10)}function zS(t){return[...t].sort((e,r)=>{let n=ip(e.generatedAt||e.commitDate||""),o=ip(r.generatedAt||r.commitDate||"");if(n!==o)return n>o?-1:1;let i=e.importance==="minor"?1:0,s=r.importance==="minor"?1:0;return i-s})}function ap(t){return String(t+1).padStart(2,"0")}var QS={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};function ZS(t,e){return e==="local-agent"?t.localAgentTool?`Local agent - ${De(t.localAgentTool)}`:"Local agent":QS[e]}function lp(t){let e=new Set,r=o=>{let i=o.llm;i?.source&&e.add(ZS(i,i.source));for(let s of o.children??[])r(s)};r(t);let n=[...e];if(n.length!==0)return n.length===1?n[0]:`mixed: ${n.join(", ")}`}function cp(t){let e=ko(t),r=_o(t);return{topics:zS(r.map((o,i)=>({...o,treeIndex:i}))),sourceNodes:e}}qi();var eb=/^transcripts\/(.+)\.json$/;function Js(t){return eb.exec(t)?.[1]??null}var tb;async function rb(t){let e=await Ro(t);return e.ok?e.storage:(Bs.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",e.reason,t),new Ke(t))}async function nb(t,e){return t??tb??await rb(e)}var Bs=p("SummaryStore"),ob="index.json";function up(t){let e=[];for(let r of t)r.e2eTestGuide&&e.push(...r.e2eTestGuide),r.children&&e.push(...up(r.children));return e}function dp(t){let{e2eTestGuide:e,...r}=t;return r.children?{...r,children:r.children.map(dp)}:r}function pp(t){let e=new Map;for(let r of t){if(r.plans)for(let n of r.plans){let o=n.slug,i=e.get(o);(!i||n.updatedAt>i.updatedAt)&&e.set(o,n)}if(r.children)for(let n of pp(r.children)){let o=e.get(n.slug);(!o||n.updatedAt>o.updatedAt)&&e.set(n.slug,n)}}return[...e.values()]}function mp(t){let{plans:e,...r}=t;return r.children?{...r,children:r.children.map(mp)}:r}function fp(t){let e=new Map;for(let r of t){if(r.notes)for(let n of r.notes){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}if(r.children)for(let n of fp(r.children)){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}}return[...e.values()]}function hp(t){let{notes:e,...r}=t;return r.children?{...r,children:r.children.map(hp)}:r}function gp(t){let{references:e,...r}=t;return r.children?{...r,children:r.children.map(gp)}:r}function yp(t){let e=new Map;for(let r of t){let n=r.references??[];for(let o of n){let i=e.get(o.archivedKey);(!i||o.referencedAt>i.referencedAt)&&e.set(o.archivedKey,o)}if(r.children)for(let o of yp(r.children)){let i=e.get(o.archivedKey);(!i||o.referencedAt>i.referencedAt)&&e.set(o.archivedKey,o)}}return[...e.values()]}function wp(t){let e=[];for(let r of t)e.push(...r.skills??[]),r.children&&e.push(...wp(r.children));return Xc(e)}function Sp(t){let{jolliDocId:e,jolliDocUrl:r,jolliSkillsDocId:n,jolliSkillsDocUrl:o,orphanedDocIds:i,unresolvedOrphanHashes:s,...a}=t;return a.children?{...a,children:a.children.map(Sp)}:a}function bp(t){let e=[];for(let o of t){let i=o.jolliDocUrl;if(o.jolliDocId&&i&&e.push({jolliDocId:o.jolliDocId,jolliDocUrl:i,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let s=bp(o.children);s.winner&&e.push({...s.winner})}}if(e.length===0)return{winner:null,orphanedDocIds:[]};e.sort((o,i)=>new Date(Y(i)).getTime()-new Date(Y(o)).getTime());let r=e[0],n=e.slice(1).map(o=>o.jolliDocId);return{winner:r,orphanedDocIds:n}}function Ep(t){let e=[];for(let r of t??[])r.orphanedDocIds&&e.push(...r.orphanedDocIds),e.push(...Ep(r.children));return e}function kp(t){let e=[];for(let r of t??[])r.unresolvedOrphanHashes&&e.push(...r.unresolvedOrphanHashes),e.push(...kp(r.children));return e}function _p(t){if(t.version>=4)return t;let e=up([t]),r=pp([t]),n=fp([t]),o=yp([t]),i=wp([t]),s=i.map(Vc),a=bp([t]),l=Array.from(new Set([...a.orphanedDocIds,...t.orphanedDocIds??[],...Ep(t.children),...i.flatMap(R=>R.supersededDocIds??[])])),c=Array.from(new Set([...t.unresolvedOrphanHashes??[],...kp(t.children)])),d=ib(t),u=sb(t),f=t.diffStats===void 0&&t.stats!==void 0?Br(t):void 0,{stats:m,...S}=t;return{...S,version:4,topics:d,...u!==void 0?{recap:u}:{},...f!==void 0?{diffStats:f}:{},...e.length>0?{e2eTestGuide:e}:{},...r.length>0?{plans:r}:{},...n.length>0?{notes:n}:{},...o.length>0?{references:o}:{},...s.length>0?{skills:s}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...t.children!==void 0?{children:t.children.map(lb)}:{}}}function Tp(t){let{topics:e,...r}=t;return r.children?{...r,children:r.children.map(Tp)}:r}function Rp(t){let{recap:e,...r}=t;return r.children?{...r,children:r.children.map(Rp)}:r}function ib(t){return Eo(t)?t.topics??[]:zt(t).map(({commitDate:e,generatedAt:r,treeIndex:n,...o})=>o)}function sb(t){return Eo(t)||t.recap?t.recap:ab(t.children)}function ab(t){if(!t||t.length===0)return;let e=[];if(vp(t,e),e.length!==0)return e.sort((r,n)=>new Date(n.date).getTime()-new Date(r.date).getTime()),e[0]?.recap}function vp(t,e){for(let r of t)r.recap&&e.push({recap:r.recap,date:Y(r)}),r.children&&vp(r.children,e)}function lb(t){return Sp(gp(hp(mp(dp(Tp(Rp(t)))))))}async function To(t,e){return cb(t,e)}async function cb(t,e){let r=await nb(e,t),n=await r.readFile(ob);if(!n)return Bs.debug("loadIndex: no index.json in %s storage",r.kind??"unknown"),null;try{return JSON.parse(n)}catch(o){return Bs.error("Failed to parse index.json: %s",o.message),null}}function xp(t){let e=_o(t).map(r=>({title:r.title,...r.decisions!==void 0&&{decisions:r.decisions},...r.category!==void 0&&{category:r.category},...r.importance!==void 0&&{importance:r.importance},...r.filesAffected&&r.filesAffected.length>0&&{filesAffected:r.filesAffected}}));return{commitHash:t.commitHash,...t.recap!==void 0&&{recap:t.recap},...t.ticketId!==void 0&&{ticketId:t.ticketId},...e.length>0&&{topics:e}}}var nN=p("ProcessedSourceStore");nt();Cr();h();var aN=p("TopicIndexStore");h();var dN=p("TopicPageStore");h();at();_i();h();at();Ls();St();var wN=p("ImportState");var SN=10*6e4;St();wo();var WN=p("SotImport");function Ve(t){if(t==null)return null;try{return JSON.parse(t)}catch{return null}}function Ap(t){let e=/^#\s+(.+)$/m.exec(t);return e?e[1].trim():null}var ub=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function Ip(t,e,r){for(let{path:n,accepts:o}of ub){let i=t;for(let a of n){if(i==null||typeof i!="object"){i=void 0;break}i=i[a]}i==null||(o==="integer"?Number.isInteger(i):typeof i=="number")||r("off-type numeric",`${e}.${n.join(".")} is ${typeof i} (${JSON.stringify(i)}) \u2014 column reads NULL`)}}function Dp(t,e,r,n){let o=Date.parse(t.commitDate??"");return Number.isFinite(o)?o:(n("commit date",`${e} has no parsable commitDate \u2014 falling back to first-seen time`),r)}function Np(t,e){let r=t.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(e),n=new Map,o=[];for(let l of r)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=n.get(l.parent_hash)??[];c.push(l.commit_hash),n.set(l.parent_hash,c)}let i=t.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),s=new Map(r.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let u=s.get(l);(u.root_hash!==c||u.depth!==d)&&i.run(c,d,e,l);for(let f of n.get(l)??[])o.push({hash:f,root:c,depth:d+1})}if(a!==r.length)throw new Error(`remountRepo: ${r.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}wo();var bt=p("SotWrite"),db={plans:"plan",notes:"note",references:"reference",skills:"skill"};function pb(t){let e=[],r=(n,o,i)=>{e.push({hash:n.commitHash,parentInFile:o,pos:i,summary:n}),(n.children??[]).forEach((s,a)=>{r(s,n.commitHash,a)})};return r(t,null,null),e}function mb(t){let e={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let r of t){let n=r.delete===!0,o=r.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(n){e.summaryDeletes.push(o[1]);continue}let c=Ve(r.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${r.path}`);e.summaryTrees.push(pb(c));continue}if(r.path==="index.json"){if(n)continue;let c=Ve(r.content);for(let d of c?.entries??[])d.treeHash&&e.treeHashes.set(d.commitHash,d.treeHash);for(let[d,u]of Object.entries(c?.commitAliases??{}))e.aliases.set(d,u);continue}if(r.path==="catalog.json")continue;if(r.path==="topics/index.json"){if(n)continue;let c=Ve(r.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&e.topicSummaries.set(d.stableSlug,d.summary);continue}if(r.path==="topics/processed.json"){e.processedSet=n?null:r.content;continue}if(r.path==="schema-v5-migration.json"){n||(e.v5State=r.content);continue}let i=r.path.match(/^transcripts\/(.+)\.json$/);if(i){n?e.transcriptDeletes.push(i[1]):e.transcriptWrites.push({id:i[1],content:r.content});continue}let s=r.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(s){let c=db[s[1]];n?e.contextDeletes.push({kind:c,key:s[2]}):e.contextWrites.push({kind:c,key:s[2],body:r.content});continue}let a=r.path.match(/^plan-progress\/(.+)\.json$/);if(a){n?e.progressDeletes.push(a[1]):e.progressWrites.push({pathSlug:a[1],content:r.content});continue}let l=r.path.match(/^topics\/([^/]+)\.json$/);if(l){n?e.topicPageDeletes.push(l[1]):e.topicPageWrites.push({slug:l[1],content:r.content});continue}throw new Error(`SotWrite: no table backs path ${r.path}`)}return e}function qr(t,e){bt.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",t,e)}function fb(t,e,r){let n=/-([0-9a-f]{8})$/.exec(r);return n?t.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(e,n[1])?.branch??null:null}function hb(t,e,r,n){for(let d of r.summaryDeletes)t.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(e,d);if(r.summaryTrees.length===0)return;let o=new Set;for(let d of r.summaryTrees)for(let u of d)"children"in u.summary&&o.add(u.hash);let i=t.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let d of o)i.run(e,d);let s=new Map;for(let d of r.summaryTrees)for(let u of d){if(u.parentInFile===null||u.pos===null)continue;let f=s.get(u.parentInFile)??new Map;f.set(u.hash,u.pos),s.set(u.parentInFile,f)}let a=t.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),l=(d,u)=>bt.info("write degraded a value: %s %s",d,u);for(let d of r.summaryTrees)for(let u of d){let f=u.parentInFile,m=u.pos;if(u.parentInFile===null){let b=t.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,u.hash);b&&(f=b.parent_hash,m=b.child_pos,m!==null&&m>=1e6&&((f===null?void 0:s.get(f))?.has(u.hash)||(f=null,m=null)))}let S=JSON.stringify("children"in u.summary?{...u.summary,children:[]}:u.summary);a.run(e,u.hash,f,m,u.hash,0,S,r.treeHashes.get(u.hash)??null,n,n,Dp(u.summary,u.hash,n,l)),Ip(u.summary,u.hash,l),t.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(e,u.hash);let R=t.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(u.summary.topics??[]).forEach((b,E)=>{if(!b.title){l("topic",`${u.hash}[${E}] has no title`);return}R.run(e,u.hash,E,b.category??null,b.importance??null,b.title)})}let c=t.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`);for(let d of o)c.run(e,d);Np(t,e)}function gb(t,e,r,n){for(let[o,i]of r.aliases){if(!t.prepare("SELECT 1 AS ok FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,i)){bt.info("dropping alias %s -> %s (no such memory row)",o,i);continue}t.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(e,o,i,n)}}function yb(t,e,r,n){let o=new Set;for(let i of r.transcriptDeletes)t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,i),t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,i),t.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,i);for(let{id:i,content:s}of r.transcriptWrites){let a=Ve(s);if(!a||!Array.isArray(a.sessions)){qr("transcript",i);continue}t.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(e,i,(0,Op.deflateSync)(Buffer.from(s,"utf8")),n),t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,i);for(let l of a.sessions)l.sessionId&&t.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(e,i,l.sessionId,l.source??null);o.add(i)}return o}function wb(t,e,r,n){if(n.size===0)return;let o=new Set(r.summaryTrees.flat().map(c=>c.hash)),i=new Set(r.summaryTrees.flat().flatMap(c=>[...Qt(c.summary,n)])),s=[...n].filter(c=>!i.has(c));if(s.length===0)return;let a=t.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=t.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of s){let d=a.all(e,`%${c}%`);for(let u of d){if(o.has(u.commit_hash))continue;let f=Ve(u.summary_json);f&&Qt(f,n).includes(c)&&(l.run(e,u.commit_hash,c),bt.info("linked stored transcript %s to memory %s written earlier",c,u.commit_hash))}}}function Sb(t,e,r){if(r.summaryTrees.length===0)return;let n=new Set(t.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(e).map(o=>o.transcript_id));for(let o of r.summaryTrees)for(let i of o){let s=[...new Set(Qt(i.summary,n).filter(a=>n.has(a)))];for(let a of i.summary.transcripts??[])n.has(a)||bt.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",i.hash,a);t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(e,i.hash);for(let a of s)t.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(e,i.hash,a)}}function bb(t,e,r,n){for(let{kind:i,key:s}of r.contextDeletes)t.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(e,i,s);let o=t.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:i,key:s,body:a}of r.contextWrites){if(i==="reference"){let d=Gi(a);if(!d){qr("reference frontmatter",`references/${s}.md`);continue}o.run(e,i,s,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,n,n);continue}let l=i==="plan"||i==="note"?fb(t,e,s):null,c=i==="plan"&&l!==null?s.replace(/-[0-9a-f]{8}$/,""):null;o.run(e,i,s,null,null,null,null,c,l,Ap(a),null,a,n,n)}}function Eb(t,e,r,n){for(let o of r.progressDeletes)t.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(e,o);for(let{pathSlug:o,content:i}of r.progressWrites){let s=Ve(i);if(!s){qr("plan-progress",`plan-progress/${o}.json`);continue}let a=s.planSlug??o;if(!t.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(e,a)){bt.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}t.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(e,a,i,n)}}function kb(t,e,r,n){for(let o of r.topicPageDeletes)t.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(e,o);for(let{slug:o,content:i}of r.topicPageWrites){let s=Ve(i);if(!s?.stableSlug||s.title===void 0||s.content===void 0||!s.lastUpdatedAt){qr("topic page",`topics/${o}.json`);continue}t.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(e,s.stableSlug,s.title,r.topicSummaries.get(s.stableSlug)??null,s.content,JSON.stringify(s.relatedBranches??[]),s.lastUpdatedAt,s.schemaVersion??1),t.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(e,s.stableSlug),(s.sourceRefs??[]).forEach((a,l)=>{t.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(e,s.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,i]of r.topicSummaries){let s=t.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(i,e,o);Number(s.changes)===0&&bt.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(r.processedSet!==null){let o=Ve(r.processedSet);if(!o?.processed)qr("processed set","topics/processed.json");else{t.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(e);let i=t.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[s,a]of Object.entries(o.processed))for(let l of a)i.run(e,s,l)}}r.v5State!==null&&t.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(e,r.v5State)}function Lp(t,e,r,n){let o=mb(r);Ns(t,()=>{t.exec("PRAGMA defer_foreign_keys = ON"),hb(t,e,o,n),gb(t,e,o,n);let i=yb(t,e,o,n);Sb(t,e,o),wb(t,e,o,i),bb(t,e,o,n),Eb(t,e,o,n),kb(t,e,o,n)})}h();function $p(t){let e=new Map;for(let r of t){if(r.parent_hash==null)continue;let n=e.get(r.parent_hash)??[];n.push(r),e.set(r.parent_hash,n)}for(let r of e.values())r.sort((n,o)=>Number(n.child_pos)-Number(o.child_pos));return e}function Ws(t,e){let r=JSON.parse(e.summary_json);return"children"in r&&(r.children=(t.get(e.commit_hash)??[]).map(n=>Ws(t,n))),r}function _b(t,e,r){let n=t.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,r);if(!n)return;let o=(n.parent_hash===null?t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):t.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(e,n.parent_hash===null?n.root_hash:r),i=o.find(s=>s.commit_hash===r);return i?Ws($p(o),i):void 0}function Tb(t){if(t===null)return{};try{return{diffStats:JSON.parse(t)}}catch{return{}}}var Zt=class{constructor(e,r){this.repoIdentity=e;this.dbPath=r;this.kind="sqlite"}async withDb(e){return Ds(r=>{let n=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!n)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return e(r,n.id)},{dbPath:this.dbPath})}async withDbOrAbsent(e,r){return Ds(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?e(n,o.id):r},{dbPath:this.dbPath})}async readFile(e){return this.withDbOrAbsent((r,n)=>this.readOne(r,n,e),null)}async batchReadFiles(e){return this.withDbOrAbsent((r,n)=>{let o=new Map;for(let i of e)o.set(i,this.readOne(r,n,i));return o},new Map(e.map(r=>[r,null])))}readOne(e,r,n){let o=n.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=_b(e,r,o[1]);return c?JSON.stringify(c,null,"	"):null}if(n==="index.json")return this.synthIndex(e,r);if(n==="catalog.json")return this.synthCatalog(e,r);if(n==="topics/index.json")return this.synthTopicIndex(e,r);if(n==="topics/processed.json")return this.synthProcessed(e,r);if(n==="schema-v5-migration.json")return e.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(r)?.value??null;let i=n.match(/^topics\/([^/]+)\.json$/);if(i)return this.synthTopicPage(e,r,i[1]);let s=n.match(/^transcripts\/(.+)\.json$/);if(s){let c=e.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(r,s[1]);return c?(0,Mp.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=n.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return e.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(r,c,a[2])?.body_md??null}let l=n.match(/^plan-progress\/(.+)\.json$/);return l?e.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(r,l[1])?.artifact_json??null:null}allMemories(e,r){return e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r)}synthIndex(e,r){let n=e.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=new Map(e.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(r).map(a=>[a.root,a.n])),i=n.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...Tb(a.diff_stats_json)}})),s=e.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(r);return JSON.stringify({version:3,entries:i,...s.length>0&&{commitAliases:Object.fromEntries(s.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(e,r){let n=this.allMemories(e,r);if(n.length===0)return null;let o=$p(n),i=n.filter(s=>s.parent_hash===null).map(s=>xp(Ws(o,s)));return JSON.stringify({version:1,entries:i},null,"	")}topicRefs(e,r,n){return e.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(r,n).map(i=>({type:i.ref_type,id:i.ref_id,timestamp:i.ts,...i.branch!==null&&{branch:i.branch}}))}synthTopicPage(e,r,n){let o=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(r,n);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(e,r,n),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(e,r){let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=n.map(i=>({stableSlug:i.stable_slug,title:i.title,...i.summary!==null&&{summary:i.summary},relatedBranches:JSON.parse(i.related_branches_json),sourceRefs:this.topicRefs(e,r,i.stable_slug),lastUpdatedAt:i.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(e,r){let n=e.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(r);if(n.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let i of n)o[i.source_type].push(i.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(e){return this.withDbOrAbsent((r,n)=>{let o=(s,a)=>r.prepare(s).all(n).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",s=>`summaries/${s}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",s=>`transcripts/${s}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",s=>`plans/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",s=>`notes/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",s=>`references/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",s=>`skills/${s}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",s=>`plan-progress/${s}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",s=>`topics/${s}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",s=>s)].filter(s=>s.startsWith(e)).sort()},[])}async writeFiles(e,r){ye()||await Is(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);Lp(n,o.id,e,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(r),o=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(r);return{memoriesCount:n.n,memoriesNewestMs:n.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(e){return this.withDbOrAbsent((r,n)=>r.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(n,e)?.target_hash??null,null)}async findShallowestByTreeHash(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(n,e)?.commit_hash??null,null)}async findHashesByPrefix(e){return/^[0-9a-f]+$/.test(e)?this.withDbOrAbsent((r,n)=>r.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(n,e).map(i=>i.commit_hash),[]):[]}async listHeadEntries(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${e!==void 0?" AND branch = ?":""}`).all(...e!==void 0?[n,e]:[n]).map(i=>({commitHash:i.commit_hash,parentCommitHash:null,...i.tree_hash!==null?{treeHash:i.tree_hash}:{},...i.commit_type!==null?{commitType:i.commit_type}:{},commitMessage:i.commit_message??"",commitDate:i.commit_date??"",branch:i.branch??"",generatedAt:i.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(r),o=new Map;for(let i of n){let s=o.get(i.commit_hash)??[];s.push(i.title),o.set(i.commit_hash,s)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(r),o=e.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(r),i=new Map;for(let s of o){let a=i.get(s.stable_slug)??[];a.push(s.ref_type),i.set(s.stable_slug,a)}return n.map(s=>({stableSlug:s.stable_slug,title:s.title,summary:s.summary,content:s.content_md,relatedBranches:JSON.parse(s.related_branches_json),lastUpdatedAt:s.last_updated_at,refTypes:i.get(s.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((e,r)=>e.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(r).map(o=>this.readOne(e,r,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var Rb=3e3,jp=new Map;async function Fp(t){let e=Date.now(),r=jp.get(t);if(r&&e-r.at<Rb)return r.route;let n=await Jr(t);return jp.set(t,{route:n,at:e}),n}async function Hp(t,e,r){if(r.state==="legacy-fenced"||r.state==="cutover"){let{identity:n}=await wt(e);return new Zt(n)}return new Ke(t)}async function Up(t){let e=t??process.cwd(),r=await Fp(e);if(r.state==="blocked")throw new Error(`storage unavailable: ${r.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return Hp(t,e,r)}async function Ro(t){let e=t??process.cwd(),r;try{r=await Fp(e)}catch(n){return{ok:!1,reason:n.message}}if(r.state==="blocked")return{ok:!1,reason:r.reason};try{return{ok:!0,state:r.state,storage:await Hp(t,e,r)}}catch(n){return{ok:!1,reason:n.message}}}var rm=require("node:path");bo();St();h();h();var lt=p("DualWriteStorage"),Kr=class{constructor(e,r){this.primary=e;this.shadow=r;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(e){return this.primary.readFile(e)}async batchReadFiles(e){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await this.primary.readFile(n));return r}async writeFiles(e,r){if(!ye()){await this.primary.writeFiles(e,r);try{await this.shadow.writeFiles(e,r),this.shadow.clearDirty?.()}catch(n){lt.warn("Shadow write failed (folder storage): %s",n instanceof Error?n.message:String(n)),this.shadow.markDirty?.(r)}}}async deleteVisibleMarkdown(e){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return lt.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,_(r)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${e.branch}/${n}`),!1}}async regenerateVisibleMarkdown(e){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return lt.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,_(r)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${e.branch}/${n}`),!1}}async deletePlanVisible(e,r){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(e,r)}catch(n){lt.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",e,r,_(n)),this.shadow.markDirty?.(`deletePlanVisible ${r}/${e}`)}}async deleteNoteVisible(e,r){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(e,r)}catch(n){lt.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",e,r,_(n)),this.shadow.markDirty?.(`deleteNoteVisible ${r}/${e}`)}}async pruneBranchMappings(e){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(e)}catch(r){return lt.warn("Shadow pruneBranchMappings failed (folder storage): %s",_(r)),this.shadow.markDirty?.(`pruneBranchMappings ${e.length}`),0}}async healMissingVisibleMarkdown(e){let r=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!r)return{healed:0,skipped:0,failed:0};let n=e?.dropOrphanedManifestEntries??!0,o=r===this.shadow?"shadow":"primary";try{return await r.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:n})??{healed:0,skipped:0,failed:0}}catch(i){let s=i?.code,a=s?`[${s}] ${_(i)}`:_(i);return lt.warn("%s healMissingVisibleMarkdown failed: %s",o,a),r.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(e){return this.primary.listFiles(e)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(e){lt.warn("Shadow ensure failed: %s",e instanceof Error?e.message:String(e))}}async renderTopicWiki(e){await this.shadow.renderTopicWiki?.(e)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var C=require("node:fs"),em=require("node:fs/promises"),I=require("node:path");h();var J=require("node:fs");var be=require("node:path");h();var vb=p("Sync:VaultSymlinkGuard");function xb(t,e){if(!(0,be.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${e}`);if(!(0,be.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${t}`);let r=(0,be.relative)(t,e);if(r===""||r.startsWith("..")||(0,be.isAbsolute)(r))throw new Error(`assertNoSymlinksInPathSync: target ${e} is not inside vault ${t}`);let n=r.split(be.sep),o=t;for(let i=0;i<n.length-1;i++){let s=n[i];if(s===void 0||s.length===0)continue;o=`${o}${be.sep}${s}`;let a;try{a=(0,J.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw vb.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${e}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${e}).`)}}function Gs(t,e,r){xb(t,e),(0,J.mkdirSync)((0,be.dirname)(e),{recursive:!0});let n=`${e}.tmp`,o=J.constants.O_WRONLY|J.constants.O_CREAT|J.constants.O_TRUNC|J.constants.O_NOFOLLOW,i=(0,J.openSync)(n,o,420);try{typeof r=="string"?(0,J.writeSync)(i,r,void 0,"utf-8"):(0,J.writeSync)(i,r)}finally{(0,J.closeSync)(i)}(0,J.renameSync)(n,e)}co();ne();function Cb(t){return`skills--${t}`}function vo(t){return`${Cb(t)}.md`}function Jp(t){let e=["| Skill | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|"],r=[...t].sort((o,i)=>{let s=qs(i)-qs(o);return s!==0?s:o.skill<i.skill?-1:o.skill>i.skill?1:0}),n=!1;for(let o of r){let i=o.detection==="heuristic"?" \u2020":"";i!==""&&(n=!0),e.push(`| ${Pb(o.skill)}${i} | ${o.invocationCount} | ${Ab(o).join(" | ")} |`)}return n&&e.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),e}function Bp(t){let e=`${t.length} skill${t.length===1?"":"s"}`,r=0,n=!1,o=!1;for(let i of t)i.usage!==void 0&&(n=!0,r+=i.usage.input+i.usage.cached+i.usage.output,i.usage.confidence!=="attributed"&&(o=!0));return n?`${e} \xB7 ${Gp(r,o?"~":"")} tokens`:e}function Wp(t,e){let r=t.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${t.commitHash}`,`branch: ${t.branch}`,`generatedAt: ${t.generatedAt}`,"---","",`# Skills used \u2014 ${r}`,"",`_${t.commitMessage}_`,"",...Jp(e),""].join(`
`)}
`}function Pb(t){return t.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function qs(t){let e=t.usage;return e===void 0?0:e.input+e.cached+e.output}function Ab(t){let e=t.usage;if(e===void 0)return["\u2014","\u2014","\u2014","\u2014"];let r=e.confidence==="attributed"?"":"~";return[qs(t),e.input,e.output,e.cached].map(n=>Gp(n,r))}function Gp(t,e){return t<1e3?`${e}${t}`:`${e}${(t/1e3).toFixed(1)}k`}function Xe(t){return t.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function qp(t){return t.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function xo(t){return t.replace(/[()\s<>"]/g,e=>e==="("?"%28":e===")"?"%29":encodeURIComponent(e))}$n();var Kp=3/1e6,Ib=15/1e6,Db=3.75/1e6;function Vr(t){return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function Vp(t){return t>=.01?`$${t.toFixed(2)}`:t>=5e-5?`$${t.toFixed(4)}`:t>0?"<$0.0001":"$0.00"}function Xp(t,e){return t?t.input*Kp+t.output*Ib+t.cached*Db:e*Kp}function Xs(t){let{topics:e,sourceNodes:r}=cp(t),n=[];return Nb(n,t),$b(n,t,{withRelevance:!0}),Ob(n,t),jb(n,t.e2eTestGuide),Fb(n,r),Ub(n,e,Hb),Jb(n),n.join(`
`)}function Nb(t,e){let r=Br(e),n=r.filesChanged,o=$s(e),i=`${n} file${n!==1?"s":""} changed, +${r.insertions} insertions, \u2212${r.deletions} deletions`,s=Us(Y(e));t.push(`# ${e.commitMessage}`,"",`- **Commit:** \`${e.commitHash}\``,`- **Branch:** \`${e.branch}\``,`- **Author:** ${e.commitAuthor}`,`- **Date:** ${s}`,`- **Duration:** ${rp(e)}`,`- **Changes:** ${i}`),o>0&&t.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=js(e);if(a>0){let c=Fs(e),d=c.input>0||c.output>0||c.cached>0?c:void 0,u=Vp(Xp(d,a)),f=d?` (${Vr(d.input)} input, ${Vr(d.output)} output, ${Vr(d.cached)} cached)`:"";t.push(`- **Task usage:** ${Vr(a)} tokens \xB7 ${u}${f}`)}let l=e.jolliDocUrl;l&&t.push(`- **Jolli Memory:** [${l}](${l})`),t.push("","---")}function Ob(t,e){let r=e.recap?.trim();r&&t.push("","## Quick recap","",r,"","---")}function Lb(t){let e=new Map;for(let o of t){let i=e.get(o.source)??[];i.push(o),e.set(o.source,i)}let r=Mn().all().map(o=>o.id),n=[];for(let o of r){let i=e.get(o);i&&(n.push(...i),e.delete(o))}for(let o of e.values())n.push(...o);return n}function Ks(t,e,r){return t.get(`${e}:${r}`)??t.get(`${e}:${r.replace(np,"")}`)}var Mb={high:"High",mid:"Med",low:"Low"};function Vs(t){return!t||t.reason===""?"":` \u2014 ${Mb[t.tier]} \xB7 ${Xe(t.reason)}`}function $b(t,e,r){let n=e.plans??[],o=e.notes??[],i=r?.includeReferences?e.references??[]:[],s=r?.withRelevance?e.excludedContext??[]:[],a=new Map;if(r?.withRelevance)for(let u of e.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=e.skills??[],c=n.length+o.length+i.length+(l.length>0?1:0);if(c===0&&s.length===0)return;let d=c>1?` (${c})`:"";t.push("",`## Context${d}`,"");for(let u of n){let f=u.jolliPlanDocUrl,m=Vs(Ks(a,"plan",u.slug));t.push((f?`- [${Xe(u.title)}](${xo(f)})`:`- ${Xe(u.title)}`)+m)}for(let u of o){let f=u.jolliNoteDocUrl,m=Vs(Ks(a,"note",u.id));t.push((f?`- [${Xe(u.title)}](${xo(f)})`:`- ${Xe(u.title)}`)+m)}for(let u of Lb(i)){let f=Xe(Hs(u)),m=u.jolliReferenceDocUrl??u.url,S=Vs(Ks(a,"reference",`${u.source}:${u.nativeId}`));t.push((m?`- [${f}](${xo(m)})`:`- ${f}`)+S)}if(l.length>0){let u=l.some(f=>f.detection==="heuristic")?" \xB7 some inferred":"";t.push(`- Skills used \u2014 ${Xe(Bp(l))}${u}`)}for(let u of s)t.push(`- ~~${qp(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${Xe(u.reason)}`:""}`)}function jb(t,e){if(!(!e||e.length===0)){t.push("",`## E2E Test (${e.length})`);for(let r=0;r<e.length;r++){let n=e[r];t.push("",`### ${r+1}. ${n.title}`),n.preconditions&&t.push("",`**Preconditions:** ${n.preconditions}`),t.push("","**Steps:**");for(let o=0;o<n.steps.length;o++)t.push(`${o+1}. ${n.steps[o]}`);t.push("","**Expected Results:**");for(let o of n.expectedResults)t.push(`- ${o}`)}t.push("","---")}}function Fb(t,e){if(!(e.length<=1)){t.push("",`## Source Commits (${e.length})`);for(let r of e){let n=Br(r),o=r.conversationTurns?` \xB7 ${r.conversationTurns} turns`:"";t.push(`- \`${r.commitHash.substring(0,8)}\` ${r.commitMessage}  _(+${n.insertions} \u2212${n.deletions}${o} \xB7 ${sp(Y(r))})_`)}t.push("","---")}}function Hb(t,e){if(t.push("","**\u26A1 Why This Change**","",e.trigger),t.push("","**\u{1F4A1} Decisions Behind the Code**","",e.decisions),t.push("","**\u2705 What Was Implemented**","",e.response),e.todo&&t.push("","**\u{1F4CB} Future Enhancements**","",e.todo),e.filesAffected&&e.filesAffected.length>0){t.push("","**\u{1F4C1} FILES**");for(let r of e.filesAffected)t.push(`- \`${r}\``)}}function Ub(t,e,r,n={singular:"Summary",plural:"Summaries"}){if(e.length!==0){t.push("",`## ${e.length===1?n.singular:n.plural} (${e.length})`);for(let o=0;o<e.length;o++){let i=e[o],s=i.category?` \`${i.category}\``:"";t.push("",`### ${ap(o)} \xB7 ${i.title}${s}`),r(t,i)}}}function Jb(t,e){let r=Us(new Date().toISOString()),n=e?lp(e):void 0,o=n?` \xB7 via ${n}`:"";t.push("","---","",`*Generated by Jolli Memory \xB7 ${r}${o}*`)}var Yp="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function zp(t,e,r,n){let o=[];if(o.push(`# ${t.title}`),o.push(""),o.push(Yp),o.push(""),o.push(`> **Source branches:** ${e.join(", ")}`),o.push(`> **Merged:** ${r}`),o.push(`> **Topic slug:** \`${t.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(t.content.trim()),o.push(""),t.keyDecisions&&t.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let i of t.keyDecisions)o.push(`- ${i}`);o.push("")}if(t.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let i of t.sourceCommits){let s=i.substring(0,8),a=n.resolveCommitVisiblePath(s),l=n.resolveCommitMessage(s);a&&l?o.push(`- ${Ys(s,Bb(a))} \u2014 ${l}`):l?o.push(`- \`${s}\` \u2014 ${l}`):o.push(`- \`${s}\``)}o.push("")}if(t.relatedBranches&&t.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let i of t.relatedBranches){let s=n.resolveBranchFolder(i);s?o.push(`- ${Ys(i,`../${s}/`)}`):o.push(`- \`${i}\``)}o.push("")}return o.join(`
`)}function Qp(t){return{title:t.title,stableSlug:t.stableSlug,content:t.content,...t.relatedBranches.length>0&&{relatedBranches:[...t.relatedBranches]},sourceCommits:t.sourceRefs.filter(e=>e.type==="summary").map(e=>e.id)}}function Zp(t,e){let r=[];if(r.push(`# ${e.repoName} \xB7 Knowledge Wiki`),r.push(""),r.push(Yp),r.push(""),r.push(`> **${t.length} topics** in the knowledge base`),r.push(""),t.length>0){r.push("## Topics"),r.push("");for(let n of t)r.push(`- ${Ys(n.title,`topic--${n.stableSlug}.md`)}`);r.push("")}return r.join(`
`)}function Bb(t){return t.startsWith("./")?t.substring(2):t}function Ys(t,e){let r=t.replace(/[\\[\]]/g,"\\$&"),n=e.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${r}](${n})`}var v=p("FolderStorage"),Co=class t{constructor(e,r){this.rootPath=e;this.metadataManager=r;this.kind="folder"}get vaultRoot(){return(0,I.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(e){let r=(0,I.join)(this.rootPath,".jolli",e);try{return(0,C.readFileSync)(r,"utf-8")}catch(n){let o=n.code;return o==="ENOENT"||o==="ENOTDIR"||v.warn("readFile failed for %s: %s",r,_(n)),null}}async writeFiles(e,r){if(ye())return;await this.ensure();let n=0,o=0;for(let i of e)i.delete?this.deleteHiddenFile(i.path)&&o++:(this.writeHiddenFile(i.path,i.content),n++,i.path.startsWith("summaries/")&&i.path.endsWith(".json")&&this.generateSummaryMarkdown(i.content),i.path.startsWith("plans/")&&i.path.endsWith(".md")&&this.generatePlanMarkdown(i.path,i.content,i.branch),i.path.startsWith("notes/")&&i.path.endsWith(".md")&&this.generateNoteMarkdown(i.path,i.content,i.branch));v.info("Wrote %d files, deleted %d (%s)",n,o,r)}async listFiles(e){let r=(0,I.join)(this.rootPath,".jolli",e);if(!(0,C.existsSync)(r))return[];let n=(0,I.join)(this.rootPath,".jolli"),o=[];return this.walkDir(r,n,o),o.sort()}async exists(){return(0,C.existsSync)(this.rootPath)}async ensure(){(0,C.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(e){let r=(0,I.join)(this.rootPath,".jolli","shadow-status.json"),n={dirty:!0,lastFailedAt:new Date().toISOString(),message:e};try{Gs(this.vaultRoot,r,JSON.stringify(n,null,"	"))}catch(o){v.warn("markDirty suppressed: %s",_(o))}}clearDirty(){let e=(0,I.join)(this.rootPath,".jolli","shadow-status.json");try{(0,C.existsSync)(e)&&(0,C.unlinkSync)(e)}catch{}}isDirty(){let e=(0,I.join)(this.rootPath,".jolli","shadow-status.json");return(0,C.existsSync)(e)}async deleteVisibleMarkdown(e){let r=t.slugify(e.commitMessage),n=e.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${e.commitHash}`,e.branch,vo(n))}catch(o){v.warn("Failed to delete skills aggregate for %s: %s",n,String(o))}return this.deleteVisibleArtifact(e.commitHash,e.branch,`${r}-${n}.md`)}async deletePlanVisible(e,r){await this.deleteVisibleArtifact(`plan:${e}`,r,`plan--${e}.md`)}async deleteNoteVisible(e,r){await this.deleteVisibleArtifact(`note:${e}`,r,`note--${e}.md`)}async pruneBranchMappings(e){let r=new Map,n=new Set(e);for(let i of this.metadataManager.listBranchMappings())n.has(i.branch)&&r.set(i.branch,i.folder);let o=this.metadataManager.unregisterBranches(e);return o===0?0:(await Promise.all([...r.values()].map(i=>this.rmdirIfEmpty((0,I.join)(this.rootPath,i)))),o)}async rmdirIfEmpty(e){try{await(0,em.rmdir)(e)}catch(r){let n=r.code;if(n==="ENOENT"||n==="ENOTEMPTY"||n==="EEXIST")return;v.warn("rmdir(%s) failed (non-fatal): %s",e,_(r))}}resolveBranchForFolder(e){return this.metadataManager.listBranchMappings().find(n=>n.folder===e)?.branch??null}async deleteVisibleArtifact(e,r,n){let o=this.metadataManager.findById(e),i=this.metadataManager.resolveFolderForBranch(r),s=o?.path??`${i}/${n}`,a=(0,I.join)(this.rootPath,s);if(!(0,C.existsSync)(a))return o&&this.metadataManager.removeFromManifest(e),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return v.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s),!1;try{return(0,C.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(e),v.info("Deleted visible MD: %s",s),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(e),!1;throw l}}async forceRegenerateVisibleMarkdown(e){let r=await this.readFile(`summaries/${e.commitHash}.json`);if(!r)return v.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",e.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(r)}catch(c){return v.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",e.commitHash.substring(0,8),_(c)),{ok:!1,reason:"malformed"}}let n=this.metadataManager.resolveFolderForBranch(e.branch),o=t.slugify(e.commitMessage),i=e.commitHash.substring(0,8),s=`${n}/${o}-${i}.md`,a=(0,I.join)(this.rootPath,s);if((0,C.existsSync)(a))try{(0,C.unlinkSync)(a)}catch(c){return v.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",s,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(e)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(e){let r=this.metadataManager.resolveFolderForBranch(e.branch),n=t.slugify(e.commitMessage),o=e.commitHash.substring(0,8),i=`${r}/${n}-${o}.md`,s=(0,I.join)(this.rootPath,i);if((0,C.existsSync)(s))return await this.healSkillsAggregate(e,r,o),!0;let a=await this.readFile(`summaries/${e.commitHash}.json`);if(!a)return v.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",e.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(S){return v.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",e.commitHash.substring(0,8),_(S)),!1}let c=this.buildYamlFrontmatter(l),d=Xs(l),u=`${c}
${d}`;this.atomicWrite(s,u);let f=this.metadataManager.findById(e.commitHash),m=ee.sha256(u);return this.metadataManager.updateManifest({path:i,fileId:l.commitHash,type:"commit",fingerprint:m,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:f?.title??l.commitMessage}),this.generateSkillsAggregate(l,r,o),v.info("Regenerated visible MD: %s",i),!0}async healMissingVisibleMarkdown(e){let n=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,i=0,s=0,a=[];for(let c of n){let d=(0,I.join)(this.rootPath,c.path);if((0,C.existsSync)(d)){i++;continue}let u=(0,I.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),f;try{f=(0,C.readFileSync)(u,"utf-8")}catch(O){let B=O.code;if(B==="ENOENT"){s++,e?.dropOrphanedManifestEntries?(a.push(c.fileId),v.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):v.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}s++,v.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),B??"?",_(O));continue}let m;try{m=JSON.parse(f)}catch(O){s++,v.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),_(O));continue}let S=this.metadataManager.resolveFolderForBranch(m.branch),R=t.slugify(m.commitMessage),b=m.commitHash.substring(0,8),E=`${S}/${R}-${b}.md`;if(E!==c.path){i++,v.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,E);continue}let D={commitHash:m.commitHash,parentCommitHash:null,commitMessage:m.commitMessage,commitDate:m.commitDate,branch:m.branch,generatedAt:m.generatedAt};try{await this.regenerateVisibleMarkdown(D)?o++:(s++,v.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(O){s++,v.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),_(O))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||s>0)&&v.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,i,s,l.length),l.length>0?{healed:o,skipped:i,failed:s,droppedIds:l}:{healed:o,skipped:i,failed:s}}dropManifestEntries(e){if(e.length===0)return[];let r=new Set(e),n=this.metadataManager.readManifest(),o=n.files.filter(s=>r.has(s.fileId)).map(s=>s.fileId);if(o.length===0)return[];let i=n.files.filter(s=>!r.has(s.fileId));return this.metadataManager.replaceFiles(i),o}isUserEditedOnDisk(e,r){if(!(0,C.existsSync)(e)||!r)return!1;let n;try{n=ee.sha256((0,C.readFileSync)(e,"utf-8"))}catch(o){return v.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",e,String(o)),!0}return n!==r}generateSummaryMarkdown(e){let r;try{r=JSON.parse(e)}catch{return}let n=this.metadataManager.resolveFolderForBranch(r.branch),o=t.slugify(r.commitMessage),i=r.commitHash.substring(0,8),s=`${o}-${i}.md`,a=`${n}/${s}`,l=this.buildYamlFrontmatter(r),c=Xs(r),d=`${l}
${c}`,u=(0,I.join)(this.rootPath,a),f=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,f?.fingerprint)){v.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,d);let m=ee.sha256(d);this.metadataManager.updateManifest({path:a,fileId:r.commitHash,type:"commit",fingerprint:m,source:{commitHash:r.commitHash,branch:r.branch,generatedAt:r.generatedAt},title:r.commitMessage}),v.info("Markdown generated: %s",a),this.generateSkillsAggregate(r,n,i),r.children&&r.children.length>0&&this.cleanupSupersededDescendants(r.children,a)}async healSkillsAggregate(e,r,n){if((0,C.existsSync)((0,I.join)(this.rootPath,r,vo(n))))return;let o=await this.readFile(`summaries/${e.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),r,n)}catch{}}generateSkillsAggregate(e,r,n){let o=e.skills;if(o===void 0||o.length===0)return;let i=`${r}/${vo(n)}`,s=(0,I.join)(this.rootPath,i),a=this.metadataManager.findByPath(i);if(this.isUserEditedOnDisk(s,a?.fingerprint)){v.info("FolderStorage: skip overwrite of user-edited %s",i);return}let l=Wp(e,o);this.atomicWrite(s,l),this.metadataManager.updateManifest({path:i,fileId:`skill:${e.commitHash}`,type:"skill",fingerprint:ee.sha256(l),source:{commitHash:e.commitHash,branch:e.branch,generatedAt:e.generatedAt},title:`Skills used \u2014 ${n}`}),v.info("Skills aggregate generated: %s",i)}cleanupSupersededDescendants(e,r){let n=[];t.collectDescendantHashes(e,n);for(let o of n){let i=this.metadataManager.findById(o);if(!i||i.type!=="commit"||i.path===r)continue;let s=(0,I.join)(this.rootPath,i.path);if(!(0,C.existsSync)(s)){this.metadataManager.removeFromManifest(o);continue}if(!i.fingerprint){v.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",i.path);continue}if(this.isUserEditedOnDisk(s,i.fingerprint)){v.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i.path);continue}try{(0,C.unlinkSync)(s),this.metadataManager.removeFromManifest(o),v.info("Cleaned up superseded MD: %s",i.path)}catch(a){v.warn("Failed to delete superseded MD %s: %s",i.path,String(a))}}}static collectDescendantHashes(e,r){for(let n of e)r.push(n.commitHash),n.children&&n.children.length>0&&t.collectDescendantHashes(n.children,r)}buildYamlFrontmatter(e){let r=["---"];return r.push(`commitHash: ${e.commitHash}`),r.push(`branch: ${e.branch}`),r.push(`author: ${e.commitAuthor}`),r.push(`date: ${e.commitDate}`),r.push("type: commit"),e.commitType&&r.push(`commitType: ${e.commitType}`),e.stats&&(r.push(`filesChanged: ${e.stats.filesChanged}`),r.push(`insertions: ${e.stats.insertions}`),r.push(`deletions: ${e.stats.deletions}`)),r.push("---"),r.join(`
`)}async regenerateVisiblePlan(e,r){let n=await this.readFile(`plans/${e}.md`);if(!n)return v.warn("regenerateVisiblePlan: hidden plans/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),i=(0,I.join)(this.rootPath,o,`plan--${e}.md`);if((0,C.existsSync)(i))try{(0,C.unlinkSync)(i)}catch(s){return v.warn("regenerateVisiblePlan: cannot unlink %s [%s]",i,String(s)),!1}return this.generatePlanMarkdown(`plans/${e}.md`,n,r),!0}generatePlanMarkdown(e,r,n){let o=e.replace(/^plans\//,"").replace(/\.md$/,""),i=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),s=`plan--${o}.md`,a=`${i}/${s}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${r}`,d=(0,I.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){v.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let f=ee.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:f,updatedAt:new Date().toISOString(),source:n?{branch:n}:{},title:this.extractTitle(r)??o}),v.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(e,r){let n=await this.readFile(`notes/${e}.md`);if(!n)return v.warn("regenerateVisibleNote: hidden notes/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),i=(0,I.join)(this.rootPath,o,`note--${e}.md`);if((0,C.existsSync)(i))try{(0,C.unlinkSync)(i)}catch(s){return v.warn("regenerateVisibleNote: cannot unlink %s [%s]",i,String(s)),!1}return this.generateNoteMarkdown(`notes/${e}.md`,n,r),!0}generateNoteMarkdown(e,r,n){let o=e.replace(/^notes\//,"").replace(/\.md$/,""),i=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),s=`note--${o}.md`,a=`${i}/${s}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${r}`,d=(0,I.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){v.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let f=ee.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:f,source:n?{branch:n}:{},title:this.extractTitle(r)??o,updatedAt:new Date().toISOString()}),v.info("Note markdown generated: %s",a)}resolveBranchFromSlug(e){let r=e.split("-").at(-1);if(r.length>=7){let o=this.metadataManager.readManifest().files.find(s=>s.type==="commit"&&s.source?.commitHash?.startsWith(r));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let i=(0,I.join)(this.rootPath,".jolli","index.json");if((0,C.existsSync)(i))try{let a=JSON.parse((0,C.readFileSync)(i,"utf-8")).entries.find(l=>l.commitHash.startsWith(r));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(e){let r=e.match(/^#\s+(.+)/m);return r?r[1].trim():null}writeHiddenFile(e,r){let n=(0,I.join)(this.rootPath,".jolli",e);this.atomicWrite(n,r)}deleteHiddenFile(e){let r=(0,I.join)(this.rootPath,".jolli",e);if(!(0,C.existsSync)(r))return!1;try{return(0,C.unlinkSync)(r),!0}catch{return!1}}walkDir(e,r,n){for(let o of(0,C.readdirSync)(e,{withFileTypes:!0})){let i=(0,I.join)(e,o.name);o.isDirectory()?this.walkDir(i,r,n):n.push(ve((0,I.relative)(r,i)))}}async renderTopicWiki(e){let r=(0,I.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(r);let n=this.buildWikiRenderContext();(0,C.mkdirSync)(r,{recursive:!0});let o=[];for(let i of e)try{let s=Qp(i);o.push(s);let a=`_wiki/topic--${s.stableSlug}.md`,l=zp(s,i.relatedBranches,i.lastUpdatedAt,n);this.atomicWrite((0,I.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${s.stableSlug}`,type:"wiki",fingerprint:ee.sha256(l),source:{generatedAt:i.lastUpdatedAt},title:s.title})}catch(s){v.warn("renderTopicWiki: failed to render topic %s: %s",i.stableSlug,_(s))}try{let i=Zp(o,n),s="_wiki/_index.md";this.atomicWrite((0,I.join)(this.rootPath,s),i),this.metadataManager.updateManifest({path:s,fileId:"wiki-index",type:"wiki",fingerprint:ee.sha256(i),source:{generatedAt:new Date().toISOString()},title:`${n.repoName} Knowledge Wiki`})}catch(i){v.warn("renderTopicWiki: failed to render index: %s",_(i))}v.info("Topic-KB wiki regenerated: %d topics under %s",e.length,r)}isTopicWikiPresent(){return(0,C.existsSync)((0,I.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(e){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,C.existsSync)(e))try{for(let r of(0,C.readdirSync)(e))if(r.endsWith(".md"))try{(0,C.unlinkSync)((0,I.join)(e,r))}catch(n){v.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",r,_(n))}}catch(r){v.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",e,_(r))}}buildWikiRenderContext(){let e=this.metadataManager.readConfig(),r=this.metadataManager.listBranchMappings(),n=new Map(r.map(s=>[s.branch,s.folder])),o=this.metadataManager.readManifest(),i=new Map;for(let s of o.files)s.type==="commit"&&s.source.commitHash&&i.set(s.source.commitHash.substring(0,8),s);return{repoName:e.repoName??"Memory Bank",resolveCommitVisiblePath:s=>{let a=i.get(s);return a?`../${a.path}`:null},resolveBranchFolder:s=>n.get(s)??null,resolveCommitMessage:s=>i.get(s)?.title??null}}atomicWrite(e,r){Gs(this.vaultRoot,e,r)}static slugify(e){let r=e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return r.length>50&&(r=r.substring(0,50).replace(/-+$/,"")),r||"untitled"}};qt();co();le();var Po=p("StorageFactory");async function zs(t,e){let r;try{r=await Se()}catch(a){Po.warn("Failed to load config, falling back to defaults: %s",a.message),r={}}r.storageMode!==void 0&&Po.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",r.storageMode);let n=r.localFolder,o=await Jr(t);if(Po.info("StorageFactory.create: route=%s, projectPath=%s",o.state,t),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await wt(t),l=new Zt(a);return Es(t,n)?new Kr(l,tm(t,n)):l}if(!Es(t,n))return Po.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",t),new Ke(e);let i=new Ke(e),s=tm(t,n);return new Kr(i,s)}function tm(t,e){let r=yd(t),n=bd(t),o=gd(r,n,e),i=new ee((0,rm.join)(o,".jolli"));return new Co(o,i)}var pe=p("SchemaV5Migration"),om="schema-v5-migration.json",nm=3e4;async function Qs(t,e){let n=await(e??await zs(t??process.cwd(),t)).readFile(om);if(!n)return null;try{return JSON.parse(n)}catch(o){return pe.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function Wb(t,e,r){if(Pn(t))return await r();if(!await vi(t,{timeoutMs:nm}))throw new Error(`${e}: could not acquire orphan-write lock within ${nm}ms`);try{return await An(t,r)}finally{await xi(t)}}async function im(t){let e=await zs(t??process.cwd(),t),r=await Qs(t,e);return r?.status==="completed"?(pe.info("Schema v5 migration already completed at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0}):await e.exists()?Wb(t,"migrateSchemaToV5",()=>qb(t,e)):(pe.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function Gb(t,e){if(e.length===0)return new Map;if(t.batchReadFiles)return t.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await t.readFile(n));return r}async function qb(t,e){let r=await Qs(t,e);if(r?.status==="completed")return pe.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0};let n=new Date().toISOString(),o=await Ro(t),i=o.ok&&o.state==="uncutover"?await j(["rev-parse",`refs/heads/${ge}`],t).then(Z=>Z.stdout.trim()).catch(()=>null):null,s=await e.listFiles("summaries/");pe.info("Found %d summary files to inspect",s.length);let a=await e.listFiles("transcripts/"),l=new Set;for(let Z of a){let Qe=Js(Z);Qe&&l.add(Qe)}pe.info("Reading %d summaries...",s.length);let c=Date.now(),d=await Gb(e,s);pe.info("Read %d summaries in %d ms",d.size,Date.now()-c);let u=[],f=[],m=0,S=0;for(let Z of s){let Qe=d.get(Z);if(Qe===void 0)throw new Error(`readSummaries omitted ${Z} \u2014 protocol contract violation (expected one entry per request)`);if(Qe===null){S++;continue}let Ct;try{Ct=JSON.parse(Qe)}catch(hn){pe.warn("Skipping unparseable summary %s: %s",Z,hn.message),S++;continue}let fr=Kb(Ct,l),hr=JSON.stringify(fr,null,"	");if(f.push({path:Z,content:hr}),fr===Ct){S++;continue}u.push({path:Z,content:hr}),m++}let R=s.length===0,b=m===0&&S>0,E=b?f:u,D=R?"Schema v5 migration: no pre-v5 data found":b?`Schema v5 migration: re-pushing ${S} v5 summaries to heal storage shadow`:`Schema v5 migration: ${m} upgraded, ${S} skipped`,O=Date.now();if(E.length>0&&(pe.info("Writing %d summary file(s) via active storage...",E.length),await e.writeFiles(E,D)),e.isDirty?.()??!1)return pe.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",m,S,Date.now()-O),{migrated:m,skipped:S,fresh:R,alreadyDone:!1};let Te={version:1,status:"completed",startedAt:n,completedAt:new Date().toISOString(),migratedCount:m,skippedCount:S,fresh:R};return await e.writeFiles([{path:om,content:JSON.stringify(Te,null,"	")}],D),pe.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",m,S,R,b,Date.now()-O),i&&pe.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",i),{migrated:m,skipped:S,fresh:R,alreadyDone:!1}}function Kb(t,e){if(t.version>=5&&t.transcripts!==void 0)return t;let r=_p(t);if(r.transcripts!==void 0)return{...r,version:5};let o=Wr(r).filter(s=>e.has(s));return{...r,version:5,transcripts:o}}le();h();var er=require("node:fs/promises"),Xr=require("node:path");ie();async function Zs(t){let e=(0,Xr.join)(t,".claude"),r=(0,Xr.join)(e,"settings.local.json"),n=Ue("stop"),o=Ue("session-start");await sm(t);let i={},s;try{s=await(0,er.readFile)(r,"utf-8"),i=JSON.parse(s)}catch(m){if(m.code!=="ENOENT")throw m}let a=i.hooks??{},l=a.Stop??[],c=a.SessionStart??[],d=Wn(l);d.push({hooks:[{type:"command",command:n,async:!0}]});let u=ht(c,Jn);u.push({hooks:[{type:"command",command:o}]}),a.Stop=d,a.SessionStart=u,i.hooks=a;let f=JSON.stringify(i,null,"	");return s===f?{path:r}:(await(0,er.mkdir)(e,{recursive:!0}),await P(r,f),{path:r})}async function sm(t){let e=(0,Xr.join)(t,".claude","settings.json"),r;try{let s=await(0,er.readFile)(e,"utf-8");r=JSON.parse(s)}catch{return}let n=r.hooks;if(!n)return;let o=n.Stop??[];if(!zi(o))return;let i=Wn(o);i.length===0?delete n.Stop:n.Stop=i,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	"))}async function ea(t){await sm(t);let e=(0,Xr.join)(t,".claude","settings.local.json"),r;try{let l=await(0,er.readFile)(e,"utf-8");r=JSON.parse(l)}catch{return{}}let n=r.hooks;if(!n)return{};let o=n.Stop??[],i=zi(o);if(i){let l=Wn(o);l.length===0?delete n.Stop:n.Stop=l}let s=n.SessionStart??[],a=Pr(s,Jn);if(a){let l=ht(s,Jn);l.length===0?delete n.SessionStart:n.SessionStart=l}return!i&&!a?{}:(Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	")),{})}var kt=require("node:fs/promises"),lh=require("node:os"),on=require("node:path");ie();h();var nh=require("node:crypto"),or=require("node:fs"),ka=require("node:fs/promises"),Go=require("node:os"),Ye=require("node:path");h();var lm=require("node:fs"),Io=require("node:fs/promises"),cm=require("node:os"),Et=require("node:path"),um=require("node:url");ie();h();var Vb=/^[a-z0-9][a-z0-9-]*$/;function Yr(t){return Vb.test(t)}var Ao=p("DistPathWriter");async function zr(t,e,r,n){if(!Yr(t))return Ao.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(t)),!1;let o=e??(0,Et.dirname)((0,um.fileURLToPath)(__jmImportMetaUrl)),i=r??"0.99.11",s=(0,Et.join)(n??(0,Et.join)((0,cm.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,Et.join)(s,t);try{await(0,Io.mkdir)(s,{recursive:!0});let l=`${i}
${o}`,c;try{c=await(0,Io.readFile)(a,"utf-8")}catch{}if(c){let[d,u]=c.split(`
`);if(!!(d&&u&&am(u))&&!am(o))return Ao.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",t,d,o),!0}return c!==l&&await P(a,l),Ao.info("Wrote dist-paths/%s (version=%s, distDir=%s)",t,i,o),!0}catch(l){return Ao.warn("Failed to write dist-paths/%s: %s",t,l.message),!1}}var Xb=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function am(t){return Xb.every(e=>(0,lm.existsSync)((0,Et.join)(t,e)))}var nr=At(rh(),1);function Wo(t,e){if(t.includes("-")||t.includes("+")||e.includes("-")||e.includes("+")){let s=c=>{let d=(0,nr.valid)(c);return d||(/^\d+(\.\d+)*$/.test(c)?(0,nr.coerce)(c)?.version??null:null)},a=s(t),l=s(e);if(a&&l)return(0,nr.compare)(a,l);if(a)return 1;if(l)return-1}let r=/^\d+(\.\d+)*$/.test(t),n=/^\d+(\.\d+)*$/.test(e);if(!r&&!n)return 0;if(!r)return-1;if(!n)return 1;let o=t.split(".").map(Number),i=e.split(".").map(Number);for(let s=0;s<Math.max(o.length,i.length);s++){let a=(o[s]??0)-(i[s]??0);if(a!==0)return a}return 0}var Ea=p("DistPathResolver"),tT=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function _a(t){let e=t.replace(/\\/g,"/");for(let[n,o]of tT)if(e.includes(n))return o;let r=e.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return r?.[1]?r[1].toLowerCase():(0,nh.createHash)("sha256").update(t).digest("hex").slice(0,8)}function oh(t){try{let r=(0,or.readFileSync)(t,"utf-8").trim().split(`
`).map(i=>i.trim());if(r.length<2)return null;let n=r[0],o=r[r.length-1];if(!o)return null;if(n.startsWith("source=")){let i=n.slice(7),s=i.indexOf("@");return s===-1?{source:i,version:"unknown",distDir:o}:{source:i.slice(0,s),version:i.slice(s+1),distDir:o}}return{source:"",version:n,distDir:o}}catch{return null}}function nn(t){let e=(0,Ye.join)(t??(0,Ye.join)((0,Go.homedir)(),".jolli","jollimemory"),"dist-paths"),r;try{r=(0,or.readdirSync)(e).sort()}catch{return[]}let n=[];for(let o of r){let i=(0,Ye.join)(e,o),s=oh(i);s&&n.push({source:o,version:s.version,distDir:s.distDir,available:(0,or.existsSync)(s.distDir)})}return n}async function ih(t){let e=(0,Ye.join)(t??(0,Ye.join)((0,Go.homedir)(),".jolli","jollimemory"),"dist-paths"),r=[];for(let n of nn(t))if(!n.available)try{await(0,ka.unlink)((0,Ye.join)(e,n.source)),r.push(n.source),Ea.info("Pruned stale dist-paths/%s (dir gone: %s)",n.source,n.distDir)}catch(o){Ea.warn("Failed to prune stale dist-paths/%s: %s",n.source,o.message)}return r}var Ta=["cli","vscode","cursor"];function qo(t){let e=t.filter(o=>o.available);if(e.length===0)return;let r=e[0];for(let o=1;o<e.length;o++)Wo(e[o].version,r.version)>0&&(r=e[o]);let n=e.filter(o=>Wo(o.version,r.version)===0);for(let o of Ta){let i=n.find(s=>s.source===o);if(i)return i}return r}async function sh(){let t=(0,Ye.join)((0,Go.homedir)(),".jolli","jollimemory"),e=(0,Ye.join)(t,"dist-path"),r=oh(e);if(!r)return!1;let n;if(r.source==="cli")n="cli";else{let o=_a(r.distDir);n=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return n==="vscode-extension"&&(n="vscode"),await zr(n,r.distDir,r.version),await(0,ka.unlink)(e).catch(()=>{}),Ea.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",n,r.version,r.distDir),!0}var ah=p("DispatchScripts"),rT=`#!/bin/bash
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
  for pref in ${Ta.join(" ")}; do
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
`,nT=`#!/bin/bash
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
`,oT=`#!/bin/bash
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
`;async function Ra(t,e){let r=!1;try{r=await(0,kt.readFile)(t,"utf-8")===e}catch{}if(r){await(0,kt.chmod)(t,493);return}await P(t,e),await(0,kt.chmod)(t,493)}async function va(){let t=(0,on.join)((0,lh.homedir)(),".jolli","jollimemory");try{return await(0,kt.mkdir)(t,{recursive:!0}),await Ra((0,on.join)(t,"resolve-dist-path"),rT),await Ra((0,on.join)(t,"run-hook"),nT),await Ra((0,on.join)(t,"run-cli"),oT),ah.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",t),!0}catch(e){return ah.warn("Failed to write resolve scripts: %s",e.message),!1}}var sn=require("node:fs/promises"),Ko=require("node:path");ie();h();var ch=p("GeminiHookInstaller");async function xa(t){let e=(0,Ko.join)(t,".gemini"),r=(0,Ko.join)(e,"settings.json"),n=Ue("gemini-after-agent"),o={},i;try{i=await(0,sn.readFile)(r,"utf-8"),o=JSON.parse(i)}catch(d){if(d.code!=="ENOENT")throw d}let s=o.hooks??{},a=s.AfterAgent??[],l=ht(a,Bn);l.push({hooks:[{type:"command",command:n,name:"jolli-session-tracker"}]}),s.AfterAgent=l,o.hooks=s;let c=JSON.stringify(o,null,"	");return i===c?{path:r}:(await(0,sn.mkdir)(e,{recursive:!0}),await P(r,c),ch.info("Gemini AfterAgent hook installed"),{path:r})}async function Ca(t){let e=(0,Ko.join)(t,".gemini","settings.json"),r;try{let s=await(0,sn.readFile)(e,"utf-8");r=JSON.parse(s)}catch{return}let n=r.hooks;if(!n)return;let o=n.AfterAgent??[];if(!Pr(o,Bn))return;let i=ht(o,Bn);i.length===0?delete n.AfterAgent:n.AfterAgent=i,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	")),ch.info("Gemini AfterAgent hook removed")}var _t=require("node:fs/promises"),ze=require("node:path");ie();h();we();var he=p("GitExclude"),an="# >>> jolli skill exclude >>>",ln="# <<< jolli skill exclude <<<";function iT(t,e){return ze.win32.isAbsolute(t)||ze.posix.isAbsolute(t)?t:(0,ze.join)(e,t)}var uh=new Map;async function Pa(t){let e=uh.get(t);if(e!==void 0)return e;try{let{stdout:r}=await Ot("git",["rev-parse","--git-path","info/exclude"],{cwd:t}),n=r.trim();if(n.length===0)return null;let o=iT(n,t);return uh.set(t,o),o}catch{return null}}async function dh(t,e){let r=await Pa(t);if(!r)return he.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,_t.readFile)(r,"utf-8")}catch(s){if(s.code!=="ENOENT")return he.warn("Failed to read %s: %s \u2014 skipping update",r,s.message),!1}let o=mh(e),i=fh(n,o);if(i===n)return!0;try{return await(0,_t.mkdir)((0,ze.dirname)(r),{recursive:!0}),await P(r,i),he.info("Updated %s with %d Jolli skill exclude paths",r,e.length),!0}catch(s){return he.warn("Failed to write %s: %s",r,s.message),!1}}async function Aa(t,e){let r=await Pa(t);if(!r)return he.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,_t.readFile)(r,"utf-8")}catch(i){if(i.code!=="ENOENT")return he.warn("Failed to read %s: %s \u2014 skipping update",r,i.message),!1}let o=sT(n,e);if(o===n)return!0;try{return await(0,_t.mkdir)((0,ze.dirname)(r),{recursive:!0}),await P(r,o),he.info("Merged %d Jolli skill exclude path(s) into %s",e.length,r),!0}catch(i){return he.warn("Failed to write %s: %s",r,i.message),!1}}async function ph(t,e){let r=await Pa(t);if(!r)return he.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",t),!1;let n;try{n=await(0,_t.readFile)(r,"utf-8")}catch(i){return i.code==="ENOENT"?!0:(he.warn("Failed to read %s: %s \u2014 skipping cleanup",r,i.message),!1)}let o=aT(n,e);if(o===n)return!0;try{return await P(r,o),he.info("Removed %d Jolli exclude path(s) from %s",e.length,r),!0}catch(i){return he.warn("Failed to write %s: %s",r,i.message),!1}}function mh(t){return`${[an,...t,ln].join(`
`)}
`}function fh(t,e){let r=t.split(`
`),n=r.indexOf(an),o=r.indexOf(ln),i=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...i,...r.slice(o+1)].join(`
`);if(t.length===0)return e;let s=t.endsWith(`
`)?"":`
`;return`${t}${s}${e}`}function sT(t,e){let r=t.split(`
`),n=r.indexOf(an),o=r.indexOf(ln),i=n!==-1&&o!==-1&&o>n?r.slice(n+1,o):[],s=new Set(i),a=[...i];for(let l of e)s.has(l)||(s.add(l),a.push(l));return fh(t,mh(a))}function aT(t,e){let r=t.split(`
`),n=r.indexOf(an),o=r.indexOf(ln);if(n===-1||o===-1||o<=n)return t;let i=new Set(e),s=r.slice(n+1,o).filter(c=>!i.has(c)),a=r.slice(0,n),l=r.slice(o+1);return s.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,an,...s,ln,...l].join(`
`)}var ut=require("node:fs/promises"),Ia=require("node:os"),cn=require("node:path");h();var ir=p("GlobalInstructionsInstaller"),Da="<!-- >>> jolli memory instructions >>> -->",Na="<!-- <<< jolli memory instructions <<< -->",hh="## Jolli Memory",gh=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function lT(){return`${[Da,hh,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",Na].join(`
`)}
`}function yh(t){return t==="enabled"?{write:!0}:t==="disabled"?{write:!1,remove:!0}:{write:!1}}function cT(t,e){let r=t.split(`
`),n=r.indexOf(Da),o=r.indexOf(Na),i=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...i,...r.slice(o+1)].join(`
`);let s=r.indexOf(hh);if(s!==-1){let l=r.length;for(let u=s+1;u<r.length;u++)if(/^#{1,2} /.test(r[u])){l=u;break}let c=r.slice(0,s).join(`
`),d=r.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${e}${d}`}if(t.length===0)return e;let a=t.endsWith(`
`)?"":`
`;return`${t}${a}${e}`}async function uT(t,e){let r="";try{r=await(0,ut.readFile)(t,"utf-8")}catch(o){if(o.code!=="ENOENT"){ir.warn("Failed to read %s: %s \u2014 skipping",t,o.message);return}}let n=cT(r,e);if(n!==r)try{await(0,ut.mkdir)((0,cn.dirname)(t),{recursive:!0}),await(0,ut.writeFile)(t,n,"utf-8"),ir.info("Updated %s with Jolli Memory instructions",t)}catch(o){ir.warn("Failed to write %s: %s",t,o.message)}}async function wh(t){let e=lT(),r=(0,Ia.homedir)();for(let n of gh)t[n.host]&&await uT((0,cn.join)(r,...n.relPath),e)}function dT(t){let e=t.split(`
`),r=e.indexOf(Da),n=e.indexOf(Na);if(r===-1||n===-1||n<r)return t;let o=r>0&&e[r-1]===""?r-1:r;return[...e.slice(0,o),...e.slice(n+1)].join(`
`)}async function pT(t){let e;try{e=await(0,ut.readFile)(t,"utf-8")}catch(n){n.code!=="ENOENT"&&ir.warn("Failed to read %s: %s \u2014 skipping",t,n.message);return}let r=dT(e);if(r!==e)try{await(0,ut.writeFile)(t,r,"utf-8"),ir.info("Removed Jolli Memory instructions from %s",t)}catch(n){ir.warn("Failed to write %s: %s",t,n.message)}}async function Sh(){let t=(0,Ia.homedir)();for(let e of gh)await pT((0,cn.join)(t,...e.relPath))}var ue=require("node:os"),F=require("node:path");le();h();var bh=require("node:fs"),ar=require("node:fs/promises"),sr=require("node:path");le();h();var Oa=p("McpRegistration"),La="jollimemory";function mT(t,e,r,n){return t==="win32"&&r?{command:"node",args:[r,...n]}:{command:e,args:[...n]}}function Ma(t,e,r){return mT(t,e,r,["mcp"])}function $a(t){let e=qo(nn(t));return e?(0,sr.join)(e.distDir,"Cli.js"):void 0}function Eh(t){let e=qo(nn(t));if(!e)return;let r=(0,sr.join)(e.distDir,"McpLauncher.js");return(0,bh.existsSync)(r)?r:void 0}var kh="/.mcp.json";async function _h(t){let e=(0,sr.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,ar.readFile)(e,"utf-8"))}catch(l){if(l.code!=="ENOENT"){Oa.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",e,String(l));return}r={}}let n=r.mcpServers??{},o=se(),i=(0,sr.join)(o,"run-cli"),s=process.platform==="win32"?$a(o):void 0;n[La]=Ma(process.platform,i,s);let a={...r,mcpServers:n};await(0,ar.writeFile)(e,`${JSON.stringify(a,null,2)}
`,"utf-8"),Oa.info("Registered MCP server in %s",e)}async function Th(t){let e=(0,sr.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,ar.readFile)(e,"utf-8"))}catch{return}r.mcpServers?.[La]&&(delete r.mcpServers[La],await(0,ar.writeFile)(e,`${JSON.stringify(r,null,2)}
`,"utf-8"),Oa.info("Removed MCP server from %s",e))}var Tt=require("node:fs/promises"),vh=require("node:path");ie();h();var Vo=p("CodexTomlWriter"),Xo="[mcp_servers.jollimemory]";async function xh(t){try{return(await(0,Tt.stat)(t)).mode&511}catch{return 384}}function Rh(t){return`${Xo}
command = ${JSON.stringify(t.command)}
args = ${JSON.stringify(t.args??[])}
`}function Ch(t){if(t.startsWith(Xo))return 0;let e=t.indexOf(`
${Xo}`);return e===-1?-1:e+1}function Ph(t){let e=Ch(t);if(e===-1)return t;let r=t.indexOf(`
[`,e+Xo.length),n=r===-1?t.length:r+1,o=t.slice(0,e),i=t.slice(n);return o===""||i===""?o+i:`${o.replace(/\n+$/,"")}

${i}`}async function Ah(t,e){let r="";try{r=await(0,Tt.readFile)(t,"utf-8")}catch(s){if(s.code!=="ENOENT"){Vo.warn("Skipping Codex MCP: %s unreadable (%s)",t,String(s));return}}let n=Ph(r).replace(/\s*$/,""),o=n.length===0?Rh(e):`${n}

${Rh(e)}`;if(o===r){Vo.info("Codex MCP server already registered in %s \u2014 no write needed",t);return}await(0,Tt.mkdir)((0,vh.dirname)(t),{recursive:!0});let i=await xh(t);await P(t,o,i),Vo.info("Registered Codex MCP server in %s",t)}async function Ih(t){let e;try{e=await(0,Tt.readFile)(t,"utf-8")}catch{return}Ch(e)!==-1&&(await P(t,`${Ph(e).replace(/\s*$/,"")}
`,await xh(t)),Vo.info("Removed Codex MCP server from %s",t))}var un=require("node:fs/promises"),Dh=require("node:path");ie();h();var Yo=p("JsonMcpWriter"),ja="jollimemory",Nh="mcpServers";async function Oe(t,e,r=Nh){let n,o="";try{let c=await(0,un.readFile)(t,"utf-8");o=c,n=c.trim()===""?{}:JSON.parse(c)}catch(c){if(c.code!=="ENOENT"){Yo.warn("Skipping MCP registration: %s unreadable/invalid (%s)",t,String(c));return}n={}}let i=n[r]??{},s=()=>`${JSON.stringify({...n,[r]:i},null,2)}
`,a=s();i[ja]=e;let l=s();if(l===o||l===a){Yo.info("MCP server already registered in %s \u2014 no write needed",t);return}await(0,un.mkdir)((0,Dh.dirname)(t),{recursive:!0}),await P(t,l),Yo.info("Registered MCP server in %s",t)}async function Le(t,e=Nh){let r;try{r=JSON.parse(await(0,un.readFile)(t,"utf-8"))}catch{return}let n=r[e];n?.[ja]&&(delete n[ja],await P(t,`${JSON.stringify(r,null,2)}
`),Yo.info("Removed MCP server from %s",t))}var fT=p("HostRegistrars"),hT={host:"claude",scope:"repo",register:_h,remove:Th,gitExcludePaths:()=>[kh]};function Me(){let t=se(),e=process.platform==="win32"?$a(t):void 0;return Ma(process.platform,(0,F.join)(t,"run-cli"),e)}function gT(){let t=Me();if(process.platform!=="win32")return t;let e=Eh(se());return e?{command:"node",args:[e]}:t}var yT={host:"cursor",scope:"repo",register:t=>Oe((0,F.join)(t,".cursor","mcp.json"),{...Me()}),remove:t=>Le((0,F.join)(t,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},wT={host:"gemini",scope:"global",register:()=>Oe((0,F.join)((0,ue.homedir)(),".gemini","settings.json"),{...Me()}),remove:()=>Le((0,F.join)((0,ue.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},ST={host:"codex",scope:"global",register:()=>Ah((0,F.join)((0,ue.homedir)(),".codex","config.toml"),gT()),remove:()=>Ih((0,F.join)((0,ue.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},bT={host:"opencode",scope:"global",register:()=>{let t=Me(),e={type:"local",command:[t.command,...t.args],enabled:!0};return Oe((0,F.join)((0,ue.homedir)(),".config","opencode","opencode.json"),e,"mcp")},remove:()=>Le((0,F.join)((0,ue.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},ET={host:"copilot",scope:"global",register:()=>Oe((0,F.join)((0,ue.homedir)(),".copilot","mcp-config.json"),{...Me()}),remove:()=>Le((0,F.join)((0,ue.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},kT={host:"copilotChat",scope:"global",register:()=>{let t=Me(),e={type:"stdio",command:t.command,args:t.args};return Oe((0,F.join)(We("Code"),"User","mcp.json"),e,"servers")},remove:()=>Le((0,F.join)(We("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},_T={host:"cline",scope:"global",register:async()=>{for(let t of await cs())await Oe(so(t),{...Me()})},remove:async()=>{for(let t of Lr())await Le(so(t))},gitExcludePaths:()=>[]},TT={host:"devin",scope:"global",register:()=>Oe((0,F.join)((0,ue.homedir)(),".config","devin","config.json"),{...Me(),transport:"stdio"}),remove:()=>Le((0,F.join)((0,ue.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},RT={host:"antigravity",scope:"global",register:()=>Oe((0,F.join)((0,ue.homedir)(),".gemini","config","mcp_config.json"),{...Me()}),remove:()=>Le((0,F.join)((0,ue.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},vT={host:"kimi",scope:"global",register:()=>Oe((0,F.join)(mo(),"mcp.json"),{...Me()}),remove:()=>Le((0,F.join)(mo(),"mcp.json")),gitExcludePaths:()=>[]};function lr(t){let e=[];return t.claude&&e.push(hT),t.cursor&&e.push(yT),t.gemini&&e.push(wT),t.codex&&e.push(ST),t.opencode&&e.push(bT),t.copilot&&e.push(ET),t.copilotChat&&e.push(kT),t.cline&&e.push(_T),t.devin&&e.push(TT),t.antigravity&&e.push(RT),t.kimi&&e.push(vT),e}var xT={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0};async function Fa(t,e,r,n){for(let o of t)try{await n(o)}catch(i){fT.warn("MCP %s failed for %s in %s (non-fatal): %s",r,o.host,e,String(i))}}async function Ha(t,e){let r=lr(e).filter(n=>n.scope==="repo");await Fa(r,t,"registration",n=>n.register(t))}async function Oh(t){let e=lr(t).filter(r=>r.scope==="global");await Fa(e,"(global)","registration",r=>r.register(""))}async function Ua(t){let e=lr(xT).filter(r=>r.scope==="repo");await Fa(e,t,"removal",r=>r.remove(t))}var L=require("node:fs/promises"),ur=require("node:os"),A=require("node:path");ie();h();var $e='"$HOME/.jolli/jollimemory/run-cli"',CT="1.0.0";function PT(){let t=Object.keys(Mr),r=[...t.filter(n=>n==="cursor-agent"),...t.filter(n=>n!=="cursor-agent")].map(De);return`${r.slice(0,-1).join(", ")}, or ${r[r.length-1]}`}function Lh(){return`---
name: jolli
description: State-aware front door for Jolli Memory in Cursor \u2014 reads how Jolli is set up in this repository, guides first-time setup through jolli-init, reminds the user to sign in when memories cannot sync yet, then routes to recall, search, status, timeline, push, PR, or workflow actions. Use when the user invokes Jolli or asks what Jolli can do.
metadata:
  version: "${CT}"
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
${$e} status
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
`}function AT(){return`---
name: jolli-init
description: "Set up Jolli Memory for the current repository in Cursor: verify the plugin hook, enable memory generation through Cursor, sign in to Jolli when sharing is requested, and bind the repo to a Jolli Space. Use for first-time setup, repair, enablement, or Space binding."
---

# Jolli Init

Complete the steps in order. Stop when a required step fails.

## 1. Inspect state

Call the Jolli Memory \`status\` tool. If unavailable, run \`${$e} status\`.
If the dispatcher is missing, ask the user to run **Developer: Reload Window** and
start a new chat so the Jolli \`sessionStart\` hook runs, then retry.

## 2. Enable local memory generation

Run:

\`\`\`bash
${$e} enable --repo-hooks-only --source-tag cursor-plugin
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
- summaries run through Cursor when provider is \`local-agent\`;
- Jolli sign-in and bound Space when sharing was configured;
- a normal commit captures memory and \`git push\` publishes to the bound Space;
- when the MCP tools were unavailable, that enabling \`jollimemory\` in **Customize**
  turns them on (a reload is not required).
`}function IT(){return`---
name: jolli-login
description: Sign in to Jolli from Cursor so the repository can bind to a Jolli Space and share memories. Use when the user asks to log in, authenticate Jolli, connect an account, or fix missing Jolli credentials.
---

# Jolli Login

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
`}function DT(){return`---
name: jolli-logout
description: Sign out of Jolli from Cursor by clearing the stored Jolli auth token and Jolli API key while preserving other provider credentials. Use when the user asks to log out, disconnect Jolli, or remove Jolli account credentials.
---

# Jolli Logout

Run:

\`\`\`bash
${$e} auth logout
\`\`\`

Report the command output, then call the Jolli Memory \`status\` tool when
available. Explain the provider-aware result:

- Space binding and cloud sharing require a future Jolli sign-in.
- \`local-agent\` memory generation continues through the configured
  ${PT()} login.
- \`anthropic\` generation continues when its preserved Anthropic key exists.
- \`jolli\` generation stops unless another Jolli API key remains configured.

If the dispatcher does not exist, ask the user to run **Developer: Reload Window**,
start a new chat so the Jolli \`sessionStart\` hook runs, and retry.
`}function NT(){return`---
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
`}function OT(){return`---
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
`}function LT(){return`---
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
`}var MT=[{name:"jolli-init",build:AT},{name:"jolli-login",build:IT},{name:"jolli-logout",build:DT},{name:"jolli-status",build:NT},{name:"jolli-timeline",build:OT},{name:"jolli-push",build:LT}],X0=MT.map(t=>t.name);var dn=require("node:os"),cr=require("node:path");h();var $T=p("CursorSettings"),jT="cursor/thirdPartyExtensibilityEnabled";function FT(t=process.env){let e=(0,dn.homedir)();if((0,dn.platform)()==="win32"){let r=t.APPDATA??(0,cr.join)(e,"AppData","Roaming");return(0,cr.join)(r,"Cursor","User","globalStorage","state.vscdb")}return(0,dn.platform)()==="darwin"?(0,cr.join)(e,"Library","Application Support","Cursor","User","globalStorage","state.vscdb"):(0,cr.join)(t.XDG_CONFIG_HOME??(0,cr.join)(e,".config"),"Cursor","User","globalStorage","state.vscdb")}async function Mh(t=process.env,e=FT(t)){try{let{DatabaseSync:r}=await import("node:sqlite"),n=new r(e,{readOnly:!0});try{let o=n.prepare("SELECT value FROM ItemTable WHERE key = ?").get(jT);if(o?.value===void 0)return!0;let i=String(o.value).trim().replace(/^"|"$/gu,"");return i!=="false"&&i!=="0"}finally{n.close()}}catch(r){return $T.info("Could not read Cursor's third-party-extensibility setting (assuming enabled): %s",r.message),!0}}var z=p("SkillInstaller"),dr="1.0.0",jh=["jollimemory-recall","jolli-memory-recall"],pn=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],Ja=[".claude","skills"],Qo=[{name:"jolli-recall",build:YT},{name:"jolli-search",build:zT},{name:"jolli-local-run",build:QT},{name:"jolli-remote-run",build:ZT},{name:"jolli",build:eR}],Fh=["jolli-pr"],Hh=pn.flatMap(t=>Qo.map(e=>`/${t.relativeDir.join("/")}/${e.name}/`)),Zo=["/.claude/skills/jolli/"],Uh=[...pn.map(t=>`/${t.relativeDir.join("/")}/jolli/`),...Zo];async function HT(t,e={}){for(let r of jh)await ei((0,A.join)(t,".claude","skills",r),"legacy");await Ba(t);for(let r of pn){if(!r.enabled(e))continue;let n=(0,A.join)(t,...r.relativeDir);for(let o of Qo)await Ka(n,o.name,o.build())}await Ga(t)}async function Ba(t){for(let e of pn){let r=(0,A.join)(t,...e.relativeDir);for(let n of Fh)await ei((0,A.join)(r,n),"retired")}}async function ei(t,e){let r=(0,A.join)(t,"SKILL.md"),n;try{n=await(0,L.readFile)(r,"utf-8")}catch{return}if(!qa(n)){z.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",t);return}try{await(0,L.rm)(t,{recursive:!0,force:!0}),z.info("Removed %s Jolli skill at %s",e,t)}catch(o){z.warn("Failed to remove %s skill at %s: %s",e,t,o.message)}}async function Jh(t,e={}){return HT(t,e)}async function Bh(t){let e=(0,A.join)(t,...Ja),r=(0,A.join)(e,"jolli","SKILL.md");try{if(!(await(0,L.readFile)(r,"utf-8")).includes('vendor: "jolli.ai"')){z.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",r);return}}catch{}await Ka(e,"jolli",tR())}var zo=[".cursor","skills"],Wa=Qo.filter(t=>t.name!=="jolli"),Wh=[".cursor","skills"],Gh=[`/${zo.join("/")}/`,...Wa.map(t=>`/${zo.join("/")}/${t.name}/`)];async function Ga(t){let e=(0,A.join)(t,...zo),r=await UT(),n=await WT(t);r===void 0&&await GT();for(let o of Wa){let i=(0,A.join)(e,o.name);if(!await JT(i))continue;if(await qT(n,o.name)||r===void 0){await(0,L.rm)(i,{recursive:!0,force:!0});continue}await BT(i,(0,A.join)(r,o.name))}}var qh="cursor-plugin-root";async function Kh(t){try{let e=(0,A.join)((0,ur.homedir)(),".jolli","jollimemory");await(0,L.mkdir)(e,{recursive:!0}),await P((0,A.join)(e,qh),`${t}
`)}catch(e){z.info("Could not record the Cursor plugin root: %s",e.message)}}async function UT(){try{let e=(await(0,L.readFile)((0,A.join)((0,ur.homedir)(),".jolli","jollimemory",qh),"utf-8")).split(`
`)[0]?.trim();if(!e)return;let r=(0,A.join)(e,"mirror");return await(0,L.lstat)(r),r}catch{return}}async function JT(t){try{return(await(0,L.lstat)(t)).isSymbolicLink()}catch{return!0}}async function BT(t,e){await(0,L.rm)(t,{recursive:!0,force:!0}),await(0,L.mkdir)((0,A.dirname)(t),{recursive:!0});try{await(0,L.symlink)(e,t,"dir");return}catch(r){z.info("Symlink unavailable for %s (%s) \u2014 copying instead",t,r.message)}try{let r=await(0,L.readFile)((0,A.join)(e,"SKILL.md"),"utf-8");await(0,L.mkdir)(t,{recursive:!0}),await P((0,A.join)(t,"SKILL.md"),r)}catch(r){z.warn("Could not place %s: %s",t,r.message)}}async function WT(t){let e=(0,ur.homedir)(),r=[(0,A.join)(t,".agents","skills"),(0,A.join)(e,".agents","skills")];return await Mh()&&r.push((0,A.join)(t,".claude","skills"),(0,A.join)(e,".claude","skills"),(0,A.join)(t,".codex","skills"),(0,A.join)(e,".codex","skills")),r}async function Vh(t=(0,ur.homedir)()){await Ka((0,A.join)(t,...Wh),"jolli",Lh())}async function GT(t=(0,ur.homedir)()){await ei((0,A.join)(t,...Wh,"jolli"),"cursor global menu")}async function Xh(t){let e=(0,A.join)(t,...zo);for(let r of Wa){let n=(0,A.join)(e,r.name),o=!1;try{o=(await(0,L.lstat)(n)).isSymbolicLink()}catch{continue}if(o){await(0,L.rm)(n,{recursive:!0,force:!0}),z.info("Removed cursor mirror symlink at %s",n);continue}await ei(n,"cursor mirror")}}async function qT(t,e){for(let r of t)try{return await(0,L.readFile)((0,A.join)(r,e,"SKILL.md"),"utf-8"),!0}catch{}return!1}async function Yh(t){let e=[...pn.map(r=>r.relativeDir),Ja];for(let r of e){let n=(0,A.join)(t,...r,"jolli"),o=(0,A.join)(n,"SKILL.md"),i;try{i=await(0,L.readFile)(o,"utf-8")}catch{continue}if(i.includes('vendor: "jolli.ai"'))try{await(0,L.rm)(n,{recursive:!0,force:!0}),z.info("Removed Jolli umbrella menu at %s",n)}catch(s){z.warn("Failed to remove umbrella at %s: %s",n,s.message)}}}var KT=[...Qo.filter(t=>t.name!=="jolli").map(t=>t.name),...Fh,...jh];async function zh(t){for(let e of KT){let r=(0,A.join)(t,...Ja,e),n=(0,A.join)(r,"SKILL.md"),o;try{o=await(0,L.readFile)(n,"utf-8")}catch{continue}if(!qa(o)){z.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",r);continue}try{await(0,L.rm)(r,{recursive:!0,force:!0}),z.info("Removed legacy Jolli skill at %s",r)}catch(i){z.warn("Failed to remove legacy skill at %s: %s",r,i.message)}}}var VT=/(?:^|\n)[ \t]*revision:\s*(\d+)/,XT=-1;function $h(t){let e=t.match(VT),r=e?Number.parseInt(e[1],10):Number.NaN;return Number.isFinite(r)?r:XT}function qa(t){return t.includes('vendor: "jolli.ai"')||t.includes("jolli-skill-version:")}async function Ka(t,e,r){let n=(0,A.join)(t,e),o=(0,A.join)(n,"SKILL.md"),i=$h(r);try{let s=await(0,L.readFile)(o,"utf-8");if(!qa(s)){z.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",e);return}if($h(s)>=i)return}catch{}try{await(0,L.mkdir)(n,{recursive:!0}),await P(o,r),z.info("Wrote SKILL.md (revision %d) to %s",i,o)}catch(s){z.warn("Failed to write %s SKILL.md: %s",e,s.message)}}var ti=`### Shell prerequisite

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
security recipe and the dist resolver and will not produce valid output.`;function Qh(t,e){return`${ti}

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
vector.`}function YT(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${dr}"
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

${Qh("recall"," --format json")}

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
`}function zT(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${dr}"
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

${Qh("search"," --format json")}

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
`}function QT(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${dr}"
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

${ti}

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
`}function ZT(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${dr}"
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

${ti}

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
`}function eR(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills available in this session (recall, search, run a workflow local or remote, workflow history, plus any setup and account skills a Jolli plugin adds) and the Jolli MCP tools, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${dr}"
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

${ti}

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
`}function tR(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${dr}"
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
`}var N=p("Installer");function nR(t,e){return process.platform==="linux"?t===e:t.toLowerCase()===e.toLowerCase()}async function oR(t){let e=await Se(),r=yh(e.globalInstructions);if(r.write){let n=t?.codexDetected??await ps(),o=t?.geminiDetected??await ws();await wh({claude:e.claudeEnabled!==!1,gemini:o&&e.geminiEnabled!==!1,codex:n&&e.codexEnabled!==!1})}else r.remove&&await Sh()}async function eg(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0,i=e?.repoHooksOnly===!0;if(o&&i)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:n};if(!await Cn(r))return N.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",r),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${r})`,warnings:n};N.info(i?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let s=null;try{let a=await Se(),l=e?.automatic?[r]:await Mt(r),c=e?.automatic?{timeoutMs:200,pollMs:25}:void 0,d=(0,Rt.dirname)((0,Zh.fileURLToPath)(__jmImportMetaUrl)),u=e?.source??"cli",f=e?.sourceTag??(u==="vscode-extension"?_a(d):"cli");if(!Yr(f))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(f)}`,warnings:n};let m=Pd(f),S=async()=>{if(!await va())return!1;try{await sh()}catch(k){N.warn("Legacy dist-path migration failed (non-fatal): %s",k.message)}if(!await zr(f,e?.distDir))return!1;try{let k=await ih();k.length>0&&N.info("Pruned stale dist-paths entries: %s",k.join(", "))}catch(k){N.warn("Pruning stale dist-paths failed (non-fatal): %s",k.message)}return!0},R=c?await Ii(S,c):await Ii(S);if(!R.acquired||R.value!==!0)return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:n};if(!o){if(s=c?await _r(r,c):await _r(r),!s)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};if(e?.respectManualDisable&&await rt(r))return{success:!0,message:"Repository remains manually disabled",warnings:n,manuallyDisabled:!0};if(!e?.automatic)try{let k=await Ad(f,a);k!==null&&(k.changedTool||k.seededProvider)&&(N.info("Plugin init recorded localAgentTool=%s (source %s, previous %s, seededProvider=%s)",k.tool,f,k.previousTool??"unset",k.seededProvider),k.changedTool&&k.previousTool!==void 0&&n.push(`Recorded ${De(k.tool)} as the local agent for memory generation (was: ${De(k.previousTool)}). Change it back with jolli configure --set localAgentTool=${k.previousTool}`))}catch(k){n.push(`Could not record the local agent tool for this host: ${k.message}`)}}let b=i?!1:await ps(),E=i?!1:await ws(),D=i?!1:await zu(),O=i?!1:await Ld(),B=i?!1:await qu(),Te=i?!1:await Fu(),Z=i?!1:await Nu()||await Iu(),Qe=i?!1:await gs(),Ct=i?!1:await vs(),fr=i?!1:await fs(),hr=i?!1:await Ou(),hn=i?!1:await ed(),pl=i?!1:await Su(),ml=i?!1:await Cd(),gr={};for(let k of l){let Pt=await Xi(k),$g=(0,Rt.join)(Pt,"sessions.json");try{await(0,ri.writeFile)($g,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(je){je.code!=="EEXIST"&&N.warn("Failed to bootstrap sessions.json in %s: %s",k,je.message)}if(i){if(await Ba(k),m==="claude"){if(await Bh(k),await zh(k),await Aa(k,[...Zo]),a.claudeEnabled!==!1){let je=await Zs(k);(k===r||gr.path===void 0)&&(gr=je)}}else if(m==="cursor"){let je={claude:!1,codex:!1,cursor:!0,gemini:!1,opencode:!1,copilot:!1,copilotChat:!1,cline:!1,devin:!1,antigravity:!1,kimi:!1};await Ha(k,je),await Aa(k,[...lr(je).flatMap(jg=>jg.gitExcludePaths()),...Gh])}await Ga(k);continue}await Jh(k,{claudeEnabled:a.claudeEnabled});let wl={claude:a.claudeEnabled!==!1,codex:b,cursor:Qe,gemini:E,opencode:Ct,copilot:fr,copilotChat:Te,cline:hr,devin:hn,antigravity:pl,kimi:ml};if(await dh(k,[...Hh,...Zo,...lr(wl).flatMap(je=>je.gitExcludePaths())]),await Ha(k,wl),o||a.claudeEnabled===!1)continue;let ci=await Zs(k);ci.warning&&n.push(ci.warning),(k===r||gr.path===void 0)&&(gr=ci)}await Oh({claude:!1,cursor:!1,codex:b||i&&m==="codex",gemini:E,opencode:Ct,copilot:fr,copilotChat:Te,cline:hr,devin:hn,antigravity:pl,kimi:ml}),i||await oR({codexDetected:b,geminiDetected:E});let gn={},yn={},wn={},Sn={},bn={};o||(gn=await iu(r),gn.warning&&n.push(gn.warning),yn=await su(r),yn.warning&&n.push(yn.warning),wn=await au(r),wn.warning&&n.push(wn.warning),Sn=await lu(r),Sn.warning&&n.push(Sn.warning),bn=await cu(r),bn.warning&&n.push(bn.warning)),b&&a.codexEnabled===void 0&&(await ft({codexEnabled:!0}),N.info("Codex detected \u2014 enabled Codex session discovery"));let li;if(E&&a.geminiEnabled!==!1){if(!o)for(let k of l){let Pt=await xa(k);(k===r||li===void 0)&&(li=Pt.path)}a.geminiEnabled===void 0&&(await ft({geminiEnabled:!0}),N.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&O&&a.openCodeEnabled===void 0&&(await ft({openCodeEnabled:!0}),N.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let Mg=i?!1:await Ku(),fl=a.cursorEnabled!==!1&&D,hl=a.cursorEnabled!==!1&&Mg;(fl||hl)&&a.cursorEnabled===void 0&&(await ft({cursorEnabled:!0}),N.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",fl,hl));let gl=a.copilotEnabled!==!1&&B,yl=a.copilotEnabled!==!1&&Te;if((gl||yl)&&a.copilotEnabled===void 0&&(await ft({copilotEnabled:!0}),N.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",gl,yl)),Z&&a.clineEnabled===void 0&&(await ft({clineEnabled:!0}),N.info("Cline detected \u2014 enabled Cline session discovery")),!i)for(let k of l)await iR(k);if(e?.source==="vscode-extension")N.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(i)N.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let k=await im(r);N.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",k.alreadyDone,k.fresh,k.migrated,k.skipped)}catch(k){N.warn("Schema v5 migration failed (non-fatal): %s",k.message)}if(e?.clearManualDisableOnSuccess&&!o)try{await Li(r,!1)}catch(k){let Pt=k.message;n.push(`Enabled, but could not clear the manual-disable opt-out (${Pt}). Run enable again to clear it.`),N.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",Pt)}return N.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:n,claudeSettingsPath:gr.path,gitHookPath:gn.path,postRewriteHookPath:yn.path,prepareMsgHookPath:wn.path,postMergeHookPath:Sn.path,prePushHookPath:bn.path,geminiSettingsPath:li}}catch(a){let l=`Installation failed: ${a.message}`;return N.error(l),{success:!1,message:l,warnings:n}}finally{s&&await s.release()}}async function iR(t){let e=V(t);try{await(0,ri.stat)(e)}catch{return}let r=se();if(nR((0,Rt.resolve)(e),(0,Rt.resolve)(r)))return;let n=await Ht(e),o={};for(let[c,d]of Object.entries(n))d!==void 0&&(o[c]=d);if(Object.keys(o).length===0)return;let i=await Ht(r),s={};for(let[c,d]of Object.entries(o))i[c]===void 0&&(s[c]=d);Object.keys(s).length>0&&await Hn(s,r);let a={};for(let c of Object.keys(s))a[c]=void 0;Object.keys(a).length>0&&await Hn(a,e);let l=Object.keys(o).filter(c=>!(c in s));for(let c of l)N.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",t,c,String(o[c]),String(i[c]));N.info("Migrated %d config fields from worktree %s to global",Object.keys(s).length,t)}async function tg(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0;N.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let i=null;try{if(!o&&!e?.repoLockHeld&&(i=await _r(r),!i))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};!o&&e?.persistManualDisable&&await Li(r,!0);let s;try{s=await Mt(r)}catch{s=[r]}if(o){for(let l of s)try{await Ua(l)}catch(c){N.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return N.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:n}}for(let l of s){let c=await ea(l);c.warning&&n.push(c.warning),await Ca(l);try{await Ua(l)}catch(d){N.warn("MCP removal failed in %s (non-fatal): %s",l,d.message)}e?.preserveMenu||await Yh(l),await Xh(l)}let a=await uu(r);return a.warning&&n.push(a.warning),await du(r),await pu(r),await mu(r),await fu(r),e?.preserveMenu||await ph(r,Uh),n.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),N.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:n}}catch(s){let a=`Uninstallation failed: ${s.message}`;return N.error(a),{success:!1,message:a,warnings:n}}finally{i&&await i.release()}}h();function ni(){return new Promise((t,e)=>{let r=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",n=>r.push(n)),process.stdin.on("end",()=>{process.stdin.destroy(),t(r.join(""))}),process.stdin.on("error",e)})}var Q=require("node:fs"),_e=require("node:path"),_g=require("node:url");yo();Rn();oe();function rg(t){return t.aiProvider==="local-agent"?!0:t.aiProvider==="jolli"?!!t.jolliApiKey:t.aiProvider==="anthropic"?!!(t.apiKey||process.env.ANTHROPIC_API_KEY):!!(t.apiKey||process.env.ANTHROPIC_API_KEY||t.jolliApiKey)}nt();le();h();we();function sR(t){return[`1) Re-authenticate ${De(t)}:  ${Id(t)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function aR(t,e){let r=Dd(t);return r===null?[]:[`${e}${r}`]}function ng(t){return[`[Jolli Memory] Memory generation failed for a recent commit: ${De(t)} authentication expired or is unavailable.`,...aR(t,""),"\u2192 Fix with either:",...sR(t).map(e=>`    ${e}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var ke=p("SessionStartHook"),_R=new Set(["main","master","develop","development","staging","production"]),si=500,TR=250;function RR(t=si+TR){let e=setTimeout(()=>process.exit(0),t);return e.unref(),e}var Tg="login-reminder-dismissed";function vR(t){let e=Ts(t,"init");return e===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${e} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Tg}.)`].join(`
`)}function xR(t,e,r){return e||r?null:vR(t)}async function Rg(t,e){let r=ho(t);if(r===void 0||e.aiProvider!==void 0)return!1;try{return await Un(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",localAgentTool:r},result:!0}:{update:null,result:!1})?(ke.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,t),!0):(ke.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",t),!1)}catch(n){return ke.info("Failed to seed default local-agent provider: %s",n.message),!1}}async function CR(t,e=Cs()){let r=await Se(),n=rg(r),o=(0,_e.join)(t,".jolli","jollimemory",Tg),i=(0,Q.existsSync)(o);if(n&&i)try{(0,Q.rmSync)(o)}catch{}return xR(e,n,i)}async function vg(t,e){return(await Up(e)).readFile(`summaries/${t}.json`)}async function PR(t,e){try{let r=await vg(t,e);return r?op(JSON.parse(r)):!1}catch(r){return ke.info("Failed to check auth-failure state for %s: %s",t.substring(0,8),r.message),!1}}async function AR(t,e=Cs()){let r=ho(e);if(r===void 0)return null;let n=Pg(t);if(!n)return null;let o=await To(t);if(!o)return null;let i=o.entries.filter(l=>l.branch===n&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(i.length===0)return null;let s=[...i].sort((l,c)=>new Date(Y(c)).getTime()-new Date(Y(l)).getTime())[0];if(!await PR(s.commitHash,t))return null;let a=await Se();return ng(a.localAgentTool??r)}async function IR(){if(kn()){ke.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await ni(),{cwd:e}=JSON.parse(t),r=Ll(e??process.cwd());if(Nt(r),ke.info("SessionStartHook invoked (cwd=%s)",r),await rt(r)){ke.info("SessionStart hook skipped \u2014 repository manually disabled");return}let n=await cl(r,"shared",{includeBriefing:!0,includePluginReminders:!1});n?process.stdout.write(n):ke.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(Eg(),bg));o()}catch(t){ke.info("SessionStartHook failed: %s",t.message)}}async function cl(t,e,r={}){let n=r.includeBriefing!==!1,o=r.includePluginReminders!==!1,[i,s,a]=await Promise.all([n?Promise.race([DR(t,e),ll(si)]):Promise.resolve(null),o?Promise.race([AR(t,e),ll(si)]):Promise.resolve(null),o?Promise.race([CR(t,e),ll(si)]):Promise.resolve(null)]),l=[s,a,i].filter(c=>!!c);return l.length===0?null:(ke.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function DR(t,e){let r=ai(t),n=Pg(t,r);if(!n||_R.has(n))return null;let o=FR(t,n,e,r);if(o)return o;let i=await To(t);if(!i)return null;let s=i.entries.filter(R=>R.branch===n&&(R.parentCommitHash===null||R.parentCommitHash===void 0));if(s.length===0)return null;let a=[...s].sort((R,b)=>new Date(Y(b)).getTime()-new Date(Y(R)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&UR(Y(l)))return null;let d=await NR(l.commitHash,t),u=OR(t,n),f=LR(a),m=MR(n,a,l,c,d,u,f,e),S=Cg(t,r);return HR(t,n,S??l.commitHash,m,e),m}async function NR(t,e){try{let r=await vg(t,e);if(!r)return{lastTopicTitle:null,keyDecisions:[]};let n=JSON.parse(r),o=zt(n),i=o.length>0?o[o.length-1].title:null,s=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&s.push(a.decisions);return{lastTopicTitle:i,keyDecisions:s}}catch(r){return ke.info("Failed to load last summary: %s",r.message),{lastTopicTitle:null,keyDecisions:[]}}}function OR(t,e){try{let r=(0,_e.join)(t,".jolli","jollimemory","plans.json");if(!(0,Q.existsSync)(r))return[];let n=JSON.parse((0,Q.readFileSync)(r,"utf-8")),o=eu(n).registry,i=[];for(let s of Object.values(o.plans))!s.commitHash&&s.title&&i.push(s.title);return i}catch{return[]}}function LR(t){let e=0,r=0,n=0,o=!1;for(let i of t)i.diffStats&&(e+=i.diffStats.filesChanged,r+=i.diffStats.insertions,n+=i.diffStats.deletions,o=!0);return o?{filesChanged:e,insertions:r,deletions:n}:null}function MR(t,e,r,n,o,i,s,a){let l=e.length,c=kg(Y(n)),d=kg(Y(r)),u=JR(Y(r),new Date().toISOString()),f=[];f.push(`[Jolli Memory \u2014 ${t}]`);let m=`${l} commits (${c} ~ ${d})`;s&&(m+=` | ${s.filesChanged} files, +${s.insertions} -${s.deletions}`),f.push(m);let S=o.lastTopicTitle??r.commitMessage;if(f.push(`Last: ${S} (${d})`),o.keyDecisions.length>0){let b=jR(o.keyDecisions);f.push(`Decisions: ${b}`)}i.length>0&&f.push(`Plans: ${i.join("; ")}`);let R=$R(u,a);return R&&f.push(R),f.join(`
`)}function $R(t,e){if(t<=0)return null;let r=Ts(e,"recall")??"`jolli recall`";return t>3?`Warning: ${t} days since last commit. Run ${r} for full context.`:`Tip: run ${r} for full context`}function jR(t){let r=[],n=0;for(let o of t){let i=o.replace(/[.;]\s*$/,"").trim();if(i.length>200&&(i=`${i.slice(0,199)}\u2026`),n+i.length>200&&r.length>0)break;r.push(i),n+=i.length+2}return r.join("; ")}function xg(t){return(0,_e.join)(t,".jolli","jollimemory","briefing-cache.json")}function FR(t,e,r,n=ai(t)){let o=xg(t);if(!(0,Q.existsSync)(o))return null;try{let i=JSON.parse((0,Q.readFileSync)(o,"utf-8"));if(i.branch!==e||i.clientKind!==r)return null;let s=Cg(t,n);return!s||i.lastCommitHash!==s?null:i.briefingText}catch{return null}}function HR(t,e,r,n,o){let i=xg(t),s={branch:e,lastCommitHash:r,briefingText:n,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,_e.dirname)(i);(0,Q.existsSync)(a)||(0,Q.mkdirSync)(a,{recursive:!0});let l=`${i}.${process.pid}.tmp`;(0,Q.writeFileSync)(l,JSON.stringify(s,null,"	"),"utf-8"),(0,Q.renameSync)(l,i)}catch{}}function ai(t){return pt(t)}function Cg(t,e=ai(t)){let r=e?Il(e):null;if(r)return r;try{return Re("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function Pg(t,e=ai(t)){let r=e?Al(e):null;if(r)return r;if(e)return null;try{return Re("git",["branch","--show-current"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function ll(t){return new Promise(e=>{setTimeout(()=>e(null),t).unref()})}function UR(t){let e=new Date(t),r=new Date;return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}function JR(t,e){let r=new Date(t).getTime(),n=new Date(e).getTime();return Math.floor(Math.abs(n-r)/(1e3*60*60*24))}function kg(t){return t?t.split("T")[0]:"unknown"}function BR(){let t=process.argv[1];if(process.env.VITEST||!t||(0,_e.resolve)(t)!==(0,_e.resolve)((0,_g.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,_e.basename)(t).toLowerCase();return e==="sessionstarthook.js"||e==="sessionstarthook.ts"}BR()&&(RR(),IR());var xt=p("CursorPluginBootstrapHook"),ul="cursor-plugin",Ag={timeoutMs:200,pollMs:25};function Dg(t){return t?{additional_context:t}:null}function Ng(t,e){let r=t.workspace_roots,n=[Array.isArray(r)?r.find(o=>typeof o=="string"&&o.trim().length>0):void 0,e.CURSOR_PROJECT_DIR,process.cwd()];for(let o of n)if(!(o===void 0||o.trim().length===0)&&!Ql(o))return o;return null}async function Og(t){if(!await Cn(t))return null;let e=await j(["rev-parse","--show-toplevel"],t);if(e.exitCode!==0||!e.stdout.trim())return null;let r=e.stdout.trim();if(!await Zi(r))return Nt((0,Ig.homedir)()),xt.info("Cursor plugin bootstrap: %s has not opted in \u2014 leaving it untouched",r),null;Nt(r);let n=!1;if(!(await Pi(r,async()=>{n=await rt(r),n&&await tg(r,{preserveMenu:!0,repoLockHeld:!0})},Ag)).acquired)return xt.info("Cursor plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy"),null;if(n)return null;let i=await eg(r,{repoHooksOnly:!0,sourceTag:ul,respectManualDisable:!0,automatic:!0});if(!i.success)return xt.warn("Cursor plugin repo-hook reconciliation failed: %s",i.message),null;let s=null;return(await Pi(r,async()=>{if(await rt(r))return;let l=await Se();l.cursorEnabled!==!1&&(await Rg(ul,l),s=await cl(r,ul,{includeBriefing:!0,includePluginReminders:!0}))},Ag)).acquired||xt.info("Cursor plugin context deferred \u2014 repo hook lifecycle lock is busy"),Dg(s)}async function Lg(){if(kn()){xt.info("Cursor plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await ni(),e=t.trim()?JSON.parse(t):{};await Vh(),await Kh((0,mr.resolve)((0,dl.fileURLToPath)(__jmImportMetaUrl),"..",".."));let r=Ng(e,process.env);if(r===null){xt.info("Cursor plugin bootstrap: no workspace named \u2014 global /jolli menu ensured, nothing repo-scoped to do");return}let n=await Og(r);n&&process.stdout.write(JSON.stringify(n))}catch(t){xt.info("Cursor plugin bootstrap failed: %s",t.message)}}function WR(){let t=process.argv[1];if(process.env.VITEST||!t||(0,mr.resolve)(t)!==(0,mr.resolve)((0,dl.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,mr.basename)(t).toLowerCase();return e==="cursorpluginbootstraphook.js"||e==="cursorpluginbootstraphook.ts"}WR()&&Lg();0&&(module.exports={buildCursorBootstrapOutput,main,resolveCursorProjectDir,runCursorPluginBootstrap});
