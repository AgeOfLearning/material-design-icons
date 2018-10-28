import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundQueueElement
 * @class IconRoundQueueElement
 * @extends {AoflElement}
 */
class IconRoundQueueElement extends AoflElement {
  /**
   * Creates an instance of IconRoundQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundQueueElement.is, IconRoundQueueElement);

export default IconRoundQueueElement;
