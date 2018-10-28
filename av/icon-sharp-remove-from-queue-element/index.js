import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRemoveFromQueueElement
 * @class IconSharpRemoveFromQueueElement
 * @extends {AoflElement}
 */
class IconSharpRemoveFromQueueElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRemoveFromQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-remove-from-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRemoveFromQueueElement.is, IconSharpRemoveFromQueueElement);

export default IconSharpRemoveFromQueueElement;
