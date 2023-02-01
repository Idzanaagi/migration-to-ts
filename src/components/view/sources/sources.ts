import './sources.css';
import { Source } from '../../../types/index';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLElement;

        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item: { name: string | null; id: string }) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true);
                if (sourceClone instanceof DocumentFragment) {
                    const sourseItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
                    sourseItemName.textContent = item.name;

                    const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
                    sourceItem.setAttribute('data-source-id', item.id);

                    fragment.append(sourceClone);
                }
            });
        }
        const sources = document.querySelector('.sources') as HTMLElement;
        sources.append(fragment);
    }
}

export default Sources;
