import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddToQueueElement
 * @class IconSharpAddToQueueElement
 * @extends {AoflElement}
 */
class IconSharpAddToQueueElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddToQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-to-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddToQueueElement.is, IconSharpAddToQueueElement);

export default IconSharpAddToQueueElement;
