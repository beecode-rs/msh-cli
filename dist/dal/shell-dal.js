import shell from 'shelljs';
import { logger } from '#src/util/logger';
export const shellDal = {
    cd: (dir) => {
        shell.cd(dir);
    },
    // exec: (cmd: string): Promise<ExecResult> =>
    //   new Promise((resolve, reject) => {
    //     logger().debug(shellDal.pwd())
    //     const child = shell.exec(cmd, { async: true, silent: true })
    //     const result = { stdout: '', stderr: '', errorOccurred: false }
    //
    //     if (child.stdout) {
    //       child.stdout.on('data', (data) => {
    //         result.stdout = (result.stdout ?? '') + data.toString()
    //       })
    //       child.stdout.on('end', () => {
    //         resolve(result)
    //       })
    //     } else if (child.stderr) {
    //       child.stderr.on('end', () => {
    //         resolve(result)
    //       })
    //     }
    //
    //     if (child.stderr) {
    //       child.stderr.on('data', (data) => {
    //         result.stderr = (result.stderr ?? '') + data.toString()
    //         result.errorOccurred = (child.exitCode ?? 0) !== 0
    //       })
    //     }
    //   }),
    exec: (cmd) => new Promise((resolve) => {
        logger().debug(shellDal.pwd());
        shell.exec(cmd, { silent: true }, (code, stdout, stderr) => {
            const errorOccurred = code !== 0;
            resolve({ errorOccurred, stderr, stdout });
        });
    }),
    print: (message) => {
        shell.echo(message);
    },
    pwd: () => {
        return shell.pwd();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlbGwtZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhbC9zaGVsbC1kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFBO0FBRTNCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQVF6QyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUc7SUFDdkIsRUFBRSxFQUFFLENBQUMsR0FBVyxFQUFRLEVBQUU7UUFDekIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFDRCw4Q0FBOEM7SUFDOUMsdUNBQXVDO0lBQ3ZDLHFDQUFxQztJQUNyQyxtRUFBbUU7SUFDbkUsc0VBQXNFO0lBQ3RFLEVBQUU7SUFDRiwwQkFBMEI7SUFDMUIsNENBQTRDO0lBQzVDLGtFQUFrRTtJQUNsRSxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFFBQVE7SUFDUixFQUFFO0lBQ0YsMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1QyxrRUFBa0U7SUFDbEUsNkRBQTZEO0lBQzdELFdBQVc7SUFDWCxRQUFRO0lBQ1IsUUFBUTtJQUNSLElBQUksRUFBRSxDQUFDLEdBQVcsRUFBdUIsRUFBRSxDQUMxQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3ZCLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDMUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQTtZQUVoQyxPQUFPLENBQUMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUM7SUFDSCxLQUFLLEVBQUUsQ0FBQyxPQUFlLEVBQVEsRUFBRTtRQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3BCLENBQUM7SUFDRCxHQUFHLEVBQUUsR0FBVyxFQUFFO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ25CLENBQUM7Q0FDRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNoZWxsIGZyb20gJ3NoZWxsanMnXG5cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJyNzcmMvdXRpbC9sb2dnZXInXG5cbmV4cG9ydCB0eXBlIEV4ZWNSZXN1bHQgPSB7XG5cdHN0ZG91dDogc3RyaW5nXG5cdHN0ZGVycjogc3RyaW5nXG5cdGVycm9yT2NjdXJyZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IHNoZWxsRGFsID0ge1xuXHRjZDogKGRpcjogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0c2hlbGwuY2QoZGlyKVxuXHR9LFxuXHQvLyBleGVjOiAoY21kOiBzdHJpbmcpOiBQcm9taXNlPEV4ZWNSZXN1bHQ+ID0+XG5cdC8vICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHQvLyAgICAgbG9nZ2VyKCkuZGVidWcoc2hlbGxEYWwucHdkKCkpXG5cdC8vICAgICBjb25zdCBjaGlsZCA9IHNoZWxsLmV4ZWMoY21kLCB7IGFzeW5jOiB0cnVlLCBzaWxlbnQ6IHRydWUgfSlcblx0Ly8gICAgIGNvbnN0IHJlc3VsdCA9IHsgc3Rkb3V0OiAnJywgc3RkZXJyOiAnJywgZXJyb3JPY2N1cnJlZDogZmFsc2UgfVxuXHQvL1xuXHQvLyAgICAgaWYgKGNoaWxkLnN0ZG91dCkge1xuXHQvLyAgICAgICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuXHQvLyAgICAgICAgIHJlc3VsdC5zdGRvdXQgPSAocmVzdWx0LnN0ZG91dCA/PyAnJykgKyBkYXRhLnRvU3RyaW5nKClcblx0Ly8gICAgICAgfSlcblx0Ly8gICAgICAgY2hpbGQuc3Rkb3V0Lm9uKCdlbmQnLCAoKSA9PiB7XG5cdC8vICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG5cdC8vICAgICAgIH0pXG5cdC8vICAgICB9IGVsc2UgaWYgKGNoaWxkLnN0ZGVycikge1xuXHQvLyAgICAgICBjaGlsZC5zdGRlcnIub24oJ2VuZCcsICgpID0+IHtcblx0Ly8gICAgICAgICByZXNvbHZlKHJlc3VsdClcblx0Ly8gICAgICAgfSlcblx0Ly8gICAgIH1cblx0Ly9cblx0Ly8gICAgIGlmIChjaGlsZC5zdGRlcnIpIHtcblx0Ly8gICAgICAgY2hpbGQuc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcblx0Ly8gICAgICAgICByZXN1bHQuc3RkZXJyID0gKHJlc3VsdC5zdGRlcnIgPz8gJycpICsgZGF0YS50b1N0cmluZygpXG5cdC8vICAgICAgICAgcmVzdWx0LmVycm9yT2NjdXJyZWQgPSAoY2hpbGQuZXhpdENvZGUgPz8gMCkgIT09IDBcblx0Ly8gICAgICAgfSlcblx0Ly8gICAgIH1cblx0Ly8gICB9KSxcblx0ZXhlYzogKGNtZDogc3RyaW5nKTogUHJvbWlzZTxFeGVjUmVzdWx0PiA9PlxuXHRcdG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRsb2dnZXIoKS5kZWJ1ZyhzaGVsbERhbC5wd2QoKSlcblx0XHRcdHNoZWxsLmV4ZWMoY21kLCB7IHNpbGVudDogdHJ1ZSB9LCAoY29kZSwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcblx0XHRcdFx0Y29uc3QgZXJyb3JPY2N1cnJlZCA9IGNvZGUgIT09IDBcblxuXHRcdFx0XHRyZXNvbHZlKHsgZXJyb3JPY2N1cnJlZCwgc3RkZXJyLCBzdGRvdXQgfSlcblx0XHRcdH0pXG5cdFx0fSksXG5cdHByaW50OiAobWVzc2FnZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0c2hlbGwuZWNobyhtZXNzYWdlKVxuXHR9LFxuXHRwd2Q6ICgpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBzaGVsbC5wd2QoKVxuXHR9LFxufVxuIl19