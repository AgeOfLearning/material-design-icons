import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccountCircleElement
 * @class IconBaselineAccountCircleElement
 * @extends {AoflElement}
 */
class IconBaselineAccountCircleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccountCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-account-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccountCircleElement.is, IconBaselineAccountCircleElement);

export default IconBaselineAccountCircleElement;
