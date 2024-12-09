[window.alert, window.prompt, window.confirm] = [window.confirm, window.alert, window.prompt];

alert('Alert - Confirm');
prompt('Prompt - Alert');
confirm('Confirm - Prompt');