import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundQueuePlayNextElement
 * @class IconRoundQueuePlayNextElement
 * @extends {AoflElement}
 */
class IconRoundQueuePlayNextElement extends AoflElement {
  /**
   * Creates an instance of IconRoundQueuePlayNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-queue-play-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundQueuePlayNextElement.is, IconRoundQueuePlayNextElement);

export default IconRoundQueuePlayNextElement;
