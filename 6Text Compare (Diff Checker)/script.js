document.addEventListener('DOMContentLoaded', function () {
    const textA = document.getElementById('text-a');
    const textB = document.getElementById('text-b');
    const compareBtn = document.getElementById('compare-btn');
    const clearBtn = document.getElementById('clear-btn');
    const diffOutput = document.getElementById('diff-output');

    compareBtn.addEventListener('click', () => {
        const str1 = textA.value;
        const str2 = textB.value;

        const diff = Diff.diffChars(str1, str2);
        let result = '';

        diff.forEach((part) => {
            const color = part.added ? 'ins' : part.removed ? 'del' : 'span';
            result += `<${color}>${escapeHTML(part.value)}</${color}>`;
        });

        diffOutput.innerHTML = result;
    });

    clearBtn.addEventListener('click', () => {
        textA.value = '';
        textB.value = '';
        diffOutput.innerHTML = '';
    });

    function escapeHTML(str) {
        return str.replace(/[&<>" ']/g, function (m) {
            switch (m) {
                case '&':
                    return '&amp;';
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '"':
                    return '&quot;';
                default:
                    return '&#039;';
            }
        });
    }
});
