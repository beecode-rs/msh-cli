import shell from 'shelljs';
import { logger } from '../util/logger.js';
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
            return resolve({ errorOccurred, stderr, stdout });
        });
    }),
    print: (message) => {
        shell.echo(message);
    },
    pwd: () => {
        return shell.pwd();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlbGwtZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhbC9zaGVsbC1kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFBO0FBRTNCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQVF6QyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUc7SUFDdkIsRUFBRSxFQUFFLENBQUMsR0FBVyxFQUFRLEVBQUU7UUFDekIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFDRCw4Q0FBOEM7SUFDOUMsdUNBQXVDO0lBQ3ZDLHFDQUFxQztJQUNyQyxtRUFBbUU7SUFDbkUsc0VBQXNFO0lBQ3RFLEVBQUU7SUFDRiwwQkFBMEI7SUFDMUIsNENBQTRDO0lBQzVDLGtFQUFrRTtJQUNsRSxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFFBQVE7SUFDUixFQUFFO0lBQ0YsMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1QyxrRUFBa0U7SUFDbEUsNkRBQTZEO0lBQzdELFdBQVc7SUFDWCxRQUFRO0lBQ1IsUUFBUTtJQUNSLElBQUksRUFBRSxDQUFDLEdBQVcsRUFBdUIsRUFBRSxDQUMxQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3ZCLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDMUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQTtZQUVoQyxPQUFPLE9BQU8sQ0FBQyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUNsRCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQztJQUNILEtBQUssRUFBRSxDQUFDLE9BQWUsRUFBUSxFQUFFO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDcEIsQ0FBQztJQUNELEdBQUcsRUFBRSxHQUFXLEVBQUU7UUFDakIsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDbkIsQ0FBQztDQUNELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hlbGwgZnJvbSAnc2hlbGxqcydcblxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnI3NyYy91dGlsL2xvZ2dlcidcblxuZXhwb3J0IHR5cGUgRXhlY1Jlc3VsdCA9IHtcblx0c3Rkb3V0OiBzdHJpbmdcblx0c3RkZXJyOiBzdHJpbmdcblx0ZXJyb3JPY2N1cnJlZDogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3Qgc2hlbGxEYWwgPSB7XG5cdGNkOiAoZGlyOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRzaGVsbC5jZChkaXIpXG5cdH0sXG5cdC8vIGV4ZWM6IChjbWQ6IHN0cmluZyk6IFByb21pc2U8RXhlY1Jlc3VsdD4gPT5cblx0Ly8gICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdC8vICAgICBsb2dnZXIoKS5kZWJ1ZyhzaGVsbERhbC5wd2QoKSlcblx0Ly8gICAgIGNvbnN0IGNoaWxkID0gc2hlbGwuZXhlYyhjbWQsIHsgYXN5bmM6IHRydWUsIHNpbGVudDogdHJ1ZSB9KVxuXHQvLyAgICAgY29uc3QgcmVzdWx0ID0geyBzdGRvdXQ6ICcnLCBzdGRlcnI6ICcnLCBlcnJvck9jY3VycmVkOiBmYWxzZSB9XG5cdC8vXG5cdC8vICAgICBpZiAoY2hpbGQuc3Rkb3V0KSB7XG5cdC8vICAgICAgIGNoaWxkLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG5cdC8vICAgICAgICAgcmVzdWx0LnN0ZG91dCA9IChyZXN1bHQuc3Rkb3V0ID8/ICcnKSArIGRhdGEudG9TdHJpbmcoKVxuXHQvLyAgICAgICB9KVxuXHQvLyAgICAgICBjaGlsZC5zdGRvdXQub24oJ2VuZCcsICgpID0+IHtcblx0Ly8gICAgICAgICByZXNvbHZlKHJlc3VsdClcblx0Ly8gICAgICAgfSlcblx0Ly8gICAgIH0gZWxzZSBpZiAoY2hpbGQuc3RkZXJyKSB7XG5cdC8vICAgICAgIGNoaWxkLnN0ZGVyci5vbignZW5kJywgKCkgPT4ge1xuXHQvLyAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuXHQvLyAgICAgICB9KVxuXHQvLyAgICAgfVxuXHQvL1xuXHQvLyAgICAgaWYgKGNoaWxkLnN0ZGVycikge1xuXHQvLyAgICAgICBjaGlsZC5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuXHQvLyAgICAgICAgIHJlc3VsdC5zdGRlcnIgPSAocmVzdWx0LnN0ZGVyciA/PyAnJykgKyBkYXRhLnRvU3RyaW5nKClcblx0Ly8gICAgICAgICByZXN1bHQuZXJyb3JPY2N1cnJlZCA9IChjaGlsZC5leGl0Q29kZSA/PyAwKSAhPT0gMFxuXHQvLyAgICAgICB9KVxuXHQvLyAgICAgfVxuXHQvLyAgIH0pLFxuXHRleGVjOiAoY21kOiBzdHJpbmcpOiBQcm9taXNlPEV4ZWNSZXN1bHQ+ID0+XG5cdFx0bmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGxvZ2dlcigpLmRlYnVnKHNoZWxsRGFsLnB3ZCgpKVxuXHRcdFx0c2hlbGwuZXhlYyhjbWQsIHsgc2lsZW50OiB0cnVlIH0sIChjb2RlLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuXHRcdFx0XHRjb25zdCBlcnJvck9jY3VycmVkID0gY29kZSAhPT0gMFxuXG5cdFx0XHRcdHJldHVybiByZXNvbHZlKHsgZXJyb3JPY2N1cnJlZCwgc3RkZXJyLCBzdGRvdXQgfSlcblx0XHRcdH0pXG5cdFx0fSksXG5cdHByaW50OiAobWVzc2FnZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0c2hlbGwuZWNobyhtZXNzYWdlKVxuXHR9LFxuXHRwd2Q6ICgpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBzaGVsbC5wd2QoKVxuXHR9LFxufVxuIl19