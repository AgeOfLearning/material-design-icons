import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddToQueueElement
 * @class IconRoundAddToQueueElement
 * @extends {AoflElement}
 */
class IconRoundAddToQueueElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddToQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-to-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddToQueueElement.is, IconRoundAddToQueueElement);

export default IconRoundAddToQueueElement;
