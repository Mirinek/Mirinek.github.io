<script lang="ts">
	import ActionWindow from '$lib/ActionWindow.svelte';
	import TaskBar from '$lib/TaskBar.svelte';
	import Icon from '$lib/Icon.svelte';
	import SysMenu from '$lib/SysMenu.svelte';
	import { _, json } from 'svelte-i18n';
	import {} from '$lib/locales/i18n';

	let content = [
		{
			id: 'contact',
			dskIco: 'images/contact_icon.png'
		},
		{
			id: 'experience',
			dskIco: 'images/experience_icon.png'
		},
		{
			id: 'projects',
			dskIco: 'images/projects_icon.png'
		},
		{
			id: 'certs',
			dskIco: 'images/certifications_icon.png'
		},
		{
			id: 'readme',
			dskIco: 'images/readme_icon.png'
		}
	];
	if (window.location === window.parent.location) {
		content.push({
			id: 'vm',
			dskIco: 'images/pc_icon.png'
		});
	}

	function drag_select(e: MouseEvent) {
		if (
			e.target instanceof HTMLElement &&
			(e.target.tagName === 'BODY' || e.target.tagName === 'HTML')
		) {
			let selection = document.createElement('div');
			selection.classList.add('selection-box');
			selection.style.left = e.clientX + 'px';
			selection.style.top = e.clientY + 'px';
			document.body.appendChild(selection);

			let startX = e.clientX;
			let startY = e.clientY;

			function onMouseMove(e: MouseEvent) {
				let currentX = e.clientX;
				let currentY = e.clientY;

				let width = Math.abs(currentX - startX);
				let height = Math.abs(currentY - startY);

				selection.style.width = width + 'px';
				selection.style.height = height + 'px';

				selection.style.left = Math.min(currentX, startX) + 'px';
				selection.style.top = Math.min(currentY, startY) + 'px';
			}

			function onMouseUp() {
				document.body.removeChild(selection);
				window.removeEventListener('mousemove', onMouseMove);
				window.removeEventListener('mouseup', onMouseUp);
			}

			window.addEventListener('mousemove', onMouseMove);
			window.addEventListener('mouseup', onMouseUp);
			// set all elements within the selection box to be 'hovered', based on their position
			const elements = document.elementsFromPoint(e.clientX, e.clientY);
			elements.forEach((el) => {
				if (el instanceof HTMLElement) {
					el.classList.add('hovered');
				}
			});
		}
	}
	// give the body an event listener for mouse down to start the drag select
	window.document.body.addEventListener('mousedown', drag_select);
</script>

{#each content as item}
	<Icon
		src={item.dskIco}
		alt={$_(`${item.id}.title`)}
		title={$_(`${item.id}.title`)}
		windowId={item.id}
	></Icon>
{/each}

{#each content as item}
	<ActionWindow
		title={$_(`${item.id}.title`)}
		icon={item.dskIco}
		id={item.id}
		articles={$json(`${item.id}.articles`)}
	></ActionWindow>
{/each}
<SysMenu></SysMenu>
<TaskBar apps={content}></TaskBar>
