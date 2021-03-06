"use strict";
/**
 * Created by user on 2018/3/18/018.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function fixToc(epub) {
    let manifest_keys = Object.keys(epub.manifest);
    if (!epub.toc.length) {
        epub.toc = Object.values(epub.manifest).filter(node => {
            if (['text/css', 'application/x-dtbncx+xml'].includes(node.mediaType)
                || /^(image)/.test(node.mediaType)) {
                return false;
            }
            return true;
        });
        return epub;
    }
    epub.toc.forEach(function (toc, idx) {
        if (!epub.manifest[toc.id]) {
            for (let k of manifest_keys) {
                let row = epub.manifest[k];
                if ((row.href == toc.href) || (row.href.replace(/#.+$/g, '') == toc.href.replace(/#.+$/g, ''))) {
                    toc.id = k;
                }
            }
        }
    });
    return epub;
}
exports.fixToc = fixToc;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7QUFLSCxTQUFnQixNQUFNLENBQUMsSUFBb0I7SUFFMUMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUNwQjtRQUNDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRXJELElBQ0MsQ0FBQyxVQUFVLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzttQkFDOUQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBRW5DO2dCQUNDLE9BQU8sS0FBSyxDQUFDO2FBQ2I7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7S0FDWjtJQUVELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUc7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUMxQjtZQUNDLEtBQUssSUFBSSxDQUFDLElBQUksYUFBYSxFQUMzQjtnQkFDQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQzlGO29CQUNDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNYO2FBQ0Q7U0FDRDtJQUNGLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDO0FBdkNELHdCQXVDQztBQUVELGtCQUFlLE9BQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzMvMTgvMDE4LlxuICovXG5cbmltcG9ydCBFUHViIGZyb20gJy4uL2luZGV4JztcbmltcG9ydCBsaWJFUHViID0gcmVxdWlyZSgnLi4vZXB1YicpO1xuXG5leHBvcnQgZnVuY3Rpb24gZml4VG9jKGVwdWI6IEVQdWIgfCBsaWJFUHViKVxue1xuXHRsZXQgbWFuaWZlc3Rfa2V5cyA9IE9iamVjdC5rZXlzKGVwdWIubWFuaWZlc3QpO1xuXG5cdGlmICghZXB1Yi50b2MubGVuZ3RoKVxuXHR7XG5cdFx0ZXB1Yi50b2MgPSBPYmplY3QudmFsdWVzKGVwdWIubWFuaWZlc3QpLmZpbHRlcihub2RlID0+IHtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRbJ3RleHQvY3NzJywgJ2FwcGxpY2F0aW9uL3gtZHRibmN4K3htbCddLmluY2x1ZGVzKG5vZGUubWVkaWFUeXBlKVxuXHRcdFx0XHR8fCAvXihpbWFnZSkvLnRlc3Qobm9kZS5tZWRpYVR5cGUpXG5cdFx0XHQpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZXB1Yjtcblx0fVxuXG5cdGVwdWIudG9jLmZvckVhY2goZnVuY3Rpb24gKHRvYywgaWR4KVxuXHR7XG5cdFx0aWYgKCFlcHViLm1hbmlmZXN0W3RvYy5pZF0pXG5cdFx0e1xuXHRcdFx0Zm9yIChsZXQgayBvZiBtYW5pZmVzdF9rZXlzKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgcm93ID0gZXB1Yi5tYW5pZmVzdFtrXTtcblxuXHRcdFx0XHRpZiAoKHJvdy5ocmVmID09IHRvYy5ocmVmKSB8fCAocm93LmhyZWYucmVwbGFjZSgvIy4rJC9nLCAnJykgPT0gdG9jLmhyZWYucmVwbGFjZSgvIy4rJC9nLCAnJykpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dG9jLmlkID0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGVwdWI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi90b2MnKTtcbiJdfQ==