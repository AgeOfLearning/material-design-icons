import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpQueueElement
 * @class IconSharpQueueElement
 * @extends {AoflElement}
 */
class IconSharpQueueElement extends AoflElement {
  /**
   * Creates an instance of IconSharpQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpQueueElement.is, IconSharpQueueElement);

export default IconSharpQueueElement;
