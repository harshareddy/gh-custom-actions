const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
 const bucket = core.getInput('bucket',{required:true});
 const bucketregion = core.getInput('bucket-region',{required:true});
 const distFolder = core.getInput('dist-folder',{required:true});

 exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketregion}` );
 core.notice('Hello from my custom JavaScript action!');
}

run();