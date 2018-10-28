import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInboxElement
 * @class IconBaselineInboxElement
 * @extends {AoflElement}
 */
class IconBaselineInboxElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInboxElement.is, IconBaselineInboxElement);

export default IconBaselineInboxElement;
