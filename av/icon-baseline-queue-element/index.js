import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineQueueElement
 * @class IconBaselineQueueElement
 * @extends {AoflElement}
 */
class IconBaselineQueueElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineQueueElement.is, IconBaselineQueueElement);

export default IconBaselineQueueElement;
