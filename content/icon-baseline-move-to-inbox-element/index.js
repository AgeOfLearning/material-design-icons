import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMoveToInboxElement
 * @class IconBaselineMoveToInboxElement
 * @extends {AoflElement}
 */
class IconBaselineMoveToInboxElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMoveToInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-move-to-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMoveToInboxElement.is, IconBaselineMoveToInboxElement);

export default IconBaselineMoveToInboxElement;
