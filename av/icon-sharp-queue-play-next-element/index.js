import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpQueuePlayNextElement
 * @class IconSharpQueuePlayNextElement
 * @extends {AoflElement}
 */
class IconSharpQueuePlayNextElement extends AoflElement {
  /**
   * Creates an instance of IconSharpQueuePlayNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-queue-play-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpQueuePlayNextElement.is, IconSharpQueuePlayNextElement);

export default IconSharpQueuePlayNextElement;
