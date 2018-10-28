import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccountBoxElement
 * @class IconBaselineAccountBoxElement
 * @extends {AoflElement}
 */
class IconBaselineAccountBoxElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccountBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-account-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccountBoxElement.is, IconBaselineAccountBoxElement);

export default IconBaselineAccountBoxElement;
