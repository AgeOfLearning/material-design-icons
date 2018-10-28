import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAllInboxElement
 * @class IconBaselineAllInboxElement
 * @extends {AoflElement}
 */
class IconBaselineAllInboxElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAllInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-all-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAllInboxElement.is, IconBaselineAllInboxElement);

export default IconBaselineAllInboxElement;
