import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMessageElement
 * @class IconBaselineMessageElement
 * @extends {AoflElement}
 */
class IconBaselineMessageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMessageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-message';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMessageElement.is, IconBaselineMessageElement);

export default IconBaselineMessageElement;
