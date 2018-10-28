import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddToQueueElement
 * @class IconBaselineAddToQueueElement
 * @extends {AoflElement}
 */
class IconBaselineAddToQueueElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddToQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-to-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddToQueueElement.is, IconBaselineAddToQueueElement);

export default IconBaselineAddToQueueElement;
