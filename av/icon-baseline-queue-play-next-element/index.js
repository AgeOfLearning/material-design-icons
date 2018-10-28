import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineQueuePlayNextElement
 * @class IconBaselineQueuePlayNextElement
 * @extends {AoflElement}
 */
class IconBaselineQueuePlayNextElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineQueuePlayNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-queue-play-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineQueuePlayNextElement.is, IconBaselineQueuePlayNextElement);

export default IconBaselineQueuePlayNextElement;
